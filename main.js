const firebaseConfig = {
    apiKey: "AIzaSyBFwrNNgLWCZSkUGgKaDXeOY5Vem13uQfg",
    databaseURL: "https://aflfantasypod-default-rtdb.firebaseio.com",
    projectId: "aflfantasypod",
    appId: "1:141895384483:web:565271ffa59bb56b45ae16"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Global variables to store user inputs
let numPlayersPerTeam;
let chosenConfig;
let numTeams;
let userDraftPosition;
let draftType;
let userTeam;
let currentPickNumber = 0;
let pickLog = [{"pick":"", "name":"", "position":""}];
let ADP = new Array;
let computerTeams = new Array;
let availablePlayers = new Array;
let allTeams = new Array;
class Player {
    constructor(id, name, positions, rank, fantasy_average, team, dob, career_average, adp) {
        this.player_id = id;
        this.name = name;
        this.positions = positions;
        this.rank = rank;
        this.fantasy_average = fantasy_average;
        this.team = team; // The team the player belongs to
        this.currentPosition = positions[0]; // Default to the first position
        this.dob = dob;
        this.career_average = career_average;
        this.rankADP = adp;
    }
}
    
class Team {
    constructor(teamSize, config) {
        this.teamSize = teamSize;
        this.config = config;
        this.maxPlayers = {
            'DEF': this.config['DEF'],
            'MID': this.config['MID'],
            'FWD': this.config['FWD'],
            'RUC': this.config['RUC'],
            'BEN': Infinity // Represents float('inf') in Python
        };

        // Initialize the players dictionary with empty arrays for each position
        this.players = {
            'DEF': [],
            'MID': [],
            'FWD': [],
            'RUC': [],
            'BEN': []
        };
    }
    
    addPlayer(player, position) {
        // Check if team is full
        const totalPlayers = Object.values(this.players).flat().length;
        if (totalPlayers >= this.teamSize) {
            console.log("DEBUG: Team is considered full by size.");
            return false;
        }

        // Check if the player is already in the team
        for (const positionPlayers of Object.values(this.players)) {
            if (positionPlayers.includes(player)) {
                console.log(`DEBUG: ${player.name} is already in the team.`);
                return false;
            }
        }

        // Determine available positions for the player
        const availablePositions = player.positions.filter(position => this.players[position].length < this.maxPlayers[position]);
        const availablePositionsSrting = availablePositions.toString();
        const chosenPosition = position;

        if (availablePositions.length === 1 && availablePositionsSrting !== chosenPosition) {
            showAlertModal(`${chosenPosition} position is full, adding ${player.name} to ${availablePositionsSrting}`);
            this.players[availablePositionsSrting].push(player);
            displayAllFinalTeams();
            return true;
        } else if (availablePositions.length > 0) {
            this.players[chosenPosition].push(player);
            displayAllFinalTeams();
            return true;
        } else {
            showAlertModal(`${chosenPosition} position is full, adding ${player.name} to Bench`);
            this.players['BEN'].push(player);
            displayAllFinalTeams();
            return true;
        }
    }

    // Add a player to the bench if there is space and they are not already on the team
    addPlayerToBench(player) {
        const isPlayerInTeam = Object.values(this.players).some(playerList => playerList.includes(player));
        if (isPlayerInTeam) {
            return false; // Player is already in the team, don't add to the bench
        }
        if (this.players['BEN'].length < this.maxPlayers['BEN']) {
            this.players['BEN'].push(player);
            return true;
        }
        return false;
    }

    totalPlayers() {
        return Object.values(this.players).reduce((total, playerList) => total + playerList.length, 0);
    }
    
    // Calculate the maximum number of players allowed in the team
    totalMaxPlayers() {
        return Object.values(this.maxPlayers).reduce((total, max) => total + max, 0);
    }
    
    // Calculate the total number of players needed for the team
    totalPlayersNeeded() {
        return Object.entries(this.maxPlayers).reduce((needed, [position, max]) => {
            return needed + (max - this.players[position].length);
        }, 0);
    }
    
    // Check if the team is full
    isFull() {
        const totalPlayers = this.totalPlayers();
        return totalPlayers >= this.teamSize;
    }
}

async function startDraftSimulation() {
    const myTeamTab = document.getElementById("myTeam");
    const newText = `My Team ${chosenConfig.DEF}-${chosenConfig.MID}-${chosenConfig.RUC}-${chosenConfig.FWD}`;
    myTeamTab.querySelector("h3").textContent = newText;

    const playersButton = document.getElementById('playersButton');
    playersButton.click();

    const players = await setupDraft();
    createSelectPlayerTable(players);
    displayAllFinalTeams();
    proceedToNextDraftRound(0);
}

// Set the number of players per team
function setNumPlayersPerTeam() {
    numPlayersPerTeam = document.getElementById('numPlayersPerTeam').value;
    showElements(['numTeamsSection']);
    checkAllInputsSet();
}

// Set the chosen configuration
function selectConfiguration(configNumber, minPlayers) {
    console.log("selectConfiguration called with configNumber:", configNumber);

    const positionConfigurations = {
        1: { DEF: 2, MID: 3, RUC: 1, FWD: 2 },
        2: { DEF: 5, MID: 7, RUC: 1, FWD: 5 },
        3: { DEF: 6, MID: 8, RUC: 2, FWD: 6 }
    };

    chosenConfig = positionConfigurations[configNumber];
    console.log("Chosen configuration:", chosenConfig);

    document.getElementById('numPlayersPerTeam').min = minPlayers;
    document.getElementById('numPlayersPerTeam').value = minPlayers;

    showElements(["numPlayersPerTeamSection"]);
    checkAllInputsSet();
}

// Set the number of teams
function setNumTeams() {
    numTeams = document.getElementById('numTeams').value;
    showElements(["userDraftPositionSection"]);
    checkAllInputsSet();
}

// Set the user's draft position
function setUserDraftPosition() {
    userDraftPosition = document.getElementById('userDraftPosition').value;

    userTeam = new Team(numPlayersPerTeam, chosenConfig);

    for (let i = 0; i < numTeams - 1; i++) {
        computerTeams.push(new Team(numPlayersPerTeam, chosenConfig));
    }

    for (let i = 0; i < numTeams; i++) {
        if (i === userDraftPosition - 1) {
            allTeams.push(userTeam);
        } else {
            allTeams.push(computerTeams.shift());
        }
    }

    showElements(['draftTypeSection']);
    checkAllInputsSet();
}

// Function to set the draft type
function setDraftType() {
    if (document.getElementById('snake').checked) {
        draftType = 'snake';
    } else if (document.getElementById('linear').checked) {
        draftType = 'linear';
    } else {
        return showAlertModal('Please select a draft type.')
    }

    checkAllInputsSet();
}

function checkAllInputsSet() {
    if (numPlayersPerTeam && chosenConfig && numTeams && userDraftPosition && draftType) {
        document.getElementById('startDraftButton').disabled = false;
        showElements(["startDraftButton"]);
    } else {
        document.getElementById('startDraftButton').disabled = true;
    }
}

async function setupDraft() {
    let res;

    try {
        res = await getADP(true);
    } catch (error) {
        console.error('Error fetching ADP:', error.message);
        res = players;
    }

    function calculatePercentileRank(value, array) {
        const sortedArray = array.slice().sort((a, b) => a - b);
        const index = sortedArray.indexOf(value);
        return index / (sortedArray.length - 1);
    }

    const playersByADP = players.map(player => {
        const correspondingRes = Array.isArray(res) ? res.find(resPlayer => resPlayer.player_id === player.player_id) : null;

        if (correspondingRes) {
            const percentileRank = calculatePercentileRank(correspondingRes.adp, res.map(p => p.adp));
            player.rankADP = Math.ceil(percentileRank * 100);
        }

        return player;
    });

    const playerObjects = await Promise.all(playersByADP.map(async (playerData) => {
        if (playerData?.career_avg === undefined) {
            console.log("Career average is undefined for player:", playerData);
        }
    
        return new Player(
            playerData.player_id,
            playerData.name,
            playerData.positions,
            playerData.rank,
            playerData.fantasy_average,
            playerData.team,
            playerData.dob,
            playerData.career_avg,
            playerData.rankADP
        );
    }));

    availablePlayers = playerObjects;
    return playerObjects;
}

async function createSelectPlayerTable(availablePlayers, flag) {
    const adpData = await getADP(true);

    // Custom sorting function to handle "N/A" in ADP column
    $.fn.dataTable.ext.type.order['adp-sort-pre'] = function (data) {
        return data === 'N/A' ? 99999 : parseFloat(data);
    };

    const selectPlayerTable = $('#selectPlayerTable').DataTable({
        retrieve: true,
        sort: true,
        searching: true,
        paging: false,
        lengthChange: false,
        info: false,
        order: [[3, 'desc']],
        columnDefs: [
            { targets: [0], title: "Players" },
            { targets: [1], title: "Position(s)" },
            { targets: [2], title: "Age" },
            { targets: [3], title: "'23 Avg'" },
            { 
                targets: [4], 
                title: "ADP",
                type: "adp-sort" // Use the custom sorting type for ADP
            },
            { targets: [5], title: "PlayerId", visible: false },
        ],
    });

    selectPlayerTable.clear();

    availablePlayers.forEach(player => {
        const playerAdp = adpData.find(p => p.player_id === player.player_id)?.adp || 'N/A';
        selectPlayerTable.row.add([
            player.name,
            player.positions.join(', '),
            calculateAge(player.dob),
            player.fantasy_average,
            playerAdp, // Add the ADP here
            player.player_id
        ]);
    });

    selectPlayerTable.draw();

    // Add event listener for the position filter
    $('#positionFilter').on('change', function() {
        var searchTerm = this.value ? this.value : '';
        selectPlayerTable.column(1).search(searchTerm).draw();
    });

    if (flag) {
        return null;
    } else {
        return new Promise((resolve) => {
            $('#selectPlayerTable tbody').on('click', 'tr', function () {
                const rowData = selectPlayerTable.row(this).data();
                const playerId = rowData[5];
                const selectedPlayer = availablePlayers.find(player => player.player_id === playerId);
                resolve(selectedPlayer);
            });
        });
    }

    function calculateAge(birthdateString) {
        const birthdate = new Date(birthdateString);
        const today = new Date();
        const ageInMilliseconds = today - birthdate;
        const ageInYears = Math.floor(ageInMilliseconds / 31536000000); // Approximate milliseconds in a year
        return ageInYears;
    }
}


async function proceedToNextDraftRound(roundNumber) {
    // Check if the draft is over
    if (roundNumber >= numPlayersPerTeam) {
        createSelectPlayerTable(availablePlayers, true);
        displayAllFinalTeams();
        writeADP();

        return document.getElementById('currentPickSelection').textContent = `Draft is complete`;
    }

    let user = false;
    let picksCompleted = 0;
    
    for (let i = 0; i < allTeams.length; i++) {
        let teamIndex = (draftType === 'snake' && roundNumber % 2 === 1) ? allTeams.length - 1 - i : i;
        let draftingTeam = allTeams[teamIndex];

        if (draftingTeam === userTeam) {
            document.getElementById('currentPickSelection').textContent = `CURRENT PICK: Pick ${currentPickNumber + 1}`;
            console.log("User's turn to pick.");

            while (!user) {
                const selectedPlayer = await createSelectPlayerTable(availablePlayers);
                try {
                    await userPickPlayer(selectedPlayer);
                } catch {
                    return false;
                }

                removeFromAvailablePlayers(availablePlayers, selectedPlayer);

                pickLog.push({
                    "pick": currentPickNumber,
                    "name": selectedPlayer.name,
                    "position": selectedPlayer.currentPosition,
                    "team": "User Team"
                });

                updatePickLog(pickLog);
                addToADP(selectedPlayer, currentPickNumber);
                
                user = true;
                picksCompleted++;
            }
        } else {
            // Computer's turn to pick
            const selectedPlayer = draftComputerPlayer(availablePlayers, draftingTeam);
            if (selectedPlayer.player) {
                removeFromAvailablePlayers(availablePlayers, selectedPlayer.player);

                pickLog.push({
                    "pick": currentPickNumber,
                    "name": selectedPlayer.player.name,
                    "position": selectedPlayer.player.currentPosition,
                    "team": `CPU Team ${teamIndex}`
                });

                updatePickLog(pickLog);
                addToADP(selectedPlayer.player, currentPickNumber);
                displayAllFinalTeams();
                picksCompleted++;

                console.log(`Team ${teamIndex + 1} (computer) picked ${selectedPlayer.player.name}.`);
            }
        }
    };
    
    await waitForAllPicks();
    proceedToNextDraftRound(roundNumber + 1);
    
    function waitForAllPicks() {
        return new Promise(resolve => {
            const checkPicksCompleted = () => {
                if (picksCompleted === allTeams.length) {
                    resolve();
                } else {
                    setTimeout(checkPicksCompleted, 100);
                }
            };
            checkPicksCompleted();
        });
    }

    function addToADP(player, pick) {
        const newPlayerObject = {
            "player_id": player.player_id,
            "name": player.name,
            "positions": player.positions,
            "pick": pick,
        };
          
        ADP.push(newPlayerObject);
    }

    function removeFromAvailablePlayers(availablePlayers, player) {
        const index = availablePlayers.indexOf(player);

        if (index > -1) {
            availablePlayers.splice(index, 1);
            currentPickNumber++
        }
    }
    
    async function userPickPlayer(player) {
        return new Promise(resolve => {
            const options = player.positions;
    
            if (options.length > 1) {
                document.getElementById("positionSelectionModal").style.display = 'block';
                const selectPlayerPosition = document.getElementById("selectPlayerPosition");
                selectPlayerPosition.innerHTML = `Select Position - ${player.name}`;
    
                const positionButtons = document.getElementById("positionButtons");
                positionButtons.innerHTML = '';
    
                options.forEach(option => {
                    const button = document.createElement("button");
                    button.textContent = option;
                    button.classList.add("button-1");
                    button.addEventListener("click", function () {
                        if (options.includes(option)) {
                            document.getElementById("positionSelectionModal").style.display = 'none';
                            const addedToTeam = userTeam.addPlayer(player, option);
    
                            if (addedToTeam) {
                                console.log(`${player.name} has been drafted to your team at position ${option}.`);
                                resolve(player);
                            } else {
                                showAlertModal(`Unable to draft ${player.name}. Your team may be full.`);
                                userPickPlayer(player).then(resolve);
                            }
                        }
                    });
    
                    positionButtons.appendChild(button);
                });
            } else {
                const addedToTeam = userTeam.addPlayer(player, player.positions[0]);
    
                if (addedToTeam) {
                    console.log(`${player.name} has been drafted to your team at position ${player.positions[0]}.`);
                    resolve(player);
                } else {
                    showAlertModal(`Unable to draft ${player.name}. Your team may be full.`);
                    userPickPlayer(player).then(resolve);
                }
            }
        });
    }

    function writeADP() {
        const adpRef = firebase.database().ref('X-ADP');
        const newDraftId = adpRef.push().key;
        const adpData = {
          [newDraftId]: ADP,
        };
      
        adpRef.update(adpData)
        .then(() => {
            console.log(`ADP array written to X-ADP with draftId: ${newDraftId}`);
        })
        .catch((error) => {
            console.error('Error writing ADP array:', error);
        });
    }
}

function draftComputerPlayer(availablePlayers, team) {
    console.log("Computer is making a draft pick...");

    let positionNeeds = {};
    for (const position in team.maxPlayers) {
        positionNeeds[position] = team.maxPlayers[position] - team.players[position].length;
    }

    // Exclude bench for now to fill on-field positions first
    let unfilledPositions = {};
    for (const position in positionNeeds) {
        if (position !== 'BEN' && positionNeeds[position] > 0) {
            unfilledPositions[position] = positionNeeds[position];
        }
    }

    let playerScores = [];
    availablePlayers.forEach(player => {
        let preferredPosition = null;

        // Check for dual-position players
        if (player.positions.length > 1 && player.positions.includes('MID')) {
            for (const position of player.positions) {
                if (position !== 'MID' && unfilledPositions[position]) {
                    preferredPosition = position;
                    break;
                }
            }
        }

        // Calculate score
        (preferredPosition ? [preferredPosition] : player.positions).forEach(position => {
            if (unfilledPositions[position]) {
                const rankScore = (1 / player.rank) * 0.75;
                const positionalNeedScore = (unfilledPositions[position] / team.maxPlayers[position]) * 0.25;
                let score = rankScore + positionalNeedScore;

                // Find player
                const fantasyPlayer = players.find(fantasyPlayer => fantasyPlayer.player_id === player.player_id);
                const dob = new Date(fantasyPlayer.dob);
                const today = new Date();
                const age = today.getFullYear() - dob.getFullYear();

                // Adjust for user selection ADP
                score += (1 / player.rankADP) * 0.01;

                // Adjust age-related score
                if (fantasyPlayer && age >= 30) {
                    score *= 0.95;
                }

                // Compare with career average
                if (fantasyPlayer && fantasyPlayer.career_avg) {
                    const careerAvg = fantasyPlayer.career_avg;
                    const playerAvg = player.fantasy_average;

                    // Adjust score based on career average comparison
                    if (playerAvg > careerAvg) {
                        score *= 1.0; // Adjust the increase factor as needed
                    }
                }

                playerScores.push({ score, player, position });
            }
        });
    });
    
    // Sort players by score & randomize the order if scores are equal
    playerScores.sort((a, b) => {
        if (b.score === a.score) {
            return Math.random() - 0.5;
        }

        return b.score - a.score;
    });
    
    // Try to draft the best player based on the calculated score
    for (const { score, player, position } of playerScores) {
        if (positionNeeds[position] > 0) {
            player.currentPosition = position;
            team.players[position].push(player);
            console.log(`${player.name} has been drafted as a ${position}`);
            return { player, position };
        }
    }

    // Consider the bench
    if (positionNeeds['BEN'] > 0) {
        const bestBenchPlayer = availablePlayers.reduce((best, current) => 
            (1 / current.rank) > (1 / best.rank) ? current : best
        );
        bestBenchPlayer.currentPosition = 'BEN';
        team.players['BEN'].push(bestBenchPlayer);
        console.log(`${bestBenchPlayer.name} has been added to the bench`);
        return { player: bestBenchPlayer, position: 'BEN' };
    }

    return { player: null, position: null };
}

function displayAllFinalTeams() {
    var userIndex = Number(userDraftPosition) - 1;
    var positions = ['DEF', 'MID', 'FWD', 'RUC', 'BEN'];
    
    const myTeamTable = $('#myTeamTable').DataTable({
        retrieve: true,
        sort: false,
        searching: false,
        paging: false,
        lengthChange: false,
        info: false,
        columnDefs: [
            { targets: [0], title: "Position" },
            { targets: [1], title: "My Players" },
        ],
    });

    myTeamTable.clear();

    positions.forEach((position) => {
        var myRow = [position];

        allTeams.forEach((team, index) => {
            const playersInPosition = team.players[position];
            const playerNames = playersInPosition.map(player => player.name).join('<br>');

            if (index === userIndex) {
                myRow.push(playerNames);
            }
        });

        myTeamTable.row.add(myRow);
    });

    myTeamTable.draw();

    /***************************************/

    allTeams.forEach((team, index) => {
        const isUserTeam = index === userIndex;
        const teamName = isUserTeam ? 'User Team' : `CPU Team ${index}`;
    
        const tableId = 'teamTable_' + index;
        const tableContainer = $('#' + tableId);
    
        let teamTable;
    
        if (tableContainer.length === 0) {
            teamTable = $('<table>', { id: tableId }).appendTo('#allTeams').DataTable({
                retrieve: true,
                sort: false,
                searching: false,
                paging: false,
                lengthChange: false,
                info: false,
                columnDefs: [
                    { targets: [0], title: "TEAM" }, // Update here
                    { targets: [1], title: "DEF" },
                    { targets: [2], title: "MID" },
                    { targets: [3], title: "FWD" },
                    { targets: [4], title: "RUC" },
                    { targets: [5], title: "BEN" },
                ],
            });
    
            $('#allTeams').append('<br>');
        } else {
            teamTable = $('#' + tableId).DataTable();
            teamTable.clear();
        }

        var row = [teamName]; // Update here

        Object.values(team.players).forEach((position) => {
            const playerNames = position.map(player => player.name).join('<br>');
            row.push(playerNames);
        });
    
        teamTable.row.add(row).draw();

        teamTable.draw();
    });  
}

function updatePickLog(log) {
    const pickLogTable = $('#pickLogTable').DataTable({
        retrieve: true,
        searching: false,
        paging: false,
        lengthChange: false,
        info: false,
        columnDefs: [
            { targets: [0], title: "Pick" },
            { targets: [1], title: "Players" },
            { targets: [2], title: "Position" },
        ],
        // Set initial order - this will apply when the table is first initialized
        order: [[0, 'desc']]
    });

    pickLogTable.clear();

    log.forEach((player, i) => {
        if (i === 0) {
            // Skip if required based on your logic
            return true;
        } else {
            pickLogTable.row.add([player.pick, player.name, player.position]);
        }
    });

    // Reapply the order every time the table is updated
    pickLogTable.order([[0, 'desc']]).draw();
}


function showAlertModal(message) {
    const alertModal = document.getElementById('alertModal');
    const alertModalText = document.getElementsByClassName('alertModalText')[0];

    alertModalText.textContent = message;
    alertModal.style.display = 'block';

    const button = document.getElementById('alertButtonOk');
    button.addEventListener('click', function() {
        alertModal.style.display = 'none';
    });
}

function restartApp() {
    numPlayersPerTeam = undefined;
    chosenConfig = undefined;
    numTeams = undefined;
    userDraftPosition = undefined;
    draftType = undefined;
    userTeam = undefined;
    currentPickNumber = 0;
    pickLog = [{"pick":"", "name":"", "position":""}];
    ADP = [];
    computerTeams = [];
    availablePlayers = [];
    allTeams = [];

    $('#allTeams').empty();
    updatePickLog(pickLog);

    document.getElementById('currentPickSelection').textContent = '';
    document.getElementById('numPlayersPerTeamSection').value = '';
    document.getElementById('numTeamsSection').value = '';
    document.getElementById('userDraftPositionSection').value = '';
    document.getElementById('userDraftPosition').value = '';
    document.getElementById('snake').unchecked;
    document.getElementById('linear').unchecked;

    hideElements(["playersButton", "myTeamButton", "allTeamButton", "pickLogButton", "resetButton", "numPlayersPerTeamSection", "numTeamsSection", "userDraftPositionSection"]);
    showElements(["adpButton", "autoDraftButton", "manualDraftButton"]);

    const tabContents = document.getElementsByClassName("tabcontent");

    for (const tabContent of tabContents) {
        tabContent.classList.add("hidden");
    }

    document.getElementById('startDraftButton').disabled = true;

    getADP();
}

/*********************************************/
//TODO REMOVE THIS FOR PROD ONLY FOR TESTING
async function getADP(flag) {
    const adpData = await firebase.database().ref('X-ADP').limitToLast(100).once('value');
    const data = adpData.val();

    return showADP(data)
        .then((data) => {
            if (flag) {
                return data;
            } else {
                return showADPTable(data);
            }
        })
        .catch((error) => {
            return error;
        });

    async function showADP(data) {
        const allPlayers = Object.values(data).flat();
        
        const groupedPlayers = allPlayers.reduce((acc, player) => {
            if (!acc[player.player_id]) {
                acc[player.player_id] = { totalPick: 0, count: 0 };
            }
            
            acc[player.player_id].totalPick += player.pick;
            acc[player.player_id].count += 1;
            
            return acc;
        }, {});
        
        const averagedPlayers = Object.keys(groupedPlayers).map(player_id => {
            const { totalPick, count } = groupedPlayers[player_id];
            const averagePick = totalPick / count;
            
            return { 
                player_id, averagePick: parseFloat(averagePick.toFixed(2)) 
            };
        });
        
        const finalArray = averagedPlayers.map(averagedPlayer => {
            const originalPlayer = allPlayers.find(player => player.player_id === averagedPlayer.player_id);

            return {
                name: originalPlayer.name,
                adp: averagedPlayer.averagePick,
                player_id: originalPlayer.player_id,
            };
        });
        
        finalArray.sort((a, b) => a.adp - b.adp);
        return finalArray;
    }

    function showADPTable(data) {
        const adpTable = $('#ADPTable').DataTable({
            retrieve: true,
            sort: false,
            searching: true,
            paging: false,
            lengthChange: false,
            info: false,
            columnDefs: [
                { targets: [0], title: "Rank" },
                { targets: [1], title: "Players" },
                { targets: [2], title: "ADP" },
            ],
        });

        adpTable.clear();

        data.forEach((player, i) => {
            adpTable.row.add([i + 1, player.name, player.adp]);
        });

        adpTable.draw();
    }
}

function hideElements(elementIds) {
    elementIds.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add('hidden');
        }
    });
}

