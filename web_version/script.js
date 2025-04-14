// Game state variables
let isGameOver = true;
let userDeck = [];
let computerDeck = [];
let userScore;
let computerScore;
let gameState = 'initial'; // 'initial', 'playing', 'finished'

const inputPrompts = [
    "Do you want to play a game of Blackjack? Type 'y' or 'n': ",
    "Type 'y' to get another card, type 'n' to pass: ",
    "Do you want to play again? Type 'y' or 'n': ",
];

const logo = `
.------.            _     _            _    _            _    
|A_  _ |.          | |   | |          | |  (_)          | |   
|( \\/ ).-----.     | |__ | | __ _  ___| | ___  __ _  ___| | __
| \\  /|K /\\  |     | '_ \\| |/ _\` |/ __| |/ / |/ _\` |/ __| |/ /
|  \\/ | /  \\ |     | |_) | | (_| | (__|   <| | (_| | (__|   < 
\`-----| \\  / |     |_.__/|_|\\__,_|\\___|_|\\_\\ |\\__,_|\\___|_|\\_\\
      |  \\/ K|                            _/ |                
      \`------'                           |__/           
`;

// Terminal UI functions
function NewLine(text, isPrompt = false) {
    $(".console-carrot").remove();
    const content = $("#Content");
    const line = $('<div class="console-line"></div>').html(text);
    content.append(line);

    if (isPrompt && $("#Content input.terminal-input:not(:disabled)").length === 0) {
        const input = $('<input type="text" class="terminal-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" size="1">');
        const carrot = $('<div class="console-carrot"></div>');
        line.append(input).append(carrot);
        input.focus();
        input.on("input", function() {
            $(this).attr("size", Math.max(1, $(this).val().length));
        });
    }
    content.scrollTop(content.prop("scrollHeight"));
}

// Game logic functions
function dealCard() {
    /**
     * Randomly selects and returns a single card from a predefined deck.
     * The deck includes one Ace (11), number cards (2–10), and face cards (10s).
     * Simulates drawing one card at random from the deck.
     *
     * @returns {number} A randomly selected card value.
     */
    const cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    return cards[Math.floor(Math.random() * cards.length)];
}

function calculateScore(cards) {
    /** Calculates the score of a given hand of cards.
     * 
     * Rules:
     * - Returns 0 if the hand is a "Blackjack" (an Ace and a 10-card as the first two cards).
     * - Converts an Ace (11) to 1 if the total score exceeds 21 to prevent busting.
     * - Returns the sum of the card values otherwise.
     * 
     * @param {number[]} cards - An array of integers representing the cards in hand.
     * @returns {number} The total score for the hand, or 0 if it's a Blackjack.
     */
    if (cards.length === 2 && cards.reduce((a, b) => a + b, 0) === 21) {
        return 0; // Blackjack
    }
    
    // Make a copy to avoid modifying the original array
    let cardsCopy = [...cards];
    
    // Handle Aces
    if (cardsCopy.includes(11) && cardsCopy.reduce((a, b) => a + b, 0) > 21) {
        const aceIndex = cardsCopy.indexOf(11);
        cardsCopy[aceIndex] = 1;
    }
    
    return cardsCopy.reduce((a, b) => a + b, 0);
}

function compare(userFinalScore, computerFinalScore) {
    /**
     * Compares the user's and computer's final Blackjack scores.
     * Determines the outcome of the game based on standard rules.
     * 
     * @param {number} userFinalScore - Final score of the user.
     * @param {number} computerFinalScore - Final score of the computer.
     * @returns {string} A string describing the result of the game.
    */
    if (userFinalScore === computerFinalScore) return "Draw 🙃";
    else if (computerFinalScore === 0) return "You lose... Opponent has Blackjack! 😱";
    else if (userFinalScore === 0) return "You win with Blackjack! 😎";
    else if (userFinalScore > 21) return "You went over! You lose... 😢";
    else if (computerFinalScore > 21) return "Opponent went over. You win! 😁";
    else if (userFinalScore > computerFinalScore) return "You win! 😁";
    else return "You lose... 😤";
}

function playGame() {
    /**
     * Initializes a new round of Blackjack.
     * - Resets game state and both players' decks.
     * - Deals two cards to user and computer.
     * - Displays the logo and starts the user's turn.
     */
    userDeck = [];
    computerDeck = [];
    isGameOver = false;
    gameState = 'playing';
    
    // Deal initial cards
    for (let i = 0; i < 2; i++) {
        userDeck.push(dealCard());
        computerDeck.push(dealCard());
    }
    NewLine(logo);      // Display the logo
    
    continueGame();     // Start the user's turn
}

function continueGame() {
    /**
     * Continues the user's turn in the current round.
     * - Calculates and displays current scores and hands.
     * - Checks for immediate end conditions (Blackjack or bust).
     * - Prompts the user to draw another card or stand.
    */
    if (isGameOver) return;
    
    userScore = calculateScore(userDeck);
    computerScore = calculateScore(computerDeck);
    
    // Display current game state
    NewLine(`    Your cards: [${userDeck}], current score: ${userScore}`);
    NewLine(`    Computer's first card: [${computerDeck[0]}]`);
    
    // Check if game should end automatically
    if (userScore === 0 || computerScore === 0 || userScore > 21) {
        finishGame();
    } else {
        // Ask user for their next move
        NewLine(inputPrompts[1], true);
    }
}

function finishGame() {
    /**
     * Ends the current game round.
     * - Let's the computer draw cards until its score is 17 or more.
     * - Calculates and displays final hands and results.
     * - Prompts the user to play again or exit.
     */
    isGameOver = true;
    gameState = 'finished';
    
    // Computer's turn
    while (computerScore !== 0 && computerScore < 17) {
        computerDeck.push(dealCard());
        computerScore = calculateScore(computerDeck);
    }
    
    // Display final results
    NewLine(`    Your final hand: [${userDeck}], final score: ${userScore}`);
    NewLine(`    Computer's final hand: [${computerDeck}], final score: ${computerScore}`);
    NewLine(compare(userScore, computerScore));
    
    // Ask to play again
    NewLine(inputPrompts[2], true);
}


// * Event Listeners
$(document).ready(function () {
    // Initializes the game when the "Run" button is clicked.
    $("#run-button").click(function() {
        $("#Content").empty();
        gameState = 'initial';
        NewLine(inputPrompts[0], true);
    });
});

$(document).on("keydown", function (e) {
    // Handles Enter key press during the game to process user input
    if (e.key === "Enter") {
        const input = $("#Content input.terminal-input:not(:disabled)");
        if (input.length > 0) {
            const value = input.val().toLowerCase();
            input.prop("disabled", true);
            
            // Handle input based on current game state
            switch (gameState) {
                case 'initial':
                    if (value === 'y') {
                        playGame();
                    } else {
                        NewLine("Goodbye!");
                    }
                    break;
                
                case 'playing':
                    if (value === 'y') {
                        userDeck.push(dealCard());
                        continueGame();
                    } else {
                        finishGame();
                    }
                    break;
                
                case 'finished':
                    if (value === 'y') {
                        // Clear the console before starting a new game
                        $("#Content").empty();
                        playGame();
                    } else {
                        NewLine("Thanks for playing!");
                    }
                    break;
            }
        }
    }
});
