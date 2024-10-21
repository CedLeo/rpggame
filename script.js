//1. load option screens
//2. load character
//3. mob mechanics
//4. level and gold mechanics
//5. shop mechanics

// DOM declarations
let health = document.getElementById('health');
let level = document.getElementById('level');
let gold = document.getElementById('gold');
let screenTitle = document.getElementById('screenTitle')
let screenText = document.getElementById('screenText');
let playerOption1 = document.getElementById('playerOption1');
let playerOption2 = document.getElementById('playerOption2');
let playerOption3 = document.getElementById('playerOption3');
let back = document.getElementById('back');
let weaponTxt = document.getElementById('weapon');
let armorTxt = document.getElementById('armor');
let potion = document.getElementById('potion');


//==============================================================================================================================================================


// Player base stats
let playerHealth = 100;
let playerLevel = 1;
let playerExp = 0;
let playerGold = 100;
let playerPotionAmount = 0;
let playerWeaponTier = 1;
let playerWeapon;
let playerArmorTier = 0;
let playerArmor;
let playerDamage = 5;
let playerDefense = 0;
let playerHealthCapRate = 0;

// Player stat display
health.textContent = playerHealth;
level.textContent = playerLevel;
gold.textContent = playerGold;
potion.textContent = "Potion " + playerPotionAmount + "x"

const reset = () => {
    // Player base stats
playerHealth = 100;
playerLevel = 1;
playerExp = 0;
playerGold = 100;
playerPotionAmount = 0;
playerWeaponTier = 1;
playerWeapon;
playerArmorTier = 0;
playerArmor;
playerDamage = 5;
playerDefense = 0;
playerHealthCapRate = 0;

// Player stat display
health.textContent = playerHealth;
level.textContent = playerLevel;
gold.textContent = playerGold;
potion.textContent = "Potion " + playerPotionAmount + "x"
}




//==============================================================================================================================================================

// ==============================================================================================================================================================

// Load screens from JSON
const loadScreens = async () => {
    try {
        const response = await fetch('./gamefiles/optionscreen.json');
        const screens = await response.json();
        return screens;
    } catch (error) {
        console.error("Error loading the JSON file:", error);
    }
};

// TownSquare screen function
const goTownSquare = async () => {
    const screens = await loadScreens(); // Load screens data
    if (screens) {
        const townSquareScreen = screens["townSquare"]; // Declare inside after loading

        // Screen text
        screenTitle.textContent = townSquareScreen["title"];
        screenText.textContent = townSquareScreen["text"];

        //show playeroptions
        playerOption1.style.display = 'block';
        playerOption2.style.display = 'block';

        // Button text
        playerOption1.textContent = townSquareScreen["button text"][0];
        playerOption2.textContent = townSquareScreen["button text"][1];

        // Button functions
        playerOption1.onclick = goShop;
        playerOption2.onclick = goWilderness;

        // Hide option 3 and back button
        playerOption3.style.display = 'none';
        back.style.display = 'none';
    }
};

// Shop screen function
const goShop = async () => {
    const screens = await loadScreens(); // Load screens data
    const shopOptions = await loadShop();
    if (screens) {
        const shopScreen = screens["shop"]; // Declare inside after loading

        // Screen text
        screenTitle.textContent = shopScreen["title"];
        screenText.textContent = shopScreen["text"];

        //add back the buttons
        playerOption3.style.display = 'block';
        back.style.display = 'block';

        // Button text
        playerOption1.textContent = shopScreen["button text"][0];
        if(shopOptions){    
            const weaponShop = shopOptions["shop"]["weapons"];
            const armorShop = shopOptions["shop"]["armors"];
            playerOption2.textContent = shopScreen["button text"][1]  + armorShop[playerArmorTier]["cost"] + " gold)";
            playerOption3.textContent = shopScreen["button text"][2]  + weaponShop[playerWeaponTier]["cost"] + " gold)";
        }
        back.textContent = shopScreen["button text"][3];

        // Button functions
        playerOption1.onclick = buyPotion;
        playerOption2.onclick = buyArmor;
        playerOption3.onclick = buyWeapon;
        back.onclick = goTownSquare;
    }
};

