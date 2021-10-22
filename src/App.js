import React from 'react';
import './App.css';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({currentConcept:'none'})
    this.clicked = this.clicked.bind(this);
  }
  clicked() { 
    this.setState({currentConcept: checkBoxes(this.state.currentConcept)}) 
   console.log(this.state.currentConcept+' the state')
  }
  
  
  
  render() {
    return (
      <>

        <div className='page-box'>


          <div className ='header'>
            <h1>Hearthstone Deck Randomeizer</h1>
            <h2>Deck Randomizer will create a random Deck cocept with a random Hero and recommend core cards for the deck. </h2>
          </div>


          <div className='random-box'>

              <div className='button-box' onClick={this.clicked} ><button className='random-button'>Randomize!</button></div>

              <div className='chosen'>

                <div className='chosen-img-div'> <img id='chosen-img' src='./pics/unknown.png' alt='chosen hero'></img></div>
                <div className='cocept-text'> <h3 id = 'deckTitle'>Randomize and get a random deck</h3></div>

              </div>



          </div>

          <div className='sort-box'> 

              <div className='by-heros'>

                <div className='heros-intro'> <h3>Check the heros to include in the randomization</h3></div>


                  <div className='heros-checkbox'>
                      <div className='hero1'> <input type="checkbox" className='hero-check' id="warrior" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Warrior.png' alt='icon pic'></img> Warrior</div>
                      <div className='hero2'> <input type="checkbox" className='hero-check' id="druid" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Druid.png' alt='icon pic'></img> Druid</div>
                      <div className='hero3'> <input type="checkbox" className='hero-check' id="hunter" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Hunter.png' alt='icon pic'></img> Hunter</div>
                      <div className='hero4'> <input type="checkbox" className='hero-check' id="mage" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Mage.png' alt='icon pic'></img> Mage</div>
                      <div className='hero5'> <input type="checkbox" className='hero-check' id="paladin" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Paladin.png' alt='icon pic'></img> Paladin</div>
                      <div className='hero6'> <input type="checkbox" className='hero-check' id="priest" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Priest.png' alt='icon pic'></img> Priest</div>
                      <div className='hero7'> <input type="checkbox" className='hero-check' id="rogue" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Rogue.png' alt='icon pic'></img> Rogue</div>
                      <div className='hero8'> <input type="checkbox" className='hero-check' id="shaman" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Shaman.png' alt='icon pic'></img> Shaman</div>
                      <div className='hero9'> <input type="checkbox" className='hero-check' id="warlock" defaultChecked></input> <img className='icon-pic' src='./pics/Icon-Warlock.png' alt='icon pic'></img> Warlock</div>
                    
                  </div>

                  <div className='hero10'> <input type="checkbox" className='hero-check' id="demonhunter" defaultChecked ></input> <img className='icon-pic' src='./pics/Icon-Demon-Hunter.png' alt='icon pic'></img> Demon hunter</div>

              </div >


              <div className='deck-concept'>

                <h3>concepts:</h3>

                <p id = 'explanation'>explanation about the decks concept</p>

                <h4>King Card: A must card for your deck!</h4>

                <div id = 'kingCardDiv'><img id = 'kingCard' src='./pics/empty-card.png' alt ='king card!'></img></div>

              </div>




          </div>

          <div className='recomended'>

          <div> <h3 className='text1'>Recommended Hero cards </h3></div>
            <div><h3 className='text2'>Recommended Netural cards </h3></div>

          </div>




          <div className='cards'> 

            <div className='hero-cards'>

              <img id = 'heroCard1' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard2' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard3' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard4'src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard5' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard6' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard7' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard8' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard9' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'heroCard10' src='./pics/empty-card.png' alt='pic'></img>
              
            </div>

            <div className='netural-cards'>

              <img id = 'neutralCard1' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard2' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard3' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard4' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard5' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard6' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard7' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard8' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard9' src='./pics/empty-card.png' alt='pic'></img>
              <img id = 'neutralCard10' src='./pics/empty-card.png' alt='pic'></img>

            </div>

          </div>


      

        </div>

        <div className="scroll"></div>

      </>
      
    );
  }
}

function checkBoxes(TheConcept){
    

  var heros = [ 'mage', 'hunter', 'warlock', 'paladin', 'rogue', 'druid',  'priest', 'warrior', 'shaman', 'demonhunter']

  var chosenHeros = []

  var heroCounter = 0

  for(let i = 0 ; i < 10; i++){
      if(document.getElementById(heros[i]).checked){
        chosenHeros.push(heros[i])
        heroCounter += 1
      }
  }
  
  if (heroCounter !== 0){


    var herosdecks = require('./decks.json');
    var concepts = require('./concepts.json');


    var randomHero = 'none';

    var randomConcept = 'none';
    console.log(TheConcept+' theConcept')
    console.log(randomConcept+' random concept')
    do{
        randomHero = chosenHeros[Math.floor(Math.random() * chosenHeros.length)];
        randomConcept = concepts[randomHero.toUpperCase()]
        randomConcept = randomConcept[Math.floor(Math.random() * randomConcept.length)]

      }while(TheConcept === randomConcept)

    console.log(randomHero)
    console.log(randomConcept)

    var heroImg = document.getElementById('chosen-img')
    heroImg.src ='http://localhost:3000/pics/'+randomHero+'.png'


    var titleText = document.getElementById('deckTitle')
    titleText.innerHTML = randomHero.toUpperCase()  +'  DECK'

    var thisConcept = randomConcept
    randomConcept = randomHero + randomConcept
    randomHero += 'Decks'

   
    var text = require('./text.json')
    

    var kingCards = require('./kingCards.json')
   

    var explanation = document.getElementById('explanation')
    explanation.innerHTML = text[randomHero][randomConcept]


    var KC = document.getElementById('kingCard')

    KC.src = kingCards[randomHero][randomConcept][2]
    

    var heroCardIndex = 1
    var neutralCardIndex = 1
    for(var i = 0 ; i < herosdecks[randomHero][randomConcept].length ; i++){
      if(herosdecks[randomHero][randomConcept][i]['cardClass'] === 'NEUTRAL'){
        document.getElementById('neutralCard'+neutralCardIndex).src = herosdecks[randomHero][randomConcept][i]['imgUrl']
        neutralCardIndex += 1
      }
      else{
        document.getElementById('heroCard'+heroCardIndex).src = herosdecks[randomHero][randomConcept][i]['imgUrl']
        heroCardIndex += 1
      } 
    }

    while (heroCardIndex < 11 ){
      document.getElementById('heroCard'+heroCardIndex).src = './pics/empty-card.png'
      heroCardIndex += 1
    }
    while (neutralCardIndex < 11 ){
      document.getElementById('neutralCard'+neutralCardIndex).src = './pics/empty-card.png'
      neutralCardIndex += 1
    }


  }
    
  console.log(thisConcept+' to pass on')
  return thisConcept
}
  










export default App;