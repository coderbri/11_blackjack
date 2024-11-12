import random
import art

def deal_card():
	"""Using `random.choice(cards)`, a random card is retrieved from the deck."""
	cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
	chosen_card = random.choice(cards)
	return chosen_card


def calculate_score(cards):
    """Take a list of cards and returns the score calculated from the cards."""
    if sum(cards) == 21 and len(cards) == 2:
        return 0
    
    if 11 in cards and sum(cards) > 21:
        cards.remove(11)
        cards.append(1)
    
    return sum(cards)


def compare(user_final_score, computer_final_score):
    if user_final_score == computer_final_score:
        return "Draw 🙃"
    elif computer_final_score == 0:
        return "You lose... Opponent has Blackjack! 😱"
    elif user_final_score == 0:
        return "You win with Blackjack! 😎"
    elif user_final_score > 21:
        return "You went over! You lose... 😢"
    elif computer_final_score > 21:
        return "Opponent went over. You win! 😁"
    elif user_final_score > computer_final_score:
        return "You win! 😁"
    else:
        return "You lose... 😤"

def play_game():
    user_deck = []
    computer_deck = []
    is_game_over = False
    
    computer_score = -1
    user_score = -1
    
    for _ in range(2):
        user_deck.append(deal_card())
        computer_deck.append(deal_card())
    
    
    while not is_game_over:
        
        user_score = calculate_score(user_deck)
        computer_score = calculate_score(computer_deck)
        print(f"    Your cards: {user_deck}, current score: {user_score}")
        print(f"    Computer's first card: {computer_deck[0]}")
        
        if user_score == 0 or computer_score == 0 or user_score > 21:
            is_game_over = True
        else:
            user_should_deal = input("Type 'y' to get another card, type 'n' to pass: ")
            if user_should_deal == 'y':
                user_deck.append(deal_card())
            else:
                is_game_over = True
    
    while computer_score != 0 and computer_score < 17:
        computer_deck.append(deal_card())
        computer_score = calculate_score(computer_deck)
    
    print(f"    Your final hand: {user_deck}, final score: {user_score}")
    print(f"    Computer's final hand: {computer_deck}, final score: {computer_score}")
    print(compare(user_score, computer_score))


while input("Do you want to play a game of Blackjack? Type 'y' or 'n': ").lower() == 'y':
    print("\n" * 20)
    print(art.logo)
    play_game()
