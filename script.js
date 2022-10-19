// Deck of cards

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; //the combination of the two arrays creates a 52 card deck
var deck = new Array();

function createDeck() {
    deck = new Array();
    for (var i = 0; i < values.length; i++) { // determining the card
        for (var x = 0; x < suits.length; x++) { // determining the suit
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] === "A")
                if (sum <= 21) { //making the value of the ace 1 or 11 depending on the sum of the cards
                    weight = 11;
                }
                else {
                    weight = 1;
                }
            var card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
}



//Necessary Phases planned out

// Is shuffling needed???
// Initialize: DealPhase
// Dispose: DealPhase
// Break
// Initialize: MainDecisionPhase (choose to hit or stay)
// Dispose: MainDecisionPhase
// Break
// Initialize: DealerPlayPhase (dealer chooses to hit or stay depending on card value)
// Dispose: DealerPlayPhase
// Break
// Initialize: ScoringPhase (checks playerScore vs dealerScore and decides winner. If(playerScore > dealerScore && playerScore <= 21)
// dipslay "You win")
// Dispose: ScoringPhase