// Wilderness Screen Functions
const goWilderness = async () => {
    const screens = await loadScreens(); // Load screens data
    if (screens) {
        const wildernessScreen = screens["wilderness"]; // Declare inside after loading

        // Screen text
        screenTitle.textContent = wildernessScreen["title"];
        screenText.textContent = wildernessScreen["text"];

        //add back the buttons
        playerOption3.style.display = 'block';
        back.style.display = 'block';

        // Button text
        playerOption1.textContent = wildernessScreen["button text"][0];
        playerOption2.textContent = wildernessScreen["button text"][1];
        playerOption3.textContent = wildernessScreen["button text"][2];
        back.textContent = wildernessScreen["button text"][3];

        // Button functions
        playerOption1.onclick = goForest;
        playerOption2.onclick = goCave;
        playerOption3.onclick = goDungeon;
        back.onclick = goTownSquare;
    }
};
// Forest Screen Functions
const goForest = async () => {
    const screens = await loadScreens();
    if (screens){
        const forestScreen = screens["forest"];

        // Screen text
        screenTitle.textContent = forestScreen["title"];
        screenText.textContent = forestScreen["text"];
        
        // Button text
        playerOption1.textContent = forestScreen["button text"][0];
        playerOption2.textContent = forestScreen["button text"][1];
        playerOption3.textContent = forestScreen["button text"][2];
        back.textContent = forestScreen["button text"][3];

        // Button functions
        playerOption1.onclick = () => attackMob("forest", "Slime");
        playerOption2.onclick = () => attackMob("forest", "Goblin");
        playerOption3.onclick = () => attackMob("forest", "Wolf");
        back.onclick = goWilderness;
    }
};

// Cave Screen Functions
const goCave = async () => {
    const screens = await loadScreens();
    if (screens) {
        const caveScreen = screens["cave"];

        // Screen text
        screenTitle.textContent = caveScreen["title"];
        screenText.textContent = caveScreen["text"];
        
        // Button text
        playerOption1.textContent = caveScreen["button text"][0];
        playerOption2.textContent = caveScreen["button text"][1];
        playerOption3.textContent = caveScreen["button text"][2];
        back.textContent = caveScreen["button text"][3];

        // Button functions
        playerOption1.onclick = () => attackMob("cave", "Orc");
        playerOption2.onclick = () => attackMob("cave", "Serpent");
        playerOption3.onclick = () => attackMob("cave", "Giant Spider");
        back.onclick = goWilderness;
    }
};

// Dungeon Screen Functions
const goDungeon = async () => {
    const screens = await loadScreens();
    if (screens) {
        const dungeonScreen = screens["dungeon"];

        // Screen text
        screenTitle.textContent = dungeonScreen["title"];
        screenText.textContent = dungeonScreen["text"];
        
        // Button text
        playerOption1.textContent = dungeonScreen["button text"][0];
        playerOption2.textContent = dungeonScreen["button text"][1];
        playerOption3.textContent = dungeonScreen["button text"][2];
        back.textContent = dungeonScreen["button text"][3];

        // Button functions
        playerOption1.onclick = () => attackMob("dungeon", "Undead Knight");
        playerOption2.onclick = () => attackMob("dungeon", "Reptile");
        playerOption3.onclick = () => attackMob("dungeon", "Dragon");
        back.onclick = goWilderness;
    }
};


//Attack Screen Functions
const goAttackScreen = async () => {
    const screens = await loadScreens();
    if (screens) {
        const attackScreen = screens["attackScreen"];

        //Screen text
        screenTitle.textContent = attackScreen["title"];
        screenText.textContent = attackScreen["text"];
        
        //button text
        playerOption1.textContent = attackScreen["button text"][0];
        playerOption2.textContent = attackScreen["button text"][1];
        playerOption3.textContent = attackScreen["button text"][2];
        back.textContent = attackScreen["button text"][3];

        //button functions  
        playerOption1.onclick = fight;
        playerOption2.onclick = dodge;
        playerOption3.onclick = usePotion;
        back.onclick = run;
    }
};

//==============================================================================================================================================================


//==============================================================================================================================================================

//Shop functions

const loadShop = async () =>{
    try {
        const response = await fetch('./gamefiles/shop.json');
        const shopOptions = await response.json();
        return shopOptions;
    } catch (error) {
        console.error("Error loading the JSON file:", error);
    }
};

const buyPotion = () => {
    if(playerGold>=10){
        playerPotionAmount+=1;
        screenText.textContent = "Great! now you can heal 30hp!"
        playerGold-=10;
        //update player stats
        gold.textContent = playerGold;
        potion.textContent = "Potion " + playerPotionAmount + "x"
    }else {
        screenText.textContent = "You dont have enough gold. maybe come back later?"
    }

}

