'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name:'fastX',
            img: 'IMages/FastX.png'
        },

        {
            name:'fastX',
            img: 'IMages/FastX.png'
        },

        {
            name:'John-Wick',
            img: 'IMages/John-Wick.png'
        },

        {
            name:'John-Wick',
            img: 'IMages/John-Wick.png'
        },


        {
            name:'mermaid',
            img: 'IMages/Mermaid.png'
        },

        {
            name:'mermaid',
            img: 'IMages/Mermaid.png'
        },

        {
            name:'Renfield',
            img: 'IMages/Renfield.png'
        },

        {
            name:'Renfield',
            img: 'IMages/Renfield.png'
        },
        
        {
            name:'Spider-Man',
            img: 'IMages/Spider-Man.png'
        },

        {
            name:'Spider-Man',
            img: 'IMages/Spider-Man.png'
        },

        {
            name:'transformers',
            img: 'IMages/transformers.png'
        },

        {
            name:'transformers',
            img: 'IMages/transformers.png'
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
            card.setAttribute('src', 'IMages/65.png')
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
            cards[optionOneId].setAttribute('src', 'IMages/blackening.png')
            cards[optionTwoId].setAttribute('src', 'IMages/blackening.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'IMages/65.png')
            cards[optionTwoId].setAttribute('src', 'IMages/65.png')
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
      