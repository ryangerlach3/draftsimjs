# Ask the user for the number of players per team
num_players_per_team = int(input('Enter the number of players per team: '))

# Define possible on-field position configurations
position_configurations = {
    1: {'defenders': 2, 'midfielders': 3, 'ruck': 1, 'forwards': 2},
    2: {'defenders': 5, 'midfielders': 7, 'ruck': 1, 'forwards': 5},
    3: {'defenders': 6, 'midfielders': 8, 'ruck': 2, 'forwards': 6}
}

# Ask the user to select a configuration
print("Choose an on-field position configuration:")
print("1: 2-3-1-2 (2 defenders, 3 midfielders, 1 ruck, 2 forwards)")
print("2: 5-7-1-5 (5 defenders, 7 midfielders, 1 ruck, 5 forwards)")
print("3: 6-8-2-6 (6 defenders, 8 midfielders, 2 ruck, 6 forwards)")
config_choice = int(input("Enter the number for your chosen configuration (1, 2, or 3): "))

# Ensure the user chooses a valid configuration
while config_choice not in position_configurations:
    print("Invalid choice. Please choose 1, 2, or 3.")
    config_choice = int(input("Enter the number for your chosen configuration (1, 2, or 3): "))

# Set the chosen configuration
chosen_config = position_configurations[config_choice]

# Calculate bench size
bench_size = num_players_per_team - sum(chosen_config.values())

# Assign the on-field and bench positions
on_field_positions = chosen_config
bench_positions = {'bench': bench_size}


# Ask the user for the number of teams in the draft
number_of_teams = int(input("Enter the number of teams in the draft: "))
# After getting number_of_teams from the user
num_computer_teams = number_of_teams - 1


class Player:
    def __init__(self, player_id, name, positions, rank):
        self.id = player_id  # Add this line to store the player's ID
        self.name = name
        self.positions = positions
        self.rank = rank
        self.current_position = positions[0]  # set the first position as the default current_position

    def __str__(self):
        return self.name  # This will display the player's name when you try to print a Player object

class Team:
    def __init__(self, team_size, config):
        self.team_size = team_size
        self.config = config
        self.max_players = {
            'Ruck': self.config['ruck'],
            'Midfielder': self.config['midfielders'],
            'Defender': self.config['defenders'],
            'Forward': self.config['forwards'],
            'Bench': float('inf')
            # Do not set a maximum for the bench here, handle it in add_player method
        }

        # Initialize the players dictionary with empty lists for each position
        self.players = {position: [] for position in ['Ruck', 'Midfielder', 'Defender', 'Forward', 'Bench']}


    def add_player(self, player, is_user_team=True):
        # Debugging: print out the current number of players
        print("DEBUG: Current total number of players on team:", sum(len(players) for players in self.players.values()))
        print("DEBUG: Current number of players on bench:", len(self.players['Bench']))
        
        # If the total number of players equals the team size, no need to proceed
        if sum(len(players) for players in self.players.values()) >= self.team_size:
            print("DEBUG: Team is considered full by size.")
            return False

        # Check if the player is already in the team
        if any(player in pos_players for pos_players in self.players.values()):
            print("DEBUG: Player is already in the team.")
            return False  # Player is already in the team, don't add again

        # Determine if there is space in any of the player's positions
        available_positions = [position for position in player.positions
                            if len(self.players[position]) < self.max_players[position]]

        # If it's the user's team, disregard the max bench players limit
        if is_user_team:
            if available_positions:
                chosen_position = available_positions[0] if len(available_positions) == 1 else None
                if chosen_position is None:
                    print(f"The player can be placed in multiple positions: {available_positions}")
                    while chosen_position not in available_positions:
                        chosen_position = input(f"Choose a position for the player from the available positions {available_positions}: ")
                self.players[chosen_position].append(player)
                print(f"DEBUG: Player added to {chosen_position}.")
            else:
                # User can add as many players to the bench as they want
                self.players['Bench'].append(player)
                print(f"DEBUG: Player added to Bench.")
            return True

        # If it's the computer's team, try to fill the field positions first
        elif not is_user_team:
            if available_positions:
                chosen_position = available_positions[0]  # Choose the first available position
                self.players[chosen_position].append(player)
                print(f"DEBUG: Player added to {chosen_position} (computer team).")
            else:
                # Check if bench space is available according to max bench players
                if len(self.players['Bench']) < self.max_players['Bench']:
                    self.players['Bench'].append(player)
                    print(f"DEBUG: Player added to Bench (computer team).")
                else:
                    print("DEBUG: No available positions for player (computer team).")
                    return False
            return True

        return False  # Fallback in case none of the conditions are met


    def draft_computer_player(self, available_players):
        print("Computer is making a draft pick...")
        position_needs = {position: self.max_players[position] - len(self.players[position]) for position in self.max_players}

        # Exclude bench for now to fill on-field positions first
        unfilled_positions = {pos: need for pos, need in position_needs.items() if need > 0 and pos != 'Bench'}

        # Calculate the priority score for each player based on rank and team needs
        player_scores = []
        for player in available_players:
            preferred_position = None
            # Check if the player is dual-position and has a non-midfield position available
            if len(player.positions) > 1 and 'Midfielder' in player.positions:
                for position in player.positions:
                    if position != 'Midfielder' and unfilled_positions.get(position, 0) > 0:
                        preferred_position = position
                        break

            # If a preferred position is found, use that, otherwise, use the first available position
            for position in (preferred_position,) if preferred_position else player.positions:
                if position in unfilled_positions:
                    # Calculate score, higher is better. Rank is weighted more than positional need.
                    rank_score = (1 / player.rank) * 0.6
                    positional_need_score = (unfilled_positions[position] / self.max_players[position]) * 0.4
                    score = rank_score + positional_need_score
                    player_scores.append((score, player, position))
                    if preferred_position:
                        break  # Stop looking at other positions if we already chose the preferred one

        # Sort players by score
        player_scores.sort(key=lambda x: x[0], reverse=True)

        # Try to draft the best player based on the calculated score
        for score, player, position in player_scores:
            if position_needs[position] > 0:
                # Add the player to the team in their position
                player.current_position = position
                self.players[position].append(player)
                print(f"{player.name} has been drafted as a {position}")
                available_players.remove(player)  # Remove the drafted player
                return player, position  # End the function returning the player and the position

        # If we're here, it means on-field positions are filled. Consider the bench.
        if position_needs['Bench'] > 0:
            # Get the best player for the bench based on rank alone
            best_bench_player = max(available_players, key=lambda p: (1 / p.rank))
            best_bench_player.current_position = 'Bench'
            self.players['Bench'].append(best_bench_player)
            print(f"{best_bench_player.name} has been added to the bench")
            available_players.remove(best_bench_player)  # Remove the drafted player
            return best_bench_player, 'Bench'  # End the function returning the player and the position

        # If we reach here, it means no suitable player was found
        return None, None


    
    
    def total_players(self):
        """Calculate the total number of players in the team."""
        return sum(len(player_list) for player_list in self.players.values())
    
    def total_max_players(self):
        """Calculate the maximum number of players allowed in the team."""
        return sum(self.max_players.values())

    def total_players_needed(self):
        return sum(self.max_players[position] - len(self.players[position]) for position in self.players)
    
    def is_full(self):
        # The team is full if the total number of players is equal to the team size.
        total_players = sum(len(players) for players in self.players.values())
        return total_players >= self.team_size


    def add_player_to_bench(self, player):
        """ Adds a player to the bench if there is space and they are not already on the team. """
        if any(player in pos_players for pos_players in self.players.values()):
            return False  # Player is already in the team, don't add to the bench
        if len(self.players['Bench']) < self.max_players['Bench']:
            self.players['Bench'].append(player)
            return True
        return False


import sqlite3
from datetime import datetime  # This line is necessary to use datetime

# Define the path to your SQLite database file
db_filename = 'draft_results.db'

def insert_pick(player_id, player_name, draft_position):
    pick_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    conn = sqlite3.connect('draft_results.db')
    c = conn.cursor()
    c.execute('''
    INSERT INTO Picks (player_id, player_name, draft_position, pick_time) 
    VALUES (?, ?, ?, ?)
    ''', (player_id, player_name, draft_position, pick_time))
    conn.commit()
    conn.close()


def draft_user_player(user_team, available_players, draft_position):
    print("User's turn to draft")
    
    while True:
        print("\nAvailable Players:", [str(player) for player in available_players])
        user_choice = input("Select a player from the list above: ")

        # Find the player selected by the user
        selected_player = next((player for player in available_players if player.name == user_choice), None)

        if selected_player:
            # Attempt to add the player to the team
            added_to_team = user_team.add_player(selected_player, is_user_team=True)

            if added_to_team:
                insert_pick(selected_player.id, selected_player.name, draft_position)
                available_players.remove(selected_player)
                # Player has been added to the team, now update the database

                # Display the updated team composition
                print(f"{selected_player.name} has been drafted to your team")
                display_team(user_team)

                # Return from the function indicating success
                return True
            else:
                print(f"Unable to draft {selected_player.name}. Your team may be full.")
        else:
            print(f"Player '{user_choice}' not found. Please select a valid player.")

        # If we get here, it means the player wasn't successfully drafted, loop again
        print("Please try again.")


# Initialize draft_type to None
draft_type = None

# Keep asking until the user enters a valid draft type
while draft_type not in ["snake", "linear"]:
    draft_type = input('Enter "snake" for a snake draft or "linear" for a linear draft: ').strip().lower()
    if draft_type not in ["snake", "linear"]:
        print("Invalid input. Please enter 'snake' or 'linear'.")

# Now draft_type is guaranteed to be either "snake" or "linear"

def calculate_and_update_adps():
    conn = sqlite3.connect('draft_results.db')
    c = conn.cursor()
    # Calculate the ADP for each player based on all picks
    c.execute('''
    SELECT player_id, player_name, AVG(draft_position)
    FROM Picks
    GROUP BY player_id
    ''')
    adps = c.fetchall()

    # Update the ADP table with the latest ADPs
    for player_id, player_name, avg_draft_position in adps:
        c.execute('''
        INSERT INTO ADP (player_id, player_name, average_draft_position)
        VALUES (?, ?, ?)
        ON CONFLICT(player_id) DO UPDATE SET
        average_draft_position = excluded.average_draft_position
        ''', (player_id, player_name, avg_draft_position))

    conn.commit()
    conn.close()


