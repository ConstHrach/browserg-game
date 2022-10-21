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

function createPlayers(num) {
    players = new Array();
    for (var i = 1; i <= num; i++) {
        var hand = new Array();
        var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}

function createPlayersUI() {
    document.getElementById('players').innerHTML = '';
    for (var i = 0; i < players.length; i++) {
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = 'Player ' + players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
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
