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

//Forest Screen Functions
const goForest = async () => {
    const screens = await loadScreens();
    if (screens){
        const forestScreen = screens["forest"];

        //Screen text
        screenTitle.textContent = forestScreen["title"];
        screenText.textContent = forestScreen["text"];
        
        // Button text
        playerOption1.textContent = forestScreen["button text"][0];
        playerOption2.textContent = forestScreen["button text"][1];
        playerOption3.textContent = forestScreen["button text"][2];
        back.textContent = forestScreen["button text"][3];

        // Button functions
        playerOption1.onclick = attackSlime;
        playerOption2.onclick = attackGoblin;
        playerOption3.onclick = attackWolf;
        back.onclick = goWilderness;
    }
};

//Cave Screen Functions
const goCave = async () => {
    const screens = await loadScreens();
    if (screens) {
        const caveScreen = screens["cave"];

        //Screen text
        screenTitle.textContent = caveScreen["title"];
        screenText.textContent = caveScreen["text"];
        
        //button text
        playerOption1.textContent = caveScreen["button text"][0];
        playerOption2.textContent = caveScreen["button text"][1];
        playerOption3.textContent = caveScreen["button text"][2];
        back.textContent = caveScreen["button text"][3];

        //button functions
        playerOption1.onclick = attackOrc;
        playerOption2.onclick = attackSerpent;
        playerOption3.onclick = attackSpider;
        back.onclick = goWilderness;
    }
};

