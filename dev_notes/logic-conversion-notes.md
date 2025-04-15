# Blackjack Python CLI → JavaScript Frontend Conversion

## Overview

This file documents the process of converting the key logic of a terminal-based Blackjack game (originally written in Python) to a JavaScript version for the web. It also includes test cases used to verify the correctness of the converted logic.

---

## 1. `dealCards()` – Draw Random Card

### Python Version:

```python
import random
def deal_card():
    cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    return random.choice(cards)
```

### JavaScript Version:

```js
function dealCards() {
    const cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    const chosenCard = Math.floor(Math.random() * cards.length);
    return cards[chosenCard];
}
```

### Test:

```js
console.log(dealCards()); // Returns a number from cards array
```


---

## 2. `calculateScore(cards)` – Score Evaluation

### Python Version:

```py
def calculate_score(cards):
    if sum(cards) == 21 and len(cards) == 2:
        return 0
    if 11 in cards and sum(cards) > 21:
        cards.remove(11)
        cards.append(1)
    return sum(cards)

```

### JavaScript Version:

```js
function calculateScore(cards) {
    let sum = cards.reduce((a, b) => a + b, 0);
    
    if (sum === 21 && cards.length === 2) return 0;

    if (cards.includes(11) && sum > 21) {
        const aceIndex = cards.indexOf(11);
        if (aceIndex !== -1) cards[aceIndex] = 1;
        sum = cards.reduce((a, b) => a + b, 0);
    }

    return sum;
}
```

### Tests:

```js
console.log(calculateScore([11, 10]));     // 0 (Blackjack)
console.log(calculateScore([11, 5, 9]));   // 25 -> becomes 15
console.log(calculateScore([10, 8]));      // 18
```

---

## 3. `compare()` – Compare Final Scores

### Python Version:

```py
def compare(user_score, computer_score):
    if user_score == computer_score:
        return "Draw 🙃"
    elif computer_score == 0:
        return "Lose, opponent has Blackjack 😱"
    elif user_score == 0:
        return "Win with a Blackjack 😎"
    elif user_score > 21:
        return "You went over. You lose 😢"
    elif computer_score > 21:
        return "Opponent went over. You win 😁"
    elif user_score > computer_score:
        return "You win 😁"
    else:
        return "You lose 😤"
```

### JavaScript Version:

```js
function compare(userFinalScore, computerFinalScore) {
    if (userFinalScore === computerFinalScore) return "Draw 🙃";
    else if (computerFinalScore === 0) return "You lose... Opponent has blackjack! 😱";
    else if (userFinalScore === 0) return "You win with Blackjack! 😎";
    else if (userFinalScore > 21) return "You went over! You lose... 😢";
    else if (computerFinalScore > 21) return "Opponent went over. You win! 😁";
    else if (userFinalScore > computerFinalScore) return "You win! 😁";
    else return "You lose... 😤";
}
```

## Tests:

```js
console.log(compare(21, 15));   // You win! 😁
console.log(compare(25, 18));   // You went over! You lose... 😢
console.log(compare(20, 21));   // You lose... 😤
console.log(compare(0, 18));    // You win with Blackjack! 😎
console.log(compare(18, 0));    // You lose... Opponent has blackjack! 😱
console.log(compare(19, 19));   // Draw 🙃
```

---

## Notes:

- JavaScript doesn’t have `remove()` like Python lists, so `.indexOf()` and reassignment was used instead.
- Blackjack logic (21 with 2 cards) is flagged with return 0 to mirror original Python implementation.
- This test script was used outside of the main game UI to validate each function individually before full integration into `index.js`.