const buyWeapon = async () => {
    const shopOptions = await loadShop();
    const screens = await loadScreens(); // Load screens data
    if(shopOptions && screens){
        const shopScreen = screens["shop"]; // Declare inside after loading
        const weaponShop = shopOptions["shop"]["weapons"];

        if(playerWeaponTier<weaponShop.length){
            if(playerGold>=weaponShop[playerWeaponTier]["cost"]){
                if(playerLevel/5>=playerWeaponTier){
                    playerGold-=weaponShop[playerWeaponTier]["cost"];
                    playerWeapon = weaponShop[playerWeaponTier]["name"];
                    weaponTxt.textContent = playerWeapon;
                    gold.textContent = playerGold;
                    playerDamage = weaponShop[playerWeaponTier]["damage"];
                    playerWeaponTier++;
                    playerOption3.textContent = shopScreen["button text"][2]  + weaponShop[playerWeaponTier]["cost"] + " gold)";
                }else{
                    screenText.textContent = "You are not worthy enough, maybe get more levels";
                }
            }else{
                screenText.textContent = "Maybe get more gold?";
            }
        }else{
            screenText.textContent = "You are already the most powerful";
        }


    }
}

const buyArmor = async () => {
    const shopOptions = await loadShop();
    const screens = await loadScreens(); // Load screens data
    if(shopOptions && screens){
        const shopScreen = screens["shop"]; // Declare inside after loading
        const armorShop = shopOptions["shop"]["armors"];
        if(playerArmorTier<armorShop.length){
            if(playerGold>=armorShop[playerArmorTier]["cost"]){
                if(playerLevel/5>=playerArmorTier){
                    playerGold-=armorShop[playerArmorTier]["cost"];
                    playerArmor = armorShop[playerArmorTier]["name"];
                    armorTxt.textContent = playerArmor;
                    gold.textContent = playerGold;
                    playerDefense = armorShop[playerArmorTier]["defense"];
                    playerArmorTier++;
                    playerOption2.textContent = shopScreen["button text"][2]  + armorShop[playerArmorTier]["cost"] + " gold)";
                }else{
                    screenText.textContent = "You cant wear that yet, maybe get more levels";
                }
            }else{
                screenText.textContent = "Maybe get more gold?";
            }
        } else{
            screenText.textContent = "You can basically tank everything"
        }
    }
}



//==============================================================================================================================================================


//==============================================================================================================================================================

//Player bottom UI functions
const weaponInspect = () => {
    // Display player damage first
    weaponTxt.textContent = playerDamage + " damage";
    
    // change back after 2 seconds
    setTimeout(() => {
        weaponTxt.textContent = playerWeapon;
    }, 1000);
}

weaponTxt.onclick = weaponInspect;


const armorInspect = () => {
    // Display player defense first
    armorTxt.textContent = playerDefense + " defense";
    
    // change back after 2 seconds  
    setTimeout(() => {
        armorTxt.textContent = playerArmor;
    }, 1000);
}

armorTxt.onclick = armorInspect;

const useHealthPotion = () =>{
    if(notDuringFight){
        if(playerPotionAmount>0 && playerHealth<100+20*playerHealthCapRate){
            //uses potion
            playerHealth += 30; 
            if(playerHealth>100+20*playerHealthCapRate){
                playerHealth = 100+20*playerHealthCapRate;
            }
            playerPotionAmount--;
            //update display
            health.textContent = playerHealth;
            potion.textContent = "Potion " + playerPotionAmount + "x"
            screenText.textContent = "You recovered some of your health back";
            }else if(playerPotionAmount<=0){
                screenText.textContent = "Go buy more potions";
            }else {
                screenText.textContent = "You are already full health";
            }
    }else{
        potion.textContent = "Cant use this";
    }


}



potion.onclick = useHealthPotion;


//==============================================================================================================================================================


//==============================================================================================================================================================
// Attack Functions

const loadMobs = async () =>{
    try{
        const response = await fetch('./gamefiles/mobs.json');
        const mobList = await response.json();
        return mobList
    }catch (error) {
        console.error("Error loading the JSON file:", error);
    }
};
// Enemy Base stats
let enemyName = "bob";
let enemyHealth = 1;
let enemyDamage = 1;
let enemyHDamage = 1;
let enemyHTrigger = 1;
let enemyGoldDrop = 1;
let enemyExpDrop = 1;
let enemyLevel = 1;
let enemyAttack = 0;


// Enemy Random Level generator
function getRandomLevel(minLevel, maxLevel) {
    return Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
}

const getDamage = (base, dpl, level) => {
    return base + dpl * level;
}

const getGold = (base, gpl, level) => {
    return base + gpl * level;
}

