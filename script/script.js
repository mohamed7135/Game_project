'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const levels = {
        easy: 6,
        medium: 8,
        hard: 12
    };

    const cardArray = [
        {
            name:'bulbausar',
            img: 'IMages/bulbausar1.png'
        },

        {
            name:'bulbausar',
            img: 'IMages/bulbausar1.png'
        },

        {
            name:'charmander',
            img: 'IMages/charmander1.png'
        },

        {
            name:'charmander',
            img: 'IMages/charmander1.png'
        },


        {
            name:'mudkip',
            img: 'IMages/mudkip1.png'
        },

        {
            name:'mudkip',
            img: 'IMages/mudkip1.png'
        },

        {
            name:'pikachu',
            img: 'IMages/pikachu1.png'
        },

        {
            name:'pikachu',
            img: 'IMages/pikachu1.png'
        },
        
        {
            name:'squirtle',
            img: 'IMages/squirtle1.png'
        },

        {
            name:'squirtle',
            img: 'IMages/squirtle1.png'
        },

        {
            name:'torchic',
            img: 'IMages/torchic1.png'
        },

        {
            name:'torchic',
            img: 'IMages/torchic1.png'
        },

        {
            name:'totodile',
            img: 'IMages/totodile1.png'
        },

        {
            name:'totodile',
            img: 'IMages/totodile1.png'
        },

        {
            name:'trecko',
            img: 'IMages/trecko1.png'
        },

        {
            name:'trecko',
            img: 'IMages/trecko1.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

  
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'IMages/black1.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    
     function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'IMages/pokeball1.png')
            cards[optionTwoId].setAttribute('src', 'IMages/pokeball1.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'IMages/black1.png')
            cards[optionTwoId].setAttribute('src', 'IMages/black1.png')
            alert('Sorry,try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats!'
        }
        }
     

   
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500);
        }
      }    
      
      createBoard()
      
      })
      