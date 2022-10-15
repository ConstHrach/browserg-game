// Deck of cards

const deckOfCards = [

    // need to implement a way for aces number value to be 1 or 11 based on card 1 plus card 2's value, also deckOfCards code will be refined to cleaner code. This is just for visualization 
    { card: "King", numberValue: 10, suit: "Hearts" },
    { card: "Queen", numberValue: 10, suit: "Hearts" },
    { card: "Jack", numberValue: 10, suit: "Hearts" },
    { card: "Ten", numberValue: 10, suit: "Hearts" },
    { card: "Nine", numberValue: 9, suit: "Hearts" },
    { card: "Eight", numberValue: 8, suit: "Hearts" },
    { card: "Seven", numberValue: 7, suit: "Hearts" },
    { card: "Six", numberValue: 6, suit: "Hearts" },
    { card: "Five", numberValue: 5, suit: "Hearts" },
    { card: "Four", numberValue: 4, suit: "Hearts" },
    { card: "Three", numberValue: 3, suit: "Hearts" },
    { card: "Two", numberValue: 2, suit: "Hearts" },
    { card: "One", numberValue: 1, suit: "Hearts" },

    { card: "King", numberValue: 10, suit: "Spades" },
    { card: "Queen", numberValue: 10, suit: "Spades" },
    { card: "Jack", numberValue: 10, suit: "Spades" },
    { card: "Ten", numberValue: 10, suit: "Spades" },
    { card: "Nine", numberValue: 9, suit: "Spades" },
    { card: "Eight", numberValue: 8, suit: "Spades" },
    { card: "Seven", numberValue: 7, suit: "Spades" },
    { card: "Six", numberValue: 6, suit: "Spades" },
    { card: "Five", numberValue: 5, suit: "Spades" },
    { card: "Four", numberValue: 4, suit: "Spades" },
    { card: "Three", numberValue: 3, suit: "Spades" },
    { card: "Two", numberValue: 2, suit: "Spades" },
    { card: "One", numberValue: 1, suit: "Spades" },

    { card: "King", numberValue: 10, suit: "Clubs" },
    { card: "Queen", numberValue: 10, suit: "Clubs" },
    { card: "Jack", numberValue: 10, suit: "Clubs" },
    { card: "Ten", numberValue: 10, suit: "Clubs" },
    { card: "Nine", numberValue: 9, suit: "Clubs" },
    { card: "Eight", numberValue: 8, suit: "Clubs" },
    { card: "Seven", numberValue: 7, suit: "Clubs" },
    { card: "Six", numberValue: 6, suit: "Clubs" },
    { card: "Five", numberValue: 5, suit: "Clubs" },
    { card: "Four", numberValue: 4, suit: "Clubs" },
    { card: "Three", numberValue: 3, suit: "Clubs" },
    { card: "Two", numberValue: 2, suit: "Clubs" },
    { card: "One", numberValue: 1, suit: "Clubs" },

    { card: "King", numberValue: 10, suit: "Diamonds" },
    { card: "Queen", numberValue: 10, suit: "Diamonds" },
    { card: "Jack", numberValue: 10, suit: "Diamonds" },
    { card: "Ten", numberValue: 10, suit: "Diamonds" },
    { card: "Nine", numberValue: 9, suit: "Diamonds" },
    { card: "Eight", numberValue: 8, suit: "Diamonds" },
    { card: "Seven", numberValue: 7, suit: "Diamonds" },
    { card: "Six", numberValue: 6, suit: "Diamonds" },
    { card: "Five", numberValue: 5, suit: "Diamonds" },
    { card: "Four", numberValue: 4, suit: "Diamonds" },
    { card: "Three", numberValue: 3, suit: "Diamonds" },
    { card: "Two", numberValue: 2, suit: "Diamonds" },
    { card: "One", numberValue: 1, suit: "Diamonds" },

];


/*


Necessary Phases planned out

Is shuffling needed???

Initialize: DealPhase
Dispose: DealPhase
Break
Initialize: MainDecisionPhase (choose to hit or stay)
Dispose: MainDecisionPhase
Break
Initialize: DealerPlayPhase (dealer chooses to hit or stay depending on card value)
Dispose: DealerPlayPhase
Break
Initialize: ScoringPhase (checks playerScore vs dealerScore and decides winner. If(playerScore > dealerScore && playerScore <= 21)
dipslay "You win")
Dispose: ScoringPhase
*/