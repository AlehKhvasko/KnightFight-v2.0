function randomNum(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function knight(attack,accuracy,headHealth, bodyHealth,legsHealth) {
    //only range between 0-3  
    this.attack = Math.floor((Math.random()*3)+1);
    //
    console.log(this.attack);
    //
    this.accuracy = 0.6;
    this.headHealth = randomNum(5,10);
    this.bodyHealth = randomNum(5,10);
    this.legsHealth = randomNum(5,10);
  }

  let enemyKnight1 = new knight();
  let enemyKnight2 = new knight();
  let enemyKnight3 = new knight();
  let enemyKnight4 = new knight();
  let enemyKnight5 = new knight();

let yourAttack = Math.floor((Math.random()*3)+1);

  let yourKnight = {
    attack:yourAttack,
    accuracy: 0.7,
    headHealth:20,
    bodyHealth:22,
    legsHealth:21
  }

  let knights = [enemyKnight1,enemyKnight2,enemyKnight3,enemyKnight4,enemyKnight5];
  
  let n = 0;
  // knights[n].headHealth display this in html
//users knight dashboard
  document.getElementById("scoreNumHead").innerHTML = yourKnight.headHealth;
  document.getElementById("scoreNumBody").innerHTML = yourKnight.bodyHealth;
  document.getElementById("scoreNumLegs").innerHTML = yourKnight.legsHealth;
//computer knight dashboard
  document.getElementById("scoreCompHead").innerHTML = knights[n].headHealth;
  document.getElementById("scoreCompBody").innerHTML = knights[n].bodyHealth;
  document.getElementById("scoreCompLegs").innerHTML = knights[n].legsHealth;


  

  let usersChoice = 0;

  let dayTime = 0;


// that's for comp attack, should be btw 1-3, to choose what part of your body to hit

  let compRandom = Math.floor(Math.random(3)+1);
  //
  console.log('compRandom = ' + compRandom);
  //
  function attack () {
      usersChoice = 1;
      console.log('invokes a function')
      //check you're not dead
    if (yourKnight.bodyHealth > 0 & yourKnight.headHealth > 0 & yourKnight.legsHealth > 0) {
        console.log('checked user')
        // check comp is alive
        if (knights[n].headHealth > 0 & knights[n].bodyHealth > 0 & knights[n].legsHealth > 0 ) {
            console.log('checked comp')
            // check your accuracy
            if (Math.random() < yourKnight.accuracy) {  
                // check user's choice
                switch(1) {
                    case 1:
                        let bodyAttack = knights[n].bodyHealth - yourKnight.attack;
                        document.getElementById("scoreCompHead").innerHTML = bodyAttack;
                        console.log('compRandomCase1');
                        break;
                    case 2:
                        knights[n].headHealth - yourKnight.attack;
                        break;
                    case 3:
                        knights[n].legsHealth - yourKnight.attack;
                        break;
                    default:
                        break;    
                }
            }
            //switching to enemies attack
            
            if (Math.random() < knights[n].accuracy) {
            
                switch(compRandom) {
                    case 1:
                        let hitHead = yourKnight.bodyHealth -  knights[n].attack;
                        document.getElementById("scoreNumHead").innerHTML = hitHead;
                        console.log('compRandomCase1');
                        break;
                    case 2:
                        let hitBody = yourKnight.headHealth -  knights[n].attack;
                        document.getElementById("scoreCompBody").innerHTML = hitBody;
                        console.log('compRandomCase2');
                        break;
                    case 3:
                        let hitLegs = yourKnight.legsHealth -  knights[n].attack;
                        document.getElementById("scoreCompLegs").innerHTML = hitLegs;
                        console.log('compRandomCase3');
                        break;
                    default:
                        break;    
                }
        
            }        
        }
        else {
            // comp dead
            n++;
        }    
    }
  }

  // create random accuracy for computer