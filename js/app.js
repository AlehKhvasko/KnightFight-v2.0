function randomNum(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function knight(attack,accuracy,headHealth, bodyHealth,legsHealth) {
    //only range between 0-3  
    this.attack = Math.random()*3;
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

let yourAttack = Math.random()*3;

  let yourKnight = {
    attack:yourAttack,
    accuracy: 0.7,
    headHealth:20,
    bodyHealth:22,
    legsHealth:21
  }

  document.getElementById("scoreNumHead").innerHTML = yourKnight.headHealth;
  document.getElementById("scoreNumBody").innerHTML = yourKnight.bodyHealth;
  document.getElementById("scoreNumLegs").innerHTML = yourKnight.legsHealth;
  
  let knights = [enemyKnight1,enemyKnight2,enemyKnight3,enemyKnight4,enemyKnight5];

  let n = 0;

  let usersChoice = 0;

  let dayTime = 0;


// that's for comp attack, should be btw 1-3, to choose what part of your body to hit

  let compRandom = Math.random(3)+1;

  function attack () {
      usersChoice = 1;
      //check you're not dead
    if (yourKnight.bodyHealth > 0 & yourKnight.headHealth > 0 & yourKnight.legsHealth > 0) {
        // check comp is alive
        if (enemyKnight[n].headHealth < 0 & enemyKnight[n].bodyHealth < 0 & enemyKnight[n].legsHealth < 0 ) {
            // check your accuracy
            if (Math.random() < yourKnight.accuracy) {  
                // check user's choice
                switch(usersChoice) {
                    case 1:
                        let bodyAttack = enemyKnight[n].bodyHealth - yourKnight.attack;
                        Document.getElementById("bodyNum").innerHtml = bodyAttack;
                    case 2:
                        enemyKnight[n].headHealth - yourKnight.attack;
                    case 3:
                        enemyKnight[n].legsHealth - yourKnight.attack;
                    default:
                        break;    
                }
            }
            //switching to enemies attack
            
            if (Math.random() < enemyKnight[n].accuracy) {
            
                switch(compRandom) {
                    case 1:
                        yourKnight.bodyHealth -  enemyKnight[n].attack;
                    case 2:
                        yourKnight.headHealth -  enemyKnight[n].attack;
                    case 3:
                        yourKnight.legsHealth -  enemyKnight[n].attack;
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