//Dungeon Screen Functions
const goDungeon = async () => {
    const screens = await loadScreens();
    if (screens) {
        const dungeonScreen = screens["dungeon"];

        //Screen text
        screenTitle.textContent = dungeonScreen["title"];
        screenText.textContent = dungeonScreen["text"];
        
        //button text
        playerOption1.textContent = dungeonScreen["button text"][0];
        playerOption2.textContent = dungeonScreen["button text"][1];
        playerOption3.textContent = dungeonScreen["button text"][2];
        back.textContent = dungeonScreen["button text"][3];

        //button functions
        playerOption1.onclick = attackUndeadKnight;
        playerOption2.onclick = attackReptile;
        playerOption3.onclick = attackDragon;
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
        console.log(playerWeaponTier)
        if(playerGold>=weaponShop[playerWeaponTier]["cost"]){
            if(playerLevel/10>=playerWeaponTier){
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

    }
}

const buyArmor = async () => {
    const shopOptions = await loadShop();
    const screens = await loadScreens(); // Load screens data
    if(shopOptions && screens){
        const shopScreen = screens["shop"]; // Declare inside after loading
        const armorShop = shopOptions["shop"]["armors"];
        console.log(playerArmorTier)
        if(playerGold>=armorShop[playerArmorTier]["cost"]){
            if(playerLevel/10>=playerArmorTier){
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

const attackSlime = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const slime = mobList["forest"]["Slime"];
        const slimeNDamage = slime["normal_attack_damage"];
        const slimeHDamage = slime["high_attack"];
        const slimeGold = slime["gold"];
        const slimeExp = slime["experience"];
        
        enemyName = slime["name"];
        enemyHealth = slime["health"];
        enemyLevel = getRandomLevel(slime["minLevel"], slime["maxLevel"]);
        enemyHTrigger = slimeHDamage["trigger_after_attacks"];
        enemyDamage = getDamage(slimeNDamage["base"], slimeNDamage["damage_per_level"], enemyLevel);
        enemyHDamage = getDamage(slimeHDamage["damage"], slimeNDamage["damage_per_level"], enemyLevel)

        enemyGoldDrop = getGold(slimeGold["base"], slimeGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(slimeExp["base"], slimeExp["per_level"], enemyLevel);
    }
};

const attackGoblin = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const goblin = mobList["forest"]["Goblin"];
        const goblinNDamage = goblin["normal_attack_damage"];
        const goblinHDamage = goblin["high_attack"];
        const goblinGold = goblin["gold"];
        const goblinExp = goblin["experience"];
        
        enemyName = goblin["name"];
        enemyHealth = goblin["health"];
        enemyLevel = getRandomLevel(goblin["minLevel"], goblin["maxLevel"]);
        enemyHTrigger = goblinHDamage["trigger_after_attacks"];
        let enemyAttack = 0;

        if (enemyAttack < enemyHTrigger) {
            enemyDamage = getDamage(goblinNDamage["base"], goblinNDamage["damage_per_level"], enemyLevel);
            enemyAttack++;
        } else {
            enemyDamage = getDamage(goblinHDamage["damage"], goblinNDamage["damage_per_level"], enemyLevel);
            enemyAttack = 0;
        }

        enemyGoldDrop = getGold(goblinGold["base"], goblinGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(goblinExp["base"], goblinExp["per_level"], enemyLevel);
    }
};

const attackWolf = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const wolf = mobList["forest"]["Wolf"];
        const wolfNDamage = wolf["normal_attack_damage"];
        const wolfHDamage = wolf["high_attack"];
        const wolfGold = wolf["gold"];
        const wolfExp = wolf["experience"];
        
        enemyName = wolf["name"];
        enemyHealth = wolf["health"];
        enemyLevel = getRandomLevel(wolf["minLevel"], wolf["maxLevel"]);
        enemyHTrigger = wolfHDamage["trigger_after_attacks"];
        let enemyAttack = 0;

        if (enemyAttack < enemyHTrigger) {
            enemyDamage = getDamage(wolfNDamage["base"], wolfNDamage["damage_per_level"], enemyLevel);
            enemyAttack++;
        } else {
            enemyDamage = getDamage(wolfHDamage["damage"], wolfNDamage["damage_per_level"], enemyLevel);
            enemyAttack = 0;
        }

        enemyGoldDrop = getGold(wolfGold["base"], wolfGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(wolfExp["base"], wolfExp["per_level"], enemyLevel);
    }
};

const attackOrc = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const orc = mobList["cave"]["Orc"];
        const orcNDamage = orc["normal_attack_damage"];
        const orcHDamage = orc["high_attack"];
        const orcGold = orc["gold"];
        const orcExp = orc["experience"];
        
        enemyName = orc["name"];
        enemyHealth = orc["health"];
        enemyLevel = getRandomLevel(orc["minLevel"], orc["maxLevel"]);
        enemyHTrigger = orcHDamage["trigger_after_attacks"];
        let enemyAttack = 0;

        if (enemyAttack < enemyHTrigger) {
            enemyDamage = getDamage(orcNDamage["base"], orcNDamage["damage_per_level"], enemyLevel);
            enemyAttack++;
        } else {
            enemyDamage = getDamage(orcHDamage["damage"], orcNDamage["damage_per_level"], enemyLevel);
            enemyAttack = 0;
        }

        enemyGoldDrop = getGold(orcGold["base"], orcGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(orcExp["base"], orcExp["per_level"], enemyLevel);
    }
};

const attackSerpent = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const serpent = mobList["cave"]["Serpent"];
        const serpentNDamage = serpent["normal_attack_damage"];
        const serpentHDamage = serpent["high_attack"];
        const serpentGold = serpent["gold"];
        const serpentExp = serpent["experience"];
        
        enemyName = serpent["name"];
        enemyHealth = serpent["health"];
        enemyLevel = getRandomLevel(serpent["minLevel"], serpent["maxLevel"]);
        enemyHTrigger = serpentHDamage["trigger_after_attacks"];
        let enemyAttack = 0;

        if (enemyAttack < enemyHTrigger) {
            enemyDamage = getDamage(serpentNDamage["base"], serpentNDamage["damage_per_level"], enemyLevel);
            enemyAttack++;
        } else {
            enemyDamage = getDamage(serpentHDamage["damage"], serpentNDamage["damage_per_level"], enemyLevel);
            enemyAttack = 0;
        }

        enemyGoldDrop = getGold(serpentGold["base"], serpentGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(serpentExp["base"], serpentExp["per_level"], enemyLevel);
    }
};

const attackSpider = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const spider = mobList["cave"]["Giant Spider"];
        const spiderNDamage = spider["normal_attack_damage"];
        const spiderHDamage = spider["high_attack"];
        const spiderGold = spider["gold"];
        const spiderExp = spider["experience"];
        
        enemyName = spider["name"];
        enemyHealth = spider["health"];
        enemyLevel = getRandomLevel(spider["minLevel"], spider["maxLevel"]);
        enemyHTrigger = spiderHDamage["trigger_after_attacks"];
        let enemyAttack = 0;

        if (enemyAttack < enemyHTrigger) {
            enemyDamage = getDamage(spiderNDamage["base"], spiderNDamage["damage_per_level"], enemyLevel);
            enemyAttack++;
        } else {
            enemyDamage = getDamage(spiderHDamage["damage"], spiderNDamage["damage_per_level"], enemyLevel);
            enemyAttack = 0;
        }

        enemyGoldDrop = getGold(spiderGold["base"], spiderGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(spiderExp["base"], spiderExp["per_level"], enemyLevel);
    }
};

