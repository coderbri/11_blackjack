# 11 Blackjack Capstone Project

## Overview

A Python-based terminal game that simulates the classic card game, Blackjack (also known as 21). This project was created as part of Day 11 of Dr. Angela Yu's **100 Days of Code: The Complete Python Pro Bootcamp**. It has been enhanced with a browser-based JavaScript version to make the game more accessible for users who want to play directly online.

## Table of Contents

- [Game Rules](#game-rules)
- [Features](#features)
- [Project Requirements](#project-requirements)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Live Demo](#live-demo)
- [Console Output](#console-output)
- [Explanation of Console Output](#explanation-of-console-output)
- [Project Structure](#project-structure)

## Game Rules

The objective of Blackjack is to have a hand that totals as close to 21 as possible without exceeding it. This version includes:
- **Face cards** (Jack, Queen, King) valued at 10.
- **Number cards** worth their face value.
- **Aces** that count as either 1 or 11, depending on what benefits the hand most.

**Win, Lose, or Draw**:
- If your hand goes over 21, you lose instantly.
- If either player hits exactly 21 with their initial two cards, it’s a **Blackjack**.
- The dealer draws until reaching a minimum of 17.

## Features

- **Python Version**:
  - Terminal-based play.
  - Card drawing logic.
  - Score comparison and winner declaration.
  - Option to replay.
  
- **Browser Version**:
  - Interactive UI via HTML/CSS/JavaScript.
  - Event-driven logic replicating original game rules.
  - Responsive layout for desktop and mobile.

## Project Requirements

### Python Version
- `main.py`: Contains the game logic and main gameplay loop.
- `art.py`: Contains the ASCII art logo.

### Browser Version
- `index.html`: The HTML structure for the web version.
- `style.css`: Basic styling for layout and components.
- `script.js`: Contains the JavaScript logic converted from Python.

---

## Installation

### To Run the Python Version Locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/coderbri/11_blackjack.git
   cd 11_blackjack/python_version
    ```

2. Run the game:
    ```bash
    python3 main.py
    ```

---

## How to Play
1. Start the game (via terminal or browser).
2. Receive your starting hand and see the dealer’s first card.
3. Choose to “Hit” ('y') or “Stand” ('n').
4. Dealer draws after your turn.
5. The game announces the outcome: Win, Lose, or Draw.
6. Choose to replay if desired.

---

### Live Demo

You can play the browser version directly here:
[Play Blackjack in your browser (GitHub Pages)](https://coderbri.github.io/11_blackjack/).

Note: The web version replicates the Python logic in JavaScript to simulate the same game experience visually.


### Console Output (Python Version)

```
Do you want to play a game of Blackjack? Type 'y' or 'n': y

.------.            _     _            _    _            _    
|A_  _ |.          | |   | |          | |  (_)          | |   
|( \\/ ).-----.     | |__ | | __ _  ___| | ___  __ _  ___| | __
| \\  /|K /\\  |     | '_ \\| |/ _' |/ __| |/ / |/ _' |/ __| |/ /
|  \\/ | /  \\ |     | |_) | | (_| | (__|   <| | (_| | (__|   < 
'-----| \\  / |     |_.__/|_|\\__,_|\\___|_|\\_\\ |\\__,_|\\___|_|\\_\\
      |  \\/ K|                            _/ |                
      '------'                           |__/           
    Your cards: [10,3], current score: 13
    Computer's first card: [8]
Type 'y' to get another card, type 'n' to pass: y
    Your cards: [10,3,4], current score: 17
    Computer's first card: [8]
Type 'y' to get another card, type 'n' to pass: y
    Your cards: [10,3,4,3], current score: 20
    Computer's first card: [8]
Type 'y' to get another card, type 'n' to pass: n
    Your final hand: [10,3,4,3], final score: 20
    Computer's final hand: [8,6,5], final score: 19
You win! 😁
```

#### Explanation of Console Output
1. **Logo**: ASCII logo printed from art.py.
2. **Initial Hands**: Player and dealer receive two cards.
3. **Player Action**: Choose to draw another or pass.
4. **Final Hands**: Dealer’s turn concludes, and result is displayed.



---
<section align="center">
  <code>coderBri © 2024-2025</code>
</section>
