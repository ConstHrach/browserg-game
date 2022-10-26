
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; //the combination of the two arrays creates a 52 card deck
var deck = new Array();
var players = new Array();
var currentPlayer = 0;


function createDeck() {
    deck = new Array();
    for (var i = 0; i < values.length; i++) { // determining the card
        for (var x = 0; x < suits.length; x++) { // determining the suit
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] === "A")
                weight = 11;
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

function shuffle() {
    //shuffles the deck by randomly gengerating cards and switching values 100 times
    for (var i = 0; i < 100; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var locate = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = locate;
    }
}
function dealHands() {
    // alternate handing cards to each player
    // 2 cards each
    for (var i = 0; i < 2; i++) {
        for (var x = 0; x < players.length; x++) {
            var card = deck.pop();
            players[x].Hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }

    updateDeck();
}

function startgame() {
    document.getElementById('btnStart').value = 'Restart';
    document.getElementById("status").style.display = "none";
    // deal 2 cards to every player
    currentPlayer = 0;
    createDeck(); //creates deck when games starts
    shuffle(); // shuffles cards
    createPlayers(2); // makes 2 players
    createPlayersUI(); // creates ui where players cards and points are stoored in their own divs
    dealHands(); // deals alternating cards, 1 to player 1 then 1 to player 2 etc.
    document.getElementById('player_' + currentPlayer).classList.add('active');
}

function renderCard(card, player) {
    var hand = document.getElementById('hand_' + player);
    hand.appendChild(getCardUI(card));
}

function getCardUI(card) {
    var symbol = document.createElement('div');
    var icon = '';
    if (card.Suit == 'Hearts')
        icon = '&hearts;';
    else if (card.Suit == 'Spades')
        icon = '&spades;';
    else if (card.Suit == 'Diamonds')
        icon = '&diams;';
    else
        icon = '&clubs;';

    symbol.className = 'card';
    symbol.innerHTML = card.Value + '<br/>' + icon;
    return symbol;
}

function getPoints(player) { //keeps track of players points when hands are dealt
    var points = 0;
    for (var i = 0; i < players[player].Hand.length; i++) {
        points += players[player].Hand[i].Weight;
    }
    players[player].Points = points;
    return points;
}

function updatePoints() { //tracks points after player[i] hits or stands
    for (var i = 0; i < players.length; i++) {
        getPoints(i);
        document.getElementById('points_' + i).innerHTML = players[i].Points;
    }
}


function hit() {
    // the variable card will be the card that is popped from the deck, eliminating a card from the deck and displaying it for the player
    var card = deck.pop();
    players[currentPlayer].Hand.push(card);
    renderCard(card, currentPlayer);
    updatePoints();
    updateDeck(); // impliment a deck count that is updated by deck.length
    check(); // checks player score and if they exceed 21 causing player[i] to lose instantly if maximum score is exceeded

}

function stay() {
    // move on to next player
    if (currentPlayer != players.length - 1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');// no longer the 'active' player since player 1 decided to stay
        currentPlayer += 1;// switches to player 2
        document.getElementById('player_' + currentPlayer).classList.add('active'); // allows player 2 to make a decision to hit or stand
    }

    else {
        end(); // once both players finish, decide winner, player[i] wins based on whoever is closer to 21
    }
}

function end() {
    var winner = -1;
    var score = 0;

    for (var i = 0; i < players.length; i++) {
        if (players[i].Points > score && players[i].Points < 22) {
            winner = i;
        }

        score = players[i].Points;
    }

    document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
    document.getElementById("status").style.display = "inline-block";
}


function check() {
    if (players[currentPlayer].Points > 21) {
        document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
        document.getElementById('status').style.display = "inline-block";
        end();
    }
}

function updateDeck() { // deck counter
    document.getElementById('deckcount').innerHTML = deck.length;
}

window.addEventListener('load', function () { // on loadup makes deck and preshuffles, also creates players
    createDeck();
    shuffle();
    createPlayers(1);
});
//Necessary Phases planned out

// Is shuffling needed??? yes it was needed and added
// Initialize: DealPhase, done
// Dispose: DealPhase
// Break
// Initialize: MainDecisionPhase (choose to hit or stay), done
// Dispose: MainDecisionPhase
// Break
// Initialize: DealerPlayPhase (dealer chooses to hit or stay depending on card value), ( dealerphase changed to player 2 phase for presentation)
// Dispose: DealerPlayPhase
// Break
// Initialize: ScoringPhase
// dipslay "You win")
// Dispose: ScoringPhase
