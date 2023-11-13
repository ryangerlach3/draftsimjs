import players from './players.js';

// Global variables to store user inputs
let numPlayersPerTeam;
let chosenConfig;
let numTeams;
let userDraftPosition;
let draftType;
let userTeam;
let computerTeams;
let availablePlayers = [];


// Function to start the draft simulation
class Player {
    constructor(id, name, positions, rank, fantasy_average, team) {
        this.id = id;
        this.name = name;
        this.positions = positions;
        this.rank = rank;
        this.fantasy_average = fantasy_average;
        this.team = team; // The team the player belongs to
        this.currentPosition = positions[0]; // Default to the first position
    }
}
    
class Team {
    constructor(teamSize, config) {
        this.teamSize = teamSize;
        this.config = config;
        this.maxPlayers = {
            'Ruck': this.config['ruck'],
            'Midfielder': this.config['midfielders'],
            'Defender': this.config['defenders'],
            'Forward': this.config['forwards'],
            'Bench': Infinity // Represents float('inf') in Python
        };

        // Initialize the players dictionary with empty arrays for each position
        this.players = {
            'Ruck': [],
            'Midfielder': [],
            'Defender': [],
            'Forward': [],
            'Bench': []
        };
    }
    
    addPlayer(player, isUserTeam = true) {
        // Check if team is full
        const totalPlayers = Object.values(this.players).flat().length;
        if (totalPlayers >= this.teamSize) {
            console.log("DEBUG: Team is considered full by size.");
            return false;
        }

        // Check if the player is already in the team
        for (const positionPlayers of Object.values(this.players)) {
            if (positionPlayers.includes(player)) {
                console.log("DEBUG: Player is already in the team.");
                return false;
            }
        }

        // Determine available positions for the player
        const availablePositions = player.positions.filter(position => 
            this.players[position].length < this.maxPlayers[position]);

        // Handle user team logic
        if (isUserTeam) {
            if (availablePositions.length > 0) {
                let chosenPosition = availablePositions[0]; // Simplification for example
                this.players[chosenPosition].push(player);
                console.log(`DEBUG: Player added to ${chosenPosition}.`);
                return true;
            } else {
                // Add to bench without limit
                this.players['Bench'].push(player);
                console.log("DEBUG: Player added to Bench.");
                return true;
            }
        }
    
            // Handle computer team logic
            else {
                if (availablePositions.length > 0) {
                    let chosenPosition = availablePositions[0]; // Simplification for example
                    this.players[chosenPosition].push(player);
                    console.log(`DEBUG: Player added to ${chosenPosition} (computer team).`);
                    return true;
                } else if (this.players['Bench'].length < this.maxPlayers['Bench']) {
                    this.players['Bench'].push(player);
                    console.log("DEBUG: Player added to Bench (computer team).");
                    return true;
                } else {
                    console.log("DEBUG: No available positions for player (computer team).");
                    return false;
                }
            }
        }

