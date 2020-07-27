let mali=prompt("Max life of you and monster",'100');
let maxLife=parseInt(mali);
if(isNaN(maxLife) && maxLife<=0){
    maxLife=100;
}else{}

const attackValue=10;
attackValueStrong=20;
var currentMonsterhealth=maxLife;
var curentUserHealth=maxLife;
var healvalue=14;
adjustHealthBars(maxLife);
let bonuslife=true 


function healit() {
   
    var x=dealPlayerDamage(attackValue);
    curentUserHealth -=x;
    if (curentUserHealth+healvalue>=maxLife) {
        alert("you cant heal more")
        increasePlayerHealth(maxLife-curentUserHealth);
    }
    else{
        increasePlayerHealth(healvalue);
        healBtn.disabled=true;
    }

}
function Moode(type) {
    if(type=="strong"){
        var attack=attackValueStrong;
    }
    else if(type=="less"){
        var attack=attackValue;
    }
    const damage=dealMonsterDamage(attack);
    currentMonsterhealth=currentMonsterhealth-damage;
    if (bonuslife==true && curentUserHealth<=0){
        increasePlayerHealth(20);
        bonuslife=false;
    }
    else{
    const painuser=dealPlayerDamage(attackValue);
    curentUserHealth -=painuser;}

    if (currentMonsterhealth<=0 && curentUserHealth>0 ){
        alert("you won");
        reset()
    }else if(currentMonsterhealth>0 && curentUserHealth<=0){
alert("monseter won")
reset()
    }
}
function onAttack(){
    Moode("less");
}
function onstrongattack(){
    Moode("strong");
}
function bonu() {
    
    
    if (curentUserHealth<=10 && bonuslife == true ){
        increasePlayerHealth(20);
        removeBonusLife();


    }
    else{
        alert('you cant access,as your score is above 10 ');
    }
}
function reset(){
    monsterHealthBar.value = maxLife;
    playerHealthBar.value = maxLife;
    currentMonsterhealth=maxLife;
    curentUserHealth=maxLife;
    healBtn.disabled=false;
}
attackBtn.addEventListener('click',onAttack);
strongAttackBtn.addEventListener('click',onstrongattack);
healBtn.addEventListener('click',healit);
bonusLifeEl.addEventListener('click',bonu);