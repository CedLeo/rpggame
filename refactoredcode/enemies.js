
//refactored code

// const attackSlime = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const slime = mobList["forest"]["Slime"];
//         const slimeNDamage = slime["normal_attack_damage"];
//         const slimeHDamage = slime["high_attack"];
//         const slimeGold = slime["gold"];
//         const slimeExp = slime["experience"];
        
//         enemyName = slime["name"];
//         enemyHealth = slime["health"];
//         enemyLevel = getRandomLevel(slime["minLevel"], slime["maxLevel"]);
//         enemyHTrigger = slimeHDamage["trigger_after_attacks"];
//         enemyDamage = getDamage(slimeNDamage["base"], slimeNDamage["damage_per_level"], enemyLevel);
//         enemyHDamage = getDamage(slimeHDamage["damage"], slimeNDamage["damage_per_level"], enemyLevel)

//         enemyGoldDrop = getGold(slimeGold["base"], slimeGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(slimeExp["base"], slimeExp["per_level"], enemyLevel);
//     }
// };

// const attackGoblin = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const goblin = mobList["forest"]["Goblin"];
//         const goblinNDamage = goblin["normal_attack_damage"];
//         const goblinHDamage = goblin["high_attack"];
//         const goblinGold = goblin["gold"];
//         const goblinExp = goblin["experience"];
        
//         enemyName = goblin["name"];
//         enemyHealth = goblin["health"];
//         enemyLevel = getRandomLevel(goblin["minLevel"], goblin["maxLevel"]);
//         enemyHTrigger = goblinHDamage["trigger_after_attacks"];
//         let enemyAttack = 0;

//         if (enemyAttack < enemyHTrigger) {
//             enemyDamage = getDamage(goblinNDamage["base"], goblinNDamage["damage_per_level"], enemyLevel);
//             enemyAttack++;
//         } else {
//             enemyDamage = getDamage(goblinHDamage["damage"], goblinNDamage["damage_per_level"], enemyLevel);
//             enemyAttack = 0;
//         }

//         enemyGoldDrop = getGold(goblinGold["base"], goblinGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(goblinExp["base"], goblinExp["per_level"], enemyLevel);
//     }
// };

// const attackWolf = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const wolf = mobList["forest"]["Wolf"];
//         const wolfNDamage = wolf["normal_attack_damage"];
//         const wolfHDamage = wolf["high_attack"];
//         const wolfGold = wolf["gold"];
//         const wolfExp = wolf["experience"];
        
//         enemyName = wolf["name"];
//         enemyHealth = wolf["health"];
//         enemyLevel = getRandomLevel(wolf["minLevel"], wolf["maxLevel"]);
//         enemyHTrigger = wolfHDamage["trigger_after_attacks"];
//         let enemyAttack = 0;

//         if (enemyAttack < enemyHTrigger) {
//             enemyDamage = getDamage(wolfNDamage["base"], wolfNDamage["damage_per_level"], enemyLevel);
//             enemyAttack++;
//         } else {
//             enemyDamage = getDamage(wolfHDamage["damage"], wolfNDamage["damage_per_level"], enemyLevel);
//             enemyAttack = 0;
//         }

//         enemyGoldDrop = getGold(wolfGold["base"], wolfGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(wolfExp["base"], wolfExp["per_level"], enemyLevel);
//     }
// };

// const attackOrc = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const orc = mobList["cave"]["Orc"];
//         const orcNDamage = orc["normal_attack_damage"];
//         const orcHDamage = orc["high_attack"];
//         const orcGold = orc["gold"];
//         const orcExp = orc["experience"];
        
//         enemyName = orc["name"];
//         enemyHealth = orc["health"];
//         enemyLevel = getRandomLevel(orc["minLevel"], orc["maxLevel"]);
//         enemyHTrigger = orcHDamage["trigger_after_attacks"];
//         let enemyAttack = 0;

//         if (enemyAttack < enemyHTrigger) {
//             enemyDamage = getDamage(orcNDamage["base"], orcNDamage["damage_per_level"], enemyLevel);
//             enemyAttack++;
//         } else {
//             enemyDamage = getDamage(orcHDamage["damage"], orcNDamage["damage_per_level"], enemyLevel);
//             enemyAttack = 0;
//         }

//         enemyGoldDrop = getGold(orcGold["base"], orcGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(orcExp["base"], orcExp["per_level"], enemyLevel);
//     }
// };

// const attackSerpent = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const serpent = mobList["cave"]["Serpent"];
//         const serpentNDamage = serpent["normal_attack_damage"];
//         const serpentHDamage = serpent["high_attack"];
//         const serpentGold = serpent["gold"];
//         const serpentExp = serpent["experience"];
        
//         enemyName = serpent["name"];
//         enemyHealth = serpent["health"];
//         enemyLevel = getRandomLevel(serpent["minLevel"], serpent["maxLevel"]);
//         enemyHTrigger = serpentHDamage["trigger_after_attacks"];
//         let enemyAttack = 0;

//         if (enemyAttack < enemyHTrigger) {
//             enemyDamage = getDamage(serpentNDamage["base"], serpentNDamage["damage_per_level"], enemyLevel);
//             enemyAttack++;
//         } else {
//             enemyDamage = getDamage(serpentHDamage["damage"], serpentNDamage["damage_per_level"], enemyLevel);
//             enemyAttack = 0;
//         }

