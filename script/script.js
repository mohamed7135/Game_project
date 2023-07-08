'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name:'bulbausar',
            img: 'IMages/bulbausar.png'
        },

        {
            name:'bulbausar',
            img: 'IMages/bulbausar.png'
        },

        {
            name:'charmander',
            img: 'IMages/charmander.png'
        },

        {
            name:'charmander',
            img: 'IMages/charmander.png'
        },


        {
            name:'mudkip',
            img: 'IMages/mudkip.png'
        },

        {
            name:'mudkip',
            img: 'IMages/mudkip.png'
        },

        {
            name:'pikachu',
            img: 'IMages/pikachu.png'
        },

        {
            name:'pikachu',
            img: 'IMages/pikachu.png'
        },
        
        {
            name:'squirtle',
            img: 'IMages/squirtle.png'
        },

        {
            name:'squirtle',
            img: 'IMages/squirtle.png'
        },

        {
            name:'torchic',
            img: 'IMages/torchic.png'
        },

        {
            name:'torchic',
            img: 'IMages/torchic.png'
        },

        {
            name:'totodile',
            img: 'IMages/totodile.png'
        },

        {
            name:'totodile',
            img: 'IMages/totodile.png'
        },

        {
            name:'trecko',
            img: 'IMages/trecko.png'
        },

        {
            name:'trecko',
            img: 'IMages/trecko.png'
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
            card.setAttribute('src', 'IMages/black.png')
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
            cards[optionOneId].setAttribute('src', 'IMages/pokeball.png')
            cards[optionTwoId].setAttribute('src', 'IMages/pokeball.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'IMages/black.png')
            cards[optionTwoId].setAttribute('src', 'IMages/black.png')
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
      