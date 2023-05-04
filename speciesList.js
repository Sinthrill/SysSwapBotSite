const speciesList = [
{"species": "Abomasnow","number": "460"},
{"species": "Alomomola","number": "594"},
{"species": "Altaria","number": "334"},
{"species": "Amoonguss","number": "591"},
{"species": "Ampharos","number": "181"},
{"species": "Annihilape","number": "979"},
{"species": "Appletun","number": "842"},
{"species": "Applin","number": "840"},
{"species": "Arboliva","number": "930"},
{"species": "Arcanine","number": "59"},
{"species": "Arceus","number": "493"},
{"species": "Arctibax","number": "997"},
{"species": "Armarouge","number": "936"},
{"species": "Arrokuda","number": "846"},
{"species": "Articuno","number": "144"},
{"species": "Avalugg","number": "713"},
{"species": "Axew","number": "610"},
{"species": "Azelf","number": "482"},
{"species": "Azumarill","number": "184"},
{"species": "Azurill","number": "298"},
{"species": "Bagon","number": "371"},
{"species": "Banette","number": "354"},
{"species": "Barboach","number": "339"},
{"species": "Barraskewda","number": "847"},
{"species": "Basculegion","number": "902"},
{"species": "Basculin","number": "550"},
{"species": "Baxcalibur","number": "998"},
{"species": "Beartic","number": "614"},
{"species": "Bellibolt","number": "939"},
{"species": "Bergmite","number": "712"},
{"species": "Bisharp","number": "625"},
{"species": "Blissey","number": "242"},
{"species": "Bombirdier","number": "962"},
{"species": "Bonsly","number": "438"},
{"species": "Bounsweet","number": "761"},
{"species": "Braixen","number": "654"},
{"species": "Brambleghast","number": "947"},
{"species": "Bramblin","number": "946"},
{"species": "Braviary","number": "628"},
{"species": "Breloom","number": "286"},
{"species": "Bronzong","number": "437"},
{"species": "Bronzor","number": "436"},
{"species": "Brute Bonnet","number": "986"},
{"species": "Bruxish","number": "779"},
{"species": "Buizel","number": "418"},
{"species": "Cacnea","number": "331"},
{"species": "Cacturne","number": "332"},
{"species": "Calyrex","number": "898"},
{"species": "Camerupt","number": "323"},
{"species": "Capsakid","number": "951"},
{"species": "Carbink","number": "703"},
{"species": "Carkol","number": "838"},
{"species": "Ceruledge","number": "937"},
{"species": "Cetitan","number": "975"},
{"species": "Cetoddle","number": "974"},
{"species": "Chansey","number": "113"},
{"species": "Charcadet","number": "935"},
{"species": "Charizard","number": "6"},
{"species": "Charmander","number": "4"},
{"species": "Charmeleon","number": "5"},
{"species": "Chesnaught","number": "652"},
{"species": "Chespin","number": "650"},
{"species": "Chewtle","number": "833"},
{"species": "Chi-Yu","number": "1004"},
{"species": "Chien-Pao","number": "1002"},
{"species": "Cinderace","number": "815"},
{"species": "Clauncher","number": "692"},
{"species": "Clawitzer","number": "693"},
{"species": "Clodsire","number": "980"},
{"species": "Cloyster","number": "91"},
{"species": "Coalossal","number": "839"},
{"species": "Combee","number": "415"},
{"species": "Copperajah","number": "879"},
{"species": "Corviknight","number": "823"},
{"species": "Corvisquire","number": "822"},
{"species": "Crabominable","number": "740"},
{"species": "Crabrawler","number": "739"},
{"species": "Cresselia","number": "488"},
{"species": "Croagunk","number": "453"},
{"species": "Crocalor","number": "910"},
{"species": "Cryogonal","number": "615"},
{"species": "Cubchoo","number": "613"},
{"species": "Cufant","number": "878"},
{"species": "Cyclizar","number": "967"},
{"species": "Cyndaquil","number": "155"},
{"species": "Dachsbun","number": "927"},
{"species": "Dartrix","number": "723"},
{"species": "Decidueye","number": "724"},
{"species": "Dedenne","number": "702"},
{"species": "Deerling","number": "585"},
{"species": "Deino","number": "633"},
{"species": "Delibird","number": "225"},
{"species": "Delphox","number": "655"},
{"species": "Dewott","number": "502"},
{"species": "Dialga","number": "483"},
{"species": "Diancie","number": "719"},
{"species": "Diglett","number": "50"},
{"species": "Ditto","number": "132"},
{"species": "Dolliv","number": "929"},
{"species": "Dondozo","number": "977"},
{"species": "Donphan","number": "232"},
{"species": "Dragalge","number": "691"},
{"species": "Dragapult","number": "887"},
{"species": "Dragonair","number": "148"},
{"species": "Dragonite","number": "149"},
{"species": "Drakloak","number": "886"},
{"species": "Dratini","number": "147"},
{"species": "Drednaw","number": "834"},
{"species": "Dreepy","number": "885"},
{"species": "Drifblim","number": "426"},
{"species": "Drifloon","number": "425"},
{"species": "Drizzile","number": "817"},
{"species": "Drowzee","number": "96"},
{"species": "Dudunsparce","number": "982"},
{"species": "Dugtrio","number": "51"},
{"species": "Dunsparce","number": "206"},
{"species": "Eelektrik","number": "603"},
{"species": "Eelektross","number": "604"},
{"species": "Eevee","number": "133"},
{"species": "Eiscue","number": "875"},
{"species": "Electrode","number": "101"},
{"species": "Enamorus","number": "905"},
{"species": "Espathra","number": "956"},
{"species": "Espeon","number": "196"},
{"species": "Eternatus","number": "890"},
{"species": "Falinks","number": "870"},
{"species": "Farigiraf","number": "981"},
{"species": "Fennekin","number": "653"},
{"species": "Fidough","number": "926"},
{"species": "Finizen","number": "963"},
{"species": "Finneon","number": "456"},
{"species": "Flaaffy","number": "180"},
{"species": "Flabébé","number": "669"},
{"species": "Flamigo","number": "973"},
{"species": "Flapple","number": "841"},
{"species": "Flareon","number": "136"},
{"species": "Fletchinder","number": "662"},
{"species": "Fletchling","number": "661"},
{"species": "Flittle","number": "955"},
{"species": "Floatzel","number": "419"},
{"species": "Floette","number": "670"},
{"species": "Floragato","number": "907"},
{"species": "Florges","number": "671"},
{"species": "Flutter Mane","number": "987"},
{"species": "Fomantis","number": "753"},
{"species": "Foongus","number": "590"},
{"species": "Forretress","number": "205"},
{"species": "Fraxure","number": "611"},
{"species": "Frigibax","number": "996"},
{"species": "Froakie","number": "656"},
{"species": "Frogadier","number": "657"},
{"species": "Froslass","number": "478"},
{"species": "Frosmoth","number": "873"},
{"species": "Fuecoco","number": "909"},
{"species": "Gabite","number": "444"},
{"species": "Gallade","number": "475"},
{"species": "Garchomp","number": "445"},
{"species": "Gardevoir","number": "282"},
{"species": "Garganacl","number": "934"},
{"species": "Gastly","number": "92"},
{"species": "Gastrodon","number": "423"},
{"species": "Gengar","number": "94"},
{"species": "Gholdengo","number": "1000"},
{"species": "Gible","number": "443"},
{"species": "Gimmighoul","number": "999"},
{"species": "Girafarig","number": "203"},
{"species": "Giratina","number": "487"},
{"species": "Glaceon","number": "471"},
{"species": "Glalie","number": "362"},
{"species": "Glastrier","number": "896"},
{"species": "Glimmet","number": "969"},
{"species": "Glimmora","number": "970"},
{"species": "Gogoat","number": "673"},
{"species": "Golduck","number": "55"},
{"species": "Goodra","number": "706"},
{"species": "Goomy","number": "704"},
{"species": "Gothita","number": "574"},
{"species": "Gothitelle","number": "576"},
{"species": "Gothorita","number": "575"},
{"species": "Grafaiai","number": "945"},
{"species": "Great Tusk","number": "984"},
{"species": "Greavard","number": "971"},
{"species": "Greedent","number": "820"},
{"species": "Greninja","number": "658"},
{"species": "Grimer","number": "88"},
{"species": "Grimmsnarl","number": "861"},
{"species": "Grookey","number": "810"},
{"species": "Groudon","number": "383"},
{"species": "Growlithe","number": "58"},
{"species": "Grumpig","number": "326"},
{"species": "Gulpin","number": "316"},
{"species": "Gumshoos","number": "735"},
{"species": "Gyarados","number": "130"},
{"species": "Happiny","number": "440"},
{"species": "Hariyama","number": "297"},
{"species": "Hatenna","number": "856"},
{"species": "Hatterene","number": "858"},
{"species": "Hattrem","number": "857"},
{"species": "Haunter","number": "93"},
{"species": "Hawlucha","number": "701"},
{"species": "Haxorus","number": "612"},
{"species": "Heatran","number": "485"},
{"species": "Heracross","number": "214"},
{"species": "Hippopotas","number": "449"},
{"species": "Hippowdon","number": "450"},
{"species": "Honchkrow","number": "430"},
{"species": "Hoopa","number": "720"},
{"species": "Hoppip","number": "187"},
{"species": "Houndoom","number": "229"},
{"species": "Houndour","number": "228"},
{"species": "Houndstone","number": "972"},
{"species": "Hydreigon","number": "635"},
{"species": "Hypno","number": "97"},
{"species": "Igglybuff","number": "174"},
{"species": "Impidimp","number": "859"},
{"species": "Indeedee","number": "876"},
{"species": "Inteleon","number": "818"},
{"species": "Iron Bundle","number": "991"},
{"species": "Iron Hands","number": "992"},
{"species": "Iron Jugulis","number": "993"},
{"species": "Iron Leaves","number": "1010"},
{"species": "Iron Moth","number": "994"},
{"species": "Iron Thorns","number": "995"},
{"species": "Iron Treads","number": "990"},
{"species": "Iron Valiant","number": "1006"},
{"species": "Jigglypuff","number": "39"},
{"species": "Jolteon","number": "135"},
{"species": "Jumpluff","number": "189"},
{"species": "Kilowattrel","number": "941"},
{"species": "Kingambit","number": "983"},
{"species": "Kirlia","number": "281"},
{"species": "Klawf","number": "950"},
{"species": "Kleavor","number": "900"},
{"species": "Klefki","number": "707"},
{"species": "Komala","number": "775"},
{"species": "Koraidon","number": "1007"},
{"species": "Kricketot","number": "401"},
{"species": "Kricketune","number": "402"},
{"species": "Krokorok","number": "552"},
{"species": "Krookodile","number": "553"},
{"species": "Kubfu","number": "891"},
{"species": "Kyogre","number": "382"},
{"species": "Landorus","number": "645"},
{"species": "Larvesta","number": "636"},
{"species": "Larvitar","number": "246"},
{"species": "Leafeon","number": "470"},
{"species": "Lechonk","number": "915"},
{"species": "Lilligant","number": "549"},
{"species": "Litleo","number": "667"},
{"species": "Lokix","number": "920"},
{"species": "Lucario","number": "448"},
{"species": "Lumineon","number": "457"},
{"species": "Lurantis","number": "754"},
{"species": "Luvdisc","number": "370"},
{"species": "Luxio","number": "404"},
{"species": "Luxray","number": "405"},
{"species": "Lycanroc","number": "745"},
{"species": "Mabosstiff","number": "943"},
{"species": "Magearna","number": "801"},
{"species": "Magikarp","number": "129"},
{"species": "Magnemite","number": "81"},
{"species": "Magneton","number": "82"},
{"species": "Magnezone","number": "462"},
{"species": "Makuhita","number": "296"},
{"species": "Mankey","number": "56"},
{"species": "Mareanie","number": "747"},
{"species": "Mareep","number": "179"},
{"species": "Marill","number": "183"},
{"species": "Maschiff","number": "942"},
{"species": "Masquerain","number": "284"},
{"species": "Maushold","number": "925"},
{"species": "Medicham","number": "308"},
{"species": "Meditite","number": "307"},
{"species": "Meloetta","number": "648"},
{"species": "Meowscarada","number": "908"},
{"species": "Meowth","number": "52"},
{"species": "Mesprit","number": "481"},
{"species": "Mew","number": "151"},
{"species": "Mewtwo","number": "150"},
{"species": "Mimikyu","number": "778"},
{"species": "Miraidon","number": "1008"},
{"species": "Misdreavus","number": "200"},
{"species": "Mismagius","number": "429"},
{"species": "Moltres","number": "146"},
{"species": "Morgrem","number": "860"},
{"species": "Mudbray","number": "749"},
{"species": "Mudsdale","number": "750"},
{"species": "Muk","number": "89"},
{"species": "Murkrow","number": "198"},
{"species": "Nacli","number": "932"},
{"species": "Naclstack","number": "933"},
{"species": "Noibat","number": "714"},
{"species": "Noivern","number": "715"},
{"species": "Numel","number": "322"},
{"species": "Nymble","number": "919"},
{"species": "Oinkologne","number": "916"},
{"species": "Oranguru","number": "765"},
{"species": "Oricorio","number": "741"},
{"species": "Orthworm","number": "968"},
{"species": "Oshawott","number": "501"},
{"species": "Overqwil","number": "904"},
{"species": "Pachirisu","number": "417"},
{"species": "Palafin","number": "964"},
{"species": "Palkia","number": "484"},
{"species": "Palossand","number": "770"},
{"species": "Passimian","number": "766"},
{"species": "Pawmi","number": "921"},
{"species": "Pawmo","number": "922"},
{"species": "Pawmot","number": "923"},
{"species": "Pawniard","number": "624"},
{"species": "Pelipper","number": "279"},
{"species": "Perrserker","number": "863"},
{"species": "Persian","number": "53"},
{"species": "Petilil","number": "548"},
{"species": "Phanpy","number": "231"},
{"species": "Pichu","number": "172"},
{"species": "Pikachu","number": "25"},
{"species": "Pincurchin","number": "871"},
{"species": "Pineco","number": "204"},
{"species": "Polteageist","number": "855"},
{"species": "Primeape","number": "57"},
{"species": "Psyduck","number": "54"},
{"species": "Pupitar","number": "247"},
{"species": "Pyroar","number": "668"},
{"species": "Quagsire","number": "195"},
{"species": "Quaquaval","number": "914"},
{"species": "Quaxly","number": "912"},
{"species": "Quaxwell","number": "913"},
{"species": "Quilava","number": "156"},
{"species": "Quilladin","number": "651"},
{"species": "Qwilfish","number": "211"},
{"species": "Raboot","number": "814"},
{"species": "Rabsca","number": "954"},
{"species": "Raichu","number": "26"},
{"species": "Ralts","number": "280"},
{"species": "Rayquaza","number": "384"},
{"species": "Regidrago","number": "895"},
{"species": "Regieleki","number": "894"},
{"species": "Rellor","number": "953"},
{"species": "Revavroom","number": "966"},
{"species": "Rillaboom","number": "812"},
{"species": "Riolu","number": "447"},
{"species": "Roaring Moon","number": "1005"},
{"species": "Rockruff","number": "744"},
{"species": "Rolycoly","number": "837"},
{"species": "Rookidee","number": "821"},
{"species": "Rotom","number": "479"},
{"species": "Rowlet","number": "722"},
{"species": "Rufflet","number": "627"},
{"species": "Sableye","number": "302"},
{"species": "Salamence","number": "373"},
{"species": "Salandit","number": "757"},
{"species": "Salazzle","number": "758"},
{"species": "Samurott","number": "503"},
{"species": "Sandaconda","number": "844"},
{"species": "Sandile","number": "551"},
{"species": "Sandy Shocks","number": "989"},
{"species": "Sandygast","number": "769"},
{"species": "Sawsbuck","number": "586"},
{"species": "Scatterbug","number": "664"},
{"species": "Scizor","number": "212"},
{"species": "Scorbunny","number": "813"},
{"species": "Scovillain","number": "952"},
{"species": "Scream Tail","number": "985"},
{"species": "Scyther","number": "123"},
{"species": "Seviper","number": "336"},
{"species": "Shelgon","number": "372"},
{"species": "Shellder","number": "90"},
{"species": "Shellos","number": "422"},
{"species": "Shinx","number": "403"},
{"species": "Shroodle","number": "944"},
{"species": "Shroomish","number": "285"},
{"species": "Shuppet","number": "353"},
{"species": "Silicobra","number": "843"},
{"species": "Sinistea","number": "854"},
{"species": "Skeledirge","number": "911"},
{"species": "Skiddo","number": "672"},
{"species": "Skiploom","number": "188"},
{"species": "Skrelp","number": "690"},
{"species": "Skuntank","number": "435"},
{"species": "Skwovet","number": "819"},
{"species": "Slaking","number": "289"},
{"species": "Slakoth","number": "287"},
{"species": "Sliggoo","number": "705"},
{"species": "Slither Wing","number": "988"},
{"species": "Slowbro","number": "80"},
{"species": "Slowking","number": "199"},
{"species": "Slowpoke","number": "79"},
{"species": "Smoliv","number": "928"},
{"species": "Sneasel","number": "215"},
{"species": "Sneasler","number": "903"},
{"species": "Snom","number": "872"},
{"species": "Snorunt","number": "361"},
{"species": "Snover","number": "459"},
{"species": "Sobble","number": "816"},
{"species": "Spectrier","number": "897"},
{"species": "Spewpa","number": "665"},
{"species": "Spidops","number": "918"},
{"species": "Spiritomb","number": "442"},
{"species": "Spoink","number": "325"},
{"species": "Sprigatito","number": "906"},
{"species": "Squawkabilly","number": "931"},
{"species": "Stantler","number": "234"},
{"species": "Staraptor","number": "398"},
{"species": "Staravia","number": "397"},
{"species": "Starly","number": "396"},
{"species": "Steenee","number": "762"},
{"species": "Stonjourner","number": "874"},
{"species": "Stunky","number": "434"},
{"species": "Sudowoodo","number": "185"},
{"species": "Sunflora","number": "192"},
{"species": "Sunkern","number": "191"},
{"species": "Surskit","number": "283"},
{"species": "Swablu","number": "333"},
{"species": "Swalot","number": "317"},
{"species": "Sylveon","number": "700"},
{"species": "Tadbulb","number": "938"},
{"species": "Talonflame","number": "663"},
{"species": "Tandemaus","number": "924"},
{"species": "Tarountula","number": "917"},
{"species": "Tatsugiri","number": "978"},
{"species": "Tauros","number": "128"},
{"species": "Teddiursa","number": "216"},
{"species": "Thundurus","number": "642"},
{"species": "Thwackey","number": "811"},
{"species": "Ting-Lu","number": "1003"},
{"species": "Tinkatink","number": "957"},
{"species": "Tinkaton","number": "959"},
{"species": "Tinkatuff","number": "958"},
{"species": "Toedscool","number": "948"},
{"species": "Toedscruel","number": "949"},
{"species": "Torkoal","number": "324"},
{"species": "Tornadus","number": "641"},
{"species": "Toxapex","number": "748"},
{"species": "Toxel","number": "848"},
{"species": "Toxicroak","number": "454"},
{"species": "Toxtricity","number": "849"},
{"species": "Tropius","number": "357"},
{"species": "Tsareena","number": "763"},
{"species": "Tynamo","number": "602"},
{"species": "Typhlosion","number": "157"},
{"species": "Tyranitar","number": "248"},
{"species": "Umbreon","number": "197"},
{"species": "Ursaluna","number": "901"},
{"species": "Ursaring","number": "217"},
{"species": "Urshifu","number": "892"},
{"species": "Uxie","number": "480"},
{"species": "Vaporeon","number": "134"},
{"species": "Varoom","number": "965"},
{"species": "Veluza","number": "976"},
{"species": "Venomoth","number": "49"},
{"species": "Venonat","number": "48"},
{"species": "Vespiquen","number": "416"},
{"species": "Vigoroth","number": "288"},
{"species": "Vivillon","number": "666"},
{"species": "Volcanion","number": "721"},
{"species": "Volcarona","number": "637"},
{"species": "Voltorb","number": "100"},
{"species": "Walking Wake","number": "1009"},
{"species": "Wattrel","number": "940"},
{"species": "Weavile","number": "461"},
{"species": "Whiscash","number": "340"},
{"species": "Wigglytuff","number": "40"},
{"species": "Wiglett","number": "960"},
{"species": "Wingull","number": "278"},
{"species": "Wo-Chien","number": "1001"},
{"species": "Wooper","number": "194"},
{"species": "Wugtrio","number": "961"},
{"species": "Wyrdeer","number": "899"},
{"species": "Yungoos","number": "734"},
{"species": "Zacian","number": "888"},
{"species": "Zamazenta","number": "889"},
{"species": "Zangoose","number": "335"},
{"species": "Zapdos","number": "145"},
{"species": "Zarude","number": "893"},
{"species": "Zoroark","number": "571"},
{"species": "Zorua","number": "570"},
{"species": "Zweilous","number": "634"},
];