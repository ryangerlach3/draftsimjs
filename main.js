import players from './players.js';

// Global variables to store user inputs
let numPlayersPerTeam;
let chosenConfig;
let numTeams;
let userDraftPosition;
let draftType;

// Function to start the draft simulation
class Player {
    constructor(id, name, positions, rank, fantasyAverage, team) {
        this.id = id;
        this.name = name;
        this.positions = positions;
        this.rank = rank;
        this.fantasyAverage = fantasyAverage;
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
    console.log(`Number of players per team is set to: ${numPlayersPerTeam}`);
    document.getElementById('configChoiceSection').style.display = 'block';
}


// Set the chosen configuration
function selectConfiguration(configNumber) {
    // Define possible on-field position configurations
    const positionConfigurations = {
        1: { defenders: 2, midfielders: 3, ruck: 1, forwards: 2 },
        2: { defenders: 5, midfielders: 7, ruck: 1, forwards: 5 },
        3: { defenders: 6, midfielders: 8, ruck: 2, forwards: 6 }
    };
    chosenConfig = positionConfigurations[configNumber];
    // Show the next section for number of teams
}

// Set the number of teams
function setNumTeams() {
    numTeams = document.getElementById('numTeams').value;
    // Show the next section for user's draft position
    document.getElementById('userDraftPositionSection').style.display = 'block';
}

// Set the user's draft position
function setUserDraftPosition() {
    userDraftPosition = document.getElementById('userDraftPosition').value;
    // Show the next section for selecting the draft type
    document.getElementById('draftTypeSection').style.display = 'block';
}

// Function to set the draft type
function setDraftType() {
    if (document.getElementById('snake').checked) {
        draftType = 'snake';
    } else if (document.getElementById('linear').checked) {
        draftType = 'linear';
    } else {
        // Handle the case where no option is selected
        alert('Please select a draft type.');
        return;
    }

    // After setting the draft type, check if all inputs are ready
    if (numPlayersPerTeam && chosenConfig && numTeams && userDraftPosition && draftType) {
    // All inputs are ready, enable the "Start Draft" button
        document.getElementById('startDraftButton').disabled = false;
    // Initialize the draft simulation

    startDraftSimulation();
}

document.addEventListener('DOMContentLoaded', () => {

    // Listen for when the user sets the number of players per team
    document.getElementById('setNumPlayersPerTeam').addEventListener('click', setNumPlayersPerTeam);
    
    // Listen for when the user selects a configuration
    document.querySelectorAll('.configButton').forEach(button => {
        button.addEventListener('click', () => {
            const configNumber = button.getAttribute('data-config');
            selectConfiguration(parseInt(configNumber, 10));
        });
    });
    
    // Listen for when the user sets the number of teams
    document.getElementById('setTeamsButton').addEventListener('click', setNumTeams);
    
    // Listen for when the user sets their draft position
    document.getElementById('setUserDraftPositionButton').addEventListener('click', setUserDraftPosition);
    
    // Listen for when the user selects the draft type
    document.getElementById('setDraftTypeButton').addEventListener('click', setDraftType);
    
    // Listen for when the user is ready to start the draft
    document.getElementById('startDraftButton').addEventListener('click', startDraftSimulation);
});

  

// Other functions

function startDraftSimulation() {
    // Use the imported players as the available players for the draft
    let availablePlayers = players.map(playerData => new Player(
        playerData.id,
        playerData.name,
        playerData.positions,
        playerData.rank,
        playerData.fantasyAverage,
        playerData.team
    ));

    // Initialize the user team with the chosen configuration
    userTeam = new Team(numPlayersPerTeam, chosenConfig);

    // Initialize computer teams. We'll assume 'numTeams' includes the user team.
    computerTeams = [];
    for (let i = 0; i < numTeams - 1; i++) {
        computerTeams.push(new Team(numPlayersPerTeam, chosenConfig));
    }

    // Create an array of all teams and insert the user team at the specified draft position
    const allTeams = [];
    for (let i = 0; i < numTeams; i++) {
        if (i === userDraftPosition - 1) {
            allTeams.push(userTeam);
        } else {
            allTeams.push(computerTeams.shift());
        }
    }

    // Perform the draft
    let roundNumber = 0;
    const totalRounds = numPlayersPerTeam;

    // If you have a snake draft, you would need logic here to handle the pick order reversal.
    while (roundNumber < totalRounds && availablePlayers.length > 0) {
        for (let i = 0; i < allTeams.length; i++) {
            let teamIndex = i;
            // Reverse the order for snake drafts on odd rounds
            if (draftType === 'snake' && roundNumber % 2 === 1) {
                teamIndex = allTeams.length - 1 - i;
            }

            // Get the team that is drafting
            const draftingTeam = allTeams[teamIndex];

            // Perform the draft pick for the team
            if (draftingTeam === userTeam) {
                console.log("User's turn to pick.");
                // Trigger user pick process
            } else {
                // Computer pick logic
                let playerPicked = availablePlayers.shift(); // Takes the first available player
                draftingTeam.addPlayer(playerPicked, false);
                console.log(`Team ${teamIndex + 1} (computer) picked ${playerPicked.name}.`);
            }
        }
        roundNumber++; // Move to the next round
    }

    // After the draft rounds are complete, you would display the teams.
    displayTeams();
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
}