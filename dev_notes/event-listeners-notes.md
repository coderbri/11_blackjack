# Event Listeners in the Web-Based Blackjack Game

This project replicates a Python terminal Blackjack experience in the browser using HTML, CSS, JavaScript, and jQuery. To simulate user interaction similar to Python’s `input()` prompts, we use event listeners that manage game state transitions and dynamic UI updates.

## Purpose of Event Listeners

The event listeners enable real-time input handling and dynamic responses based on user actions. They aggregate HTML IDs and class-based components (like `#run-button`, .terminal-input, `#Content`, etc.) to mimic the flow of a command-line game.

## 1. `#run-button` Click Listener

```js
$("#run-button").click(function() {
    $("#Content").empty();
    gameState = 'initial';
    NewLine(inputPrompts[0], true);
});

```
- Clears the “console” output area.
- Resets the game to its initial state.
- Triggers the first prompt asking the user if they want to play.


## 2. Document keydown Listener (Enter Key)

```js
$(document).on("keydown", function (e) {
    if (e.key === "Enter") {
        const input = $("#Content input.terminal-input:not(:disabled)");
        ...
    }
});
```

- Monitors for the Enter key across the page.
- Checks if an active `.terminal-input` exists (i.e., user is being prompted).
- Reads and disables the input once submitted.
- Routes the logic to the correct game phase using `gameState`:
    - **`'initial'`**: Starts the game (`playGame()`).
    - **`'playing'`**: Adds a card or ends turn (`continueGame()` or `finishGame()`).
    - **`'finished'`**: Offers option to restart or end game.

## 3. Dynamic Input Management

Within **`NewLine(text, isPrompt)`**:

```py
if (isPrompt) {
    const input = $('<input type="text" class="terminal-input">');
    ...
    input.on("input", function() {
        $(this).attr("size", Math.max(1, $(this).val().length));
    });
}
```

- Appends an input field when `isPrompt` is true.
- Automatically adjusts the width of the input as the user types, creating a more terminal-like feel.

---

## Summary

By attaching listeners to DOM events (button clicks and keyboard input), this project mimics Python’s terminal prompts using dynamic HTML updates. These event-driven interactions allow the user to play Blackjack as though it were a console game—completely within the browser.
