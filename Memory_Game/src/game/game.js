var game = {

    cards : null,
    counter: 0,

    firstCard : null,
    secondCard : null,
    stopCheck: false,

    icons : ["bootstrap", "css", "electron", "firebase", "html", "javascript", "jquery", "mongo", "node", "react"],

    checkCards : function (card, callback, over) {
        if (this.stopCheck || card.flipped)
        return;

        if (this.firstCard === null) {
            card.flipped = true;
            this.firstCard = card;
        } else {
            card.flipped = true;
            this.secondCard = card;
            this.stopCheck = true;
            setTimeout(()=>{this.toCompare(callback, over)}, 500)
        }

        callback()
    },

    toCompare : function (callback, over) {  
        if (!this.stopCheck)
        return ;

        if (this.firstCard.symbol === this.secondCard.symbol)
        {
            this.counter ++;
        }else{
            this.firstCard.flipped = false;
            this.secondCard.flipped = false;
        }

        this.reset();
        callback()

        if(this.gameOver())
        over()
    },
   
    reset : function() {
        this.firstCard = null;
        this.secondCard = null;
        this.stopCheck = false;
    },

    createCards : function () {
        this.cards = [];

        for (const icon of this.icons) {
            this.cards.push(this.createPairs(icon));
        }
        this.cards = this.cards.flatMap((cards) => cards);
        this.shuffleCards();
        return this.cards
    },
    
    createPairs : function (icon) {
        return [{
            id: this.makeId(icon),
            symbol: icon,
            flipped: false,
        }, {
            id: this.makeId(icon),
            symbol: icon,
            flipped: false,
        }]
        
    },
    
    makeId : function (icon) {
        return icon + parseInt(Math.random() * 1000);
    },
    
    shuffleCards : function () {
        let lastIndex = this.cards.length;
        let nowIndex = 0;
        while (lastIndex !== 0) {
            nowIndex = Math.floor(Math.random() * lastIndex);
            lastIndex --;        
            [this.cards[lastIndex], this.cards[nowIndex]] = [this.cards[nowIndex], this.cards[lastIndex]];
        }
    },

    gameOver : function() {
        if(this.counter >= (this.cards.length/2)){
            this.counter = 0
            return true;
        }
    }

 }

 export default game