    draftComputerPlayer(availablePlayers) {
        console.log("Computer is making a draft pick...");
            
        // Calculate position needs
        const positionNeeds = {};
        for (const position in this.maxPlayers) {
            positionNeeds[position] = this.maxPlayers[position] - this.players[position].length;
        }
        
        // Exclude bench for now to fill on-field positions first
        const unfilledPositions = {};
        for (const position in positionNeeds) {
            if (position !== 'Bench' && positionNeeds[position] > 0) {
                    unfilledPositions[position] = positionNeeds[position];
            }
        }
        
        // Calculate the priority score for each player
        const playerScores = availablePlayers.map(player => {
            let preferredPosition = null;
        
            // Check for dual-position players
            if (player.positions.length > 1 && player.positions.includes('Midfielder')) {
                for (const position of player.positions) {
                    if (position !== 'Midfielder' && unfilledPositions[position] > 0) {
                        preferredPosition = position;
                        break;
                    }
                }
            }
        
            // Score calculation
            for (const position of preferredPosition ? [preferredPosition] : player.positions) {
                if (unfilledPositions[position]) {
                    const rankScore = (1 / player.rank) * 0.6;
                    const positionalNeedScore = (unfilledPositions[position] / this.maxPlayers[position]) * 0.4;
                    const score = rankScore + positionalNeedScore;
                    return { score, player, position };
                }
            }
        }).filter(scoreData => scoreData !== undefined);
        
        // Sort players by score
        playerScores.sort((a, b) => b.score - a.score);
        
        // Try to draft the best player based on the calculated score
        for (const { score, player, position } of playerScores) {
            if (positionNeeds[position] > 0) {
                player.currentPosition = position;
                this.players[position].push(player);
                console.log(`${player.name} has been drafted as a ${position}`);
                const index = availablePlayers.indexOf(player);
                availablePlayers.splice(index, 1);
                return { player, position };
            }
        }
        
        // Consider the bench
        if (positionNeeds['Bench'] > 0) {
            const bestBenchPlayer = availablePlayers.reduce((best, current) => 
                (1 / current.rank) > (1 / best.rank) ? current : best
            );
            bestBenchPlayer.currentPosition = 'Bench';
            this.players['Bench'].push(bestBenchPlayer);
            console.log(`${bestBenchPlayer.name} has been added to the bench`);
            const index = availablePlayers.indexOf(bestBenchPlayer);
            availablePlayers.splice(index, 1);
            return { player: bestBenchPlayer, position: 'Bench' };
        }
        
        // No suitable player was found
        return null;
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
    
    // Add a player to the bench if there is space and they are not already on the team
    addPlayerToBench(player) {
        const isPlayerInTeam = Object.values(this.players).some(playerList => playerList.includes(player));
        if (isPlayerInTeam) {
            return false; // Player is already in the team, don't add to the bench
        }
        if (this.players['Bench'].length < this.maxPlayers['Bench']) {
            this.players['Bench'].push(player);
            return true;
        }
        return false;
    }
}

// Set the number of players per team
function setNumPlayersPerTeam() {
    numPlayersPerTeam = document.getElementById('numPlayersPerTeam').value;
    console.log(document.getElementById('numPlayersPerTeam').value)
    console.log(`Number of players per team is set to: ${numPlayersPerTeam}`);
    document.getElementById('configChoiceSection').style.display = 'block';
    checkAllInputsSet();
}

// Set the chosen configuration
function selectConfiguration(configNumber) {
    console.log("selectConfiguration called with configNumber:", configNumber);

    const positionConfigurations = {
        1: { defenders: 2, midfielders: 3, ruck: 1, forwards: 2 },
        2: { defenders: 5, midfielders: 7, ruck: 1, forwards: 5 },
        3: { defenders: 6, midfielders: 8, ruck: 2, forwards: 6 }
    };

    chosenConfig = positionConfigurations[configNumber];
    console.log("Chosen configuration:", chosenConfig);

    document.getElementById('numTeamsSection').style.display = 'block';
    console.log("numTeamsSection display set to block");

    checkAllInputsSet();
}


// Set the number of teams
function setNumTeams() {
    numTeams = document.getElementById('numTeams').value;
    document.getElementById('userDraftPositionSection').style.display = 'block';
    checkAllInputsSet();
}

// Set the user's draft position
function setUserDraftPosition() {
    userDraftPosition = document.getElementById('userDraftPosition').value;
    document.getElementById('draftTypeSection').style.display = 'block';
    checkAllInputsSet();
}

// Function to set the draft type
function setDraftType() {
    if (document.getElementById('snake').checked) {
        draftType = 'snake';
    } else if (document.getElementById('linear').checked) {
        draftType = 'linear';
    } else {
        alert('Please select a draft type.');
        return;
    }
    checkAllInputsSet();
}

// Check if all inputs are set
function checkAllInputsSet() {
    if (numPlayersPerTeam && chosenConfig && numTeams && userDraftPosition && draftType) {
        console.log(`All inputs set. Enabling start draft button. 
                     Players per team: ${numPlayersPerTeam}, 
                     Chosen configuration: ${JSON.stringify(chosenConfig)}, 
                     Number of teams: ${numTeams}, 
                     User draft position: ${userDraftPosition}, 
                     Draft type: ${draftType}`);
        document.getElementById('startDraftButton').disabled = false;
    } else {
        console.log('Not all inputs are set. Start draft button remains disabled.');
        document.getElementById('startDraftButton').disabled = true;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('setNumPlayersPerTeamButton').addEventListener('click', setNumPlayersPerTeam);
    
    document.querySelectorAll('.configButton').forEach(button => {
        button.addEventListener('click', () => {
            const configNumber = button.getAttribute('data-config');
            selectConfiguration(parseInt(configNumber, 10));
        });
    });
    
    document.getElementById('setNumTeamsButton').addEventListener('click', setNumTeams);
    document.getElementById('setUserDraftPositionButton').addEventListener('click', setUserDraftPosition);
    document.getElementById('setDraftTypeButton').addEventListener('click', setDraftType);
    document.getElementById('startDraftButton').addEventListener('click', startDraftSimulation);
});


function setupDraft() {
    // Use the imported players as the available players for the draft
    availablePlayers = players.map(playerData => new Player(
        playerData.id,
        playerData.name,
        playerData.positions,
        playerData.rank,
        playerData.fantasy_average, // Ensure this matches the property in your Player class
        playerData.team
    ));

    console.log("Available Players:", availablePlayers);
}

function startDraftSimulation() {
    // Initialize the draft simulation here
    // This should only set up the draft and start the first turn
    setupDraft();
    proceedToNextDraftRound(0); // Start with round 0
}

    // Initialize the user team with the chosen configuration
    userTeam = new Team(numPlayersPerTeam, chosenConfig);

    // Initialize computer teams. We'll assume 'numTeams' includes the user team.
    computerTeams = [];
    for (let i = 0; i < numTeams - 1; i++) {
        computerTeams.push(new Team(numPlayersPerTeam, chosenConfig));
    }

