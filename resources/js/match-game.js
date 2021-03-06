var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var cardValues = [];
  var randomCardArray = [];

  for (var i = 1; i <= 8; i++) {
    cardValues.push(i);
    cardValues.push(i);
  }

  while (cardValues.length > 0) {
    var i = Math.floor(Math.random() * cardValues.length);
    randomCardArray.push(cardValues[i]);
    cardValues.splice(i, 1);
  }
  return randomCardArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
