function randomNum(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function knight(attack,accuracy,headHealth, bodyHealth,legsHealth) {
    //only range between 0-3  
    this.attack = Math.floor((Math.random()*3)+1);

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
//user and player attack
document.getElementById("attPowerUser").innerHTML = yourKnight.attack;
document.getElementById("attPowerComp").innerHTML = knights[n].attack;




let usersChoice = null;
function user_btn1 (){
    usersChoice = 1;
};
function user_btn2 (){
    usersChoice = 2;
};
function user_btn3 (){
    usersChoice = 3;
};

let hitHead_comp = knights[n].headHealth;
let hitBody_comp = knights[n].bodyHealth;
let hitLegs_comp = knights[n].legsHealth;

let dayTime = 0;

function attack () {
    // delete or finish
    // dayTime++;
    // if (dayTime%3 === 0 & dayTime%2 === 0) {
    //     img.src = "";
    // }
    console.log('invokes a function')
    //check you're not dead
    if (yourKnight.bodyHealth > 0 & yourKnight.headHealth > 0 & yourKnight.legsHealth > 0) {
        console.log('checked user')
        // check comp is alive
        if (hitHead_comp > 0 & hitBody_comp > 0 & hitLegs_comp > 0 ) {
            console.log('checked comp')
            // check your accuracy
            if (Math.random() < yourKnight.accuracy) {  
                // check user's choice
                switch(usersChoice) {
                    case 1:
                        hitHead_comp -= yourKnight.attack;
                        document.getElementById("scoreCompHead").innerHTML = hitHead_comp;
                        document.getElementById("user_info").innerHTML = "We att HEAD by " + yourKnight.attack;
                        compAttack();
                        break;
                    case 2:
                        hitBody_comp -= yourKnight.attack;
                        document.getElementById("scoreCompBody").innerHTML = hitBody_comp;
                        document.getElementById("user_info").innerHTML = "We att BODY by " + yourKnight.attack;
                        compAttack();
                        break;
                    case 3:
                        hitBody_comp -= yourKnight.attack;
                        document.getElementById("scoreCompLegs").innerHTML = hitBody_comp;
                        document.getElementById("user_info").innerHTML = "We att LEGS by " + yourKnight.attack;
                        compAttack();
                        break;
                    default:
                        break;    
                }
            }
            else {
                document.getElementById("user_info").innerHTML = "You missed attack";
                compAttack ();
            }
        }
        else {
            document.getElementById("user_info").innerHTML = "You killed a knight";
            document.getElementById("comp_info").innerHTML = " R.I.P."
            document.getElementById("rightKnight").style.opacity = "0.00003";
            n++;
            document.getElementById("yourKillsNum").innerHTML = n;
        }  
    }          
    else {
        document.getElementById("user_info").innerHTML = "You died like a honorable knight";
    }    
}


let hitHead_comp1 = yourKnight.headHealth;
let hitBody_comp2 = yourKnight.bodyHealth;
let hitLegs_comp3 = yourKnight.legsHealth;


function compAttack () {
    if (Math.random() < knights[n].accuracy) {
        let compRandom = Math.floor((Math.random()*3)+1);
        switch(compRandom) {
            case 1:
                hitHead_comp1 -= knights[n].attack;
                document.getElementById("scoreNumHead").innerHTML = hitHead_comp1;
                document.getElementById("comp_info").innerHTML = "Enemy att HEAD by " + knights[n].attack;
                break;
            case 2:
                hitBody_comp2 -= knights[n].attack;
                document.getElementById("scoreNumBody").innerHTML = hitBody_comp2;
                document.getElementById("comp_info").innerHTML = "Enemy att BODY by " + knights[n].attack;
                break;
            case 3:
                hitLegs_comp3 -= knights[n].attack;
                document.getElementById("scoreNumLegs").innerHTML = hitLegs_comp3;
                document.getElementById("comp_info").innerHTML = "Enemy att HEAD by " + knights[n].attack;
                break;
            default:
                break;    
        }
    }
    else {
        document.getElementById("comp_info").innerHTML = "Enemy missed attack. ";
    }
}