    // Create an array of all teams and insert the user team at the specified draft position
    allTeams = [];
    for (let i = 0; i < numTeams; i++) {
        if (i === userDraftPosition - 1) {
            allTeams.push(userTeam);
        } else {
            allTeams.push(computerTeams.shift());
        }
}

function proceedToNextDraftRound(roundNumber) {
    // Check if the draft is over
    if (roundNumber >= numPlayersPerTeam) {
        console.log("Draft is complete");
        displayTeams();
        return;
    }

    // Iterate through all teams for the current round
    for (let i = 0; i < allTeams.length; i++) {
        let teamIndex = (draftType === 'snake' && roundNumber % 2 === 1) ? allTeams.length - 1 - i : i;
        let draftingTeam = allTeams[teamIndex];

        // If it's the user's turn
        if (draftingTeam === userTeam) {
            console.log("User's turn to pick.");
            displayAvailablePlayers(availablePlayers, roundNumber, teamIndex);
            break; // We break the loop waiting for the user's input
        } else {
            // Computer's turn to pick
            let pickResult = draftComputerPlayer(availablePlayers, draftingTeam);
            if (pickResult.player) {
                console.log(`Team ${teamIndex + 1} (computer) picked ${pickResult.player.name}.`);
            }
        }
    }
}

function displayAvailablePlayers(availablePlayers, roundNumber, teamIndex) {
    console.log("displayAvailablePlayers function called"); // Log statement
    console.log("Inside displayAvailablePlayers, received players:", availablePlayers);
    const container = document.getElementById('playerListContainer');
    container.style.display = 'block'; // Make the container visible
    console.log(container.style.display); // Log to console
    container.innerHTML = ''; // Clear any existing content

    const list = document.createElement('ul'); // Create an unordered list
    container.appendChild(list);

    // Create list items for each available player
    availablePlayers.forEach((player) => {
        const listItem = document.createElement('li');
        listItem.textContent = player.name;
        listItem.addEventListener('click', function() {
            userPickPlayer(player);
        });
        list.appendChild(listItem);
    });
}

function userPickPlayer(player, availablePlayers, roundNumber, teamIndex) {
    console.log("User's turn to draft");
    const addedToTeam = userTeam.addPlayer(player, true);

    if (addedToTeam) {
        console.log(`${player.name} has been drafted to your team.`);
        // Remove the selected player from available players
        const index = availablePlayers.indexOf(player);
        if (index > -1) {
            availablePlayers.splice(index, 1);
        }
        displayTeam(userTeam); // Display the updated team composition
        document.getElementById('playerListContainer').style.display = 'none';
        proceedToNextDraftRound(roundNumber + 1); // Move to the next round
    } else {
        alert(`Unable to draft ${player.name}. Your team may be full.`);
        // The function will end here, and the user will need to select another player
        displayAvailablePlayers(availablePlayers, roundNumber, teamIndex); // Show the list again for the user to pick
    }
}

// This function is called when it's time for the user to make a pick
function initiateUserPick(availablePlayers) {
    displayAvailablePlayers(availablePlayers);
    // The code now waits for the user to click on one of the list items
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
        if (position !== 'Bench' && positionNeeds[position] > 0) {
            unfilledPositions[position] = positionNeeds[position];
        }
    }

    let playerScores = [];
    availablePlayers.forEach(player => {
        let preferredPosition = null;

        // Check for dual-position players
        if (player.positions.length > 1 && player.positions.includes('Midfielder')) {
            for (const position of player.positions) {
                if (position !== 'Midfielder' && unfilledPositions[position]) {
                    preferredPosition = position;
                    break;
                }
            }
        }

        // Calculate score
        (preferredPosition ? [preferredPosition] : player.positions).forEach(position => {
            if (unfilledPositions[position]) {
                const rankScore = (1 / player.rank) * 0.6;
                const positionalNeedScore = (unfilledPositions[position] / team.maxPlayers[position]) * 0.4;
                const score = rankScore + positionalNeedScore;
                playerScores.push({ score, player, position });
            }
        });
    });

    // Sort players by score
    playerScores.sort((a, b) => b.score - a.score);

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
    if (positionNeeds['Bench'] > 0) {
        const bestBenchPlayer = availablePlayers.reduce((best, current) => 
            (1 / current.rank) > (1 / best.rank) ? current : best
        );
        bestBenchPlayer.currentPosition = 'Bench';
        team.players['Bench'].push(bestBenchPlayer);
        console.log(`${bestBenchPlayer.name} has been added to the bench`);
        return { player: bestBenchPlayer, position: 'Bench' };
    }

    return { player: null, position: null };
}


function displayTeam(team) {
    // Logic to display the team's composition goes here
    // This could involve updating the HTML to show the team's players
    console.log("Team Composition:", team.players);
}


function displayTeams() {
    // Display the user's team
    console.log("User Team:", userTeam);

    // Display each computer team
    computerTeams.forEach((team, index) => {
        console.log(`Computer Team ${index + 1}:`, team);
    });

    // Update the actual HTML here to show teams on the page.
}