# Continue with the draft_simulation function definition and the rest of your code...

user_team = Team(num_players_per_team, on_field_positions)
def draft_simulation(user_team, computer_teams, players, user_draft_position, draft_type):
    print(f"Starting draft simulation with {len(computer_teams)} computer teams and user draft position {user_draft_position}")

    # Create a list of all teams, including the user's team
    all_teams = [user_team] + computer_teams

    # Adjust user's draft position to zero-based index
    user_draft_position_zero_based = user_draft_position - 1

    # Rearrange based on the user's draft position
    all_teams = all_teams[1:]  # Move the user's team out of the first position
    all_teams.insert(user_draft_position_zero_based, user_team)  # Insert the user's team at the desired position

    num_teams = len(all_teams)
    current_pick = 0
    round_number = 0  # To keep track of the draft round for snake draft logic
    total_picks = num_players_per_team * number_of_teams
    picks_made = 0

    # Continue drafting until the number of picks made reaches the total picks
    while players and picks_made < total_picks:
        print(f"Round: {round_number + 1}, Pick: {current_pick + 1}")
        # Determine the draft order based on the draft type
        if draft_type == 'snake':
            # In a snake draft, the order reverses every round
            if round_number % 2 == 0:
                # Even round numbers (0, 2, 4, ...) use the normal order
                drafting_team = all_teams[current_pick % num_teams]
            else:
                # Odd round numbers (1, 3, 5, ...) use the reverse order
                drafting_team = all_teams[::-1][current_pick % num_teams]
        else:
            # In a linear draft, the order is always the same
            drafting_team = all_teams[current_pick % num_teams]

        # Determine the current draft position
        current_draft_position = (round_number * num_teams) + (current_pick % num_teams) + 1

        # Label the pick number for each draft pick
        print(f"Pick #{current_draft_position}: ", end="")

        # Check if the team still needs players
        if drafting_team == user_team:
            # Pass this position to the draft_user_player function
            draft_result = draft_user_player(drafting_team, players, current_draft_position)
            if draft_result:
                # A user pick was made successfully, increment the picks_made counter
                print(f"Player drafted by user team.")
                picks_made += 1
        else:
            # It's a computer team's turn to draft
            draft_result = drafting_team.draft_computer_player(players)
            if draft_result:
                calculate_and_update_adps()
                # A computer pick was made successfully, increment the picks_made counter
                print(f"Player drafted by computer team.")
                picks_made += 1

        # Increment current_pick and adjust round_number if we've gone through a full round
        current_pick += 1
        if current_pick % num_teams == 0:
            round_number += 1

    print("Draft simulation complete.")


def display_team(team):
    print("Team Roster:")
    for position, player_list in team.players.items():
        print(f"{position}: {[str(player) for player in player_list]}")

