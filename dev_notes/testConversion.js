// * 2. Deal Random Cards
function dealCards() {
    const cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    const chosenCard = Math.floor(Math.random() * cards.length);
    return cards[chosenCard];
}

console.log(dealCards()) // Returns a single random card.


// * 3. Calculate Score
function calculateScore(cards) {
    
    let sum = cards.reduce((a, b) => a + b, 0);
    
    // Check for Blackjack (Ace + 10-card):
    if (sum == 21 && cards.length == 2) return 0;
    
    // Handle Ace (11 -> 1) if sum > 21: replace 11 with 1.
    if (cards.includes(11) && sum > 21) {
        const aceIndex = cards.indexOf(11);
        if (aceIndex !== -1) cards[aceIndex] = 1;
        
        // Recalculate the sum:
        sum = cards.reduce((a, b) => a + b, 0);
    }
    return sum;
}

console.log(calculateScore([11, 10])); // 0 (Blackjack)
console.log(calculateScore([11, 5, 9])); // 25 -> becomes 15 after converting Ace
console.log(calculateScore([10, 8])); // 18


// * 4. Compare Card Logic
function compare(userFinalScore, computerFinalScore) {
    if (userFinalScore === computerFinalScore) return "Draw 🙃";
    else if (computerFinalScore === 0) return "You lose... Opponent has blackjack! 😱";
    else if (userFinalScore === 0) return "You win with Blackjack! 😎";
    else if (userFinalScore > 21) return "You went over! You lose... 😢";
    else if (computerFinalScore > 21) return "Opponent went over. You win! 😁";
    else if (userFinalScore > computerFinalScore) return "You win! 😁";
    else return "You lose... 😤";
}

console.log(compare(21, 15));
console.log(compare(25, 18));
console.log(compare(20, 21));
