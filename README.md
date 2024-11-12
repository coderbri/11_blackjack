# 11 Blackjack Capstone Project

## Overview

A Python-based terminal game that simulates the classic card game, Blackjack (also known as 21). This project was created as part of Day 11 of Dr. Angela Yu's **100 Days of Code: The Complete Python Pro Bootcamp**. The game provides a simplified version of Blackjack, where a user plays against the computer with essential game mechanics.

## Table of Contents

- [Game Rules](#game-rules)
- [Features](#features)
- [Project Requirements](#project-requirements)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Console Output](#console-output)
- [Explanation of Console Output](#explanation-of-console-output)

## Game Rules

The objective of Blackjack is to have a hand that totals as close to 21 as possible without exceeding it. This version of the game includes:
- **Face cards** (Jack, Queen, King) valued at 10.
- **Number cards** worth their face value.
- **Aces** that can count as either 1 or 11, depending on which value keeps the hand below or at 21.
  
**Win, Lose, or Draw**:  
- If your hand goes over 21, you lose instantly.
- If either player achieves exactly 21 with their initial two cards (an Ace and a 10-valued card), it's a **Blackjack**.
- The dealer must draw additional cards until their total is 17 or higher.


## Features

- **Game Mechanics**: Draw two initial cards for the player and dealer.
- **Score Calculation**: Calculates the player’s and dealer’s total points, handling Ace values automatically.
- **Dealer AI**: Dealer draws cards until they have a total of 17 or higher.
- **Win Conditions**: Immediate loss on exceeding 21, player wins with a higher hand if under 21, and draw conditions.
- **Replay Option**: Option to play another game after each round.


## Project Requirements

The project includes the following files:
- `main.py`: Contains the core logic and flow of the game.
- `art.py`: Contains ASCII art for the game's logo.

### Installation

1. Clone the repository:
2. Navigate to the project directory:
   ```bash
   cd 11_blackjack
   ```
3. Run the game:
   ```bash
   python main.py
   ```

## How to Play

1. Start the game, and both you and the dealer receive two cards.
2. View your score and decide to "Hit" (`'y'` to draw another card) or "Stand" (`'n'` to end your turn).
3. The dealer’s cards and score will be revealed once your turn is over.
4. The game announces the outcome: Win, Lose, or Draw.
5. After the game ends, you’ll have the option to play again.


## Console Output

Here’s an example of what you’ll see in the terminal when you play:

```plaintext
.------.            _     _            _    _            _    
|A_  _ |.          | |   | |          | |  (_)          | |   
|( \/ ).-----.     | |__ | | __ _  ___| | ___  __ _  ___| | __
| \  /|K /\  |     | '_ \| |/ _` |/ __| |/ / |/ _` |/ __| |/ /
|  \/ | /  \ |     | |_) | | (_| | (__|   <| | (_| | (__|   < 
`-----| \  / |     |_.__/|_|\__,_|\___|_|\_\ |\__,_|\___|_|\_\
      |  \/ K|                            _/ |                
      `------'                           |__/                 

Do you want to play a game of Blackjack? Type 'y' or 'n': y

    Your cards: [10, 7], current score: 17
    Computer's first card: 8
Type 'y' to get another card, type 'n' to pass: n
    Your final hand: [10, 7], final score: 17
    Computer's final hand: [8, 9, 2], final score: 19
You lose... 😤

Do you want to play a game of Blackjack? Type 'y' or 'n': y

    Your cards: [11, 10], current score: 21
    Computer's first card: 4
You win with Blackjack! 😎

Do you want to play a game of Blackjack? Type 'y' or 'n': n
```

### Explanation of Console Output

1. **Logo**: The ASCII art logo is displayed when the game starts.
2. **Initial Cards**: Each round, the player and dealer are dealt two cards, and the scores are displayed.
3. **Player’s Choice**: The player can choose to draw another card (`y`) or end their turn (`n`).
4. **Outcome**: The final hands and scores are displayed, followed by the result (e.g., "You win with Blackjack! 😎").

This terminal printout gives users a feel for how the game looks when played in the command line and helps convey the flow of gameplay in a text-based environment.

---
<section align="center">
  <code>coderBri © 2024</code>
</section>