function showElements(elementIds) {
    elementIds.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.remove('hidden');
        }
    });
}

function openTab(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        hideElements([tabcontent[i].id]);
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    showElements([name]);
    evt.currentTarget.className += " active";
}

/*********************************************/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.configButton').forEach(button => {
        button.addEventListener('click', () => {
            const minPlayersForSelection = button.getAttribute('data-min');
            const configNumber = button.getAttribute('data-config');
            selectConfiguration(parseInt(configNumber, 10), minPlayersForSelection);
        });
    });
    
    /*********************************************/
    //TODO REMOVE THIS FOR PROD ONLY FOR TESTING
    document.querySelectorAll('.test').forEach(button => {
        button.addEventListener('click', () => {
            const clickedId = button.id;
    
            if (clickedId === 'test1') {
                chosenConfig = {
                    "DEF": 2,
                    "MID": 3,
                    "RUC": 1,
                    "FWD": 2
                };
                numPlayersPerTeam = 8;
            } else if (clickedId === 'test2') {
                chosenConfig = {
                    "DEF": 5,
                    "MID": 7,
                    "RUC": 1,
                    "FWD": 5
                };
                numPlayersPerTeam = 18;
            } else {
                chosenConfig = {
                    "DEF": 6,
                    "MID": 8,
                    "RUC": 2,
                    "FWD": 6
                };
                numPlayersPerTeam = 22;
            }

            numTeams = 2;
            userDraftPosition = 1;
            draftType = 'snake';
            document.getElementById('userDraftPosition').value = 1;
            computerTeams, availablePlayers, allTeams = [];
            setUserDraftPosition();
            checkAllInputsSet();
        });
    });

    getADP();
    /*********************************************/

    document.getElementById('setNumPlayersPerTeamButton').addEventListener('click', setNumPlayersPerTeam);
    document.getElementById('setNumTeamsButton').addEventListener('click', setNumTeams);
    document.getElementById('setUserDraftPositionButton').addEventListener('click', setUserDraftPosition);
    document.getElementById('setDraftTypeButton').addEventListener('click', setDraftType);
    
    const startDraftButton = document.getElementById('startDraftButton');

    startDraftButton.addEventListener('click', () => {
        hideElements(["autoDraftButton", "manualDraftButton", "startDraftButton", "draftTypeSection"]);
        showElements(["playersButton", "myTeamButton", "allTeamButton", "pickLogButton", "resetButton"]);
        startDraftSimulation();
    });

    resetButton.addEventListener('click', () => {
        restartApp();
    });
});