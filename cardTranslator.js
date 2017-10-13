
//var rankInput = {
//    A: "ace",
//    '2': "two",
//    '3': "three",
//    '4': "four",
//    '5': "five",
//    '6': "six",
//    '7': "seven",
//    '8': "eight",
//    '9': "nine",
//    T: "ten",
//    J: "jack",
//    Q: "queen",
//    K: "king"
//};
function getRank(rankInput){
    if(rankInput == 'A'){
        return "ace";
    };
    if(rankInput == '2'){
        return "two";
    };
    if(rankInput == '3'){
        return "three";
    };
    if(rankInput == '4'){
        return "four";
    };
    if(rankInput == '5'){
        return "five";
    };
    if(rankInput == '6'){
        return "six";
    };
    if(rankInput == '7'){
        return "seven";
    };
    if(rankInput == '8'){
        return "eight";
    };
    if(rankInput == '9'){
        return "nine";
    };
    if(rankInput == 'T'){
        return "ten";
    };
    if(rankInput == 'J'){
        return "jack";
    };
    if(rankInput == 'Q'){
        return "queen";
    };
    if(rankInput == 'K'){
        return "king";
    };
}

//var suitInput = {
//    H: "heart",
//    D: "diamond",
//    C: "club",
//    S: "spade"
//};

function getSuit(suitInput){
    if(suitInput == 'H'){
        return "heart";
    };
    if(suitInput == 'D'){
        return "diamond";
    };
    if(suitInput == 'C'){
        return "club";
    };
    if(suitInput == 'S'){
        return "spade";
    };
}

function getRankMeaning(rank) {
    var meaning = [];
    if(rank == 'A') {
        meaning = [
        "New beginning for ",
        "A sense of wholeness in ",
        "A fresh start in ",
        "Renewed "
            ];
        return meaning;
        };
    if(rank == '2') {
        meaning = [
            "A meeting concerning ",
            "Coming together of ",
            "Cooperation of ",
            "A relationsip of "
        ];
        return meaning;
        
    };
    if(rank == '3') {
        meaning = [
        "Reaping the fruits of ",
        "Creation of ",
        "Birth of new ",
        "Cooperative energies bearing fruit of "
            ];
        return meaning;
        };
    if(rank == '4'){
        meaning = [
        "Achieving stability in ",
        "Building a foundation for ",
        "Securing your ",
        "Protecting your "
            ];
        return meaning;
        };
    if(rank == '5'){
        meaning = [
        "Exploring your ",
        "Activity in your ",
        "Growth of ",
        "Striving for "
            ];
        return meaning;
        };
    if(rank == '6'){
        meaning = [
        "Putting experience into words about ",
        "Communicating your ",
        "Expressing your ",
        "Seeking someone to listen about your "
            ];
        return meaning;
        };
    if(rank == '7'){
        meaning = [
        "Questioning your ",
        "Being humbled by ",
        "Seeking understanding of ",
        "Learing what you need to learn about "
            ];
        return meaning;
        };
    if(rank == '8'){
        meaning = [
        "Gaining knowledge of ",
        "An epiphany of ",
        "Finding inspiration from ",
        "Finding motivation to "
            ];
        return meaning;
        };
    if(rank == '9'){
        meaning = [
        "Striving to improve your ",
        "Working to achieve goals relating to ",
        "Acknowledging all past experience to complete your "
            ];
        return meaning;
        };
    if(rank == 'T'){
        meaning = [
        "Succeeding in ",
        "Seeking something new about ",
        "Completing a cycle of ",
        "The end of an era of "
            ];
        return meaning;
        };
    if(rank == 'J'){
        meaning = [
        "Recieving news about ",
        "A person blinded by ",
        "Someone inexperienced in ",
        "Someone overconfident of their abilitites to "
            ];
        return meaning;
        };
    if(rank == 'Q'){
        meaning = [
        "An individual who nurtures your ",
        "Female authority figure of your ",
        "Feminine figure with ",
        "Individual seeking to advance their own "
            ];
        return meaning;
        };
    if(rank == 'K'){
        meaning = [
        "High-ranking individual in your ",
        "Someone who views themself as above you in ",
        "Authority figure in your ",
        "Fatherly figure regarding your "
            ];
        return meaning;
        };
};