//         enemyGoldDrop = getGold(serpentGold["base"], serpentGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(serpentExp["base"], serpentExp["per_level"], enemyLevel);
//     }
// };

// const attackSpider = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const spider = mobList["cave"]["Giant Spider"];
//         const spiderNDamage = spider["normal_attack_damage"];
//         const spiderHDamage = spider["high_attack"];
//         const spiderGold = spider["gold"];
//         const spiderExp = spider["experience"];
        
//         enemyName = spider["name"];
//         enemyHealth = spider["health"];
//         enemyLevel = getRandomLevel(spider["minLevel"], spider["maxLevel"]);
//         enemyHTrigger = spiderHDamage["trigger_after_attacks"];
//         let enemyAttack = 0;

//         if (enemyAttack < enemyHTrigger) {
//             enemyDamage = getDamage(spiderNDamage["base"], spiderNDamage["damage_per_level"], enemyLevel);
//             enemyAttack++;
//         } else {
//             enemyDamage = getDamage(spiderHDamage["damage"], spiderNDamage["damage_per_level"], enemyLevel);
//             enemyAttack = 0;
//         }

//         enemyGoldDrop = getGold(spiderGold["base"], spiderGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(spiderExp["base"], spiderExp["per_level"], enemyLevel);
//     }
// };

// const attackUndeadKnight = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const undeadKnight = mobList["dungeon"]["Undead Knight"];
//         const undeadKnightNDamage = undeadKnight["normal_attack_damage"];
//         const undeadKnightHDamage = undeadKnight["high_attack"];
//         const undeadKnightGold = undeadKnight["gold"];
//         const undeadKnightExp = undeadKnight["experience"];
        
//         enemyName = undeadKnight["name"];
//         enemyHealth = undeadKnight["health"];
//         enemyLevel = getRandomLevel(undeadKnight["minLevel"], undeadKnight["maxLevel"]);
//         enemyHTrigger = undeadKnightHDamage["trigger_after_attacks"];
//         let enemyAttack = 0;

//         if (enemyAttack < enemyHTrigger) {
//             enemyDamage = getDamage(undeadKnightNDamage["base"], undeadKnightNDamage["damage_per_level"], enemyLevel);
//             enemyAttack++;
//         } else {
//             enemyDamage = getDamage(undeadKnightHDamage["damage"], undeadKnightNDamage["damage_per_level"], enemyLevel);
//             enemyAttack = 0;
//         }

//         enemyGoldDrop = getGold(undeadKnightGold["base"], undeadKnightGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(undeadKnightExp["base"], undeadKnightExp["per_level"], enemyLevel);
//     }
// };

// const attackReptile = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const reptile = mobList["dungeon"]["Reptile"];
//         const reptileNDamage = reptile["normal_attack_damage"];
//         const reptileHDamage = reptile["high_attack"];
//         const reptileGold = reptile["gold"];
//         const reptileExp = reptile["experience"];
        
//         enemyName = reptile["name"];
//         enemyHealth = reptile["health"];
//         enemyLevel = getRandomLevel(reptile["minLevel"], reptile["maxLevel"]);
//         enemyHTrigger = reptileHDamage["trigger_after_attacks"];
//         let enemyAttack = 0;

//         if (enemyAttack < enemyHTrigger) {
//             enemyDamage = getDamage(reptileNDamage["base"], reptileNDamage["damage_per_level"], enemyLevel);
//             enemyAttack++;
//         } else {
//             enemyDamage = getDamage(reptileHDamage["damage"], reptileNDamage["damage_per_level"], enemyLevel);
//             enemyAttack = 0;
//         }

//         enemyGoldDrop = getGold(reptileGold["base"], reptileGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(reptileExp["base"], reptileExp["per_level"], enemyLevel);
//     }
// };

// const attackDragon = async () => {
//     goAttackScreen();
//     const mobList = await loadMobs();
//     if (mobList) {
//         const dragon = mobList["dungeon"]["Dragon"];
//         const dragonNDamage = dragon["normal_attack_damage"];
//         const dragonHDamage = dragon["high_attack"];
//         const dragonGold = dragon["gold"];
//         const dragonExp = dragon["experience"];
        
//         enemyName = dragon["name"];
//         enemyHealth = dragon["health"];
//         enemyLevel = getRandomLevel(dragon["minLevel"], dragon["maxLevel"]);
//         enemyHTrigger = dragonHDamage["trigger_after_attacks"];
//         let enemyAttack = 0;

//         if (enemyAttack < enemyHTrigger) {
//             enemyDamage = getDamage(dragonNDamage["base"], dragonNDamage["damage_per_level"], enemyLevel);
//             enemyAttack++;
//         } else {
//             enemyDamage = getDamage(dragonHDamage["damage"], dragonNDamage["damage_per_level"], enemyLevel);
//             enemyAttack = 0;
//         }

//         enemyGoldDrop = getGold(dragonGold["base"], dragonGold["per_level"], enemyLevel);
//         enemyExpDrop = getExp(dragonExp["base"], dragonExp["per_level"], enemyLevel);
//     }
// };