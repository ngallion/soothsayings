var card = {

    rank : -1,

    suit : -1,

    getRank: function() {
        if (this.rank > 1 && this.rank < 10) {
            return this.rank;
        }
        if (this.rank === 1) {
            return "A";
        }
        if (this.rank === 10) {
            return "T";
        }
        if (this.rank === 11) {
            return "J";
        }
        if (this.rank === 12) {
            return "Q";
        }
        if (this.rank === 13) {
            return "K";
        }
    },

    getSuit: function(){
        switch (this.suit) {
          case 0:
            return "H";
          case 1:
            return "D";
          case 2:
            return "C";
          case 3:
            return "S";
          default:
                return "H";

        }
    },

    getCard: function() {
        return this.getRank() + this.getSuit();
        
    }
};

var drawCardCounter = 1;
var drawnCards = 0;
var cardsDrawn = [];
var deck = {
    _deck: [],
    cardsDrawn: [],
    newDeck: function() {
        for (var i = 0; i <=3 ; i++) {
            for (var j = 1; j <= 13; j++) {
              card.rank = j;
              card.suit = i;
              this._deck.push(card.getCard());
            }
        }
        drawnCards = 0;
        drawCardCounter = 1;
        
    },
    drawCard: function() {
        
        var cardPosition = Math.ceil(52 * Math.random());
        if(drawnCards >= 3){
            return;
        }
        for(var i = 0; i<=cardsDrawn.length; i++){
            if(cardsDrawn[i] === this._deck[cardPosition]){
                cardPosition = Math.ceil(52 * Math.random());
            }
        }
        cardsDrawn.push(this._deck[cardPosition]);  
        console.log(this._deck[cardPosition]);
        if(this._deck[cardPosition] === undefined){
            this._deck[cardPosition] = "JK";
        }
//        var elem = document.createElement("img");
        var elem = document.getElementById("card" + drawCardCounter);
        elem.src = 'assets/' + this._deck[cardPosition] + '.png';
//        document.getElementById("card" + drawCardCounter).appendChild(elem);
        drawCardCounter += 1;
        drawnCards += 1;
        
        if(drawCardCounter > 3){
        drawCardCounter = 1;
        };
        
        return this._deck[cardPosition];
        
    },
    
    showDeck: function() {
        for (var i = 0; i < this._deck.length; i++) {
          console.log(this._deck[i]);
        }
    },
    clearCards: function() {
        document.getElementById("card1").src = "";
        document.getElementById("card2").src = "";
        document.getElementById("card3").src = "";
        var select;
        var length;
        for (i = 1; i<4; i++){
            select = document.getElementById("translation" + i + "R");
            length = select.options.length;
            for (j = 0; j < length; j++) {
                select.remove(select.j);
            }
            select = document.getElementById("translation" + i + "S");
            length = select.options.length;
            for (j = 0; j < length; j++) {
                select.remove(select.j);
            }
            var translationContainer = document.getElementById("translations" + i);
            translationContainer.style.visibility = "hidden";
        }
                            
    },
    // Returns an array of cards
    drawCards: function(numberOfCards) {
        var cardsDrawn = [];
        for (var i = 0; i < numberOfCards; i++) {
            var _card = this.drawCard();
            while(cardsDrawn.indexOf(_card) == true) {
                _card = this.drawCard();
            }
            cardsDrawn.push(_card);
        }
        return cardsDrawn;
    }
}