function getSuitMeaning(suit){
    var meaning = [];
    if(suit == 'S'){
        meaning = [
            "Challenges",
            "Obstacles",
            "Weapons",
            "Trials"
        ];
        return meaning;
    };
    if(suit == 'C'){
        meaning = [
            "Growth",
            "Progress",
            "Groups",
            "Social life",
            "Work life"
        ];
        return meaning;
    };
    if(suit == 'H'){
        meaning = [
            "Love",
            "Family",
            "Close Friends",
            "Passions",
            "Joy",
            "Peace",
            "Lust"
        ];
        return meaning;
    };
    if(suit == 'D'){
        meaning = [
            "Energy",
            "Power",
            "Motivation",
            "Clarity",
            "Money"
        ];
        return meaning;
    };
}

var suits = {
    diamond: [
        "Energy",
        "Power",
        "Motivation",
        "Clarity",
        "Money"
    ],
    heart: [
        "Love",
        "Family",
        "Close Friends",
        "Passions",
        "Joy",
        "Peace",
        "Lust"
    ],
    club: [
        "Growth",
        "Progress",
        "Groups",
        "Social life",
        "Work life"
    ],
    spade: [
        "Challenges",
        "Obstacles",
        "Weapons",
        "Trials"
    ]
};

//returns an array of rank meanings
function translateRank(rank) {
    var translations = [];
    var translatedRank = getRankMeaning(rank);
    for(var i = 0; i<=translatedRank.length; i++){
        translations.push(translatedRank[i]);
    }
    return translations;
}

//returns an array of suit meanings
function translateSuit(suit) {
    var translations = [];
    var translatedSuit = getSuitMeaning(suit);
    for(var i = 0; i<=translatedSuit.length; i++){
        translations.push(translatedSuit[i]);
    }
    return translations;
}

//returns an array of cards derived from image file name
function getCards() {
    "use strict";
    var cards = [];
    for (var i = 1; i <= 3; i++){
        var fullPath = document.getElementById("card" + i).src;
        var index = fullPath.lastIndexOf("/");
        var filename = fullPath;
        if(index !== -1) {     
            filename = fullPath.substring(index+1,fullPath.length);
        }
        cards.push(filename);
    };
    return cards;
}

var translatedCard = {
    suitMeaning: [],
    rankMeaning: []
};

function translateCards() {
    var cards = getCards();
//    var translatedCards = [];
    for(var i = 0; i < 3; i++){
        var cardCounter = i + 1;
        var translationContainer = document.getElementById("translations" + cardCounter);
        translationContainer.style.visibility = "visible";
        var translatedSuit = translateSuit(cards[i].substring(1,2));
        for(var j = 0; j < translatedSuit.length-1; j++){
//            translatedCard.suitMeaning.push(translatedSuit[j]);
            var elem = document.getElementById("translation" + cardCounter + "S");
            var option = document.createElement("option");
            option.text = translatedSuit[j];
            elem.add(option);
        };
//        for(var j = 0; j < 4; j++){
//            translatedCard.suitMeaning.push(translateSuit(cards[i].substring(1,2))[j]);
//        };
        
        var translatedRank = translateRank(cards[i].substring(0,1));
        for(j = 0; j < translatedRank.length-1; j++){
//            translatedCard.rankMeaning.push(translatedRank[j]);
            var elem2 = document.getElementById("translation" + cardCounter + "R");
            var option2 = document.createElement("option");
            option2.text = translatedRank[j];
            elem2.add(option2);
        };
        
//        translatedCards.push(translatedCard);
//        translatedCard.suitMeaning = [];
//        translatedCard.rankMeaning = [];
    };
    
//    return translatedCards;
};

function appendTranslations(){
//    $(document).ready(function){
//        $()
//    }
    var translatedCards = translateCards();
    for(var i = 1; i < 4; i++){
        var cardCounter = i;
    
        var elem = document.getElementById("translation" + cardCounter + "S");
        for(var j = 0; j<=translatedCards[i].suitMeaning.length; j++){
            var option = document.createElement("option");
            option.text = translatedCards[i].suitMeaning[j];
            elem.add(option);
        };
        
        var elem2 = document.getElementById("translation" + cardCounter + "R");
        for(var j = 0; j<=translatedCards[i].rankMeaning.length; j++){
            var option2 = document.createElement("option");
            option2.text = translatedCards[i].rankMeaning[j];
            elem2.add(option2);
        };
    };
}