const attackUndeadKnight = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const undeadKnight = mobList["dungeon"]["Undead Knight"];
        const undeadKnightNDamage = undeadKnight["normal_attack_damage"];
        const undeadKnightHDamage = undeadKnight["high_attack"];
        const undeadKnightGold = undeadKnight["gold"];
        const undeadKnightExp = undeadKnight["experience"];
        
        enemyName = undeadKnight["name"];
        enemyHealth = undeadKnight["health"];
        enemyLevel = getRandomLevel(undeadKnight["minLevel"], undeadKnight["maxLevel"]);
        enemyHTrigger = undeadKnightHDamage["trigger_after_attacks"];
        let enemyAttack = 0;

        if (enemyAttack < enemyHTrigger) {
            enemyDamage = getDamage(undeadKnightNDamage["base"], undeadKnightNDamage["damage_per_level"], enemyLevel);
            enemyAttack++;
        } else {
            enemyDamage = getDamage(undeadKnightHDamage["damage"], undeadKnightNDamage["damage_per_level"], enemyLevel);
            enemyAttack = 0;
        }

        enemyGoldDrop = getGold(undeadKnightGold["base"], undeadKnightGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(undeadKnightExp["base"], undeadKnightExp["per_level"], enemyLevel);
    }
};

const attackReptile = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const reptile = mobList["dungeon"]["Reptile"];
        const reptileNDamage = reptile["normal_attack_damage"];
        const reptileHDamage = reptile["high_attack"];
        const reptileGold = reptile["gold"];
        const reptileExp = reptile["experience"];
        
        enemyName = reptile["name"];
        enemyHealth = reptile["health"];
        enemyLevel = getRandomLevel(reptile["minLevel"], reptile["maxLevel"]);
        enemyHTrigger = reptileHDamage["trigger_after_attacks"];
        let enemyAttack = 0;

        if (enemyAttack < enemyHTrigger) {
            enemyDamage = getDamage(reptileNDamage["base"], reptileNDamage["damage_per_level"], enemyLevel);
            enemyAttack++;
        } else {
            enemyDamage = getDamage(reptileHDamage["damage"], reptileNDamage["damage_per_level"], enemyLevel);
            enemyAttack = 0;
        }

        enemyGoldDrop = getGold(reptileGold["base"], reptileGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(reptileExp["base"], reptileExp["per_level"], enemyLevel);
    }
};

const attackDragon = async () => {
    goAttackScreen();
    const mobList = await loadMobs();
    if (mobList) {
        const dragon = mobList["dungeon"]["Dragon"];
        const dragonNDamage = dragon["normal_attack_damage"];
        const dragonHDamage = dragon["high_attack"];
        const dragonGold = dragon["gold"];
        const dragonExp = dragon["experience"];
        
        enemyName = dragon["name"];
        enemyHealth = dragon["health"];
        enemyLevel = getRandomLevel(dragon["minLevel"], dragon["maxLevel"]);
        enemyHTrigger = dragonHDamage["trigger_after_attacks"];
        let enemyAttack = 0;

        if (enemyAttack < enemyHTrigger) {
            enemyDamage = getDamage(dragonNDamage["base"], dragonNDamage["damage_per_level"], enemyLevel);
            enemyAttack++;
        } else {
            enemyDamage = getDamage(dragonHDamage["damage"], dragonNDamage["damage_per_level"], enemyLevel);
            enemyAttack = 0;
        }

        enemyGoldDrop = getGold(dragonGold["base"], dragonGold["per_level"], enemyLevel);
        enemyExpDrop = getExp(dragonExp["base"], dragonExp["per_level"], enemyLevel);
    }
};


//==============================================================================================================================================================


//==============================================================================================================================================================


// Action Functions in Attack Screen
let notDuringFight = true;
let halfEnemyHealth = 1;
const fight = async () => {
    if (enemyAttack < enemyHTrigger) {
        enemyAttack++;
        console.log("triggering normal damage " +enemyDamage);
        console.log(enemyAttack+" attack");
    } else {
        enemyDamage = enemyHDamage;
        enemyAttack = 0;
        console.log("triggering highattack damage " +enemyDamage);
        console.log(enemyAttack+" attack");
    }
    if(notDuringFight){
        halfEnemyHealth = enemyHealth/2;
        enemyDamage -= playerDefense;
        notDuringFight = false;
    }
    enemyHealth -= playerDamage;

    if(enemyHealth<=0){
        goWilderness();
        screenText.textContent = "You won and you found your way out, you got some gold and exp";
        playerGold += enemyGoldDrop;
        playerExp += enemyExpDrop;
        if(playerExp>=playerLevel*100){
            screenText.textContent = "You levelled up! maybe youre becoming worthy";
            playerLevel++;
            playerExp=0;
        }
        //update player gold, exp, level, health
        gold.textContent = playerGold;
        health.textContent = playerHealth;
        level.textContent = playerLevel;
        notDuringFight = true;
    } else{
        playerHealth -= enemyDamage;
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
    // Dodge logic
};

const usePotion = async () => {
    // Use potion logic
};

const run = async () => {
    // Run logic
};

//==============================================================================================================================================================


// Initialize the game with the town square
goTownSquare();
playerArmor = "No armor";
playerWeapon = "Stick";
weaponTxt.textContent = playerWeapon;
armorTxt.textContent = playerArmor;