const getExp = (base, epl, level) => {
    return base + epl * level;
}
const attackMob = async (location, mobName) => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const mob = mobList[location][mobName]; 
        const mobNDamage = mob["normal_attack_damage"];
        const mobHDamage = mob["high_attack"];
        const mobGold = mob["gold"];
        const mobExp = mob["experience"];

        enemyName = mob["name"];
        enemyHealth = mob["health"];
        enemyLevel = getRandomLevel(mob["minLevel"], mob["maxLevel"]);
        enemyHTrigger = mobHDamage["trigger_after_attacks"];
        enemyAttack = 0;
        enemyDamage = getDamage(mobNDamage["base"], mobNDamage["damage_per_level"], enemyLevel);
        enemyHDamage = getDamage(mobHDamage["damage"], mobNDamage["damage_per_level"], enemyLevel);
        enemyGoldDrop = getGold(mobGold["base"], mobGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(mobExp["base"], mobExp["per_level"], enemyLevel);

        console.log(enemyName);
        console.log(enemyHealth)
        console.log(enemyLevel)
        console.log(enemyHTrigger)
        console.log(enemyDamage)
        console.log(enemyGoldDrop)  
        console.log(enemyHDamage)
        console.log(enemyAttack)
        console.log(enemyGoldDrop)
    }
};



//==============================================================================================================================================================


//==============================================================================================================================================================


// Action Functions in Attack Screen
let enemyNormDmg = 1;
let notDuringFight = true;
let halfEnemyHealth = 1;
const fight = async () => {
    console.log("enemy damage without player defense "+enemyDamage);
    if(notDuringFight){
        halfEnemyHealth = enemyHealth/2;
        enemyDamage -= playerDefense;
        notDuringFight = false;
    }
    if (enemyAttack < enemyHTrigger) {
        enemyNormDmg = enemyDamage;
        enemyAttack++;
        console.log("triggering normal damage " +enemyDamage);
        console.log(enemyAttack+" attack");
    } else {
        enemyNormDmg = enemyDamage;
        enemyDamage = enemyHDamage;
        enemyAttack = 0;
        console.log("triggering high attack damage " +enemyDamage);
        console.log(enemyAttack+" attack");
    }
    enemyHealth -= playerDamage;

    if(enemyHealth<=0){
        goWilderness();
        screenText.textContent = "You won and you found your way out, you got some gold and exp";
        enemyAttack = 0;
        playerGold += enemyGoldDrop;
        playerExp += enemyExpDrop;
        if(playerExp>=playerLevel*10){
            screenText.textContent = "You levelled up! maybe youre becoming worthy";
            playerLevel++;
            playerHealthCapRate++;  
            playerExp=0;
        }
        //update player gold, exp, level, health
        gold.textContent = playerGold;
        health.textContent = playerHealth;
        level.textContent = playerLevel;
        notDuringFight = true;
    } else{
        playerHealth -= enemyDamage;
        enemyDamage = enemyNormDmg;
        health.textContent = playerHealth;
        if(enemyHealth <= halfEnemyHealth){
            screenText.textContent = "The enemy is at critical health";
        }else{
            screenText.textContent = "Both of you took some damage";
        }

        if(playerHealth<=0){
            playerOption1.style.display = 'none';
            playerOption2.style.display = 'none';
            playerOption3.style.display = 'none';
            back.style.display = 'none';
            screenTitle.textContent = "Game over... resetting"
            screenText.textContent = "You lost and you found yourself in the wilderness"
            reset();
            setTimeout(() => {
                goTownSquare();
            }, 3000);
            notDuringFight = true;
        }
    }
};

const dodge = async () => {
    screenText.textContent = "You dodged the enemy, he wasted an attack!";
    enemyAttack++;
    if(enemyAttack>=enemyHTrigger){
        enemyAttack=0;
    }
};

const usePotion = async () => {
    if(playerPotionAmount>0 && playerHealth<100){
        //uses potion
        playerHealth += 30;
        if(playerHealth>100){
            playerHealth = 100;
        }
        playerPotionAmount--;
        //update display
        health.textContent = playerHealth;
        potion.textContent = "Potion " + playerPotionAmount + "x"
        screenText.textContent = "You recovered some of your health back";
        }else if(playerPotionAmount<=0){
            screenText.textContent = "Go buy more potions";
        }else {
            screenText.textContent = "You are already full health";
        }
};

const run = async () => {
    goWilderness();
    screenText.textContent = "You successfully ran back to the wilderness";
};

//==============================================================================================================================================================

// Initialize the game with the town square
goTownSquare();
playerArmor = "No armor";
playerWeapon = "Stick";
weaponTxt.textContent = playerWeapon;
armorTxt.textContent = playerArmor;
