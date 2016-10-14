/*eslint-disable no-console*/
//mock of products API
export function getProducts(prefix, resolve) {

  if (prefix.trim() === '') {
    return [];
  }

  console.warn('Mocked call for', prefix);
  const artificialDelay =
        Math.random() * 1500 + 100;

  const getMatchingItems = () => {
    const doesMatch = dat =>
          dat.name.toLowerCase().startsWith(prefix.toLowerCase());
    resolve(dataset.filter(doesMatch).slice(0, 10));
  };

  setTimeout(getMatchingItems, artificialDelay);
}

const dataset =
  [ {name:"Worn Shortsword",price:3}
   ,{name:"Bent Staff",price:4}
   ,{name:"Worn Mace",price:3}
   ,{name:"Worn Axe",price:3}
   ,{name:"Recruit's Shirt",price:1}
   ,{name:"Recruit's Pants",price:2}
   ,{name:"Recruit's Boots",price:1}
   ,{name:"Squire's Boots",price:1}
   ,{name:"Squire's Pants",price:2}
   ,{name:"Squire's Shirt",price:1}
   ,{name:"Footpad's Shoes",price:1}
   ,{name:"Footpad's Pants",price:2}
   ,{name:"Footpad's Shirt",price:1}
   ,{name:"Neophyte's Boots",price:2}
   ,{name:"Neophyte's Pants",price:2}
   ,{name:"Neophyte's Shirt",price:1}
   ,{name:"Apprentice's Boots",price:2}
   ,{name:"Apprentice's Robe",price:2}
   ,{name:"Acolyte's Robe",price:2}
   ,{name:"Acolyte's Shoes",price:2}
   ,{name:"Layered Tunic",price:17}
   ,{name:"Dwarven Leather Pants",price:7}
   ,{name:"Dwarven Cloth Britches",price:8}
   ,{name:"Soft Fur-Lined Shoes",price:12}
   ,{name:"Dirty Leather Vest",price:17}
   ,{name:"Tough Jerky",price:1}
   ,{name:"Minor Healing Potion",price:5}
   ,{name:"Thug Pants",price:2}
   ,{name:"Thug Boots",price:1}
   ,{name:"Trapper's Shirt",price:1}
   ,{name:"Rugged Trapper's Boots",price:2}
   ,{name:"Brawler's Pants",price:2}
   ,{name:"Brawler's Boots",price:1}
   ,{name:"Rugged Trapper's Pants",price:2}
   ,{name:"Rugged Trapper's Shirt",price:1}
   ,{name:"Primitive Kilt",price:2}
   ,{name:"Primitive Mantle",price:1}
   ,{name:"Refreshing Spring Water",price:1}
   ,{name:"Garrick's Head",price:1}
   ,{name:"Tattered Cloth Vest",price:17}
   ,{name:"Tattered Cloth Pants",price:17}
   ,{name:"Tattered Cloth Boots",price:13}
   ,{name:"Thick Cloth Vest",price:794}
   ,{name:"Thick Cloth Pants",price:797}
   ,{name:"Thick Cloth Shoes",price:599}
   ,{name:"Thick Cloth Gloves",price:404}
   ,{name:"Dirty Leather Pants",price:17}
   ,{name:"Dirty Leather Boots",price:12}
   ,{name:"Cured Leather Armor",price:782}
   ,{name:"Cured Leather Pants",price:785}
   ,{name:"Cured Leather Boots",price:590}
   ,{name:"Cured Leather Gloves",price:398}
   ,{name:"Scalemail Vest",price:829}
   ,{name:"Scalemail Pants",price:753}
   ,{name:"Scalemail Boots",price:566}
   ,{name:"Dalaran Sharp",price:6}
   ,{name:"Dwarven Mild",price:25}
   ,{name:"Destiny",price:70024}
   ,{name:"Bracers of the People's Militia",price:127}
   ,{name:"Tattered Cloth Gloves",price:9}
   ,{name:"Dirty Leather Gloves",price:9}
   ,{name:"Scalemail Gloves",price:378}
   ,{name:"Rabbit Handler Gloves",price:1}
   ,{name:"Brawler Gloves",price:1506}
   ,{name:"Goretusk Liver",price:15}
   ,{name:"Goretusk Liver Pie",price:25}
   ,{name:"Gnoll Paw",price:1}
   ,{name:"Notched Shortsword",price:244}
   ,{name:"Recipe: Westfall Stew",price:50}
   ,{name:"Westfall Stew",price:100}
   ,{name:"Rolf and Malakai's Medallions",price:1}
   ,{name:"Holy Spring Water",price:1}
   ,{name:"Sack of Barley",price:1}
   ,{name:"Sack of Corn",price:1}
   ,{name:"Sack of Rye",price:1}
   ,{name:"A Sycamore Branch",price:1}
   ,{name:"Bundle of Charred Oak",price:1}
   ,{name:"Thunderbrew's Boot Flask",price:10000}
   ,{name:"Marshal McBride's Documents",price:1}
   ,{name:"Stormwind Armor Marker",price:1}
   ,{name:"Tough Wolf Meat",price:1}
   ,{name:"Red Burlap Bandana",price:1}
   ,{name:"Dragonmaw Shortsword",price:3842}
   ,{name:"Shortsword of Vengeance",price:23556}
   ,{name:"Tunnel Pick",price:4963}
   ,{name:"Ice-Covered Bracers",price:82}
   ,{name:"Silverleaf",price:10}
   ,{name:"Flanged Mace",price:57}
   ,{name:"Long Bo Staff",price:101}
   ,{name:"Lumberjack Axe",price:113}
   ,{name:"Chunk of Boar Meat",price:3}
   ,{name:"Large Candle",price:1}
   ,{name:"Gold Dust",price:1}
   ,{name:"Malachite",price:50}
   ,{name:"Vendetta",price:8441}
   ,{name:"Kobold Excavation Pick",price:55}
   ,{name:"Torn Murloc Fin",price:1}
   ,{name:"Stone Gnoll Hammer",price:110}
   ,{name:"Painted Gnoll Armband",price:1}
   ,{name:"Light Hide",price:50}
   ,{name:"Mageroyal",price:20}
   ,{name:"Slitherskin Mackerel",price:1}
   ,{name:"Stout Battlehammer",price:1969}
   ,{name:"Forester's Axe",price:2020}
   ,{name:"Gnarled Ash Staff",price:7069}
   ,{name:"Knitted Sandals",price:72}
   ,{name:"Knitted Gloves",price:49}
   ,{name:"Knitted Pants",price:98}
   ,{name:"Knitted Tunic",price:98}
   ,{name:"Rough Leather Boots",price:73}
   ,{name:"Rough Leather Gloves",price:49}
   ,{name:"Rough Leather Pants",price:99}
   ,{name:"Rough Leather Vest",price:99}
   ,{name:"Large Blue Sack",price:2500}
   ,{name:"Small Red Pouch",price:250}
   ,{name:"Bloodrazor",price:39125}
   ,{name:"Hammer of the Northern Wind",price:45267}
   ,{name:"Axe of the Deep Woods",price:54124}
   ,{name:"Glowing Brightwood Staff",price:57018}
   ,{name:"Flask of Oil",price:25}
   ,{name:"Small Hand Blade",price:305}
   ,{name:"Tigerseye",price:100}
   ,{name:"Slicer Blade",price:947}
   ,{name:"Riverpaw Leather Vest",price:349}
   ,{name:"Brutish Riverpaw Axe",price:732}
   ,{name:"Wicked Blackjack",price:971}
   ,{name:"Small Blue Pouch",price:250}
   ,{name:"Red Leather Bandana",price:1}
   ,{name:"Silver Defias Belt",price:238}
   ,{name:"Lifestone",price:28000}
   ,{name:"Large Rope Net",price:23}
   ,{name:"Heavy Weave Armor",price:393}
   ,{name:"Heavy Weave Pants",price:395}
   ,{name:"Heavy Weave Gloves",price:199}
   ,{name:"Heavy Weave Shoes",price:298}
   ,{name:"Furlbrow's Pocket Watch",price:1}
   ,{name:"Tanned Leather Boots",price:301}
   ,{name:"Tanned Leather Gloves",price:203}
   ,{name:"Tanned Leather Pants",price:405}
   ,{name:"Tanned Leather Jerkin",price:406}
   ,{name:"Chainmail Armor",price:408}
   ,{name:"Chainmail Pants",price:409}
   ,{name:"Chainmail Boots",price:307}
   ,{name:"Chainmail Gloves",price:207}
   ,{name:"Cutlass",price:404}
   ,{name:"Mace",price:347}
   ,{name:"Hatchet",price:481}
   ,{name:"Quarter Staff",price:604}
   ,{name:"Blue Leather Bag",price:875}
   ,{name:"Large Red Sack",price:2500}
   ,{name:"Lesser Healing Potion",price:25}
   ,{name:"Fine Cloth Shirt",price:87}
   ,{name:"Cavalier's Boots",price:156}
   ,{name:"Runed Ring",price:38222}
   ,{name:"Gloom Reaper",price:8964}
   ,{name:"Knightly Longsword",price:9716}
   ,{name:"Leaden Mace",price:5096}
   ,{name:"Monk's Staff",price:16640}
   ,{name:"Gloves of Holy Might",price:7524}
   ,{name:"Ardent Custodian",price:21532}
   ,{name:"Dazzling Longsword",price:18529}
   ,{name:"Fiery War Axe",price:21527}
   ,{name:"Flurry Axe",price:29627}
   ,{name:"Rockslicer",price:2099}
   ,{name:"Staff of Jordan",price:21770}
   ,{name:"Worn Wooden Buckler",price:2}
   ,{name:"Staff of Horrors",price:2692}
   ,{name:"Ghoul Rib",price:1}
   ,{name:"Black Metal Axe",price:2301}
   ,{name:"Black Metal Shortsword",price:2949}
   ,{name:"Naga Battle Gloves",price:1110}
   ,{name:"A Dusty Unsent Letter",price:1}
   ,{name:"Twisted Chanter's Staff",price:3517}
   ,{name:"Gnoll Casting Gloves",price:651}
   ,{name:"Worgen Skull",price:1}
   ,{name:"Worgen Fang",price:1}
   ,{name:"Madwolf Bracers",price:1439}
   ,{name:"Venom Web Fang",price:1248}
   ,{name:"An Undelivered Letter",price:1}
   ,{name:"Ironwood Treebranch",price:3324}
   ,{name:"Huge Ogre Sword",price:5037}
   ,{name:"Large Ogre Chain Armor",price:3114}
   ,{name:"Red Silk Bandana",price:1}
   ,{name:"A Torn Journal Page",price:1}
   ,{name:"Deviate Hide Pack",price:1250}
   ,{name:"Wicked Spiked Mace",price:2821}
   ,{name:"A Faded Journal Page",price:1}
   ,{name:"Dacian Falx",price:2407}
   ,{name:"Longsword",price:1748}
   ,{name:"Maul",price:2194}
   ,{name:"Flail",price:1559}
   ,{name:"Battle Axe",price:1957}
   ,{name:"Double Axe",price:1390}
   ,{name:"Long Staff",price:1972}
   ,{name:"Healing Potion",price:75}
   ,{name:"Fel Steed Saddlebags",price:637}
   ,{name:"Large Rucksack",price:2500}
   ,{name:"Stalvan's Reaper",price:10682}
   ,{name:"Night Watch Shortsword",price:1742}
   ,{name:"Midnight Mace",price:11621}
   ,{name:"Black Duskwood Staff",price:14577}
   ,{name:"Muddy Journal Pages",price:1}
   ,{name:"A Bloodstained Journal Page",price:1}
   ,{name:"Robes of Insight",price:21990}
   ,{name:"Freezing Band",price:4500}
   ,{name:"Warden Staff",price:42863}
   ,{name:"Elemental Mage Staff",price:80153}
   ,{name:"Scroll of Strength",price:50}
   ,{name:"Scroll of Intellect",price:37}
   ,{name:"William's Shipment",price:1}
   ,{name:"Healing Herb",price:2}
   ,{name:"Pork Belly Pie",price:1}
   ,{name:"Bernice's Necklace",price:1}
   ,{name:"Red Linen Sash",price:83}
   ,{name:"Brass Collar",price:1}
   ,{name:"Well-Used Sword",price:144}
   ,{name:"Compact Hammer",price:490}
   ,{name:"Gnarled Short Staff",price:71}
   ,{name:"Sharp Axe",price:57}
   ,{name:"Iron Rivet",price:1}
   ,{name:"Lean Wolf Flank",price:24}
   ,{name:"Seasoned Wolf Kabob",price:100}
   ,{name:"Linen Scrap",price:1}
   ,{name:"Shadowhide Pendant",price:1}
   ,{name:"Defias Renegade Ring",price:650}
   ,{name:"Defias Mage Ring",price:25}
   ,{name:"Tough Condor Meat",price:78}
   ,{name:"Redridge Goulash",price:150}
   ,{name:"Glyph of Azora",price:1}
   ,{name:"Conjured Bread",price:1}
   ,{name:"Conjured Rye",price:1}
   ,{name:"Ring of Pure Silver",price:1250}
   ,{name:"Feet of the Lynx",price:1502}
   ,{name:"Flash Bundle",price:25}
   ,{name:"Ghoul Fang",price:1}
   ,{name:"Vial of Spider Venom",price:1}
   ,{name:"Totem of Infliction",price:1559}
   ,{name:"Horn of the Timber Wolf",price:2500}
   ,{name:"Belt of the People's Militia",price:120}
   ,{name:"Rod of the Sleepwalker",price:3958}
   ,{name:"Lavishly Jeweled Ring",price:812}
   ,{name:"Solid Metal Club",price:244}
   ,{name:"Militia Quarterstaff",price:21}
   ,{name:"Militia Shortsword",price:17}
   ,{name:"Skullflame Shield",price:42296}
   ,{name:"Blackskull Shield",price:18815}
   ,{name:"Well-Stitched Robe",price:162}
   ,{name:"Grayson's Torch",price:968}
   ,{name:"Weather-Worn Boots",price:73}
   ,{name:"Oil of Olaf",price:3}
   ,{name:"Explosive Rocket",price:7}
   ,{name:"Ice Cold Milk",price:6}
   ,{name:"Scroll of Stamina",price:37}
   ,{name:"Scroll of Spirit",price:25}
   ,{name:"Brass-Studded Bracers",price:52}
   ,{name:"Elastic Wristguards",price:87}
   ,{name:"Spiked Collar",price:1081}
   ,{name:"Overseer's Ring",price:625}
   ,{name:"Overseer's Cloak",price:730}
   ,{name:"Bag of Marbles",price:82}
   ,{name:"Bastard Sword",price:21}
   ,{name:"Kobold Mining Shovel",price:47}
   ,{name:"Tabar",price:442}
   ,{name:"Giant Mace",price:533}
   ,{name:"Claymore",price:535}
   ,{name:"Large Wooden Shield",price:16}
   ,{name:"Dull Heater Shield",price:94}
   ,{name:"Wall Shield",price:367}
   ,{name:"Aegis of Stormwind",price:23505}
   ,{name:"The Green Tower",price:12577}
   ,{name:"Melon Juice",price:25}
   ,{name:"Moss Agate",price:400}
   ,{name:"Murphstar",price:9892}
   ,{name:"Maybell's Love Letter",price:1}
   ,{name:"Shadowgem",price:250}
   ,{name:"Gnoll War Harness",price:487}
   ,{name:"Gnoll Kindred Bracers",price:123}
   ,{name:"Gnoll Punisher",price:930}
   ,{name:"Support Girdle",price:661}
   ,{name:"Frost Bracers",price:2108}
   ,{name:"Heavy Gnoll War Club",price:2064}
   ,{name:"Redridge Machete",price:823}
   ,{name:"Lupine Axe",price:1808}
   ,{name:"Underbelly Whelp Scale",price:1}
   ,{name:"Linen Bandage",price:8}
   ,{name:"Gramma Stonefield's Note",price:1}
   ,{name:"Crystal Kelp Frond",price:1}
   ,{name:"Invisibility Liquor",price:1}
   ,{name:"Tharil'zun's Head",price:1}
   ,{name:"Midnight Orb",price:1}
   ,{name:"Keg of Thunderbrew Lager",price:111}
   ,{name:"Brain Hacker",price:79065}
   ,{name:"Headbasher",price:3671}
   ,{name:"Scorpion Sting",price:11775}
   ,{name:"Finely Woven Cloak",price:372}
   ,{name:"Forest Chain",price:1932}
   ,{name:"Deputy Chain Coat",price:1946}
   ,{name:"Fire Hardened Buckler",price:2220}
   ,{name:"Cloaked Hood",price:5165}
   ,{name:"Sparkmetal Coif",price:3289}
   ,{name:"Verner's Note",price:1}
   ,{name:"Crate of Horseshoes",price:1}
   ,{name:"Giant Tarantula Fang",price:703}
   ,{name:"Large Venom Sac",price:185}
   ,{name:"Butcher's Cleaver",price:1989}
   ,{name:"The State of Lakeshire",price:1}
   ,{name:"The General's Response",price:1}
   ,{name:"Blackrock Mace",price:1681}
   ,{name:"Robes of the Shadowcaster",price:3567}
   ,{name:"Lesser Belt of the Spire",price:688}
   ,{name:"Lesser Staff of the Spire",price:1854}
   ,{name:"Black Whelp Gloves",price:369}
   ,{name:"Bridgeworker's Gloves",price:490}
   ,{name:"Riding Gloves",price:492}
   ,{name:"Wolfmane Wristguards",price:496}
   ,{name:"Gold Pickup Schedule",price:1}
   ,{name:"Oslow's Toolbox",price:1}
   ,{name:"Smith's Trousers",price:1001}
   ,{name:"Ghoul Fingers",price:511}
   ,{name:"Lei of Lilies",price:13000}
   ,{name:"Hardened Root Staff",price:3500}
   ,{name:"Night Reaver",price:3066}
   ,{name:"Ring of Iron Will",price:462}
   ,{name:"Fishliver Oil",price:68}
   ,{name:"Daffodil Bouquet",price:1}
   ,{name:"Sauteed Sunfish",price:10}
   ,{name:"Wiley's Note",price:1}
   ,{name:"Abercrombie's Crate",price:1}
   ,{name:"Fingerbone Bracers",price:1353}
   ,{name:"Shaw's Report",price:1}
   ,{name:"Buckskin Cape",price:352}
   ,{name:"Commendation - Elwynn Forest",price:1}
   ,{name:"Captain Sanders' Treasure Map",price:1}
   ,{name:"A Clue to Sanders' Treasure",price:1}
   ,{name:"Lion-Stamped Gloves",price:27}
   ,{name:"Stormwind Chain Gloves",price:82}
   ,{name:"Another Clue to Sanders' Treasure",price:1}
   ,{name:"Final Clue to Sanders' Treasure",price:1}
   ,{name:"A Mysterious Message",price:1}
   ,{name:"Rock Mace",price:24}
   ,{name:"Stone Tomahawk",price:25}
   ,{name:"Dull Blade",price:11}
   ,{name:"Thistlewood Axe",price:32}
   ,{name:"Ghoulfang",price:1578}
   ,{name:"Crooked Staff",price:14}
   ,{name:"Kobold Mining Mallet",price:58}
   ,{name:"Riverpaw Mystic Staff",price:1392}
   ,{name:"Driftwood Club",price:740}
   ,{name:"Apprentice's Pants",price:2}
   ,{name:"Acolyte's Pants",price:2}
   ,{name:"Magic Candle",price:12}
   ,{name:"Riverpaw Tea Leaf",price:14}
   ,{name:"Tidal Charm",price:10306}
   ,{name:"Foamspittle Staff",price:1184}
   ,{name:"Pearl-Encrusted Spear",price:2079}
   ,{name:"Solomon's Plea to Westfall",price:1}
   ,{name:"Stoutmantle's Response to Solomon",price:1}
   ,{name:"Solomon's Plea to Darkshire",price:1}
   ,{name:"Ebonlocke's Response to Solomon",price:1}
   ,{name:"Glowing Wax Stick",price:43}
   ,{name:"Frontier Britches",price:641}
   ,{name:"Warrior's Shield",price:70}
   ,{name:"Gnoll Skull Basher",price:1230}
   ,{name:"Jeweled Amulet of Cainwyn",price:21125}
   ,{name:"Blackrock Pauldrons",price:677}
   ,{name:"Blackrock Boots",price:659}
   ,{name:"Ring of Saviors",price:22775}
   ,{name:"Blackrock Gauntlets",price:476}
   ,{name:"Minor Channeling Ring",price:1875}
   ,{name:"Bottle of Zombie Juice",price:1}
   ,{name:"Spectral Comb",price:1}
   ,{name:"Axe of the Enforcer",price:3168}
   ,{name:"Blackrock Champion's Axe",price:2931}
   ,{name:"Shadowhide Mace",price:1850}
   ,{name:"Shadowhide Maul",price:2623}
   ,{name:"Shadowhide Scalper",price:2380}
   ,{name:"Shadowhide Two-Handed Sword",price:1768}
   ,{name:"Slayer's Battle Axe",price:3387}
   ,{name:"Ring of the Shadow",price:1306}
   ,{name:"Tigerbane",price:9825}
   ,{name:"Spotted Sunfish",price:1}
   ,{name:"Murloc Fin",price:28}
   ,{name:"Scimitar of Atun",price:1180}
   ,{name:"Murloc Skin Bag",price:875}
   ,{name:"Riverside Staff",price:1497}
   ,{name:"Small Venom Sac",price:82}
   ,{name:"Scroll of Agility II",price:87}
   ,{name:"Scroll of Protection II",price:62}
   ,{name:"Salma's Oven Mitts",price:84}
   ,{name:"Fist of the People's Militia",price:954}
   ,{name:"Grimclaw",price:3337}
   ,{name:"Shadowfang",price:2964}
   ,{name:"Face Smasher",price:2025}
   ,{name:"Witching Stave",price:2541}
   ,{name:"Tree Bark Jacket",price:2377}
   ,{name:"Conjured Pumpernickel",price:1}
   ,{name:"Avenger's Armor",price:5773}
   ,{name:"Gloomshroud Armor",price:1310}
   ,{name:"Guardian Talisman",price:8910}
   ,{name:"Ring of Precision",price:2207}
   ,{name:"Heavy Marauder Scimitar",price:3922}
   ,{name:"Ghost Hair Comb",price:1}
   ,{name:"Bloodscalp Ear",price:1}
   ,{name:"Lumbering Ogre Axe",price:19205}
   ,{name:"Headhunting Spear",price:10224}
   ,{name:"Huge Stone Club",price:10261}
   ,{name:"Skullsplitter Tusk",price:1}
   ,{name:"Handful of Oats",price:1}
   ,{name:"Jade",price:700}
   ,{name:"Shrunken Head",price:1}
   ,{name:"Old Blanchy's Feed Pouch",price:62}
   ,{name:"Gnarled Hermit's Staff",price:1572}
   ,{name:"Shield of the Faith",price:2795}
   ,{name:"Buckler of the Seas",price:919}
   ,{name:"Bluegill Sandals",price:897}
   ,{name:"Harvester's Robe",price:470}
   ,{name:"Edge of the People's Militia",price:1132}
   ,{name:"Ghost Hair Thread",price:1}
   ,{name:"Rot Blossom",price:1}
   ,{name:"Sickle Axe",price:11685}
   ,{name:"Chromatic Sword",price:19464}
   ,{name:"Soulkeeper",price:43420}
   ,{name:"Skullcrusher Mace",price:18940}
   ,{name:"Spiritchaser Staff",price:19140}
   ,{name:"Skullsplitter Helm",price:7187}
   ,{name:"Exquisite Flamberge",price:14754}
   ,{name:"Letter to Ello",price:1}
   ,{name:"Grinning Axe",price:28460}
   ,{name:"Monstrous War Axe",price:15637}
   ,{name:"Moonberry Juice",price:100}
   ,{name:"Sturdy Lunchbox",price:5000}
   ,{name:"Translated Letter",price:1}
   ,{name:"Engineering Gloves",price:3760}
   ,{name:"Spellforce Rod",price:14695}
   ,{name:"Drake-Scale Vest",price:11775}
   ,{name:"Black Ogre Kickers",price:5311}
   ,{name:"Korg Bat",price:9635}
   ,{name:"Headchopper",price:18234}
   ,{name:"Troll-Hide Bag",price:6250}
   ,{name:"Crystal Basilisk Spine",price:81}
   ,{name:"Lesser Moonstone",price:600}
   ,{name:"Stormwind Brie",price:62}
   ,{name:"Sweet Nectar",price:50}
   ,{name:"Greater Healing Potion",price:125}
   ,{name:"Scroll of Stamina II",price:75}
   ,{name:"Scroll of Spirit II",price:62}
   ,{name:"Ankh of Life",price:5350}
   ,{name:"Necklace of Calisea",price:2535}
   ,{name:"Polished Jazeraint Armor",price:12019}
   ,{name:"Robe of the Magi",price:8867}
   ,{name:"Double Link Tunic",price:3626}
   ,{name:"Basilisk Hide Pants",price:11257}
   ,{name:"Tanglewood Staff",price:26209}
   ,{name:"Viking Warhammer",price:35815}
   ,{name:"Thornstone Sledgehammer",price:19407}
   ,{name:"Large Knapsack",price:5000}
   ,{name:"Poison-Tipped Bone Spear",price:12183}
   ,{name:"Sword of Decay",price:8891}
   ,{name:"Teebu's Blazing Longsword",price:72936}
   ,{name:"Gunnysack of the Night Watch",price:500}
   ,{name:"Lucky Trousers",price:634}
   ,{name:"Dirty Leather Belt",price:9}
   ,{name:"Dirty Leather Bracers",price:9}
   ,{name:"Rough Leather Belt",price:52}
   ,{name:"Rough Leather Bracers",price:52}
   ,{name:"Tanned Leather Belt",price:204}
   ,{name:"Tanned Leather Bracers",price:205}
   ,{name:"Chainmail Belt",price:206}
   ,{name:"Chainmail Bracers",price:206}
   ,{name:"Cured Leather Belt",price:390}
   ,{name:"Cured Leather Bracers",price:392}
   ,{name:"Scalemail Bracers",price:395}
   ,{name:"Scalemail Belt",price:396}
   ,{name:"Thistlenettle's Badge",price:1}
   ,{name:"Miner's Revenge",price:2130}
   ,{name:"Miners' Union Card",price:1}
   ,{name:"Studded Blackjack",price:148}
   ,{name:"Jeweled Dagger",price:251}
   ,{name:"Supplies for Sven",price:1}
   ,{name:"Ambassador's Satchel",price:1}
   ,{name:"Defias Rapier",price:1653}
   ,{name:"Weighted Sap",price:1660}
   ,{name:"Deadmines Cleaver",price:1666}
   ,{name:"Defias Mage Staff",price:2090}
   ,{name:"Silk-Threaded Trousers",price:2302}
   ,{name:"Stonemason Cloak",price:906}
   ,{name:"Huge Gnoll Claw",price:1}
   ,{name:"Staff of Conjuring",price:2186}
   ,{name:"Hogger's Trousers",price:2344}
   ,{name:"Assassin's Blade",price:2025}
   ,{name:"Goblin Screwdriver",price:1768}
   ,{name:"Buzz Saw",price:1774}
   ,{name:"Block Mallet",price:1962}
   ,{name:"Skin of Sweet Rum",price:168}
   ,{name:"Cask of Merlot",price:203}
   ,{name:"Bottle of Moonshine",price:316}
   ,{name:"Goblin Mail Leggings",price:1148}
   ,{name:"Metalworking Gloves",price:579}
   ,{name:"Woodworking Gloves",price:598}
   ,{name:"Mary's Looking Glass",price:1}
   ,{name:"Blackwater Cutlass",price:1736}
   ,{name:"Dragonmaw Chain Boots",price:1824}
   ,{name:"Faded Shadowhide Pendant",price:1}
   ,{name:"Petrified Shinbone",price:1780}
   ,{name:"Cold Iron Pick",price:4261}
   ,{name:"White Wolf Gloves",price:50}
   ,{name:"Ogre's Monocle",price:1}
   ,{name:"Restoring Balm",price:120}
   ,{name:"Furlbrow's Deed",price:1}
   ,{name:"Westfall Deed",price:1}
   ,{name:"Orb of Deception",price:1}
   ,{name:"Mindthrust Bracers",price:710}
   ,{name:"Pysan's Old Greatsword",price:11193}
   ,{name:"Slaghammer",price:11233}
   ,{name:"Wolfclaw Gloves",price:2961}
   ,{name:"Wall of the Dead",price:23273}
   ,{name:"Underworld Band",price:6200}
   ,{name:"Icemail Jerkin",price:16465}
   ,{name:"Nightblade",price:29513}
   ,{name:"Gutrender",price:14861}
   ,{name:"Krazek's Fixed Pot",price:1}
   ,{name:"Chief Brigadier Gauntlets",price:3346}
   ,{name:"Ballast Maul",price:10077}
   ,{name:"Goblin Power Shovel",price:8357}
   ,{name:"Swampchill Fetish",price:5468}
   ,{name:"Ogremind Ring",price:2100}
   ,{name:"Ebonclaw Reaver",price:16696}
   ,{name:"Voodoo Band",price:1720}
   ,{name:"Pressed Felt Robe",price:4443}
   ,{name:"Bloodscalp Channeling Staff",price:7240}
   ,{name:"Archeus",price:8827}
   ,{name:"Grelin Whitebeard's Journal",price:1}
   ,{name:"The First Troll Legend",price:1}
   ,{name:"The Second Troll Legend",price:1}
   ,{name:"The Third Troll Legend",price:1}
   ,{name:"The Fourth Troll Legend",price:1}
   ,{name:"Twisted Sabre",price:3840}
   ,{name:"Cryptbone Staff",price:3644}
   ,{name:"Black Metal Greatsword",price:4869}
   ,{name:"Black Metal War Axe",price:4443}
   ,{name:"Dusty Chain Armor",price:2064}
   ,{name:"Glowing Leather Bracers",price:1260}
   ,{name:"Skeletal Longsword",price:3269}
   ,{name:"Hollowfang Blade",price:1050}
   ,{name:"Green Carapace Shield",price:1025}
   ,{name:"Espadon",price:1215}
   ,{name:"Bearded Axe",price:1061}
   ,{name:"Rock Hammer",price:1257}
   ,{name:"Scimitar",price:763}
   ,{name:"Hammer",price:1013}
   ,{name:"Cleaver",price:884}
   ,{name:"Gnarled Staff",price:1109}
   ,{name:"Gallan Cuffs",price:2931}
   ,{name:"Ambassador's Boots",price:1351}
   ,{name:"Scholarly Robes",price:1812}
   ,{name:"Sword of the Night Sky",price:2300}
   ,{name:"Dusty Mining Gloves",price:577}
   ,{name:"Tunneler's Boots",price:863}
   ,{name:"Plains Ring",price:750}
   ,{name:"Troll Protector",price:16367}
   ,{name:"Tunic of Westfall",price:1977}
   ,{name:"Staff of Westfall",price:3639}
   ,{name:"Ring of Forlorn Spirits",price:1500}
   ,{name:"Crescent of Forlorn Spirits",price:8829}
   ,{name:"Bluegill Kukri",price:2461}
   ,{name:"Anvilmar Hand Axe",price:17}
   ,{name:"Anvilmar Hammer",price:17}
   ,{name:"Trogg Hand Axe",price:16}
   ,{name:"Small Wooden Hammer",price:16}
   ,{name:"Pitted Defias Shortsword",price:16}
   ,{name:"Kazon's Maul",price:4197}
   ,{name:"Sentry Cloak",price:1508}
   ,{name:"Trogg Club",price:191}
   ,{name:"Rockjaw Blade",price:113}
   ,{name:"Skull Hatchet",price:81}
   ,{name:"Frostbit Staff",price:186}
   ,{name:"Black Bear Hide Vest",price:170}
   ,{name:"Darnassian Bleu",price:1}
   ,{name:"Dwarven Magestaff",price:4414}
   ,{name:"Dwarven Hatchet",price:742}
   ,{name:"Solid Shortblade",price:1054}
   ,{name:"Heavy Mace",price:386}
   ,{name:"Magician Staff",price:5059}
   ,{name:"Northern Shortsword",price:1070}
   ,{name:"Sergeant's Warhammer",price:934}
   ,{name:"Hillborne Axe",price:6590}
   ,{name:"Wizbang's Gunnysack",price:250}
   ,{name:"Darksteel Bastard Sword",price:5709}
   ,{name:"Hard Crawler Carapace",price:353}
   ,{name:"Long Crawler Limb",price:729}
   ,{name:"Scrimshaw Dagger",price:1113}
   ,{name:"Sleep",price:213}
   ,{name:"Worn Dagger",price:3}
   ,{name:"Double-Barreled Shotgun",price:3021}
   ,{name:"Flaming Cannonball",price:45040}
   ,{name:"Precisely Calibrated Boomstick",price:24540}
   ,{name:"Light Quiver",price:1}
   ,{name:"Small Ammo Pouch",price:1}
   ,{name:"Thug Shirt",price:1}
   ,{name:"Frostmane Leather Vest",price:11}
   ,{name:"Frostmane Chain Vest",price:17}
   ,{name:"Light Magesmith Robe",price:11}
   ,{name:"Lumberjack Jerkin",price:76}
   ,{name:"Calor's Note",price:1}
   ,{name:"Snowy Robe",price:54}
   ,{name:"Thin Cloth Shoes",price:13}
   ,{name:"Thin Cloth Gloves",price:8}
   ,{name:"Thin Cloth Pants",price:17}
   ,{name:"Thin Cloth Armor",price:17}
   ,{name:"Cracked Leather Belt",price:9}
   ,{name:"Cracked Leather Boots",price:13}
   ,{name:"Cracked Leather Bracers",price:9}
   ,{name:"Cracked Leather Gloves",price:9}
   ,{name:"Cracked Leather Pants",price:16}
   ,{name:"Cracked Leather Vest",price:17}
   ,{name:"Large Round Shield",price:15}
   ,{name:"Club",price:10}
   ,{name:"Shortsword",price:10}
   ,{name:"Short Staff",price:20}
   ,{name:"Hand Axe",price:16}
   ,{name:"Conjured Purified Water",price:1}
   ,{name:"Whittling Knife",price:25}
   ,{name:"Dirk",price:11}
   ,{name:"Carving Knife",price:323}
   ,{name:"Cuirboulli Vest",price:1462}
   ,{name:"Cuirboulli Belt",price:738}
   ,{name:"Cuirboulli Boots",price:1102}
   ,{name:"Cuirboulli Bracers",price:743}
   ,{name:"Cuirboulli Gloves",price:745}
   ,{name:"Cuirboulli Pants",price:1346}
   ,{name:"Polished Scale Belt",price:682}
   ,{name:"Polished Scale Boots",price:1019}
   ,{name:"Polished Scale Bracers",price:687}
   ,{name:"Polished Scale Gloves",price:690}
   ,{name:"Polished Scale Leggings",price:1378}
   ,{name:"Polished Scale Vest",price:1383}
   ,{name:"Padded Boots",price:1075}
   ,{name:"Padded Gloves",price:727}
   ,{name:"Padded Pants",price:1452}
   ,{name:"Padded Armor",price:1457}
   ,{name:"Book from Sven's Farm",price:1}
   ,{name:"Sarah's Ring",price:1}
   ,{name:"Shadowblade",price:46710}
   ,{name:"Wound",price:27032}
   ,{name:"Old Blanchy's Blanket",price:79}
   ,{name:"Foreman's Leggings",price:1135}
   ,{name:"Foreman's Gloves",price:573}
   ,{name:"Corpse Rompers",price:1634}
   ,{name:"Buzzer Blade",price:1641}
   ,{name:"Rustic Belt",price:1}
   ,{name:"Old Leather Belt",price:8}
   ,{name:"Shadowhide Battle Axe",price:2683}
   ,{name:"Outfitter Belt",price:8}
   ,{name:"A Stack of Letters",price:1}
   ,{name:"A Letter to Grelin Whitebeard",price:1}
   ,{name:"Diamond Hammer",price:3276}
   ,{name:"Anvilmar Knife",price:17}
   ,{name:"Brashclaw's Chopper",price:1492}
   ,{name:"Brashclaw's Skewer",price:1133}
   ,{name:"Duskbringer",price:2387}
   ,{name:"Jambiya",price:478}
   ,{name:"Poniard",price:730}
   ,{name:"Kris",price:1423}
   ,{name:"Craftsman's Dagger",price:501}
   ,{name:"The Collector's Schedule",price:1}
   ,{name:"Militia Dagger",price:16}
   ,{name:"Sharp Kitchen Knife",price:183}
   ,{name:"Ogremage Staff",price:4117}
   ,{name:"Heavy Ogre War Axe",price:4133}
   ,{name:"Gloves of Brawn",price:838}
   ,{name:"Inferno Robe",price:7676}
   ,{name:"Dark Runner Boots",price:1419}
   ,{name:"Shadow Weaver Leggings",price:2366}
   ,{name:"Nightwalker Armor",price:3162}
   ,{name:"Brackclaw",price:1281}
   ,{name:"Blackfang",price:3386}
   ,{name:"Patched Pants",price:176}
   ,{name:"Urchin's Pants",price:177}
   ,{name:"The Collector's Ring",price:1}
   ,{name:"Rugged Cape",price:212}
   ,{name:"Desperado Cape",price:714}
   ,{name:"Hand of Edward the Odd",price:65783}
   ,{name:"Krol Blade",price:51858}
   ,{name:"Helm of Narv",price:32181}
   ,{name:"Myrmidon's Signet",price:30000}
   ,{name:"Militia Buckler",price:152}
   ,{name:"Dusky Crab Cakes",price:1}
   ,{name:"Gooey Spider Leg",price:12}
   ,{name:"Miscellaneous Goblin Supplies",price:1}
   ,{name:"Icepane Warhammer",price:506}
   ,{name:"Shadow Bolt",price:2996}
   ,{name:"Frostmane Staff",price:189}
   ,{name:"Frostmane Shortsword",price:83}
   ,{name:"Frostmane Club",price:75}
   ,{name:"Frostmane Hand Axe",price:106}
   ,{name:"Mark of Kern",price:8746}
   ,{name:"Phytoblade",price:2619}
   ,{name:"Mantle of Thieves",price:4406}
   ,{name:"Stonesplinter Axe",price:477}
   ,{name:"Stonesplinter Dagger",price:479}
   ,{name:"Stonesplinter Mace",price:711}
   ,{name:"Stonesplinter Blade",price:146}
   ,{name:"Staff of the Blessed Seer",price:4157}
   ,{name:"Guerrilla Armor",price:509}
   ,{name:"Sapper's Gloves",price:339}
   ,{name:"Swampwalker Boots",price:5719}
   ,{name:"Necromancer Leggings",price:6336}
   ,{name:"Forest Tracker Epaulets",price:3251}
   ,{name:"Kam's Walking Stick",price:4828}
   ,{name:"Rodentia Flint Axe",price:301}
   ,{name:"Rodentia Shortsword",price:139}
   ,{name:"Rat Cloth Belt",price:246}
   ,{name:"Rat Cloth Cloak",price:368}
   ,{name:"Food",price:6}
   ,{name:"Drink",price:1}
   ,{name:"Strength",price:87}
   ,{name:"Intellect",price:75}
   ,{name:"Rend",price:44579}
   ,{name:"Necrology Robes",price:1407}
   ,{name:"Burning War Axe",price:8757}
   ,{name:"Embossed Leather Vest",price:269}
   ,{name:"Handstitched Leather Boots",price:41}
   ,{name:"Handstitched Leather Pants",price:100}
   ,{name:"Light Armor Kit",price:15}
   ,{name:"Fine Leather Boots",price:566}
   ,{name:"Fine Leather Cloak",price:374}
   ,{name:"Embossed Leather Boots",price:375}
   ,{name:"Embossed Leather Cloak",price:261}
   ,{name:"White Leather Jerkin",price:350}
   ,{name:"Fine Leather Gloves",price:255}
   ,{name:"Armor +16",price:200}
   ,{name:"Toughened Leather Armor",price:2082}
   ,{name:"Dark Leather Boots",price:717}
   ,{name:"Dark Leather Cloak",price:951}
   ,{name:"Dark Leather Tunic",price:965}
   ,{name:"Light Leather",price:15}
   ,{name:"Medium Leather",price:50}
   ,{name:"Coarse Thread",price:2}
   ,{name:"Fine Thread",price:25}
   ,{name:"Bleach",price:6}
   ,{name:"Black Dye",price:250}
   ,{name:"Ivy-Weave Bracers",price:13}
   ,{name:"Sturdy Leather Bracers",price:51}
   ,{name:"Battleworn Hammer",price:4}
   ,{name:"Worn Wooden Shield",price:2}
   ,{name:"Woven Vest",price:103}
   ,{name:"Woven Pants",price:104}
   ,{name:"Woven Boots",price:78}
   ,{name:"Woven Gloves",price:53}
   ,{name:"Battered Leather Harness",price:105}
   ,{name:"Battered Leather Belt",price:53}
   ,{name:"Battered Leather Pants",price:96}
   ,{name:"Battered Leather Boots",price:72}
   ,{name:"Battered Leather Bracers",price:48}
   ,{name:"Battered Leather Gloves",price:49}
   ,{name:"Worn Heater Shield",price:89}
   ,{name:"Skeleton Finger",price:1}
   ,{name:"Tarnished Chain Vest",price:17}
   ,{name:"Tarnished Chain Belt",price:9}
   ,{name:"Tarnished Chain Leggings",price:18}
   ,{name:"The Embalmer's Heart",price:1}
   ,{name:"Tarnished Chain Boots",price:13}
   ,{name:"Tarnished Chain Bracers",price:9}
   ,{name:"Tarnished Chain Gloves",price:9}
   ,{name:"Rusted Chain Vest",price:18}
   ,{name:"Rusted Chain Belt",price:9}
   ,{name:"Rusted Chain Leggings",price:18}
   ,{name:"Rusted Chain Boots",price:13}
   ,{name:"Rusted Chain Bracers",price:9}
   ,{name:"Rusted Chain Gloves",price:9}
   ,{name:"Light Mail Armor",price:96}
   ,{name:"Light Mail Belt",price:48}
   ,{name:"Light Mail Leggings",price:97}
   ,{name:"Light Mail Boots",price:75}
   ,{name:"Light Mail Bracers",price:50}
   ,{name:"Light Mail Gloves",price:50}
   ,{name:"Light Chain Armor",price:101}
   ,{name:"Light Chain Belt",price:51}
   ,{name:"Light Chain Leggings",price:102}
   ,{name:"Light Chain Boots",price:76}
   ,{name:"Light Chain Bracers",price:51}
   ,{name:"Light Chain Gloves",price:51}
   ,{name:"Pattern: Fine Leather Boots",price:25}
   ,{name:"Pattern: White Leather Jerkin",price:162}
   ,{name:"Pattern: Fine Leather Gloves",price:125}
   ,{name:"Pattern: Dark Leather Tunic",price:350}
   ,{name:"Smoky Torch",price:1}
   ,{name:"Black Stallion Bridle",price:2500}
   ,{name:"Pinto Bridle",price:2500}
   ,{name:"Augmented Chain Vest",price:3657}
   ,{name:"Augmented Chain Leggings",price:3670}
   ,{name:"Augmented Chain Belt",price:1852}
   ,{name:"Augmented Chain Boots",price:2768}
   ,{name:"Augmented Chain Bracers",price:1866}
   ,{name:"Augmented Chain Gloves",price:1873}
   ,{name:"Brigandine Vest",price:9979}
   ,{name:"Brigandine Belt",price:5036}
   ,{name:"Brigandine Leggings",price:10051}
   ,{name:"Brigandine Boots",price:7551}
   ,{name:"Brigandine Bracers",price:4727}
   ,{name:"Brigandine Gloves",price:4745}
   ,{name:"Russet Vest",price:3548}
   ,{name:"Russet Pants",price:3575}
   ,{name:"Russet Boots",price:2686}
   ,{name:"Russet Gloves",price:1818}
   ,{name:"Embroidered Armor",price:9689}
   ,{name:"Embroidered Pants",price:9761}
   ,{name:"Embroidered Boots",price:7334}
   ,{name:"Embroidered Gloves",price:4963}
   ,{name:"Large Metal Shield",price:686}
   ,{name:"Kite Shield",price:1236}
   ,{name:"Peacebloom",price:10}
   ,{name:"Heavy Pavise",price:3231}
   ,{name:"Earthroot",price:20}
   ,{name:"Briarthorn",price:25}
   ,{name:"Crested Heater Shield",price:8725}
   ,{name:"Swiftthistle",price:15}
   ,{name:"Bruiseweed",price:25}
   ,{name:"Elixir of Lion's Strength",price:20}
   ,{name:"Minor Mana Potion",price:10}
   ,{name:"Minor Rejuvenation Potion",price:15}
   ,{name:"Elixir of Minor Agility",price:15}
   ,{name:"Elixir of Minor Fortitude",price:15}
   ,{name:"Swiftness Potion",price:25}
   ,{name:"Studded Doublet",price:3834}
   ,{name:"Studded Belt",price:1935}
   ,{name:"Studded Pants",price:3493}
   ,{name:"Skullsplitter Fetish",price:1}
   ,{name:"Studded Boots",price:2635}
   ,{name:"Studded Bracers",price:1777}
   ,{name:"Studded Gloves",price:1784}
   ,{name:"Reinforced Leather Vest",price:9506}
   ,{name:"Reinforced Leather Belt",price:4798}
   ,{name:"Reinforced Leather Pants",price:9579}
   ,{name:"Reinforced Leather Boots",price:7197}
   ,{name:"Reinforced Leather Bracers",price:4853}
   ,{name:"Reinforced Leather Gloves",price:4871}
   ,{name:"Chilled Basilisk Haunch",price:1}
   ,{name:"Ravager's Skull",price:1}
   ,{name:"Broad Axe",price:21}
   ,{name:"Large Club",price:14}
   ,{name:"Gladius",price:107}
   ,{name:"Two-Handed Sword",price:68}
   ,{name:"Tomahawk",price:108}
   ,{name:"Large Axe",price:96}
   ,{name:"Cudgel",price:57}
   ,{name:"Wooden Mallet",price:140}
   ,{name:"Stiletto",price:80}
   ,{name:"Walking Stick",price:101}
   ,{name:"Worn Shortbow",price:5}
   ,{name:"Polished Shortbow",price:12}
   ,{name:"Hornwood Recurve Bow",price:57}
   ,{name:"Laminated Recurve Bow",price:350}
   ,{name:"Old Blunderbuss",price:5}
   ,{name:"Ornate Blunderbuss",price:82}
   ,{name:"Solid Blunderbuss",price:8}
   ,{name:"Hunter's Boomstick",price:264}
   ,{name:"Broadsword",price:4925}
   ,{name:"Flamberge",price:6179}
   ,{name:"Crescent Axe",price:4509}
   ,{name:"Bullova",price:5657}
   ,{name:"Truncheon",price:3838}
   ,{name:"War Hammer",price:5298}
   ,{name:"Main Gauche",price:3867}
   ,{name:"Battle Staff",price:5871}
   ,{name:"Falchion",price:10367}
   ,{name:"Zweihander",price:13006}
   ,{name:"Francisca",price:10444}
   ,{name:"Great Axe",price:11234}
   ,{name:"Morning Star",price:10521}
   ,{name:"War Maul",price:12221}
   ,{name:"Rondel",price:9086}
   ,{name:"War Staff",price:12311}
   ,{name:"Trogg Stone Tooth",price:1}
   ,{name:"Malleable Chain Leggings",price:2096}
   ,{name:"Royal Frostmane Girdle",price:65}
   ,{name:"Boar Handler Gloves",price:1}
   ,{name:"Barrel of Barleybrew Scalder",price:1}
   ,{name:"Staff of the Shade",price:10753}
   ,{name:"Recipe: Elixir of Minor Agility",price:25}
   ,{name:"Recipe: Swiftness Potion",price:40}
   ,{name:"Recipe: Elixir of Tongues",price:40}
   ,{name:"Jitters' Completed Journal",price:1}
   ,{name:"Chok'sul's Head",price:1}
   ,{name:"Bouquet of Scarlet Begonias",price:575}
   ,{name:"Strange Smelling Powder",price:1}
   ,{name:"Elven Spirit Claws",price:9598}
   ,{name:"Rod of Molten Fire",price:3113}
   ,{name:"Sacrificial Robes",price:2314}
   ,{name:"Evocator's Blade",price:3204}
   ,{name:"Brown Linen Vest",price:55}
   ,{name:"Linen Boots",price:255}
   ,{name:"Linen Cloak",price:19}
   ,{name:"Viny Wrappings",price:29}
   ,{name:"Red Linen Robe",price:174}
   ,{name:"Red Linen Shirt",price:25}
   ,{name:"White Linen Shirt",price:75}
   ,{name:"Blue Linen Shirt",price:75}
   ,{name:"Barbaric Linen Vest",price:392}
   ,{name:"Green Linen Shirt",price:37}
   ,{name:"Reinforced Linen Cape",price:197}
   ,{name:"Heavy Linen Bandage",price:20}
   ,{name:"Green Woolen Vest",price:631}
   ,{name:"Woolen Boots",price:628}
   ,{name:"Woolen Cape",price:248}
   ,{name:"Gray Woolen Robe",price:1117}
   ,{name:"Gamemaster's Robe",price:2}
   ,{name:"Gray Woolen Shirt",price:200}
   ,{name:"Linen Cloth",price:13}
   ,{name:"Wool Cloth",price:33}
   ,{name:"Flask of Stormwind Tawny",price:37}
   ,{name:"Flagon of Dwarven Mead",price:375}
   ,{name:"Jug of Badlands Bourbon",price:500}
   ,{name:"Skin of Dwarven Stout",price:30}
   ,{name:"Pattern: Red Linen Robe",price:30}
   ,{name:"Pattern: Gray Woolen Robe",price:100}
   ,{name:"Red Dye",price:12}
   ,{name:"Green Dye",price:25}
   ,{name:"Lurker Venom",price:1}
   ,{name:"Mo'grosh Crystal",price:1}
   ,{name:"Disarming Colloid",price:1}
   ,{name:"Disarming Mixture",price:1}
   ,{name:"Crude Flint",price:1}
   ,{name:"Plain Robe",price:57}
   ,{name:"Double-Stitched Robes",price:212}
   ,{name:"Robe of Apprenticeship",price:406}
   ,{name:"Chromatic Robe",price:1782}
   ,{name:"Shimmering Silk Robes",price:931}
   ,{name:"Burning Robes",price:3847}
   ,{name:"Silver Dress Robes",price:9324}
   ,{name:"Grelin's Report",price:1}
   ,{name:"Augural Shroud",price:5263}
   ,{name:"Cowl of Necromancy",price:4117}
   ,{name:"Nimar's Tribal Headdress",price:4546}
   ,{name:"Holy Diadem",price:6209}
   ,{name:"Thinking Cap",price:6729}
   ,{name:"Menethil Statuette",price:1}
   ,{name:"Senir's Report",price:1}
   ,{name:"Intrepid Strongbox Key",price:1}
   ,{name:"Curved Dagger",price:605}
   ,{name:"Jungle Remedy",price:1}
   ,{name:"Venom Fern Extract",price:1}
   ,{name:"Carved Stone Idol",price:1}
   ,{name:"Ironband's Progress Report",price:1}
   ,{name:"Merrin's Letter",price:1}
   ,{name:"Miners' Gear",price:1}
   ,{name:"Red Leather Bag",price:875}
   ,{name:"Ados Fragment",price:1}
   ,{name:"Modr Fragment",price:1}
   ,{name:"Golm Fragment",price:1}
   ,{name:"Neru Fragment",price:1}
   ,{name:"Ribbly's Quiver",price:8750}
   ,{name:"Ribbly's Bandolier",price:8750}
   ,{name:"Spinner Fang",price:1074}
   ,{name:"Stormwind Seasoning Herbs",price:5}
   ,{name:"Barrel of Thunder Ale",price:1}
   ,{name:"MacGrann's Dried Meats",price:1}
   ,{name:"Threshadon Tooth",price:1}
   ,{name:"Threshadon Claw",price:1}
   ,{name:"Wendigo Mane",price:1}
   ,{name:"Stringy Wolf Meat",price:4}
   ,{name:"Coyote Meat",price:10}
   ,{name:"Crawler Meat",price:12}
   ,{name:"Crawler Claw",price:11}
   ,{name:"Shimmerweed",price:1}
   ,{name:"Boar Ribs",price:15}
   ,{name:"Mild Spices",price:1}
   ,{name:"Charred Wolf Meat",price:5}
   ,{name:"Spiced Wolf Meat",price:10}
   ,{name:"Roasted Boar Meat",price:6}
   ,{name:"Cooked Crab Claw",price:25}
   ,{name:"Crab Cake",price:25}
   ,{name:"Coyote Steak",price:20}
   ,{name:"Succulent Pork Ribs",price:75}
   ,{name:"Thunder Ale",price:12}
   ,{name:"Dry Pork Ribs",price:25}
   ,{name:"Latched Belt",price:9}
   ,{name:"Outfitter Boots",price:12}
   ,{name:"Settler's Leggings",price:629}
   ,{name:"Cask of Evershine",price:1}
   ,{name:"Recipe: Goretusk Liver Pie",price:100}
   ,{name:"Recipe: Cooked Crab Claw",price:100}
   ,{name:"Recipe: Redridge Goulash",price:200}
   ,{name:"Recipe: Succulent Pork Ribs",price:100}
   ,{name:"Recipe: Seasoned Wolf Kabob",price:400}
   ,{name:"Lightforge Ingot",price:1}
   ,{name:"Crate of Lightforge Ingots",price:1}
   ,{name:"Ol' Sooty's Head",price:1}
   ,{name:"Small Brass Key",price:1}
   ,{name:"Muddy Note",price:1}
   ,{name:"Holy Shroud",price:3463}
   ,{name:"Wine Ticket",price:1}
   ,{name:"Bottle of Dalaran Noir",price:12}
   ,{name:"Cloth Request",price:1}
   ,{name:"Green Hills of Stranglethorn - Page 1",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 4",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 6",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 8",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 10",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 11",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 14",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 16",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 18",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 20",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 21",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 24",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 25",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 26",price:375}
   ,{name:"Green Hills of Stranglethorn - Page 27",price:375}
   ,{name:"Tarnished Bastard Sword",price:13}
   ,{name:"Green Hills of Stranglethorn",price:1}
   ,{name:"Green Hills of Stranglethorn - Chapter I",price:1}
   ,{name:"Green Hills of Stranglethorn - Chapter II",price:1}
   ,{name:"Green Hills of Stranglethorn - Chapter III",price:1}
   ,{name:"Green Hills of Stranglethorn - Chapter IV",price:1}
   ,{name:"Thurman's Sewing Kit",price:1}
   ,{name:"Copper Ore",price:5}
   ,{name:"Tin Ore",price:25}
   ,{name:"Iron Ore",price:150}
   ,{name:"Silver Ore",price:75}
   ,{name:"Gold Ore",price:500}
   ,{name:"Tear of Tilloa",price:1}
   ,{name:"Musquash Root",price:1}
   ,{name:"Trogg Dagger",price:10}
   ,{name:"Black Claw Stout",price:1}
   ,{name:"Book: Stresses of Iron",price:1}
   ,{name:"Heart of Mokk",price:1}
   ,{name:"Rethban Ore",price:25}
   ,{name:"Gorilla Fang",price:67}
   ,{name:"Black Velvet Robes",price:2668}
   ,{name:"Blade of Hanna",price:90978}
   ,{name:"Blazing Emblem",price:1625}
   ,{name:"Yeti Fur Cloak",price:3287}
   ,{name:"Package for Stormpike",price:1}
   ,{name:"Guillotine Axe",price:1887}
   ,{name:"Curve-Bladed Ripper",price:19778}
   ,{name:"Death Speaker Scepter",price:8862}
   ,{name:"Hard Leather Tunic",price:57}
   ,{name:"Stretched Leather Trousers",price:509}
   ,{name:"Cross Dagger",price:3830}
   ,{name:"Nifty Stopwatch",price:4662}
   ,{name:"Mo'grosh Masher",price:1118}
   ,{name:"Mo'grosh Toothpick",price:1402}
   ,{name:"Mo'grosh Can Opener",price:1618}
   ,{name:"Hurricane",price:32031}
   ,{name:"Bow of Searing Arrows",price:14721}
   ,{name:"Nissa's Remains",price:1}
   ,{name:"Gregor's Remains",price:1}
   ,{name:"Thurman's Remains",price:1}
   ,{name:"Devlin's Remains",price:1}
   ,{name:"Verna's Westfall Stew Recipe",price:1}
   ,{name:"The Lich's Spellbook",price:1}
   ,{name:"Embalming Ichor",price:1}
   ,{name:"Rough Stone",price:2}
   ,{name:"Coarse Stone",price:15}
   ,{name:"Thurman's Letter",price:1}
   ,{name:"Heavy Stone",price:60}
   ,{name:"Copper Bar",price:10}
   ,{name:"Bronze Bar",price:50}
   ,{name:"Silver Bar",price:100}
   ,{name:"Dirty Knucklebones",price:1}
   ,{name:"Copper Mace",price:106}
   ,{name:"Copper Axe",price:109}
   ,{name:"Tirisfal Pumpkin",price:1}
   ,{name:"Copper Shortsword",price:110}
   ,{name:"Bronze Mace",price:1865}
   ,{name:"Bronze Axe",price:2115}
   ,{name:"Bronze Shortsword",price:2399}
   ,{name:"Copper Chain Belt",price:66}
   ,{name:"Copper Chain Pants",price:78}
   ,{name:"Copper Bracers",price:20}
   ,{name:"Runed Copper Bracers",price:441}
   ,{name:"Putrid Claw",price:1}
   ,{name:"Iron Pike",price:1}
   ,{name:"Runed Copper Belt",price:387}
   ,{name:"Darkhound Blood",price:1}
   ,{name:"Vile Fin Scale",price:1}
   ,{name:"Rough Sharpening Stone",price:3}
   ,{name:"Coarse Sharpening Stone",price:10}
   ,{name:"Runed Copper Breastplate",price:735}
   ,{name:"Rough Bronze Leggings",price:1122}
   ,{name:"Rough Bronze Cuirass",price:1464}
   ,{name:"Rough Bronze Bracers",price:739}
   ,{name:"Patterned Bronze Bracers",price:947}
   ,{name:"Silvered Bronze Breastplate",price:2136}
   ,{name:"Shining Silver Breastplate",price:3424}
   ,{name:"Heavy Sharpening Stone",price:40}
   ,{name:"Vicious Night Web Spider Venom",price:1}
   ,{name:"Scarlet Insignia Ring",price:1}
   ,{name:"Duskbat Pelt",price:1}
   ,{name:"Combatant Claymore",price:8524}
   ,{name:"Bearded Boneaxe",price:5143}
   ,{name:"Antipodean Rod",price:3121}
   ,{name:"Weak Flux",price:25}
   ,{name:"Plans: Runed Copper Breastplate",price:150}
   ,{name:"Plans: Silvered Bronze Shoulders",price:300}
   ,{name:"Plans: Deadly Bronze Poniard",price:375}
   ,{name:"Scarlet Crusade Documents",price:1}
   ,{name:"Crag Boar Rib",price:5}
   ,{name:"Beer Basted Boar Ribs",price:10}
   ,{name:"Recipe: Beer Basted Boar Ribs",price:60}
   ,{name:"Letter to the City Architect",price:1}
   ,{name:"Rhapsody Malt",price:12}
   ,{name:"Creeping Pain",price:12}
   ,{name:"Creeping Anguish",price:25}
   ,{name:"Mountaineer Chestpiece",price:38}
   ,{name:"Wendigo Collar",price:238}
   ,{name:"Stone Buckler",price:23}
   ,{name:"Mining Pick",price:16}
   ,{name:"Cloak of the Faith",price:2280}
   ,{name:"Daryl's Hunting Bow",price:515}
   ,{name:"Daryl's Hunting Rifle",price:595}
   ,{name:"Goat Fur Cloak",price:74}
   ,{name:"Darkshire Mail Leggings",price:2112}
   ,{name:"Dwarven Tree Chopper",price:1755}
   ,{name:"Thornblade",price:1409}
   ,{name:"Red Wool Bandana",price:1}
   ,{name:"Gold Militia Boots",price:1457}
   ,{name:"Keller's Girdle",price:923}
   ,{name:"Claw of the Shadowmancer",price:6731}
   ,{name:"Silk Mantle of Gamn",price:2014}
   ,{name:"Taran Icebreaker",price:55289}
   ,{name:"Gold Lion Shield",price:4405}
   ,{name:"Tranquil Ring",price:665}
   ,{name:"Crocolisk Meat",price:16}
   ,{name:"Crocolisk Skin",price:1}
   ,{name:"Head of Bazil Thredd",price:1}
   ,{name:"Creeping Torment",price:50}
   ,{name:"Seal of Wrynn",price:3750}
   ,{name:"Ruined Leather Scraps",price:7}
   ,{name:"Frenzy Blood",price:1}
   ,{name:"Prison Shank",price:3552}
   ,{name:"Iron Knuckles",price:3663}
   ,{name:"Eye of Paleth",price:537}
   ,{name:"Cursed Eye of Paleth",price:1}
   ,{name:"Broken Balanced Throwing Dagger",price:1}
   ,{name:"Broken Small Throwing Knife",price:1}
   ,{name:"Mariner Boots",price:1452}
   ,{name:"Icicle Rod",price:3476}
   ,{name:"Ring of the Underwood",price:656}
   ,{name:"Watch Master's Cloak",price:3244}
   ,{name:"Night Watch Pantaloons",price:4349}
   ,{name:"First Mate Hat",price:6025}
   ,{name:"Report on the Defias Brotherhood",price:1}
   ,{name:"Journeyman's Vest",price:209}
   ,{name:"Journeyman's Pants",price:165}
   ,{name:"Journeyman's Boots",price:57}
   ,{name:"Journeyman's Gloves",price:38}
   ,{name:"Burnt Leather Vest",price:218}
   ,{name:"Burnt Leather Breeches",price:168}
   ,{name:"Burnt Leather Boots",price:58}
   ,{name:"Burnt Leather Gloves",price:51}
   ,{name:"Warrior's Tunic",price:221}
   ,{name:"Warrior's Pants",price:170}
   ,{name:"Warrior's Boots",price:77}
   ,{name:"Warrior's Gloves",price:40}
   ,{name:"Spellbinder Vest",price:668}
   ,{name:"Spellbinder Pants",price:583}
   ,{name:"Spellbinder Boots",price:190}
   ,{name:"Spellbinder Gloves",price:128}
   ,{name:"Hunting Tunic",price:678}
   ,{name:"Hunting Pants",price:549}
   ,{name:"Hunting Boots",price:179}
   ,{name:"Hunting Gloves",price:242}
   ,{name:"Veteran Armor",price:556}
   ,{name:"Veteran Leggings",price:485}
   ,{name:"Veteran Boots",price:182}
   ,{name:"Veteran Gloves",price:245}
   ,{name:"Seer's Robe",price:1135}
   ,{name:"Seer's Pants",price:990}
   ,{name:"Seer's Boots",price:489}
   ,{name:"Seer's Gloves",price:379}
   ,{name:"Inscribed Leather Breastplate",price:1151}
   ,{name:"Inscribed Leather Pants",price:1005}
   ,{name:"Inscribed Leather Boots",price:571}
   ,{name:"Inscribed Leather Gloves",price:442}
   ,{name:"Burnished Tunic",price:1168}
   ,{name:"Burnished Leggings",price:1088}
   ,{name:"Burnished Boots",price:818}
   ,{name:"Burnished Gloves",price:479}
   ,{name:"Bolt of Linen Cloth",price:40}
   ,{name:"Bolt of Woolen Cloth",price:100}
   ,{name:"A Simple Compass",price:1}
   ,{name:"Steelgrill's Tools",price:1}
   ,{name:"Brood Mother Carapace",price:167}
   ,{name:"Wendigo Fur Cloak",price:61}
   ,{name:"Feathered Headdress",price:3978}
   ,{name:"Scroll of Agility",price:50}
   ,{name:"Scroll of Protection",price:25}
   ,{name:"Battleworn Axe",price:1}
   ,{name:"Gunther's Spellbook",price:1}
   ,{name:"Sevren's Orders",price:1}
   ,{name:"Hide of Lupos",price:1091}
   ,{name:"Noble's Robe",price:1175}
   ,{name:"Enduring Cap",price:3711}
   ,{name:"Ranger Bow",price:2421}
   ,{name:"Bluegill Breeches",price:1519}
   ,{name:"Large Bore Blunderbuss",price:754}
   ,{name:"BKP 2700 \\",price:1419}
   ,{name:"BKP 42 \\",price:3695}
   ,{name:"Reinforced Bow",price:762}
   ,{name:"Heavy Recurve Bow",price:1269}
   ,{name:"Laced Pumpkin",price:1}
   ,{name:"Heavy Shortbow",price:515}
   ,{name:"Whipwood Recurve Bow",price:4814}
   ,{name:"Short Ash Bow",price:1610}
   ,{name:"Hunter's Muzzle Loader",price:940}
   ,{name:"\\",price:3769}
   ,{name:"BKP \\",price:4577}
   ,{name:"Lambent Scale Boots",price:1824}
   ,{name:"Lambent Scale Gloves",price:1234}
   ,{name:"Lambent Scale Legguards",price:2239}
   ,{name:"Lambent Scale Breastplate",price:2472}
   ,{name:"Humbert's Chestpiece",price:2497}
   ,{name:"Forest Leather Chestpiece",price:2136}
   ,{name:"Forest Leather Pants",price:2144}
   ,{name:"Forest Leather Boots",price:1262}
   ,{name:"Forest Leather Gloves",price:961}
   ,{name:"Bright Boots",price:1149}
   ,{name:"Bright Gloves",price:875}
   ,{name:"Bright Pants",price:2231}
   ,{name:"Bright Robe",price:2472}
   ,{name:"Ensign Cloak",price:13}
   ,{name:"Striking Hatchet",price:231}
   ,{name:"Smoldering Robe",price:2112}
   ,{name:"Smoldering Pants",price:2120}
   ,{name:"Smoldering Gloves",price:838}
   ,{name:"Eye of Flame",price:26329}
   ,{name:"Smoldering Boots",price:1112}
   ,{name:"Naga Heartpiercer",price:2458}
   ,{name:"Skorn's Rifle",price:297}
   ,{name:"Candle of Beckoning",price:1}
   ,{name:"Nether Gem",price:1}
   ,{name:"Dargol's Skull",price:1}
   ,{name:"Restabilization Cog",price:1}
   ,{name:"Gyromechanic Gear",price:1}
   ,{name:"Barrel of Shimmer Stout",price:1}
   ,{name:"Cask of Shimmer Stout",price:1}
   ,{name:"Mug of Shimmer Stout",price:11}
   ,{name:"Coldridge Hammer",price:466}
   ,{name:"Broken Keen Throwing Knife",price:1}
   ,{name:"Broken Heavy Throwing Dagger",price:1}
   ,{name:"Tunnel Rat Ear",price:1}
   ,{name:"Broken Crude Throwing Axe",price:1}
   ,{name:"Hildelve's Journal",price:1}
   ,{name:"Broken Weighted Throwing Axe",price:1}
   ,{name:"Broken Sharp Throwing Axe",price:1}
   ,{name:"Broken Deadly Throwing Axe",price:1}
   ,{name:"Siege Brigade Vest",price:102}
   ,{name:"Driving Gloves",price:13}
   ,{name:"Oil-Stained Cloak",price:59}
   ,{name:"Thelsamar Axe",price:1094}
   ,{name:"Remedy of Arugal",price:1}
   ,{name:"Glutton Shackle",price:1}
   ,{name:"Darksoul Shackle",price:1}
   ,{name:"Burnt Hide Bracers",price:85}
   ,{name:"Ironplate Buckler",price:470}
   ,{name:"Robe of the Keeper",price:516}
   ,{name:"Notched Rib",price:1}
   ,{name:"Blackened Skull",price:1}
   ,{name:"Discolored Worg Heart",price:33}
   ,{name:"Quinn's Potion",price:1}
   ,{name:"Ironheart Chain",price:475}
   ,{name:"Bear Meat",price:15}
   ,{name:"Spider's Silk",price:387}
   ,{name:"Mangy Claw",price:1}
   ,{name:"Hook Dagger",price:1394}
   ,{name:"Acrobatic Staff",price:8088}
   ,{name:"Viking Sword",price:4436}
   ,{name:"Sacrificial Kris",price:14870}
   ,{name:"Coral Claymore",price:879}
   ,{name:"Wood Chopper",price:99}
   ,{name:"Beatstick",price:99}
   ,{name:"Arced War Axe",price:2468}
   ,{name:"Short Bastard Sword",price:495}
   ,{name:"Oak Mallet",price:2072}
   ,{name:"Black Malice",price:2495}
   ,{name:"Barbaric Battle Axe",price:1372}
   ,{name:"Edged Bastard Sword",price:1377}
   ,{name:"Stonecutter Claymore",price:9295}
   ,{name:"Battering Hammer",price:2742}
   ,{name:"Battle Slayer",price:2262}
   ,{name:"Burnt Leather Bracers",price:27}
   ,{name:"Barbarian War Axe",price:4496}
   ,{name:"Forest Leather Bracers",price:822}
   ,{name:"Dense Triangle Mace",price:5436}
   ,{name:"Deepwood Bracers",price:1058}
   ,{name:"Inscribed Leather Bracers",price:323}
   ,{name:"Cavalier Two-Hander",price:4582}
   ,{name:"Hunting Bracers",price:123}
   ,{name:"Conk Hammer",price:25378}
   ,{name:"Ancient War Sword",price:6783}
   ,{name:"Brutal War Axe",price:5627}
   ,{name:"Burnished Bracers",price:438}
   ,{name:"Lambent Scale Bracers",price:1090}
   ,{name:"Veteran Bracers",price:105}
   ,{name:"Warrior's Bracers",price:39}
   ,{name:"Warm Winter Robe",price:96}
   ,{name:"Foreman Belt",price:237}
   ,{name:"Pyrewood Shackle",price:1}
   ,{name:"Blood Sausage",price:40}
   ,{name:"Wicked Dagger",price:1660}
   ,{name:"Frostmane Scepter",price:307}
   ,{name:"Silver-Lined Bracers",price:50}
   ,{name:"Bloodstained Knife",price:109}
   ,{name:"Nightbane Staff",price:2633}
   ,{name:"Jimmied Handcuffs",price:1288}
   ,{name:"Tarantula Silk Sash",price:747}
   ,{name:"Black Wolf Bracers",price:692}
   ,{name:"Cutthroat Pauldrons",price:1468}
   ,{name:"Gnoll Hide Sack",price:212}
   ,{name:"Deliah's Ring",price:1}
   ,{name:"Ring of Scorn",price:412}
   ,{name:"Rot Hide Ichor",price:1}
   ,{name:"Sample Ichor",price:1}
   ,{name:"Holland's Findings",price:1}
   ,{name:"Rough Weightstone",price:3}
   ,{name:"Coarse Weightstone",price:10}
   ,{name:"Heavy Weightstone",price:40}
   ,{name:"Translated Letter from The Embalmer",price:1}
   ,{name:"Bethor's Scroll",price:1}
   ,{name:"Bethor's Potion",price:1}
   ,{name:"Deathstalker Report",price:1}
   ,{name:"Grizzled Bear Heart",price:1}
   ,{name:"Skittering Blood",price:1}
   ,{name:"Berard's Journal",price:1}
   ,{name:"Lake Skulker Moss",price:1}
   ,{name:"Lake Creeper Moss",price:1}
   ,{name:"Hardened Tumor",price:1}
   ,{name:"Scarlet Initiate Robes",price:11}
   ,{name:"Webbed Cloak",price:12}
   ,{name:"Putrid Wooden Hammer",price:10}
   ,{name:"Webbed Pants",price:7}
   ,{name:"Duskbat Wing",price:1}
   ,{name:"Scavenger Paw",price:1}
   ,{name:"Scarlet Armband",price:1}
   ,{name:"Forsaken Shortsword",price:25}
   ,{name:"Forsaken Dagger",price:25}
   ,{name:"Forsaken Maul",price:25}
   ,{name:"Flax Vest",price:18}
   ,{name:"Zombie Skin Leggings",price:18}
   ,{name:"Rugged Mail Vest",price:18}
   ,{name:"Flax Boots",price:13}
   ,{name:"Flax Gloves",price:9}
   ,{name:"Deathguard Buckler",price:15}
   ,{name:"Executor Staff",price:30}
   ,{name:"Battle Chain Boots",price:122}
   ,{name:"Battle Chain Bracers",price:38}
   ,{name:"Battle Chain Gloves",price:66}
   ,{name:"Battle Chain Pants",price:274}
   ,{name:"Battle Chain Tunic",price:344}
   ,{name:"Tribal Boots",price:124}
   ,{name:"Tribal Bracers",price:51}
   ,{name:"Tribal Gloves",price:84}
   ,{name:"Tribal Pants",price:279}
   ,{name:"Tribal Vest",price:350}
   ,{name:"Ancestral Boots",price:101}
   ,{name:"Ancestral Gloves",price:85}
   ,{name:"Ancestral Woollies",price:354}
   ,{name:"Ancestral Tunic",price:356}
   ,{name:"Deadman Cleaver",price:11}
   ,{name:"Deadman Club",price:11}
   ,{name:"Deadman Blade",price:10}
   ,{name:"Deadman Dagger",price:10}
   ,{name:"Fel Moss",price:1}
   ,{name:"Brackwater Boots",price:370}
   ,{name:"Brackwater Bracers",price:83}
   ,{name:"Brackwater Gauntlets",price:125}
   ,{name:"Brackwater Leggings",price:575}
   ,{name:"Brackwater Vest",price:762}
   ,{name:"Barbaric Cloth Boots",price:376}
   ,{name:"Barbaric Cloth Gloves",price:254}
   ,{name:"Barbaric Loincloth",price:583}
   ,{name:"Barbaric Cloth Vest",price:773}
   ,{name:"Ceremonial Leather Ankleguards",price:213}
   ,{name:"Ceremonial Leather Bracers",price:99}
   ,{name:"Ceremonial Leather Harness",price:726}
   ,{name:"Ceremonial Leather Gloves",price:241}
   ,{name:"Ceremonial Leather Loincloth",price:637}
   ,{name:"Alaric's Head",price:1}
   ,{name:"A Talking Head",price:1}
   ,{name:"Alaric's Remains",price:1}
   ,{name:"Short Sabre",price:110}
   ,{name:"Bonecaster Sash",price:38}
   ,{name:"Gray Fur Booties",price:58}
   ,{name:"Wispy Cloak",price:19}
   ,{name:"Ghostly Bracers",price:28}
   ,{name:"Ghostly Mantle",price:1956}
   ,{name:"Vile Fin Battle Axe",price:140}
   ,{name:"Vile Fin Oracle Staff",price:141}
   ,{name:"Spider Web Robe",price:81}
   ,{name:"Spiked Wooden Plank",price:179}
   ,{name:"Dargol's Hauberk",price:328}
   ,{name:"Melrache's Cape",price:118}
   ,{name:"Perrine's Boots",price:56}
   ,{name:"Farmer's Shovel",price:69}
   ,{name:"Farmer's Broom",price:46}
   ,{name:"Flesh Piercer",price:3986}
   ,{name:"Dragonmaw War Banner",price:1}
   ,{name:"Dwarven Tinder",price:1}
   ,{name:"Incendicite Ore",price:31}
   ,{name:"Gauntlets of Ogre Strength",price:1903}
   ,{name:"Captain Sanders' Shirt",price:137}
   ,{name:"Captain Sanders' Booty Bag",price:450}
   ,{name:"Captain Sanders' Sash",price:257}
   ,{name:"Silk Wizard Hat",price:4751}
   ,{name:"Bundle of Crocolisk Skins",price:1}
   ,{name:"Giant Crocolisk Skin",price:1}
   ,{name:"Sida's Bag",price:1}
   ,{name:"Ooze-Covered Bag",price:1250}
   ,{name:"Rune-Inscribed Pendant",price:1}
   ,{name:"Dalaran Pendant",price:1}
   ,{name:"Wild Steelbloom",price:50}
   ,{name:"Kingsblood",price:30}
   ,{name:"Liferoot",price:75}
   ,{name:"Khadgar's Whisker",price:175}
   ,{name:"Stitches' Femur",price:625}
   ,{name:"Grave Moss",price:25}
   ,{name:"Crystal Vial",price:5}
   ,{name:"Weak Troll's Blood Elixir",price:10}
   ,{name:"Elixir of Wisdom",price:100}
   ,{name:"Lesser Mana Potion",price:30}
   ,{name:"Potion of Curing",price:35}
   ,{name:"Limited Invulnerability Potion",price:30}
   ,{name:"Strong Troll's Blood Elixir",price:40}
   ,{name:"Elixir of Defense",price:40}
   ,{name:"Elixir of Lesser Agility",price:35}
   ,{name:"Elixir of Ogre's Strength",price:40}
   ,{name:"Ringed Helm",price:2324}
   ,{name:"Recipe: Potion of Curing",price:250}
   ,{name:"Recipe: Limited Invulnerability Potion",price:250}
   ,{name:"Recipe: Elixir of Lesser Agility",price:250}
   ,{name:"Young Crocolisk Skin",price:1}
   ,{name:"Lucine Longsword",price:2761}
   ,{name:"Buzzard Wing",price:181}
   ,{name:"Raven Claw Talisman",price:1}
   ,{name:"Black Feather Quill",price:1}
   ,{name:"Sapphire of Sky",price:1}
   ,{name:"Rune of Nesting",price:1}
   ,{name:"Nightsaber Fang",price:1}
   ,{name:"Strigid Owl Feather",price:1}
   ,{name:"Webwood Spider Silk",price:1}
   ,{name:"Doomspike",price:3229}
   ,{name:"Crested Scepter",price:3241}
   ,{name:"Staff of the Friar",price:4066}
   ,{name:"Martyr's Chain",price:2285}
   ,{name:"Onyx Claymore",price:4096}
   ,{name:"Fel Cone",price:1}
   ,{name:"Red Rose",price:125}
   ,{name:"Black Rose",price:1250}
   ,{name:"Simple Wildflowers",price:50}
   ,{name:"Beautiful Wildflowers",price:500}
   ,{name:"Bouquet of White Roses",price:5000}
   ,{name:"Bouquet of Black Roses",price:125000}
   ,{name:"Woven Wand",price:1}
   ,{name:"Bold Yellow Shirt",price:1000}
   ,{name:"Stylish Black Shirt",price:1500}
   ,{name:"Common Gray Shirt",price:100}
   ,{name:"Guardsman Belt",price:825}
   ,{name:"Sniper Rifle",price:11027}
   ,{name:"Bone-Studded Leather",price:1869}
   ,{name:"Slumber Sand",price:3}
   ,{name:"Zombie Skin Bracers",price:28}
   ,{name:"Clasped Belt",price:28}
   ,{name:"Zombie Skin Boots",price:42}
   ,{name:"Bonecracker",price:640}
   ,{name:"Apprentice Sash",price:78}
   ,{name:"Ceremonial Tomahawk",price:138}
   ,{name:"Tiller's Vest",price:126}
   ,{name:"Ceremonial Knife",price:226}
   ,{name:"Darkwood Staff",price:592}
   ,{name:"Cryptwalker Boots",price:40}
   ,{name:"Senggin Root",price:6}
   ,{name:"Mystic Shawl",price:361}
   ,{name:"Faerleia's Shield",price:443}
   ,{name:"Nightglow Concoction",price:607}
   ,{name:"Ceranium Rod",price:2322}
   ,{name:"Quilted Bracers",price:82}
   ,{name:"Reconnaissance Boots",price:184}
   ,{name:"Deathstalker Shortsword",price:188}
   ,{name:"Dog Whistle",price:6375}
   ,{name:"Stamped Trousers",price:777}
   ,{name:"Rugged Mail Gloves",price:392}
   ,{name:"Holland's Special Drink",price:1}
   ,{name:"High Robe of the Adjudicator",price:1760}
   ,{name:"Talonstrike",price:2283}
   ,{name:"Broken Silver Star",price:9}
   ,{name:"Strong Flux",price:500}
   ,{name:"Dull Iron Key",price:1}
   ,{name:"Renferrel's Findings",price:1}
   ,{name:"Copper Chain Boots",price:57}
   ,{name:"Rough Grinding Stone",price:5}
   ,{name:"Copper Chain Vest",price:166}
   ,{name:"Runed Copper Gauntlets",price:140}
   ,{name:"Runed Copper Pants",price:349}
   ,{name:"Gemmed Copper Gauntlets",price:254}
   ,{name:"Cloak of Flames",price:38096}
   ,{name:"Gray Bear Tongue",price:1}
   ,{name:"Creeper Ichor",price:1}
   ,{name:"Coarse Grinding Stone",price:10}
   ,{name:"Rough Bronze Shoulders",price:1028}
   ,{name:"Silvered Bronze Shoulders",price:1489}
   ,{name:"Silvered Bronze Boots",price:1527}
   ,{name:"Silvered Bronze Gauntlets",price:1133}
   ,{name:"Green Iron Boots",price:2049}
   ,{name:"Green Iron Gauntlets",price:1520}
   ,{name:"Heavy Grinding Stone",price:100}
   ,{name:"Heavy Copper Broadsword",price:1498}
   ,{name:"Copper Battle Axe",price:613}
   ,{name:"Thick War Axe",price:937}
   ,{name:"Deadly Bronze Poniard",price:2731}
   ,{name:"Heavy Bronze Mace",price:2741}
   ,{name:"Mighty Iron Hammer",price:4552}
   ,{name:"Raptor's End",price:3426}
   ,{name:"Elixir of Suffering",price:1}
   ,{name:"Mountain Lion Blood",price:1}
   ,{name:"Elixir of Pain",price:1}
   ,{name:"Taretha's Necklace",price:1}
   ,{name:"Burnished Gold Key",price:1}
   ,{name:"Mudsnout Blossom",price:1}
   ,{name:"Alterac Signet Ring",price:1}
   ,{name:"Mudsnout Composite",price:1}
   ,{name:"Mudsnout Mixture",price:1}
   ,{name:"Daggerspine Scale",price:1}
   ,{name:"Torn Fin Eye",price:1}
   ,{name:"Cloak of the People's Militia",price:374}
   ,{name:"Mor'Ladim's Skull",price:1}
   ,{name:"Ataeric's Staff",price:1}
   ,{name:"Lescovar's Head",price:1}
   ,{name:"Keg of Shindigger Stout",price:1}
   ,{name:"Decrypted Letter",price:1}
   ,{name:"Tainted Keg",price:1}
   ,{name:"Cleverly Encrypted Letter",price:1}
   ,{name:"Wool Bandage",price:25}
   ,{name:"Heavy Wool Bandage",price:57}
   ,{name:"Targ's Head",price:1}
   ,{name:"Muckrake's Head",price:1}
   ,{name:"Glommus' Head",price:1}
   ,{name:"Mug'thol's Head",price:1}
   ,{name:"Crown of Will",price:1}
   ,{name:"Robe of Solomon",price:1806}
   ,{name:"Dread Mage Hat",price:2246}
   ,{name:"Fen Keeper Robe",price:1827}
   ,{name:"Night Watch Gauntlets",price:555}
   ,{name:"Mantle of Honor",price:3673}
   ,{name:"Resilient Poncho",price:1563}
   ,{name:"Belt of Vindication",price:1159}
   ,{name:"Seafarer's Pantaloons",price:976}
   ,{name:"Shipment of Iron",price:1}
   ,{name:"Beerstained Gloves",price:494}
   ,{name:"Raptorbane Armor",price:2832}
   ,{name:"Dwarven Fishing Pole",price:922}
   ,{name:"Vicar's Robe",price:6249}
   ,{name:"Bonegrinding Pestle",price:839}
   ,{name:"Trogg Beater",price:2118}
   ,{name:"Daryl's Shortsword",price:972}
   ,{name:"Hunting Quiver",price:212}
   ,{name:"Hunting Ammo Sack",price:212}
   ,{name:"Iron Bar",price:200}
   ,{name:"Tin Bar",price:35}
   ,{name:"Gold Bar",price:600}
   ,{name:"Harvester's Pants",price:476}
   ,{name:"Serrated Knife",price:1046}
   ,{name:"Acidproof Cloak",price:550}
   ,{name:"Weathered Belt",price:81}
   ,{name:"Camouflaged Tunic",price:1335}
   ,{name:"Logsplitter",price:1034}
   ,{name:"Embroidered Belt",price:5038}
   ,{name:"Embroidered Bracers",price:5056}
   ,{name:"Heavy Weave Belt",price:203}
   ,{name:"Heavy Weave Bracers",price:203}
   ,{name:"Padded Belt",price:738}
   ,{name:"Padded Bracers",price:740}
   ,{name:"Russet Belt",price:1928}
   ,{name:"Russet Bracers",price:1935}
   ,{name:"Tattered Cloth Belt",price:8}
   ,{name:"Tattered Cloth Bracers",price:8}
   ,{name:"Thick Cloth Belt",price:380}
   ,{name:"Thick Cloth Bracers",price:382}
   ,{name:"Thin Cloth Belt",price:8}
   ,{name:"Thin Cloth Bracers",price:8}
   ,{name:"Syndicate Missive",price:1}
   ,{name:"Knitted Belt",price:51}
   ,{name:"Knitted Bracers",price:51}
   ,{name:"Bandolier of the Night Watch",price:500}
   ,{name:"Quiver of the Night Watch",price:500}
   ,{name:"Woven Belt",price:51}
   ,{name:"Woven Bracers",price:52}
   ,{name:"Plans: Mighty Iron Hammer",price:500}
   ,{name:"Plans: Copper Chain Vest",price:25}
   ,{name:"Plans: Gemmed Copper Gauntlets",price:50}
   ,{name:"Plans: Green Iron Boots",price:500}
   ,{name:"Plans: Green Iron Gauntlets",price:500}
   ,{name:"Valdred's Hands",price:1}
   ,{name:"Yowler's Paw",price:1}
   ,{name:"Kurzen's Head",price:1}
   ,{name:"Mind's Eye",price:1}
   ,{name:"Pendant of Shadow",price:1}
   ,{name:"Gobbler's Head",price:1}
   ,{name:"Snellig's Snuffbox",price:1}
   ,{name:"Lillith's Remains",price:1}
   ,{name:"Ivar's Head",price:1}
   ,{name:"Essence of Nightlash",price:1}
   ,{name:"Thule's Head",price:1}
   ,{name:"Nek'rosh's Head",price:1}
   ,{name:"Head of Baron Vardus",price:1}
   ,{name:"Fang of Vagash",price:1}
   ,{name:"Hand of Dextren Ward",price:1}
   ,{name:"Mistmantle Family Ring",price:1}
   ,{name:"Head of Targorr",price:1}
   ,{name:"Bellygrub's Tusk",price:1}
   ,{name:"Fangore's Paw",price:1}
   ,{name:"Head of Gath'Ilzogg",price:1}
   ,{name:"Head of Grimson",price:1}
   ,{name:"Maggot Eye's Paw",price:1}
   ,{name:"Scale of Old Murk-Eye",price:1}
   ,{name:"Head of VanCleef",price:1}
   ,{name:"Sarltooth's Talon",price:1}
   ,{name:"Ear of Balgaras",price:1}
   ,{name:"Head of Deepfury",price:1}
   ,{name:"Journeyman's Bracers",price:28}
   ,{name:"Ancestral Bracers",price:39}
   ,{name:"Spellbinder Bracers",price:125}
   ,{name:"Barbaric Cloth Bracers",price:83}
   ,{name:"Seer's Cuffs",price:333}
   ,{name:"Bright Bracers",price:763}
   ,{name:"Tribal Buckler",price:115}
   ,{name:"Battle Shield",price:68}
   ,{name:"Veteran Shield",price:435}
   ,{name:"Hunting Buckler",price:364}
   ,{name:"Ceremonial Buckler",price:438}
   ,{name:"Brackwater Shield",price:366}
   ,{name:"Burnished Shield",price:1022}
   ,{name:"Lambent Scale Shield",price:2116}
   ,{name:"Hillsbrad Town Registry",price:1}
   ,{name:"Recovered Tome",price:1}
   ,{name:"Worn Leather Book",price:1}
   ,{name:"Tomes of Alterac",price:1}
   ,{name:"Handcrafted Staff",price:4}
   ,{name:"Crocolisk Steak",price:25}
   ,{name:"Murloc Fin Soup",price:125}
   ,{name:"Crocolisk Gumbo",price:100}
   ,{name:"Curiously Tasty Omelet",price:150}
   ,{name:"Gooey Spider Cake",price:100}
   ,{name:"Tender Crocolisk Meat",price:25}
   ,{name:"Head of Nagaz",price:1}
   ,{name:"Recipe: Crocolisk Steak",price:100}
   ,{name:"Recipe: Blood Sausage",price:100}
   ,{name:"Recipe: Murloc Fin Soup",price:400}
   ,{name:"Recipe: Crocolisk Gumbo",price:400}
   ,{name:"Recipe: Curiously Tasty Omelet",price:400}
   ,{name:"Recipe: Gooey Spider Cake",price:400}
   ,{name:"Perenolde Tiara",price:1}
   ,{name:"Raptor Egg",price:71}
   ,{name:"Bloodstone Oval",price:1}
   ,{name:"Bloodstone Marble",price:1}
   ,{name:"Bloodstone Shard",price:1}
   ,{name:"Bloodstone Wedge",price:1}
   ,{name:"Hillsbrad Human Skull",price:1}
   ,{name:"Humbert's Sword",price:1}
   ,{name:"Darthalia's Sealed Commendation",price:1}
   ,{name:"Southshore Stout",price:36}
   ,{name:"Rusted Iron Key",price:1}
   ,{name:"Nagaz Parchment",price:1}
   ,{name:"Helcular's Rod",price:1}
   ,{name:"Rod of Helcular",price:1}
   ,{name:"Turtle Meat",price:87}
   ,{name:"Worn Stone Token",price:1}
   ,{name:"Bracers of Earth Binding",price:1}
   ,{name:"Murloc Head",price:1}
   ,{name:"Sack of Murloc Heads",price:1}
   ,{name:"Foreboding Plans",price:1}
   ,{name:"Hillman's Cloak",price:2394}
   ,{name:"Yeti Fur",price:1}
   ,{name:"Farren's Report",price:1}
   ,{name:"Big Bear Steak",price:125}
   ,{name:"Hot Lion Chops",price:125}
   ,{name:"Tasty Lion Steak",price:300}
   ,{name:"Soothing Turtle Bisque",price:300}
   ,{name:"Big Bear Meat",price:45}
   ,{name:"Lion Meat",price:55}
   ,{name:"Hooded Cowl",price:1400}
   ,{name:"Orcish War Chain",price:1480}
   ,{name:"Recipe: Big Bear Steak",price:400}
   ,{name:"Recipe: Hot Lion Chops",price:450}
   ,{name:"Recipe: Tasty Lion Steak",price:500}
   ,{name:"Recipe: Soothing Turtle Bisque",price:550}
   ,{name:"Brewing Rod",price:3439}
   ,{name:"Skull Ring",price:1250}
   ,{name:"Decapitating Sword",price:2452}
   ,{name:"Stomping Boots",price:1289}
   ,{name:"Bow of Plunder",price:2862}
   ,{name:"Sentry Buckler",price:2451}
   ,{name:"Bloodstone Pendant",price:1}
   ,{name:"Rune of Opening",price:1}
   ,{name:"Meditative Sash",price:1538}
   ,{name:"Feline Mantle",price:1004}
   ,{name:"High Apothecary Cloak",price:2307}
   ,{name:"Ribbed Breastplate",price:3093}
   ,{name:"Mercenary Leggings",price:3105}
   ,{name:"Grunt Vest",price:1305}
   ,{name:"Shepherd's Girdle",price:2303}
   ,{name:"Shepherd's Gloves",price:2101}
   ,{name:"Fish Gutter",price:5447}
   ,{name:"Crusader Belt",price:2132}
   ,{name:"Insulated Sage Gloves",price:2140}
   ,{name:"Band of the Undercity",price:1500}
   ,{name:"Deadskull Shield",price:3306}
   ,{name:"Lunar Buckler",price:6761}
   ,{name:"Mantis Boots",price:5556}
   ,{name:"Brigand's Pauldrons",price:5577}
   ,{name:"Mutton Chop",price:25}
   ,{name:"Wild Hog Shank",price:50}
   ,{name:"Conjured Spring Water",price:1}
   ,{name:"Fadeleaf",price:125}
   ,{name:"Dragon's Teeth",price:100}
   ,{name:"Stranglekelp",price:100}
   ,{name:"Goldthorn",price:150}
   ,{name:"Runic Darkblade",price:6481}
   ,{name:"Lesser Invisibility Potion",price:100}
   ,{name:"Shadow Oil",price:150}
   ,{name:"Elixir of Fortitude",price:110}
   ,{name:"Major Troll's Blood Elixir",price:105}
   ,{name:"Mana Potion",price:120}
   ,{name:"Elixir of Detect Lesser Invisibility",price:150}
   ,{name:"Frost Oil",price:150}
   ,{name:"Recipe: Elixir of Fortitude",price:500}
   ,{name:"Recipe: Major Troll's Blood Elixir",price:550}
   ,{name:"Recipe: Elixir of Detect Lesser Invisibility",price:550}
   ,{name:"Adept's Cloak",price:42}
   ,{name:"Sturdy Cloth Trousers",price:57}
   ,{name:"Green Iron Bracers",price:2164}
   ,{name:"Green Iron Helm",price:3555}
   ,{name:"Golden Scale Coif",price:5129}
   ,{name:"Shadowmaw Claw",price:1}
   ,{name:"Pristine Tigress Fang",price:1}
   ,{name:"Green Iron Shoulders",price:2980}
   ,{name:"Golden Scale Shoulders",price:3601}
   ,{name:"Green Iron Leggings",price:3390}
   ,{name:"Golden Scale Leggings",price:4529}
   ,{name:"Green Iron Hauberk",price:6601}
   ,{name:"Golden Scale Cuirass",price:7652}
   ,{name:"Polished Steel Boots",price:4564}
   ,{name:"Golden Scale Boots",price:5770}
   ,{name:"Big Bronze Knife",price:1426}
   ,{name:"Hardened Iron Shortsword",price:5468}
   ,{name:"Jade Serpentblade",price:7304}
   ,{name:"Solid Iron Maul",price:6259}
   ,{name:"Golden Iron Destroyer",price:8361}
   ,{name:"Moonsteel Broadsword",price:10153}
   ,{name:"Frost Tiger Blade",price:14120}
   ,{name:"Massive Iron Axe",price:11248}
   ,{name:"Shadow Crescent Axe",price:14221}
   ,{name:"Coal",price:125}
   ,{name:"Mithril Ore",price:250}
   ,{name:"Steel Bar",price:60}
   ,{name:"Mithril Bar",price:400}
   ,{name:"Blacksteel Bar",price:125}
   ,{name:"Aged Gorilla Sinew",price:1}
   ,{name:"Jungle Stalker Feather",price:1}
   ,{name:"Citrine",price:800}
   ,{name:"Plans: Jade Serpentblade",price:1000}
   ,{name:"Plans: Golden Iron Destroyer",price:950}
   ,{name:"Plans: Frost Tiger Blade",price:1250}
   ,{name:"Plans: Shadow Crescent Axe",price:1250}
   ,{name:"Plans: Green Iron Shoulders",price:750}
   ,{name:"Plans: Golden Scale Shoulders",price:850}
   ,{name:"Plans: Golden Scale Leggings",price:800}
   ,{name:"Plans: Golden Scale Cuirass",price:1100}
   ,{name:"Plans: Polished Steel Boots",price:1100}
   ,{name:"Plans: Golden Scale Boots",price:1250}
   ,{name:"Fang of Bhag'thera",price:1}
   ,{name:"Talon of Tethis",price:1}
   ,{name:"Paw of Sin'Dall",price:1}
   ,{name:"Head of Bangalash",price:1}
   ,{name:"Russet Hat",price:2768}
   ,{name:"Studded Hat",price:2851}
   ,{name:"Augmented Chain Helm",price:2861}
   ,{name:"Embroidered Hat",price:7664}
   ,{name:"Reinforced Leather Cap",price:7691}
   ,{name:"Brigandine Helm",price:6983}
   ,{name:"Dizzy's Eye",price:1}
   ,{name:"Library Scrip",price:1}
   ,{name:"Pupellyverbos Port",price:1}
   ,{name:"Bloodscalp Tusk",price:1}
   ,{name:"Staff of Nobles",price:2091}
   ,{name:"Gan'zulah's Head",price:1}
   ,{name:"Nezzliok's Head",price:1}
   ,{name:"Balia'mah Trophy",price:1}
   ,{name:"Ziata'jai Trophy",price:1}
   ,{name:"Zul'Mamwe Trophy",price:1}
   ,{name:"Broken Armor of Ana'thek",price:1}
   ,{name:"Snuff",price:1}
   ,{name:"Pulsing Blue Shard",price:1}
   ,{name:"Soul Gem",price:1}
   ,{name:"Filled Soul Gem",price:1}
   ,{name:"Journeyman's Backpack",price:6250}
   ,{name:"Bloody Bone Necklace",price:1}
   ,{name:"Split Bone Necklace",price:1}
   ,{name:"Singing Blue Crystal",price:1}
   ,{name:"Singing Crystal Shard",price:1}
   ,{name:"Mistvale Giblets",price:1}
   ,{name:"Bloodsail Charts",price:1}
   ,{name:"Bloodsail Orders",price:1}
   ,{name:"Shaky's Payment",price:1}
   ,{name:"Water Elemental Bracers",price:1}
   ,{name:"Maury's Clubbed Foot",price:1}
   ,{name:"Jon-Jon's Golden Spyglass",price:1}
   ,{name:"Chucky's Huge Ring",price:1}
   ,{name:"Fine Aged Cheddar",price:150}
   ,{name:"Superior Healing Potion",price:250}
   ,{name:"Maury's Loot",price:1}
   ,{name:"Maury's Key",price:1}
   ,{name:"Smotts' Chest",price:1}
   ,{name:"Smotts' Cutlass",price:1}
   ,{name:"Bag of Water Elemental Bracers",price:1}
   ,{name:"Monogrammed Sash",price:1}
   ,{name:"Zanzil's Mixture",price:1}
   ,{name:"Catelyn's Blade",price:1}
   ,{name:"Bundle of Akiris Reeds",price:1}
   ,{name:"Akiris Reed",price:1}
   ,{name:"Stone of the Tides",price:1}
   ,{name:"Silver-Thread Robe",price:3480}
   ,{name:"Silver-Thread Cuffs",price:1199}
   ,{name:"Silver-Thread Pants",price:3187}
   ,{name:"Nightsky Robe",price:6234}
   ,{name:"Nightsky Cowl",price:3870}
   ,{name:"Nightsky Gloves",price:2372}
   ,{name:"Aurora Cowl",price:5501}
   ,{name:"Aurora Gloves",price:3709}
   ,{name:"Aurora Bracers",price:3446}
   ,{name:"Aurora Pants",price:8022}
   ,{name:"Mistscape Bracers",price:4722}
   ,{name:"Mistscape Pants",price:11871}
   ,{name:"Mistscape Boots",price:6916}
   ,{name:"Emblazoned Hat",price:2469}
   ,{name:"Emblazoned Bracers",price:1251}
   ,{name:"Emblazoned Leggings",price:3325}
   ,{name:"Emblazoned Boots",price:2333}
   ,{name:"Insignia Cap",price:3772}
   ,{name:"Large River Crocolisk Skin",price:1}
   ,{name:"Insignia Leggings",price:5076}
   ,{name:"Insignia Boots",price:3467}
   ,{name:"Cortello's Riddle",price:1}
   ,{name:"Insignia Chestguard",price:5645}
   ,{name:"Glyphed Breastplate",price:8479}
   ,{name:"Glyphed Bracers",price:3145}
   ,{name:"Glyphed Leggings",price:7908}
   ,{name:"Imperial Leather Bracers",price:4655}
   ,{name:"Imperial Leather Pants",price:11702}
   ,{name:"Imperial Leather Gloves",price:5063}
   ,{name:"Emblazoned Buckler",price:2987}
   ,{name:"Combat Shield",price:5311}
   ,{name:"Insignia Buckler",price:4845}
   ,{name:"Glyphed Buckler",price:6381}
   ,{name:"Chief Brigadier Shield",price:6918}
   ,{name:"Blackforge Buckler",price:11900}
   ,{name:"Jouster's Crest",price:7527}
   ,{name:"Glimmering Mail Breastplate",price:3428}
   ,{name:"Glimmering Mail Gauntlets",price:1573}
   ,{name:"Glimmering Mail Greaves",price:2585}
   ,{name:"Mail Combat Armor",price:5583}
   ,{name:"Mail Combat Gauntlets",price:2328}
   ,{name:"Mail Combat Boots",price:3827}
   ,{name:"Mail Combat Headguard",price:3841}
   ,{name:"Chief Brigadier Coif",price:5441}
   ,{name:"Chief Brigadier Leggings",price:7879}
   ,{name:"Blackforge Cowl",price:8697}
   ,{name:"Blackforge Breastplate",price:13648}
   ,{name:"Blackforge Gauntlets",price:5079}
   ,{name:"Blackforge Leggings",price:11825}
   ,{name:"Krazek's Crock Pot",price:1}
   ,{name:"Flash Rifle",price:6386}
   ,{name:"Trueshot Bow",price:8722}
   ,{name:"Dreadblade",price:18523}
   ,{name:"Ricochet Blunderbuss",price:15060}
   ,{name:"Mug O' Hurt",price:20736}
   ,{name:"Widowmaker",price:22479}
   ,{name:"Tablet Shard",price:1}
   ,{name:"Shackle Key",price:1}
   ,{name:"Snapjaw Crocolisk Skin",price:1}
   ,{name:"Elder Crocolisk Skin",price:1}
   ,{name:"Tumbled Crystal",price:1}
   ,{name:"Tiger Hunter Gloves",price:3008}
   ,{name:"Panther Hunter Leggings",price:7564}
   ,{name:"Excelsior Boots",price:6139}
   ,{name:"Choker of the High Shaman",price:4182}
   ,{name:"Medicine Blanket",price:8476}
   ,{name:"Darktide Cape",price:6754}
   ,{name:"Grom'gol Buckler",price:5783}
   ,{name:"Olmann Sewar",price:12337}
   ,{name:"Scorching Sash",price:5490}
   ,{name:"Poobah's Nose Ring",price:8581}
   ,{name:"Raptor Hunter Tunic",price:10180}
   ,{name:"Robe of Crystal Waters",price:8804}
   ,{name:"Gemmed Gloves",price:2430}
   ,{name:"Bookmaker's Scepter",price:8384}
   ,{name:"Frost Metal Pauldrons",price:4410}
   ,{name:"Cap of Harmony",price:5577}
   ,{name:"Tranquil Orb",price:3142}
   ,{name:"Guerrilla Cleaver",price:6396}
   ,{name:"Shrapnel Blaster",price:8073}
   ,{name:"Silver Spade",price:14587}
   ,{name:"Collection Plate",price:9444}
   ,{name:"Smotts' Compass",price:2171}
   ,{name:"Belt of Corruption",price:5372}
   ,{name:"Darkspear Armsplints",price:3146}
   ,{name:"Darkspear Cuffs",price:3157}
   ,{name:"Nimboya's Mystical Staff",price:26994}
   ,{name:"Bloodbone Band",price:1130}
   ,{name:"Darkspear Boots",price:6981}
   ,{name:"Darkspear Shoes",price:7005}
   ,{name:"Blackwater Tunic",price:11831}
   ,{name:"Junglewalker Sandals",price:4801}
   ,{name:"Palm Frond Mantle",price:3275}
   ,{name:"Berylline Pads",price:4391}
   ,{name:"Cured Light Hide",price:110}
   ,{name:"Medium Hide",price:125}
   ,{name:"Cured Medium Hide",price:200}
   ,{name:"Heavy Leather",price:150}
   ,{name:"Heavy Hide",price:200}
   ,{name:"Cured Heavy Hide",price:225}
   ,{name:"Handstitched Leather Belt",price:49}
   ,{name:"Linen Bag",price:200}
   ,{name:"Embossed Leather Gloves",price:168}
   ,{name:"Woolen Bag",price:300}
   ,{name:"Green Woolen Bag",price:450}
   ,{name:"Embossed Leather Pants",price:487}
   ,{name:"Fine Leather Tunic",price:646}
   ,{name:"Hillman's Leather Vest",price:1013}
   ,{name:"Small Silk Pack",price:2000}
   ,{name:"Fine Leather Belt",price:293}
   ,{name:"Hillman's Leather Gloves",price:1478}
   ,{name:"Dark Leather Gloves",price:1114}
   ,{name:"Dark Leather Belt",price:989}
   ,{name:"Hillman's Belt",price:993}
   ,{name:"Hillman's Shoulders",price:1676}
   ,{name:"Dark Leather Shoulders",price:2036}
   ,{name:"Toughened Leather Gloves",price:1354}
   ,{name:"Barbaric Gloves",price:1508}
   ,{name:"Green Leather Armor",price:3312}
   ,{name:"Guardian Armor",price:4869}
   ,{name:"Green Leather Belt",price:1846}
   ,{name:"Guardian Belt",price:2242}
   ,{name:"Green Leather Bracers",price:2723}
   ,{name:"Guardian Leather Bracers",price:3603}
   ,{name:"Solliden's Trousers",price:56}
   ,{name:"Gem-Studded Leather Belt",price:3734}
   ,{name:"Standard Issue Shield",price:94}
   ,{name:"Barbaric Belt",price:3948}
   ,{name:"Heavy Armor Kit",price:650}
   ,{name:"Lesser Bloodstone Ore",price:25}
   ,{name:"Salt",price:12}
   ,{name:"Dust Bowl",price:715}
   ,{name:"Silken Thread",price:125}
   ,{name:"Pattern: Green Woolen Bag",price:200}
   ,{name:"Pattern: Hillman's Leather Vest",price:162}
   ,{name:"Pattern: Hillman's Belt",price:400}
   ,{name:"Pattern: Dark Leather Shoulders",price:525}
   ,{name:"Pattern: Barbaric Gloves",price:500}
   ,{name:"Pattern: Guardian Belt",price:162}
   ,{name:"Pattern: Guardian Armor",price:500}
   ,{name:"Pattern: Guardian Leather Bracers",price:700}
   ,{name:"Pattern: Barbaric Belt",price:875}
   ,{name:"Small Green Dagger",price:146}
   ,{name:"Cranial Thumper",price:398}
   ,{name:"Thick Leather",price:300}
   ,{name:"Bolt of Silk Cloth",price:600}
   ,{name:"Silk Cloth",price:150}
   ,{name:"Heavy Linen Gloves",price:87}
   ,{name:"Green Linen Bracers",price:132}
   ,{name:"Handstitched Linen Britches",price:396}
   ,{name:"Heavy Woolen Gloves",price:317}
   ,{name:"Heavy Woolen Cloak",price:830}
   ,{name:"Soft-Soled Linen Boots",price:414}
   ,{name:"Red Woolen Boots",price:728}
   ,{name:"Double-Stitched Woolen Shoulders",price:966}
   ,{name:"Heavy Woolen Pants",price:1300}
   ,{name:"Phoenix Pants",price:1883}
   ,{name:"Gloves of Meditation",price:1074}
   ,{name:"Azure Silk Gloves",price:1435}
   ,{name:"Spidersilk Boots",price:1514}
   ,{name:"Spider Silk Slippers",price:1956}
   ,{name:"Enchanter's Cowl",price:3162}
   ,{name:"Shadow Hood",price:3491}
   ,{name:"Azure Silk Vest",price:3281}
   ,{name:"Boots of the Enchanter",price:3969}
   ,{name:"Long Silken Cloak",price:4360}
   ,{name:"Icy Cloak",price:6617}
   ,{name:"Spider Belt",price:2683}
   ,{name:"Star Belt",price:3732}
   ,{name:"Stylish Red Shirt",price:250}
   ,{name:"Phoenix Gloves",price:926}
   ,{name:"Bright Yellow Shirt",price:500}
   ,{name:"Dark Silk Shirt",price:1200}
   ,{name:"Formal White Shirt",price:550}
   ,{name:"Rich Purple Silk Shirt",price:1500}
   ,{name:"Black Swashbuckler's Shirt",price:1500}
   ,{name:"Thick Spider's Silk",price:750}
   ,{name:"Mageweave Cloth",price:250}
   ,{name:"Bolt of Mageweave",price:1250}
   ,{name:"Gray Dye",price:87}
   ,{name:"Yellow Dye",price:125}
   ,{name:"Purple Dye",price:625}
   ,{name:"Brown Linen Pants",price:176}
   ,{name:"Brown Linen Shirt",price:11}
   ,{name:"Pattern: Red Woolen Boots",price:100}
   ,{name:"Pattern: Heavy Woolen Cloak",price:100}
   ,{name:"Pattern: Reinforced Woolen Shoulders",price:150}
   ,{name:"Pattern: Phoenix Gloves",price:175}
   ,{name:"Pattern: Phoenix Pants",price:175}
   ,{name:"Pattern: Spider Silk Slippers",price:200}
   ,{name:"Pattern: Shadow Hood",price:225}
   ,{name:"Pattern: Boots of the Enchanter",price:275}
   ,{name:"Pattern: Spider Belt",price:300}
   ,{name:"Pattern: Rich Purple Silk Shirt",price:350}
   ,{name:"Pattern: Icy Cloak",price:375}
   ,{name:"Pattern: Star Belt",price:375}
   ,{name:"Rough Blasting Powder",price:4}
   ,{name:"Rough Dynamite",price:30}
   ,{name:"Handful of Copper Bolts",price:12}
   ,{name:"Rough Copper Bomb",price:60}
   ,{name:"Rough Boomstick",price:187}
   ,{name:"Coarse Blasting Powder",price:12}
   ,{name:"Coarse Dynamite",price:75}
   ,{name:"Target Dummy",price:75}
   ,{name:"Small Seaforium Charge",price:150}
   ,{name:"Flying Tiger Goggles",price:714}
   ,{name:"Deadly Blunderbuss",price:1179}
   ,{name:"Large Copper Bomb",price:175}
   ,{name:"Bronze Tube",price:200}
   ,{name:"Lovingly Crafted Boomstick",price:1800}
   ,{name:"Shadow Goggles",price:1262}
   ,{name:"Small Bronze Bomb",price:200}
   ,{name:"Whirring Bronze Gizmo",price:115}
   ,{name:"Flame Deflector",price:200}
   ,{name:"Heavy Blasting Powder",price:150}
   ,{name:"Heavy Dynamite",price:350}
   ,{name:"Silver-Plated Shotgun",price:2357}
   ,{name:"Big Bronze Bomb",price:500}
   ,{name:"Minor Recombobulator",price:600}
   ,{name:"Bronze Framework",price:600}
   ,{name:"Moonsight Rifle",price:3183}
   ,{name:"Explosive Sheep",price:1000}
   ,{name:"Green Tinted Goggles",price:2464}
   ,{name:"Ice Deflector",price:175}
   ,{name:"Iron Strut",price:400}
   ,{name:"Discombobulator Ray",price:1000}
   ,{name:"Gyrochronatom",price:750}
   ,{name:"Iron Grenade",price:500}
   ,{name:"Compact Harvest Reaper Kit",price:4000}
   ,{name:"Advanced Target Dummy",price:2500}
   ,{name:"Craftsman's Monocle",price:4598}
   ,{name:"Big Iron Bomb",price:750}
   ,{name:"Goblin Land Mine",price:1600}
   ,{name:"Mechanical Dragonling",price:6000}
   ,{name:"Gnomish Cloaking Device",price:5000}
   ,{name:"Large Seaforium Charge",price:900}
   ,{name:"Wooden Stock",price:50}
   ,{name:"Heavy Stock",price:500}
   ,{name:"Mechanical Squirrel Box",price:100}
   ,{name:"Small Flame Sac",price:250}
   ,{name:"Portable Bronze Mortar",price:2000}
   ,{name:"Silver Contact",price:25}
   ,{name:"Crude Scope",price:125}
   ,{name:"Standard Scope",price:600}
   ,{name:"Accurate Scope",price:1200}
   ,{name:"Schematic: Mechanical Squirrel Box",price:162}
   ,{name:"Schematic: Small Seaforium Charge",price:200}
   ,{name:"Schematic: Shadow Goggles",price:250}
   ,{name:"Schematic: Flame Deflector",price:275}
   ,{name:"Schematic: Moonsight Rifle",price:375}
   ,{name:"Schematic: Discombobulator Ray",price:450}
   ,{name:"Schematic: Portable Bronze Mortar",price:462}
   ,{name:"Schematic: Craftsman's Monocle",price:550}
   ,{name:"Schematic: Goblin Land Mine",price:600}
   ,{name:"Schematic: Large Seaforium Charge",price:675}
   ,{name:"Scroll of Intellect III",price:112}
   ,{name:"Scroll of Protection III",price:100}
   ,{name:"Scroll of Stamina III",price:112}
   ,{name:"Scroll of Spirit III",price:100}
   ,{name:"Scroll of Agility III",price:125}
   ,{name:"Scroll of Strength III",price:125}
   ,{name:"Deepfury's Orders",price:1}
   ,{name:"Ethereal Talisman",price:4307}
   ,{name:"Sully Balloo's Letter",price:1}
   ,{name:"Waterlogged Envelope",price:1}
   ,{name:"Scarecrow Trousers",price:1002}
   ,{name:"Mote of Myzrael",price:1}
   ,{name:"Jewel-Encrusted Sash",price:583}
   ,{name:"Channeler's Staff",price:1855}
   ,{name:"Pugilist Bracers",price:3199}
   ,{name:"Bruiser Club",price:1788}
   ,{name:"Sigil of Strom",price:1}
   ,{name:"MacKreel's Moonshine",price:1}
   ,{name:"Grim Pauldrons",price:4025}
   ,{name:"Black Husk Shield",price:1490}
   ,{name:"Flesh Carver",price:2068}
   ,{name:"Blackvenom Blade",price:3594}
   ,{name:"Cloak of Night",price:1575}
   ,{name:"Husk of Naraxis",price:2323}
   ,{name:"Naraxis' Fang",price:3332}
   ,{name:"Sigil Fragment",price:1}
   ,{name:"Sigil of Thoradin",price:1}
   ,{name:"Talon of Vultros",price:1007}
   ,{name:"Raptor Hide Harness",price:4335}
   ,{name:"Raptor Hide Belt",price:2188}
   ,{name:"Barbecued Buzzard Wing",price:300}
   ,{name:"Sigil of Arathor",price:1}
   ,{name:"Raptor Hide",price:208}
   ,{name:"Cloak of Rot",price:2489}
   ,{name:"Beaded Raptor Collar",price:1678}
   ,{name:"Trouncing Boots",price:2759}
   ,{name:"Felstrom's Gauntlets",price:1860}
   ,{name:"Sigil of Trollbane",price:1}
   ,{name:"Sigil of Ignaeus",price:1}
   ,{name:"Sheathed Trol'kalar",price:1}
   ,{name:"Rod of Order",price:1}
   ,{name:"Simple Wood",price:9}
   ,{name:"Scroll of Myzrael",price:1}
   ,{name:"Eldritch Shackles",price:1}
   ,{name:"Ravenwood Bow",price:4207}
   ,{name:"Beastwalker Robe",price:4785}
   ,{name:"Nefarious Buckler",price:4390}
   ,{name:"Iridescent Scale Leggings",price:11873}
   ,{name:"Burning Charm",price:178}
   ,{name:"Thundering Charm",price:185}
   ,{name:"Cresting Charm",price:176}
   ,{name:"Sealed Folder",price:1}
   ,{name:"Burning Key",price:1}
   ,{name:"Cresting Key",price:1}
   ,{name:"Thundering Key",price:1}
   ,{name:"Maiden's Folly Charts",price:1}
   ,{name:"Spirit of Silverpine Charts",price:1}
   ,{name:"Maiden's Folly Log",price:1}
   ,{name:"Spirit of Silverpine Log",price:1}
   ,{name:"Goggles of Gem Hunting",price:1}
   ,{name:"Elven Gem",price:1}
   ,{name:"Elven Gems",price:1}
   ,{name:"Seahorn's Sealed Letter",price:1}
   ,{name:"Bloodstone Amulet",price:1}
   ,{name:"Small Brown Pouch",price:125}
   ,{name:"Heavy Brown Bag",price:5000}
   ,{name:"Brown Leather Satchel",price:625}
   ,{name:"Huge Brown Sack",price:25000}
   ,{name:"Traveler's Backpack",price:8750}
   ,{name:"Sample Elven Gem",price:1}
   ,{name:"Witherbark Tusk",price:1}
   ,{name:"Dwarven Guard Cloak",price:2576}
   ,{name:"Swampland Trousers",price:3454}
   ,{name:"Stromgarde Badge",price:1}
   ,{name:"Pit Fighter's Shield",price:9938}
   ,{name:"Blood-Tinged Armor",price:10910}
   ,{name:"Seawolf Gloves",price:3934}
   ,{name:"Befouled Bloodstone Orb",price:1}
   ,{name:"Black Water Hammer",price:11256}
   ,{name:"Highland Raptor Eye",price:1}
   ,{name:"Raptor Heart",price:1}
   ,{name:"Sara Balloo's Plea",price:1}
   ,{name:"Marez's Head",price:1}
   ,{name:"Otto's Head",price:1}
   ,{name:"Falconcrest's Head",price:1}
   ,{name:"Torn Scroll Fragment",price:1}
   ,{name:"Crumpled Scroll Fragment",price:1}
   ,{name:"Singed Scroll Fragment",price:1}
   ,{name:"Alterac Granite",price:1}
   ,{name:"Witherbark Medicine Pouch",price:1}
   ,{name:"Balloo's Memorial",price:1}
   ,{name:"Trelane's Wand of Invocation",price:1}
   ,{name:"Raptor Talon Amulet",price:1}
   ,{name:"Azure Agate",price:1}
   ,{name:"Tor'gan's Orb",price:1}
   ,{name:"Enchanted Agate",price:1}
   ,{name:"Trelane's Phylactery",price:1}
   ,{name:"Trelane's Orb",price:1}
   ,{name:"Trelane's Ember Agate",price:1}
   ,{name:"Sealed Letter to Archmage Malin",price:1}
   ,{name:"Steel-Clasped Bracers",price:1377}
   ,{name:"Ironforge Memorial Ring",price:882}
   ,{name:"Shiny Red Apple",price:1}
   ,{name:"Tel'Abim Banana",price:6}
   ,{name:"Snapvine Watermelon",price:25}
   ,{name:"Goldenbark Apple",price:50}
   ,{name:"Tough Hunk of Bread",price:1}
   ,{name:"Freshly Baked Bread",price:6}
   ,{name:"Moist Cornbread",price:25}
   ,{name:"White Drakeskin Cap",price:5727}
   ,{name:"Mulgore Spice Bread",price:50}
   ,{name:"Radiant Silver Bracers",price:3875}
   ,{name:"Call of the Raptor",price:533}
   ,{name:"Gnomish Zapper",price:8319}
   ,{name:"Servomechanic Sledgehammer",price:15028}
   ,{name:"Seafire Band",price:2092}
   ,{name:"Coldwater Ring",price:2092}
   ,{name:"Or'Kalar's Head",price:1}
   ,{name:"Fine Scimitar",price:37}
   ,{name:"Scalping Tomahawk",price:309}
   ,{name:"Severing Axe",price:298}
   ,{name:"Billy Club",price:110}
   ,{name:"Spiked Club",price:610}
   ,{name:"Simple Dagger",price:38}
   ,{name:"Sturdy Quarterstaff",price:631}
   ,{name:"Merc Sword",price:1049}
   ,{name:"Grunt Axe",price:1694}
   ,{name:"Staunch Hammer",price:612}
   ,{name:"Birchwood Maul",price:922}
   ,{name:"War Knife",price:979}
   ,{name:"Medicine Staff",price:1487}
   ,{name:"Light Bow",price:1184}
   ,{name:"Compact Shotgun",price:356}
   ,{name:"Longjaw Mud Snapper",price:1}
   ,{name:"Bristle Whisker Catfish",price:4}
   ,{name:"Rockscale Cod",price:6}
   ,{name:"Junglevine Wine",price:75}
   ,{name:"Discolored Healing Potion",price:25}
   ,{name:"Recipe: Discolored Healing Potion",price:250}
   ,{name:"Goblin Fishing Pole",price:212}
   ,{name:"Cured Ham Steak",price:100}
   ,{name:"Cherry Grog",price:85}
   ,{name:"Soft Banana Bread",price:100}
   ,{name:"Moon Harvest Pumpkin",price:100}
   ,{name:"Raw Spotted Yellowtail",price:4}
   ,{name:"Forest Mushroom Cap",price:1}
   ,{name:"Red-Speckled Mushroom",price:6}
   ,{name:"Spongy Morel",price:25}
   ,{name:"Delicious Cave Mold",price:50}
   ,{name:"Raw Black Truffle",price:100}
   ,{name:"Recipe: Barbecued Buzzard Wing",price:250}
   ,{name:"Carved Stone Urn",price:1}
   ,{name:"Blue Pearl",price:50}
   ,{name:"Black Drake's Heart",price:1}
   ,{name:"Corroded Black Box",price:1}
   ,{name:"Pendant of Myzrael",price:1}
   ,{name:"Blacklash's Bindings",price:1}
   ,{name:"Ryedol's Lucky Pick",price:1}
   ,{name:"Ambassador Infernus' Bracer",price:1}
   ,{name:"Sealed Note to Advisor Belgrum",price:1}
   ,{name:"Lesser Stoneshield Potion",price:375}
   ,{name:"Recipe: Lesser Stoneshield Potion",price:550}
   ,{name:"Filled Vessel",price:1}
   ,{name:"Glowing Fruit",price:1}
   ,{name:"Shimmering Frond",price:1}
   ,{name:"Cruel Barb",price:1755}
   ,{name:"Thief's Blade",price:1636}
   ,{name:"Cape of the Brotherhood",price:860}
   ,{name:"Taskmaster Axe",price:2061}
   ,{name:"Gold-Flecked Gloves",price:582}
   ,{name:"Smite's Reaver",price:1661}
   ,{name:"Cookie's Tenderizer",price:1667}
   ,{name:"Cookie's Stirring Rod",price:1255}
   ,{name:"Smelting Pants",price:1176}
   ,{name:"Impaling Harpoon",price:2108}
   ,{name:"Emberstone Staff",price:2115}
   ,{name:"Corsair's Overshirt",price:1189}
   ,{name:"Flatland Prowler Claw",price:1}
   ,{name:"Bloodfeather Belt",price:1}
   ,{name:"Sprouted Frond",price:31}
   ,{name:"Bogling Root",price:37}
   ,{name:"Opaque Wand",price:1081}
   ,{name:"Smoldering Wand",price:668}
   ,{name:"Gloom Wand",price:771}
   ,{name:"Burning Wand",price:1161}
   ,{name:"Dusk Wand",price:1166}
   ,{name:"Blazing Wand",price:672}
   ,{name:"Scorching Wand",price:5218}
   ,{name:"Wand of Eventide",price:3935}
   ,{name:"Ember Wand",price:8656}
   ,{name:"Umbral Wand",price:11821}
   ,{name:"Tainted Heart",price:1}
   ,{name:"Cleansed Timberling Heart",price:1}
   ,{name:"Inscribed Bark",price:1}
   ,{name:"Gnarlpine Fang",price:1}
   ,{name:"Melenas' Head",price:1}
   ,{name:"Empty Mana Gem",price:1}
   ,{name:"Empty Greater Bloodstone",price:1}
   ,{name:"Soulstone",price:1}
   ,{name:"Stone of Relu",price:1}
   ,{name:"Flagongut's Fossil",price:1}
   ,{name:"Combustible Wand",price:2878}
   ,{name:"Pitchwood Wand",price:7145}
   ,{name:"Blackbone Wand",price:7746}
   ,{name:"Torchlight Wand",price:1244}
   ,{name:"Dwarven Flamestick",price:821}
   ,{name:"Cinder Wand",price:623}
   ,{name:"Firebelcher",price:1509}
   ,{name:"Consecrated Wand",price:3465}
   ,{name:"Summoner's Wand",price:5091}
   ,{name:"Excavation Rod",price:3490}
   ,{name:"Rod of Sorrow",price:7961}
   ,{name:"Flash Wand",price:6849}
   ,{name:"Burning Sliver",price:8658}
   ,{name:"Charred Wand",price:2646}
   ,{name:"Phial of Scrying",price:1}
   ,{name:"Wand of Decay",price:1175}
   ,{name:"Goblin Igniter",price:7952}
   ,{name:"Rugged Spaulders",price:993}
   ,{name:"Quilboar Tomahawk",price:685}
   ,{name:"Kovork's Rattle",price:7227}
   ,{name:"Dark Hooded Cape",price:5519}
   ,{name:"Complimentary Beer Token",price:1}
   ,{name:"Eye of Adaegus",price:11157}
   ,{name:"Scarlet Kris",price:53869}
   ,{name:"Death Cap",price:1}
   ,{name:"Scaber Stalk",price:1}
   ,{name:"Insane Scribbles",price:1}
   ,{name:"Mathystra Relic",price:1}
   ,{name:"Rose Mantle",price:1753}
   ,{name:"Binding Girdle",price:247}
   ,{name:"Harpy Skinner",price:1437}
   ,{name:"Gloves of the Moon",price:505}
   ,{name:"Cobalt Buckler",price:929}
   ,{name:"Wind Rider Staff",price:1710}
   ,{name:"Privateer Musket",price:1038}
   ,{name:"Sea Dog Britches",price:972}
   ,{name:"Buckled Boots",price:840}
   ,{name:"Riveted Gauntlets",price:492}
   ,{name:"Totemic Clan Ring",price:650}
   ,{name:"Boar Hunter's Cape",price:739}
   ,{name:"Timberland Armguards",price:376}
   ,{name:"Barkshell Tunic",price:1897}
   ,{name:"Dry Moss Tunic",price:1904}
   ,{name:"Zhovur Axe",price:1789}
   ,{name:"Bashing Pauldrons",price:451}
   ,{name:"Padded Lamellar Boots",price:432}
   ,{name:"Elegant Shortsword",price:1484}
   ,{name:"Demolition Hammer",price:4016}
   ,{name:"Everglow Lantern",price:1632}
   ,{name:"Engineer's Hammer",price:776}
   ,{name:"Welding Shield",price:498}
   ,{name:"Flaring Baton",price:776}
   ,{name:"Greasy Tinker's Pants",price:726}
   ,{name:"Cinched Belt",price:241}
   ,{name:"Elven Cup Relic",price:1}
   ,{name:"Glowing Cat Figurine",price:1}
   ,{name:"99-Year-Old Port",price:1}
   ,{name:"A Sack of Coins",price:1}
   ,{name:"Grell Earring",price:1}
   ,{name:"Wayfaring Gloves",price:294}
   ,{name:"Ancient Moonstone Seal",price:1}
   ,{name:"Serpentbloom",price:1}
   ,{name:"Cauldron Stirrer",price:919}
   ,{name:"Spore-Covered Tunic",price:516}
   ,{name:"Raptor Punch",price:88}
   ,{name:"Barkeeper's Cloak",price:535}
   ,{name:"Pointed Axe",price:562}
   ,{name:"Stonewood Hammer",price:705}
   ,{name:"Orcish Battle Bow",price:425}
   ,{name:"Pestilent Wand",price:3142}
   ,{name:"Worn Parchment",price:1}
   ,{name:"Conjured Muffin",price:1}
   ,{name:"Conjured Water",price:1}
   ,{name:"Bounty Hunter's Ring",price:403}
   ,{name:"Book: The Powers Below",price:1}
   ,{name:"Message for Elissa Starbreeze",price:1}
   ,{name:"Letter to Delgren",price:1}
   ,{name:"Beastmaster's Girdle",price:1334}
   ,{name:"Branding Rod",price:2594}
   ,{name:"Ward of the Vale",price:2221}
   ,{name:"Lorgalis Manuscript",price:1}
   ,{name:"Highborne Relic",price:1}
   ,{name:"Glowing Soul Gem",price:1}
   ,{name:"Lucky Charm",price:72}
   ,{name:"Sealed Letter to Elissa",price:1}
   ,{name:"Sealed Letter to Balthule",price:1}
   ,{name:"Anaya's Pendant",price:1}
   ,{name:"Athrikus Narassin's Head",price:1}
   ,{name:"Crawler Leg",price:1}
   ,{name:"Fine Moonstalker Pelt",price:1}
   ,{name:"Enchanted Moonstalker Cloak",price:1}
   ,{name:"Ran Bloodtooth's Skull",price:1}
   ,{name:"Corrupted Furbolg Totem",price:1}
   ,{name:"Fandral's Message",price:1}
   ,{name:"Rare Earth",price:1}
   ,{name:"Thistlewood Dagger",price:25}
   ,{name:"Thistlewood Staff",price:32}
   ,{name:"Archery Training Gloves",price:9}
   ,{name:"Woodland Shield",price:16}
   ,{name:"Key to Searing Gorge",price:1}
   ,{name:"Defias Gunpowder",price:1}
   ,{name:"Canopy Leggings",price:18}
   ,{name:"Tracking Boots",price:13}
   ,{name:"Serpent's Shoulders",price:1008}
   ,{name:"Draped Cloak",price:13}
   ,{name:"Empty Minor Bloodstone",price:1}
   ,{name:"Winterhoof Cleansing Totem",price:1}
   ,{name:"Thresher Eye",price:1}
   ,{name:"Moonstalker Fang",price:1}
   ,{name:"Grizzled Scalp",price:1}
   ,{name:"Thunderhorn Cleansing Totem",price:1}
   ,{name:"Wildmane Cleansing Totem",price:1}
   ,{name:"Feral Bracers",price:19}
   ,{name:"Banshee Armor",price:398}
   ,{name:"Fiery Blaze Enchantment",price:650}
   ,{name:"Brambleweed Leggings",price:969}
   ,{name:"Boahn's Fang",price:2396}
   ,{name:"Ancient Statuette",price:1}
   ,{name:"Runescale Girdle",price:680}
   ,{name:"Serpent's Kiss",price:1939}
   ,{name:"Bathran's Hair",price:1}
   ,{name:"Small Quiver",price:25}
   ,{name:"Bottle of Disease",price:1}
   ,{name:"Small Shot Pouch",price:250}
   ,{name:"Head of Arugal",price:1}
   ,{name:"Gold-Plated Buckler",price:1067}
   ,{name:"Miner's Cape",price:877}
   ,{name:"Ring of Zoram",price:1}
   ,{name:"Severed Voodoo Claw",price:23}
   ,{name:"Dirtwood Belt",price:81}
   ,{name:"Defender Axe",price:472}
   ,{name:"Orendil's Cure",price:1}
   ,{name:"Branch of Cenarius",price:1}
   ,{name:"Dartol's Rod of Transformation",price:1}
   ,{name:"Glowing Gem",price:1}
   ,{name:"Iron Shaft",price:1}
   ,{name:"Small Spider Leg",price:3}
   ,{name:"Scorpid Stinger",price:8}
   ,{name:"Kodo Meat",price:7}
   ,{name:"Soft Frenzy Flesh",price:12}
   ,{name:"Strider Meat",price:9}
   ,{name:"Thunder Lizard Tail",price:28}
   ,{name:"Stag Meat",price:30}
   ,{name:"Kaldorei Spider Kabob",price:10}
   ,{name:"Scorpid Surprise",price:10}
   ,{name:"Roasted Kodo Meat",price:9}
   ,{name:"Wooden Key",price:1}
   ,{name:"Fillet of Frenzy",price:3}
   ,{name:"Strider Stew",price:18}
   ,{name:"Dig Rat Stew",price:70}
   ,{name:"Crispy Lizard Tail",price:125}
   ,{name:"Lean Venison",price:95}
   ,{name:"Satyr Horns",price:1}
   ,{name:"Recipe: Kaldorei Spider Kabob",price:10}
   ,{name:"Recipe: Scorpid Surprise",price:35}
   ,{name:"Recipe: Roasted Kodo Meat",price:60}
   ,{name:"Recipe: Fillet of Frenzy",price:100}
   ,{name:"Recipe: Strider Stew",price:110}
   ,{name:"Recipe: Crispy Lizard Tail",price:100}
   ,{name:"Recipe: Lean Venison",price:300}
   ,{name:"Wrathtail Head",price:1}
   ,{name:"Elune's Tear",price:1}
   ,{name:"Handful of Stardust",price:1}
   ,{name:"Small Lustrous Pearl",price:200}
   ,{name:"Iridescent Pearl",price:750}
   ,{name:"Clam Meat",price:16}
   ,{name:"Tangy Clam Meat",price:22}
   ,{name:"Teronis' Journal",price:1}
   ,{name:"Ornate Spyglass",price:600}
   ,{name:"Fallen Moonstone",price:1}
   ,{name:"Healthstone",price:1}
   ,{name:"Greater Healthstone",price:1}
   ,{name:"Lesser Healthstone",price:1}
   ,{name:"Healthstone",price:1}
   ,{name:"Mana Jade",price:1}
   ,{name:"Mana Agate",price:1}
   ,{name:"Tiny Bronze Key",price:50}
   ,{name:"Tiny Iron Key",price:150}
   ,{name:"Iron Pommel",price:1}
   ,{name:"Velinde's Journal",price:1}
   ,{name:"Velinde's Key",price:1}
   ,{name:"Small Barnacled Clam",price:15}
   ,{name:"Thick-Shelled Clam",price:21}
   ,{name:"Boiled Clams",price:20}
   ,{name:"Clam Chowder",price:75}
   ,{name:"Goblin Deviled Clams",price:95}
   ,{name:"Recipe: Clam Chowder",price:200}
   ,{name:"Ilkrud Magthrull's Tome",price:1}
   ,{name:"Parker's Lunch",price:1}
   ,{name:"Compendium of the Fallen",price:1}
   ,{name:"Mythology of the Titans",price:1}
   ,{name:"Sarilus Foulborne's Head",price:1}
   ,{name:"Vorrel's Wedding Ring",price:1}
   ,{name:"Letter of Commendation",price:1}
   ,{name:"Pearl-Handled Dagger",price:2107}
   ,{name:"Iridescent Hammer",price:3693}
   ,{name:"Pearl-Clasped Cloak",price:647}
   ,{name:"Plans: Iridescent Hammer",price:450}
   ,{name:"Bloodclaw's Collection",price:1}
   ,{name:"Reconstructed Rod",price:1}
   ,{name:"Deepmoss Egg",price:1}
   ,{name:"Small Black Pouch",price:250}
   ,{name:"Small Green Pouch",price:250}
   ,{name:"Green Leather Bag",price:875}
   ,{name:"White Leather Bag",price:875}
   ,{name:"Large Green Sack",price:2500}
   ,{name:"Large Brown Sack",price:2500}
   ,{name:"Plans: Rough Bronze Bracers",price:300}
   ,{name:"Plans: Silvered Bronze Breastplate",price:300}
   ,{name:"Militia Warhammer",price:21}
   ,{name:"Militia Hammer",price:17}
   ,{name:"Smooth Walking Staff",price:32}
   ,{name:"Stonetalon Sap",price:1}
   ,{name:"Fey Dragon Scale",price:1}
   ,{name:"Twilight Whisker",price:1}
   ,{name:"Courser Eye",price:1}
   ,{name:"Thistlewood Blade",price:26}
   ,{name:"Thornroot Club",price:512}
   ,{name:"Lydon's Toxin",price:1}
   ,{name:"Moss-Covered Gauntlets",price:80}
   ,{name:"Cord Bracers",price:81}
   ,{name:"Rain-Spotted Cape",price:121}
   ,{name:"Shackled Girdle",price:63}
   ,{name:"Crag Buckler",price:149}
   ,{name:"Letter to Jin'Zil",price:1}
   ,{name:"Thicket Hammer",price:392}
   ,{name:"Ashwood Bow",price:236}
   ,{name:"Elven Wand",price:380}
   ,{name:"Pruning Knife",price:150}
   ,{name:"Gardening Gloves",price:40}
   ,{name:"Living Cowl",price:6048}
   ,{name:"Steadfast Cinch",price:629}
   ,{name:"Gustweald Cloak",price:363}
   ,{name:"Tear of Grief",price:452}
   ,{name:"Ivy Cuffs",price:102}
   ,{name:"Staff of the Purifier",price:2635}
   ,{name:"Seraph's Strike",price:6147}
   ,{name:"Woodsman Sword",price:1776}
   ,{name:"Gutwrencher",price:26276}
   ,{name:"Vagabond Leggings",price:346}
   ,{name:"Scout's Cloak",price:99}
   ,{name:"Jade Phial",price:1}
   ,{name:"Vial of Innocent Blood",price:1}
   ,{name:"Tourmaline Phial",price:1}
   ,{name:"Clergy Ring",price:556}
   ,{name:"Circlet of the Order",price:5112}
   ,{name:"Skullchipper",price:1717}
   ,{name:"Relic Blade",price:1379}
   ,{name:"Zamah's Note",price:1}
   ,{name:"Hammerfist Gloves",price:489}
   ,{name:"Windfelt Gloves",price:491}
   ,{name:"Rage Potion",price:30}
   ,{name:"Great Rage Potion",price:150}
   ,{name:"Free Action Potion",price:75}
   ,{name:"Sharp Claw",price:45}
   ,{name:"Large Fang",price:75}
   ,{name:"Toxic Fogger",price:1}
   ,{name:"Filled Jade Phial",price:1}
   ,{name:"Recipe: Rage Potion",price:25}
   ,{name:"Recipe: Cowardly Flight Potion",price:375}
   ,{name:"Recipe: Free Action Potion",price:450}
   ,{name:"Recipe: Great Rage Potion",price:500}
   ,{name:"Filled Tourmaline Phial",price:1}
   ,{name:"Vial of Blessed Water",price:1}
   ,{name:"Instant Toxin",price:100}
   ,{name:"Chestnut Mare Bridle",price:2500}
   ,{name:"Brown Horse Bridle",price:2500}
   ,{name:"Recipe: Instant Toxin",price:250}
   ,{name:"Smoldering Embers",price:1}
   ,{name:"Corroded Shrapnel",price:1}
   ,{name:"Horn of the Dire Wolf",price:2500}
   ,{name:"Horn of the Brown Wolf",price:2500}
   ,{name:"Dust Devil Debris",price:1}
   ,{name:"Crystalized Scales",price:1}
   ,{name:"Corrosive Sap",price:1}
   ,{name:"Ordanus' Head",price:1}
   ,{name:"Gatekeeper's Key",price:1}
   ,{name:"Sleepers' Key",price:1}
   ,{name:"Claw Key",price:1}
   ,{name:"Barrow Key",price:1}
   ,{name:"Remote Detonator (Red)",price:1}
   ,{name:"Remote Detonator (Blue)",price:1}
   ,{name:"NG-5 Explosives (Red)",price:1}
   ,{name:"NG-5 Explosives (Blue)",price:1}
   ,{name:"Venture Co. Letters",price:1}
   ,{name:"Venture Co. Engineering Plans",price:1}
   ,{name:"Scroll of Messaging",price:1}
   ,{name:"NG-5",price:1}
   ,{name:"Unidentified Ore",price:1}
   ,{name:"Super Reaper 6000 Blueprints",price:1}
   ,{name:"Sealed Envelope",price:1}
   ,{name:"Gerenzo's Mechanical Arm",price:1}
   ,{name:"Covert Ops Plans: Alpha & Beta",price:1}
   ,{name:"Covert Ops Pack",price:1}
   ,{name:"Barbaric Harness",price:6391}
   ,{name:"Red Fireworks Rocket",price:25}
   ,{name:"Gemstone Dagger",price:10770}
   ,{name:"Prismstone Ring",price:1803}
   ,{name:"Pale Skinner",price:386}
   ,{name:"Centaur Longbow",price:609}
   ,{name:"Scythe Axe",price:2664}
   ,{name:"Warchief's Girdle",price:753}
   ,{name:"Webwing Cloak",price:1436}
   ,{name:"Wyvern Tailspike",price:3109}
   ,{name:"Ruffled Chaplet",price:2633}
   ,{name:"Wolfpack Medallion",price:2538}
   ,{name:"Onyx Shredder Plate",price:4815}
   ,{name:"Sliverblade",price:10026}
   ,{name:"Hardwood Cudgel",price:1363}
   ,{name:"Mithril Lockbox",price:250}
   ,{name:"Thorium Lockbox",price:375}
   ,{name:"Eternium Lockbox",price:500}
   ,{name:"Anvilmar Sledge",price:20}
   ,{name:"Red Linen Bag",price:250}
   ,{name:"Red Woolen Bag",price:700}
   ,{name:"Green Silk Pack",price:3000}
   ,{name:"Black Silk Pack",price:4000}
   ,{name:"Lesser Wizard's Robe",price:2341}
   ,{name:"Violet Robes",price:77}
   ,{name:"Gnome Race Ticket",price:1250}
   ,{name:"Goblin Race Ticket",price:1250}
   ,{name:"Robes of Arcana",price:3163}
   ,{name:"Pattern: Red Linen Bag",price:50}
   ,{name:"Pattern: Red Woolen Bag",price:125}
   ,{name:"Pattern: Robes of Arcana",price:250}
   ,{name:"Pattern: Green Silk Pack",price:275}
   ,{name:"Pattern: Black Silk Pack",price:350}
   ,{name:"Elder's Cane",price:30}
   ,{name:"Brave's Axe",price:30}
   ,{name:"Primitive Walking Stick",price:30}
   ,{name:"Forsaken Bastard Sword",price:30}
   ,{name:"Murloc Scale Belt",price:366}
   ,{name:"Murloc Scale Breastplate",price:842}
   ,{name:"Thick Murloc Armor",price:4495}
   ,{name:"Murloc Scale Bracers",price:3261}
   ,{name:"Slimy Murloc Scale",price:75}
   ,{name:"Thick Murloc Scale",price:500}
   ,{name:"Pattern: Murloc Scale Belt",price:137}
   ,{name:"Pattern: Murloc Scale Breastplate",price:150}
   ,{name:"Pattern: Thick Murloc Armor",price:162}
   ,{name:"Pattern: Murloc Scale Bracers",price:700}
   ,{name:"Lonebrow's Journal",price:1}
   ,{name:"Henrig Lonebrow's Journal",price:1}
   ,{name:"Razorflank's Medallion",price:1}
   ,{name:"Razorflank's Heart",price:1}
   ,{name:"Salty Scorpid Venom",price:1}
   ,{name:"Hardened Tortoise Shell",price:1}
   ,{name:"Encrusted Tail Fin",price:1}
   ,{name:"Indurium Flake",price:1}
   ,{name:"Kravel's Parts Order",price:1}
   ,{name:"Kravel's Parts",price:1}
   ,{name:"Kraul Guano",price:1}
   ,{name:"Delicate Car Parts",price:1}
   ,{name:"Speck of Dream Dust",price:1}
   ,{name:"Goblin Rumors",price:1}
   ,{name:"Heart of Zeal",price:1}
   ,{name:"Fool's Stout",price:1}
   ,{name:"Fool's Stout Report",price:1}
   ,{name:"Pridewing Venom Sac",price:1}
   ,{name:"Highperch Venom Sac",price:1}
   ,{name:"Fresh Carcass",price:1}
   ,{name:"Frostmaw's Mane",price:1}
   ,{name:"Robes of Antiquity",price:1975}
   ,{name:"Emil's Brand",price:7087}
   ,{name:"Snapbrook Armor",price:3292}
   ,{name:"Glacial Stone",price:5871}
   ,{name:"Light of Elune",price:405}
   ,{name:"Lunaris Bow",price:3227}
   ,{name:"Moonbeam Wand",price:3239}
   ,{name:"Sunblaze Coif",price:3728}
   ,{name:"Faerie Mantle",price:2834}
   ,{name:"Darkstalker Boots",price:1257}
   ,{name:"Hedgeseed Gauntlets",price:848}
   ,{name:"Tablet of Will",price:1}
   ,{name:"Treshala's Pendant",price:1}
   ,{name:"Kravel's Scheme",price:1}
   ,{name:"Fizzle Brassbolts' Letter",price:1}
   ,{name:"Kenata's Head",price:1}
   ,{name:"Fardel's Head",price:1}
   ,{name:"Marcel's Head",price:1}
   ,{name:"Indurium Ore",price:1}
   ,{name:"Mok'Morokk's Snuff",price:1}
   ,{name:"Mok'Morokk's Grog",price:1}
   ,{name:"Mok'Morokk's Strongbox",price:1}
   ,{name:"Steelsnap's Rib",price:1}
   ,{name:"Kodo Skin Scroll",price:1}
   ,{name:"Searing Tongue",price:1}
   ,{name:"Searing Heart",price:1}
   ,{name:"Unrefined Ore Sample",price:1}
   ,{name:"Grenka's Claw",price:1}
   ,{name:"Fragments of Rok'Alim",price:1}
   ,{name:"Flank of Meat",price:1}
   ,{name:"Korran's Sealed Note",price:1}
   ,{name:"Mirefin Head",price:1}
   ,{name:"Hollow Vulture Bone",price:1}
   ,{name:"Crate of Crash Helmets",price:1}
   ,{name:"Belgrom's Sealed Note",price:1}
   ,{name:"Cozzle's Key",price:1}
   ,{name:"Fuel Regulator Blueprints",price:1}
   ,{name:"Intact Silithid Carapace",price:1}
   ,{name:"Silithid Talon",price:1}
   ,{name:"Silithid Heart",price:1}
   ,{name:"Gnome Prize Box",price:37}
   ,{name:"Goblin Prize Box",price:37}
   ,{name:"Party Grenade",price:25}
   ,{name:"Legacy of the Aspects",price:1}
   ,{name:"Beginnings of the Undead Threat",price:1}
   ,{name:"Seaforium Booster",price:1}
   ,{name:"Guild Charter",price:1}
   ,{name:"Gray Ram",price:2500}
   ,{name:"Modified Seaforium Booster",price:1}
   ,{name:"Sample of Indurium Ore",price:1}
   ,{name:"Etched Phial",price:1}
   ,{name:"Filled Etched Phial",price:1}
   ,{name:"Cloven Hoof",price:1}
   ,{name:"Brown Ram",price:2500}
   ,{name:"White Ram",price:2500}
   ,{name:"Blueleaf Tuber",price:1}
   ,{name:"Cracked Silithid Carapace",price:1}
   ,{name:"Super Snuff",price:92}
   ,{name:"Twilight Pendant",price:1}
   ,{name:"Crate With Holes",price:1}
   ,{name:"Head of Kelris",price:1}
   ,{name:"Captain's Documents",price:1}
   ,{name:"Forked Mudrock Tongue",price:1}
   ,{name:"Unpopped Darkmist Eye",price:1}
   ,{name:"Snufflenose Owner's Manual",price:1}
   ,{name:"Gnome Camera Key",price:1}
   ,{name:"Spy's Report",price:1}
   ,{name:"Defiant Orc Head",price:1}
   ,{name:"Blackened Iron Shield",price:1}
   ,{name:"Animal Skin Belt",price:28}
   ,{name:"Pristine Crawler Leg",price:1}
   ,{name:"Sewing Gloves",price:28}
   ,{name:"Bone Buckler",price:154}
   ,{name:"Brass Scale Pants",price:135}
   ,{name:"Jeweled Pendant",price:1}
   ,{name:"Rift Bracers",price:713}
   ,{name:"Greaves of the People's Militia",price:384}
   ,{name:"Deadmire's Tooth",price:1}
   ,{name:"Sealed Note to Elling",price:1}
   ,{name:"Defias Docket",price:1}
   ,{name:"Letter to Jorgen",price:1}
   ,{name:"Scrap of Paper",price:1}
   ,{name:"Reethe's Badge",price:1}
   ,{name:"Moist Towelette",price:41}
   ,{name:"Corrupted Brain Stem",price:1}
   ,{name:"Blacksmith Hammer",price:3}
   ,{name:"Handstitched Leather Vest",price:56}
   ,{name:"Fine Leather Pants",price:1160}
   ,{name:"Acidic Venom Sac",price:1}
   ,{name:"Sealed Note to Watcher Backus",price:1}
   ,{name:"Dark Leather Pants",price:1524}
   ,{name:"Guardian Pants",price:3912}
   ,{name:"Barbaric Leggings",price:4411}
   ,{name:"Barbaric Shoulders",price:3647}
   ,{name:"Guardian Cloak",price:4429}
   ,{name:"Guardian Gloves",price:3226}
   ,{name:"Girdle of Nobility",price:1115}
   ,{name:"Rugged Boots",price:362}
   ,{name:"Regent's Cloak",price:1092}
   ,{name:"Serpent Gloves",price:680}
   ,{name:"Feathered Cape",price:366}
   ,{name:"Pattern: Fine Leather Pants",price:375}
   ,{name:"Pattern: Barbaric Leggings",price:162}
   ,{name:"Pattern: Guardian Cloak",price:350}
   ,{name:"Ruffian Belt",price:750}
   ,{name:"Guild Tabard",price:2500}
   ,{name:"Elixir of Water Breathing",price:95}
   ,{name:"Elixir of Minor Defense",price:5}
   ,{name:"Stormpike's Request",price:1}
   ,{name:"Wolf Heart Sample",price:1}
   ,{name:"Truesilver Bar",price:1250}
   ,{name:"Giant Clam Scorcho",price:312}
   ,{name:"Recipe: Giant Clam Scorcho",price:1250}
   ,{name:"Golden Scale Bracers",price:3226}
   ,{name:"Steel Weapon Chain",price:1500}
   ,{name:"Iron Shield Spike",price:250}
   ,{name:"Iron Counterweight",price:500}
   ,{name:"Plans: Iron Shield Spike",price:450}
   ,{name:"Plans: Iron Counterweight",price:650}
   ,{name:"Plans: Steel Weapon Chain",price:950}
   ,{name:"Plans: Golden Scale Coif",price:1100}
   ,{name:"Shadow Protection Potion",price:100}
   ,{name:"Fire Protection Potion",price:170}
   ,{name:"Frost Protection Potion",price:300}
   ,{name:"Holy Protection Potion",price:62}
   ,{name:"Nature Protection Potion",price:300}
   ,{name:"Recipe: Holy Protection Potion",price:200}
   ,{name:"Recipe: Shadow Protection Potion",price:225}
   ,{name:"Recipe: Fire Protection Potion",price:375}
   ,{name:"Recipe: Frost Protection Potion",price:500}
   ,{name:"Recipe: Nature Protection Potion",price:500}
   ,{name:"Blackened Leather Belt",price:9}
   ,{name:"Nomadic Vest",price:18}
   ,{name:"Flax Bracers",price:8}
   ,{name:"Graystone Bracers",price:38}
   ,{name:"Heavy Cord Bracers",price:50}
   ,{name:"Cold Steel Gauntlets",price:27}
   ,{name:"Miniature Platinum Discs",price:1}
   ,{name:"Khadgar's Essays on Dimensional Convergence",price:1}
   ,{name:"Khan Dez'hepah's Head",price:1}
   ,{name:"Centaur Ear",price:1}
   ,{name:"Recipe: Shadow Oil",price:375}
   ,{name:"Crudely Dried Meat",price:1}
   ,{name:"Wolfskin Bracers",price:9}
   ,{name:"Draenethyst Crystal",price:1}
   ,{name:"Khan Jehn's Head",price:1}
   ,{name:"Khan Shaka's Head",price:1}
   ,{name:"War Horn Mouthpiece",price:1}
   ,{name:"Vimes' Report",price:1}
   ,{name:"Tapered Pants",price:17}
   ,{name:"Maraudine Key Fragment",price:1}
   ,{name:"Pikeman Shield",price:15}
   ,{name:"Crude Charm",price:1}
   ,{name:"Shadow Panther Heart",price:1}
   ,{name:"Mire Lord Fungus",price:1}
   ,{name:"Green Whelp Blood",price:1}
   ,{name:"Broken Tears",price:1}
   ,{name:"Stormwind Guard Leggings",price:339}
   ,{name:"Footman Tunic",price:340}
   ,{name:"Faustin's Truth Serum",price:1}
   ,{name:"Chausses of Westfall",price:2016}
   ,{name:"Zraedus' Brew",price:1}
   ,{name:"Crate of Power Stones",price:1}
   ,{name:"Black Whelp Boots",price:588}
   ,{name:"Orc Crusher",price:4418}
   ,{name:"Piercing Axe",price:1278}
   ,{name:"Wandering Boots",price:1201}
   ,{name:"Apprentice's Shirt",price:1}
   ,{name:"Acolyte's Shirt",price:1}
   ,{name:"Neophyte's Robe",price:2}
   ,{name:"Apprentice's Robe",price:2}
   ,{name:"Squire's Shirt",price:1}
   ,{name:"Squire's Pants",price:2}
   ,{name:"Neophyte's Robe",price:2}
   ,{name:"Recruit's Shirt",price:1}
   ,{name:"Recruit's Pants",price:2}
   ,{name:"Recruit's Boots",price:1}
   ,{name:"Novice's Robe",price:2}
   ,{name:"Novice's Pants",price:2}
   ,{name:"Brawler's Harness",price:1}
   ,{name:"Trapper's Pants",price:2}
   ,{name:"Trapper's Boots",price:2}
   ,{name:"Acolyte's Robe",price:2}
   ,{name:"Primitive Mantle",price:1}
   ,{name:"Primitive Kilt",price:2}
   ,{name:"Trapper's Shirt",price:1}
   ,{name:"Thug Pants",price:2}
   ,{name:"Trapper's Boots",price:1}
   ,{name:"Novice's Robe",price:2}
   ,{name:"Apprentice's Robe",price:2}
   ,{name:"Neophyte's Robe",price:2}
   ,{name:"Clarice's Pendant",price:1}
   ,{name:"Sundried Driftwood",price:1}
   ,{name:"Ratty Old Belt",price:52}
   ,{name:"Web-Covered Boots",price:78}
   ,{name:"Greater Mana Potion",price:300}
   ,{name:"Coyote Jawbone",price:1}
   ,{name:"Neeka's Report",price:1}
   ,{name:"Sawtooth Snapper Claw",price:1}
   ,{name:"Unprepared Sawtooth Flank",price:1}
   ,{name:"Wizards' Reagents",price:1}
   ,{name:"Wolf Handler Gloves",price:1}
   ,{name:"Snow Boots",price:1}
   ,{name:"Atal'ai Artifact",price:1}
   ,{name:"Dwarven Kite Shield",price:16}
   ,{name:"Ironwrought Bracers",price:82}
   ,{name:"Shipment to Nethergarde",price:1}
   ,{name:"Privateer's Cape",price:645}
   ,{name:"Slarkskin",price:494}
   ,{name:"Fetish of Hakkar",price:1}
   ,{name:"Dim Torch",price:1}
   ,{name:"Unlit Poor Torch",price:2}
   ,{name:"Monstrous Crawler Leg",price:1}
   ,{name:"Bear Shawl",price:13}
   ,{name:"Trogg Slicer",price:1373}
   ,{name:"Dwarven Defender",price:613}
   ,{name:"Mud Stompers",price:353}
   ,{name:"Durable Chain Shoulders",price:724}
   ,{name:"Draenethyst Shard",price:1}
   ,{name:"Kimbra Boots",price:1075}
   ,{name:"Khan Hratha's Head",price:1}
   ,{name:"Bundle of Atal'ai Artifacts",price:1}
   ,{name:"Barreling Reaper",price:5308}
   ,{name:"Wax-Polished Armor",price:485}
   ,{name:"Loch Croc Hide Vest",price:1301}
   ,{name:"Jurassic Wristguards",price:1567}
   ,{name:"Black Widow Band",price:650}
   ,{name:"Garneg's War Belt",price:1435}
   ,{name:"Lithe Boots",price:76}
   ,{name:"Fingerless Gloves",price:66}
   ,{name:"Thuggish Shield",price:121}
   ,{name:"Tribal Worg Helm",price:2886}
   ,{name:"Burrowing Shovel",price:922}
   ,{name:"Rock Chipper",price:555}
   ,{name:"Recipe: Elixir of Ogre's Strength",price:450}
   ,{name:"Head of Jammal'an",price:1}
   ,{name:"Heavy Copper Maul",price:993}
   ,{name:"Balanced Fighting Stick",price:385}
   ,{name:"Copper Rod",price:24}
   ,{name:"Runed Copper Rod",price:24}
   ,{name:"Arclight Spanner",price:144}
   ,{name:"Meteor Shard",price:1960}
   ,{name:"Crest of Darkshire",price:4797}
   ,{name:"Bloody Apron",price:1439}
   ,{name:"Brown Linen Robe",price:172}
   ,{name:"Red Linen Vest",price:281}
   ,{name:"Blue Linen Vest",price:282}
   ,{name:"White Linen Robe",price:174}
   ,{name:"Blue Linen Robe",price:425}
   ,{name:"Green Woolen Robe",price:780}
   ,{name:"Karnitol's Satchel",price:1}
   ,{name:"Hatefury Claw",price:1}
   ,{name:"Hatefury Horn",price:1}
   ,{name:"Scorpashi Venom",price:1}
   ,{name:"Aged Kodo Hide",price:1}
   ,{name:"Felhound Brain",price:1}
   ,{name:"Nether Wing",price:1}
   ,{name:"Doomwarder Blood",price:1}
   ,{name:"Leftwitch's Package",price:1}
   ,{name:"Fishing Pole",price:4}
   ,{name:"Roc Gizzard",price:1}
   ,{name:"Ironfur Liver",price:1}
   ,{name:"Groddoc Liver",price:1}
   ,{name:"Blue Dye",price:12}
   ,{name:"Orange Dye",price:250}
   ,{name:"Galen's Journal",price:1}
   ,{name:"Blue Overalls",price:1031}
   ,{name:"Greater Adept's Robe",price:1547}
   ,{name:"Disciple's Vest",price:360}
   ,{name:"Disciple's Pants",price:261}
   ,{name:"Pioneer Tunic",price:328}
   ,{name:"Pioneer Trousers",price:270}
   ,{name:"Pattern: Blue Linen Vest",price:50}
   ,{name:"Pattern: Red Linen Vest",price:50}
   ,{name:"Pattern: Blue Linen Robe",price:75}
   ,{name:"Pattern: Green Woolen Robe",price:187}
   ,{name:"Pattern: Blue Overalls",price:100}
   ,{name:"Pattern: Greater Adept's Robe",price:200}
   ,{name:"Musty Note",price:1}
   ,{name:"Musty Parchment",price:1}
   ,{name:"Musty Scroll",price:1}
   ,{name:"Musty Letter",price:1}
   ,{name:"Musty Missive",price:1}
   ,{name:"Rattlecage Skull",price:1}
   ,{name:"Sacred Burial Trousers",price:3927}
   ,{name:"The Book of Ur",price:1}
   ,{name:"Runes of Summoning",price:1}
   ,{name:"Egalin's Grimoire",price:1}
   ,{name:"Pure Hearts",price:1}
   ,{name:"Atal'ai Tablet Fragment",price:1}
   ,{name:"Atal'ai Tablet",price:1}
   ,{name:"Raw Longjaw Mud Snapper",price:1}
   ,{name:"Brilliant Smallfish",price:1}
   ,{name:"Raw Brilliant Smallfish",price:1}
   ,{name:"10 Pound Mud Snapper",price:8}
   ,{name:"12 Pound Mud Snapper",price:10}
   ,{name:"15 Pound Mud Snapper",price:12}
   ,{name:"Sickly Looking Fish",price:1}
   ,{name:"Raw Slitherskin Mackerel",price:1}
   ,{name:"Message in a Bottle",price:1}
   ,{name:"Raw Bristle Whisker Catfish",price:2}
   ,{name:"17 Pound Catfish",price:100}
   ,{name:"19 Pound Catfish",price:150}
   ,{name:"22 Pound Catfish",price:187}
   ,{name:"Dalin's Heart",price:1}
   ,{name:"Comar's Heart",price:1}
   ,{name:"Wolfmaster Cape",price:1031}
   ,{name:"Steelarrow Crossbow",price:2546}
   ,{name:"Loch Frenzy Delight",price:3}
   ,{name:"Raw Loch Frenzy",price:2}
   ,{name:"Odo's Ley Staff",price:2561}
   ,{name:"Girdle of the Blindwatcher",price:723}
   ,{name:"Commander's Crest",price:1194}
   ,{name:"Silverlaine's Family Seal",price:1650}
   ,{name:"Baron's Scepter",price:1888}
   ,{name:"Robes of Arugal",price:1327}
   ,{name:"Recipe: Brilliant Smallfish",price:10}
   ,{name:"Recipe: Slitherskin Mackerel",price:10}
   ,{name:"The Pacifier",price:12823}
   ,{name:"Recipe: Longjaw Mud Snapper",price:100}
   ,{name:"Recipe: Loch Frenzy Delight",price:100}
   ,{name:"Recipe: Bristle Whisker Catfish",price:300}
   ,{name:"Howling Blade",price:9466}
   ,{name:"Black Pearl Ring",price:1153}
   ,{name:"Spikelash Dagger",price:1928}
   ,{name:"Grizzled Boots",price:2209}
   ,{name:"Infantry Tunic",price:356}
   ,{name:"Infantry Leggings",price:286}
   ,{name:"Runed Silver Rod",price:1}
   ,{name:"Fenrus' Hide",price:2200}
   ,{name:"Eerie Stable Lantern",price:666}
   ,{name:"Formula: Enchant Chest - Minor Mana",price:75}
   ,{name:"Formula: Enchant Bracer - Minor Spirit",price:100}
   ,{name:"Formula: Enchant Chest - Lesser Mana",price:100}
   ,{name:"Formula: Enchant Bracer - Minor Strength",price:100}
   ,{name:"Formula: Enchant Weapon - Minor Beastslayer",price:125}
   ,{name:"Formula: Enchant 2H Weapon - Lesser Intellect",price:125}
   ,{name:"Rough Bronze Boots",price:571}
   ,{name:"Dented Crate",price:1}
   ,{name:"Waterlogged Crate",price:1}
   ,{name:"Small Chest",price:1}
   ,{name:"Small Locked Chest",price:1}
   ,{name:"Sturdy Locked Chest",price:1}
   ,{name:"Battered Chest",price:1}
   ,{name:"Sealed Crate",price:1}
   ,{name:"Oily Blackmouth",price:4}
   ,{name:"Firefin Snapper",price:5}
   ,{name:"Steelscale Crushfish",price:2581}
   ,{name:"Raw Rainbow Fin Albacore",price:2}
   ,{name:"Raw Rockscale Cod",price:4}
   ,{name:"26 Pound Catfish",price:250}
   ,{name:"32 Pound Catfish",price:375}
   ,{name:"Strong Fishing Pole",price:180}
   ,{name:"Darkwood Fishing Pole",price:1066}
   ,{name:"Big Iron Fishing Pole",price:3378}
   ,{name:"Recipe: Rainbow Fin Albacore",price:100}
   ,{name:"Recipe: Rockscale Cod",price:550}
   ,{name:"Blackmouth Oil",price:10}
   ,{name:"Fire Oil",price:12}
   ,{name:"Swim Speed Potion",price:35}
   ,{name:"Elixir of Firepower",price:35}
   ,{name:"Enchanted Powder",price:125}
   ,{name:"Formula: Enchant Bracer - Lesser Spirit",price:250}
   ,{name:"Formula: Enchant Boots - Minor Agility",price:250}
   ,{name:"Seer's Cape",price:511}
   ,{name:"Inscribed Leather Belt",price:344}
   ,{name:"Inscribed Buckler",price:654}
   ,{name:"Bright Cloak",price:1092}
   ,{name:"Forest Leather Belt",price:736}
   ,{name:"Forest Buckler",price:1519}
   ,{name:"Stylish Blue Shirt",price:250}
   ,{name:"Stylish Green Shirt",price:250}
   ,{name:"Glimmering Mail Legguards",price:3141}
   ,{name:"Glimmering Mail Bracers",price:1441}
   ,{name:"Glimmering Mail Pauldrons",price:2369}
   ,{name:"Glimmering Mail Coif",price:2615}
   ,{name:"Pattern: Stylish Blue Shirt",price:150}
   ,{name:"Pattern: Stylish Green Shirt",price:150}
   ,{name:"Belt of Arugal",price:705}
   ,{name:"Silver-Thread Gloves",price:1339}
   ,{name:"Silver-Thread Boots",price:1818}
   ,{name:"Silver-Thread Amice",price:2208}
   ,{name:"Emblazoned Chestpiece",price:3940}
   ,{name:"Emblazoned Gloves",price:1388}
   ,{name:"Emblazoned Belt",price:1393}
   ,{name:"Emblazoned Shoulders",price:2290}
   ,{name:"Glimmering Shield",price:3089}
   ,{name:"Pattern: Dark Silk Shirt",price:275}
   ,{name:"Mail Combat Leggings",price:5482}
   ,{name:"Mail Combat Armguards",price:2079}
   ,{name:"Mail Combat Spaulders",price:3758}
   ,{name:"Nightsky Trousers",price:5543}
   ,{name:"Nightsky Boots",price:3442}
   ,{name:"Nightsky Wristbands",price:2110}
   ,{name:"Insignia Gloves",price:2329}
   ,{name:"Insignia Belt",price:2337}
   ,{name:"Insignia Bracers",price:2133}
   ,{name:"Chief Brigadier Armor",price:8480}
   ,{name:"Chief Brigadier Boots",price:5462}
   ,{name:"Chief Brigadier Bracers",price:2930}
   ,{name:"Seal of Sylvanas",price:2055}
   ,{name:"Aurora Robe",price:7989}
   ,{name:"Aurora Boots",price:4765}
   ,{name:"Aurora Cloak",price:4429}
   ,{name:"Aurora Sash",price:2987}
   ,{name:"Glyphed Mitts",price:3238}
   ,{name:"Glyphed Boots",price:5225}
   ,{name:"Glyphed Belt",price:3262}
   ,{name:"Glyphed Helm",price:5265}
   ,{name:"Blackforge Greaves",price:8386}
   ,{name:"Blackforge Cape",price:6681}
   ,{name:"Blackforge Girdle",price:5255}
   ,{name:"Blackforge Bracers",price:4884}
   ,{name:"Mistscape Robe",price:12278}
   ,{name:"Mistscape Gloves",price:4919}
   ,{name:"Mistscape Wizard Hat",price:7938}
   ,{name:"Imperial Leather Breastplate",price:12738}
   ,{name:"Imperial Leather Boots",price:7596}
   ,{name:"Imperial Cloak",price:6536}
   ,{name:"Imperial Leather Helm",price:6921}
   ,{name:"Infused Burning Gem",price:1}
   ,{name:"Burning Gem",price:1}
   ,{name:"Brainlash",price:15812}
   ,{name:"Shadowstalker Scalp",price:1}
   ,{name:"Oracle Crystal",price:1}
   ,{name:"Deviate Hide",price:1}
   ,{name:"Snakeskin Bag",price:532}
   ,{name:"Worn Turtle Shell Shield",price:1292}
   ,{name:"Tail Spike",price:2027}
   ,{name:"Glowing Lizardscale Cloak",price:1226}
   ,{name:"Silk Bandage",price:170}
   ,{name:"Heavy Silk Bandage",price:400}
   ,{name:"Anti-Venom",price:28}
   ,{name:"Strong Anti-Venom",price:62}
   ,{name:"Manual: Strong Anti-Venom",price:225}
   ,{name:"Oil Covered Fish",price:1}
   ,{name:"Savage Trodders",price:1000}
   ,{name:"Cobrahn's Grasp",price:674}
   ,{name:"Slime-Encrusted Pads",price:1008}
   ,{name:"Secure Crate",price:1}
   ,{name:"Deep Fathom Ring",price:1527}
   ,{name:"Wailing Essence",price:1}
   ,{name:"Robe of the Moccasin",price:1403}
   ,{name:"Deviate Scale Cloak",price:577}
   ,{name:"Deviate Scale Gloves",price:592}
   ,{name:"Deviate Scale Belt",price:713}
   ,{name:"Venomstrike",price:1525}
   ,{name:"Deviate Scale",price:20}
   ,{name:"Perfect Deviate Scale",price:500}
   ,{name:"Stinging Viper",price:2055}
   ,{name:"Armor of the Fang",price:1306}
   ,{name:"Pattern: Deviate Scale Cloak",price:137}
   ,{name:"Pattern: Deviate Scale Gloves",price:375}
   ,{name:"Pattern: Deviate Scale Belt",price:500}
   ,{name:"Grassland Sash",price:483}
   ,{name:"Rat Stompers",price:1109}
   ,{name:"Malem Pendant",price:1}
   ,{name:"Slick Deviate Leggings",price:998}
   ,{name:"Dagmire Gauntlets",price:753}
   ,{name:"Firewalker Boots",price:1272}
   ,{name:"Singed Scale",price:1}
   ,{name:"Vile Familiar Head",price:1}
   ,{name:"Simple Tablet",price:1}
   ,{name:"Weatherworn Parchment",price:1}
   ,{name:"Dark Parchment",price:1}
   ,{name:"Heavy Parchment",price:1}
   ,{name:"Sooty Parchment",price:1}
   ,{name:"Tattered Parchment",price:1}
   ,{name:"Scrawled Parchment",price:1}
   ,{name:"Weatherbeaten Parchment",price:1}
   ,{name:"Detailed Parchment",price:1}
   ,{name:"Inscribed Kodo Leather",price:1}
   ,{name:"Inscribed Kodo Leather",price:1}
   ,{name:"Inscribed Kodo Leather",price:1}
   ,{name:"Inscribed Kodo Leather",price:1}
   ,{name:"Violet Scale Armor",price:1330}
   ,{name:"Harlequin Robes",price:1335}
   ,{name:"Wingblade",price:2933}
   ,{name:"Crescent Staff",price:3680}
   ,{name:"Infantry Boots",price:101}
   ,{name:"Infantry Bracers",price:52}
   ,{name:"Infantry Cloak",price:60}
   ,{name:"Infantry Belt",price:52}
   ,{name:"Infantry Gauntlets",price:64}
   ,{name:"Journeyman's Robe",price:213}
   ,{name:"Disciple's Robe",price:334}
   ,{name:"Disciple's Sash",price:49}
   ,{name:"Disciple's Cloak",price:74}
   ,{name:"Disciple's Gloves",price:65}
   ,{name:"Imp Summoning Scroll",price:1}
   ,{name:"Pioneer Belt",price:50}
   ,{name:"Pioneer Boots",price:98}
   ,{name:"Pioneer Bracers",price:51}
   ,{name:"Pioneer Cloak",price:58}
   ,{name:"Pioneer Gloves",price:66}
   ,{name:"Deviate Fish",price:4}
   ,{name:"Buckled Harness",price:398}
   ,{name:"Studded Leather Harness",price:803}
   ,{name:"Grunt's Harness",price:1447}
   ,{name:"Battle Harness",price:3496}
   ,{name:"Ancestral Robe",price:328}
   ,{name:"Spellbinder Robe",price:627}
   ,{name:"Shiny Bauble",price:12}
   ,{name:"Nightcrawlers",price:25}
   ,{name:"Barbaric Cloth Robe",price:729}
   ,{name:"Bright Baubles",price:62}
   ,{name:"Aquadynamic Fish Attractor",price:62}
   ,{name:"Forged Steel Bars",price:1}
   ,{name:"Tablet of Verga",price:1}
   ,{name:"Willow Vest",price:855}
   ,{name:"Willow Boots",price:367}
   ,{name:"Willow Robe",price:862}
   ,{name:"Willow Belt",price:286}
   ,{name:"Willow Pants",price:754}
   ,{name:"Willow Gloves",price:288}
   ,{name:"Willow Cape",price:384}
   ,{name:"Willow Bracers",price:258}
   ,{name:"Voidwalker Summoning Scroll",price:1}
   ,{name:"Soldier's Armor",price:788}
   ,{name:"Soldier's Leggings",price:622}
   ,{name:"Soldier's Gauntlets",price:314}
   ,{name:"Soldier's Girdle",price:274}
   ,{name:"Soldier's Cloak",price:178}
   ,{name:"Soldier's Wristguards",price:240}
   ,{name:"Soldier's Boots",price:475}
   ,{name:"Bard's Tunic",price:842}
   ,{name:"Bard's Trousers",price:735}
   ,{name:"Bard's Gloves",price:322}
   ,{name:"Bard's Cloak",price:182}
   ,{name:"Bard's Bracers",price:245}
   ,{name:"Bard's Boots",price:422}
   ,{name:"Bard's Belt",price:254}
   ,{name:"Bard's Buckler",price:533}
   ,{name:"Soldier's Shield",price:616}
   ,{name:"Seer's Padded Armor",price:1182}
   ,{name:"Shimmering Boots",price:888}
   ,{name:"Shimmering Bracers",price:520}
   ,{name:"Shimmering Cloak",price:894}
   ,{name:"Shimmering Gloves",price:693}
   ,{name:"Shimmering Amice",price:718}
   ,{name:"Shimmering Armor",price:1813}
   ,{name:"Shimmering Trousers",price:1611}
   ,{name:"Shimmering Robe",price:1827}
   ,{name:"Shimmering Sash",price:639}
   ,{name:"Scouting Buckler",price:1167}
   ,{name:"Defender Shield",price:1323}
   ,{name:"Defender Boots",price:1087}
   ,{name:"Defender Bracers",price:666}
   ,{name:"Defender Cloak",price:753}
   ,{name:"Defender Girdle",price:671}
   ,{name:"Defender Gauntlets",price:761}
   ,{name:"Defender Leggings",price:1520}
   ,{name:"Defender Spaulders",price:774}
   ,{name:"Defender Tunic",price:1531}
   ,{name:"Scouting Belt",price:594}
   ,{name:"Scouting Boots",price:1021}
   ,{name:"Scouting Bracers",price:598}
   ,{name:"Scouting Tunic",price:1982}
   ,{name:"Scouting Cloak",price:780}
   ,{name:"Scouting Gloves",price:711}
   ,{name:"Scouting Trousers",price:1605}
   ,{name:"Scouting Spaulders",price:640}
   ,{name:"Battleforge Boots",price:2122}
   ,{name:"Battleforge Wristguards",price:1182}
   ,{name:"Battleforge Armor",price:2856}
   ,{name:"Battleforge Cloak",price:1612}
   ,{name:"Battleforge Girdle",price:1315}
   ,{name:"Battleforge Gauntlets",price:1320}
   ,{name:"Battleforge Legguards",price:2634}
   ,{name:"Battleforge Shoulderguards",price:1979}
   ,{name:"Dervish Buckler",price:2426}
   ,{name:"Battleforge Shield",price:2678}
   ,{name:"Dervish Belt",price:1221}
   ,{name:"Dervish Boots",price:2007}
   ,{name:"Dervish Bracers",price:1230}
   ,{name:"Dervish Tunic",price:3269}
   ,{name:"Dervish Cape",price:1677}
   ,{name:"Dervish Gloves",price:1368}
   ,{name:"Dervish Leggings",price:3083}
   ,{name:"Bright Armor",price:2325}
   ,{name:"Sage's Cloth",price:3759}
   ,{name:"Sage's Robe",price:3773}
   ,{name:"Sage's Sash",price:1430}
   ,{name:"Sage's Boots",price:1943}
   ,{name:"Sage's Bracers",price:1310}
   ,{name:"Sage's Cloak",price:1957}
   ,{name:"Sage's Gloves",price:1451}
   ,{name:"Sage's Pants",price:3857}
   ,{name:"Sage's Mantle",price:2395}
   ,{name:"Elaborate Parchment",price:1}
   ,{name:"Sword of Zeal",price:49863}
   ,{name:"Succubus Summoning Scroll",price:1}
   ,{name:"Ken'zigla's Draught",price:1}
   ,{name:"Dirt-Caked Pendant",price:1}
   ,{name:"Dogran's Pendant",price:1}
   ,{name:"Mutant Scale Breastplate",price:1347}
   ,{name:"Raven's Claws",price:651}
   ,{name:"Sporid Cape",price:1320}
   ,{name:"Seedcloud Buckler",price:1245}
   ,{name:"Living Root",price:2442}
   ,{name:"Feyscale Cloak",price:893}
   ,{name:"Butcher's Slicer",price:1968}
   ,{name:"Ritual Salve",price:1}
   ,{name:"Earth Sapta",price:1}
   ,{name:"Fire Sapta",price:1}
   ,{name:"Water Sapta",price:1}
   ,{name:"Air Sapta",price:1}
   ,{name:"Felstalker Hoof",price:1}
   ,{name:"Haunting Blade",price:2352}
   ,{name:"Phantom Armor",price:1322}
   ,{name:"Bloated Smallfish",price:6}
   ,{name:"Bloated Mud Snapper",price:25}
   ,{name:"Bloated Catfish",price:40}
   ,{name:"Stoneskin Totem Scroll",price:1}
   ,{name:"Searing Totem Scroll",price:1}
   ,{name:"Healing Stream Totem Scroll",price:1}
   ,{name:"Broken Wine Bottle",price:234}
   ,{name:"Reagent Pouch",price:1}
   ,{name:"Torch of the Dormant Flame",price:1}
   ,{name:"Torch of the Eternal Flame",price:1}
   ,{name:"Glowing Ember",price:1}
   ,{name:"Rough Quartz",price:1}
   ,{name:"Savory Deviate Delight",price:5}
   ,{name:"Example Collar",price:1}
   ,{name:"Scarab Trousers",price:947}
   ,{name:"Julie's Dagger",price:36157}
   ,{name:"Recipe: Savory Deviate Delight",price:115}
   ,{name:"Elixir of Giant Growth",price:95}
   ,{name:"Recipe: Elixir of Giant Growth",price:150}
   ,{name:"Voodoo Mantle",price:1558}
   ,{name:"Hexed Bracers",price:1050}
   ,{name:"Dredge Boots",price:963}
   ,{name:"Engineer's Cloak",price:1733}
   ,{name:"Draftsman Boots",price:1740}
   ,{name:"Sacred Band",price:1378}
   ,{name:"Panther Armor",price:2341}
   ,{name:"Juggernaut Leggings",price:2413}
   ,{name:"Schematic: Flash Bomb",price:500}
   ,{name:"Tempered Bracers",price:1230}
   ,{name:"Constable Buckler",price:2245}
   ,{name:"Spellcrafter Wand",price:2401}
   ,{name:"Band of Elven Grace",price:677}
   ,{name:"Armor Piercer",price:10317}
   ,{name:"Thornspike",price:8317}
   ,{name:"Death Speaker Robes",price:5845}
   ,{name:"Snufflenose Command Stick",price:1}
   ,{name:"Death Speaker Mantle",price:4425}
   ,{name:"Tusken Helm",price:4442}
   ,{name:"Corpsemaker",price:10923}
   ,{name:"Whisperwind Headdress",price:4596}
   ,{name:"Wind Spirit Staff",price:11004}
   ,{name:"Ferine Leggings",price:6184}
   ,{name:"Swinetusk Shank",price:8866}
   ,{name:"Pronged Reaver",price:8898}
   ,{name:"Agamaggan's Clutch",price:1816}
   ,{name:"Heart of Agamaggan",price:5735}
   ,{name:"Stygian Bone Amulet",price:3002}
   ,{name:"Nightstalker Bow",price:6769}
   ,{name:"Batwing Mantle",price:4746}
   ,{name:"Moonglow Vest",price:763}
   ,{name:"Pattern: Moonglow Vest",price:137}
   ,{name:"Clockwork Box",price:175}
   ,{name:"Ripped Pants",price:18}
   ,{name:"Ez-Thro Dynamite",price:75}
   ,{name:"Ruined Jumper Cables",price:21}
   ,{name:"Schematic: EZ-Thro Dynamite",price:200}
   ,{name:"Gaffer Jack",price:1}
   ,{name:"Electropeller",price:1}
   ,{name:"Windborne Belt",price:1544}
   ,{name:"Spirit Hunter Headdress",price:4498}
   ,{name:"Chestplate of Kor",price:1655}
   ,{name:"Beastial Manacles",price:1562}
   ,{name:"Medal of Courage",price:8155}
   ,{name:"Marbled Buckler",price:5550}
   ,{name:"Razzeric's Customized Seatbelt",price:4203}
   ,{name:"Razzeric's Racing Grips",price:4219}
   ,{name:"Fizzle's Zippy Lighter",price:7188}
   ,{name:"Ironforge Chain",price:579}
   ,{name:"Ironforge Breastplate",price:1017}
   ,{name:"Gnomish Mechanic's Gloves",price:3410}
   ,{name:"Ironforge Gauntlets",price:1343}
   ,{name:"Plans: Ironforge Chain",price:62}
   ,{name:"Plans: Ironforge Breastplate",price:150}
   ,{name:"Plans: Ironforge Gauntlets",price:450}
   ,{name:"Dryleaf Pants",price:4910}
   ,{name:"Bleeding Crescent",price:7040}
   ,{name:"Cliffrunner's Aim",price:2991}
   ,{name:"Azure Sash",price:1409}
   ,{name:"Orcish War Sword",price:3014}
   ,{name:"Stonefist Girdle",price:3019}
   ,{name:"Sustaining Ring",price:1462}
   ,{name:"Gloves of Kapelan",price:2094}
   ,{name:"Swiftrunner Cape",price:3129}
   ,{name:"Basalt Buckler",price:7075}
   ,{name:"Enforcer Pauldrons",price:5814}
   ,{name:"Monkey Ring",price:897}
   ,{name:"Tiger Band",price:897}
   ,{name:"Snake Hoop",price:897}
   ,{name:"Mourning Shawl",price:4765}
   ,{name:"Lancer Boots",price:4326}
   ,{name:"Feather Charm",price:1}
   ,{name:"A Small Container of Gems",price:1}
   ,{name:"Jewelry Box",price:1375}
   ,{name:"Jaina's Signet Ring",price:4630}
   ,{name:"Flayed Demon Skin (old2)",price:1}
   ,{name:"Tyranis' Pendant",price:1}
   ,{name:"Gelkis Marauder Chain",price:8594}
   ,{name:"Uthek's Finger",price:2885}
   ,{name:"Tome of Divinity",price:1}
   ,{name:"Tome of Valor",price:1}
   ,{name:"Tome of Righteousness",price:1}
   ,{name:"Tome of Justice",price:1}
   ,{name:"Tome of Nobility",price:1}
   ,{name:"Lilac Sash",price:2745}
   ,{name:"Bartleby's Mug",price:1}
   ,{name:"Marshal Haggard's Badge",price:1}
   ,{name:"Dead-Tooth's Key",price:1}
   ,{name:"Braced Handguards",price:2861}
   ,{name:"Powers of the Void",price:1}
   ,{name:"Simple Dress",price:2}
   ,{name:"White Woolen Dress",price:2}
   ,{name:"Magram Hunter's Belt",price:4691}
   ,{name:"Ceremonial Centaur Blanket",price:7008}
   ,{name:"Ring of Calm",price:1540}
   ,{name:"Hellion Boots",price:6051}
   ,{name:"Sanguine Pauldrons",price:5493}
   ,{name:"Auric Bracers",price:3704}
   ,{name:"Stormfire Gauntlets",price:3719}
   ,{name:"White Swashbuckler's Shirt",price:500}
   ,{name:"Red Swashbuckler's Shirt",price:750}
   ,{name:"Eyepoker",price:6362}
   ,{name:"Blasting Hackbut",price:6386}
   ,{name:"Vejrek's Head",price:1}
   ,{name:"Umbral Ore",price:1}
   ,{name:"Baroque Apron",price:7798}
   ,{name:"Sword of Omen",price:18255}
   ,{name:"Prophetic Cane",price:4885}
   ,{name:"Windstorm Hammer",price:8060}
   ,{name:"Horn of Vorlus",price:1}
   ,{name:"Dancing Flame",price:10209}
   ,{name:"Frog Leg Stew",price:62}
   ,{name:"Elunite Ore",price:1}
   ,{name:"Elura's Medallion",price:1}
   ,{name:"Surena's Choker",price:1}
   ,{name:"Aquadynamic Fish Lens",price:25}
   ,{name:"Case of Elunite",price:1}
   ,{name:"Box of Supplies",price:150}
   ,{name:"Visionary Buckler",price:6268}
   ,{name:"Sword of Serenity",price:18714}
   ,{name:"Bonebiter",price:23476}
   ,{name:"Black Menace",price:17522}
   ,{name:"Cloak of Blight",price:6584}
   ,{name:"White Tuxedo Shirt",price:1}
   ,{name:"Black Tuxedo",price:2}
   ,{name:"Black Tuxedo Pants",price:1}
   ,{name:"Dress Shoes",price:1}
   ,{name:"Scorched Spider Fang",price:1}
   ,{name:"Charred Horn",price:1}
   ,{name:"Galvanized Horn",price:1}
   ,{name:"Vial of Phlogiston",price:1}
   ,{name:"Furen's Instructions",price:1}
   ,{name:"Cask of Scalder",price:1}
   ,{name:"Burning Blood",price:1}
   ,{name:"Burning Rock",price:1}
   ,{name:"Defias Script",price:1}
   ,{name:"Dark Iron Script",price:1}
   ,{name:"Searing Coral",price:1}
   ,{name:"Sunscorched Shell",price:1}
   ,{name:"Bloodscalp Scalp",price:1}
   ,{name:"Essence of the Exile",price:1}
   ,{name:"Eternal Eye",price:1}
   ,{name:"Symbol of Life",price:1}
   ,{name:"Spotted Yellowtail",price:5}
   ,{name:"Herb Baked Egg",price:10}
   ,{name:"Small Egg",price:4}
   ,{name:"Smoked Bear Meat",price:6}
   ,{name:"Recipe: Herb Baked Egg",price:6}
   ,{name:"Recipe: Smoked Bear Meat",price:62}
   ,{name:"Whirlwind Heart",price:1}
   ,{name:"Jordan's Smithing Hammer",price:1}
   ,{name:"Orb of Soran'ruk",price:4132}
   ,{name:"Enchanted Gold Bloodrobe",price:8199}
   ,{name:"Glowing Thresher Cape",price:2660}
   ,{name:"Bands of Serra'kis",price:1192}
   ,{name:"Gaze Dreamer Pants",price:2379}
   ,{name:"Bite of Serra'kis",price:3412}
   ,{name:"Reef Axe",price:3872}
   ,{name:"Algae Fists",price:1094}
   ,{name:"Tortoise Armor",price:2185}
   ,{name:"Ghamoo-Ra's Bind",price:1102}
   ,{name:"Strike of the Hydra",price:3931}
   ,{name:"Leech Pants",price:2210}
   ,{name:"Moss Cinch",price:1115}
   ,{name:"Heartswood",price:1}
   ,{name:"Heartswood Core",price:1}
   ,{name:"Soran'ruk Fragment",price:1}
   ,{name:"Large Soran'ruk Fragment",price:1}
   ,{name:"Tome of Divinity",price:1}
   ,{name:"Furen's Notes",price:1}
   ,{name:"Big Will's Ear",price:1}
   ,{name:"Bloodstone Choker",price:1}
   ,{name:"Bath'rah's Parchment",price:1}
   ,{name:"Rod of Channeling",price:1}
   ,{name:"Moldy Tome",price:1}
   ,{name:"Hearthstone",price:1}
   ,{name:"Thick Bear Fur",price:1}
   ,{name:"Verigan's Fist",price:7459}
   ,{name:"Elunite Axe",price:693}
   ,{name:"Elunite Sword",price:696}
   ,{name:"Elunite Hammer",price:698}
   ,{name:"Elunite Dagger",price:701}
   ,{name:"Furen's Favor",price:906}
   ,{name:"Fire Hardened Coif",price:2586}
   ,{name:"Fire Hardened Hauberk",price:3783}
   ,{name:"Fire Hardened Leggings",price:2876}
   ,{name:"Fire Hardened Gauntlets",price:1756}
   ,{name:"Whirlwind Axe",price:16766}
   ,{name:"Whirlwind Warhammer",price:17264}
   ,{name:"Whirlwind Sword",price:17325}
   ,{name:"Umbral Axe",price:672}
   ,{name:"Haggard's Axe",price:675}
   ,{name:"Haggard's Dagger",price:677}
   ,{name:"Umbral Dagger",price:680}
   ,{name:"Umbral Mace",price:683}
   ,{name:"Haggard's Hammer",price:685}
   ,{name:"Umbral Sword",price:688}
   ,{name:"Haggard's Sword",price:691}
   ,{name:"Felhunter Summoning Scroll",price:1}
   ,{name:"Vial of Hatefury Blood",price:1}
   ,{name:"Lesser Infernal Stone",price:1}
   ,{name:"Smoldering Coal",price:1}
   ,{name:"Jordan's Ore Shipment",price:1}
   ,{name:"Jordan's Refined Ore Shipment",price:1}
   ,{name:"Whitestone Oak Lumber",price:1}
   ,{name:"Corrupted Kor Gem",price:1}
   ,{name:"Jordan's Weapon Notes",price:1}
   ,{name:"Tattered Manuscript",price:1}
   ,{name:"Nimbus Boots",price:1352}
   ,{name:"Tome of the Cabal",price:1}
   ,{name:"Heartwood Girdle",price:915}
   ,{name:"Gravestone Scepter",price:3535}
   ,{name:"Arctic Buckler",price:3028}
   ,{name:"Beetle Clasps",price:1151}
   ,{name:"Prelacy Cape",price:1720}
   ,{name:"Skinning Knife",price:16}
   ,{name:"Reconstructed Tome",price:1}
   ,{name:"Linen Belt",price:39}
   ,{name:"Boots of Darkness",price:1965}
   ,{name:"Azure Silk Pants",price:2615}
   ,{name:"Hands of Darkness",price:1452}
   ,{name:"Azure Silk Hood",price:2169}
   ,{name:"Truefaith Gloves",price:1609}
   ,{name:"Silk Headband",price:2908}
   ,{name:"Earthen Vest",price:4718}
   ,{name:"Azure Silk Belt",price:2619}
   ,{name:"Azure Silk Cloak",price:3913}
   ,{name:"Robe of Power",price:8226}
   ,{name:"Crimson Silk Belt",price:2647}
   ,{name:"Crimson Silk Cloak",price:4043}
   ,{name:"Green Silken Shoulders",price:4058}
   ,{name:"Crimson Silk Vest",price:4948}
   ,{name:"Crimson Silk Shoulders",price:4857}
   ,{name:"Azure Shoulders",price:4876}
   ,{name:"Earthen Silk Belt",price:3551}
   ,{name:"Crimson Silk Pantaloons",price:7088}
   ,{name:"Crimson Silk Robe",price:8297}
   ,{name:"Crimson Silk Gloves",price:4523}
   ,{name:"Green Silk Armor",price:4196}
   ,{name:"Elemental Earth",price:400}
   ,{name:"Elemental Fire",price:400}
   ,{name:"Elemental Air",price:400}
   ,{name:"Elemental Water",price:400}
   ,{name:"Iron Buckle",price:100}
   ,{name:"Naga Scale",price:150}
   ,{name:"Core of Earth",price:400}
   ,{name:"Essence of Earth",price:400}
   ,{name:"Heart of Fire",price:400}
   ,{name:"Essence of Fire",price:400}
   ,{name:"Globe of Water",price:400}
   ,{name:"Essence of Water",price:400}
   ,{name:"Breath of Wind",price:400}
   ,{name:"Essence of Air",price:400}
   ,{name:"Purified Kor Gem",price:1}
   ,{name:"Pattern: Crimson Silk Shoulders",price:350}
   ,{name:"Pattern: Azure Shoulders",price:350}
   ,{name:"Pattern: Earthen Silk Belt",price:375}
   ,{name:"Pattern: Crimson Silk Cloak",price:300}
   ,{name:"Pattern: Crimson Silk Robe",price:1250}
   ,{name:"Pattern: Azure Silk Cloak",price:375}
   ,{name:"Pattern: Green Silk Armor",price:250}
   ,{name:"Pattern: Truefaith Gloves",price:250}
   ,{name:"Pattern: Hands of Darkness",price:250}
   ,{name:"Pattern: Boots of Darkness",price:200}
   ,{name:"Driftwood Branch",price:174}
   ,{name:"Bog Boots",price:56}
   ,{name:"Leg Meat",price:1}
   ,{name:"Zodiac Gloves",price:2173}
   ,{name:"Belt of the Stars",price:2181}
   ,{name:"Infantry Shield",price:209}
   ,{name:"Pioneer Buckler",price:74}
   ,{name:"Silver-Thread Armor",price:3622}
   ,{name:"Nightsky Armor",price:5827}
   ,{name:"Aurora Armor",price:7957}
   ,{name:"Mistscape Armor",price:11737}
   ,{name:"Pattern: Azure Silk Gloves",price:250}
   ,{name:"Heirloom Axe",price:683}
   ,{name:"Heirloom Dagger",price:685}
   ,{name:"Heirloom Hammer",price:688}
   ,{name:"Heirloom Sword",price:690}
   ,{name:"Twitching Antenna",price:1}
   ,{name:"Ruga's Bulwark",price:896}
   ,{name:"Smoky Iron Ingot",price:1}
   ,{name:"Powdered Azurite",price:1}
   ,{name:"Uncloven Satyr Hoof",price:1}
   ,{name:"Brutal Gauntlets",price:1814}
   ,{name:"Brutal Helm",price:2711}
   ,{name:"Dragonmaw Shinbone",price:1}
   ,{name:"Brutal Legguards",price:2728}
   ,{name:"Brutal Hauberk",price:3615}
   ,{name:"Sturdy Dragonmaw Shinbone",price:1}
   ,{name:"Goblin Jumper Cables",price:21}
   ,{name:"Copper Dagger",price:194}
   ,{name:"VanCleef's Boots",price:860}
   ,{name:"Stormwind Guard Shield",price:1055}
   ,{name:"Goblin Rocket Boots",price:8231}
   ,{name:"Fused Wiring",price:1}
   ,{name:"Mirror Lake Water Sample",price:1}
   ,{name:"Jennea's Flask",price:1}
   ,{name:"Tazan's Key",price:1}
   ,{name:"Tazan's Satchel",price:1}
   ,{name:"Mage-Tastic Gizmonitor",price:1}
   ,{name:"Balnir Snapdragons",price:1}
   ,{name:"Tigule and Foror's Strawberry Ice Cream",price:25}
   ,{name:"Explorer's Vest",price:333}
   ,{name:"Smite's Mighty Hammer",price:2076}
   ,{name:"Astor's Letter of Introduction",price:1}
   ,{name:"Chest of Containment Coffers",price:1}
   ,{name:"Charged Rift Gem",price:1}
   ,{name:"Ur's Treatise on Shadow Magic",price:1}
   ,{name:"Pristine Spider Silk",price:1}
   ,{name:"Xavian Water Sample",price:1}
   ,{name:"Deino's Flask",price:1}
   ,{name:"Laughing Sister's Hair",price:1}
   ,{name:"Flawless Ivory Tusk",price:1}
   ,{name:"Bolt Charged Bramble",price:1}
   ,{name:"Witherbark Totem Stick",price:1}
   ,{name:"Rituals of Power",price:1}
   ,{name:"The Agamaggan Scrolls",price:1}
   ,{name:"Handstitched Leather Cloak",price:59}
   ,{name:"Handstitched Leather Bracers",price:40}
   ,{name:"Light Leather Quiver",price:25}
   ,{name:"Small Leather Ammo Pouch",price:25}
   ,{name:"Rugged Leather Pants",price:227}
   ,{name:"Light Leather Bracers",price:200}
   ,{name:"Light Leather Pants",price:839}
   ,{name:"Black Whelp Cloak",price:725}
   ,{name:"Red Whelp Gloves",price:826}
   ,{name:"Nimble Leather Gloves",price:829}
   ,{name:"Black Whelp Scale",price:25}
   ,{name:"Pattern: Rugged Leather Pants",price:125}
   ,{name:"Pattern: Black Whelp Cloak",price:162}
   ,{name:"Pattern: Red Whelp Gloves",price:400}
   ,{name:"Infernal Orb",price:1}
   ,{name:"Filled Containment Coffer",price:1}
   ,{name:"Dalaran Mana Gem",price:1}
   ,{name:"Andron's Ledger",price:1}
   ,{name:"Tazan's Logbook",price:1}
   ,{name:"Morbent's Bane",price:1}
   ,{name:"Blade of Cunning",price:230}
   ,{name:"Fenwick's Head",price:1}
   ,{name:"Flesh Eating Worm",price:62}
   ,{name:"Cantation of Manifestation",price:1}
   ,{name:"Dalaran Status Report",price:1}
   ,{name:"Thun'grim's Axe",price:696}
   ,{name:"Thun'grim's Dagger",price:698}
   ,{name:"Thun'grim's Mace",price:701}
   ,{name:"Thun'grim's Sword",price:704}
   ,{name:"Infiltrator Buckler",price:3923}
   ,{name:"Phalanx Shield",price:4330}
   ,{name:"Regal Armor",price:11711}
   ,{name:"Overseer's Whistle",price:1}
   ,{name:"Efflorescent Robe",price:2702}
   ,{name:"Grizzly Tunic",price:2712}
   ,{name:"Wildwood Chain",price:1761}
   ,{name:"The Rock",price:250000}
   ,{name:"Mood Ring",price:2500}
   ,{name:"Miniscule Diamond Ring",price:62500}
   ,{name:"Flawless Diamond Solitaire",price:125000}
   ,{name:"Cubic Zirconia Ring",price:12500}
   ,{name:"Silver Piffeny Band",price:25000}
   ,{name:"Bingles' Wrench",price:1}
   ,{name:"Torch of Holy Flame",price:5000}
   ,{name:"Bingles' Screwdriver",price:1}
   ,{name:"Bingles' Hammer",price:1}
   ,{name:"Bingles' Cog Inverter",price:1}
   ,{name:"Fletcher's Gloves",price:1167}
   ,{name:"Herbalist's Gloves",price:254}
   ,{name:"Disciple's Bracers",price:52}
   ,{name:"Disciple's Boots",price:101}
   ,{name:"Earthen Leather Shoulders",price:1825}
   ,{name:"Elder's Padded Armor",price:5247}
   ,{name:"Elder's Boots",price:3257}
   ,{name:"Elder's Bracers",price:1814}
   ,{name:"Elder's Cloak",price:2465}
   ,{name:"Elder's Hat",price:3276}
   ,{name:"Pilferer's Gloves",price:1247}
   ,{name:"Heavy Earthen Gloves",price:1377}
   ,{name:"Pattern: Dark Leather Gloves",price:400}
   ,{name:"Pattern: Herbalist's Gloves",price:450}
   ,{name:"Pattern: Earthen Leather Shoulders",price:500}
   ,{name:"Pattern: Pilferer's Gloves",price:525}
   ,{name:"Pattern: Heavy Earthen Gloves",price:550}
   ,{name:"Gnoam Sprecklesprocket",price:1}
   ,{name:"Elder's Gloves",price:1933}
   ,{name:"Elder's Mantle",price:3177}
   ,{name:"Elder's Pants",price:4684}
   ,{name:"Elder's Robe",price:5172}
   ,{name:"Elder's Sash",price:1782}
   ,{name:"Heavy Quiver",price:500}
   ,{name:"Heavy Leather Ammo Pouch",price:500}
   ,{name:"Dusky Leather Leggings",price:4336}
   ,{name:"Dusky Leather Armor",price:5265}
   ,{name:"Green Whelp Armor",price:5283}
   ,{name:"Bingles' Blastencapper",price:1}
   ,{name:"Frost Leather Cloak",price:3964}
   ,{name:"Dusky Bracers",price:3022}
   ,{name:"Green Whelp Bracers",price:3361}
   ,{name:"Dusky Belt",price:3643}
   ,{name:"Skull Key",price:1}
   ,{name:"Venture Co. Ledger",price:1}
   ,{name:"Dusky Boots",price:5921}
   ,{name:"Swift Boots",price:5943}
   ,{name:"Green Whelp Scale",price:200}
   ,{name:"Infiltrator Cord",price:1932}
   ,{name:"Infiltrator Armor",price:5133}
   ,{name:"Infiltrator Shoulders",price:3187}
   ,{name:"Infiltrator Boots",price:3198}
   ,{name:"Infiltrator Bracers",price:1654}
   ,{name:"Infiltrator Cloak",price:2472}
   ,{name:"Infiltrator Gloves",price:1833}
   ,{name:"Infiltrator Cap",price:3014}
   ,{name:"Infiltrator Pants",price:4446}
   ,{name:"Dervish Spaulders",price:2074}
   ,{name:"Phalanx Bracers",price:1692}
   ,{name:"Phalanx Boots",price:3366}
   ,{name:"Phalanx Breastplate",price:4965}
   ,{name:"Phalanx Cloak",price:2316}
   ,{name:"Phalanx Headguard",price:3095}
   ,{name:"Phalanx Gauntlets",price:2086}
   ,{name:"Phalanx Girdle",price:1904}
   ,{name:"Phalanx Leggings",price:4598}
   ,{name:"Phalanx Spaulders",price:3141}
   ,{name:"Cyrik's Head",price:1}
   ,{name:"Twilight Armor",price:8085}
   ,{name:"Twilight Robe",price:7341}
   ,{name:"Twilight Pants",price:6823}
   ,{name:"Twilight Cowl",price:4747}
   ,{name:"Twilight Gloves",price:2964}
   ,{name:"Twilight Boots",price:4429}
   ,{name:"Twilight Mantle",price:4802}
   ,{name:"Twilight Cape",price:3688}
   ,{name:"Twilight Cuffs",price:2735}
   ,{name:"Twilight Belt",price:2746}
   ,{name:"Sentinel Breastplate",price:7595}
   ,{name:"Sentinel Trousers",price:7059}
   ,{name:"Sentinel Cap",price:4911}
   ,{name:"Gyromast's Key",price:1}
   ,{name:"Sentinel Gloves",price:3159}
   ,{name:"Sentinel Boots",price:4719}
   ,{name:"Sentinel Shoulders",price:5115}
   ,{name:"Sentinel Cloak",price:4321}
   ,{name:"Sentinel Bracers",price:2913}
   ,{name:"Sentinel Girdle",price:2923}
   ,{name:"Pattern: Dusky Leather Leggings",price:625}
   ,{name:"Pattern: Green Whelp Armor",price:500}
   ,{name:"Pattern: Green Whelp Bracers",price:700}
   ,{name:"Pattern: Dusky Boots",price:875}
   ,{name:"Pattern: Swift Boots",price:875}
   ,{name:"Knight's Breastplate",price:6900}
   ,{name:"Knight's Legguards",price:6927}
   ,{name:"Knight's Headguard",price:4819}
   ,{name:"Knight's Gauntlets",price:3009}
   ,{name:"Knight's Boots",price:4618}
   ,{name:"Knight's Pauldrons",price:5005}
   ,{name:"Knight's Cloak",price:3494}
   ,{name:"Knight's Bracers",price:2851}
   ,{name:"Knight's Girdle",price:3147}
   ,{name:"Sentinel Buckler",price:6202}
   ,{name:"Glyphs of Summoning",price:1}
   ,{name:"Knight's Crest",price:6747}
   ,{name:"Regal Robe",price:11835}
   ,{name:"Regal Leggings",price:10997}
   ,{name:"Regal Wizard Hat",price:6407}
   ,{name:"Regal Gloves",price:4321}
   ,{name:"Regal Boots",price:5979}
   ,{name:"Regal Mantle",price:6481}
   ,{name:"Regal Cloak",price:5731}
   ,{name:"Regal Cuffs",price:4173}
   ,{name:"Regal Sash",price:3878}
   ,{name:"Ranger Tunic",price:11375}
   ,{name:"Ranger Leggings",price:9788}
   ,{name:"Ranger Helm",price:6809}
   ,{name:"Ranger Gloves",price:4251}
   ,{name:"Ranger Boots",price:6858}
   ,{name:"Ranger Shoulders",price:6883}
   ,{name:"Ranger Cloak",price:5922}
   ,{name:"Ranger Wristguards",price:4312}
   ,{name:"Ranger Cord",price:4327}
   ,{name:"Captain's Breastplate",price:10880}
   ,{name:"Captain's Leggings",price:10110}
   ,{name:"Captain's Circlet",price:7031}
   ,{name:"Captain's Gauntlets",price:4389}
   ,{name:"Captain's Boots",price:6585}
   ,{name:"Captain's Shoulderguards",price:7139}
   ,{name:"Captain's Cloak",price:5266}
   ,{name:"Captain's Bracers",price:3835}
   ,{name:"Captain's Waistguard",price:4157}
   ,{name:"Captain's Buckler",price:9558}
   ,{name:"Field Plate Shield",price:8882}
   ,{name:"Top of Gelkak's Key",price:1}
   ,{name:"Middle of Gelkak's Key",price:1}
   ,{name:"Bottom of Gelkak's Key",price:1}
   ,{name:"Gnomish Universal Remote",price:500}
   ,{name:"Arcane Orb",price:400}
   ,{name:"Ley Orb",price:400}
   ,{name:"Manaweave Robe",price:969}
   ,{name:"Lesser Spellfire Robes",price:973}
   ,{name:"Astral Knot Robe",price:3391}
   ,{name:"Nether-Lace Robe",price:3404}
   ,{name:"Ragefire Wand",price:9805}
   ,{name:"Icefury Wand",price:9842}
   ,{name:"Celestial Orb",price:5382}
   ,{name:"Tabetha's Instructions",price:1}
   ,{name:"Gossamer Tunic",price:16402}
   ,{name:"Gossamer Robe",price:16461}
   ,{name:"Gossamer Pants",price:13361}
   ,{name:"Gossamer Headpiece",price:10038}
   ,{name:"Gossamer Gloves",price:6266}
   ,{name:"Gossamer Boots",price:8668}
   ,{name:"Gossamer Shoulderpads",price:8721}
   ,{name:"Gossamer Cape",price:7506}
   ,{name:"Gossamer Bracers",price:5466}
   ,{name:"Gossamer Belt",price:5926}
   ,{name:"Cabalist Chestpiece",price:15798}
   ,{name:"Cabalist Leggings",price:13852}
   ,{name:"Cabalist Helm",price:9637}
   ,{name:"Cabalist Gloves",price:6016}
   ,{name:"Cabalist Boots",price:8990}
   ,{name:"Cabalist Spaulders",price:9746}
   ,{name:"Cabalist Cloak",price:7766}
   ,{name:"Cabalist Bracers",price:5655}
   ,{name:"Cabalist Belt",price:6130}
   ,{name:"Champion's Wall Shield",price:13048}
   ,{name:"Gothic Shield",price:14012}
   ,{name:"Champion's Armor",price:14376}
   ,{name:"Champion's Leggings",price:14807}
   ,{name:"Champion's Helmet",price:10300}
   ,{name:"Champion's Gauntlets",price:6428}
   ,{name:"Champion's Greaves",price:9604}
   ,{name:"Champion's Pauldrons",price:9418}
   ,{name:"Champion's Cape",price:7505}
   ,{name:"Champion's Bracers",price:5465}
   ,{name:"Champion's Girdle",price:5925}
   ,{name:"Fairy's Embrace",price:6420}
   ,{name:"Warrior's Honor",price:7645}
   ,{name:"Entwined Opaline Talisman",price:7145}
   ,{name:"Falcon's Hook",price:2542}
   ,{name:"Band of the Unicorn",price:2542}
   ,{name:"Willow Branch",price:1039}
   ,{name:"Regal Star",price:7123}
   ,{name:"Twilight Orb",price:5387}
   ,{name:"Gossamer Rod",price:7596}
   ,{name:"Shimmering Stave",price:1609}
   ,{name:"Runic Cane",price:666}
   ,{name:"Schematic: Gnomish Universal Remote",price:300}
   ,{name:"Schematic: Goblin Jumper Cables",price:500}
   ,{name:"Agamand Family Sword",price:1}
   ,{name:"Agamand Family Axe",price:1}
   ,{name:"Agamand Family Dagger",price:1}
   ,{name:"Agamand Family Mace",price:1}
   ,{name:"Tharnariun's Hope",price:1}
   ,{name:"Thun'grim's Instructions",price:1}
   ,{name:"Polar Gauntlets",price:654}
   ,{name:"Sable Wand",price:1399}
   ,{name:"Seer's Fine Stein",price:1106}
   ,{name:"Elder's Amber Stave",price:4210}
   ,{name:"Aurora Sphere",price:5811}
   ,{name:"Mistscape Stave",price:7364}
   ,{name:"Pattern: Green Leather Armor",price:500}
   ,{name:"Bundle of Furs",price:1}
   ,{name:"Dolanaar Delivery",price:1}
   ,{name:"Nondescript Letter",price:1}
   ,{name:"Ukor's Burden",price:1}
   ,{name:"Crate of Inn Supplies",price:1}
   ,{name:"Create Scrying Bowl",price:1}
   ,{name:"Bloodstained Journal",price:1}
   ,{name:"Shattered Necklace Ruby",price:1}
   ,{name:"Shattered Necklace Sapphire",price:1}
   ,{name:"Shattered Necklace Topaz",price:1}
   ,{name:"Shattered Necklace Power Source",price:1}
   ,{name:"Talvash's Enhancing Necklace",price:8990}
   ,{name:"Delivery to Mathias",price:1}
   ,{name:"Shipping Schedule",price:1}
   ,{name:"Thistle Tea",price:30}
   ,{name:"Shrike Bat Fang",price:1}
   ,{name:"Jadespine Basilisk Scale",price:1}
   ,{name:"Torturing Poker",price:7678}
   ,{name:"Bloody Brass Knuckles",price:5948}
   ,{name:"Bloodmage Mantle",price:3127}
   ,{name:"Orb of the Forgotten Seer",price:5468}
   ,{name:"Ironspine's Eye",price:4308}
   ,{name:"Ironspine's Fist",price:6035}
   ,{name:"Ironspine's Ribcage",price:4239}
   ,{name:"Morbid Dawn",price:7598}
   ,{name:"Ebon Vise",price:2147}
   ,{name:"Embalmed Shroud",price:4697}
   ,{name:"Necrotic Wand",price:4542}
   ,{name:"Blighted Leggings",price:4254}
   ,{name:"Loksey's Training Stick",price:10148}
   ,{name:"Robe of Doan",price:1710}
   ,{name:"Mantle of Doan",price:1285}
   ,{name:"Illusionary Rod",price:3077}
   ,{name:"Hypnotic Blade",price:2470}
   ,{name:"Onin's Report",price:1}
   ,{name:"Ravager",price:12878}
   ,{name:"Herod's Shoulder",price:5418}
   ,{name:"Raging Berserker's Helm",price:5439}
   ,{name:"Whitemane's Chapeau",price:6877}
   ,{name:"Hand of Righteousness",price:13173}
   ,{name:"Triune Amulet",price:9295}
   ,{name:"Mograine's Might",price:16587}
   ,{name:"Gauntlets of Divinity",price:4688}
   ,{name:"Aegis of the Scarlet Commander",price:8585}
   ,{name:"Watchman Pauldrons",price:3477}
   ,{name:"Beguiler Robes",price:5641}
   ,{name:"Chesterfall Musket",price:5514}
   ,{name:"Cobalt Crusher",price:10146}
   ,{name:"Ghostshard Talisman",price:3482}
   ,{name:"Staff of Prehistoria",price:1}
   ,{name:"Six Demon Bag",price:15495}
   ,{name:"Jannok's Rose",price:1}
   ,{name:"Fight Club",price:11971}
   ,{name:"Sethir's Journal",price:1}
   ,{name:"Evergreen Gloves",price:372}
   ,{name:"Timberland Cape",price:556}
   ,{name:"Gni'kiv Medallion",price:1}
   ,{name:"The Shaft of Tsol",price:1}
   ,{name:"Schematic: Gnomish Cloaking Device",price:600}
   ,{name:"Explorers' League Commendation",price:8430}
   ,{name:"Vile Protector",price:7755}
   ,{name:"Omega Orb",price:4885}
   ,{name:"Mantle of Woe",price:2991}
   ,{name:"Vorrel's Boots",price:2256}
   ,{name:"Dreamslayer",price:6903}
   ,{name:"Bloodspiller",price:7874}
   ,{name:"Harbinger Boots",price:2738}
   ,{name:"Flintrock Shoulders",price:5785}
   ,{name:"Dog Training Gloves",price:2713}
   ,{name:"Windweaver Staff",price:12874}
   ,{name:"Ruthless Shiv",price:15074}
   ,{name:"Archon Chestpiece",price:7844}
   ,{name:"Warchief Kilt",price:8504}
   ,{name:"Steelclaw Reaver",price:11290}
   ,{name:"Empty Brown Waterskin",price:1}
   ,{name:"Empty Blue Waterskin",price:1}
   ,{name:"Empty Red Waterskin",price:1}
   ,{name:"Filled Brown Waterskin",price:1}
   ,{name:"Filled Blue Waterskin",price:1}
   ,{name:"Filled Red Waterskin",price:1}
   ,{name:"Headsplitter",price:5605}
   ,{name:"Resplendent Guardian",price:3960}
   ,{name:"Lollipop",price:10}
   ,{name:"Candy Bar",price:10}
   ,{name:"Chocolate Square",price:10}
   ,{name:"Vial of Purest Water",price:1}
   ,{name:"Remaining Drops of Purest Water",price:1}
   ,{name:"Corrupt Manifestation's Bracers",price:1}
   ,{name:"Shard of Water",price:1}
   ,{name:"Crag Coyote Fang",price:1}
   ,{name:"Buzzard Gizzard",price:1}
   ,{name:"Rock Elemental Shard",price:1}
   ,{name:"Empty Thaumaturgy Vessel",price:1}
   ,{name:"Vessel of Dragon's Blood",price:1}
   ,{name:"Lucius' Lockbox",price:1}
   ,{name:"Thaumaturgy Vessel Lockbox",price:1}
   ,{name:"Token of Thievery",price:1}
   ,{name:"Rusty Thieves' Tools",price:1}
   ,{name:"Untranslated Journal",price:1}
   ,{name:"Necklace and Gem Salvage",price:1}
   ,{name:"Jarkal's Enhancing Necklace",price:8990}
   ,{name:"Horns of Nez'ra",price:1}
   ,{name:"Certificate of Thievery",price:1}
   ,{name:"Klaven Mortwake's Journal",price:1}
   ,{name:"Aquamarine",price:1000}
   ,{name:"Star Ruby",price:5000}
   ,{name:"Truesilver Ore",price:500}
   ,{name:"Solid Stone",price:100}
   ,{name:"Barbaric Iron Shoulders",price:2898}
   ,{name:"Barbaric Iron Breastplate",price:3886}
   ,{name:"Barbaric Iron Helm",price:3886}
   ,{name:"Barbaric Iron Boots",price:4290}
   ,{name:"Barbaric Iron Gloves",price:3181}
   ,{name:"Heavy Mithril Shoulder",price:8796}
   ,{name:"Heavy Mithril Gauntlet",price:5930}
   ,{name:"Mithril Scale Pants",price:9395}
   ,{name:"Heavy Mithril Pants",price:11876}
   ,{name:"Steel Plate Helm",price:8304}
   ,{name:"Defias Tower Key",price:1}
   ,{name:"Mithril Scale Bracers",price:4814}
   ,{name:"Mithril Scale Gloves",price:5218}
   ,{name:"Ornate Mithril Pants",price:11250}
   ,{name:"Ornate Mithril Gloves",price:5678}
   ,{name:"Ornate Mithril Shoulder",price:8484}
   ,{name:"Orcish War Leggings",price:9029}
   ,{name:"Heavy Mithril Breastplate",price:12330}
   ,{name:"Mithril Coif",price:9264}
   ,{name:"Mithril Scale Shoulders",price:10041}
   ,{name:"Heavy Mithril Boots",price:10077}
   ,{name:"Heavy Mithril Helm",price:10114}
   ,{name:"Ornate Mithril Breastplate",price:14645}
   ,{name:"Ornate Mithril Boots",price:11771}
   ,{name:"Ornate Mithril Helm",price:11813}
   ,{name:"Truesilver Gauntlets",price:7090}
   ,{name:"Truesilver Breastplate",price:19073}
   ,{name:"Heavy Mithril Axe",price:12520}
   ,{name:"Blue Glittering Axe",price:14659}
   ,{name:"Wicked Mithril Blade",price:15892}
   ,{name:"Dazzling Mithril Rapier",price:20092}
   ,{name:"Big Black Mace",price:17291}
   ,{name:"Runed Mithril Hammer",price:21660}
   ,{name:"Ebon Shiv",price:24892}
   ,{name:"Girdle of Thero-Shan",price:1911}
   ,{name:"Leggings of Thero-Shan",price:5586}
   ,{name:"Armor of Thero-Shan",price:9062}
   ,{name:"Hands of Thero-Shan",price:1932}
   ,{name:"Boots of Thero-Shan",price:4227}
   ,{name:"Mask of Thero-Shan",price:6857}
   ,{name:"The Shatterer",price:23159}
   ,{name:"Copper Claymore",price:241}
   ,{name:"Bronze Warhammer",price:3240}
   ,{name:"Bronze Greatsword",price:3676}
   ,{name:"Bronze Battle Axe",price:4059}
   ,{name:"Blight",price:33858}
   ,{name:"Truesilver Champion",price:38548}
   ,{name:"Phantom Blade",price:25508}
   ,{name:"Steel Breastplate",price:7569}
   ,{name:"Solid Sharpening Stone",price:40}
   ,{name:"Solid Weightstone",price:40}
   ,{name:"Solid Grinding Stone",price:200}
   ,{name:"Mithril Shield Spike",price:250}
   ,{name:"Southsea Treasure",price:1}
   ,{name:"Mithril Spurs",price:250}
   ,{name:"E.C.A.C.",price:1}
   ,{name:"Black Pearl",price:1000}
   ,{name:"Ichor of Undeath",price:400}
   ,{name:"Big-Mouth Clam",price:46}
   ,{name:"Zesty Clam Meat",price:50}
   ,{name:"Plans: Heavy Mithril Pants",price:1500}
   ,{name:"Plans: Mithril Shield Spike",price:2000}
   ,{name:"Plans: Mithril Scale Gloves",price:2000}
   ,{name:"Plans: Barbaric Iron Shoulders",price:750}
   ,{name:"Plans: Barbaric Iron Breastplate",price:750}
   ,{name:"Plans: Barbaric Iron Helm",price:850}
   ,{name:"Plans: Barbaric Iron Boots",price:1100}
   ,{name:"Plans: Barbaric Iron Gloves",price:1100}
   ,{name:"Plans: Ornate Mithril Pants",price:2000}
   ,{name:"Plans: Ornate Mithril Gloves",price:2000}
   ,{name:"Plans: Ornate Mithril Shoulder",price:2000}
   ,{name:"Plans: Ornate Mithril Breastplate",price:2500}
   ,{name:"Plans: Ornate Mithril Helm",price:2500}
   ,{name:"Plans: Ornate Mithril Boots",price:2500}
   ,{name:"Plans: Mithril Spurs",price:2500}
   ,{name:"Plans: Heavy Mithril Helm",price:2500}
   ,{name:"Plans: Mithril Scale Shoulders",price:2500}
   ,{name:"Plans: Blue Glittering Axe",price:2000}
   ,{name:"Plans: Dazzling Mithril Rapier",price:2500}
   ,{name:"Plans: Orcish War Leggings",price:2000}
   ,{name:"Plans: Mithril Scale Bracers",price:1500}
   ,{name:"The Ziggler",price:12472}
   ,{name:"Mana Citrine",price:1}
   ,{name:"Mana Ruby",price:1}
   ,{name:"Dentrium Power Stone",price:1}
   ,{name:"Garrett Family Treasure",price:1}
   ,{name:"Krom Stoutarm's Treasure",price:1}
   ,{name:"Plans: Runed Mithril Hammer",price:2500}
   ,{name:"Plans: Wicked Mithril Blade",price:2000}
   ,{name:"Plans: Ebon Shiv",price:2500}
   ,{name:"Kearnen's Journal",price:1}
   ,{name:"Magenta Fungus Cap",price:1}
   ,{name:"Emerald Dreamcatcher",price:1}
   ,{name:"Gnarlpine Necklace",price:1}
   ,{name:"Tallonkai's Jewel",price:1}
   ,{name:"Flare Gun",price:1}
   ,{name:"An'Alleum Power Stone",price:1}
   ,{name:"Obsidian Power Source",price:1}
   ,{name:"Fizzule's Whistle",price:1}
   ,{name:"Reward Voucher",price:1}
   ,{name:"Sizzle Stick",price:1534}
   ,{name:"Silixiz's Tower Key",price:1}
   ,{name:"Cache of Zanzil's Altered Mixture",price:1}
   ,{name:"Gallywix's Head",price:1}
   ,{name:"Conjured Sourdough",price:1}
   ,{name:"Conjured Sweet Roll",price:1}
   ,{name:"Conjured Mineral Water",price:1}
   ,{name:"Conjured Sparkling Water",price:1}
   ,{name:"Conjured Crystal Water",price:1}
   ,{name:"Sample of Zanzil's Altered Mixture",price:1}
   ,{name:"Platemail Belt",price:4694}
   ,{name:"Platemail Boots",price:7015}
   ,{name:"Platemail Bracers",price:4730}
   ,{name:"Platemail Gloves",price:4748}
   ,{name:"Platemail Helm",price:7095}
   ,{name:"Platemail Leggings",price:9515}
   ,{name:"Platemail Armor",price:9551}
   ,{name:"Hinott's Oil",price:1}
   ,{name:"Hibernal Armor",price:18268}
   ,{name:"Hibernal Boots",price:10372}
   ,{name:"Hibernal Bracers",price:6326}
   ,{name:"Hibernal Cloak",price:8754}
   ,{name:"Hibernal Gloves",price:6375}
   ,{name:"Hibernal Mantle",price:10289}
   ,{name:"Hibernal Pants",price:14763}
   ,{name:"Hibernal Robe",price:16966}
   ,{name:"Hibernal Sash",price:6472}
   ,{name:"Hibernal Cowl",price:10446}
   ,{name:"Heraldic Belt",price:6522}
   ,{name:"Heraldic Boots",price:10007}
   ,{name:"Heraldic Bracers",price:6247}
   ,{name:"Heraldic Breastplate",price:17816}
   ,{name:"Heraldic Cloak",price:8673}
   ,{name:"Heraldic Gloves",price:6820}
   ,{name:"Heraldic Headpiece",price:11004}
   ,{name:"Heraldic Leggings",price:15786}
   ,{name:"Heraldic Spaulders",price:11083}
   ,{name:"Myrmidon's Bracers",price:7471}
   ,{name:"Myrmidon's Breastplate",price:18266}
   ,{name:"Myrmidon's Cape",price:10371}
   ,{name:"Myrmidon's Gauntlets",price:7309}
   ,{name:"Myrmidon's Girdle",price:7337}
   ,{name:"Myrmidon's Greaves",price:10965}
   ,{name:"Myrmidon's Helm",price:11778}
   ,{name:"Myrmidon's Leggings",price:16899}
   ,{name:"Myrmidon's Pauldrons",price:12192}
   ,{name:"Myrmidon's Defender",price:15993}
   ,{name:"Chromite Shield",price:11234}
   ,{name:"Gargantuan Tumor",price:1}
   ,{name:"Chromite Bracers",price:4940}
   ,{name:"Chromite Chestplate",price:13416}
   ,{name:"Chromite Gauntlets",price:5375}
   ,{name:"Chromite Girdle",price:4994}
   ,{name:"Chromite Greaves",price:8058}
   ,{name:"Chromite Barbute",price:8088}
   ,{name:"Chromite Legplates",price:12647}
   ,{name:"Chromite Pauldrons",price:8796}
   ,{name:"Tiny Copper Key",price:100}
   ,{name:"Tiny Silver Key",price:375}
   ,{name:"Voodoo Charm",price:1}
   ,{name:"Deeprock Salt",price:250}
   ,{name:"Wildvine",price:5}
   ,{name:"Scorpid Scale",price:250}
   ,{name:"Sathrah's Sacrifice",price:1}
   ,{name:"Jouster's Wristguards",price:3907}
   ,{name:"Jouster's Chestplate",price:9096}
   ,{name:"Jouster's Gauntlets",price:3936}
   ,{name:"Jouster's Girdle",price:3949}
   ,{name:"Jouster's Greaves",price:5901}
   ,{name:"Jouster's Visor",price:5922}
   ,{name:"Jouster's Legplates",price:8575}
   ,{name:"Jouster's Pauldrons",price:6442}
   ,{name:"Worn Dragonscale",price:500}
   ,{name:"Turtle Scale",price:100}
   ,{name:"Thick Hide",price:500}
   ,{name:"Rugged Leather",price:500}
   ,{name:"Rugged Hide",price:500}
   ,{name:"Cured Thick Hide",price:500}
   ,{name:"Thick Armor Kit",price:1000}
   ,{name:"Comfortable Leather Hat",price:6927}
   ,{name:"Nightscape Tunic",price:8360}
   ,{name:"Nightscape Headband",price:6281}
   ,{name:"Practice Sword",price:71}
   ,{name:"Training Sword",price:306}
   ,{name:"Cadet's Bow",price:28}
   ,{name:"Hunting Bow",price:240}
   ,{name:"Hunting Rifle",price:79}
   ,{name:"Pellet Rifle",price:40}
   ,{name:"Precision Bow",price:2426}
   ,{name:"Firestarter",price:2947}
   ,{name:"Turtle Scale Leggings",price:12778}
   ,{name:"Dire Wand",price:2231}
   ,{name:"Turtle Scale Gloves",price:4080}
   ,{name:"Explosive Shotgun",price:6414}
   ,{name:"Turtle Scale Breastplate",price:8829}
   ,{name:"Hanzo Sword",price:37286}
   ,{name:"Turtle Scale Helm",price:9059}
   ,{name:"Nightscape Shoulders",price:6683}
   ,{name:"Nightscape Pants",price:12191}
   ,{name:"Goblin Nutcracker",price:13877}
   ,{name:"Nightscape Cloak",price:9194}
   ,{name:"Ebon Scimitar",price:13979}
   ,{name:"Nightscape Boots",price:10002}
   ,{name:"Turtle Scale Bracers",price:4709}
   ,{name:"Battlefield Destroyer",price:24661}
   ,{name:"Big Voodoo Robe",price:10186}
   ,{name:"Big Voodoo Mask",price:7477}
   ,{name:"Big Voodoo Pants",price:12631}
   ,{name:"Tough Scorpid Breastplate",price:10066}
   ,{name:"Tough Scorpid Gloves",price:5487}
   ,{name:"Tough Scorpid Bracers",price:5100}
   ,{name:"Tough Scorpid Leggings",price:14821}
   ,{name:"Tough Scorpid Shoulders",price:10408}
   ,{name:"Tough Scorpid Helm",price:11961}
   ,{name:"Tough Scorpid Boots",price:9710}
   ,{name:"Wild Leather Shoulders",price:7737}
   ,{name:"Wild Leather Vest",price:11203}
   ,{name:"Wild Leather Leggings",price:16219}
   ,{name:"Wild Leather Boots",price:11389}
   ,{name:"Wild Leather Helmet",price:8706}
   ,{name:"Wild Leather Cloak",price:12600}
   ,{name:"Big Voodoo Cloak",price:11045}
   ,{name:"Quickdraw Quiver",price:1000}
   ,{name:"Thick Leather Ammo Pouch",price:1000}
   ,{name:"Blade of the Basilisk",price:10066}
   ,{name:"Silithid Ripper",price:7655}
   ,{name:"Tainted Pierce",price:9222}
   ,{name:"The Butcher",price:5747}
   ,{name:"Scooby Snack",price:1}
   ,{name:"Flawless Draenethyst Sphere",price:10000}
   ,{name:"Imperial Red Tunic",price:22615}
   ,{name:"Imperial Red Boots",price:13828}
   ,{name:"Imperial Red Bracers",price:8796}
   ,{name:"Imperial Red Cloak",price:12283}
   ,{name:"Imperial Red Gloves",price:9392}
   ,{name:"Imperial Red Mantle",price:14033}
   ,{name:"Imperial Red Pants",price:21140}
   ,{name:"Imperial Red Robe",price:23840}
   ,{name:"Imperial Red Sash",price:8990}
   ,{name:"Imperial Red Circlet",price:15091}
   ,{name:"Serpentskin Girdle",price:8462}
   ,{name:"Serpentskin Boots",price:14338}
   ,{name:"Serpentskin Bracers",price:8522}
   ,{name:"Serpentskin Armor",price:24355}
   ,{name:"Serpentskin Cloak",price:12777}
   ,{name:"Serpentskin Gloves",price:9769}
   ,{name:"Serpentskin Helm",price:14836}
   ,{name:"Serpentskin Leggings",price:20448}
   ,{name:"Serpentskin Spaulders",price:14495}
   ,{name:"Ebonhold Wristguards",price:9219}
   ,{name:"Ebonhold Armor",price:23233}
   ,{name:"Ebonhold Cloak",price:13044}
   ,{name:"Ebonhold Gauntlets",price:10475}
   ,{name:"Ebonhold Girdle",price:10513}
   ,{name:"Ebonhold Boots",price:16650}
   ,{name:"Ebonhold Helmet",price:16712}
   ,{name:"Ebonhold Leggings",price:23751}
   ,{name:"Ebonhold Shoulderpads",price:15880}
   ,{name:"Valorous Wristguards",price:6290}
   ,{name:"Valorous Chestguard",price:17941}
   ,{name:"Ebonhold Buckler",price:22028}
   ,{name:"Valorous Gauntlets",price:6867}
   ,{name:"Valorous Girdle",price:6381}
   ,{name:"Valorous Greaves",price:9567}
   ,{name:"Valorous Helm",price:10371}
   ,{name:"Valorous Legguards",price:14881}
   ,{name:"Valorous Pauldrons",price:10450}
   ,{name:"Valorous Shield",price:15695}
   ,{name:"Arcane Armor",price:28962}
   ,{name:"Arcane Boots",price:18365}
   ,{name:"Arcane Bands",price:11681}
   ,{name:"Arcane Cloak",price:16467}
   ,{name:"Arcane Gloves",price:12474}
   ,{name:"Arcane Pads",price:20744}
   ,{name:"Arcane Leggings",price:29204}
   ,{name:"Arcane Robe",price:29719}
   ,{name:"Arcane Sash",price:11941}
   ,{name:"Arcane Cover",price:20046}
   ,{name:"Traveler's Belt",price:12028}
   ,{name:"Traveler's Boots",price:17679}
   ,{name:"Traveler's Bracers",price:11247}
   ,{name:"Traveler's Jerkin",price:28203}
   ,{name:"Traveler's Cloak",price:15918}
   ,{name:"Traveler's Gloves",price:12059}
   ,{name:"Traveler's Helm",price:20057}
   ,{name:"Traveler's Leggings",price:28241}
   ,{name:"Traveler's Spaulders",price:20210}
   ,{name:"Hero's Bracers",price:12977}
   ,{name:"Hero's Breastplate",price:29358}
   ,{name:"Hero's Cape",price:18363}
   ,{name:"Hero's Gauntlets",price:13779}
   ,{name:"Hero's Belt",price:13830}
   ,{name:"Hero's Boots",price:21699}
   ,{name:"Hero's Band",price:21779}
   ,{name:"Hero's Leggings",price:29607}
   ,{name:"Hero's Pauldrons",price:22513}
   ,{name:"Alabaster Plate Vambraces",price:10287}
   ,{name:"Alabaster Breastplate",price:25918}
   ,{name:"Hero's Buckler",price:28565}
   ,{name:"Alabaster Plate Gauntlets",price:9406}
   ,{name:"Alabaster Plate Girdle",price:8908}
   ,{name:"Alabaster Plate Greaves",price:14111}
   ,{name:"Alabaster Plate Helmet",price:15013}
   ,{name:"Alabaster Plate Leggings",price:22622}
   ,{name:"Alabaster Plate Pauldrons",price:16037}
   ,{name:"Alabaster Shield",price:22092}
   ,{name:"Heavy Silken Thread",price:500}
   ,{name:"Silvery Spinnerets",price:1}
   ,{name:"Wolfshead Helm",price:10370}
   ,{name:"Gauntlets of the Sea",price:7551}
   ,{name:"Dragonscale Gauntlets",price:7016}
   ,{name:"Helm of Fire",price:15118}
   ,{name:"Feathered Breastplate",price:20269}
   ,{name:"The 1 Ring",price:1130}
   ,{name:"Shaman Voodoo Charm",price:1}
   ,{name:"Mithril Head Trout",price:6}
   ,{name:"Raw Mithril Head Trout",price:4}
   ,{name:"Bloated Trout",price:100}
   ,{name:"Dragonscale Breastplate",price:21531}
   ,{name:"Plain Letter",price:1}
   ,{name:"Pattern: Comfortable Leather Hat",price:875}
   ,{name:"Pattern: Turtle Scale Gloves",price:875}
   ,{name:"Pattern: Big Voodoo Robe",price:1000}
   ,{name:"Pattern: Big Voodoo Mask",price:1000}
   ,{name:"Pattern: Nightscape Cloak",price:1250}
   ,{name:"Pattern: Big Voodoo Pants",price:1250}
   ,{name:"Pattern: Big Voodoo Cloak",price:1250}
   ,{name:"Snickerfang Jowl",price:1}
   ,{name:"Blasted Boar Lung",price:1}
   ,{name:"Scorpok Pincer",price:1}
   ,{name:"Basilisk Brain",price:1}
   ,{name:"Pattern: Tough Scorpid Breastplate",price:1000}
   ,{name:"Vulture Gizzard",price:1}
   ,{name:"Pattern: Tough Scorpid Bracers",price:1000}
   ,{name:"Pattern: Tough Scorpid Gloves",price:1125}
   ,{name:"Pattern: Tough Scorpid Boots",price:1250}
   ,{name:"Pattern: Tough Scorpid Shoulders",price:1250}
   ,{name:"Pattern: Tough Scorpid Leggings",price:1375}
   ,{name:"Pattern: Tough Scorpid Helm",price:1375}
   ,{name:"Pattern: Wild Leather Shoulders",price:1}
   ,{name:"Pattern: Wild Leather Vest",price:1}
   ,{name:"Pattern: Wild Leather Helmet",price:1}
   ,{name:"Pattern: Wild Leather Boots",price:1}
   ,{name:"Pattern: Wild Leather Leggings",price:1}
   ,{name:"Pattern: Wild Leather Cloak",price:1}
   ,{name:"Pattern: Nightscape Shoulders",price:1000}
   ,{name:"R.O.I.D.S.",price:1}
   ,{name:"Lung Juice Cocktail",price:1}
   ,{name:"Ground Scorpok Assay",price:1}
   ,{name:"Cerebral Cortex Compound",price:1}
   ,{name:"Gizzard Gum",price:1}
   ,{name:"Laden Dew Gland",price:1}
   ,{name:"Spool of Light Chartreuse Silk Thread",price:1}
   ,{name:"Touch of Zanzil Cure",price:1}
   ,{name:"Gahz'ridian Ornament",price:1}
   ,{name:"Executioner's Key",price:1}
   ,{name:"Warchief's Orders",price:1}
   ,{name:"Gadgetzan Water Co. Care Package",price:68}
   ,{name:"Cat Carrier (Bombay)",price:1000}
   ,{name:"Cat Carrier (Cornish Rex)",price:1000}
   ,{name:"Cat Carrier (Orange Tabby)",price:1000}
   ,{name:"Cat Carrier (Silver Tabby)",price:1000}
   ,{name:"Cat Carrier (White Kitten)",price:1500}
   ,{name:"Cat Carrier (Siamese)",price:1500}
   ,{name:"Cat Carrier (Black Tabby)",price:1500}
   ,{name:"Parrot Cage (Green Wing Macaw)",price:1000}
   ,{name:"Plant explosives",price:1}
   ,{name:"Parrot Cage (Hyacinth Macaw)",price:1000}
   ,{name:"Parrot Cage (Senegal)",price:1000}
   ,{name:"Parrot Cage (Cockatiel)",price:1000}
   ,{name:"Rabbit Crate (Snowshoe)",price:500}
   ,{name:"Emerald Whelpling",price:2500}
   ,{name:"Tiny Crimson Whelpling",price:2500}
   ,{name:"Great Horned Owl",price:1250}
   ,{name:"Hawk Owl",price:1250}
   ,{name:"Bronze Lotterybox",price:1}
   ,{name:"Heavy Bronze Lotterybox",price:1}
   ,{name:"Iron Lotterybox",price:1}
   ,{name:"Heavy Iron Lotterybox",price:1}
   ,{name:"Mithril Lotterybox",price:1}
   ,{name:"Heavy Mithril Lotterybox",price:1}
   ,{name:"Field Testing Kit",price:1}
   ,{name:"Model 4711-FTZ Power Source",price:1}
   ,{name:"Zinge's Purchase Order",price:1}
   ,{name:"Violet Tragan",price:1}
   ,{name:"Sealed Field Testing Kit",price:1}
   ,{name:"Violet Powder",price:1}
   ,{name:"Noggenfogger Elixir",price:175}
   ,{name:"First Aid",price:340}
   ,{name:"Heavy Mageweave Bandage",price:800}
   ,{name:"Divino-Matic Rod",price:1}
   ,{name:"Red Mechanostrider",price:2500}
   ,{name:"Hippogryph Egg",price:200}
   ,{name:"Untapped Dowsing Widget",price:1}
   ,{name:"Tapped Dowsing Widget",price:1}
   ,{name:"Whistle of the Mottled Red Raptor",price:25000}
   ,{name:"Centipaar Insect Parts",price:1}
   ,{name:"Whistle of the Emerald Raptor",price:2500}
   ,{name:"Whistle of the Turquoise Raptor",price:2500}
   ,{name:"Whistle of the Violet Raptor",price:2500}
   ,{name:"Scrimshank's Surveying Gear",price:1}
   ,{name:"Insect Analysis Report",price:1}
   ,{name:"Blue Mechanostrider",price:2500}
   ,{name:"Thistleshrub Dew",price:1}
   ,{name:"OOX-17\\\/TN Distress Beacon",price:1}
   ,{name:"Red Sparkler",price:250}
   ,{name:"White Sparkler",price:250}
   ,{name:"Blue Sparkler",price:250}
   ,{name:"Reins of the Striped Nightsaber",price:2500}
   ,{name:"Reins of the Bengal Tiger",price:1}
   ,{name:"Reins of the Striped Frostsaber",price:2500}
   ,{name:"Reins of the Spotted Frostsaber",price:2500}
   ,{name:"Reins of the Leopard",price:1}
   ,{name:"Extraordinary Egg",price:2500}
   ,{name:"Fine Egg",price:1500}
   ,{name:"Ordinary Egg",price:750}
   ,{name:"Bad Egg",price:250}
   ,{name:"Egg Crate",price:1}
   ,{name:"Mithril Insignia",price:1}
   ,{name:"Clara's Fresh Apple",price:1}
   ,{name:"Hinterlands Honey Ripple",price:1}
   ,{name:"Dran's Ripple Delivery",price:1}
   ,{name:"Mithril Pendant",price:1}
   ,{name:"Sealed Description of Thredd's Visitor",price:1}
   ,{name:"Signet of Expertise",price:6492}
   ,{name:"OOX-09\\\/HL Distress Beacon",price:1}
   ,{name:"OOX-22\\\/FE Distress Beacon",price:1}
   ,{name:"Gahz'rilla's Electrified Scale",price:1}
   ,{name:"Hammer of Expertise",price:1}
   ,{name:"Caliph Scorpidsting's Head",price:1}
   ,{name:"Rin'ji's Secret",price:1}
   ,{name:"Morning Glory Dew",price:200}
   ,{name:"Elixir of Water Walking",price:125}
   ,{name:"Purple Lotus",price:300}
   ,{name:"Arthas' Tears",price:95}
   ,{name:"Sungrass",price:60}
   ,{name:"Blindweed",price:375}
   ,{name:"Ghost Mushroom",price:375}
   ,{name:"Gromsblood",price:250}
   ,{name:"Alterac Swiss",price:200}
   ,{name:"Dried King Bolete",price:200}
   ,{name:"Elixir of Agility",price:200}
   ,{name:"Homemade Cherry Pie",price:200}
   ,{name:"Armor",price:200}
   ,{name:"Roasted Quail",price:200}
   ,{name:"Deep Fried Plantains",price:200}
   ,{name:"Fire Shield",price:200}
   ,{name:"Spinefin Halibut",price:200}
   ,{name:"Raw Spinefin Halibut",price:160}
   ,{name:"Thick Yeti Hide",price:1}
   ,{name:"Restorative Potion",price:200}
   ,{name:"Inlaid Mithril Cylinder",price:1000}
   ,{name:"Goblin Rocket Fuel",price:250}
   ,{name:"Gift of Arthas",price:250}
   ,{name:"Wildvine Potion",price:250}
   ,{name:"Philosopher's Stone",price:250}
   ,{name:"Rig Blueprints",price:1}
   ,{name:"Elixir of Detect Undead",price:300}
   ,{name:"Arcane Elixir",price:400}
   ,{name:"Invisibility Potion",price:500}
   ,{name:"Greater Intellect",price:1000}
   ,{name:"Greater Agility",price:600}
   ,{name:"Shay's Bell",price:1}
   ,{name:"Elixir of Dream Vision",price:600}
   ,{name:"Elixir of the Giants",price:700}
   ,{name:"Ghost Dye",price:750}
   ,{name:"Elixir of Demonslaying",price:700}
   ,{name:"Detect Demon",price:500}
   ,{name:"Tiara of the Deep",price:1}
   ,{name:"Pratt's Letter",price:1}
   ,{name:"Jangdor's Letter",price:1}
   ,{name:"Woodpaw Gnoll Mane",price:1}
   ,{name:"Uncracked Scarab Shell",price:1}
   ,{name:"Mallet of Zul'Farrak",price:1}
   ,{name:"Sacred Mallet",price:1}
   ,{name:"Shriveled Troll Heart",price:8155}
   ,{name:"Stoley's Shipment",price:1}
   ,{name:"Stoley's Bottle",price:1}
   ,{name:"Firebeard's Head",price:1}
   ,{name:"Hatecrest Naga Scale",price:1}
   ,{name:"Mysterious Relic",price:1}
   ,{name:"Captain's Key",price:1553}
   ,{name:"Lahassa Essence",price:1}
   ,{name:"Imbel Essence",price:1}
   ,{name:"Samha Essence",price:1}
   ,{name:"Byltan Essence",price:1}
   ,{name:"Troll Tribal Necklace",price:64}
   ,{name:"Volatile Rum",price:400}
   ,{name:"Black Vitriol",price:1000}
   ,{name:"Troyas' Stave",price:1}
   ,{name:"Elixir of Shadow Power",price:35}
   ,{name:"Cuergo's Hidden Treasure",price:15}
   ,{name:"Woodpaw Battle Plans",price:1}
   ,{name:"Cuergo's Key",price:1}
   ,{name:"Pirate's Footlocker",price:100}
   ,{name:"Techbot's Memory Core",price:1}
   ,{name:"Essential Artificial",price:1}
   ,{name:"White Punch Card",price:45}
   ,{name:"Yellow Punch Card",price:1}
   ,{name:"Red Punch Card",price:1}
   ,{name:"Blue Punch Card",price:1}
   ,{name:"Empty Leaden Collection Phial",price:1}
   ,{name:"Full Leaden Collection Phial",price:1}
   ,{name:"Field Plate Vambraces",price:4204}
   ,{name:"Field Plate Armor",price:10571}
   ,{name:"Field Plate Gauntlets",price:4235}
   ,{name:"Field Plate Girdle",price:4250}
   ,{name:"Field Plate Boots",price:6350}
   ,{name:"Field Plate Helmet",price:6883}
   ,{name:"Field Plate Leggings",price:9251}
   ,{name:"Field Plate Pauldrons",price:6436}
   ,{name:"Recipe: Wildvine Potion",price:2000}
   ,{name:"Recipe: Invisibility Potion",price:2000}
   ,{name:"Recipe: Gift of Arthas",price:2000}
   ,{name:"Recipe: Elixir of Dream Vision",price:2500}
   ,{name:"Recipe: Elixir of Giants",price:2250}
   ,{name:"Thermaplugg's Safe Combination",price:1}
   ,{name:"Recipe: Elixir of Demonslaying",price:2500}
   ,{name:"Recipe: Elixir of Shadow Power",price:2500}
   ,{name:"Recipe: Ghost Dye",price:2250}
   ,{name:"Recipe: Philosopher's Stone",price:2000}
   ,{name:"Recipe: Transmute Iron to Gold",price:2000}
   ,{name:"Recipe: Transmute Mithril to Truesilver",price:2000}
   ,{name:"Stave of Equinex",price:1}
   ,{name:"A Sparkling Stone",price:1}
   ,{name:"Grime-Encrusted Object",price:38}
   ,{name:"Robo-Mechanical Guts",price:1}
   ,{name:"Default Stationery",price:1}
   ,{name:"Blue Firework",price:5}
   ,{name:"Green Firework",price:5}
   ,{name:"Red Streaks Firework",price:12}
   ,{name:"Yellow Rose Firework",price:10}
   ,{name:"Prismatic Punch Card",price:1}
   ,{name:"Red, White and Blue Firework",price:25}
   ,{name:"Red Firework",price:5}
   ,{name:"Nimboya's Laden Pike",price:1}
   ,{name:"Witherbark Skull",price:1}
   ,{name:"Venom Bottle",price:1}
   ,{name:"Undamaged Venom Sac",price:1}
   ,{name:"Gadrin's Parchment",price:1}
   ,{name:"Shadra's Venom",price:1}
   ,{name:"A Small Stave",price:1}
   ,{name:"Grime-Encrusted Ring",price:1}
   ,{name:"Security DELTA Data Access Card",price:625}
   ,{name:"Super Snapper FX",price:1}
   ,{name:"A Short Note",price:1}
   ,{name:"Snapshot of Gammerita",price:1}
   ,{name:"Feralas: A History",price:1}
   ,{name:"Wirt's Third Leg",price:19578}
   ,{name:"Cuergo's Gold",price:400}
   ,{name:"Cuergo's Gold with Worm",price:400}
   ,{name:"Brilliant Gold Ring",price:1}
   ,{name:"Sparklematic-Wrapped Box",price:12}
   ,{name:"Heavy Leaden Collection Phial",price:1}
   ,{name:"High Potency Radioactive Fallout",price:1}
   ,{name:"Golden Scale Gauntlets",price:4328}
   ,{name:"Plans: Golden Scale Gauntlets",price:1250}
   ,{name:"Jer'kai's Signet Ring",price:1}
   ,{name:"Iridescent Sprite Darter Wing",price:1}
   ,{name:"Gordunni Orb",price:1}
   ,{name:"Sul'thraze the Lasher",price:42850}
   ,{name:"Expert Goldminer's Helmet",price:6878}
   ,{name:"Shovelphlange's Mining Axe",price:13274}
   ,{name:"Sang'thraze the Deflector",price:26383}
   ,{name:"Earthen Rod",price:10064}
   ,{name:"Tromping Miner's Boots",price:5880}
   ,{name:"Obsidian Cleaver",price:16895}
   ,{name:"Stonevault Shiv",price:13565}
   ,{name:"Archaic Defender",price:12281}
   ,{name:"Excavator's Brand",price:13661}
   ,{name:"Revelosh's Boots",price:6674}
   ,{name:"Revelosh's Armguards",price:4500}
   ,{name:"Revelosh's Spaulders",price:6725}
   ,{name:"Revelosh's Gloves",price:4534}
   ,{name:"The Shoveler",price:16164}
   ,{name:"Annealed Blade",price:12980}
  ];