# Example player creation:
players = [
# Player instances go here (use the data from the Excel sheet or a simplified list)
Player("CD_I1004592", "Tim English", ["Ruck"], 1),
Player("CD_I297373", "Marcus Bontempelli", ["Midfielder"], 2),
Player("CD_I992468", "Rowan Marshall", ["Ruck"], 3),
Player("CD_I996701", "Clayton Oliver", ["Midfielder"], 4),
Player("CD_I992242", "Jordan Dawson", ["Defender", "Midfielder"], 5),
Player("CD_I992016", "Zach Merrett", ["Midfielder"], 6),
Player("CD_I1013128", "Errol Gulden", ["Midfielder", "Forward"], 7),
Player("CD_I998172", "Tim Taranto", ["Midfielder", "Forward"], 8),
Player("CD_I1009528", "Tom Green", ["Midfielder"], 9),
Player("CD_I1002232", "Andrew Brayshaw", ["Midfielder"], 10),
Player("CD_I293222", "Rory Laird", ["Midfielder"], 11),
Player("CD_I1023261", "Nick Daicos", ["Defender", "Midfielder"], 12),
Player("CD_I1009420", "Caleb Serong", ["Midfielder"], 13),
Player("CD_I993817", "Darcy Parish", ["Midfielder"], 14),
Player("CD_I298210", "Christian Petracca", ["Midfielder"], 15),
Player("CD_I1001299", "Connor Rozee", ["Midfielder", "Forward"], 16),
Player("CD_I291790", "Adam Treloar", ["Midfielder"], 17),
Player("CD_I295518", "Sam Docherty", ["Defender", "Midfielder"], 18),
Player("CD_I297566", "James Sicily", ["Defender"], 19),
Player("CD_I993834", "Josh Dunkley", ["Midfielder", "Forward"], 20),
Player("CD_I290799", "Tom Liberatore", ["Midfielder"], 21),
Player("CD_I294307", "Brad Crouch", ["Midfielder"], 22),
Player("CD_I298174", "Toby Nankervis", ["Ruck"], 23),
Player("CD_I994389", "Jack Sinclair", ["Defender", "Midfielder"], 24),
Player("CD_I291969", "Stephen Coniglio", ["Midfielder", "Forward"], 25),
Player("CD_I1009199", "Noah Anderson", ["Midfielder"], 26),
Player("CD_I291902", "Jack Viney", ["Midfielder"], 27),
Player("CD_I1006121", "Zak Butters", ["Midfielder", "Forward"], 28),
Player("CD_I998659", "Luke Ryan", ["Defender"], 29),
Player("CD_I294199", "Sam Menegola", ["Midfielder"], 30),
Player("CD_I295898", "Tim Kelly", ["Midfielder"], 31),
Player("CD_I297907", "Nic Newman", ["Defender"], 32),
Player("CD_I296347", "Josh Kelly", ["Midfielder"], 33),
Player("CD_I296205", "Jack Steele", ["Midfielder"], 34),
Player("CD_I1002267", "Luke Davies Uniacke", ["Midfielder"], 35),
Player("CD_I1023518", "Harry Sheezel", ["Forward", "Defender"], 36),
Player("CD_I293535", "Lachie Neale", ["Midfielder"], 37),
Player("CD_I1002239", "Adam Cerra", ["Midfielder"], 38),
Player("CD_I291800", "Tom Stewart", ["Defender"], 39),
Player("CD_I298268", "Liam Duggan", ["Defender"], 40),
Player("CD_I298272", "Touk Miller", ["Midfielder"], 41),
Player("CD_I998145", "Sean Darcy", ["Ruck"], 42),
Player("CD_I1008550", "Will Day", ["Defender", "Midfielder"], 43),
Player("CD_I294305", "Lachie Whitfield", ["Midfielder", "Defender"], 44),
Player("CD_I1005054", "Josh Daicos", ["Midfielder"], 45),
Player("CD_I1006094", "Sam Walsh", ["Midfielder"], 46),
Player("CD_I1008436", "Kieren Briggs", ["Ruck"], 47),
Player("CD_I1020895", "Jai Newcombe", ["Midfielder"], 48),
Player("CD_I1012014", "Chad Warner", ["Midfielder"], 49),
Player("CD_I994295", "Dan Houston", ["Defender"], 50),
Player("CD_I992049", "Jayden Short", ["Midfielder", "Defender"], 51),
Player("CD_I296735", "Aaron Hall", ["Defender"], 52),
Player("CD_I290528", "Max Gawn", ["Ruck"], 53),
Player("CD_I1009208", "Matt Rowell", ["Midfielder"], 54),
Player("CD_I998215", "Will Setterfield", ["Midfielder"], 55),
Player("CD_I291856", "Tom Mitchell", ["Midfielder"], 56),
Player("CD_I295467", "Jack Macrae", ["Midfielder", "Forward"], 57),
Player("CD_I295340", "Mason Wood", ["Midfielder"], 58),
Player("CD_I281065", "Mitch Duncan", ["Defender"], 59),
Player("CD_I1015507", "Nasiah Wanganeen Milera", ["Midfielder", "Defender"], 60),
Player("CD_I291975", "Jarrod Witts", ["Ruck"], 61),
Player("CD_I290847", "Dustin Martin", ["Midfielder", "Forward"], 62),
Player("CD_I290778", "Luke Parker", ["Midfielder"], 63),
Player("CD_I295136", "Caleb Daniel", ["Defender", "Forward"], 64),
Player("CD_I295342", "Jake Lloyd", ["Defender"], 65),
Player("CD_I280944", "Jack Ziebell", ["Forward", "Defender"], 66),
Player("CD_I296296", "Dom Sheed", ["Midfielder"], 67),
Player("CD_I1009260", "Sam Flanders", ["Midfielder", "Forward"], 68),
Player("CD_I297401", "Matt Crouch", ["Midfielder"], 69),
Player("CD_I1000978", "Hugh Mccluggage", ["Midfielder"], 70),
Player("CD_I1009256", "Hayden Young", ["Defender"], 71),
Player("CD_I295344", "Toby Greene", ["Forward"], 72),
Player("CD_I297523", "Reilly O'Brien", ["Ruck"], 73),
Player("CD_I990704", "Patrick Cripps", ["Midfielder"], 74),
Player("CD_I260257", "Scott Pendlebury", ["Midfielder"], 75),
Player("CD_I1006314", "Dylan Moore", ["Forward"], 76),
Player("CD_I296294", "Blake Acres", ["Midfielder"], 77),
Player("CD_I296422", "Callum Wilkie", ["Defender"], 78),
Player("CD_I297354", "Karl Amon", ["Midfielder"], 79),
Player("CD_I996731", "Charlie Curnow", ["Forward"], 80),
Player("CD_I994185", "Jordan De Goey", ["Midfielder"], 81),
Player("CD_I993993", "Shai Bolton", ["Midfielder", "Forward"], 82),
Player("CD_I290550", "Cameron Guthrie", ["Midfielder"], 83),
Player("CD_I1002222", "James Worpel", ["Midfielder"], 84),
Player("CD_I997078", "Mason Redman", ["Defender"], 85),
Player("CD_I294877", "Isaac Smith", ["Midfielder", "Forward"], 86),
Player("CD_I1006058", "Bailey Scott", ["Defender", "Midfielder"], 87),
Player("CD_I996708", "Bailey Dale", ["Defender"], 88),
Player("CD_I298279", "Angus Brayshaw", ["Defender", "Midfielder"], 89),
Player("CD_I1026850", "Nic Martin", ["Midfielder", "Forward"], 90),
Player("CD_I261224", "Dayne Zorko", ["Forward", "Midfielder"], 91),
Player("CD_I1009399", "Luke Jackson", ["Ruck", "Forward"], 92),
Player("CD_I1009253", "Lachie Ash", ["Midfielder", "Defender"], 93),
Player("CD_I993905", "Callum Mills", ["Midfielder"], 94),
Player("CD_I1002242", "Charlie Constable", ["Defender", "Midfielder"], 95),
Player("CD_I990291", "Darcy Cameron", ["Ruck", "Forward"], 96),
Player("CD_I298524", "Lachie Weller", ["Defender"], 97),
Player("CD_I1006130", "Bailey Smith", ["Midfielder", "Forward"], 98),
Player("CD_I293845", "Jeremy Cameron", ["Forward"], 99),
Player("CD_I1023517", "Will Ashcroft", ["Midfielder"], 100),
Player("CD_I293871", "Jack Crisp", ["Midfielder"], 101),
Player("CD_I1005521", "Oscar Mcinerney", ["Ruck"], 102),
Player("CD_I1007881", "Wil Powell", ["Defender"], 103),
Player("CD_I1007124", "Conor Nash", ["Midfielder"], 104),
Player("CD_I998102", "Andrew Mcgrath", ["Defender", "Midfielder"], 105),
Player("CD_I290629", "Dyson Heppell", ["Defender", "Midfielder"], 106),
Player("CD_I296733", "Mark Blicavs", ["Midfielder", "Ruck"], 107),
Player("CD_I291748", "Brodie Smith", ["Defender"], 108),
Player("CD_I294674", "Nick Vlastuin", ["Defender"], 109),
Player("CD_I993794", "Blake Hardwick", ["Defender"], 110),
Player("CD_I1000072", "John Noble", ["Defender"], 111),
Player("CD_I993903", "Jacob Hopper", ["Midfielder"], 112),
Player("CD_I1001026", "Jordan Ridley", ["Defender"], 113),
Player("CD_I296254", "Jarman Impey", ["Defender"], 114),
Player("CD_I280506", "Taylor Walker", ["Forward"], 115),
Player("CD_I1000981", "Daniel Rioli", ["Defender"], 116),
Player("CD_I240283", "Shannon Hurn", ["Defender"], 117),
Player("CD_I298539", "Isaac Heeney", ["Forward"], 118),
Player("CD_I270917", "Patrick Dangerfield", ["Midfielder"], 119),
Player("CD_I994386", "Tom Atkins", ["Defender", "Midfielder"], 120),
Player("CD_I1008280", "Ed Richards", ["Defender"], 121),
Player("CD_I1005729", "Tarryn Thomas", ["Midfielder", "Forward"], 122),
Player("CD_I1006126", "James Rowbottom", ["Midfielder"], 123),
Player("CD_I294557", "Lachie Hunter", ["Midfielder"], 124),
Player("CD_I280965", "Steele Sidebottom", ["Midfielder"], 125),
Player("CD_I998529", "Ivan Soldo", ["Ruck", "Forward"], 126),
Player("CD_I1000860", "Lachie Schultz", ["Forward"], 127),
Player("CD_I998128", "Alex Witherden", ["Defender"], 128),
Player("CD_I294318", "Ollie Wines", ["Midfielder"], 129),
Player("CD_I296359", "Christian Salem", ["Defender"], 130),
Player("CD_I993946", "Ben Keays", ["Midfielder", "Forward"], 131),
Player("CD_I280737", "Liam Shiels", ["Midfielder", "Forward"], 132),
Player("CD_I1031829", "James Trezise", ["Defender"], 133),
Player("CD_I1000972", "Willem Drew", ["Midfielder"], 134),
Player("CD_I1005988", "Liam Henry", ["Midfielder", "Forward"], 135),
Player("CD_I1006114", "Bailey J. Williams", ["Ruck"], 136),
Player("CD_I994385", "Jayden Hunt", ["Defender", "Midfielder"], 137),
Player("CD_I291776", "Taylor Adams", ["Midfielder", "Forward"], 138),
Player("CD_I1009378", "Trent Rivers", ["Defender"], 139),
Player("CD_I1017088", "Ben Hobbs", ["Forward", "Midfielder"], 140),
Player("CD_I1006152", "Jordan Clark", ["Defender"], 141),
Player("CD_I1000963", "Harry Morrison", ["Midfielder"], 142),
Player("CD_I294518", "Joe Daniher", ["Forward"], 143),
Player("CD_I997142", "Peter Ladhams", ["Ruck"], 144),
Player("CD_I996464", "Darcy Macpherson", ["Defender", "Forward"], 145),
Player("CD_I1015889", "Max Holmes", ["Midfielder"], 146),
Player("CD_I290627", "Dion Prestia", ["Midfielder"], 147),
Player("CD_I993998", "Jy Simpkin", ["Midfielder"], 148),
Player("CD_I1023266", "Finn Callaghan", ["Midfielder"], 149),
Player("CD_I1004863", "Mitchell Hinge", ["Defender", "Midfielder"], 150),
Player("CD_I293713", "Brandon Ellis", ["Defender", "Midfielder"], 151),
Player("CD_I1004938", "Gryan Miers", ["Forward"], 152),
Player("CD_I294613", "Jaeger O'Meara", ["Midfielder"], 153),
Player("CD_I296355", "Luke Mcdonald", ["Defender"], 154),
Player("CD_I1006103", "Jye Caldwell", ["Midfielder", "Forward"], 155),
Player("CD_I293957", "Brodie Grundy", ["Ruck"], 156),
Player("CD_I1017110", "Josh Ward", ["Midfielder"], 157),
Player("CD_I294472", "Rory Atkins", ["Defender", "Midfielder"], 158),
Player("CD_I992010", "Brayden Maynard", ["Defender"], 159),
Player("CD_I1001398", "Matthew Kennedy", ["Midfielder", "Defender"], 160),
Player("CD_I295584", "Bradley Hill", ["Defender", "Forward"], 161),
Player("CD_I270963", "Rory Sloane", ["Midfielder"], 162),
Player("CD_I1001195", "Izak Rankine", ["Forward"], 163),
Player("CD_I996554", "Jake Waterman", ["Forward"], 164),
Player("CD_I998130", "Ben Ainsworth", ["Forward"], 165),
Player("CD_I294036", "George Hewett", ["Midfielder"], 166),
Player("CD_I295461", "Adam Saad", ["Defender"], 167),
Player("CD_I1023272", "Mitchito Owens", ["Forward"], 168),
Player("CD_I296324", "Jesse Hogan", ["Forward"], 169),
Player("CD_I993902", "Matt Flynn", ["Ruck"], 170),
Player("CD_I998133", "Jarrod Berry", ["Midfielder"], 171),
Player("CD_I298421", "Jade Gresham", ["Midfielder", "Forward"], 172),
Player("CD_I1008454", "Connor Budarick", ["Defender"], 173),
Player("CD_I294101", "Jason Johannisen", ["Forward", "Defender"], 174),
Player("CD_I295067", "James Aish", ["Midfielder"], 175),
Player("CD_I271129", "Todd Goldstein", ["Ruck"], 176),
Player("CD_I271072", "Daniel Rich", ["Defender"], 177),
Player("CD_I298630", "Kyle Langford", ["Midfielder", "Forward"], 178),
Player("CD_I993940", "Corey Wagner", ["Defender", "Midfielder"], 179),
Player("CD_I296420", "Alex Neal Bullen", ["Forward"], 180),
Player("CD_I280078", "Luke Shuey", ["Midfielder"], 181),
Player("CD_I298111", "Jeremy Finlayson", ["Ruck", "Forward"], 182),
Player("CD_I298264", "Ed Langdon", ["Midfielder"], 183),
Player("CD_I1002312", "Zac Bailey", ["Midfielder", "Forward"], 184),
Player("CD_I290832", "David Swallow", ["Midfielder"], 185),
Player("CD_I280711", "Charlie Dixon", ["Forward"], 186),
Player("CD_I993107", "Harry Himmelberg", ["Defender", "Forward"], 187),
Player("CD_I1004364", "Liam Ryan", ["Forward"], 188),
Player("CD_I1004095", "Jack Lukosius", ["Forward"], 189),
Player("CD_I1017051", "Josh Rachele", ["Forward", "Midfielder"], 190),
Player("CD_I280109", "Callan Ward", ["Midfielder", "Forward"], 191),
Player("CD_I1000887", "Mitch Lewis", ["Forward"], 192),
Player("CD_I290801", "Andrew Gaff", ["Midfielder"], 193),
Player("CD_I1006133", "Jack Ross", ["Midfielder"], 194),
Player("CD_I1020695", "Tom Emmett", ["Forward"], 195),
Player("CD_I990882", "Wayne Milera", ["Forward", "Defender"], 196),
Player("CD_I1006028", "Nick Blakey", ["Defender"], 197),
Player("CD_I280317", "Rhys Stanley", ["Ruck"], 198),
Player("CD_I998103", "Oliver Florent", ["Defender"], 199),
Player("CD_I1011936", "Justin Mcinerney", ["Midfielder"], 200),
Player("CD_I993799", "Brayden Fiorini", ["Midfielder"], 201),
Player("CD_I1012805", "Tanner Bruhn", ["Midfielder", "Forward"], 202),
Player("CD_I1017094", "Connor Macdonald", ["Forward"], 203),
Player("CD_I297255", "Mitch Mcgovern", ["Defender"], 204),
Player("CD_I998205", "Harry Perryman", ["Midfielder", "Defender"], 205),
Player("CD_I1008312", "Liam Stocker", ["Defender"], 206),
Player("CD_I993832", "Jacob Weitering", ["Defender"], 207),
Player("CD_I294859", "Jeremy Mcgovern", ["Defender"], 208),
Player("CD_I1002251", "Brent Daniels", ["Forward"], 209),
Player("CD_I292128", "Elliot Yeo", ["Defender"], 210),
Player("CD_I1004870", "Zach Guthrie", ["Defender"], 211),
Player("CD_I1009241", "Brodie Kemp", ["Defender", "Forward"], 212),
Player("CD_I992351", "Bailey Williams", ["Defender", "Midfielder"], 213),
Player("CD_I293846", "Sebastian Ross", ["Midfielder"], 214),
Player("CD_I997033", "Brennan Cox", ["Defender"], 215),
Player("CD_I1000223", "Liam Baker", ["Defender", "Forward"], 216),
Player("CD_I1003130", "Patrick Lipinski", ["Midfielder", "Forward"], 217),
Player("CD_I1000953", "Harry Mckay", ["Forward"], 218),
Player("CD_I1006059", "Keidean Coleman", ["Defender"], 219),
Player("CD_I281085", "Steven May", ["Defender"], 220),
Player("CD_I290826", "Jamie Cripps", ["Forward"], 221),
Player("CD_I291327", "Jonathon Ceglar", ["Ruck"], 222),
Player("CD_I297452", "Nick Hind", ["Defender"], 223),
Player("CD_I291783", "Dylan Shiel", ["Midfielder"], 224),
Player("CD_I999827", "Zac Fisher", ["Forward", "Midfielder"], 225),
Player("CD_I996059", "Harris Andrews", ["Defender"], 226),
Player("CD_I1008089", "Isaac Quaynor", ["Defender"], 227),
Player("CD_I1001396", "Isaac Cumming", ["Defender"], 228),
Player("CD_I1011640", "Jason Horne Francis", ["Midfielder", "Forward"], 229),
Player("CD_I1006136", "Lachlan Sholl", ["Midfielder"], 230),
Player("CD_I1002264", "Hunter Clark", ["Defender", "Midfielder"], 231),
Player("CD_I1017109", "Jake Soligo", ["Midfielder", "Forward"], 232),
Player("CD_I298280", "Jayden Laverde", ["Defender"], 233),
Player("CD_I1015873", "Archie Perkins", ["Forward"], 234),
Player("CD_I1006203", "Chayce Jones", ["Defender", "Midfielder"], 235),
Player("CD_I1008083", "Connor Idun", ["Defender"], 236),
Player("CD_I998129", "Will Brodie", ["Midfielder"], 237),
Player("CD_I1002404", "Aaron Naughton", ["Forward"], 238),
Player("CD_I295203", "Nathan Broad", ["Defender"], 239),
Player("CD_I1012829", "Will Phillips", ["Midfielder", "Forward"], 240),
Player("CD_I293801", "Jamie Elliott", ["Forward"], 241),
Player("CD_I294266", "Tom Hickey", ["Ruck"], 242),
Player("CD_I292511", "Zach Tuohy", ["Defender", "Midfielder"], 243),
Player("CD_I998791", "Jamaine Jones", ["Defender"], 244),
Player("CD_I1005577", "Sam Draper", ["Ruck"], 245),
Player("CD_I999391", "Tom Sparrow", ["Midfielder", "Forward"], 246),
Player("CD_I998114", "Jack Scrimshaw", ["Defender"], 247),
Player("CD_I295265", "Nick Haynes", ["Defender"], 248),
Player("CD_I1006096", "Xavier Duursma", ["Midfielder"], 249),
Player("CD_I1004912", "Tom De Koning", ["Ruck"], 250),
Player("CD_I996765", "Tom Papley", ["Forward"], 251),
Player("CD_I1004965", "Tristan Xerri", ["Ruck"], 252),
Player("CD_I993820", "Tom Cole", ["Defender"], 253),
Player("CD_I1003203", "Hayden Mclean", ["Forward"], 254),
Player("CD_I1013133", "Braeden Campbell", ["Defender"], 255),
Player("CD_I997846", "Conor Mckenna", ["Defender"], 256),
Player("CD_I1023477", "George Wardlaw", ["Midfielder"], 257),
Player("CD_I1002245", "Noah Balta", ["Defender", "Forward"], 258),
Player("CD_I998484", "Cameron Zurhaar", ["Forward"], 259),
Player("CD_I1002253", "Kane Farrell", ["Midfielder", "Defender"], 260),
Player("CD_I1027935", "Josh Weddle", ["Defender"], 261),
Player("CD_I1023785", "Elijah Tsatas", ["Midfielder"], 262),
Player("CD_I992128", "Ryan Burton", ["Defender"], 263),
Player("CD_I1004385", "Oscar Allen", ["Forward"], 264),
Player("CD_I1008139", "Toby Bedford", ["Forward"], 265),
Player("CD_I1002227", "Jack Higgins", ["Forward"], 266),
Player("CD_I1002235", "Cam Rayner", ["Forward", "Defender"], 267),
Player("CD_I990609", "Charlie Cameron", ["Forward"], 268),
Player("CD_I1001028", "Jack Silvagni", ["Forward"], 269),
Player("CD_I298288", "Darcy Moore", ["Defender"], 270),
Player("CD_I290746", "Scott Lycett", ["Ruck"], 271),
Player("CD_I1023270", "Marcus Windhager", ["Midfielder", "Forward"], 272),
Player("CD_I290757", "Jimmy Webster", ["Defender"], 273),
Player("CD_I992059", "Sam Switkowski", ["Forward"], 274),
Player("CD_I291548", "Ryan Lester", ["Defender"], 275),
Player("CD_I1008541", "Kysaiah Pickett", ["Forward"], 276),
Player("CD_I1001438", "Bayley Fritsch", ["Forward"], 277),
Player("CD_I280921", "Ben Cunnington", ["Midfielder", "Forward"], 278),
Player("CD_I261510", "Tom Hawkins", ["Forward"], 279),
Player("CD_I1018335", "Brayden Cook", ["Midfielder"], 280),
Player("CD_I997100", "Will Hayward", ["Forward"], 281),
Player("CD_I1015810", "Sam Durham", ["Midfielder"], 282),
Player("CD_I291313", "Jeremy Howe", ["Defender"], 283),
Player("CD_I1018016", "Seamus Mitchell", ["Defender", "Forward"], 284),
Player("CD_I1023680", "Henry Hustwaite", ["Midfielder"], 285),
Player("CD_I1000998", "Lachlan Murphy", ["Forward"], 286),
Player("CD_I1020339", "Angus Sheldrick", ["Midfielder", "Forward"], 287),
Player("CD_I1012825", "Jake Bowey", ["Defender"], 288),
Player("CD_I1008154", "Matthew Cottrell", ["Midfielder", "Forward"], 289),
Player("CD_I250365", "Travis Boak", ["Midfielder"], 290),
Player("CD_I1000864", "Lachlan Bramble", ["Defender", "Midfielder"], 291),
Player("CD_I998134", "Josh Battle", ["Defender"], 292),
Player("CD_I1017086", "Tom Brown", ["Defender"], 293),
Player("CD_I293884", "Jake Stringer", ["Forward"], 294),
Player("CD_I1011994", "Ryan Byrnes", ["Midfielder", "Forward"], 295),
Player("CD_I1007102", "Mark O'Connor", ["Defender", "Midfielder"], 296),
Player("CD_I1021031", "Luke Nankervis", ["Midfielder", "Forward"], 297),
Player("CD_I1010174", "Mitch Georgiades", ["Forward"], 298),
Player("CD_I1023167", "Brady Hough", ["Defender", "Midfielder"], 299),
Player("CD_I993979", "Sam Powell Pepper", ["Forward"], 300),
Player("CD_I1006137", "Curtis Taylor", ["Midfielder", "Forward"], 301),
Player("CD_I991930", "Darcy Byrne Jones", ["Defender", "Forward"], 302),
Player("CD_I1002228", "Lachie Fogarty", ["Midfielder", "Forward"], 303),
Player("CD_I990827", "Jack Graham", ["Midfielder", "Forward"], 304),
Player("CD_I1001024", "Ned Reeves", ["Ruck"], 305),
Player("CD_I1006135", "Xavier O'Halloran", ["Midfielder", "Forward"], 306),
Player("CD_I993816", "Darcy Tucker", ["Midfielder", "Forward"], 307),
Player("CD_I1017067", "Darcy Wilmot", ["Defender", "Midfielder"], 308),
Player("CD_I296351", "Jack Billings", ["Midfielder"], 309),
Player("CD_I998260", "Jack Bowes", ["Defender"], 310),
Player("CD_I280744", "Luke Breust", ["Forward"], 311),
Player("CD_I999331", "Darcy Fogarty", ["Forward"], 312),
Player("CD_I291962", "Chad Wingard", ["Forward"], 313),
Player("CD_I1013224", "Heath Chapman", ["Defender"], 314),
Player("CD_I291849", "Brody Mihocek", ["Forward"], 315),
Player("CD_I1008855", "Oskar Baker", ["Midfielder"], 316),
Player("CD_I270896", "Trent Cotchin", ["Midfielder", "Forward"], 317),
Player("CD_I1004998", "Todd Marshall", ["Forward"], 318),
Player("CD_I1009191", "Miles Bergman", ["Midfielder", "Defender"], 319),
Player("CD_I1009195", "Dylan Williams", ["Forward", "Defender"], 320),
Player("CD_I1009301", "Jamarra Ugle Hagan", ["Forward"], 321),
Player("CD_I1001017", "Nick Larkey", ["Forward"], 322),
Player("CD_I294125", "Nathan Wilson", ["Defender"], 323),
Player("CD_I298470", "Shane Mcadam", ["Forward"], 324),
Player("CD_I294592", "Kamdyn Mcintosh", ["Midfielder"], 325),
Player("CD_I290307", "Dane Rampe", ["Defender"], 326),
Player("CD_I1000980", "Lloyd Meek", ["Ruck", "Forward"], 327),
Player("CD_I998647", "Mason Cox", ["Ruck", "Forward"], 328),
Player("CD_I993953", "Eric Hipwood", ["Forward"], 329),
Player("CD_I993795", "David Cuningham", ["Midfielder", "Forward"], 330),
Player("CD_I281091", "Hugh Greenwood", ["Midfielder"], 331),
Player("CD_I1007099", "Harry Sharp", ["Midfielder"], 332),
Player("CD_I992374", "Dan Butler", ["Forward"], 333),
Player("CD_I1011981", "Josh Worrell", ["Defender"], 334),
Player("CD_I1005330", "Kade Chandler", ["Forward"], 335),
Player("CD_I297473", "Jake Kelly", ["Defender"], 336),
Player("CD_I294508", "Aidan Corr", ["Defender"], 337),
Player("CD_I1007591", "Brynn Teakle", ["Ruck"], 338),
Player("CD_I298290", "Marc Pittonet", ["Ruck"], 339),
Player("CD_I990740", "Rory Lobb", ["Forward"], 340),
Player("CD_I1011803", "Cody Weightman", ["Forward"], 341),
Player("CD_I290838", "Jack Darling", ["Forward"], 342),
Player("CD_I1023495", "Oliver Hollands", ["Midfielder"], 343),
Player("CD_I1012218", "Luke Pedlar", ["Forward"], 344),
Player("CD_I999321", "Michael Frederick", ["Forward"], 345),
Player("CD_I992462", "Daniel Howe", ["Midfielder"], 346),
Player("CD_I1009383", "Trey Ruscoe", ["Defender"], 347),
Player("CD_I298289", "Peter Wright", ["Forward"], 348),
Player("CD_I1023025", "Reuben Ginbey", ["Defender", "Midfielder"], 349),
Player("CD_I1006143", "Max King", ["Forward"], 350),
Player("CD_I1012833", "Eddie Ford", ["Forward"], 351),
Player("CD_I1011659", "Tom Powell", ["Midfielder", "Forward"], 352),
Player("CD_I1008882", "Charlie Ballard", ["Defender"], 353),
Player("CD_I1009708", "Jack Buckley", ["Defender"], 354),
Player("CD_I994539", "Sam Petrevski Seton", ["Forward"], 355),
Player("CD_I1017932", "Jack Peris", ["Midfielder", "Forward"], 356),
Player("CD_I294068", "Andrew Phillips", ["Ruck", "Forward"], 357),
Player("CD_I297456", "Nick Holman", ["Forward"], 358),
Player("CD_I293651", "Hayden Crozier", ["Defender"], 359),
Player("CD_I1006232", "Sam Wicks", ["Forward"], 360),
Player("CD_I1016825", "Matthew Johnson", ["Midfielder"], 361),
Player("CD_I1011589", "Caleb Poulter", ["Midfielder"], 362),
Player("CD_I1002256", "Paddy Dow", ["Midfielder"], 363),
Player("CD_I997316", "Lewis Young", ["Defender"], 364),
Player("CD_I1013220", "Nathan O'Driscoll", ["Midfielder"], 365),
Player("CD_I998390", "Changkuoth Jiath", ["Defender"], 366),
Player("CD_I290675", "Daniel Lloyd", ["Forward"], 367),
Player("CD_I298302", "Caleb Marchbank", ["Defender"], 368),
Player("CD_I1012860", "Oliver Henry", ["Forward"], 369),
Player("CD_I999326", "Brad Close", ["Forward"], 370),
Player("CD_I1005247", "Sam Taylor", ["Defender"], 371),
Player("CD_I1004909", "Lachie Young", ["Defender"], 372),
Player("CD_I1000932", "Tom Doedee", ["Defender"], 373),
Player("CD_I291720", "Will Hoskin Elliott", ["Forward", "Midfielder"], 374),
Player("CD_I293581", "Lincoln Mccarthy", ["Forward"], 375),
Player("CD_I281124", "Levi Casboult", ["Forward"], 376),
Player("CD_I1013268", "Alex Davies", ["Midfielder", "Forward"], 377),
Player("CD_I291848", "Robbie Fox", ["Defender"], 378),
Player("CD_I298419", "Brandan Parfitt", ["Midfielder"], 379),
Player("CD_I250395", "Jack Riewoldt", ["Forward"], 380),
Player("CD_I1009226", "Thomson Dow", ["Midfielder"], 381),
Player("CD_I291978", "Harry Cunningham", ["Defender", "Forward"], 382),
Player("CD_I294624", "Lachie Plowman", ["Defender"], 383),
Player("CD_I1011954", "Nick Bryan", ["Ruck", "Forward"], 384),
Player("CD_I1004848", "Dylan Stephens", ["Midfielder"], 385),
Player("CD_I291351", "Jack Gunston", ["Forward"], 386),
Player("CD_I296225", "Willie Rioli", ["Midfielder", "Forward"], 387),
Player("CD_I1013230", "Logan Mcdonald", ["Forward"], 388),
Player("CD_I298281", "Jake Lever", ["Defender"], 389),
Player("CD_I1005599", "Luke Foley", ["Defender"], 390),
Player("CD_I1008123", "Jake Riccardi", ["Forward"], 391),
Player("CD_I991988", "Zak Jones", ["Midfielder"], 392),
Player("CD_I291819", "Adam Tomlinson", ["Defender"], 393),
Player("CD_I1017118", "Josh Goater", ["Defender", "Midfielder"], 394),
Player("CD_I996580", "Ethan Hughes", ["Defender", "Midfielder"], 395),
Player("CD_I295446", "Sam Collins", ["Defender"], 396),
Player("CD_I294596", "Tim Membrey", ["Forward"], 397),
Player("CD_I1004985", "Ben Paton", ["Defender"], 398),
Player("CD_I296190", "Jack Martin", ["Forward"], 399),
Player("CD_I1021013", "Ned Moyle", ["Ruck"], 400),
Player("CD_I1008282", "Xavier O'Neill", ["Midfielder", "Forward"], 401),
Player("CD_I990290", "Tom Barrass", ["Defender"], 402),
Player("CD_I997230", "Tyson Stengle", ["Forward"], 403),
Player("CD_I1006550", "Jack Petruccelle", ["Forward"], 404),
Player("CD_I297504", "Daniel Mcstay", ["Forward"], 405),
Player("CD_I1002240", "Jaidyn Stephenson", ["Forward"], 406),
Player("CD_I1005000", "Laitham Vandermeer", ["Forward"], 407),
Player("CD_I990606", "Will Snelling", ["Forward"], 408),
Player("CD_I1008384", "Riley Thilthorpe", ["Forward"], 409),
Player("CD_I993480", "Dougal Howard", ["Defender"], 410),
Player("CD_I1018075", "Lachlan Gollant", ["Forward"], 411),
Player("CD_I1014038", "Callum M. Brown", ["Defender", "Forward"], 412),
Player("CD_I270146", "Ed Curnow", ["Midfielder", "Forward"], 413),
Player("CD_I296041", "Tim O'Brien", ["Defender"], 414),
Player("CD_I1002143", "Ben Mckay", ["Defender"], 415),
Player("CD_I291533", "Tom Mcdonald", ["Forward"], 416),
Player("CD_I1029261", "Bailey Macdonald", ["Defender"], 417),
Player("CD_I1004757", "Beau Mccreery", ["Forward"], 418),
Player("CD_I1015370", "Max Michalanney", ["Defender"], 419),
Player("CD_I1012819", "Josh Treacy", ["Forward"], 420),
Player("CD_I1004034", "Brandon Zerk Thatcher", ["Defender"], 421),
Player("CD_I1020137", "Mattaes Phillipou", ["Midfielder", "Forward"], 422),
Player("CD_I997933", "Griffin Logue", ["Defender", "Forward"], 423),
Player("CD_I293813", "Tom J. Lynch", ["Forward"], 424),
Player("CD_I1008893", "Harrison Petty", ["Defender", "Forward"], 425),
Player("CD_I1013197", "Sam Banks", ["Defender", "Midfielder"], 426),
Player("CD_I1006127", "Rhylee West", ["Forward"], 427),
Player("CD_I1020250", "Neil Erasmus", ["Midfielder"], 428),
Player("CD_I1017720", "Jacob Van Rooyen", ["Forward"], 429),
Player("CD_I1013511", "Tyler Brockman", ["Forward"], 430),
Player("CD_I1005992", "Joel Jeffrey", ["Forward"], 431),
Player("CD_I290797", "Alex Keath", ["Defender"], 432),
Player("CD_I994599", "Riley Bonner", ["Defender", "Midfielder"], 433),
Player("CD_I240399", "Lance Franklin", ["Forward"], 434),
Player("CD_I1023500", "Bailey Humphrey", ["Midfielder", "Forward"], 435),
Player("CD_I1021103", "Mitch Knevitt", ["Midfielder"], 436),
Player("CD_I1013974", "Mark Keane", ["Defender"], 437),
Player("CD_I1012862", "Elijah Hollands", ["Midfielder"], 438),
Player("CD_I298437", "Callum Ah Chee", ["Midfielder"], 439),
Player("CD_I294469", "Aliir Aliir", ["Defender"], 440),
Player("CD_I1008091", "Joel Amartey", ["Forward"], 441),
Player("CD_I1008543", "Harry Schoenberg", ["Midfielder"], 442),
Player("CD_I291867", "Ben Brown", ["Forward"], 443),
Player("CD_I293716", "Jarryd Lyons", ["Midfielder"], 444),
Player("CD_I1013973", "Matthew Owies", ["Forward"], 445),
Player("CD_I991773", "Billy Frampton", ["Defender", "Ruck"], 446),
Player("CD_I290085", "Taylor Duryea", ["Defender"], 447),
Player("CD_I1002248", "Sam Hayes", ["Ruck"], 448),
Player("CD_I996232", "Matt Guelfi", ["Forward"], 449),
Player("CD_I1023784", "Anthony Caminiti", ["Forward"], 450),
Player("CD_I1013409", "James Jordon", ["Midfielder"], 451),
Player("CD_I1023708", "Jaspa Fletcher", ["Midfielder"], 452),
Player("CD_I1000061", "Callum Coleman Jones", ["Ruck", "Forward"], 453),
Player("CD_I291357", "Gary Rohan", ["Forward"], 454),
Player("CD_I993771", "Marlion Pickett", ["Midfielder", "Forward"], 455),
Player("CD_I1006148", "Bobby Hill", ["Forward"], 456),
Player("CD_I1017700", "Jesse Motlop", ["Forward"], 457),
Player("CD_I293738", "Sam Frost", ["Defender"], 458),
Player("CD_I1000937", "Jack Henry", ["Defender"], 459),
Player("CD_I1008510", "Corey Durdin", ["Forward"], 460),
Player("CD_I281007", "Michael Walters", ["Forward"], 461),
Player("CD_I1029416", "Ryan Maric", ["Forward"], 462),
Player("CD_I296291", "Jake Kolodjashnij", ["Defender"], 463),
Player("CD_I291570", "Nat Fyfe", ["Midfielder", "Forward"], 464),
Player("CD_I1012807", "Sam Berry", ["Midfielder"], 465),
Player("CD_I1002401", "Brandon Starcevich", ["Defender"], 466),
Player("CD_I298358", "Oleg Markov", ["Defender"], 467),
Player("CD_I994077", "Mabior Chol", ["Forward"], 468),
Player("CD_I1017396", "Mac Andrew", ["Defender"], 469),
Player("CD_I1006030", "Jacob Koschitzke", ["Forward"], 470),
Player("CD_I280824", "Jake Melksham", ["Forward"], 471),
Player("CD_I1023482", "Cam Mackenzie", ["Midfielder", "Forward"], 472),
Player("CD_I1002795", "Jordan Boyd", ["Defender"], 473),
Player("CD_I992048", "Anthony Scott", ["Midfielder", "Forward"], 474),
Player("CD_I1016268", "Alex Cincotta", ["Defender", "Midfielder"], 475),
Player("CD_I1016433", "Shannon Neale", ["Forward"], 476),
Player("CD_I1006013", "James Peatling", ["Forward"], 477),
Player("CD_I1017063", "Toby Conway", ["Ruck"], 478),
Player("CD_I1009229", "Sam De Koning", ["Defender"], 479),
Player("CD_I1020594", "Jye Amiss", ["Forward"], 480),
Player("CD_I993806", "Sam Weideman", ["Forward"], 481),
Player("CD_I1009189", "Jack Mahony", ["Forward"], 482),
Player("CD_I998180", "Bailey Banfield", ["Forward"], 483),
Player("CD_I1006576", "Luke Edwards", ["Midfielder", "Forward"], 484),
Player("CD_I1012828", "Finlay Macrae", ["Midfielder", "Forward"], 485),
Player("CD_I1017091", "Jai Serong", ["Forward"], 486),
Player("CD_I1020959", "Daniel Turner", ["Defender"], 487),
Player("CD_I1017093", "Cooper Hamilton", ["Defender", "Midfielder"], 488),
Player("CD_I297899", "James Harmes", ["Midfielder", "Forward"], 489),
Player("CD_I1012386", "Samson Ryan", ["Ruck", "Forward"], 490),
Player("CD_I1010708", "Sam Butler", ["Forward"], 491),
Player("CD_I992499", "Kayne Turner", ["Defender", "Forward"], 492),
Player("CD_I1002347", "Jack Payne", ["Defender"], 493),
Player("CD_I1023496", "Noah Long", ["Midfielder", "Forward"], 494),
Player("CD_I997823", "Josh Rotham", ["Defender"], 495),
Player("CD_I1020670", "Elijah Hewett", ["Midfielder"], 496),
Player("CD_I1017703", "Judd Mcvee", ["Defender", "Midfielder"], 497),
Player("CD_I1005199", "Elliott Himmelberg", ["Forward"], 498),
Player("CD_I1012857", "Jack Ginnivan", ["Forward"], 499),
Player("CD_I997974", "Ash Johnson", ["Forward"], 500),
Player("CD_I1008198", "Tom Mccartin", ["Defender"], 501),
Player("CD_I1006144", "Ben King", ["Forward"], 502),
Player("CD_I1002282", "Charlie Spargo", ["Forward"], 503),
Player("CD_I1002403", "Ben Miller", ["Defender", "Ruck"], 504),
Player("CD_I1011771", "Flynn Perez", ["Defender", "Midfielder"], 505),
Player("CD_I298211", "Darcy Fort", ["Ruck", "Forward"], 506),
Player("CD_I999824", "Quinton Narkle", ["Midfielder"], 507),
Player("CD_I1005986", "Malcolm Rosas", ["Forward"], 508),
Player("CD_I1017095", "Miller Bergman", ["Defender"], 509),
Player("CD_I1020979", "Cooper Harvey", ["Midfielder", "Forward"], 510),
Player("CD_I1011583", "Lachie Jones", ["Defender", "Forward"], 511),
Player("CD_I990816", "Aaron Francis", ["Defender", "Forward"], 512),
Player("CD_I1008185", "Ned Mchenry", ["Forward"], 513),
Player("CD_I1018018", "Cooper Sharman", ["Defender", "Forward"], 514),
Player("CD_I1015827", "Nik Cox", ["Midfielder"], 515),
Player("CD_I298409", "Alex Pearce", ["Defender"], 516),
Player("CD_I1005107", "Nathan Murphy", ["Defender"], 517),
Player("CD_I1024666", "Lloyd Johnston", ["Defender"], 518),
Player("CD_I1002947", "Paul Curtis", ["Forward"], 519),
Player("CD_I1013201", "Jye Menzie", ["Forward"], 520),
Player("CD_I295222", "Joel Hamling", ["Defender"], 521),
Player("CD_I993917", "Ben Long", ["Defender", "Forward"], 522),
Player("CD_I1013153", "Patrick Parnell", ["Defender"], 523),
Player("CD_I1009308", "Noah Cumberland", ["Forward"], 524),
Player("CD_I1009421", "Finn Maginness", ["Midfielder", "Defender"], 525),
Player("CD_I1009386", "Jaxon Prior", ["Midfielder"], 526),
Player("CD_I990840", "Jack Hayes", ["Forward"], 527),
Player("CD_I1004894", "Aiden Bonar", ["Defender"], 528),
Player("CD_I1006303", "Fergus Greene", ["Forward"], 529),
Player("CD_I1013611", "Sam Sturt", ["Forward"], 530),
Player("CD_I1011755", "Harrison Jones", ["Forward"], 531),
Player("CD_I281078", "Liam Jones", ["Defender"], 532),
Player("CD_I290527", "Trent Mckenzie", ["Defender"], 533),
Player("CD_I1017057", "Campbell Chesser", ["Defender", "Midfielder"], 534),
Player("CD_I294013", "Sean Lemmens", ["Defender"], 535),
Player("CD_I990978", "Greg Clark", ["Midfielder"], 536),
Player("CD_I1021200", "Lachlan Mcandrew", ["Ruck", "Forward"], 537),
Player("CD_I1008975", "Kaine Baldwin", ["Forward"], 538),
Player("CD_I1005144", "Massimo D'Ambrosio", ["Defender"], 539),
Player("CD_I1017124", "Ned Long", ["Midfielder"], 540),
Player("CD_I291492", "Josh Bruce", ["Forward", "Defender"], 541),
Player("CD_I1004819", "Jed Mcentee", ["Forward"], 542),
Player("CD_I293854", "Matt Taberner", ["Forward"], 543),
Player("CD_I1008478", "Rhyan Mansell", ["Defender", "Forward"], 544),
Player("CD_I1015781", "Charlie Comben", ["Forward"], 545),
Player("CD_I1020802", "Jai Culley", ["Midfielder"], 546),
Player("CD_I996743", "Lewis Melican", ["Defender"], 547),
Player("CD_I1021353", "Lachie Cowan", ["Defender"], 548),
Player("CD_I1002220", "Esava Ratugolea", ["Ruck", "Forward"], 549),
Player("CD_I290160", "Michael Hibberd", ["Defender"], 550),
Player("CD_I1011243", "Callum Jamieson", ["Ruck"], 551),
Player("CD_I293883", "Jed Bews", ["Defender"], 552),
Player("CD_I298312", "Paddy Mccartin", ["Defender"], 553),
Player("CD_I1008230", "Nick Murray", ["Defender"], 554),
Player("CD_I1003192", "Connor West", ["Midfielder", "Forward"], 555),
Player("CD_I1017128", "Dante Visentini", ["Ruck", "Forward"], 556),
Player("CD_I1017043", "Judson Clarke", ["Forward"], 557),
Player("CD_I1004940", "Sam Simpson", ["Midfielder", "Forward"], 558),
Player("CD_I1015332", "Harvey Harrison", ["Forward"], 559),
Player("CD_I296269", "Darcy Gardiner", ["Defender"], 560),
Player("CD_I991939", "Zaine Cordy", ["Defender", "Forward"], 561),
Player("CD_I1009029", "James Borlase", ["Defender"], 562),
Player("CD_I1017255", "Francis Evans", ["Forward"], 563),
Player("CD_I1011985", "Hugo Ralphsmith", ["Defender"], 564),
Player("CD_I1015777", "Ryan Angwin", ["Midfielder", "Forward"], 565),
Player("CD_I997501", "Ryan Gardner", ["Defender"], 566),
Player("CD_I1012127", "Brandon Ryan", ["Forward"], 567),
Player("CD_I1009410", "Brandon Walker", ["Defender"], 568),
Player("CD_I1009385", "Deven Robertson", ["Midfielder", "Forward"], 569),
Player("CD_I1018425", "Taj Woewodin", ["Midfielder", "Forward"], 570),
Player("CD_I1009320", "Hewago Paul Oea", ["Forward"], 571),
Player("CD_I1005053", "Noah Answerth", ["Defender"], 572),
Player("CD_I296334", "Orazio Fantasia", ["Forward"], 573),
Player("CD_I1021015", "Karl Worner", ["Defender", "Midfielder"], 574),
Player("CD_I280819", "Dylan Grimes", ["Defender"], 575),
Player("CD_I1020371", "Jack Williams", ["Ruck", "Forward"], 576),
Player("CD_I1006533", "Riley Garcia", ["Forward"], 577),
Player("CD_I1018433", "Tylar Young", ["Defender"], 578),
Player("CD_I999715", "Jy Farrar", ["Defender"], 579),
Player("CD_I1001449", "Mitch Hannan", ["Defender"], 580),
Player("CD_I1002938", "Josh Honey", ["Forward"], 581),
Player("CD_I996442", "Ryan Clarke", ["Forward"], 582),
Player("CD_I1003520", "Darragh Joyce", ["Defender"], 583),
Player("CD_I1012863", "Cameron Fleeton", ["Defender"], 584),
Player("CD_I1023537", "Jhye Clark", ["Midfielder"], 585),
Player("CD_I1005326", "Jackson Mead", ["Midfielder", "Forward"], 586),
Player("CD_I1017933", "Alwyn Davey", ["Midfielder", "Forward"], 587),
Player("CD_I1011647", "Phoenix Spicer", ["Forward"], 588),
Player("CD_I1013462", "Jase Burgoyne", ["Defender"], 589),
Player("CD_I1017114", "Tyler Sonsie", ["Midfielder", "Forward"], 590),
Player("CD_I292145", "Tom Jonas", ["Defender"], 591),
Player("CD_I1005547", "Josh Corbett", ["Forward"], 592),
Player("CD_I291753", "Sam Day", ["Forward"], 593),
Player("CD_I1012881", "Ollie Lord", ["Defender", "Forward"], 594),
Player("CD_I996483", "Toby Mclean", ["Midfielder", "Forward"], 595),
Player("CD_I1003546", "Joel Smith", ["Defender"], 596),
Player("CD_I294092", "Anthony Mcdonald Tipungwuti", ["Forward"], 597),
Player("CD_I1002922", "Jack Bytel", ["Midfielder"], 598),
Player("CD_I1009186", "Trent Bianco", ["Midfielder", "Forward"], 599),
Player("CD_I1012144", "Kallan Dawson", ["Defender"], 600),
Player("CD_I1017751", "Josh Fahey", ["Defender", "Midfielder"], 601),
Player("CD_I1020586", "Arthur Jones", ["Forward"], 602),
Player("CD_I1011437", "Harry Edwards", ["Defender"], 603),
Player("CD_I1004995", "Jordon Butts", ["Defender"], 604),
Player("CD_I1012852", "Charlie Lazzaro", ["Forward"], 605),
Player("CD_I1008616", "Matthew Coulthard", ["Forward"], 606),
Player("CD_I1032966", "James O'Donnell", ["Defender"], 607),
Player("CD_I1006100", "Thomas Berry", ["Forward"], 608),
Player("CD_I1025034", "Oliver Dempsey", ["Forward"], 609),
Player("CD_I1020968", "Jackson Archer", ["Defender"], 610),
Player("CD_I290314", "Lachlan Keeffe", ["Defender"], 611),
Player("CD_I1014026", "Kai Lohmann", ["Forward"], 612),
Player("CD_I1015929", "Luke Cleary", ["Defender"], 613),
Player("CD_I1024982", "Oisin Mullin", ["Defender"], 614),
Player("CD_I1012210", "Matt Roberts", ["Midfielder", "Forward"], 615),
Player("CD_I1017665", "Bodhi Uwland", ["Defender", "Midfielder"], 616),
Player("CD_I1027965", "Max Ramsden", ["Ruck", "Forward"], 617),
Player("CD_I1002259", "Lochie O'Brien", ["Midfielder", "Forward"], 618),
Player("CD_I1011449", "Zane Trew", ["Midfielder", "Forward"], 619),
Player("CD_I1017718", "Rhett Bazzo", ["Defender"], 620),
Player("CD_I1009551", "Maurice Rioli", ["Forward"], 621),
Player("CD_I1021122", "Harry Rowston", ["Midfielder"], 622),
Player("CD_I1008285", "Will Kelly", ["Defender"], 623),
Player("CD_I1004530", "Jacob Wehr", ["Midfielder"], 624),
Player("CD_I1004113", "Will Gould", ["Defender"], 625),
Player("CD_I1009015", "Lachlan Mcneil", ["Midfielder", "Forward"], 626),
Player("CD_I1023475", "Blake Drury", ["Midfielder", "Forward"], 627),
Player("CD_I291509", "Adam Kennedy", ["Defender", "Forward"], 628),
Player("CD_I1013093", "Denver Grainger Barras", ["Defender"], 629),
Player("CD_I296280", "James Tsitas", ["Midfielder", "Forward"], 630),
Player("CD_I1027971", "Toby Mcmullin", ["Forward"], 631),
Player("CD_I993841", "Josh Schache", ["Forward"], 632),
Player("CD_I294643", "Alex Sexton", ["Forward"], 633),
Player("CD_I1012826", "Bailey Laurie", ["Midfielder", "Forward"], 634),
Player("CD_I1019038", "Aaron Cadman", ["Forward"], 635),
Player("CD_I1011839", "James Blanck", ["Defender"], 636),
Player("CD_I1021152", "Jacob Bauer", ["Forward"], 637),
Player("CD_I993797", "Tom Wilson", ["Defender", "Forward"], 638),
Player("CD_I1000068", "Chris Burgess", ["Defender", "Forward"], 639),
Player("CD_I1018424", "Corey Warner", ["Midfielder", "Forward"], 640),
Player("CD_I1013278", "Reef Mcinnes", ["Forward"], 641),
Player("CD_I1017126", "Sam Darcy", ["Defender", "Forward"], 642),
Player("CD_I1017078", "Josh Sinn", ["Midfielder", "Forward"], 643),
Player("CD_I1020104", "Jakob Ryan", ["Defender"], 644),
Player("CD_I1009392", "Jack Buller", ["Forward"], 645),
Player("CD_I1023144", "Robert Hansen Jr", ["Forward"], 646),
Player("CD_I1013138", "Marc Sheather", ["Defender", "Forward"], 647),
Player("CD_I1023542", "Ted Clohesy", ["Midfielder"], 648),
Player("CD_I296588", "Robbie Mccomb", ["Midfielder", "Forward"], 649),
Player("CD_I1013978", "James Madden", ["Defender"], 650),
Player("CD_I1015862", "Conor Stone", ["Forward"], 651),
Player("CD_I1031801", "Ethan Stanley", ["Midfielder", "Forward"], 652),
Player("CD_I1000960", "Max Lynch", ["Ruck"], 653),
Player("CD_I294504", "Tom Clurey", ["Defender"], 654),
Player("CD_I1021108", "James Tunstill", ["Midfielder"], 655),
Player("CD_I998782", "Buku Khamis", ["Defender", "Forward"], 656),
Player("CD_I1013233", "Jack Carroll", ["Forward"], 657),
Player("CD_I1008171", "Tyler Brown", ["Midfielder", "Forward"], 658),
Player("CD_I997254", "Nathan Kreuger", ["Forward"], 659),
Player("CD_I1020057", "Harry Barnett", ["Ruck"], 660),
Player("CD_I1027021", "Josh Carmichael", ["Midfielder", "Forward"], 661),
Player("CD_I999309", "Jackson Hately", ["Midfielder"], 662),
Player("CD_I1021090", "Cooper Whyte", ["Midfielder", "Forward"], 663),
Player("CD_I1018969", "Cian Mcbride", ["Defender", "Ruck"], 664),
Player("CD_I270325", "Robbie Tarrant", ["Defender"], 665),
Player("CD_I1017754", "Patrick Voss", ["Forward"], 666),
Player("CD_I1008691", "Leek Aleer", ["Defender"], 667),
Player("CD_I291861", "Jed Anderson", ["Midfielder", "Forward"], 668),
Player("CD_I1017757", "William Edwards", ["Defender"], 669),
Player("CD_I271045", "Nic Naitanui", ["Ruck"], 670),
Player("CD_I1006087", "Caleb Graham", ["Defender"], 671),
Player("CD_I1018296", "Kalin Lane", ["Ruck"], 672),
Player("CD_I1018106", "Joshua Bennetts", ["Midfielder", "Forward"], 673),
Player("CD_I1020595", "Jordyn Baker", ["Midfielder"], 674),
Player("CD_I1019945", "Phoenix Foster", ["Ruck", "Forward"], 675),
Player("CD_I1020066", "Thomas Scully", ["Forward"], 676),
Player("CD_I294429", "Luke Dunstan", ["Midfielder"], 677),
Player("CD_I1020627", "Hamish Free", ["Ruck"], 678),
Player("CD_I1008159", "Will Hamill", ["Defender"], 679),
Player("CD_I1017970", "Conrad Williams", ["Midfielder"], 680),
Player("CD_I1017961", "Jayden Davey", ["Forward"], 681),
Player("CD_I1020668", "Joshua Draper", ["Forward"], 682),
Player("CD_I1018020", "Flynn Kroeger", ["Midfielder"], 683),
Player("CD_I998195", "Tom Highmore", ["Defender"], 684),
Player("CD_I1008825", "Mitch Hardie", ["Midfielder"], 685),
Player("CD_I1008460", "Harrison Arnold", ["Defender"], 686),
Player("CD_I992644", "Braydon Preuss", ["Ruck"], 687),
Player("CD_I1005150", "Emerson Jeka", ["Defender", "Forward"], 688),
Player("CD_I1009291", "Isiah Winder", ["Forward"], 689),
Player("CD_I1030866", "Kyah Farris White", ["Ruck"], 690),
Player("CD_I1029973", "Oliver Sestan", ["Forward"], 691),
Player("CD_I1013260", "Carter Michael", ["Defender"], 692),
Player("CD_I1015748", "Aiden Begg", ["Ruck", "Forward"], 693),
Player("CD_I290246", "Tom Campbell", ["Ruck", "Forward"], 694),
Player("CD_I1029288", "Kaelan Bradtke", ["Forward"], 695),
Player("CD_I1027837", "Clay Tucker", ["Ruck"], 696),
Player("CD_I991933", "Jason Castagna", ["Forward"], 697),
Player("CD_I1023486", "Matthew Jefferson", ["Forward"], 698),
Player("CD_I992054", "Roarke Smith", ["Midfielder"], 699),
Player("CD_I1020424", "Jaiden Hunter", ["Forward"], 700),
Player("CD_I1016270", "Brodie Mclaughlin", ["Forward"], 701),
Player("CD_I1022844", "Oscar Steene", ["Ruck"], 702),
Player("CD_I1023489", "Hudson O’Keeffe", ["Ruck"], 703),
Player("CD_I1023274", "Kye Turner", ["Defender"], 704),
Player("CD_I1023273", "Hugo Hall Kahan", ["Forward"], 705),
Player("CD_I1023142", "Tyrell Dewar", ["Defender", "Forward"], 706),
Player("CD_I1023275", "Seth Campbell", ["Forward"], 707),
Player("CD_I1023446", "Alex Mirkov", ["Ruck"], 708),
Player("CD_I1023346", "Liam Reidy", ["Ruck"], 709),
Player("CD_I1021306", "Cameron Owen ", ["Ruck"], 710),
Player("CD_I1021276", "Kyle Marshall", ["Defender"], 711),
Player("CD_I1021660", "Mate Colina", ["Ruck", "Forward"], 712),
Player("CD_I1023056", "Steely Green", ["Midfielder"], 713),
Player("CD_I1022889", "Eric Benning", ["Ruck"], 714),
Player("CD_I1027862", "Osca Riccardi", ["Defender", "Forward"], 715),
Player("CD_I1027852", "Oscar Murdoch", ["Defender"], 716),
Player("CD_I1028105", "Shadeau Brain", ["Forward"], 717),
Player("CD_I1029882", "Darryl Mcdowell White", ["Midfielder", "Forward"], 718),
Player("CD_I280988", "Travis Colyer", ["Forward"], 719),
Player("CD_I992330", "Jordon Sweet", ["Ruck"], 720),
Player("CD_I1023464", "Jason Gillbee", ["Defender", "Midfielder"], 721),
Player("CD_I1023743", "Nicholas Madden", ["Ruck", "Forward"], 722),
Player("CD_I1024939", "Fionn O'Hara", ["Defender"], 723),
Player("CD_I1024686", "Anthony Munkara", ["Forward"], 724),
Player("CD_I1027701", "Max Knobel", ["Ruck"], 725),
Player("CD_I1024096", "Caleb Mitchell", ["Defender", "Midfielder"], 726),
Player("CD_I1015329", "Billy Dowling", ["Midfielder"], 727),
Player("CD_I1015323", "Isaac Keeler", ["Ruck", "Forward"], 728),
Player("CD_I1009380", "Jeremy Sharp", ["Midfielder"], 729),
Player("CD_I1008537", "Josh Morris", ["Defender"], 730),
Player("CD_I1027959", "Olli Hotton", ["Midfielder", "Forward"], 731),
Player("CD_I1021296", "Tom Mccallum", ["Defender"], 732),
Player("CD_I1017087", "Harvey Gallagher", ["Defender", "Forward"], 733),
Player("CD_I1023174", "Jed Adams", ["Defender"], 734),
Player("CD_I297767", "Sam Durdin", ["Defender"], 735),
Player("CD_I294685", "Zac Williams", ["Defender"], 736),
Player("CD_I1022999", "Kaleb Smith", ["Defender"], 737),
Player("CD_I1023534", "Hugh Bond", ["Midfielder"], 738),
Player("CD_I1004069", "Rhett Montgomerie", ["Defender"], 739),
Player("CD_I1011929", "Sam Philp", ["Forward"], 740),
Player("CD_I1015822", "Dominic Bedendo", ["Midfielder"], 741),
Player("CD_I997206", "Andrew Mcpherson", ["Defender"], 742),
Player("CD_I1023531", "Jack O'Sullivan", ["Forward"], 743),
Player("CD_I1008239", "Joe Richards", ["Midfielder", "Forward"], 744),
Player("CD_I1020072", "Harry Lemmey", ["Forward"], 745),
Player("CD_I1020650", "Darcy Jones", ["Midfielder"], 746),
Player("CD_I1023530", "Jacob Konstanty", ["Forward"], 747),
Player("CD_I1005717", "Nick Coffield", ["Defender"], 748),
Player("CD_I294168", "Marcus Adams", ["Defender"], 749),
Player("CD_I1027921", "Max Gruzewski", ["Defender"], 750),
Player("CD_I280804", "Phil Davis", ["Defender"], 751),
Player("CD_I1009228", "Leo Connolly", ["Defender"], 752),
Player("CD_I294654", "James Stewart", ["Defender"], 753),
Player("CD_I1022915", "Edward Allan", ["Midfielder"], 754),
Player("CD_I993828", "Rhys Mathieson", ["Midfielder", "Forward"], 755),
Player("CD_I1023787", "Charlie Clarke", ["Forward"], 756),
Player("CD_I1023533", "Jaxon Binns", ["Midfielder", "Forward"], 757),
Player("CD_I1023547", "James Van Es", ["Defender"], 758),
Player("CD_I1022927", "Hugh Davies", ["Defender"], 759),
Player("CD_I1004948", "Cooper Stephens", ["Midfielder"], 760),
Player("CD_I298450", "Connor Blakely", ["Midfielder"], 761),
Player("CD_I1023544", "Brayden George", ["Forward"], 762),
Player("CD_I1023487", "Lewis Hayes", ["Defender"], 763),
Player("CD_I1023498", "Cooper Vickery", ["Defender"], 764),
Player("CD_I1023017", "Jedd Busslinger", ["Defender"], 765),
Player("CD_I1023502", "Coby Burgiel", ["Midfielder", "Forward"], 766),
Player("CD_I1015830", "Domanic Akuei", ["Defender", "Ruck"], 767),
Player("CD_I1007238", "Jake Stein", ["Defender"], 768),
Player("CD_I1015886", "Max Heath", ["Ruck", "Forward"], 769),
Player("CD_I1016082", "Tariek Newchurch", ["Forward"], 770),
Player("CD_I1015895", "Jacob Edwards", ["Ruck", "Forward"], 771),
Player("CD_I1015457", "Jaiden Magor", ["Midfielder", "Forward"], 772),
Player("CD_I1015369", "Alastair Lord", ["Defender"], 773),
Player("CD_I1015473", "Will Verrall", ["Ruck"], 774),
Player("CD_I1015714", "Matthew Allison", ["Defender", "Forward"], 775),
Player("CD_I1015515", "Oscar Adams", ["Defender"], 776),
Player("CD_I1016140", "Wade Derksen", ["Forward"], 777),
Player("CD_I1017089", "Oskar Faulkhead", ["Midfielder", "Forward"], 778),
Player("CD_I1017077", "Angus Mclennan", ["Defender"], 779),
Player("CD_I1017115", "Lachlan Rankin", ["Defender"], 780),
Player("CD_I1013532", "Tom Fullarton", ["Forward"], 781),
Player("CD_I1017122", "Blake Howes", ["Midfielder", "Forward"], 782),
Player("CD_I1017059", "Josh Gibcus", ["Defender"], 783),
Player("CD_I1016189", "Henry Smith", ["Ruck", "Forward"], 784),
Player("CD_I298265", "Daniel Mckenzie", ["Midfielder"], 785),
Player("CD_I290188", "Sam Reid", ["Forward"], 786),
Player("CD_I1017065", "Zac Taylor", ["Midfielder"], 787),
Player("CD_I1009389", "Jake Pasini", ["Defender"], 788),
Player("CD_I1009288", "Deakyn Smith", ["Defender"], 789),
Player("CD_I1011633", "James Willis", ["Midfielder", "Forward"], 790),
Player("CD_I1011718", "Cooper Murley", ["Midfielder", "Forward"], 791),
Player("CD_I1011637", "Arlo Draper", ["Defender"], 792),
Player("CD_I1008752", "Kieran Strachan", ["Ruck"], 793),
Player("CD_I1006193", "Bigoa Nyuon", ["Defender"], 794),
Player("CD_I294733", "Paul Seedsman", ["Midfielder"], 795),
Player("CD_I1009201", "Fischer Mcasey", ["Defender", "Forward"], 796),
Player("CD_I1009197", "Charlie Dean", ["Defender"], 797),
Player("CD_I1012048", "Sebit Kuek", ["Forward"], 798),
Player("CD_I1013315", "Sandy Brock", ["Defender"], 799),
Player("CD_I1013256", "Blake Coleman", ["Forward"], 800),
Player("CD_I1015294", "Nathan Barkla", ["Midfielder"], 801),
Player("CD_I298336", "Nakia Cockatoo", ["Forward"], 802),
Player("CD_I1015330", "Hugh Jackson", ["Midfielder", "Forward"], 803),
Player("CD_I1012521", "Tex Wanganeen", ["Forward"], 804),
Player("CD_I1012817", "Zach Reid", ["Defender"], 805),
Player("CD_I296035", "Trent Dumont", ["Midfielder"], 806),
Player("CD_I1013165", "Andy Moniz Wakefield", ["Forward"], 807),
Player("CD_I1012879", "Cody Raak", ["Defender", "Forward"], 808),
]

# Setup
computer_teams = [Team(num_players_per_team, chosen_config) for _ in range(num_computer_teams)]
user_draft_position = int(input("Enter your draft position (1 for first pick, 2 for second pick, etc.): "))
# Assuming num_players_per_team is the variable you identified
teams = [Team(num_players_per_team, chosen_config) for _ in range(number_of_teams)]
computer_teams = [Team(num_players_per_team, chosen_config) for _ in range(num_computer_teams)]

# Start Draft
draft_simulation(user_team, computer_teams, players, user_draft_position, draft_type)

print("Printing teams...")
print("\nYour Team:")
display_team(user_team)
for idx, computer_team in enumerate(computer_teams, 1):
    print(f"\nComputer Team {idx}:")
    display_team(computer_team)