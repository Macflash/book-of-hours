export const ItemData = [
  {
    ID: "dog.hungry",
    uniquenessgroup: "uqdog",
    Label: "Hungry Dog",
    Desc: "A bottomless and reproachful appetite! But <i>such a good</i> bottomless appetite!",
    inherits: "_beast.carnivore",
    audio: "Dog",
    aspects: {
      edge: 1,
      "boost.edge": 1,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      recovering: "dog.tame",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "dog.hungry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Something noble in its ancestry; and something else." },
  },
  {
    ID: "dog.tame",
    uniquenessgroup: "uqdog",
    Label: "Loyal Dog",
    Desc: "Walkies are surely a small price to pay for his unshakeable fidelity.",
    inherits: "_beast.carnivore",
    audio: "Dog",
    aspects: {
      cooperative: 1,
      edge: 2,
      "boost.edge": 2,
      heart: 2,
      "boost.heart": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      dist: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "dog.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "dog.hungry",
      "fatiguing.ingredients": "dog.hungry",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "dog.tame", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Something noble in its ancestry; and something else." },
  },
  {
    ID: "dog.wild",
    uniquenessgroup: "uqdog",
    Label: "Stray Dog",
    Desc: "Lost, frightened, eager.",
    inherits: "_beast.carnivore",
    audio: "Dog",
    aspects: {
      edge: 2,
      "boost.edge": 2,
      heart: 2,
      "boost.heart": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      recovering: "dog.tame",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "dog.wild", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Something noble in its ancestry; and something else." },
  },
  {
    ID: "gull.hungry",
    Label: "Hungry Gull",
    Desc: "Squawking urgently.",
    inherits: "_beast.carnivore",
    audio: "Gull",
    aspects: { moon: 1, "boost.moon": 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      recovering: "gull.tame",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "gull.hungry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Why would it fly free, when it can get free food?" },
  },
  {
    ID: "gull.tame",
    Label: "Pet Gull",
    Desc: "As noisy and demanding as it was in its youth. But much bigger.",
    inherits: "_beast.carnivore",
    audio: "Gull",
    aspects: {
      cooperative: 1,
      moon: 1,
      "boost.moon": 1,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      dist: [
        { id: "windrumour", morpheffect: "spawn", level: 1 },
        { id: "gull.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "gull.hungry",
      "fatiguing.ingredients": "gull.hungry",
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "gull.tame", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Why would it fly free, when it can get free food?" },
  },
  {
    ID: "gull.wild",
    Label: "Orphaned Chick",
    Desc: "A peeping little thing, its mother is dead or flown.",
    inherits: "_beast.carnivore",
    audio: "Chick",
    aspects: { moon: 1, "boost.moon": 1, sky: 2, "boost.sky": 2 },
    xtriggers: {
      recovering: "gull.tame",
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "gull.wild", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Fragile as a feathered petal." },
  },
  {
    ID: "relic.hungry",
    Label: "Hungry Relic",
    Desc: "Quarrelsome, until it feeds again.",
    inherits: "_beast.carnivore",
    audio: "Relic",
    aspects: {
      heart: 1,
      "boost.heart": 1,
      scale: 4,
      "boost.scale": 4,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      recovering: "relic.living",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "relic.hungry", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Its sigils evolve with age… but it ages so very slowly.",
    },
  },
  {
    ID: "relic.living",
    Label: "Living Relic",
    Desc: "Few of these have been seen in the world under <i>this</i> sun.",
    inherits: "_beast.carnivore",
    audio: "Relic",
    aspects: {
      cooperative: 1,
      heart: 1,
      "boost.heart": 1,
      scale: 4,
      "boost.scale": 4,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      dist: [
        { id: "old.moment", morpheffect: "spawn", level: 1 },
        { id: "relic.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "relic.hungry",
      "fatiguing.ingredients": "relic.hungry",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "relic.living", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Its sigils evolve with age… but it ages so very slowly.",
    },
  },
  {
    ID: "savage.relic",
    Label: "Savage Relic",
    Desc: "A shrieking little bundle of primordial ill-temper.",
    inherits: "_beast.carnivore",
    audio: "Relic",
    aspects: {
      heart: 1,
      "boost.heart": 1,
      scale: 4,
      "boost.scale": 4,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      recovering: "relic.living",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "savage.relic", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Its sigils evolve with age… but it ages so very slowly.",
    },
  },
  {
    ID: "stymphling",
    Label: "Stymphling",
    Desc: "Eva Dewulf taught her father Valentine how to hatch these silvery little villains, but he never learnt to like them.",
    inherits: "_beast.carnivore",
    audio: "Stymphling",
    aspects: {
      cooperative: 1,
      moon: 3,
      "boost.moon": 3,
      scale: 3,
      "boost.scale": 3,
    },
    xtriggers: {
      dist: [
        { id: "horizonsight", morpheffect: "spawn", level: 1 },
        { id: "stymphling.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "stymphling.hungry",
      "fatiguing.ingredients": "stymphling.hungry",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stymphling", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A distant cousin of salamanders, and of moonlight. [Certain Scholar-level recipes will hatch this from a stymphling from an egg in the presence of sufficient Moon.]",
    },
  },
  {
    ID: "stymphling.hungry",
    Label: "Hungry Stymphling",
    Desc: "Hissing avidly.",
    inherits: "_beast.carnivore",
    audio: "Stymphling",
    aspects: { moon: 3, "boost.moon": 3, scale: 3, "boost.scale": 3 },
    xtriggers: {
      recovering: "stymphling",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stymphling.hungry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A distant cousin of salamanders, and of moonlight." },
  },
  {
    ID: "cat.hungry",
    uniquenessgroup: "uqcat",
    Label: "Unimpressed Cat",
    Desc: "RECENTLY THERE HAS BEEN A DEARTH OF FOOD. YOU WILL UNDERSTAND THE GRAVITY OF THE SITUATION. NO DOUBT YOU ARE EAGER TO RECTIFY IT.",
    inherits: "_beast.carnivore.plusmilk",
    audio: "Cat",
    aspects: { grail: 1, "boost.grail": 1, moth: 1, "boost.moth": 1 },
    xtriggers: {
      recovering: "cat.tame",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "cat.hungry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Elegant, inscrutable, indefatigable." },
  },
  {
    ID: "cat.tame",
    uniquenessgroup: "uqcat",
    Label: "Pet Cat",
    Desc: "Oh? Were you hoping to <i>work</i> on that desk?",
    inherits: "_beast.carnivore.plusmilk",
    audio: "HappyCat",
    aspects: {
      cooperative: 1,
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
      moth: 2,
      "boost.moth": 2,
    },
    xtriggers: {
      dist: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "cat.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "cat.hungry",
      "fatiguing.ingredients": "cat.hungry",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "cat.tame", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Elegant, inscrutable, indefatigable." },
  },
  {
    ID: "cat.wild",
    uniquenessgroup: "uqcat",
    Label: "Stray Cat",
    Desc: "Feed some animals and earn their loyalty. Feed this one, and earn its patience.",
    inherits: "_beast.carnivore.plusmilk",
    audio: "Cat",
    aspects: {
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
      moth: 2,
      "boost.moth": 2,
    },
    xtriggers: {
      recovering: "cat.tame",
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "cat.wild", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Elegant, inscrutable, indefatigable." },
  },
  {
    ID: "viper.hungry",
    Label: "Hungry Viper",
    Desc: "Inclined to strike, although sluggishly, until fed.",
    inherits: "_beast.carnivore.plusmilk",
    audio: "Snake",
    aspects: { knock: 1, "boost.knock": 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      recovering: "viper.tame",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "viper.hungry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Ware fingers…" },
  },
  {
    ID: "viper.tame",
    Label: "Tame Viper",
    Desc: "An avid student of warm fireplace stones, warm mice, and warm milk.",
    inherits: "_beast.carnivore.plusmilk",
    audio: "Snake",
    aspects: {
      cooperative: 1,
      knock: 2,
      "boost.knock": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      dist: [
        { id: "earthsign", morpheffect: "spawn", level: 1 },
        { id: "viper.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "viper.hungry",
      "fatiguing.ingredients": "viper.hungry",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "viper.tame", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Ware fingers…" },
  },
  {
    ID: "viper.wild",
    Label: "Wild Viper",
    Desc: "Don't make any sudden moves.",
    inherits: "_beast.carnivore.plusmilk",
    audio: "Snake",
    aspects: { knock: 2, "boost.knock": 2, scale: 2, "boost.scale": 2 },
    xtriggers: {
      recovering: "viper.tame",
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "viper.wild", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Ware fingers…" },
  },
  {
    ID: "chicken.terrence",
    uniquenessgroup: "uqterrence",
    Label: "Terrence, the Chicken",
    Desc: "Was this magnificent and indomitable beast named for the rector's indomitable and magnificent housekeeper? Best not to inquire too closely.",
    inherits: "_beast.herbivore",
    audio: "Terrence",
    aspects: {
      cooperative: 1,
      scale: 3,
      "boost.scale": 3,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      dist: [
        { id: "egg.chicken", morpheffect: "spawn", level: 1 },
        { id: "chicken.terrence.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "chicken.terrence.hungry",
      "fatiguing.ingredients": "chicken.terrence.hungry",
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "chicken.terrence", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Terrence, in her magnificence." },
  },
  {
    ID: "chicken.terrence.hungry",
    uniquenessgroup: "uqterrence",
    Label: "Resentful Terrence",
    Desc: "Cluck. CLUCK.",
    inherits: "_beast.herbivore",
    audio: "Terrence",
    aspects: { scale: 3, "boost.scale": 3, sky: 1, "boost.sky": 1 },
    xtriggers: {
      recovering: "chicken.terrence",
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "chicken.terrence.hungry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Terrence, in her magnificence." },
  },
  {
    ID: "chicken.tuppence",
    uniquenessgroup: "uqtuppence",
    Label: "Tuppence, the Other Chicken",
    Desc: "Tuppence's most notable quality, all observers will agree, is that she is not Terrence.",
    inherits: "_beast.herbivore",
    audio: "Tuppence",
    aspects: {
      cooperative: 1,
      scale: 2,
      "boost.scale": 2,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      dist: [
        { id: "egg.chicken", morpheffect: "spawn", level: 1 },
        { id: "chicken.tuppence.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "chicken.tuppence.hungry",
      "fatiguing.ingredients": "chicken.tuppence.hungry",
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "chicken.tuppence", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Tuppence, in her uncertainty." },
  },
  {
    ID: "chicken.tuppence.hungry",
    uniquenessgroup: "uqtuppence",
    Label: "Pleading Tuppence",
    Desc: "Cluck. …cluck?",
    inherits: "_beast.herbivore",
    audio: "Tuppence",
    aspects: { scale: 2, "boost.scale": 2, sky: 1, "boost.sky": 1 },
    xtriggers: {
      recovering: "chicken.tuppence",
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "chicken.tuppence.hungry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Tuppence, in her uncertainty." },
  },
  {
    ID: "cockatoo.green",
    uniquenessgroup: "uqchaq",
    Label: "Magnificent Green Cockatoo",
    Desc: "On numerous occasions, this wonderful bird has remained almost entirely inaudible.",
    inherits: "_beast.herbivore",
    audio: "Cockatoo",
    aspects: {
      cooperative: 1,
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      dist: [
        { id: "mem.gossip", morpheffect: "spawn", level: 1 },
        { id: "cockatoo.green.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "cockatoo.green.hungry",
      "fatiguing.ingredients": "cockatoo.green.hungry",
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "cockatoo.green", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This proud bird strongly resembles a painting in the Gullscry Tower. But that painting is two hundred years old. Cockatoos are long-lived birds, but not that long; and they can be difficult to tell apart.",
    },
  },
  {
    ID: "cockatoo.green.hungry",
    uniquenessgroup: "uqchaq",
    Label: " ",
    Desc: "On numerous occasions, this wonderful bird has remained almost entirely inaudible.",
    inherits: "_beast.herbivore",
    audio: "Cockatoo",
    aspects: {
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      recovering: "cockatoo.green",
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "cockatoo.green.hungry", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This proud bird strongly resembles a painting in the Gullscry Tower. But that painting is two hundred years old. Cockatoos are long-lived birds, but not that long; and they can be difficult to tell apart.",
    },
  },
  {
    ID: "imago.hungry",
    Label: "Hungry Imago",
    Desc: "Torpid with hunger.",
    inherits: "_beast.herbivore",
    audio: "Imago",
    aspects: {
      knock: 2,
      "boost.knock": 2,
      moon: 2,
      "boost.moon": 2,
      moth: 6,
      "boost.moth": 6,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      recovering: "imago.perilous",
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "imago.hungry", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "If this had developed very differently, we might call it Carapace Cross…",
    },
  },
  {
    ID: "imago.perilous",
    Label: "Perilous Imago",
    Desc: "It's come so far. Release it, and it could fly farther.",
    inherits: "_beast.herbivore",
    audio: "Imago",
    aspects: {
      cooperative: 1,
      knock: 2,
      "boost.knock": 2,
      moon: 2,
      "boost.moon": 2,
      moth: 6,
      "boost.moth": 6,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      dist: [
        { id: "music.hive", morpheffect: "spawn", level: 1 },
        { id: "imago.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "imago.hungry",
      "fatiguing.ingredients": "imago.hungry",
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "imago.perilous", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "If this had developed very differently, we might call it Carapace Cross… [There are Keeper-level recipes that can develop this from a Chimeric Larva, in the presence of sufficient Moon or Moth.]",
    },
  },
  {
    ID: "larva.chimeric",
    Label: "Chimeric Larva",
    Desc: "Approaching the chrysalis crossroads.",
    inherits: "_beast.herbivore",
    audio: "Larva",
    aspects: {
      cooperative: 1,
      knock: 2,
      "boost.knock": 2,
      moon: 2,
      "boost.moon": 2,
      moth: 4,
      "boost.moth": 4,
    },
    xtriggers: {
      dist: [
        { id: "mem.fear", morpheffect: "spawn", level: 1 },
        { id: "larva.hungry", morpheffect: "transform", level: 1 },
      ],
      fatiguing: "larva.hungry",
      "fatiguing.ingredients": "larva.hungry",
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "larva.chimeric", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "An undulating bundle of possibilities… [Certain Scholar-level recipes will hatch this from an Egg in the presence of sufficient Moth - or sometimes Moon.]",
    },
  },
  {
    ID: "larva.hungry",
    Label: "Hungry Larva",
    Desc: "Twitching voraciously.",
    inherits: "_beast.herbivore",
    audio: "Larva",
    aspects: {
      knock: 2,
      "boost.knock": 2,
      moon: 2,
      "boost.moon": 2,
      moth: 4,
      "boost.moth": 4,
    },
    xtriggers: {
      recovering: "larva.chimeric",
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "larva.hungry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "An undulating bundle of possibilities…" },
  },
  {
    ID: "alembic.sly",
    Label: "Sly Alembic",
    Desc: "A cheeky decanter of wine fortified with unusual influences.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 3,
      "boost.grail": 3,
      heart: 3,
      "boost.heart": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "alembic.sly", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "An oddly satisfying chemical tang overlays the wine-flavours.",
    },
  },
  {
    ID: "assam.sweetened",
    Label: "Deep-Sweetened Assam (Pot)",
    Desc: "Sweetened with agave syrup and deep history.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      edge: 1,
      "boost.edge": 1,
      knock: 1,
      "boost.knock": 1,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 2,
      "boost.nectar": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      dist: [
        { id: "assam.sweetened.cup", morpheffect: "spawn", level: 1 },
        { id: "assam.sweetened.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "assam.sweetened", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "assam.sweetened.cup",
    Label: "Deep-Sweetened Assam (Cup)",
    Desc: "Sweetened with agave syrup and deep history.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      edge: 1,
      "boost.edge": 1,
      knock: 1,
      "boost.knock": 1,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 2,
      "boost.nectar": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "assam.sweetened.cup", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "assam.sweetened.h",
    Label: "Deep-Sweetened Assam (Half-Pot)",
    Desc: "Sweetened with agave syrup and deep history.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      edge: 1,
      "boost.edge": 1,
      knock: 1,
      "boost.knock": 1,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 2,
      "boost.nectar": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      dist: [
        { id: "assam.sweetened.cup", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "assam.sweetened.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "bottle.armagnac",
    Label: "Armagnac d'Ys (Bottle)",
    Desc: "Armagnac can only come from Gascony… but, if you believe M. Corentin, his vineyard began with vine-cuttings from Ys beyond the sea.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      moon: 2,
      "boost.moon": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.armagnac", morpheffect: "spawn", level: 1 },
        { id: "bottle.armagnac.mf", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.armagnac", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spiced amber and midnight berries." },
  },
  {
    ID: "bottle.armagnac.me",
    Label: "Armagnac d'Ys (Mostly Empty)",
    Desc: "Armagnac can only come from Gascony… but, if you believe M. Corentin, his vineyard began with vine-cuttings from Ys beyond the sea.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      moon: 2,
      "boost.moon": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.armagnac", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.armagnac.me", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spiced amber and midnight berries." },
  },
  {
    ID: "bottle.armagnac.mf",
    Label: "Armagnac d'Ys (Mostly Full)",
    Desc: "Armagnac can only come from Gascony… but, if you believe M. Corentin, his vineyard began with vine-cuttings from Ys beyond the sea.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      moon: 2,
      "boost.moon": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.armagnac", morpheffect: "spawn", level: 1 },
        { id: "bottle.armagnac.me", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.armagnac.mf", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spiced amber and midnight berries." },
  },
  {
    ID: "bottle.blackdove",
    Label: "Black Dove Wine",
    Desc: "A bottle of extraordinary age; a modest slosh of dark, heavily sedimented liquid behind the grimy glass. Just how old is this? Might it still be drinkable? [This wine cannot be served into glasses; drink it, gift it, or keep it.]",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 4,
      "boost.grail": 4,
      heart: 4,
      "boost.heart": 4,
      moon: 4,
      "boost.moon": 4,
      nectar: 4,
      "boost.nectar": 4,
    },
    xtriggers: {
      scrutiny: [
        { id: "old.moment", morpheffect: "spawn", level: 1 },
        { id: "bottle.blackdove", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The taste is not 'good' in any reasonable sense, and since no trace of alcohol remains, neither is this wine in any reasonable sense. But the layers and flavours go on and down, as if I were descending a cramped passage into the earth: moss, oak, deep tar, a sudden bright wince like grapes, and then at last stone's long savour fading. I'll taste it again tonight in every dream.",
    },
  },
  {
    ID: "bottle.dandelionwine",
    Label: "Dandelion Wine",
    Desc: "Home-made flower wine.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.dandelionwine", morpheffect: "spawn", level: 1 },
        { id: "bottle.dandelionwine.mf", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.dandelionwine", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Bottled summer, they call it, and this is why." },
  },
  {
    ID: "bottle.dandelionwine.me",
    Label: "Dandelion Wine (Mostly Empty)",
    Desc: "Home-made flower wine.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.dandelionwine", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.dandelionwine.me", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Bottled summer, they call it, and this is why." },
  },
  {
    ID: "bottle.dandelionwine.mf",
    Label: "Dandelion Wine (Mostly Full)",
    Desc: "Home-made flower wine.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.dandelionwine", morpheffect: "spawn", level: 1 },
        { id: "bottle.dandelionwine.me", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.dandelionwine.mf", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Bottled summer, they call it, and this is why." },
  },
  {
    ID: "bottle.jannings",
    Label: "Schloss Jannings (Bottle)",
    Desc: "A dry, aromatic white wine.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      edge: 2,
      "boost.edge": 2,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.jannings", morpheffect: "spawn", level: 1 },
        { id: "bottle.jannings.mf", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.jannings", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Is this really from a Bavarian vineyard? It's much better than it has any right to be.",
    },
  },
  {
    ID: "bottle.jannings.me",
    Label: "Schloss Jannings (Mostly Empty)",
    Desc: "A dry, aromatic white wine.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      edge: 2,
      "boost.edge": 2,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.jannings", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.jannings.me", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Is this really from a Bavarian vineyard? It's much better than it has any right to be.",
    },
  },
  {
    ID: "bottle.jannings.mf",
    Label: "Schloss Jannings (Mostly Full)",
    Desc: "A dry, aromatic white wine.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      edge: 2,
      "boost.edge": 2,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.jannings", morpheffect: "spawn", level: 1 },
        { id: "bottle.jannings.me", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.jannings.mf", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Is this really from a Bavarian vineyard? It's much better than it has any right to be.",
    },
  },
  {
    ID: "bottle.lambig",
    Label: "Lambig Broceliande (Bottle)",
    Desc: "Distilled from apples in the oldest forest of the western Continent.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "chalice.lambig", morpheffect: "spawn", level: 1 },
        { id: "bottle.lambig.mf", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.lambig", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'<i>Lambig</i> and <i>alembic</i>,' Thirza Blake once observed, 'arise from the same root. As do <i>alchemy</i>, and <i>khemia</i>, which is the land of the black earth. When you plant an apple-seed, speak these sounds to the soil.'",
    },
  },
  {
    ID: "bottle.lambig.me",
    Label: "Lambig Broceliande (Mostly Empty)",
    Desc: "Distilled from apples in the oldest forest of the western Continent.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "chalice.lambig", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.lambig.me", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'<i>Lambig</i> and <i>alembic</i>,' Thirza Blake once observed, 'arise from the same root. As do <i>alchemy</i>, and <i>khemia</i>, which is the land of the black earth. When you plant an apple-seed, speak these sounds to the soil.'",
    },
  },
  {
    ID: "bottle.lambig.mf",
    Label: "Lambig Broceliande (Mostly Full)",
    Desc: "Distilled from apples in the oldest forest of the western Continent.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "chalice.lambig", morpheffect: "spawn", level: 1 },
        { id: "bottle.lambig.me", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.lambig.mf", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'<i>Lambig</i> and <i>alembic</i>,' Thirza Blake once observed, 'arise from the same root. As do <i>alchemy</i>, and <i>khemia</i>, which is the land of the black earth. When you plant an apple-seed, speak these sounds to the soil.'",
    },
  },
  {
    ID: "bottle.roscraggan",
    Label: "Roscraggan Whisky (Bottle)",
    Desc: "The favourite tipple of Sir David Greene, eighth Librarian of Hush House.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      forge: 1,
      "boost.forge": 1,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.roscraggan", morpheffect: "spawn", level: 1 },
        { id: "bottle.roscraggan.mf", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.roscraggan", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Strong as sunset." },
  },
  {
    ID: "bottle.roscraggan.me",
    Label: "Roscraggan Whisky (Mostly Empty)",
    Desc: "The favourite tipple of Sir David Greene, eighth Librarian of Hush House.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      forge: 1,
      "boost.forge": 1,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.roscraggan", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.roscraggan.me", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Strong as sunset." },
  },
  {
    ID: "bottle.roscraggan.mf",
    Label: "Roscraggan Whisky (Mostly Full)",
    Desc: "The favourite tipple of Sir David Greene, eighth Librarian of Hush House.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      forge: 1,
      "boost.forge": 1,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.roscraggan", morpheffect: "spawn", level: 1 },
        { id: "bottle.roscraggan.me", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.roscraggan.mf", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Strong as sunset." },
  },
  {
    ID: "bottle.sloegin",
    Label: "Sloe Gin (Bottle)",
    Desc: "Home-made berry gin.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.sloegin", morpheffect: "spawn", level: 1 },
        { id: "bottle.sloegin.mf", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.sloegin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "This stuff is tasty, but don't underestimate it." },
  },
  {
    ID: "bottle.sloegin.me",
    Label: "Sloe Gin (Mostly Empty)",
    Desc: "Home-made berry gin.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.sloegin", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.sloegin.me", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "This stuff is tasty, but don't underestimate it." },
  },
  {
    ID: "bottle.sloegin.mf",
    Label: "Sloe Gin (Mostly Full)",
    Desc: "Home-made berry gin.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.sloegin", morpheffect: "spawn", level: 1 },
        { id: "bottle.sloegin.me", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.sloegin.mf", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "This stuff is tasty, but don't underestimate it." },
  },
  {
    ID: "bottle.strathcoyne",
    Label: "Strathcoyne Whisky (Bottle)",
    Desc: "The Collector has collected a distillery, it seems.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.strathcoyne", morpheffect: "spawn", level: 1 },
        { id: "bottle.strathcoyne.mf", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.strathcoyne", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Peaty as a heathered serpent." },
  },
  {
    ID: "bottle.strathcoyne.me",
    Label: "Strathcoyne Whisky (Mostly Empty)",
    Desc: "The Collector has collected a distillery, it seems.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.strathcoyne", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.strathcoyne.me", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Peaty as a heathered serpent." },
  },
  {
    ID: "bottle.strathcoyne.mf",
    Label: "Strathcoyne Whisky (Mostly Full)",
    Desc: "The Collector has collected a distillery, it seems.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      dist: [
        { id: "glass.strathcoyne", morpheffect: "spawn", level: 1 },
        { id: "bottle.strathcoyne.me", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.strathcoyne.mf", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Peaty as a heathered serpent." },
  },
  {
    ID: "chalice.lambig",
    Label: "Lambig Broceliande (Chalice)",
    Desc: "Distilled from apples in the oldest forest of the western Continent.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "chalice.lambig", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'<i>Lambig</i> and <i>alembic</i>,' Thirza Blake once observed, 'arise from the same root. As do <i>alchemy</i>, and <i>khemia</i>, which is the land of the black earth. When you plant an apple-seed, speak these sounds to the soil.'",
    },
  },
  {
    ID: "cordial.elderflower",
    Label: "Elderflower Cordial",
    Desc: "Wrung from sweet white flowers.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: { heart: 1, "boost.heart": 1, nectar: 2, "boost.nectar": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "cordial.elderflower", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Favoured by the brethren of St Brandan's in the days before the Dissolution.",
    },
  },
  {
    ID: "cup.cocoa",
    Label: "T.R.N. Limited Drinking Cocoa (Cup)",
    Desc: "T.R.N.'s Spices and Savours Department markets this as 'the Secret Sacrament of the Last Inca!'",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: { grail: 2, "boost.grail": 2, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "cup.cocoa", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Dark as mud and much tastier." },
  },
  {
    ID: "cup.coffee.dawnlion",
    Label: "Dawnlion Coffee (Cup)",
    Desc: "Coffee from beyond the great deserts.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      forge: 1,
      "boost.forge": 1,
      lantern: 2,
      "boost.lantern": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "cup.coffee.dawnlion", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Rich fruity flavours." },
  },
  {
    ID: "cup.coffee.eveningisles",
    Label: "Evening Isles Coffee (Cup)",
    Desc: "Coffee from beyond the sunset sea.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      forge: 1,
      "boost.forge": 1,
      lantern: 2,
      "boost.lantern": 2,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "cup.coffee.eveningisles", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Bright floral flavours." },
  },
  {
    ID: "cup.scrumpy",
    Label: "Scrumpy (Cup)",
    Desc: "The West Country's most unregenerate achievement; perhaps at its best when pressed from stolen apples.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 2,
      "boost.grail": 2,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "cup.scrumpy", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "That buttonholing back-of-the-throat tang-grab unique to the very roughest of apples.",
    },
  },
  {
    ID: "cup.tea.assam",
    Label: "C&H Second Flush Assam (Cup)",
    Desc: "Tea from the land of the <i>real</i> unicorn, imported by Cater & Hero.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      edge: 1,
      "boost.edge": 1,
      knock: 1,
      "boost.knock": 1,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "cup.tea.assam", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A wonderfully full-bodied taste, bright as morning." },
  },
  {
    ID: "cup.tea.lapsang",
    Label: "Veiled Goddess Lapsang Souchong (Cup)",
    Desc: "Named for an enigmatic minor deity whose charge is the healing of burns.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: { forge: 2, "boost.forge": 2, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "cup.tea.lapsang", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Smoky and astringent, like pine-scented dragon's breath.",
    },
  },
  {
    ID: "eigengrau",
    Label: "Eigengrau",
    Desc: "'If Greydawn Oil were drinkable…'",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      moon: 1,
      "boost.moon": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "eigengrau", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A bitter but heady liquor. Drink it, and vision persists even after you close your eyes. [There are Prentice-level recipes to craft this with Winter - or, occasionally, Lantern.]",
    },
  },
  {
    ID: "glass.armagnac",
    Label: "Armagnac d'Ys (Glass)",
    Desc: "Armagnac can only come from Gascony… but, if you believe M. Corentin, his vineyard began with vine-cuttings from Ys beyond the sea.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      moon: 2,
      "boost.moon": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.armagnac", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spiced amber and midnight berries." },
  },
  {
    ID: "glass.dandelionwine",
    Label: "Dandelion Wine (Glass)",
    Desc: "Home-made flower wine.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.dandelionwine", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Bottled summer, they call it, and this is why." },
  },
  {
    ID: "glass.jannings",
    Label: "Schloss Jannings (Glass)",
    Desc: "A dry, aromatic white wine.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      edge: 2,
      "boost.edge": 2,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.jannings", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Is this really from a Bavarian vineyard? It's much better than it has any right to be.",
    },
  },
  {
    ID: "glass.roscraggan",
    Label: "Roscraggan Whisky (Glass)",
    Desc: "The favourite tipple of Sir David Greene, eighth Librarian of Hush House.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      forge: 1,
      "boost.forge": 1,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.roscraggan", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Strong as sunset." },
  },
  {
    ID: "glass.sloegin",
    Label: "Sloe Gin (Glass)",
    Desc: "Home-made berry gin.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.sloegin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "This stuff is tasty, but don't underestimate it." },
  },
  {
    ID: "glass.strathcoyne",
    Label: "Strathcoyne Whisky (Glass)",
    Desc: "The Collector has collected a distillery, it seems.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.strathcoyne", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Peaty as a heathered serpent." },
  },
  {
    ID: "glass.water.isle",
    Label: "Isle-Water (Glass)",
    Desc: "From Brancrug's deep springs.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      water: 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.water.isle", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The water of the isle has a very faint, very distinctive taste sometimes described as 'appleshroomy'.",
    },
  },
  {
    ID: "glass.water.numa",
    Label: "Mist-Kissed Water (Glass)",
    Desc: "The faintest of vapours still ghosts the water's surface.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      water: 1,
      heart: 1,
      "boost.heart": 1,
      knock: 2,
      "boost.knock": 2,
      moon: 2,
      "boost.moon": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.water.numa", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is the nature of the taste of mist-kissed water: that one forgets it even as the taste passes from the tongue.",
    },
  },
  {
    ID: "lapsang.sweetened",
    Label: "Deep-Sweetened Lapsang (Pot)",
    Desc: "Sweetened with agave syrup and deep history.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      forge: 2,
      "boost.forge": 2,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 2,
      "boost.nectar": 2,
      sky: 1,
      "boost.sky": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      dist: [
        { id: "lapsang.sweetened.cup", morpheffect: "spawn", level: 1 },
        { id: "lapsang.sweetened.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "lapsang.sweetened", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "lapsang.sweetened.cup",
    Label: "Deep-Sweetened Lapsang (Cup)",
    Desc: "Sweetened with agave syrup and deep history.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      forge: 2,
      "boost.forge": 2,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 2,
      "boost.nectar": 2,
      sky: 1,
      "boost.sky": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "lapsang.sweetened.cup", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "lapsang.sweetened.h",
    Label: "Deep-Sweetened Lapsang (Half-Pot)",
    Desc: "Sweetened with agave syrup and deep history.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      forge: 2,
      "boost.forge": 2,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 2,
      "boost.nectar": 2,
      sky: 1,
      "boost.sky": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      dist: [
        { id: "lapsang.sweetened.cup", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "lapsang.sweetened.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "leathy",
    Label: "Leathy",
    Desc: "A dark and syrupy liquor favoured in unnamed forest villages.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      intoxicating: 1,
      grail: 2,
      "boost.grail": 2,
      moth: 4,
      "boost.moth": 4,
      nectar: 2,
      "boost.nectar": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      fatiguing: "leathy.lees",
      "fatiguing.ingredients": "leathy.lees",
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "leathy.lees", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'The tongue and the eye, and now we begin! Forget your name, forget your skin.' [There are Scholar-level Nectar - occasionally, Moon - recipes that will create this from another beverage.]",
    },
  },
  {
    ID: "liquid.solomon",
    Label: "Solomon's Preparation",
    Desc: "Solomon Husher would take this every night without fail before sleep, to close his ears to the sound of the waves. But on the 9th of January 1838, a heavy snow fell on Hush House. When the other residents dug themselves out, Husher was nowhere to be found. He had left a resignation letter, and an undrunk measure of his Preparation.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      moon: 1,
      "boost.moon": 1,
      moth: 1,
      "boost.moth": 1,
      winter: 4,
      "boost.winter": 4,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "liquid.solomon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The sounds around me remain, but I find that I can attend to each one, diminishing it or returning it as if I were closing a door on a troublesome draught. For no obvious reason, I find myself recalling that the 9th of January is the Agonalia of Janus. [There are Scholar-level recipes that can use flower-petals alongside Moon or Winter to craft this.]",
    },
  },
  {
    ID: "liquid.thirza",
    Label: "Thirza's Cordials",
    Desc: "Separately, each is undrinkable. But mix them, and they're only undrinkable after fifteen minutes.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      moth: 2,
      "boost.moth": 2,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "liquid.thirza", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Something like pine, something like vanilla. [There are Prentice-level recipes that use the aspect Nectar to craft this.]",
    },
  },
  {
    ID: "milk",
    Label: "Bottle of Milk",
    Desc: "[Mix in a bowl with Flour to make Dough - or pour over Meringue for a sweet dish celebrated at Claridge's.]",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      sustenance: 1,
      ingredient: 1,
      "milk.aspect": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "milk", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "pitcher.water.isle",
    Label: "Isle-Water (Pitcher)",
    Desc: "From Brancrug's deep springs.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      water: 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.water.isle", morpheffect: "spawn", level: 1 },
        { id: "pitcher.water.isle.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "pitcher.water.isle", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The water of the isle has a very faint, very distinctive taste sometimes described as 'appleshroomy'.",
    },
  },
  {
    ID: "pitcher.water.isle.h",
    Label: "Isle-Water (Half-Pitcher)",
    Desc: "From Brancrug's deep springs.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      water: 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.water.isle", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pitcher.water.isle.h", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The water of the isle has a very faint, very distinctive taste sometimes described as 'appleshroomy'.",
    },
  },
  {
    ID: "pitcher.water.numa",
    Label: "Mist-Kissed Water (Pitcher)",
    Desc: "The faintest of vapours still ghosts the water's surface.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      water: 1,
      heart: 1,
      "boost.heart": 1,
      knock: 2,
      "boost.knock": 2,
      moon: 2,
      "boost.moon": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.water.numa", morpheffect: "spawn", level: 1 },
        { id: "pitcher.water.numa.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pitcher.water.numa", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is the nature of the taste of mist-kissed water: that one forgets it even as the taste passes from the tongue.",
    },
  },
  {
    ID: "pitcher.water.numa.h",
    Label: "Mist-Kissed Water (Half-Pitcher)",
    Desc: "The faintest of vapours still ghosts the water's surface.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      water: 1,
      heart: 1,
      "boost.heart": 1,
      knock: 2,
      "boost.knock": 2,
      moon: 2,
      "boost.moon": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.water.numa", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pitcher.water.numa.h", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is the nature of the taste of mist-kissed water: that one forgets it even as the taste passes from the tongue.",
    },
  },
  {
    ID: "pot.cocoa",
    Label: "T.R.N. Limited Drinking Cocoa (Pot)",
    Desc: "T.R.N.'s Spices and Savours Department describes this as 'the Secret Sacrament of the Last Inca!'",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      grail: 2,
      "boost.grail": 2,
      heart: 1,
      "boost.heart": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.cocoa", morpheffect: "spawn", level: 1 },
        { id: "pot.cocoa.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.cocoa", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Dark as mud and much tastier." },
  },
  {
    ID: "pot.cocoa.h",
    Label: "T.R.N. Limited Drinking Cocoa (Half-Pot)",
    Desc: "T.R.N.'s Spices and Savours Department describes this as 'the Secret Sacrament of the Last Inca!'",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      grail: 2,
      "boost.grail": 2,
      heart: 1,
      "boost.heart": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.cocoa", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.cocoa.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Dark as mud and much tastier." },
  },
  {
    ID: "pot.coffee.dawnlion",
    Label: "Dawnlion Coffee (Pot)",
    Desc: "Coffee from beyond the great deserts.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      forge: 1,
      "boost.forge": 1,
      lantern: 2,
      "boost.lantern": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.coffee.dawnlion", morpheffect: "spawn", level: 1 },
        { id: "pot.coffee.dawnlion.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.coffee.dawnlion", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Rich fruity flavours." },
  },
  {
    ID: "pot.coffee.dawnlion.h",
    Label: "Dawnlion Coffee (Half-Pot)",
    Desc: "Coffee from beyond the great deserts.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      forge: 1,
      "boost.forge": 1,
      lantern: 2,
      "boost.lantern": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.coffee.dawnlion", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.coffee.dawnlion.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Rich fruity flavours." },
  },
  {
    ID: "pot.coffee.eveningisles",
    Label: "Evening Isles Coffee (Pot)",
    Desc: "Coffee from beyond the sunset sea.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      forge: 1,
      "boost.forge": 1,
      lantern: 2,
      "boost.lantern": 2,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.coffee.eveningisles", morpheffect: "spawn", level: 1 },
        { id: "pot.coffee.eveningisles.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "pot.coffee.eveningisles", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Bright floral flavours." },
  },
  {
    ID: "pot.coffee.eveningisles.h",
    Label: "Evening Isles Coffee (Half-Pot)",
    Desc: "Coffee from beyond the sunset sea.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      forge: 1,
      "boost.forge": 1,
      lantern: 2,
      "boost.lantern": 2,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.coffee.eveningisles", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.coffee.eveningisles.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Bright floral flavours." },
  },
  {
    ID: "pot.tea.assam",
    Label: "C&H Second Flush Assam (Pot)",
    Desc: "Tea from the land of the <i>real</i> unicorn, imported by Cater & Hero.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      ingredient: 1,
      edge: 1,
      "boost.edge": 1,
      knock: 1,
      "boost.knock": 1,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.tea.assam", morpheffect: "spawn", level: 1 },
        { id: "pot.tea.assam.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.tea.assam", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A wonderfully full-bodied taste, bright as morning." },
  },
  {
    ID: "pot.tea.assam.h",
    Label: "C&H Second Flush Assam (Half-Pot)",
    Desc: "Tea from the land of the <i>real</i> unicorn, imported by Cater & Hero.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      edge: 1,
      "boost.edge": 1,
      knock: 1,
      "boost.knock": 1,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.tea.assam", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.tea.assam.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A wonderfully full-bodied taste, bright as morning." },
  },
  {
    ID: "pot.tea.lapsang",
    Label: "Veiled Goddess Lapsang Souchong  (Pot)",
    Desc: "Named for an enigmatic minor deity whose charge is the healing of burns.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      ingredient: 1,
      forge: 2,
      "boost.forge": 2,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.tea.lapsang", morpheffect: "spawn", level: 1 },
        { id: "pot.tea.lapsang.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.tea.lapsang", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Smoky and astringent, like pine-scented dragon's breath.",
    },
  },
  {
    ID: "pot.tea.lapsang.h",
    Label: "Veiled Goddess Lapsang Souchong (Half-Pot)",
    Desc: "Named for an enigmatic minor deity whose charge is the healing of burns.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      forge: 2,
      "boost.forge": 2,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      dist: [
        { id: "cup.tea.lapsang", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pot.tea.lapsang.h", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Smoky and astringent, like pine-scented dragon's breath.",
    },
  },
  {
    ID: "pottery.scrumpy",
    Label: "Scrumpy",
    Desc: "The West Country's most unregenerate achievement; perhaps at its best when pressed from stolen apples.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 2,
      "boost.grail": 2,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pottery.scrumpy", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "That buttonholing back-of-the-throat tang-grab unique to the very roughest of apples.",
    },
  },
  {
    ID: "pottery.scrumpy.h",
    Label: "Scrumpy (Half-Finished)",
    Desc: "The West Country's most unregenerate achievement; perhaps at its best when pressed from stolen apples.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 2,
      "boost.grail": 2,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pottery.scrumpy.h", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "That buttonholing back-of-the-throat tang-grab unique to the very roughest of apples.",
    },
  },
  {
    ID: "rubywise.ruin",
    Label: "Rubywise Ruin",
    Desc: "A ruddy liquor wrung from flowers - even when the flowers aren't red.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 4,
      "boost.grail": 4,
      heart: 2,
      "boost.heart": 2,
      moth: 2,
      "boost.moth": 2,
      nectar: 2,
      "boost.nectar": 2,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "rubywise.ruin", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A ruddy liquor wrung from flowers - even when the flowers aren't red. [There are Scholar-level Grail recipes that can brew this from flowers.]",
    },
  },
  {
    ID: "sacrament.ascite",
    Label: "Sacrament Ascite",
    Desc: "Back in the Dawn Period, the Sisterhood of the Triple Knot used this in the rites of the Horned-Axe.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: { intoxicating: 1, ingredient: 1, knock: 6, "boost.knock": 6 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "sacrament.ascite", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Tart and tangy. 'Whoso drinketh may afterwards speak only in the voice of the owl, the cat, or the hawthorn.' Which might just mean it effectively numbs your tongue. [There are Keeper-level recipes that can render certain knock-toxins into this - in the presence of sufficient Knock.]",
    },
  },
  {
    ID: "sacrament.calicite",
    Label: "Sacrament Calicite",
    Desc: "Back in the Dawn Period, the Sisterhood of the Triple Knot used this in the rites of the Red Grail.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: { intoxicating: 1, ingredient: 1, grail: 6, "boost.grail": 6 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "sacrament.calicite", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Floral, musky. Traditionally drunk from the Chalice Murmurous, but you'll generally regret over-indulging even if you drink it from a tin mug in a pub. Especially in a pub. [There are Keeper-level recipes that can brew this from certain ruddy liquors, in the presence of sufficient Grail.]",
    },
  },
  // {
  //   ID: "sacrament.chalicite",
  //   Label: "Sacrament Calicite [Collector's Edition]",
  //   Desc: "Back in the Dawn Period, the Sisterhood of the Triple Knot used this in the rites of the Red Grail. [And unlike the patched version, it has Heart rather than Grail.]",
  //   inherits: "_beverage",
  //   audio: "SmallLiquid",
  //   aspects: {
  //     intoxicating: 1,
  //     ingredient: 1,
  //     grail: 6,
  //     "boost.grail": 6,
  //     heart: 6,
  //     "boost.heart": 6,
  //   },
  //   xtriggers: {
  //     scrutiny: [
  //       { id: "mem.sight", morpheffect: "spawn", level: 1 },
  //       { id: "sacrament.chalicite", morpheffect: "transform" },
  //     ],
  //   },
  //   xexts: {
  //     scrutiny:
  //       "Floral, musky. Traditionally drunk from the Chalice Murmurous, but you'll generally regret over-indulging even if you drink it from a tin mug in a pub. Especially in a pub.",
  //   },
  // },
  {
    ID: "sacrament.malachite",
    Label: "Sacrament Malachite",
    Desc: "Back in the Dawn Period, the Sisterhood of the Triple Knot used this in the rites of the Ring-Yew, the Hour which has also been called the Malachite.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: { intoxicating: 1, ingredient: 1, nectar: 6, "boost.nectar": 6 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "sacrament.malachite", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Syrupy, applesome. Sleep too soon after drinking this, and there's a real chance you'll put down tiny roots. [There are Keeper-level recipes that can brew this from <i>pyrus auricalcinus</i> , in the presence of sufficient Nectar.]",
    },
  },
  {
    ID: "serpentmilk",
    Label: "Serpent-Milk",
    Desc: "It does look almost like milk, and it is drinkable, but don't give it to cats or babies.",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      edge: 6,
      "boost.edge": 6,
      knock: 2,
      "boost.knock": 2,
      scale: 3,
      "boost.scale": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "old.moment", morpheffect: "spawn", level: 1 },
        { id: "serpentmilk", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Sssatisfying. [There are Keeper-level Edge - and perhaps Scale - recipes that can craft this from Perinculate.]",
    },
  },
  {
    ID: "skinshuck.mead",
    Label: "Skinshuck Mead",
    Desc: "A murky, sweet-smelling liquid crowded with sediment.",
    inherits: "_beverage",
    audio: "LargeLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      heart: 2,
      "boost.heart": 2,
      moth: 6,
      "boost.moth": 6,
      nectar: 2,
      "boost.nectar": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "skinshuck.mead", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Moth's gift to the devotees Old Form, so they could shed their skins and don the skins of beasts. After a few gulps, my skin will begin to peel as if I had spent too long in the sun. [With the great arts of Moth-aspect, perhaps this could be brewed from honey.]",
    },
  },
  {
    ID: "tea.blue.crown",
    Label: "Blue Crown Tea (Pot)",
    Desc: "Always served cold - more accurate to say 'inevitably served cold'.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      nectar: 1,
      "boost.nectar": 1,
      sky: 2,
      "boost.sky": 2,
      winter: 2,
      "boost.winter": 2,
    },
    xtriggers: {
      dist: [
        { id: "tea.blue.crown.cup", morpheffect: "spawn", level: 1 },
        { id: "tea.blue.crown.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.blue.crown", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "tea.blue.crown.cup",
    Label: "Blue Crown Tea (Cup)",
    Desc: "Always served cold - more accurate to say 'inevitably served cold'.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      nectar: 1,
      "boost.nectar": 1,
      sky: 2,
      "boost.sky": 2,
      winter: 2,
      "boost.winter": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.blue.crown.cup", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "tea.blue.crown.h",
    Label: "Blue Crown Tea (Half-Pot)",
    Desc: "Always served cold - more accurate to say 'inevitably served cold'.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      nectar: 1,
      "boost.nectar": 1,
      sky: 2,
      "boost.sky": 2,
      winter: 2,
      "boost.winter": 2,
    },
    xtriggers: {
      dist: [
        { id: "tea.blue.crown.cup", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.blue.crown.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "tea.fragrant.chalice",
    Label: "Fragrant Chalice Tea (Pot)",
    Desc: "'This', Thirza Blake once declared, 'is the colour of my heart.'",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      grail: 2,
      "boost.grail": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      dist: [
        { id: "tea.fragrant.chalice.cup", morpheffect: "spawn", level: 1 },
        { id: "tea.fragrant.chalice.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.fragrant.chalice", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "tea.fragrant.chalice.cup",
    Label: "Fragrant Chalice Tea (Cup)",
    Desc: "This', Thirza Blake once declared, 'is the colour of my heart.'",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: { grail: 2, "boost.grail": 2, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.fragrant.chalice.cup", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "tea.fragrant.chalice.h",
    Label: "Fragrant Chalice Tea (Half-Pot)",
    Desc: "This', Thirza Blake once declared, 'is the colour of my heart.'",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      grail: 2,
      "boost.grail": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      dist: [
        { id: "tea.fragrant.chalice.cup", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.fragrant.chalice.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "tea.honeyscar",
    Label: "Honeyscar Jasmine Tea (Pot)",
    Desc: "Soothing to the senses.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      forge: 2,
      "boost.forge": 2,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      dist: [
        { id: "tea.honeyscar.cup", morpheffect: "spawn", level: 1 },
        { id: "tea.honeyscar.h", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.honeyscar", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "tea.honeyscar.cup",
    Label: "Honeyscar Jasmine Tea (Cup)",
    Desc: "Soothing to the senses.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      forge: 2,
      "boost.forge": 2,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.honeyscar.cup", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "tea.honeyscar.h",
    Label: "Honeyscar Jasmine Tea (Half-Pot)",
    Desc: "Soothing to the senses.",
    inherits: "_beverage",
    audio: "SmallRattly",
    aspects: {
      distributable: 1,
      forge: 2,
      "boost.forge": 2,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      dist: [
        { id: "tea.honeyscar.cup", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "tea.honeyscar.h", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Thirst satisfied." },
  },
  {
    ID: "witching.tisane",
    Label: "Witching Tisane",
    Desc: "'To mend a broken heart, to colour a pale soul.'",
    inherits: "_beverage",
    audio: "SmallLiquid",
    aspects: { grail: 2, "boost.grail": 2, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "witching.tisane", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The taste is like a lingering kiss at the mouth's edge. [There are Prentice-level Grail recipes that can craft this.]",
    },
  },
  {
    ID: "bottle.raveline",
    Label: "Domaine Raveline (Bottle)",
    Desc: "The Ravelines abandoned their lands, and yet, someone is still making this wine.",
    inherits: "_beverage.raveline",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 2,
      "boost.grail": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.raveline", morpheffect: "spawn", level: 1 },
        { id: "bottle.raveline.mf", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.raveline", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Plummy; almost meaty." },
  },
  {
    ID: "bottle.raveline.me",
    Label: "Domaine Raveline (Mostly Empty)",
    Desc: "The Ravelines abandoned their lands, and yet, someone is still making this wine.",
    inherits: "_beverage.raveline",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      ingredient: 1,
      grail: 2,
      "boost.grail": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.raveline", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.raveline.me", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Plummy; almost meaty." },
  },
  {
    ID: "bottle.raveline.mf",
    Label: "Domaine Raveline (Mostly Full)",
    Desc: "The Ravelines abandoned their lands, and yet, someone is still making this wine.",
    inherits: "_beverage.raveline",
    audio: "LargeLiquid",
    aspects: {
      distributable: 1,
      intoxicating: 1,
      grail: 2,
      "boost.grail": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "glass.raveline", morpheffect: "spawn", level: 1 },
        { id: "bottle.raveline.me", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "bottle.raveline.mf", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Plummy; almost meaty." },
  },
  {
    ID: "glass.raveline",
    Label: "Domaine Raveline (Glass)",
    Desc: "The Ravelines abandoned their lands, and yet, someone is still making this wine.",
    inherits: "_beverage.raveline",
    audio: "SmallLiquid",
    aspects: {
      intoxicating: 1,
      ingredient: 1,
      grail: 2,
      "boost.grail": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "glass.raveline", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Plummy; almost meaty." },
  },
  {
    ID: "canvas",
    Label: "Canvas",
    Desc: "(YOUR PICTURE HERE)",
    inherits: "_blank",
    audio: "Fabric",
    aspects: {},
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "canvas", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Woven from pale flax, for the revelation of images. Black flax, of course, is the substance-skin of the Hour called Velvet…",
    },
  },
  {
    ID: "parchment.anthropoderm",
    Label: "Hallowed Anthropoderm",
    Desc: "Yes, it's human skin, but it's not <i>just</i> human skin.",
    inherits: "_blank",
    audio: "Fabric",
    aspects: { heart: 2, "boost.heart": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "parchment.anthropoderm", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Blessed by the priests of the Thunderskin, in those hollows of time where the Thunderskin is honoured for his work of preservation…",
    },
  },
  {
    ID: "parchment.nivine",
    Label: "Nivine Parchment",
    Desc: "Pale as the first wisp of mountain-cloud.",
    inherits: "_blank",
    audio: "Fabric",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "parchment.nivine", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "What animal gave its skin to make this parchment? Something colourless as glass and snow; something bleached and wrung and purer than silence.",
    },
  },
  {
    ID: "quire.paper",
    Label: "Quire of Paper",
    Desc: "Creamy-smooth, eagerly awaiting ink.",
    inherits: "_blank",
    audio: "Fabric",
    aspects: { fuel: 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "quire.paper", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "How much exactly is a quire? Enough, that's how much.",
    },
  },
  {
    ID: "bust.ambrose",
    unique: true,
    Label: "'Ambrose Westcott'",
    Desc: "This bust is cast in brass.",
    inherits: "_bust.collectible",
    audio: "Metallic",
    aspects: { forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.ambrose", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Ambrose Westcott, first Librarian of Hush House: metallurgist, alchemist, pyrographer.",
    },
  },
  {
    ID: "bust.brian",
    unique: true,
    Label: "'Brian Levinsen'",
    Desc: "This bust is cast from aluminium - oxidised to grey.",
    inherits: "_bust.collectible",
    audio: "Metallic",
    aspects: { moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.brian", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Brian Levinsen, ninth Librarian, painter and doctor, who never returned from the Western Front.",
    },
  },
  {
    ID: "bust.david",
    unique: true,
    Label: "'Sir David Greene'",
    Desc: "This bust is carved from reddish granite.",
    inherits: "_bust.collectible",
    audio: "Stone",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.david", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Sir David Greene, eighth Librarian - a former Nocturnal Branch superintendent, better known for rooting out mysteries than illuminating them.",
    },
  },
  {
    ID: "bust.eva",
    unique: true,
    Label: "'Eva Dewulf'",
    Desc: "This is the crystal called scolecite - the worm-stone - polished to chill smoothness.",
    inherits: "_bust.collectible",
    audio: "Stone",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.eva", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Baroness Eva - satirist, salonnière, herpetologist, and last of the Dewulfs.",
    },
  },
  {
    ID: "bust.fraser",
    unique: true,
    Label: "'Fraser Strathcoyne'",
    Desc: "This bust is shaped from beeswax. Careful with it!",
    inherits: "_bust.collectible",
    audio: "SmallGeneric",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.fraser", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Fraser Strathcoyne, 'the Collector', formerly Treasurer of the Curia and (briefly, in the absence of other candidates, and to his annoyance) fourth Librarian.",
    },
  },
  {
    ID: "bust.gervinus",
    unique: true,
    Label: "'Gervinus van Lauren'",
    Desc: "This bust is cast in highly polished bronze.",
    inherits: "_bust.collectible",
    audio: "Metallic",
    aspects: { knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.gervinus", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Gervinus van Lauren, eleventh Librarian of Hush House: an enigmatic recluse and reluctant ally of the Suppression Bureau, as skilled at closing ways as his predecessor Harries was at opening them.",
    },
  },
  {
    ID: "bust.gideon",
    unique: true,
    Label: "'Gideon Dewulf'",
    Desc: "The bust is terracotta, brightly painted.",
    inherits: "_bust.collectible",
    audio: "Ceramic",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.gideon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Gideon the physician, fifth of his line, nicknamed 'the Motley Baron' by those who disliked him and 'the Cutter' by those who feared him.",
    },
  },
  {
    ID: "bust.hendrik",
    unique: true,
    Label: "'Hendrik Dewulf'",
    Desc: "Hendrik Dewulf, 1st Baron Brancrug, known for his pious, merciless justice. Granted Brancrug Isle in 1536 after the dissolution of St Brandan's.",
    inherits: "_bust.collectible",
    audio: "Wooden",
    aspects: { edge: 1, "boost.edge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.hendrik", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Dewulf had been a mercenary captain on the Continent, under the notorious Maarten van Rossum. He was a hard man in a hard time, but not a simple one. He left van Rossum's service after the sack of the Hague, apparently after a spiritual crisis;  it is known that he was at one point in training as a priest.",
    },
  },
  {
    ID: "bust.kitty",
    unique: true,
    Label: "'Kitty Mazarine'",
    Desc: "This bust is carved from black limestone.",
    inherits: "_bust.collectible",
    audio: "Stone",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.kitty", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Kitty Mazarine, second Librarian - musician, composer, one-time placée. 'Almost French, almost Spanish, or almost American.'",
    },
  },
  {
    ID: "bust.musgrave",
    unique: true,
    Label: "'Musgrave Dewulf'",
    Desc: "The bust is carved from wood - cherry?",
    inherits: "_bust.collectible",
    audio: "Wooden",
    aspects: { rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.musgrave", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Musgrave Dewulf, who was mocked as 'the Bleating Baron' even while Brancrug prospered quietly, who was renowned for his piety but who won praise from the magus Julian Coseley. A quiet contradiction of a man.",
    },
  },
  {
    ID: "bust.natalia",
    unique: true,
    Label: "'Natalia Brulleau'",
    Desc: "This bust is cast in iron.",
    inherits: "_bust.collectible",
    audio: "Metallic",
    aspects: { edge: 1, "boost.edge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.natalia", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Natalia Brulleau, fifth Librarian - duellist, mystic, traveller.",
    },
  },
  {
    ID: "bust.serena",
    unique: true,
    Label: "'Serena Blackwood'",
    Desc: "This bust is carved from alabaster.",
    inherits: "_bust.collectible",
    audio: "Stone",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.serena", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Serena Blackwood, tenth Librarian, a redoubtable scholar and administrator who quarrelled with the prison governor and never completed her term.",
    },
  },
  {
    ID: "bust.solomon",
    unique: true,
    Label: "'Solomon Husher'",
    Desc: "This bust is the palest white marble.",
    inherits: "_bust.collectible",
    audio: "Stone",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.solomon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The Very Reverend Solomon Husher, third Librarian of Hush House. 'Nothing is a place. Everything ends.'",
    },
  },
  {
    ID: "bust.thirza",
    unique: true,
    Label: "'Thirza Blake'",
    Desc: "This bust is carved from malachite.",
    inherits: "_bust.collectible",
    audio: "Stone",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.thirza", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Thirza Blake, seventh Librarian, mistress of Wood-lore, squanderer of fortunes, giver of no damns whatsoever.",
    },
  },
  {
    ID: "bust.thomas",
    unique: true,
    Label: "'Thomas Dewulf'",
    Desc: "The bust is carved from limestone.",
    inherits: "_bust.collectible",
    audio: "Stone",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.thomas", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Thomas Dewulf, called 'Baron Silence', second of his line - astronomer, ouranoscoper, who followed in the footsteps of his long-deceased namesake.",
    },
  },
  {
    ID: "bust.valentine",
    unique: true,
    Label: "'Valentine Dewulf'",
    Desc: "Valentine Dewulf, 6th Baron Brancrug, known for his eccentricities. 'IN THE SKY HE SOUGHT HIS FRIENDS', an inscription reads.",
    inherits: "_bust.collectible",
    audio: "Wooden",
    aspects: { sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.valentine", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In 1721, poor Valentine fell from the top of the Gullscry Tower. Perhaps it was his melancholia that killed him - there were no witnesses, and his body was not found for three days. His son, Eales, was in no fit shape to inherit; and so his daughter Eva became Baroness at the age of only nineteen.",
    },
  },
  {
    ID: "bust.walter",
    unique: true,
    Label: "'Walter Dewulf'",
    Desc: "The bust is carved from serpentinite - a striking local stone.",
    inherits: "_bust.collectible",
    audio: "Stone",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.walter", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Walter Dewulf, who found Hush House a draughty castle and left it a stately home, but who will always be remembered for his cowardice, his sorrow, and his son Bryan's treachery.",
    },
  },
  {
    ID: "bust.willem",
    unique: true,
    Label: "'Willem Harries'",
    Desc: "This bust is cast in highly polished bronze.",
    inherits: "_bust.collectible",
    audio: "Metallic",
    aspects: { knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.willem", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Willem Harries, sixth Librarian, priest and nyctodromist, whose end has always remained obscure.",
    },
  },
  {
    ID: "abandoned.luggage",
    Label: "Abandoned Luggage",
    Desc: "Long past the help of any lost-and-found.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: {
      heart: 1,
      "boost.heart": 1,
      knock: 1,
      "boost.knock": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "abandoned.luggage", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "box.oddities",
    Label: "Box of Oddities",
    Desc: "A tiny treasury of forgotten things. Perhaps there's a real oddity in here somewhere.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "box.oddities", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "box.rarities",
    Label: "Box of Rarities",
    Desc: "A tiny treasury of forgotten things. Perhaps there's a real rarity in here somewhere.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "box.rarities", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "box.records",
    Label: "Records Box",
    Desc: "A treasure stored by a musician-spy.",
    inherits: "_cache",
    audio: "Ceramic",
    aspects: { "cache.unregarded.rarities": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "box.records", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "case.attache",
    Label: "Attaché Case",
    Desc: "A treasure stored by a diplomat-folklorist.",
    inherits: "_cache",
    audio: "Wooden",
    aspects: { "cache.unregarded.rarities": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "case.attache", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "casket.ambered",
    Label: "Ambered Casket",
    Desc: "A treasure stored by an adept on the cusp of ascension to Lantern-long.",
    inherits: "_cache",
    audio: "Ceramic",
    aspects: { "cache.bright.rarities": 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.ambered", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "casket.coppery",
    Label: "Coppery Casket",
    Desc: "A treasure stored by the doomed child of two immortals, seeking sanctuary at Hush House from the terrible hunger of their parents.",
    inherits: "_cache",
    audio: "Metallic",
    aspects: { "cache.bright.rarities": 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.coppery", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "casket.hive",
    Label: "Hive Casket",
    Desc: "A treasure stored by a visionary apiarist with Blomberende lineage.",
    inherits: "_cache",
    audio: "Wooden",
    aspects: { "cache.unregarded.rarities": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.hive", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "casket.imperial",
    Label: "Imperial Casket",
    Desc: "A treasure stored by an exiled empress.",
    inherits: "_cache",
    audio: "Metallic",
    aspects: { "cache.sovereign.rarities": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.imperial", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "casket.ironclad",
    Label: "Ironclad Casket",
    Desc: "A treasure stored by an esoteric anarch on the eve of her failed revolution.",
    inherits: "_cache",
    audio: "Metallic",
    aspects: { "cache.bright.rarities": 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.ironclad", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "casket.morbid",
    Label: "Morbid Casket",
    Desc: "A treasure bequeathed by a death-haunted merchant-prince in his last days.",
    inherits: "_cache",
    audio: "Ceramic",
    aspects: { "cache.night.rarities": 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.morbid", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "casket.mottled",
    Label: "Mottled Casket",
    Desc: "A treasure donated by a disgraced Tragularius assassin.",
    inherits: "_cache",
    audio: "Ceramic",
    aspects: { "cache.unregarded.rarities": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.mottled", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "casket.royal",
    Label: "Royal Casket",
    Desc: "A treasure stored by a king before his final sacrifice.",
    inherits: "_cache",
    audio: "Metallic",
    aspects: { "cache.sovereign.rarities": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.royal", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "casket.scaled",
    Label: "Scaled Casket",
    Desc: "A treasure left behind by an explorer on the eve of his final voyage.",
    inherits: "_cache",
    audio: "Wooden",
    aspects: { "cache.night.rarities": 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.scaled", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "casket.scarred",
    Label: "Scarred Casket",
    Desc: "A treasure stored by an accursed tomb-robber - or something that walked in her shape.",
    inherits: "_cache",
    audio: "Wooden",
    aspects: { "cache.night.rarities": 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "casket.scarred", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within)" },
  },
  {
    ID: "chest.souvenirs",
    Label: "Souvenir Cache",
    Desc: "Memories tidily tucked away until now.",
    inherits: "_cache",
    audio: "Ceramic",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chest.souvenirs", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "contraband.flotsam",
    Label: "Contraband Flotsam",
    Desc: "Salt-stained and wave-wracked.",
    inherits: "_cache",
    audio: "Wooden",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "contraband.flotsam", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "contraband.jetsam",
    Label: "Contraband Jetsam",
    Desc: "Flung overboard in furtive haste.",
    inherits: "_cache",
    audio: "Wooden",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "contraband.jetsam", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "crate.supplies",
    Label: "Crate of Supplies",
    Desc: "Something set helpfully aside.",
    inherits: "_cache",
    audio: "Wooden",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "crate.supplies", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "packages.abandoned",
    Label: "Abandoned Packages",
    Desc: "Battered but unbreached.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "packages.abandoned", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "packages.forsaken",
    Label: "Forsaken Packages",
    Desc: "They plead mutely to be opened. No-one else ever cared to.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "packages.forsaken", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "packages.lost",
    Label: "Lost Packages",
    Desc: "The label is smeared to unreadable fog.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "packages.lost", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "parcel.slim",
    Label: "Slim Parcel",
    Desc: "Carefully wrapped in brown paper.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "parcel.slim", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "parcel.tall",
    Label: "Tall Parcel",
    Desc: "Tightly wrapped in oilcloth.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "parcel.tall", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "suitcase.sb",
    Label: "Investigator's Suitcase",
    Desc: "A suitcase that once belonged to someone in the habit of shining a light in dark places.",
    inherits: "_cache",
    audio: "SmallGeneric",
    aspects: { knock: 1, "boost.knock": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "suitcase.sb", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "candle.aglaophotis",
    Label: "Aglaophotis-Scented Candle",
    Desc: "A candle scented with aglaophotis.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: {
      heart: 2,
      "boost.heart": 2,
      knock: 2,
      "boost.knock": 2,
      lantern: 2,
      "boost.lantern": 2,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
        { id: "candle.aglaophotis", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The air clears, and my thoughts likewise." },
  },
  {
    ID: "candle.bedside",
    Label: "Bedside Candleholder",
    Desc: "To comfort you through the dark hours.",
    inherits: "_candle",
    audio: "SmallMetallic",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "candle.bedside", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A clear and gentle light." },
  },
  {
    ID: "candle.bedside.x",
    Label: "Weighty Bedside Candleholder",
    Desc: "To comfort you through the dark hours.",
    inherits: "_candle",
    audio: "SmallMetallic",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        {
          id: "precursor.gervinite.fromcandle",
          morpheffect: "spawn",
          level: 1,
        },
        { id: "candle.bedside", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A clear and gentle light." },
  },
  {
    ID: "candle.beeswax",
    Label: "Beeswax Candle",
    Desc: "Simple and bright.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "candle.beeswax", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A clear and fragrant light." },
  },
  {
    ID: "candle.bottle",
    Label: "Bottled Candle",
    Desc: "An admirable combination of two utterly disparate elements. Quiet genius.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { grail: 1, "boost.grail": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "candle.bottle", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Traces of a paper label: DO… RAV….18…" },
  },
  {
    ID: "candle.fragrant.chalice",
    Label: "Chalice Candle",
    Desc: "A candle scented with fragrant chalice.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { grail: 2, "boost.grail": 2, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "candle.fragrant.chalice", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The scent is rich as roses." },
  },
  {
    ID: "candle.historywax",
    Label: "Historywax Candle",
    Desc: "A candle made with the oils of the 'history plant', <i>agave aeterna</i>.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { lantern: 3, "boost.lantern": 3 },
    xtriggers: {
      scrutiny: [
        { id: "wild.surmise", morpheffect: "spawn", level: 1 },
        { id: "candle.historywax", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The flame flickers, and the Histories ripple." },
  },
  {
    ID: "candle.holder.snowflake",
    Label: "Snowflake Candle",
    Desc: "A silver candle soft as snow.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "candle.holder.snowflake", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A chilly light." },
  },
  {
    ID: "candle.holderblack",
    Label: "Widow's Candle",
    Desc: "Light it in remembrance.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.salt", morpheffect: "spawn", level: 1 },
        { id: "candle.holderblack", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "At the sea-air's current, the candle-flame bows its head…",
    },
  },
  {
    ID: "candle.holdergold",
    Label: "Watchful Candle",
    Desc: "A little portable clarity.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
        { id: "candle.holdergold", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A bright clear light." },
  },
  {
    ID: "candle.holdersmall",
    Label: "Small Candlestick",
    Desc: "Simple elegance.",
    inherits: "_candle",
    audio: "Metallic",
    aspects: { forge: 1, "boost.forge": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "candle.holdersmall", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Fraser Strathcoyne gave Solomon Husher a much nicer set of silver ones. Thirza Blake sold all those off bought brass ones instead, but they've lasted pretty well.",
    },
  },
  {
    ID: "candle.holdertall",
    Label: "Tall Candlestick",
    Desc: "Elegant simplicity.",
    inherits: "_candle",
    audio: "Metallic",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "candle.holdertall", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Fraser Strathcoyne gave Solomon Husher a much nicer set of silver ones. Thirza Blake sold all those off bought brass ones instead, but they've lasted pretty well.",
    },
  },
  {
    ID: "candle.honeyscar",
    Label: "Honeyscar-Scented Candle",
    Desc: "A candle scented with honeyscar jasmine.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { forge: 2, "boost.forge": 2, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
        { id: "candle.honeyscar", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A roaring orange flame, a coppery sweetness." },
  },
  {
    ID: "candle.mothorchid",
    Label: "Moth-Orchid-Scented Candle",
    Desc: "A candle scented with moth orchid.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: { knock: 2, "boost.knock": 2, moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.dreamt", morpheffect: "spawn", level: 1 },
        { id: "candle.mothorchid", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A scent like evening." },
  },
  {
    ID: "candle.pyrus",
    Label: "Pear-Scented Candle",
    Desc: "A candle scented with <i>pyrus auricalcinus</i>.",
    inherits: "_candle",
    audio: "SmallGeneric",
    aspects: {
      forge: 4,
      "boost.forge": 4,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 4,
      "boost.nectar": 4,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
        { id: "candle.pyrus", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Forge and Nectar: so many consider them opposites. Is there another truth in the Malachite's shadows?",
    },
  },
  {
    ID: "candelabrum.crescent",
    Label: "Crescent Candelabrum",
    Desc: "An iron candelabrum inscribed with a simple frieze of crescent moons.",
    inherits: "_candlecomfort",
    audio: "Metallic",
    aspects: { lantern: 1, "boost.lantern": 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.intuition", morpheffect: "spawn", level: 1 },
        { id: "candelabrum.crescent", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A pale and watchful light…" },
  },
  {
    ID: "candelabrum.snowflake",
    Label: "Snowflake Candelabrum",
    Desc: "An iron candelabrum inscribed with a simple snowflake symbol.",
    inherits: "_candlecomfort",
    audio: "Metallic",
    aspects: { lantern: 1, "boost.lantern": 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "candelabrum.snowflake", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A chilly light." },
  },
  {
    ID: "armchair.grail",
    Label: "Ambrose's Favourite Chair",
    Desc: "Somewhat pocked with cigar-burns.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "armchair.grail", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Ambrose Westcott was a capacious gentleman, and he ensured the springs in this his fortress were calibrated to bear any conceivable weight. Two hundred years on, the springs still do their duty.",
    },
  },
  {
    ID: "armchair.knock",
    Label: "Staff Armchair",
    Desc: "Polished by the posteriors of dozens of loafing prison guards.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { knock: 2, "boost.knock": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "armchair.knock", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "For a great many years this chair sat below a dartboard. The leather is pocked with the marks of occasional misses (or, just possibly, assassination attempts.)",
    },
  },
  {
    ID: "armchair.librarian",
    Label: "Librarian's Armchair",
    Desc: "A sea-coloured, star-ornamented armchair.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "armchair.librarian", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "According to consistent tradition, this is the most comfortable chair in the entire House.",
    },
  },
  {
    ID: "armchair.moon.a",
    Label: "Grand Reading Armchair",
    Desc: "Nestle grandly.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "armchair.moon.a", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Once a favoured chair of the Treasurer of the Curia - an office that Fraser Strathcoyne often held, and much preferred to the post of Librarian.",
    },
  },
  {
    ID: "armchair.moon.b",
    Label: "Imposing Reading Armchair",
    Desc: "Nestle imposingly.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "armchair.moon.b", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A printed card reads: NOW PROBABLY SAFE TO SLEEP IN THIS CHAIR. G.C.",
    },
  },
  {
    ID: "armchair.moon.c",
    Label: "Nighted Chair",
    Desc: "Solid, comfortable, oddly unobtrusive.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.fear", morpheffect: "spawn", level: 1 },
        { id: "armchair.moon.c", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'Someone died in this chair,' I find myself thinking. There are no stains or remains; there is nothing at all to suggest that this might be true.",
    },
  },
  {
    ID: "armchair.sky",
    Label: "Kitty's Armchair",
    Desc: "This <i>looks</i> very like the armchair in which Kitty Mazarine, second Librarian, sat for El Bretón's famous group portrait.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "armchair.sky", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Kitty Mazarine (the story goes) napped in an armchair and dreamt of mirrors. She woke to find herself humming an unknown melody. That melody became her fuging-tune 'Thirty Birds'. If this is really that armchair, it's a little bit of history.",
    },
  },
  {
    ID: "astrolabe.sky",
    Label: "Baron Silence's Astrolabe",
    Desc: "Thomas Dewulf used this armillary - a spherical astrolabe - in his calculations, but it's much older than he was.",
    inherits: "_comfort",
    audio: "SmallMetallic",
    aspects: { tool: 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "astrolabe.sky", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The base is marked with the wave-and-bell of the proscribed city, Ys…",
    },
  },
  {
    ID: "bag.tricks",
    Label: "Bag of Tricks",
    Desc: "'Useful': a treacherously subjective term. Does this contain anything useful?",
    inherits: "_comfort",
    audio: "SmallGeneric",
    aspects: { cache: 1, moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bag.tricks", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Look within.)" },
  },
  {
    ID: "boots.morgue",
    Label: "Morgue Boots",
    Desc: "Reliable rubber.",
    inherits: "_comfort",
    audio: "Fabric",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "boots.morgue", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Purchased the second time that the morgue was ever used.",
    },
  },
  {
    ID: "brazier.moon",
    Label: "Lunar Brazier",
    Desc: "Scorched by fires lit before even the Romans came.",
    inherits: "_comfort",
    audio: "Metallic",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "brazier.moon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'When the light is extinguished, the shadow persists. After the House of the Sun, the House of the Moon.'",
    },
  },
  {
    ID: "bucket.ashes",
    Label: "Bucket of Ashes",
    Desc: "Long cold, but they faintly remember the fire.",
    inherits: "_comfort",
    audio: "Metallic",
    aspects: { material: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      fatiguing: "residue",
      "fatiguing.ingredients": "residue",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bucket.ashes", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Fingers stained grey…" },
  },
  {
    ID: "bucket.mop",
    Label: "Mop and Bucket",
    Desc: "Galvanised steel, enriched with the stains of a dozen years of methodical mopping.",
    inherits: "_comfort",
    audio: "LargeLiquid",
    aspects: { tool: 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bucket.mop", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Very, very, very faintly, even after all these years, the unmistakable yeasty marshy odour of Prophet-slime. ",
    },
  },
  {
    ID: "bucket.seawater",
    Label: "Bucket of Seawater",
    Desc: "Flecks of foam float on the surface.",
    inherits: "_comfort",
    audio: "LargeLiquid",
    aspects: { liquid: 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      fatiguing: "dregs",
      "fatiguing.ingredients": "dregs",
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bucket.seawater", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Fingers rock-pool chill…" },
  },
  {
    ID: "chair.bells",
    Label: "Bell-Tower Chair",
    Desc: "Sturdy, undistinguished, and, like so much else in the House, the last of its kind.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { forge: 1, "boost.forge": 1, sky: 2, "boost.sky": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.bells", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Serena Blackwood brought this chair up the church tower stairs to sit and read by candle-light. The stairs were tough on her knees, but she learnt that Governor Collers was unlikely to bother her here.",
    },
  },
  {
    ID: "chair.church.atrium",
    Label: "Atrium Chair",
    Desc: "Reserved for latecomers, non-believers, and the pensive.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.church.atrium", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Is there any accusatory element to its creaks? Was that intentional?",
    },
  },
  {
    ID: "chair.church.heart",
    Label: "Restful Seat",
    Desc: "A dawn-coloured seat for a solar congregation.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.church.heart", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Sit in serenity." },
  },
  {
    ID: "chair.church.knock",
    Label: "Uncomfortable Seat",
    Desc: "Shaped to assure the attention of the faithful.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.church.knock", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Ornamented with the circled sun-cross of the Church." },
  },
  {
    ID: "chair.church.lantern",
    Label: "Contemplative Seat",
    Desc: "Perch here to meditate on the mysteries of dawn.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.church.lantern", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'Light like the ever-burning Wheel rolls all our sins away / they fly forgotten as a dream dies at the opening day.'",
    },
  },
  {
    ID: "chair.garden1",
    Label: "Comfortable Garden Chair",
    Desc: "Amateurishly varnished, characterfully stained.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.garden1", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Shadows shift, sun-bars follow." },
  },
  {
    ID: "chair.garden2",
    Label: "Restful Garden Chair",
    Desc: "Sit here and listen to the trees grow. Or the leaves fall. Preferences differ.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.garden2", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Inlaid with green-stained bone." },
  },
  {
    ID: "chair.grail.a",
    Label: "Greene's Red Chair",
    Desc: "A little wobbly. Greene used to lean forward.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.grail.a", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Someone has absent-mindedly carved symbols down one leg. From top to bottom: a cup; a winged insect; an axe; a candle.",
    },
  },
  {
    ID: "chair.grail.b",
    Label: "Wine-Dark Chair",
    Desc: "An elegant eighteenth-century piece imported from France.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.grail.b", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There were twelve of these, but Gervinus van Lauren had most of them broken up and burnt the week after his arrival. 'Bad memories,' was all he would say.",
    },
  },
  {
    ID: "chair.grail.c",
    Label: "Expansive Chair",
    Desc: "Upholstered in a velvet of peculiar richness that invites the hand. Sit down a while. You've earned it.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { grail: 1, "boost.grail": 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.grail.c", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "A printed card reads: NOW SAFE TO SLEEP IN THIS CHAIR. G.C.",
    },
  },
  {
    ID: "chair.gullscry",
    Label: "Snug Chair",
    Desc: "A wicker chair with a soft white lap blanket for chilly evenings.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { heart: 2, "boost.heart": 2, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.gullscry", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Is the blanket bear-skin? Polar bear? It might be, but it's softer than one would expect.",
    },
  },
  {
    ID: "chair.knock",
    Label: "Chair of Challenges",
    Desc: "Here the Librarian Harries sat, to formulate the paradoxes he would bequeath to van Lauren.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "chair.knock", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Perhaps the faintest, driest voice murmured: 'Who will see the Second Dawn?' Or perhaps that was only something that once I read.",
    },
  },
  {
    ID: "chair.lantern",
    Label: "Straw-Cushioned Chair",
    Desc: "Upholstered without any particular skill.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.lantern", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A little scratchy, but an optimistic sort would point out that makes it easier to stay awake when one's eyelids waver.",
    },
  },
  {
    ID: "chair.moon.a",
    Label: "Nightsky Chair",
    Desc: "Velvet smooth as midnight.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.moon.a", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A sometime seat of the Secretary Enigmatic of the Curia, whose responsibilities and even identity were not widely discussed, but might conceivably have been one called 'cc'.",
    },
  },
  {
    ID: "chair.moon.b",
    Label: "Starstrewn Chair",
    Desc: "Velvet soft as starlight.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.moon.b", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The pattern was reputedly preferred by Baron Thomas." },
  },
  {
    ID: "chair.moon.c",
    Label: "Twilight Chair",
    Desc: "Velvet dark as blue dusk.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.moon.c", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "On a clear late evening in July, look west from the Gullscry Tower and the sky will be this colour exactly.",
    },
  },
  {
    ID: "chair.severe1",
    Label: "Severe Chair",
    Desc: "Unfussy marsh-green upholstery.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { edge: 1, "boost.edge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.severe1", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "This chair is innocent of chairly secrets." },
  },
  {
    ID: "chair.severe2",
    Label: "Spartan Chair",
    Desc: "The cushion has been removed, perhaps as an act of petty revenge.",
    inherits: "_comfort",
    audio: "Wooden",
    aspects: { edge: 1, "boost.edge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.severe2", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Hard Librarians value hard chairs." },
  },
  {
    ID: "chair.sky",
    Label: "Melodic Chair",
    Desc: "Someone appears to have tuned the squeaks.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "chair.sky", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Relax on it just <i>so</i>, and you can almost make out the first notes of Kitty Mazarine's fuging-tune, 'Thirty Birds'.",
    },
  },
  {
    ID: "chair.sky.x",
    Label: "Lumpy Melodic Chair",
    Desc: "Someone appears to have tuned the squeaks.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        {
          id: "precursor.pale.mommet.fromchair",
          morpheffect: "spawn",
          level: 1,
        },
        { id: "chair.sky", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Someone appears to have tuned the squeaks." },
  },
  {
    ID: "chair.wicker",
    Label: "Wicker Chair",
    Desc: "Elderly, but robust.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "chair.wicker", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A creaking cane back generates the occasional spiteful splinter.",
    },
  },
  {
    ID: "footstool.grail",
    Label: "Inviting Footstool",
    Desc: "How many home from the storm propped their feet here and gazed into the fire?",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "footstool.grail", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Ambrose Westcott was once lost on the moors. He would not suffer it to be spoken of. Thirza Blake was often lost on the moors. She would not suffer it not to be spoken of.",
    },
  },
  {
    ID: "footstool.librarian",
    Label: "Librarian's Footstool",
    Desc: "A sea-coloured, star-ornamented footstool.",
    inherits: "_comfort",
    audio: "Wooden",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "footstool.librarian", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Put your feet up. The House is yours. Your work might not be done, but you've earned a rest.",
    },
  },
  {
    ID: "footstool.moon",
    Label: "Moon Footstool",
    Desc: "A soft gold glimmer in the half-light.",
    inherits: "_comfort",
    audio: "Wooden",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "footstool.moon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There is a stain half way down the side where, some time in the mid 1830s, Solomon Husher spilt his tea when he heard that Julian Coseley had apologised.",
    },
  },
  {
    ID: "gullscry.memorial",
    Label: "Valentine's Memorial",
    Desc: "Valentine died two centuries ago. This stone is much newer - more like two decades old.",
    inherits: "_comfort",
    audio: "Stone",
    aspects: { winter: 3, "boost.winter": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "gullscry.memorial", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Brian Levinsen, ninth Librarian of the House, often spoke of his sympathy for Valentine Dewulf. He commissioned this memorial stone in 1914, but by the time it arrived, he had volunteered as a medical officer in the Great War. He never returned; he never saw this memorial; and it became his own.",
    },
  },
  {
    ID: "lamp.artdeco",
    Label: "Elegant Sunburst Lamp",
    Desc: "A bright tree of brass.",
    inherits: "_comfort",
    audio: "SmallMetallic",
    aspects: { light: 1, lantern: 3, "boost.lantern": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "lamp.artdeco", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "An inscription on the pediment reads 'The Gods-from-steel did not exist.'",
    },
  },
  {
    ID: "lamp.moth",
    Label: "Compelling Lamp",
    Desc: "Moths circle it like maypole dancers.",
    inherits: "_comfort",
    audio: "SmallMetallic",
    aspects: { light: 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "lamp.moth", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Gaze on the light, and for a little while set thoughts aside…",
    },
  },
  {
    ID: "lamp.revelation",
    Label: "Reading Lamp",
    Desc: "To ensure clarity of vision even in utmost dark. It does flicker occasionally.",
    inherits: "_comfort",
    audio: "SmallMetallic",
    aspects: { light: 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "lamp.revelation", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A gift from Governor Collers - apparently, for once, without any ulterior motive.",
    },
  },
  {
    ID: "pot.bigken",
    Label: "Paradise Palm",
    Desc: "An unquenchable vitality.",
    inherits: "_comfort",
    audio: "Ceramic",
    aspects: { nectar: 2, "boost.nectar": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.bigken", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Once, these grew only on one tiny island on the other side of the world. That's empire for you.",
    },
  },
  {
    ID: "pot.watchful",
    Label: "Watchful Potted Plant",
    Desc: "Not everything needs eyes.",
    inherits: "_comfort",
    audio: "Ceramic",
    aspects: { lantern: 1, "boost.lantern": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.watchful", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The sense of awareness persists; but the plant remains immobile. Unsettling, but harmless. It doesn't even have thorns.",
    },
  },
  {
    ID: "sofa.grail.a",
    Label: "Lingering Repose",
    Desc: "Upholstered in a velvet of peculiar richness that invites the hand.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { grail: 1, "boost.grail": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "sofa.grail.a", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Carved on the back by the maker: BE WITH ME, A LITTLE WHILE. Hearts and flowers have also been carved, by an unauthorised but skilful hand.",
    },
  },
  {
    ID: "sofa.grail.b",
    Label: "Delightful Repose",
    Desc: "Placed by the Curia of the Isle to allow a rest before an ascent. Or after a descent.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "sofa.grail.b", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "House folklore claims that Ambrose Westcott suffered his final apoplexy on this sofa, after a particularly hasty trample up and down the stairs to argue with visiting priests.",
    },
  },
  {
    ID: "sofa.grail.b.x",
    Label: "Delightful Repose",
    Desc: "Placed by the Curia of the Isle to allow a rest before an ascent. Or after a descent.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        {
          id: "precursor.spintria.bronze.fromsofa",
          morpheffect: "spawn",
          level: 1,
        },
        { id: "sofa.grail.b", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "House folklore claims that Ambrose Westcott suffered his final apoplexy on this sofa, after a particularly hasty trample up and down the stairs to argue with visiting priests.",
    },
  },
  {
    ID: "sofa.gullscry",
    Label: "Soft Blue Sofa",
    Desc: "Gently complements the seas and skies around Brancrug.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { moon: 2, "boost.moon": 2, sky: 2, "boost.sky": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "sofa.gullscry", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Ambrose Westcott ordered the destruction of Valentine's bed, for reasons he did not choose to articulate. Much later, Brian Levinsen had this sofa installed so he could nap here.",
    },
  },
  {
    ID: "sofa.knock",
    Label: "Chaise-Longue of Conclusions",
    Desc: "Here the Librarian van Lauren lay, to ponder the paradoxes he had inherited from Harries.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { grail: 1, "boost.grail": 1, knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "sofa.knock", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'Perhaps the faintest, driest voice murmured: 'The Librarian that comes after is not the Librarian.' Or perhaps that was only something that once we read.",
    },
  },
  {
    ID: "sofa.russet",
    Label: "Russet Couch",
    Desc: "A utilitarian item, arms varnished, upholstery shiny with hard use.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "sofa.russet", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Did Christopher Illopoly really have this stolen from a first-class waiting-room? And did he really bribe a bishop to keep the matter quiet?",
    },
  },
  {
    ID: "sofa.scale",
    Label: "Brooding Sofa",
    Desc: "Here sink in gloom.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "sofa.scale", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "At each movement, a puff of dust arises from the cushions.",
    },
  },
  {
    ID: "sofa.winter",
    Label: "Sea-Green Sofa",
    Desc: "Here, Lady Eva Dewulf would weave her intrigues, and satisfy her secret craving for sentimental novels.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "sofa.winter", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Lord Franklin Bancroft, magus and rake, was a frequent visitor to Hush House and his name was often linked with Lady Eva's. He provoked scandal with a lubricious encomium, <i>Thy Throne Malachite</i>, dedicated to this very item of furniture. Lady Eva took this badly, withdrawing Bancroft's invitation to Christmas dinner, but relented in time for her spring ball, on condition he attended dressed entirely in green.",
    },
  },
  {
    ID: "stand.umbrella",
    Label: "Treasury of Shelters",
    Desc: "It's like an armoury for not getting pneumonia.",
    inherits: "_comfort",
    audio: "Fabric",
    aspects: { heart: 1, "boost.heart": 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stand.umbrella", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A thick deposit has accrued to the bottom of the stand. A hundred years of rain applied to a hundred winters of mud.",
    },
  },
  {
    ID: "statue.crozier",
    Label: "'Authority'",
    Desc: "Once this shepherd's crook represented the authority of the Church. Perhaps the Suppression Bureau kept it here because they liked the idea of authority, in general.",
    inherits: "_comfort",
    audio: "Stone",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "statue.crozier", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The Suppression Bureau, of course, is of a more ecclesiastical character than its progenitory Nocturnal Branch, though it has never had any <i>official</i> links to the Church Solar…",
    },
  },
  {
    ID: "statue.debraose",
    Label: "'Lady de Braose'",
    Desc: "Sometimes known affectionately as 'the first Eva'. Lady de Braose never visited the Isle, but it was her generous endowment that allowed the Abbey to thrive and grow in the thirteenth century.",
    inherits: "_comfort",
    audio: "Wooden",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "statue.debraose", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Why did Eva de Braose, the widow of a Marcher Lord from much further north, take such an interest in St Brandan's? There are stories…",
    },
  },
  {
    ID: "statue.rowena",
    Label: "'Lady Rowena'",
    Desc: "For as long as there has been a Hush House, there have been stories of its enigmatic protectress.",
    inherits: "_comfort",
    audio: "Stone",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "statue.rowena", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A Henry Moore piece - perhaps a genuine one. Moore did speak, very cautiously, of an 'encounter with a pale commission.'",
    },
  },
  {
    ID: "stool.gullscry",
    Label: "Painter's Stool",
    Desc: "A comfortable enough perch.",
    inherits: "_comfort",
    audio: "Wooden",
    aspects: { sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stool.gullscry", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Someone has doggedly cleaned bird droppings and paint from this, not once but many times. The fabric is splotched and discoloured - the varnish of the wood is streaked like rain.",
    },
  },
  {
    ID: "stool.iron",
    Label: "Carpenter's Stool",
    Desc: "Irreparably wobbly. Perhaps it's haunted.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { edge: 1, "boost.edge": 1, moth: 2, "boost.moth": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stool.iron", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Someone has deliberately sanded down the end of each leg to a different angle.",
    },
  },
  {
    ID: "stool.knock",
    Label: "Violet Stool",
    Desc: "Damson cushion, holly-wood marquetry.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stool.knock", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "The cushion is embroidered with the serpents of St Agnes.",
    },
  },
  {
    ID: "stool.lavender",
    Label: "Prison Stool",
    Desc: "A cheerful lavender colour, possibly to encourage rehabilitative enthusiasm.",
    inherits: "_comfort",
    audio: "Wooden",
    aspects: { heart: 2, "boost.heart": 2, knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stool.lavender", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Someone has scratched a series of tally marks down one leg. Seventy-seven days.",
    },
  },
  {
    ID: "stool.librarian",
    Label: "Librarian's Stool",
    Desc: "A sea-coloured, star-ornamented stool.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stool.librarian", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A stout little soldier, on whose worn surface have rested the slippers of a dozen generations of Librarians.",
    },
  },
  {
    ID: "stool.moon",
    Label: "Moon Stool",
    Desc: "Polished to pallor by the posteriors of past Librarians.",
    inherits: "_comfort",
    audio: "Wooden",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stool.moon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A dark fruitwood - cherry? with very nicely executed joinery at the top.",
    },
  },
  {
    ID: "stool.pale",
    Label: "Pale Stool",
    Desc: "Bleached beech.",
    inherits: "_comfort",
    audio: "Chair",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "stool.pale", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Subtle, elegant fluting along each leg. Initialled L.T.P.",
    },
  },
  {
    ID: "stool.plain",
    Label: "Plain Stool",
    Desc: "The most reliable object imaginable. How old <i>is</i> it?",
    inherits: "_comfort",
    audio: "Wooden",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "stool.plain", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "It's older than one might expect. Very faintly, the triple knot can be made out on the underside of the seat…",
    },
  },
  {
    ID: "table.cypress",
    Label: "Cypress-Wood Table",
    Desc: "The only piece of furniture Kitty Mazarine brought East.",
    inherits: "_comfort",
    audio: "BigChair",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "table.cypress", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Soaked with the sun of forgotten evenings, in the times when Kitty Mazarine was contracted to another, but knew too the contracted number of his days…",
    },
  },
  {
    ID: "chronsicord",
    Label: "Chronsichord",
    Desc: "A music-box that only performs once; a typewriter that can only send one message; a clock that can only strike Now.",
    inherits: "_device",
    audio: "SmallMetallic",
    aspects: {
      ink: 1,
      forge: 3,
      "boost.forge": 3,
      knock: 6,
      "boost.knock": 6,
      sky: 3,
      "boost.sky": 3,
      winter: 3,
      "boost.winter": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.pattern", morpheffect: "spawn", level: 1 },
        { id: "chronsicord", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A whirl of motion; a series of clicks; then silence. [There are Keeper-level Knock recipes that can craft this from Gervinite.]",
    },
  },
  {
    ID: "dearday.lens",
    Label: "Dearday Lens",
    Desc: "A fiendishly simple - and wretchedly fragile - optical device.",
    inherits: "_device",
    audio: "SmallCeramic",
    aspects: {
      lens: 1,
      glass: 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      lantern: 2,
      "boost.lantern": 2,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "dearday.lens", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Inspired by one half of the notorious Edge dyad and developed by the Librarian Brulleau; useful for starting fires and inciting headaches, among other things. [There are Prentice-level Lantern recipes which can create one of these.]",
    },
  },
  {
    ID: "flushed.mommet",
    Label: "Flushed Mommet",
    Desc: "A crimson-stained little cloth doll with merry button eyes and a frill of twitching ribbons.",
    inherits: "_device",
    audio: "SmallGeneric",
    aspects: {
      woven: 1,
      inert: 1,
      grail: 6,
      "boost.grail": 6,
      heart: 3,
      "boost.heart": 3,
      moth: 3,
      "boost.moth": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "flushed.mommet", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "It's not alive - or not very. It is hungry - but not very. [There are Keeper-level Grail recipes which can develop a Pale Mommet into one of these.]",
    },
  },
  {
    ID: "pale.mommet",
    Label: "Pale Mommet",
    Desc: "A gently twitching little cloth doll with melancholy button eyes and a frill of coloured ribbons.",
    inherits: "_device",
    audio: "SmallGeneric",
    aspects: {
      woven: 1,
      inert: 1,
      grail: 4,
      "boost.grail": 4,
      heart: 2,
      "boost.heart": 2,
      moth: 2,
      "boost.moth": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "pale.mommet", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "It's cold. It's always cold. It's grateful for my warmth… [There are Scholar-level Grail recipes which can craft one of these from fabric.]",
    },
  },
  {
    ID: "egg.chicken",
    Label: "Hen's Egg",
    Desc: "Delicious when cooked, alarming when dropped.",
    inherits: "_egg",
    audio: "SmallGeneric",
    aspects: {
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "egg.chicken", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "When it cracks, a craze of lines, the tiniest sound, and then a joyous freedom for potentially delicious goo.",
    },
  },
  {
    ID: "egg.gull",
    Label: "Gull's Egg",
    Desc: "'At Brancrug, even the Hours are kind, and the years are kinder.' This egg might stay viable quite a while yet.",
    inherits: "_egg",
    audio: "SmallGeneric",
    aspects: { brewable: 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      dist: [
        { id: "gull.wild", morpheffect: "spawn", level: 1 },
        { id: "residue", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "egg.gull", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "When it cracks, a craze of lines, the tiniest sound, and then a joyous freedom for potentially delicious goo.",
    },
  },
  {
    ID: "egg.relic",
    Label: "Outsized Egg",
    Desc: "An ostrich egg? A crocodile egg? Surely neither.",
    inherits: "_egg",
    audio: "SmallGeneric",
    aspects: { brewable: 1, scale: 3, "boost.scale": 3 },
    xtriggers: {
      dist: [
        { id: "relic.living", morpheffect: "spawn", level: 1 },
        { id: "residue", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "egg.relic", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The faintest scratching within…" },
  },
  {
    ID: "egg.viper",
    Label: "Viper Egg",
    Desc: "A serpent in waiting.",
    inherits: "_egg",
    audio: "SmallGeneric",
    aspects: { brewable: 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      dist: [
        { id: "viper.wild", morpheffect: "spawn", level: 1 },
        { id: "residue", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "egg.viper", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Poor thing: coiled like a forbidden thought, never to see day.",
    },
  },
  {
    ID: "bolt.linen",
    Label: "Bolt of Buttercup Linen",
    Desc: "Suitable for a summer suit or an altar-veil.",
    inherits: "_fabric",
    audio: "Fabric",
    aspects: { lantern: 2, "boost.lantern": 2, moon: 2, "boost.moon": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bolt.linen", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is the colour that an Undivided Afternoon would choose to be.",
    },
  },
  {
    ID: "bolt.silk",
    Label: "Bolt of Pale Silk",
    Desc: "Suitable for handkerchiefs or anbaric experiments.",
    inherits: "_fabric",
    audio: "Fabric",
    aspects: { moth: 2, "boost.moth": 2, nectar: 2, "boost.nectar": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bolt.silk", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is the colour that the snow before spring would choose to be.",
    },
  },
  {
    ID: "bolt.velvet",
    Label: "Bolt of Moss-Green Velvet",
    Desc: "Suitable for a ball gown or a jewel's cushion.",
    inherits: "_fabric",
    audio: "Fabric",
    aspects: { grail: 2, "boost.grail": 2, winter: 2, "boost.winter": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bolt.velvet", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "This is the colour that a first forest might choose to be.",
    },
  },
  {
    ID: "frithweft",
    Label: "Frith-Weft",
    Desc: "The 'peace-weaving' for which the Abbey was famous, long before it was named for St Brandan, when it was the Abbey of the Black Dove or the Abbey of the White Crow",
    inherits: "_fabric",
    audio: "Fabric",
    aspects: { heart: 3, "boost.heart": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "frithweft", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Tease it apart, and hear the distant crackle of old, peace-bound hatreds, twitching to life in the forgotten Histories. [There are Scholar-level Heart recipes that can craft one of these with fabric.]",
    },
  },
  {
    ID: "human.hair",
    Label: "Human Hair",
    Desc: "Of interest to wig-makers, cushion-stuffers, and crude sorcerers.",
    inherits: "_fabric",
    audio: "SmallGeneric",
    aspects: { remains: 1, moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "human.hair", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Torn." },
  },
  {
    ID: "swaddled.thunder",
    Label: "Swaddled Thunder",
    Desc: "A storm swathed in subtle threads, ready to be released with a few judicious snips.",
    inherits: "_device",
    audio: "Fabric",
    aspects: { fabric: 1, heart: 6, "boost.heart": 6, sky: 4, "boost.sky": 4 },
    xtriggers: {
      scrutiny: [
        { id: "weather.storm", morpheffect: "spawn", level: 1 },
        { id: "swaddled.thunder", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The thread parts - the weave is empty - the skies cry out! [There are Keeper-level Heart recipes that can craft this from a Frith-Weft or a Thunderskin's Paean.]",
    },
  },
  {
    ID: "wyrdweft",
    Label: "Wyrd-Weft",
    Desc: "A weave that either entrains, or follows, Fate. It's hard to be sure which.",
    inherits: "_fabric",
    audio: "Fabric",
    aspects: { heart: 3, "boost.heart": 3, winter: 6, "boost.winter": 6 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "wyrdweft", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Tease it apart, and find what might have been. [There are Keeper-level Winter recipes which can craft one of these with fabric.]",
    },
  },
  {
    ID: "yarns.warm",
    Label: "Warmly Coloured Yarns",
    Desc: "A blushing nest of possibilities.",
    inherits: "_fabric",
    audio: "Fabric",
    aspects: { grail: 1, "boost.grail": 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "yarns.warm", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Each thread departs the next…" },
  },
  {
    ID: "agave.aeterna",
    Label: "Agave Aeterna",
    Desc: "<i>agave aeterna</i>, the 'history plant', unlike its cousin the century plant, blooms every year. Perhaps it will do so forever.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: {
      ingredient: 1,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 1,
      "boost.nectar": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "agave.aeterna", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "<i>Aguamiel</i> sweet as nostalgia's dawn. [A previous librarian was said to sweeten lapsang tea with historied honey from this plant.]",
    },
  },
  {
    ID: "aglaophotis",
    Label: "Aglaophotis",
    Desc: "The rosy colour of good memories; but not the colour of the rose.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: {
      ingredient: 1,
      heart: 2,
      "boost.heart": 2,
      knock: 2,
      "boost.knock": 2,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 1,
      "boost.nectar": 1,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "aglaophotis", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A potent protection in many troubles." },
  },
  {
    ID: "blue.crown",
    Label: "Blue Crown",
    Desc: "The sky-coloured petals of blue crown are always cold as frost.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: {
      ingredient: 1,
      nectar: 1,
      "boost.nectar": 1,
      sky: 2,
      "boost.sky": 2,
      winter: 2,
      "boost.winter": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "blue.crown", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Solomon Husher often used this in his preparations." },
  },
  {
    ID: "fragrant.chalice",
    Label: "Fragrant Chalice",
    Desc: "A glorious globe of wine-coloured flowers.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: {
      ingredient: 1,
      grail: 2,
      "boost.grail": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "fragrant.chalice", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "When pressed, it's a good source for the intoxicating cordial called <i>rubywise ruin</i>.",
    },
  },
  {
    ID: "honeyscar.jasmine",
    Label: "Honeyscar Jasmine",
    Desc: "Sweet-scented, night-blooming.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: {
      ingredient: 1,
      forge: 2,
      "boost.forge": 2,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "honeyscar.jasmine", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Ambrose Westcott found a way to scent his pipe tobacco with honeyscar. Kitty Mazarine made jam. And Gervinus van Lauren, it is said, found a Keeper-level recipe which somehow uses it as the basis for the azoth...",
    },
  },
  {
    ID: "lenten.rose",
    Label: "Lenten Rose",
    Desc: "Pretty; poisonous; no true rose.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: {
      grail: 1,
      "boost.grail": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "lenten.rose", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There's a story that Serena Blackwood took a specimen of this rose to the Invisible Serapeum when she left. There's another story that it's the unexpected component of a secret Keeper-level recipe for the Great Ink Porphyrine...",
    },
  },
  {
    ID: "moth.orchid",
    Label: "Moth Orchid",
    Desc: "The 'true moth', the flower that opens as it changes.",
    inherits: "_flower",
    audio: "Ceramic",
    aspects: {
      knock: 2,
      "boost.knock": 2,
      moth: 1,
      "boost.moth": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "moth.orchid", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Traditionally, the flower of the library called the Tomb of Lies - 'where truth yet lives'.",
    },
  },
  {
    ID: "pot.daisies.malachite",
    Label: "Pot of Malachite Daisies",
    Desc: "Thomas Dewulf was fond of these. It's not what you'd expect from Thomas Dewulf.",
    inherits: "_flower",
    audio: "Ceramic",
    aspects: { nectar: 2, "boost.nectar": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.daisies.malachite", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The scent is crushed moss and old sun…" },
  },
  {
    ID: "pot.orchid.pink",
    Label: "Potted Pink Orchid",
    Desc: "A little smudge of dawn.",
    inherits: "_flower",
    audio: "Ceramic",
    aspects: { rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.orchid.pink", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There is a story that the Hour called Madrugad loved these in the days when she was gentler. No serious scholar believes the Madrugad was ever gentler.",
    },
  },
  {
    ID: "pot.orchid.white",
    Label: "Potted White Orchid",
    Desc: "A little smudge of snow.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: { nectar: 1, "boost.nectar": 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.orchid.white", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Rowena, Eva, Hafren… How many pale ladies have passed the doors of the House?",
    },
  },
  {
    ID: "pot.shadowless.silk",
    Label: "Shadowless Silk",
    Desc: "A variant of the Persian silk tree, golden as the Shadowless Kings.",
    inherits: "_flower",
    audio: "Ceramic",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.shadowless.silk", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The Shadowless Kings are gone. This is the nature of kings; although the New King would have it otherwise.",
    },
  },
  {
    ID: "sea.holly",
    Label: "Sea Holly",
    Desc: "Umbelled spiny flowers, the steel-blue of a winter afternoon.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: {
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "sea.holly", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Traditionally, this was the flower of Hush House. Sometimes you find it along the dunes and cliff-tops hereabouts.",
    },
  },
  {
    ID: "trumpeters.lily",
    Label: "Trumpeter's Lily",
    Desc: "A glorious efflorescence of sunset orange.",
    inherits: "_flower",
    audio: "SmallGeneric",
    aspects: {
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "trumpeters.lily", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Traditionally, the flower of the western Library named Crossrow, where the Watchman, the Vagabond, and Sunset Celia are all celebrated.",
    },
  },
  {
    ID: "vase.amaryllis",
    Label: "Vase of Amaryllis",
    Desc: "A soft-flowered ornament.",
    inherits: "_flower",
    audio: "SmallCeramic",
    aspects: { grail: 1, "boost.grail": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "vase.amaryllis", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Favoured in summer." },
  },
  {
    ID: "vase.bulrushes.golden",
    Label: "Vase of Golden Bulrushes",
    Desc: "It won't need watering.",
    inherits: "_flower",
    audio: "SmallCeramic",
    aspects: {
      moon: 1,
      "boost.moon": 1,
      moth: 1,
      "boost.moth": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "vase.bulrushes.golden", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Gathered along the river's edge, touched still by the river's memory.",
    },
  },
  {
    ID: "vase.carnations",
    Label: "Vase of Carnations",
    Desc: "A bright-flowered ornament.",
    inherits: "_flower",
    audio: "SmallCeramic",
    aspects: { heart: 1, "boost.heart": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "vase.carnations", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Favoured in spring." },
  },
  {
    ID: "vase.lilies",
    Label: "Vase of Lilies",
    Desc: "An elegant ornament.",
    inherits: "_flower",
    audio: "SmallCeramic",
    aspects: { nectar: 1, "boost.nectar": 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "vase.lilies", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "For the dead; but not only for the dead." },
  },
  {
    ID: "vase.roses",
    Label: "Vase of Roses",
    Desc: "A proud ornament.",
    inherits: "_flower",
    audio: "SmallCeramic",
    aspects: { grail: 1, "boost.grail": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "vase.roses", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'Should this fair rose offend thine eye/Raised to the troubled air/'Twill blush to find itself less white/And turn Lancastrian there.' - Somerville, approximately",
    },
  },
  {
    ID: "batter",
    Label: "Batter",
    Desc: "[Add Dripping for something horrifyingly tasty; or use with a Knife and Onions.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { edge: 1, "boost.edge": 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "batter", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "If food entered battle, this would be its armour." },
  },
  {
    ID: "beef",
    Label: "Beef",
    Desc: "[Roast it, or perhaps marinate it first - if you have something Intoxicating for the marinade.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: {
      remains: 1,
      sustenance: 1,
      raw: 1,
      heart: 1,
      "boost.heart": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "beef", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The more one looks at meat, the less one generally wants to eat it. And the more one listens to it. Meat.\nMeat.",
    },
  },
  {
    ID: "beef.marinated",
    Label: "Marinated Beef (Uncooked)",
    Desc: "Tangy with the harbingers of a roastful destiny.",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: {
      remains: 1,
      heart: 1,
      "boost.heart": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "beef.marinated", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "When one understands the distinction between 'marinate' and 'marinade', there is no limit to one's power to irritate the innocent.",
    },
  },
  {
    ID: "butter",
    Label: "Butter",
    Desc: "[Try adding an egg or a Pheasant; mix with Sugar or Flour in a Bowl; or the culinarily intrepid might add spice and Moly.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "butter", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "They say 'better with butter' and they mean it." },
  },
  {
    ID: "dough",
    Label: "Dough",
    Desc: "[Mix with an egg in a Bowl to make cake batter, or use to bake various delectable pies. For the sweeter pies, you'll want to use spices too.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "dough", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "[You could shape tiny pig statues out of dough. Don't.]",
    },
  },
  {
    ID: "dough.cake",
    Label: "Cake Batter",
    Desc: "[Add something sweet like jam - or add Almonds and spices.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "dough.cake", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The Vikings called it 'kaka'. Yes, they did." },
  },
  {
    ID: "dripping",
    Label: "Dripping",
    Desc: "[Not an appetising name, but use it to make rich leek or onion soup - or with or without a knife, use dripping to exalt Potatoes to their full potential.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "dripping", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Dripping is not lard.\nDo not enquire further." },
  },
  {
    ID: "flour",
    Label: "Flour",
    Desc: "Pulverised grains, bread's precursor. [Mix with Butter or Milk for Dough; mix with Water for Batter.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { heart: 1, "boost.heart": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "flour", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Oooops." },
  },
  {
    ID: "mackerel",
    Label: "Mackerel",
    Desc: "Eat it while it's fresh or keep it while it's salted.",
    inherits: "_ingredient",
    audio: "SmallMetallic",
    aspects: {
      raw: 1,
      remains: 1,
      sustenance: 1,
      heart: 1,
      "boost.heart": 1,
      moon: 2,
      "boost.moon": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "mackerel", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Healthful and slippery." },
  },
  {
    ID: "marinade.onion",
    Label: "Marinated Onions",
    Desc: "Add it to Mackerel for Soused Mackerel.",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { edge: 1, "boost.edge": 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "marinade.onion", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "meringue",
    Label: "Meringue",
    Desc: "Add to milk for a legendary dessert. Or, with Spicing, add to, apples or pears - even to mushrooms, if you're feeling perverse.",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: {
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      rose: 1,
      "boost.rose": 1,
      sky: 1,
      "boost.sky": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "meringue", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Eggs manifest as clouds…" },
  },
  {
    ID: "pheasant",
    Label: "Pheasant",
    Desc: "[Roast it, or add Butter if you intend to jug it.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      remains: 1,
      sustenance: 1,
      heart: 1,
      "boost.heart": 1,
      rose: 1,
      "boost.rose": 1,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pheasant", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pilchards",
    Label: "Pilchards",
    Desc: "[Pickle them alone; or they're pretty good on toast.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      remains: 1,
      sustenance: 1,
      heart: 1,
      "boost.heart": 1,
      moon: 2,
      "boost.moon": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pilchards", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "They're just really big sardines. Or sardines are really small pilchards. This is the mystery.",
    },
  },
  {
    ID: "potatoes",
    Label: "Potatoes",
    Desc: "[Slice 'em with a Knife and add dripping to make Game Chips; or roast 'em with or without dripping.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { heart: 1, "boost.heart": 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "potatoes", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "sugar",
    Label: "Sugar",
    Desc: "[Cream it with Butter in a mixing bowl; add Almonds and spices for Jumble; or with an egg, a Bowl, and care, you can make Meringue.]",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "sugar", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Patisserie's precursor." },
  },
  {
    ID: "sugar.creamed",
    Label: "Creamed Sugar",
    Desc: "A precursor to Sticky Toffee Pudding (with bread) and to Fudge (without bread): both notorious as founding crimes of twentieth-century culinary debauchery.",
    inherits: "_ingredient",
    audio: "SmallGeneric",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "sugar.creamed", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What hath weth wrought. Th." },
  },
  {
    ID: "catsclaw",
    Label: "Catsclaw",
    Desc: "Watch the thorns.",
    inherits: "_leaf",
    audio: "SmallGeneric",
    aspects: {
      flower: 1,
      edge: 2,
      "boost.edge": 2,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "catsclaw", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Its caustic juices can be used to make the unsanctioned ink called perinculate.",
    },
  },
  {
    ID: "evas.locks",
    Label: "Eva's Locks",
    Desc: "A pale wrack washed up on the beach by Brancrug.",
    inherits: "_leaf",
    audio: "SmallGeneric",
    aspects: {
      flower: 1,
      rose: 1,
      "boost.rose": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "evas.locks", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Named for Lady Eva, who drowned herself with her grandchildren after the death of Sebastian her nephew. Her motives were never clear; her body, and the bodies of her grandchildren, were never found.",
    },
  },
  {
    ID: "healing.herbs",
    Label: "Healing Herbs",
    Desc: "A helpful harvest of healing herbs.",
    inherits: "_leaf",
    audio: "SmallGeneric",
    aspects: {
      flower: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "healing.herbs", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Restorative." },
  },
  {
    ID: "packet.tea.assam",
    Label: "C&H Second Flush Assam  (Packet)",
    Desc: "Tea from the land of the <i>real</i> unicorn, imported by Cater & Hero.",
    inherits: "_leaf",
    audio: "SmallGeneric",
    aspects: {
      brewable: 1,
      edge: 1,
      "boost.edge": 1,
      knock: 1,
      "boost.knock": 1,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      dist: [
        { id: "pot.tea.assam", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "packet.tea.assam", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A wonderfully full-bodied taste, bright as morning." },
  },
  {
    ID: "packet.tea.lapsang",
    Label: "Veiled Goddess Lapsang Souchong (Packet)",
    Desc: "Named for an enigmatic minor deity whose charge is the healing of burns.",
    inherits: "_leaf",
    audio: "SmallGeneric",
    aspects: {
      brewable: 1,
      forge: 1,
      "boost.forge": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      dist: [
        { id: "pot.tea.lapsang", morpheffect: "spawn", level: 1 },
        { id: "dregs", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "packet.tea.lapsang", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Smoky and astringent, like pine-scented dragon's breath.",
    },
  },
  {
    ID: "pot.bamboo",
    Label: "Potted Bamboo",
    Desc: "Water it, and you can almost hear it growing.",
    inherits: "_leaf",
    audio: "Ceramic",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.bamboo", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Lush." },
  },
  {
    ID: "pot.bonsai",
    Label: "Tiny Potted Tree",
    Desc: "Tiny as a ship in a bottle.",
    inherits: "_leaf",
    audio: "Ceramic",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.bonsai", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Adorable." },
  },
  {
    ID: "pot.dragon",
    Label: "Potted Dragon Tree",
    Desc: "A determined, spiky little survivor.",
    inherits: "_leaf",
    audio: "Ceramic",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "pot.dragon", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Ow.)" },
  },
  {
    ID: "pot.fern",
    Label: "Potted Fern",
    Desc: "A pleasantly primitive plant.",
    inherits: "_leaf",
    audio: "Ceramic",
    aspects: { nectar: 2, "boost.nectar": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "pot.fern", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A faint mist of spores rises…" },
  },
  {
    ID: "pot.snake",
    Label: "Potted Snake Plant",
    Desc: "A sturdy sun-loving relic from a warmer place.",
    inherits: "_leaf",
    audio: "Ceramic",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "pot.snake", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Lush." },
  },
  {
    ID: "pot.swiss",
    Label: "Potted Monstera",
    Desc: "A defiant plant.",
    inherits: "_leaf",
    audio: "Ceramic",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "pot.swiss", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Beware?" },
  },
  {
    ID: "pot.venus",
    Label: "Potted Avidity",
    Desc: "A lush and hungry ornament.",
    inherits: "_leaf",
    audio: "Ceramic",
    aspects: { grail: 2, "boost.grail": 2, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pot.venus", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Concerning." },
  },
  {
    ID: "vase.gorse",
    Label: "Vase of Gorse",
    Desc: "As Cornish a plant as any.",
    inherits: "_leaf",
    audio: "SmallCeramic",
    aspects: { forge: 1, "boost.forge": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "vase.gorse", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "(Ow.)" },
  },
  {
    ID: "vase.rushes",
    Label: "Vase of Rushes",
    Desc: "A subtle ornament.",
    inherits: "_leaf",
    audio: "SmallCeramic",
    aspects: { moon: 1, "boost.moon": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "vase.rushes", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Charming." },
  },
  {
    ID: "ampoule.amethyst",
    Label: "Amethyst Ampoule",
    Desc: "Were it released from the glass, it would be quite another colour.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: {
      glass: 1,
      heart: 2,
      "boost.heart": 2,
      knock: 2,
      "boost.knock": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "ampoule.amethyst", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A violet stain; then nothing. [There are Prentice-level Knock recipes that can craft this.]",
    },
  },
  {
    ID: "ampoule.wolfsnow",
    Label: "Wolf-Snow Ampoule",
    Desc: "Far too cold ever to melt in anything but the hottest noonday sun. It will, very gradually, consume human flesh.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: { winter: 4, "boost.winter": 4 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "ampoule.wolfsnow", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "That could have been worse." },
  },
  {
    ID: "ashartine",
    Label: "Ashartine",
    Desc: "Lies written in Ashartine tend to fade or be misspelt. It's legible in the dark. An Ink of Revelation.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      ink: 1,
      forge: 1,
      "boost.forge": 1,
      lantern: 6,
      "boost.lantern": 6,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "ashartine", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "If dark were light… [There are Keeper-level Sky and Lantern recipes that can craft this from Ichor Vitreous.]",
    },
  },
  {
    ID: "asimel",
    Label: "Asimel",
    Desc: "A silver ink that can only be made and used in dreams. An Ink of Revelation.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      ink: 1,
      knock: 3,
      "boost.knock": 3,
      moon: 5,
      "boost.moon": 5,
      moth: 1,
      "boost.moth": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "asimel", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A silvery glimmer like a spilt star. [Scholar-level Moon and Moth recipes exist that can craft this with lenses or liquids.]",
    },
  },
  {
    ID: "azoth",
    Label: "Azoth",
    Desc: "A solvent of frightening voracity.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: { forge: 2, "boost.forge": 2, knock: 6, "boost.knock": 6 },
    xtriggers: {
      scrutiny: [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
        { id: "azoth", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Once spilt, nothing remains.  [There are Keeper-level Forge recipes that can create this with the assistance of Orichalcum, among other things.]",
    },
  },
  {
    ID: "black.sapphire.wash",
    Label: "Black Sapphire Wash",
    Desc: "The colour, perhaps, of the doors of the House of the Moon.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: { pigment: 1, moon: 6, "boost.moon": 6 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "black.sapphire.wash", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'When the light is extinguished, the shadow persists. After the House of the Sun, the House of the Moon.' [There are Keeper-level Moon recipes which can create this from Asimel.]",
    },
  },
  {
    ID: "catwink",
    Label: "Catwink",
    Desc: "The smell of catwink puts off vermin; but it is very difficult to read in sunlight. An Ink of Containment.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      ink: 1,
      edge: 1,
      "boost.edge": 1,
      grail: 1,
      "boost.grail": 1,
      moon: 2,
      "boost.moon": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "catwink", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "On close exposure, the smell tends to put off humans, too. [There are Prentice-level Moon recipes that can craft this.]",
    },
  },
  {
    ID: "essence.iotic",
    Label: "Iotic Essence",
    Desc: "'In the later operations of the Forge, the Madrugad yields to the true Forge of Days, and the essence begins to redden.' The bit about the 'true Forge of Days' nearly got St Melancthe burned for heresy, but no-one ever said she was wrong about the second part.",
    inherits: "_liquid",
    audio: "SmallRattly",
    aspects: {
      pigment: 1,
      fuel: 1,
      forge: 5,
      "boost.forge": 5,
      lantern: 3,
      "boost.lantern": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
        { id: "essence.iotic", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Redder than sunset. [A range of Forge recipes can be used to create Iotic Essence from a range of precursors.]",
    },
  },
  {
    ID: "essence.xanthotic",
    Label: "Xanthotic Essence",
    Desc: "The rich gold of a summer afternoon. 'If sunlight precedes moonlight,' St Anselm observed, 'the Meniscate must precede the Madrugad; and the light that was lost will remain.'",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: {
      pigment: 1,
      forge: 2,
      "boost.forge": 2,
      knock: 2,
      "boost.knock": 2,
      lantern: 5,
      "boost.lantern": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
        { id: "essence.xanthotic", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Yellower than buttercups. [Various Lantern recipes can be used to create Xanthotic Essence from various precursors.]",
    },
  },
  {
    ID: "holiest.hemolymph",
    Label: "Holiest Hemolymph",
    Desc: "Thirza Blake claimed that she first synthesised this from her own tears. She was almost certainly lying.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: {
      moth: 4,
      "boost.moth": 4,
      nectar: 4,
      "boost.nectar": 4,
      scale: 4,
      "boost.scale": 4,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.impulse", morpheffect: "spawn", level: 1 },
        { id: "holiest.hemolymph", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The faintest beating of wings…" },
  },
  {
    ID: "houndsgall",
    Label: "Houndsgall",
    Desc: "Books written in Houndsgall are more likely to return to their owner, or one to whom they have been legitimately sold. An Ink of Containment.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      ink: 1,
      edge: 1,
      "boost.edge": 1,
      heart: 2,
      "boost.heart": 2,
      scale: 5,
      "boost.scale": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "houndsgall", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "It'll be hell to get off my fingers. [There are Keeper-level Scale recipes that can produce this with the tacit assistance of a Living Relic.]",
    },
  },
  {
    ID: "ichor.auroral",
    Label: "Ichor Auroral",
    Desc: "No dawn knows only a single colour. No sky knows only a single dawn.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: {
      pigment: 1,
      lantern: 4,
      "boost.lantern": 4,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.intuition", morpheffect: "spawn", level: 1 },
        { id: "ichor.auroral", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A soft sense of morning… [There are Scholar-level Rose and Sky recipes that can be used to craft this in the presence of a light source.]",
    },
  },
  {
    ID: "ichor.vitreous",
    Label: "Ichor Vitreous",
    Desc: "A pale and watchful fluid that can be gathered, sometimes, when the Door-in-the-Eye is opened.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: { pigment: 1, lantern: 4, "boost.lantern": 4 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "ichor.vitreous", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "It stings like wasps. [There are Scholar-level Lantern recipes that can be used to craft this with glass.]",
    },
  },
  {
    ID: "january.sanguinary",
    Label: "January Sanguinary",
    Desc: "Also called <i>sanguis saltandis</i> or, by the ignorantly superstitious, 'true blood of St Januarius'.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: {
      heart: 5,
      "boost.heart": 5,
      knock: 3,
      "boost.knock": 3,
      sky: 3,
      "boost.sky": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "music.thunderskin", morpheffect: "spawn", level: 1 },
        { id: "january.sanguinary", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'And so it will not, will not, will not stop dancing.' [With Keeper-level Heart recipes, this can be crafted from Gideon's Soaks.]",
    },
  },
  {
    ID: "jerry.kerosene",
    Label: "Kerosene",
    Desc: "For the brightest flame.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { fuel: 1, forge: 3, "boost.forge": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "jerry.kerosene", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Reeking." },
  },
  {
    ID: "jerry.paraffin",
    Label: "Paraffin",
    Desc: "For a bright flame.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { fuel: 1, forge: 2, "boost.forge": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "jerry.paraffin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Reeking." },
  },
  {
    ID: "jerry.petrol",
    Label: "Petrol",
    Desc: "Black oil rendered pale.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { fuel: 1, forge: 2, "boost.forge": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "jerry.petrol", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Reeking." },
  },
  {
    ID: "liquid.gideon",
    Label: "Gideon's Soaks",
    Desc: "A therapeutic collection of beneficial bottles.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      forge: 2,
      "boost.forge": 2,
      heart: 4,
      "boost.heart": 4,
      nectar: 3,
      "boost.nectar": 3,
      winter: 2,
      "boost.winter": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "liquid.gideon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Invigorating. [There are Scholar-level Heart recipes which can craft this from suitable liquids.]",
    },
  },
  {
    ID: "liquid.regensburg",
    Label: "Regensburg Balm",
    Desc: "An invaluable herbal cure introduced to Hush House by the physician Natan after his exile from Regensburg.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: { heart: 2, "boost.heart": 2, nectar: 2, "boost.nectar": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "liquid.regensburg", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Soothing. [There are Prentice-level Heart recipes which can be used to craft this.]",
    },
  },
  {
    ID: "marakat",
    Label: "Marakat",
    Desc: "The <i>encaustum terminale</i> of the Fifth History. The colour of the Principle that once occupied the place that Heart does now. In the Fifth History itself, the cult of Marakat was everywhere suppressed, but it's sometimes been venerated otherwise. [Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      encaustum: 1,
      ink: 1,
      grail: 7,
      "boost.grail": 7,
      knock: 7,
      "boost.knock": 7,
      nectar: 7,
      "boost.nectar": 7,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "marakat", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Another history spilt… [There are Keeper-level Nectar recipes that can craft this from Leathy.]",
    },
  },
  {
    ID: "nillycant",
    Label: "Nillycant",
    Desc: "The <i>encaustum terminale</i> of the Third History. It's the bleak white-blue of Winter. It has spawned an itinerant order of secret celebrants who regard Worms as semi-gods, and who are sometimes called on to celebrate difficult funerals. [Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      encaustum: 1,
      ink: 1,
      edge: 7,
      "boost.edge": 7,
      scale: 7,
      "boost.scale": 7,
      winter: 7,
      "boost.winter": 7,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "nillycant", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Another history spilt… [There are Keeper-level Winter recipes that can craft this from Solomon's Preparation, or from Glassfinger Toxin]",
    },
  },
  {
    ID: "oil.forge",
    Label: "Scintillate Oil",
    Desc: "Cater & Hero's Finest Scintillate Oil.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: {
      fuel: 1,
      forge: 2,
      "boost.forge": 2,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
        { id: "oil.forge", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A shimmering substance useful for ignition, illumination and chromatiferation.",
    },
  },
  {
    ID: "oil.moon",
    Label: "Umbrous Oil",
    Desc: "Cater & Hero's First-Grade Umbrous Oil.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: { forge: 1, "boost.forge": 1, moon: 2, "boost.moon": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.intuition", morpheffect: "spawn", level: 1 },
        { id: "oil.moon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A shadowy substance useful in embrocation, dissimulation, and disillumination. (Not flammable under most rational conditions.)",
    },
  },
  {
    ID: "oil.moth",
    Label: "Oscillate Oil",
    Desc: "Cater & Hero's Finest Oscillate Oil.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: { fuel: 1, forge: 1, "boost.forge": 1, moth: 2, "boost.moth": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.impulse", morpheffect: "spawn", level: 1 },
        { id: "oil.moth", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A volatile substance useful for agitation, lubrication and acceleration.",
    },
  },
  {
    ID: "orpiment.exultant",
    Label: "Orpiment Exultant",
    Desc: "The <i>encaustum terminale</i> of the Fourth History. It's the incandescent orange of Forge. One ingredient - it's been, as it were, long-rumoured - is the blood of candescents. Certain Masonic and related traditions venerate what they call 'O.E'.  [Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      encaustum: 1,
      ink: 1,
      forge: 7,
      "boost.forge": 7,
      heart: 7,
      "boost.heart": 7,
      sky: 7,
      "boost.sky": 7,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "orpiment.exultant", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Another history spilt… [There are Keeper-level Forge recipes that can craft this from Iotic Essence.]",
    },
  },
  {
    ID: "paint.blue",
    Label: "Paint: Blue",
    Desc: "The sky is rarely this colour.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { pigment: 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.blue", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spilt paint is worse even than spilt ink." },
  },
  {
    ID: "paint.blue.dark",
    Label: "Paint: Dusk-Blue",
    Desc: "This paint is the precise colour of the Atlantic Ocean at four o'clock on a clear autumn afternoon.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { pigment: 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.blue.dark", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spilt paint is worse even than spilt ink." },
  },
  {
    ID: "paint.blue.pale",
    Label: "Paint: Palest Blue",
    Desc: "Snow is not quite this colour.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { pigment: 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.blue.pale", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spilt paint is worse even than spilt ink." },
  },
  {
    ID: "paint.bosk",
    Label: "Paint: Bosk-Green",
    Desc: "The Wood is probably not this colour.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { pigment: 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.bosk", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spilt paint is worse even than spilt ink." },
  },
  {
    ID: "paint.green",
    Label: "Paint: Green",
    Desc: "Trees are rarely this colour.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { pigment: 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.green", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spilt paint is worse even than spilt ink." },
  },
  {
    ID: "paint.moth",
    Label: "Paint: Moth-Gold",
    Desc: "Moths are seldom this colour.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { pigment: 1, moth: 2, "boost.moth": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.moth", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Spilt paint is worse even than spilt ink. [There is a Prentice-level Moth recipe which can be used to create more.]",
    },
  },
  {
    ID: "paint.pink",
    Label: "Paint: Pink",
    Desc: "People are never this colour.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { pigment: 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.pink", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spilt paint is worse even than spilt ink." },
  },
  {
    ID: "paint.red",
    Label: "Paint: Red",
    Desc: "Blood is only occasionally this colour. If they say more research is needed, don't listen.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: { pigment: 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.red", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spilt paint is worse even than spilt ink." },
  },
  {
    ID: "paint.yellow",
    Label: "Paint: Yellow",
    Desc: "This paint is nothing like the sun.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: { pigment: 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "paint.yellow", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Spilt paint is worse even than spilt ink." },
  },
  {
    ID: "perhibiate",
    Label: "Perhibiate",
    Desc: "Which binds to the one whose name is there written. A minor Ink of Power.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      ink: 1,
      heart: 2,
      "boost.heart": 2,
      lantern: 2,
      "boost.lantern": 2,
      scale: 2,
      "boost.scale": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "perhibiate", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "And so my name be not forgotten… [Perhibiate can be crafted with certain Prentice-leve Heart recipes.]",
    },
  },
  {
    ID: "perinculate",
    Label: "Perinculate",
    Desc: "Deadly. Use gloves to read texts produced with this pigment. An Ink of Power (sometimes considered an Unsanctioned Ink).",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: {
      ink: 1,
      edge: 4,
      "boost.edge": 4,
      grail: 1,
      "boost.grail": 1,
      scale: 4,
      "boost.scale": 4,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.fear", morpheffect: "spawn", level: 1 },
        { id: "perinculate", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Perilous indeed. [There are Scholar-level Edge recipes that can craft this from leaves.]",
    },
  },
  {
    ID: "porphyrine",
    Label: "Porphyrine",
    Desc: "The <i>encaustum terminale</i> of the Second History. It's the glowing crimson-mauve of the Secret Histories. Porphyrine was venerated in secret by a confraternity of corresponding Cluniacs and Benedictines. [Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes...\n\nPorphyrine might also be used to compose a petition for the labyrinth season, if you can provide at least 20 of <sprite name=knock>, <sprite name=rose>, or <sprite name=moon>; no <sprite name=edge>, <sprite name=heart>, or <sprite name=winter> at all; and suitable writing material.]",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      encaustum: 1,
      ink: 1,
      knock: 7,
      "boost.knock": 7,
      moon: 7,
      "boost.moon": 7,
      rose: 7,
      "boost.rose": 7,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "porphyrine", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Another history spilt… [Certain Keeper-level Lantern and Rose recipes can brew this from Ichor Auroral, and perhaps from other things.]",
    },
  },
  {
    ID: "stargall.ink",
    Label: "Stargall Ink",
    Desc: "An ink traditionally (but only rarely) made with meteoric iron; a minor Ink of Power.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      ink: 1,
      forge: 1,
      "boost.forge": 1,
      rose: 1,
      "boost.rose": 1,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "stargall.ink", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Faintly glimmering. [There are Prentice-level Sky recipes which can create this.]",
    },
  },
  {
    ID: "toxin.glassfinger",
    Label: "Glassfinger Toxin",
    Desc: "'What is within, without; what is without, within.' A poison sacred to the votaries of the Meniscate.",
    inherits: "_liquid",
    audio: "SmallLiquid",
    aspects: {
      forge: 2,
      "boost.forge": 2,
      knock: 4,
      "boost.knock": 4,
      lantern: 2,
      "boost.lantern": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "toxin.glassfinger", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Careful… [There are Scholar-level Knock recipes - sometimes Scale - that can be used with a suitable liquid to craft this.]",
    },
  },
  {
    ID: "turpentine",
    Label: "Turpentine",
    Desc: "An odorous eraser of errors.",
    inherits: "_liquid",
    audio: "LargeLiquid",
    aspects: {
      fuel: 1,
      forge: 1,
      "boost.forge": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "turpentine", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Well, my hands are clean…" },
  },
  {
    ID: "uzult",
    Label: "Uzult",
    Desc: "The ink in which the First History was recorded by the Unwise Mortal. Uzult is the bright yellow-gold of Lantern. Light lingers on it for a little while even in the dark. Gold is not needed to mix Uzult, but amber is. Unobtrusive shrines to Uzult could sometimes be found in the churches of the Unconquered Sun.  [Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: {
      encaustum: 1,
      ink: 1,
      lantern: 7,
      "boost.lantern": 7,
      moth: 7,
      "boost.moth": 7,
      sky: 7,
      "boost.sky": 7,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "uzult", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Another history spilt… [There are Keeper-level Lantern recipes which can be used to craft this from Xanthotic Essence.]",
    },
  },
  {
    ID: "yewgall.ink",
    Label: "Yewgall Ink",
    Desc: "A variant of iron gall ink, particularly difficult to erase; a minor Ink of Power.",
    inherits: "_liquid",
    audio: "SmallCeramic",
    aspects: { ink: 1, moth: 1, "boost.moth": 1, nectar: 2, "boost.nectar": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "yewgall.ink", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The deepest of blackish greens. [There are Prentice-level Nectar recipes which can create this.]",
    },
  },
  {
    ID: "bisclavrets.knot",
    Label: "Bisclavret's Knot",
    Desc: "The <i>bisclavret</i> is the half-human hill-child of these parts, and this is its sign.",
    inherits: "_mark",
    audio: "SmallGeneric",
    aspects: { moth: 1, "boost.moth": 1, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bisclavrets.knot", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The wind howls… [Certain Prentice-level Scale recipes are used to tie the Knot.]",
    },
  },
  {
    ID: "midnight.mark",
    Label: "Midnight Mark",
    Desc: "A blemish left on a page (or a skin) by a careful incision (or a judicious sting) to preserve a little of the power of night.",
    inherits: "_mark",
    audio: "SmallGeneric",
    aspects: { moon: 2, "boost.moon": 2, moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "midnight.mark", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A little loss of night. [Certain Prentice-level Moon recipes can be used to make the Mark.]",
    },
  },
  {
    ID: "sign.salt",
    Label: "Salt-Sign",
    Desc: "Too bad it won't last. But then again, what does?",
    inherits: "_mark",
    audio: "SmallGeneric",
    aspects: { moon: 2, "boost.moon": 2, rose: 2, "boost.rose": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "sign.salt", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "It didn't last. [Certain Prentice-level Rose and Moon recipes which can be used to create this.]",
    },
  },
  {
    ID: "yeartally",
    Label: "Year-Tally",
    Desc: "A chitty worth an additional year of life, scrupulously obtained through carefully balanced thaumaturgic attention to the Cindered Tally of the Madrugad.",
    inherits: "_mark",
    audio: "SmallGeneric",
    aspects: { winter: 6, "boost.winter": 6 },
    xtriggers: {
      scrutiny: [
        { id: "old.moment", morpheffect: "spawn", level: 1 },
        { id: "yeartally", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Somewhere, perhaps, someone has won an extra year. [Certain Keeper-level Winter recipes can be used to craft this from Essential Periost.]",
    },
  },
  {
    ID: "ambergris",
    Label: "Ambergris Chunk",
    Desc: "Never, never, never call it 'whale vomit'.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: { gem: 1, moon: 2, "boost.moon": 2, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "ambergris", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Were I being polite, I would call the scent 'musky'." },
  },
  {
    ID: "arsenic",
    Label: "Arsenic",
    Desc: "A poison sometimes known as 'the Message of the Swan'.",
    inherits: "_material",
    audio: "SmallCeramic",
    aspects: {
      edge: 1,
      "boost.edge": 1,
      lantern: 1,
      "boost.lantern": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.fear", morpheffect: "spawn", level: 1 },
        { id: "arsenic", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Careful…" },
  },
  {
    ID: "atlantic.amber",
    Label: "Atlantic Amber",
    Desc: "Sunset's colours, pine's blood.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: { gem: 1, lantern: 3, "boost.lantern": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
        { id: "atlantic.amber", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The tree, the sea, then nothing." },
  },
  {
    ID: "awakened.feather",
    Label: "Awakened Feather",
    Desc: "Alive to every draught and spark.",
    inherits: "_material",
    aspects: { remains: 1, scale: 1, "boost.scale": 1, sky: 2, "boost.sky": 2 },
    xtriggers: {
      scrutiny: [
        { id: "music.cheerful", morpheffect: "spawn", level: 1 },
        { id: "awakened.feather", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Something on the wind… [There are Prentice-level Sky recipes which can create one of these.]",
    },
  },
  {
    ID: "beeswax",
    Label: "Beeswax",
    Desc: "It begins as a flower. [Beeswax can be used to make candles, if you have a skill with the Chandlery aspect.]",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: { fuel: 1, moth: 1, "boost.moth": 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "beeswax", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Smooth on the fingers." },
  },
  {
    ID: "cinnabar",
    Label: "Cinnabar",
    Desc: "A bright scarlet powder with a silvery brilliance locked within.",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: { forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "cinnabar", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Don't inhale…" },
  },
  {
    ID: "curious.seashell",
    Label: "Curious Seashell",
    Desc: "Brancrug is said to lie in the Bounds where the world ends. Odd creatures have made their dying way to the beach.",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: { moon: 1, "boost.moon": 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "curious.seashell", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Now powder." },
  },
  {
    ID: "driftwood.fragment",
    Label: "Driftwood Fragment",
    Desc: "Long ago there was a forest between the waves of Brancrug Bay. This driftwood is not nearly that old, but it's shared salt with its lost forerunners…",
    inherits: "_material",
    audio: "Wooden",
    aspects: {
      wood: 1,
      fuel: 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "driftwood.fragment", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Fragments…" },
  },
  {
    ID: "gervinite",
    Label: "Gervinite",
    Desc: "An alloy equivalent in some respects to the clockmaker's invar - but instead of a constant weight, it retains the same origin in every history.",
    inherits: "_material",
    audio: "SmallMetallic",
    aspects: { metal: 1, knock: 4, "boost.knock": 4, rose: 2, "boost.rose": 2 },
    xtriggers: {
      scrutiny: [
        { id: "horizonsight", morpheffect: "spawn", level: 1 },
        { id: "gervinite", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Whatever that means, it meant it. [There is a Scholar-level Knock recipe that can craft this with glass, and a Scholar-level Sky recipe that can craft it with metal.]",
    },
  },
  {
    ID: "glue",
    Label: "Glue",
    Desc: "A substance that ensures the continued proximity of things to other things.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: { forge: 1, "boost.forge": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "glue", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Oooops." },
  },
  {
    ID: "hawthorn.blank",
    Label: "Hawthorn Blank",
    Desc: "A wood favoured by the Horned-Axe.",
    inherits: "_material",
    audio: "Wooden",
    aspects: { wood: 1, fuel: 1, knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "hawthorn.blank", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Shattered." },
  },
  {
    ID: "leathy.lees",
    Label: "Leathy Lees",
    Desc: "The dark aftermath of a dark drink.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: {
      grail: 1,
      "boost.grail": 1,
      moth: 2,
      "boost.moth": 2,
      nectar: 1,
      "boost.nectar": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "leathy.lees", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Exhausted." },
  },
  {
    ID: "lignum.vitae.blank",
    Label: "Lignum Vitae Blank",
    Desc: "The hardest of all woods.",
    inherits: "_material",
    audio: "Wooden",
    aspects: {
      wood: 1,
      fuel: 1,
      edge: 3,
      "boost.edge": 3,
      nectar: 3,
      "boost.nectar": 3,
      scale: 3,
      "boost.scale": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.gossip", morpheffect: "spawn", level: 1 },
        { id: "lignum.vitae.blank", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In Brancrug Village, they tell of Thirza Blake's boast that she crossed an ocean in the Bounds by clinging to a broom of lignum vitae after a shipwreck. The pedant Strathcoyne points out that lignum vitae sinks in water. 'An ocean of mercury,' Thirza replies, and then, to provide a suitable punchline, clouts him on the head with her broom. Much later, Governor Collers speculated that this might be a sly alchemical parable...",
    },
  },
  {
    ID: "material.westcott",
    Label: "Westcott's Compounds",
    Desc: "Reagents and activants to enhance alchemical operations, or the flavour of one's pipe tobacco.",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: {
      forge: 2,
      "boost.forge": 2,
      grail: 1,
      "boost.grail": 1,
      lantern: 1,
      "boost.lantern": 1,
      moth: 1,
      "boost.moth": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "material.westcott", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Scattered. [There are Prentice-level Forge and Moth recipes which can be used to create more.]",
    },
  },
  {
    ID: "packet.cocoa",
    Label: "T.R.N. Limited Drinking Cocoa (Packet)",
    Desc: "T.R.N.'s Spices and Savours Department markets this as 'the Secret Sacrament of the Last Inca!'",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: {
      brewable: 1,
      grail: 2,
      "boost.grail": 2,
      heart: 1,
      "boost.heart": 1,
    },
    xtriggers: {
      dist: [
        { id: "pot.cocoa", morpheffect: "spawn", level: 1 },
        { id: "", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "packet.cocoa", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Not <i>exactly</i> edible." },
  },
  {
    ID: "packet.coffee.dawnlion",
    Label: "Dawnlion Coffee (Packet)",
    Desc: "Coffee from beyond the great deserts.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: {
      brewable: 1,
      forge: 1,
      "boost.forge": 1,
      lantern: 1,
      "boost.lantern": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      dist: [
        { id: "pot.coffee.dawnlion", morpheffect: "spawn", level: 1 },
        { id: "", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "packet.coffee.dawnlion", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Better brewed." },
  },
  {
    ID: "packet.coffee.eveningisles",
    Label: "Evening Isles Coffee (Packet)",
    Desc: "Coffee from beyond the sunset sea.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: {
      brewable: 1,
      forge: 1,
      "boost.forge": 1,
      lantern: 1,
      "boost.lantern": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      dist: [
        { id: "pot.coffee.eveningisles", morpheffect: "spawn", level: 1 },
        { id: "", morpheffect: "transform", level: 1 },
      ],
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "packet.coffee.eveningisles", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Better brewed." },
  },
  {
    ID: "pearl.rose",
    Label: "Rose-Pearl",
    Desc: "Surprisingly common in these waters.",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: { gem: 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "pearl.rose", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In one folktale, the Witch prophesied to the Sister that the sea would drink her blood; the Sister prophesied to the Witch that the sea would never harm her. When they came ashore by Brancrug, she gave her a shell to catch rainwater in, and the sharp edge shed her blood on the white sand. That blood we know as rose-pearls.",
    },
  },
  {
    ID: "pigment.refulgin",
    Label: "Refulgin",
    Desc: "A white so pure that it remains visible even in utter darkness, like the moon, or an insistent cat.",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: { pigment: 1, lantern: 2, "boost.lantern": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
        { id: "pigment.refulgin", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Shiny! Ish. [There are Prentice-level Lantern recipes which can craft this.]",
    },
  },
  {
    ID: "quartz.chunk",
    Label: "Quartz Chunk",
    Desc: "Ice, rock, winking light.",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: { gem: 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "quartz.chunk", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Powdered." },
  },
  {
    ID: "rags",
    Label: "Rags",
    Desc: "Scraps of fabric. Possibly useful as fuel.",
    inherits: "_material",
    audio: "Fabric",
    aspects: {
      fabric: 1,
      fuel: 1,
      forge: 1,
      "boost.forge": 1,
      heart: 1,
      "boost.heart": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "rags", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Sort through the scraps… nothing of use." },
  },
  {
    ID: "salts.bitterblack",
    Label: "Bitterblack Salts",
    Desc: "Bitter as chicory, dark as secrets, but the first rung of the traditional alchemical ascent.",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: { pigment: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
        { id: "salts.bitterblack", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There's a brightness locked within. Keeper-level Forge or Lantern might transform these into a more potent essence. [And Prentice-level Forge can be used with certain recipes to create more Salts.]",
    },
  },
  {
    ID: "sand",
    Label: "Sand",
    Desc: "An hourglass, of course, is sand contained by sand.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: {
      glass: 1,
      lantern: 1,
      "boost.lantern": 1,
      moon: 1,
      "boost.moon": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.salt", morpheffect: "spawn", level: 1 },
        { id: "sand", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "It's time." },
  },
  {
    ID: "scrapings.phosphorescent",
    Label: "Phosphorescent Scrapings",
    Desc: "Rendered inert, but still luminous.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: {
      remains: 1,
      moon: 2,
      "boost.moon": 2,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "scrapings.phosphorescent", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Dissipated." },
  },
  {
    ID: "scraps.wood",
    Label: "Wooden Scraps",
    Desc: "Scraps of wood. Possibly useful as fuel.",
    inherits: "_material",
    audio: "SmallWooden",
    aspects: {
      wood: 1,
      fuel: 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "scraps.wood", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Sort through the scraps… nothing of use." },
  },
  {
    ID: "seaglass",
    Label: "Sea-Glass",
    Desc: "Smooth as an egg, frosted like a winter window.",
    inherits: "_material",
    audio: "SmallCeramic",
    aspects: {
      glass: 1,
      lantern: 1,
      "boost.lantern": 1,
      moon: 1,
      "boost.moon": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "seaglass", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What's lost." },
  },
  {
    ID: "slab.granite",
    Label: "Granite Slab",
    Desc: "Long-cold volcano-blood.",
    inherits: "_material",
    audio: "Stone",
    aspects: {
      stone: 1,
      forge: 1,
      "boost.forge": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "slab.granite", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Crushed." },
  },
  {
    ID: "slab.serpentinite",
    Label: "Serpentinite Slab",
    Desc: "The grey-green root-rock of the Cornish coast.",
    inherits: "_material",
    audio: "Stone",
    aspects: {
      stone: 1,
      knock: 1,
      "boost.knock": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "slab.serpentinite", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Crushed." },
  },
  {
    ID: "tanglebrag",
    Label: "Tanglebrag",
    Desc: "A clot of wood, leaves and feathers that might draw the attention of the entity called Knotwingknot.",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: {
      lantern: 1,
      "boost.lantern": 1,
      moth: 2,
      "boost.moth": 2,
      nectar: 1,
      "boost.nectar": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.impulse", morpheffect: "spawn", level: 1 },
        { id: "tanglebrag", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Not a knot… [There are Prentice-level Moth recipes - and one Lantern recipe - that can craft this.]",
    },
  },
  {
    ID: "tincture.labhitic",
    Label: "Labhitic Tincture",
    Desc: "A much more potent preparation can be extracted from the remains of a labhite, but labhites generally frown on this technique.",
    inherits: "_material",
    audio: "SmallCeramic",
    aspects: { edge: 2, "boost.edge": 2, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "tincture.labhitic", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Scattered. [There are Prentice-level Edge recipes which can be used to create more.]",
    },
  },
  {
    ID: "whispering.sand",
    Label: "Whispering Sand",
    Desc: "White-silver sand in which the voice of the waves lingers...",
    inherits: "_material",
    audio: "SmallGeneric",
    aspects: {
      glass: 1,
      lantern: 1,
      "boost.lantern": 1,
      moon: 2,
      "boost.moon": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.salt", morpheffect: "spawn", level: 1 },
        { id: "whispering.sand", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The voice of the waves lingers no longer." },
  },
  {
    ID: "wire.copper",
    Label: "Wire (Copper)",
    Desc: "The Malachite's metal.",
    inherits: "_material",
    audio: "Metallic",
    aspects: {
      metal: 1,
      forge: 2,
      "boost.forge": 2,
      nectar: 1,
      "boost.nectar": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "wire.copper", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Finished." },
  },
  {
    ID: "wire.gold",
    Label: "Wire (Gold)",
    Desc: "The Lionsmith has sometimes been associated with this metal… as has the Hour called the Flowermaker.",
    inherits: "_material",
    audio: "SmallMetallic",
    aspects: {
      metal: 1,
      forge: 2,
      "boost.forge": 2,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "wire.gold", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The Flowermaker existed before the Intercalate, but it is far from certain that he existed <i>long</i> before the Intercalate - before the Forge of Days began to develop her interest in the Sun.",
    },
  },
  {
    ID: "wire.orichalcum",
    Label: "Wire (Orichalcum)",
    Desc: "A metal which alters its estate in every age, but in every age can be used to catalyse the azoth.",
    inherits: "_material",
    audio: "SmallMetallic",
    aspects: {
      metal: 1,
      forge: 4,
      "boost.forge": 4,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "wire.orichalcum", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There is a sunset song which tells how in sea-stolen Ys, all the water-ewers were orichalcum, and all the window-panes were amber… [There are Scholar-level Forge recipes which can be used to craft this from another metal.]",
    },
  },
  {
    ID: "wire.silver",
    Label: "Wire (Silver)",
    Desc: "The Meniscate's metal.",
    inherits: "_material",
    audio: "Metallic",
    aspects: { metal: 1, forge: 2, "boost.forge": 2, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "wire.silver", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There is a rare alloy called gervinite which is used for potent Knock-devices. It has some of the properties of silver. Would it be possible, perhaps, to use silver wire instead? It would be a Keeper-level recipe…",
    },
  },
  {
    ID: "wire.steel",
    Label: "Wire (Steel)",
    Desc: "The Colonel's metal.",
    inherits: "_material",
    audio: "Metallic",
    aspects: { metal: 1, edge: 1, "boost.edge": 1, forge: 2, "boost.forge": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "wire.steel", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Finished." },
  },
  {
    ID: "wire.tin",
    Label: "Wire (Tin)",
    Desc: "The white metal of the Sun-in-Rags.",
    inherits: "_material",
    audio: "Metallic",
    aspects: {
      metal: 1,
      forge: 2,
      "boost.forge": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "wire.tin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Finished." },
  },
  {
    ID: "witchworms.desiccated",
    Label: "Desiccated Witchworms",
    Desc: "Nasty little things, but almost safe when they're this dead.",
    inherits: "_material",
    audio: "SmallRattly",
    aspects: {
      remains: 1,
      knock: 2,
      "boost.knock": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "witchworms.desiccated", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Rinse them carefully away." },
  },
  {
    ID: "yew.blank",
    Label: "Yew Blank",
    Desc: "A wood sacred to the Malachite, who is also called the Ring-Yew; but also the tree that the Dead pass in the dark.",
    inherits: "_material",
    audio: "Wooden",
    aspects: {
      wood: 1,
      fuel: 1,
      nectar: 2,
      "boost.nectar": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "yew.blank", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Finished." },
  },
  {
    ID: "bittersweet.certainty",
    unique: true,
    Label: "Bittersweet Certainty",
    Desc: "Eventually, the Sun-in-Rags always brings its beautiful ending.",
    inherits: "_memory",
    aspects: {
      sound: 1,
      lantern: 1,
      "boost.lantern": 1,
      winter: 2,
      "boost.winter": 2,
    },
  },
  {
    ID: "confounding.parable",
    unique: true,
    Label: "Confounding Parable",
    Desc: "'The Moth, the Grail, and the Egg Unhatching all tell different stories of the world's beginning. One of those stories is the oldest, but it may not be the first.' - Abbess Nonna",
    inherits: "_memory",
    aspects: {
      moon: 2,
      "boost.moon": 2,
      rose: 2,
      "boost.rose": 2,
      sky: 2,
      "boost.sky": 2,
    },
  },
  {
    ID: "mem.contradiction",
    unique: true,
    Label: "Memory: Contradiction",
    Desc: "Something uncomfortable.",
    inherits: "_memory",
    aspects: { edge: 2, "boost.edge": 2, moon: 1, "boost.moon": 1 },
  },
  {
    ID: "mem.dreamt",
    unique: true,
    Label: "Memory: A Stolen Secret",
    Desc: "Something I overheard in dreams?",
    inherits: "_memory",
    aspects: { knock: 1, "boost.knock": 1, moon: 2, "boost.moon": 2 },
  },
  {
    ID: "mem.fear",
    unique: true,
    Label: "Memory: Fear",
    Desc: "'The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.' - Lovecraft",
    inherits: "_memory",
    aspects: { edge: 1, "boost.edge": 1, scale: 2, "boost.scale": 2 },
  },
  {
    ID: "mem.foresight",
    unique: true,
    Label: "Memory: Foresight",
    Desc: "'Wit's forge and fire-blast, meaning's press and screw.' - Coleridge, 'On Donne's Poetry'",
    inherits: "_memory",
    aspects: { forge: 2, "boost.forge": 2, lantern: 1, "boost.lantern": 1 },
  },
  {
    ID: "mem.gossip",
    unique: true,
    Label: "Memory: Gossip",
    Desc: "Frivolous, but tasty.",
    inherits: "_memory",
    aspects: { grail: 1, "boost.grail": 1, rose: 2, "boost.rose": 2 },
  },
  {
    ID: "mem.hindsight",
    unique: true,
    Label: "Memory: Hindsight",
    Desc: "Some things we can only really understand when they're gone.",
    inherits: "_memory",
    aspects: { scale: 1, "boost.scale": 1, winter: 2, "boost.winter": 2 },
  },
  {
    ID: "mem.impulse",
    unique: true,
    Label: "Memory: Impulse",
    Desc: "It doesn't exactly make sense - but I understand it anyway.",
    inherits: "_memory",
    aspects: { moth: 2, "boost.moth": 2, nectar: 1, "boost.nectar": 1 },
  },
  {
    ID: "mem.intuition",
    unique: true,
    Label: "Memory: Intuition",
    Desc: "You just know, you know?",
    inherits: "_memory",
    aspects: { moon: 2, "boost.moon": 2, rose: 2, "boost.rose": 2 },
  },
  {
    ID: "mem.loss",
    unique: true,
    Label: "Memory: Loss",
    Desc: "Whatever it was, now it isn't.",
    inherits: "_memory",
    aspects: { edge: 1, "boost.edge": 1, winter: 1, "boost.winter": 1 },
  },
  {
    ID: "mem.pattern",
    unique: true,
    Label: "Memory: Pattern",
    Desc: "Something fits just right.",
    inherits: "_memory",
    aspects: { forge: 1, "boost.forge": 1, knock: 2, "boost.knock": 2 },
  },
  {
    ID: "mem.regret",
    unique: true,
    Label: "Memory: Regret",
    Desc: "Every choice has its shadow.",
    inherits: "_memory",
    aspects: { forge: 1, "boost.forge": 1, winter: 2, "boost.winter": 2 },
  },
  {
    ID: "mem.revelation",
    unique: true,
    Label: "Memory: Revelation",
    Desc: "Some truths come to us from outside, or above.",
    inherits: "_memory",
    aspects: { lantern: 2, "boost.lantern": 2 },
  },
  {
    ID: "mem.salt",
    unique: true,
    Label: "Memory: Salt",
    Desc: "Sea-spray, depth-sorrow.",
    inherits: "_memory",
    aspects: {
      knock: 1,
      "boost.knock": 1,
      moon: 1,
      "boost.moon": 1,
      winter: 1,
      "boost.winter": 1,
    },
  },
  {
    ID: "mem.satisfaction",
    unique: true,
    Label: "Memory: Satisfaction",
    Desc: "Some appetites are easier to satisfy than others.",
    inherits: "_memory",
    aspects: { grail: 2, "boost.grail": 2, heart: 1, "boost.heart": 1 },
  },
  {
    ID: "mem.scent",
    unique: true,
    Label: "Memory: Scent",
    Desc: "Green scents recall rain.",
    inherits: "_memory",
    aspects: { nectar: 1, "boost.nectar": 1 },
  },
  {
    ID: "mem.sight",
    unique: true,
    Label: "Memory: Sight",
    Desc: "'The eye sees more than the heart knows.' - Blake",
    inherits: "_memory",
    aspects: { lantern: 1, "boost.lantern": 1 },
  },
  {
    ID: "mem.solace",
    unique: true,
    Label: "Memory: Solace",
    Desc: "Peace after trouble.",
    inherits: "_memory",
    aspects: { heart: 2, "boost.heart": 2, sky: 1, "boost.sky": 1 },
  },
  {
    ID: "mem.sound",
    unique: true,
    Label: "Memory: Sound",
    Desc: "A memory lasts longer than an echo. Of course when Speech came into the world, and we could cast echoes into words, things got more complicated.",
    inherits: "_memory",
    aspects: { heart: 1, "boost.heart": 1 },
  },
  {
    ID: "mem.storm",
    unique: true,
    Label: "Memory: Storm",
    Desc: "There are storms great enough to shake the moon from the sky, and one's thoughts from one's skull.",
    inherits: "_memory",
    aspects: { heart: 2, "boost.heart": 2, sky: 2, "boost.sky": 2 },
  },
  {
    ID: "mem.taste",
    unique: true,
    Label: "Memory: Taste",
    Desc: "'Every sweet has its sour.' - Emerson",
    inherits: "_memory",
    aspects: { grail: 1, "boost.grail": 1 },
  },
  {
    ID: "mem.touch",
    unique: true,
    Label: "Memory: Touch",
    Desc: "Craft is learnt through the tips of the fingers.",
    inherits: "_memory",
    aspects: { forge: 1, "boost.forge": 1 },
  },
  {
    ID: "music.beguiling",
    unique: true,
    Label: "Beguiling Melody",
    Desc: "A sweet enchantment of a song.",
    inherits: "_memory",
    aspects: { sound: 1, grail: 2, "boost.grail": 2, sky: 2, "boost.sky": 2 },
  },
  {
    ID: "music.cheerful",
    unique: true,
    Label: "Cheerful Ditty",
    Desc: "A rousing little rhythm.",
    inherits: "_memory",
    aspects: { sound: 1, heart: 2, "boost.heart": 2, sky: 1, "boost.sky": 1 },
  },
  {
    ID: "music.savage",
    unique: true,
    Label: "Savage Hymn",
    Desc: "A music that urges valour and violence.",
    inherits: "_memory",
    aspects: { sound: 1, scale: 2, "boost.scale": 2, sky: 2, "boost.sky": 2 },
  },
  {
    ID: "music.thunderskin",
    unique: true,
    Label: "Thunderskin's Paean",
    Desc: "A song of joyous sacrifice.",
    inherits: "_memory",
    aspects: {
      sound: 1,
      "e.preservation": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 4,
      "boost.heart": 4,
      scale: 1,
      "boost.scale": 1,
    },
  },
  {
    ID: "music.wistful",
    unique: true,
    Label: "Wistful Air",
    Desc: "A half-sorrowful music of half-pleasant longing.",
    inherits: "_memory",
    aspects: { sound: 1, rose: 2, "boost.rose": 2, sky: 2, "boost.sky": 2 },
  },
  {
    ID: "old.moment",
    unique: true,
    Label: "Old Moment",
    Desc: "You've had them too; those moments when we seem to look out at the world through another's eyes. What if those moments were real?",
    inherits: "_memory",
    aspects: {
      "e.preservation": 1,
      lantern: 2,
      "boost.lantern": 2,
      moth: 2,
      "boost.moth": 2,
      scale: 4,
      "boost.scale": 4,
    },
  },
  {
    ID: "riddle.nameday",
    unique: true,
    Label: "Nameday Riddle",
    Desc: "A deceptively intricate riddle that might just teach us who we really are. Gervinus van Lauren was notoriously fond of these.",
    inherits: "_memory",
    aspects: { knock: 2, "boost.knock": 2, moth: 3, "boost.moth": 3 },
  },
  {
    ID: "secret.threshold",
    unique: true,
    Label: "Secret Threshold",
    Desc: "It's not easy to draw our own doors, but it's not impossible.",
    inherits: "_memory",
    aspects: { knock: 2, "boost.knock": 2, rose: 1, "boost.rose": 1 },
  },
  {
    ID: "torgues.cleansing",
    unique: true,
    Label: "Torgue's Cleansing",
    Desc: "The librarian Natalia Brulleau learnt this powerful - if unpleasant - technique from the priest and Edge-long, Reverend Torgue.",
    inherits: "_memory",
    aspects: { edge: 2, "boost.edge": 2 },
  },
  {
    ID: "wild.surmise",
    unique: true,
    Label: "Wild Surmise",
    Desc: "'Eyes open, skies open!'",
    inherits: "_memory",
    aspects: {
      "e.ithastry": 1,
      lantern: 3,
      "boost.lantern": 3,
      moth: 3,
      "boost.moth": 3,
      sky: 3,
      "boost.sky": 3,
    },
  },
  {
    ID: "windrumour",
    unique: true,
    Label: "Wind-Rumour",
    Desc: "'If the cloud were a canvas, who spread it? If the sky were a sheet, who knotted it?' A Wind-Rumour is an auspice found in the sky by those who look too long, interpretable only by the wise.",
    inherits: "_memory",
    aspects: {
      omen: 1,
      "e.birdsong": 1,
      heart: 1,
      "boost.heart": 1,
      sky: 2,
      "boost.sky": 2,
    },
  },
  {
    ID: "winning.move",
    unique: true,
    Label: "Winning Move",
    Desc: "Those who've studied the Hours of the Edge often say the world is a war - the Corrivality. Every event that might happen differently is a battle in that war, a contention between alternate outcomes. The Wisdoms can sometimes show those battles might be won. ",
    inherits: "_memory",
    aspects: { "e.illumination": 1, edge: 3, "boost.edge": 3 },
  },
  {
    ID: "ascendant.harmony",
    unique: true,
    Label: "Ascendant Harmony",
    Desc: "A bright and ringing music which evokes the blue sweep of the lower heavens.",
    inherits: "_memory.persistent",
    aspects: {
      sound: 1,
      "e.birdsong": 1,
      lantern: 2,
      "boost.lantern": 2,
      sky: 4,
      "boost.sky": 4,
    },
  },
  {
    ID: "curious.hunch",
    unique: true,
    Label: "Curious Hunch",
    Desc: "A sudden unlikely certainty.",
    inherits: "_memory.persistent",
    aspects: {
      omen: 1,
      "e.nyctodromy": 1,
      heart: 3,
      "boost.heart": 3,
      knock: 4,
      "boost.knock": 4,
      lantern: 3,
      "boost.lantern": 3,
      moth: 3,
      "boost.moth": 3,
    },
  },
  {
    ID: "didumos",
    unique: true,
    Label: "Didumos",
    Desc: "No Star is permitted upon Earth, but we may cozen them to dream of us, and the Dream of a Star may take a kind of form, which we call <i>didumos</i>.' - Thomas Dewulf",
    inherits: "_memory.persistent",
    aspects: {
      "e.hushery": 1,
      "e.horomachistry": 1,
      knock: 3,
      "boost.knock": 3,
      lantern: 3,
      "boost.lantern": 3,
      sky: 6,
      "boost.sky": 6,
      winter: 3,
      "boost.winter": 3,
    },
  },
  {
    ID: "earthsign",
    unique: true,
    Label: "Earth-Sign",
    Desc: "'In the Tracks of Beasts, in the Convolutions of his own Carapace, in Egg-vein and Shell-shadow, the Many-Eyed One found the Signs which can be History.' An Earth-Sign is an auspice traced on the cloaked shape of the earth, perceptible to the sensitive, interpreted only by the wise.",
    inherits: "_memory.persistent",
    audio: "SmallGeneric",
    aspects: {
      omen: 1,
      "e.skolekosophy": 1,
      nectar: 2,
      "boost.nectar": 2,
      scale: 2,
      "boost.scale": 2,
    },
  },
  {
    ID: "enduring.reflection",
    unique: true,
    Label: "Enduring Reflection",
    Desc: "Refine what is; recall what remains.",
    inherits: "_memory.persistent",
    aspects: {
      "e.nyctodromy": 1,
      heart: 1,
      "boost.heart": 1,
      knock: 1,
      "boost.knock": 1,
      rose: 3,
      "boost.rose": 3,
    },
  },
  {
    ID: "forbidden.epic",
    unique: true,
    Label: "Forbidden Epic",
    Desc: "'The attention of the Hours is drawn to the bloodiest wars. Afterwards, the Histories are braided like hair.'",
    inherits: "_memory.persistent",
    aspects: {
      "e.horomachistry": 1,
      "e.birdsong": 1,
      edge: 6,
      "boost.edge": 6,
      moon: 4,
      "boost.moon": 4,
      rose: 4,
      "boost.rose": 4,
    },
  },
  {
    ID: "horizonsight",
    unique: true,
    Label: "Horizon-Sight",
    Desc: " 'On a clear autumn day, the story goes, you can see Ys from the Watchman's Tower. I don't know whether that's true. But on a clear day in Numa… you would see the City Unbuilt.' - Dr Brian Levinsen",
    inherits: "_memory.persistent",
    aspects: { "e.hushery": 1, rose: 4, "boost.rose": 4 },
  },
  {
    ID: "invincible.audacity",
    unique: true,
    Label: "Invincible Audacity",
    Desc: "'A general says: when I make the right choice, I win. An Illuminate says: when I win, I determine which choice was the right one.' - Natalia Brulleau",
    inherits: "_memory.persistent",
    aspects: {
      "e.illumination": 1,
      "e.ithastry": 1,
      edge: 6,
      "boost.edge": 6,
      forge: 3,
      "boost.forge": 3,
      lantern: 3,
      "boost.lantern": 3,
    },
  },
  {
    ID: "music.hive",
    unique: true,
    Label: "Hive's Lament",
    Desc: "A song of pragmatic sorrow.",
    inherits: "_memory.persistent",
    aspects: {
      sound: 1,
      "e.bosk": 1,
      moth: 2,
      "boost.moth": 2,
      nectar: 4,
      "boost.nectar": 4,
      winter: 2,
      "boost.winter": 2,
    },
  },
  {
    ID: "name.earthquake",
    unique: true,
    Label: "Earthquake Name",
    Desc: "Everything comes when it is called - even the nightmares that trouble stone's deep sleep.",
    inherits: "_memory.persistent",
    aspects: {
      omen: 1,
      "e.ithastry": 1,
      "e.skolekosophy": 1,
      forge: 3,
      "boost.forge": 3,
      scale: 6,
      "boost.scale": 6,
    },
  },
  {
    ID: "occult.scrap",
    unique: true,
    Label: "Occult Scrap",
    Desc: "Secret histories are layered beneath the one we know, like the notes in rare wine. The Librarian knows this well.",
    inherits: "_memory.persistent",
    aspects: {
      omen: 1,
      "e.horomachistry": 1,
      knock: 2,
      "boost.knock": 2,
      moth: 2,
      "boost.moth": 2,
      rose: 2,
      "boost.rose": 2,
    },
  },
  {
    ID: "old.wound",
    unique: true,
    Label: "Old Wound",
    Desc: "The wound is visible; the pain is not. ",
    inherits: "_memory.persistent",
    aspects: {
      edge: 1,
      "boost.edge": 1,
      moon: 2,
      "boost.moon": 2,
      winter: 3,
      "boost.winter": 3,
    },
  },
  {
    ID: "windinwaiting",
    unique: true,
    Label: "Wind-in-Waiting",
    Desc: "'When the sun was redder, when the world was softer, and the Thirty ruled the sky… the winds were better neighbours.'",
    inherits: "_memory.persistent",
    aspects: {
      "e.birdsong": 1,
      "e.bosk": 1,
      grail: 3,
      "boost.grail": 3,
      moth: 3,
      "boost.moth": 3,
      scale: 3,
      "boost.scale": 3,
      sky: 6,
      "boost.sky": 6,
    },
  },
  {
    ID: "wormwood.dream",
    unique: true,
    Label: "Wormwood Dream",
    Desc: "If there are laws which apply only in dream - then it must also be that there are crimes which can only be committed there.",
    inherits: "_memory.persistent",
    aspects: {
      omen: 1,
      "e.skolekosophy": 1,
      "e.nyctodromy": 1,
      edge: 3,
      "boost.edge": 3,
      moon: 6,
      "boost.moon": 6,
      winter: 6,
      "boost.winter": 6,
    },
  },
  {
    ID: "numen.alte",
    Label: "Numen: Merciless Alteration",
    Desc: "The fundamental flaw; the irresistible shortcut; the hate that heats; the change that mars; the scar that opens. These are the foulest Histories.  [Any Librarian can use this to establish a History and complete the game - but the Artist and the Archaeologist can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      edge: 5,
      "boost.edge": 5,
      forge: 5,
      "boost.forge": 5,
      grail: 5,
      "boost.grail": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.alte", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.asce",
    Label: "Numen: the Paths of the Sun",
    Desc: "The Sun has charted his Paths - paths beyond walls and woods and Bounds. When the Sun lights our way, when we are ready, all of us will enter Eternity - at least, in the right History... [Any Librarian can use this to establish a History and complete the game - but the Cartographer and the Twice-Born can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      forge: 5,
      "boost.forge": 5,
      knock: 5,
      "boost.knock": 5,
      lantern: 5,
      "boost.lantern": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.asce", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.bala",
    Label: "Numen: Back Into Balance",
    Desc: "When the travelling Carapace-kinds passed beyond the wave and the sky, they made arrangements for their return. There are Histories where those arrangements might be invoked...  [Any Librarian can use this to establish a History and complete the game - but the Executioner and the Revolutionary can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      heart: 5,
      "boost.heart": 5,
      sky: 5,
      "boost.sky": 5,
      winter: 5,
      "boost.winter": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.bala", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.bell",
    Label: "Numen: the Bells of Ys",
    Desc: "Ys, by her arts, found the strike-tone that shakes the Hours. For this reason among many the Hours discourage traffic with Ys. But a bell cast with this secret could speak the Ys-note…  [Any Librarian can use this to establish a History and complete the game - but the Prodigal and the Revolutionary can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      edge: 5,
      "boost.edge": 5,
      forge: 5,
      "boost.forge": 5,
      rose: 5,
      "boost.rose": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.bell", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.conf",
    Label: "Numen: Inescapable Confinement",
    Desc: "Everything ultimately comes down to a choice between Eternity and History. There's only one place you're safe from both, and it's not a place anyone would want to be. It's a prison that can only exist in certain Histories...  [Any Librarian can use this to establish a History and complete the game - but the Prodigal and the Archaeologist can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      knock: 5,
      "boost.knock": 5,
      scale: 5,
      "boost.scale": 5,
      winter: 5,
      "boost.winter": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.conf", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.desc",
    Label: "Numen: the Sun's Weakness",
    Desc: "The Sun's sins and the Sun's scars are our salvation. There are Histories where they will trap us - prevent us rising to Eternity - [Any Librarian can use this to establish a History and complete the game - but the Executioner can use it to win a particular victory.]",
    inherits: "_numen",
    aspects: {
      grail: 5,
      "boost.grail": 5,
      lantern: 5,
      "boost.lantern": 5,
      moth: 5,
      "boost.moth": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.desc", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.feas",
    Label: "Numen: an Irresistible Feast",
    Desc: "It was Hunger that made Worms of Dragons - when they consumed the corpses of Hours. Without the savour-secret of the Carapace, their hunger would not have been sufficient. In certain Histories, that savour-secret still has power... [Any Librarian can use this to establish a History and complete the game - but the Artist can use it to win a particular victory.]",
    inherits: "_numen",
    aspects: {
      edge: 5,
      "boost.edge": 5,
      grail: 5,
      "boost.grail": 5,
      nectar: 5,
      "boost.nectar": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.feas", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.loop",
    Label: "Numen: Loopholes",
    Desc: "When Eternity came into the world, certain prudent powers arranged loopholes: the House of the Moon, the persistence of possibility, the right to vengeance. In the right Histories, those loopholes will open again... [Any Librarian can use this to establish a History and complete the game - but the Twice-Born can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      knock: 5,
      "boost.knock": 5,
      moon: 5,
      "boost.moon": 5,
      moth: 5,
      "boost.moth": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.loop", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.oldl",
    Label: "Numen: That Old Lost Music",
    Desc: "In the right Histories, every song ever sung still lingers in wind and echo, untouched by the demands of Eternity…  [Any Librarian can use this to establish a History and complete the game - but the Symurgist and the Magnate can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      rose: 5,
      "boost.rose": 5,
      scale: 5,
      "boost.scale": 5,
      sky: 5,
      "boost.sky": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.oldl", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.secr",
    Label: "Numen: the Great Counterfeit",
    Desc: "The Sun-in-Splendour and the Forge of the Days could not be joined. But Sunset Celia and the Swan King could. This secret is the trick of it. [Any Librarian can use this to establish a History and complete the game - but the Twice-Born can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      lantern: 5,
      "boost.lantern": 5,
      moon: 5,
      "boost.moon": 5,
      nectar: 5,
      "boost.nectar": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.secr", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.thre",
    Label: "Numen: Three Rules",
    Desc: "The Hours are bound by their own edicts - even the Chancel and the Calyptra. That's why their deepest rules are secret. In certain Histories, if we know those deepest rules, we know what even the Chancel and the Calyptra may not do.  [Any Librarian can use this to establish a History and complete the game - but the Revolutionary can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      heart: 5,
      "boost.heart": 5,
      moth: 5,
      "boost.moth": 5,
      scale: 5,
      "boost.scale": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.thre", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.unde",
    Label: "Numen: a Final Understanding",
    Desc: "Eternity and History cannot be reconciled. Freedom cannot be perfection - not unless we understand the paradox of the eternal ending. And only in certain Histories is that paradox possible... [Any Librarian can use this to establish a History and complete the game - but the Magnate can use it to win a particular victory.]",
    inherits: "_numen",
    aspects: {
      rose: 5,
      "boost.rose": 5,
      sky: 5,
      "boost.sky": 5,
      winter: 5,
      "boost.winter": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.unde", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "numen.worl",
    Label: "Numen: Weaving the World",
    Desc: "The Histories, they say, are braided like hair - or tangled like roots. What is the shape of that knot? Funny you should ask…  [Any Librarian can use this to establish a History and complete the game - but the Symurgist and the Cartographer can win a particular victory.]",
    inherits: "_numen",
    aspects: {
      heart: 5,
      "boost.heart": 5,
      moon: 5,
      "boost.moon": 5,
      nectar: 5,
      "boost.nectar": 5,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
        { id: "numen.worl", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What happens when you close the book on a butterfly?" },
  },
  {
    ID: "animal.bones",
    Label: "Animal Bones",
    Desc: "What remains?",
    inherits: "_remains",
    audio: "SmallGeneric",
    aspects: { scale: 2, "boost.scale": 2, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.fear", morpheffect: "spawn", level: 1 },
        { id: "animal.bones", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "I recall a prophecy of war: 'a war in which each flame will find its fuel.' Or was the prophecy mine?",
    },
  },
  {
    ID: "essential.periost",
    Label: "Essential Periost",
    Desc: "What happens when you boil and scrape us down to our utter fundamentals.",
    inherits: "_remains",
    audio: "SmallGeneric",
    aspects: {
      moon: 2,
      "boost.moon": 2,
      nectar: 4,
      "boost.nectar": 4,
      scale: 4,
      "boost.scale": 4,
      winter: 4,
      "boost.winter": 4,
    },
    xtriggers: {
      scrutiny: [
        { id: "old.moment", morpheffect: "spawn", level: 1 },
        { id: "essential.periost", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This was something left from before any of us were born - from a time when the sun swung red and low -   [There are Nectar, Moon and Winter recipes which can be used to craft this from mortal remains.]",
    },
  },
  {
    ID: "jar.heart",
    Label: "Heart in a Jar",
    Desc: "An offering, or an exhibit?",
    inherits: "_remains",
    audio: "SmallCeramic",
    aspects: { heart: 2, "boost.heart": 2, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.fear", morpheffect: "spawn", level: 1 },
        { id: "jar.heart", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "One very final beat." },
  },
  {
    ID: "liquid.sample",
    Label: "Sample Jar",
    Desc: "A rare fluid drawn from an internal cavity.",
    inherits: "_remains",
    audio: "SmallLiquid",
    aspects: { knock: 2, "boost.knock": 2, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "liquid.sample", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Noxious." },
  },
  {
    ID: "skaptodon.fang",
    Label: "Skaptodon Fang",
    Desc: "It is rare for the Lionsmith to make skaptodons, now; but they are difficult to kill, and they live a very long time.",
    inherits: "_remains",
    audio: "SmallRattly",
    aspects: { edge: 2, "boost.edge": 2, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
        { id: "skaptodon.fang", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Potent." },
  },
  {
    ID: "urn.ashes",
    Label: "Urn of Ashes",
    Desc: "Some poor soul who probably won't mind if they're repurposed for a worthy experiment. I probably wouldn't.",
    inherits: "_remains",
    audio: "Ceramic",
    aspects: { winter: 3, "boost.winter": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.fear", morpheffect: "spawn", level: 1 },
        { id: "urn.ashes", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "I recall a prophecy of war: 'a war in which each flame will find its fuel.' Or was the prophecy mine?",
    },
  },
  {
    ID: "spintria.bronze",
    Label: "Bronze Spintria",
    Desc: "Occult treasures are purchased with occult coin: spintriae. Bronze spintriae usually display the act of shaping on their reverse side.",
    inherits: "_spintria",
    audio: "SmallMetallic",
    aspects: { forge: 2, "boost.forge": 2, tally: 2 },
  },
  {
    ID: "spintria.gold",
    Label: "Gold Spintria",
    Desc: "Occult treasures are purchased with occult coin: spintriae. Gold spintriae display scenes that are not visible to mortal eyes on their reverse side.",
    inherits: "_spintria",
    audio: "SmallMetallic",
    aspects: { lantern: 5, "boost.lantern": 5, tally: 5 },
  },
  {
    ID: "spintria.iron",
    Label: "Iron Spintria",
    Desc: "Occult treasures are purchased with occult coin: spintriae. Iron spintriae are the lowest denomination, and display scenes of murder on their reverse side.",
    inherits: "_spintria",
    audio: "SmallMetallic",
    aspects: { edge: 1, "boost.edge": 1, tally: 1 },
  },
  {
    ID: "spintria.silver",
    Label: "Silver Spintria",
    Desc: "Occult treasures are purchased with occult coin: spintriae. Silver spintriae are more valuable, and usually display scenes of debauchery on their reverse side.",
    inherits: "_spintria",
    audio: "SmallMetallic",
    aspects: { grail: 4, "boost.grail": 4, tally: 4 },
  },
  {
    ID: "spintria.tin",
    Label: "Tin Spintria",
    Desc: "Occult treasures are purchased with occult coin: spintriae. Tin spintriae usually display a wild face on their reverse side: shouting, screaming, or singing?",
    inherits: "_spintria",
    audio: "SmallMetallic",
    aspects: { heart: 3, "boost.heart": 3, tally: 3 },
  },
  {
    ID: "almonds",
    Label: "Almonds",
    Desc: "[Add Sugar and spice to make Jumble.]",
    inherits: "_sustenance",
    audio: "SmallRattly",
    aspects: {
      "course.side": 1,
      ingredient: 1,
      forge: 1,
      "boost.forge": 1,
      grail: 1,
      "boost.grail": 1,
      moth: 1,
      "boost.moth": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "almonds", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "[Today will always be the day you learnt that the ripening almond-fruit is called <i>drupe</i>, unless you were already wise in the almond lore.]",
    },
  },
  {
    ID: "apple.charlotte",
    Label: "Apple Charlotte",
    Desc: "A classic English pudding of apples stewed with cinnamon and layered with crisp golden bread.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "apple.charlotte", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "bake.ham.potato",
    Label: "Ham and Potato Bake",
    Desc: "Filling and tasty.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "bake.ham.potato", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "bake.mushroom.potato",
    Label: "Mushroom & Potato Bake",
    Desc: "Collers tried out a variation on this as Cucurbit prison fare. It was tasty; but allegedly also he was interested in the connection between the modulation of the taste of mushrooms, and the suppression of the Crowned Growth.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "bake.mushroom.potato", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "beef.roast",
    Label: "Roast Beef",
    Desc: "Our fathers of old were robust, stout, and strong,\nAnd kept open house, with good cheer all day long,\nWhich made their plump tenants rejoice in this song—\nOh! The Roast Beef of old England,\nAnd old English Roast Beef!\n\n- Henry Fielding, <i>The Grub Street Opera</i>",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "beef.roast", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "beef.roast.marinated",
    Label: "Marinated Roast Beef",
    Desc: "But since we have learnt from all-vapouring France\nTo eat their ragouts as well as to dance,\nWe're fed up with nothing but vain complaisance\nOh! the Roast Beef of Old England,\nAnd old English Roast Beef!\n\n- Henry Fielding, <i>The Grub Street Opera</i>",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "beef.roast.marinated", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "blackberries",
    Label: "Blackberries",
    Desc: "Berries promised by darkness.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      ingredient: 1,
      fruit: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "blackberries", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Sweet and tangy. [If you're looking for more Blackberries, they can sometimes be found on the Moor in summer and autumn.]",
    },
  },
  {
    ID: "bread.crusty",
    Label: "Crusty Bread",
    Desc: "[Use bread with a Knife and mushrooms, ham, pilchards, or other savoury things… or add apples and spice for a classic English pudding.]",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      ingredient: 1,
      bread: 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "bread.crusty", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "bread.eggy",
    Label: "Eggy Bread",
    Desc: "On the continent, they call it 'pain perdu': sounds like damnation but tastes like sin.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "bread.eggy", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "bread.pillas",
    Label: "Pillas-Oat Bread",
    Desc: "Gritty bread made with the hardy, ancient oats that grow at Land's End.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      bread: 1,
      "course.first": 1,
      ingredient: 1,
      forge: 1,
      "boost.forge": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bread.pillas", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Gritty, but good." },
  },
  {
    ID: "cake.blackberry",
    Label: "Blackberry Sponge Cake",
    Desc: "Light, sweet sponge cake and the taste of autumn hedgerows.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "cake.blackberry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "cake.honey",
    Label: "Cornish Honey Cake",
    Desc: "Under no circumstances should this ever be confused with Devonshire Honey Cake, which everyone in Brancrug could instantly identify as an inferior variation.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      heart: 2,
      "boost.heart": 2,
      lantern: 2,
      "boost.lantern": 2,
      moth: 2,
      "boost.moth": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "cake.honey", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "cake.knot",
    Label: "Knot-Cake",
    Desc: "According to the ancient pattern.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      edge: 2,
      "boost.edge": 2,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      lantern: 1,
      "boost.lantern": 1,
      moth: 3,
      "boost.moth": 3,
      nectar: 2,
      "boost.nectar": 2,
      scale: 3,
      "boost.scale": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "cake.knot", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "cake.madeira",
    Label: "Madeira Cake",
    Desc: "In the eighteenth century, one would have a slice of this in the morning with a glass of Madeira - fortified wine from the Madeira islands, volcanic yet lush, rugged yet balmy, bright with the calls of sandpipers and firecrests… this is the twentieth century. We have afternoon tea now. We don't drink fortified wine at ten o'clock in the morning. No more sandpipers. No more firecrests. But the cake's still good. Almonds.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      lantern: 1,
      "boost.lantern": 1,
      moth: 1,
      "boost.moth": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "cake.madeira", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "cake.rosehip",
    Label: "Rosehip Sponge Cake",
    Desc: "<i>Rosa rugosa</i>, the beach rose, is often regarded as a foreign interloper on European shores, but this cake is a strong argument for our hospitality.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      heart: 2,
      "boost.heart": 2,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "cake.rosehip", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "casserole.ham.egg",
    Label: "Ham and Egg Casserole",
    Desc: "Tasty and filling.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      moth: 1,
      "boost.moth": 1,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "casserole.ham.egg", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "chips.game",
    Label: "Game Chips",
    Desc: "Long before fish and chips, these went crunchily with game. Ideally you'd want bread sauce and breadcrumbs to complete the ensemble, but honestly it's hard enough not just to stuff these directly into your mouth.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      knock: 1,
      "boost.knock": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "chips.game", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "croquettes.egg",
    Label: "Egg Croquettes",
    Desc: "Come for the crunch, stay for the nourishment.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 1,
      "boost.heart": 1,
      scale: 2,
      "boost.scale": 2,
      sky: 2,
      "boost.sky": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "croquettes.egg", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "croutons.plum",
    Label: "Plum Croutons",
    Desc: "One should never make this with plums that are not ripe enough to eat. One is quite serious.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "croutons.plum", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "egg.boiled",
    Label: "Boiled Egg",
    Desc: "Neatly packaged nutrition, pale as a December dawn.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "egg.boiled", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "egg.scrambled",
    Label: "Scrambled Egg",
    Desc: "With bacon, scrambled eggs were the breakfast of Empire. In these less hegemonic times, Empire is optional; as is bacon.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 1,
      "boost.heart": 1,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "egg.scrambled", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "floating.island",
    Label: "Floating Island",
    Desc: "Vanilla, custard, and meringue, landscaped and caramelled: a Claridge's speciality.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
      rose: 1,
      "boost.rose": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "floating.island", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "fruit.bowl.pears",
    Label: "Bowl of Sea-Blest Pears",
    Desc: "Smooth as butter and wonderfully juicy.",
    inherits: "_sustenance",
    audio: "SmallCeramic",
    aspects: {
      ingredient: 1,
      fruit: 1,
      grail: 1,
      "boost.grail": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "fruit.bowl.pears", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Thirza Blake developed this variety by - she claimed - hybridising with orchard rootstock of Ys-beyond-the-wave. [Add Dough and spices to bake a pie.]",
    },
  },
  {
    ID: "fruit.misshapen",
    Label: "Misshapen Fruit",
    Desc: "Salvaged windfalls, lumpy but tasty.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      fruit: 1,
      heart: 1,
      "boost.heart": 1,
      moth: 1,
      "boost.moth": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "fruit.misshapen", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Lumpy, but tasty. Tasty, but lumpy. Lumpy." },
  },
  {
    ID: "fudge",
    Label: "Fudge",
    Desc: "All the bad things doing a good thing.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: { "course.pudding": 1, grail: 3, "boost.grail": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "fudge", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "grapes",
    Label: "Bunch of Grapes",
    Desc: "A juicy blush-purple.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: { ingredient: 1, fruit: 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "grapes", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "On this southern tip of Britain, grapes do grow. They might even make creditable wine.",
    },
  },
  {
    ID: "ham.canned",
    Label: "Canned Ham",
    Desc: "The taste will remain reliably unchanged for many years to come; which is, in some respects, an advantage.",
    inherits: "_sustenance",
    audio: "SmallMetallic",
    aspects: {
      remains: 1,
      ingredient: 1,
      heart: 2,
      "boost.heart": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "ham.canned", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Salty and savoury." },
  },
  {
    ID: "honey",
    Label: "Honey",
    Desc: "The blood of the Hour called Malachite; also and furthermore, wonderful on toast.",
    inherits: "_sustenance",
    audio: "SmallCeramic",
    aspects: {
      liquid: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      moth: 1,
      "boost.moth": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "honey", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The source, among other things, of Skinshuck Mead, when brewed with the great arts of Moth…",
    },
  },
  {
    ID: "honey.cuckoo",
    Label: "Cuckoo-Honey",
    Desc: "The Blomberende were rogues and trickster-heroes among the Carapace-kinds: ingenious, brave, prolific, untrustworthy. In Numa, their children might yet bring their gifts to ordinary hives…",
    inherits: "_sustenance",
    audio: "SmallCeramic",
    aspects: {
      liquid: 1,
      ingredient: 1,
      edge: 2,
      "boost.edge": 2,
      heart: 1,
      "boost.heart": 1,
      knock: 1,
      "boost.knock": 1,
      moth: 3,
      "boost.moth": 3,
      nectar: 2,
      "boost.nectar": 2,
      scale: 3,
      "boost.scale": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "old.moment", morpheffect: "spawn", level: 1 },
        { id: "honey.cuckoo", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A fleetingly familiar taste, and a prickling in the skull…  not surprising, perhaps, that it can be brewed into Skinshuck Mead with the great arts of Moth.",
    },
  },
  {
    ID: "jam.blackberry",
    Label: "Blackberry Jam",
    Desc: "Plucked from hedgerows.",
    inherits: "_sustenance",
    audio: "SmallCeramic",
    aspects: {
      ingredient: 1,
      grail: 1,
      "boost.grail": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "jam.blackberry", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Sweet and tasty." },
  },
  {
    ID: "jam.rosehip",
    Label: "Rosehip Jam",
    Desc: "Plucked from wild roses.",
    inherits: "_sustenance",
    audio: "SmallCeramic",
    aspects: {
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 2,
      "boost.rose": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "jam.rosehip", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Florally sweet." },
  },
  {
    ID: "leek.gratin",
    Label: "Leek Gratin",
    Desc: "Harvey Hattington, who established a surprisingly persistent influence on the kitchens of Hush House during his short stay here, described leek as 'Onion's Empress.'",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "leek.gratin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "mackerel.kedgeree",
    Label: "Kedgeree",
    Desc: "A wonderfully versatile dish favoured for breakfast by the sons of the lark, and for supper by the daughters of the owl.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      moon: 1,
      "boost.moon": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "mackerel.kedgeree", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "mackerel.montecarlo",
    Label: "Mackerel Monte Carlo",
    Desc: "Most suitable, according to Mrs Arabella Boxer, for a light supper, or a ladies' lunch.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      heart: 2,
      "boost.heart": 2,
      moon: 1,
      "boost.moon": 1,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "mackerel.montecarlo", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "mackerel.pickled",
    Label: "Pickled Mackerel",
    Desc: "Pickling is a kind of afterlife. What comes after afterlife?",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      heart: 1,
      "boost.heart": 1,
      moon: 2,
      "boost.moon": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "mackerel.pickled", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "mackerel.poached",
    Label: "Poached Mackerel",
    Desc: "We do not poach fish in Brancrug without recalling the Turbot Crisis of 1786, when Dr Westcott caught a prodigious turbot, and required the kitchen to poach it for him 'without division'; but no vessel of sufficient size could be found to poach it entire. At last they resorted to 'alchemical assistance'. Mackerel, fortunately, requires no alchemy for its poaching.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      moon: 1,
      "boost.moon": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "mackerel.poached", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "mackerel.soused",
    Label: "Soused Mackerel",
    Desc: "In Scotland, where the tradition began, soused herrings are more usual, but this far south, on the Marches' edge, we make our own rules.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: { "course.first": 1, heart: 2, "boost.heart": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "mackerel.soused", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "marrow.stuffed.acrid",
    Label: "Stuffed Acrid Marrow",
    Desc: "This was not a marrow conducive to harmony. Now it's a dish for warriors.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      "course.main": 1,
      edge: 1,
      "boost.edge": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "marrow.stuffed.acrid", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "marrow.stuffed.dark",
    Label: "Stuffed Dark Marrow",
    Desc: "This was a marrow with secrets. Now it's a dish for mystes.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      "course.main": 1,
      heart: 2,
      "boost.heart": 2,
      moon: 1,
      "boost.moon": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "marrow.stuffed.dark", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "marrow.stuffed.golden",
    Label: "Stuffed Golden Marrow",
    Desc: "This marrow was accounted a beauty among its kind. Now it's a dish for those who understand fidelity.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      "course.main": 1,
      heart: 2,
      "boost.heart": 2,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "marrow.stuffed.golden", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "marrow.stuffed.pale",
    Label: "Stuffed Pale Marrow",
    Desc: "This was a marrow redolent of sorrow. Now it's a dish to comfort the damned.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      "course.main": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 2,
      "boost.nectar": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "marrow.stuffed.pale", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "meringue.apple",
    Label: "Baked Apple Meringue",
    Desc: "Harvey Hattington, during his convalescence at the House, was so obsessed with meringuing techniques that he was ultimately banned from the kitchen.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      forge: 1,
      "boost.forge": 1,
      grail: 2,
      "boost.grail": 2,
      nectar: 1,
      "boost.nectar": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "meringue.apple", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "meringue.mushroom",
    Label: "Mushroom Meringue",
    Desc: "What in the Wolf-Divided's most splintered Name hath here been wrought?",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: { "course.pudding": 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "meringue.mushroom", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Oh." },
  },
  {
    ID: "meringue.pear",
    Label: "Baked Pear Meringue",
    Desc: "Harvey Hattington, during his convalescence at the House, became obsessed with meringuing techniques. He was known to sneak down to the kitchens and interfere with the cooks in pursuit of his ideal.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      forge: 1,
      "boost.forge": 1,
      grail: 2,
      "boost.grail": 2,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "meringue.pear", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "meringue.ys",
    Label: "Walls-of-Ys",
    Desc: "A frankly insensitive name that commemorates the inundation of that fabled city.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      forge: 4,
      "boost.forge": 4,
      grail: 2,
      "boost.grail": 2,
      knock: 2,
      "boost.knock": 2,
      nectar: 4,
      "boost.nectar": 4,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "horizonsight", morpheffect: "spawn", level: 1 },
        { id: "meringue.ys", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Doors can open to more than sight..." },
  },
  {
    ID: "moly",
    Label: "Moly",
    Desc: "'Moly the gods call it, and it is hard for mortal men to dig; but with the gods all things are possible.' - Homer",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      root: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      moon: 2,
      "boost.moon": 2,
      moth: 2,
      "boost.moth": 2,
      nectar: 1,
      "boost.nectar": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.impulse", morpheffect: "spawn", level: 1 },
        { id: "moly", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A fluttering in the skull…" },
  },
  {
    ID: "moly.aujus",
    Label: "Moly au Jus",
    Desc: "This has been called 'Moth, but delicious, but perhaps we all will be, at the end.'",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      "course.side": 1,
      heart: 2,
      "boost.heart": 2,
      moon: 2,
      "boost.moon": 2,
      moth: 2,
      "boost.moth": 2,
      nectar: 1,
      "boost.nectar": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "moly.aujus", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "mushrooms",
    Label: "Mushrooms",
    Desc: "Eat them on toast, bake them with potatoes or pickle them alone.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "mushrooms", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Better cooked, but not inedible raw. [If you're looking for more Mushrooms, they can sometimes be found on the Moor.]",
    },
  },
  {
    ID: "mushrooms.pickled",
    Label: "Pickled Mushrooms",
    Desc: "You'll learn to like them.",
    inherits: "_sustenance",
    audio: "SmallCeramic",
    aspects: {
      "course.first": 1,
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "mushrooms.pickled", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "I might have learnt to like them." },
  },
  {
    ID: "onion.gratin",
    Label: "Onion Gratin",
    Desc: "Harvey Hattington campaigned for the introduction of this dish to the infirmary during his time convalescing at Hush House, though Wakefield referred to it grumpily as 'Trojan Cheese'.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "onion.gratin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "onion.rings",
    Label: "Onion Rings",
    Desc: "An American import that became popular in England these last few years, improbably, via the pages of <i>Vogue</i>.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "onion.rings", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "orange.jumble",
    Label: "Orange Jumble",
    Desc: "'They should be the size of teacup rims, and should curl their crisp edges, faintly pink as the underneath of a young mushroom.' - Lady Jekyll, <i>Kitchen Essays</i>",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      forge: 1,
      "boost.forge": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "orange.jumble", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pear.belle.helene",
    Label: "Poire Belle Hélène",
    Desc: "A sweet dish named (of course) to celebrate Offenbach's 1865 operetta <i>La belle Hélène</i>. Apparently a New York production made an impression on Thirza Blake in her youth…",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      grail: 2,
      "boost.grail": 2,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pear.belle.helene", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pears.ys",
    Label: "Poires Ys",
    Desc: "Like Poire Belle Hélène, except it makes you dream of drowned sunsets.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      forge: 4,
      "boost.forge": 4,
      grail: 2,
      "boost.grail": 2,
      heart: 1,
      "boost.heart": 1,
      nectar: 4,
      "boost.nectar": 4,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pears.ys", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pheasant.jugged",
    Label: "Jugged Pheasant",
    Desc: "The hunter's reward.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      edge: 1,
      "boost.edge": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      rose: 1,
      "boost.rose": 1,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pheasant.jugged", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pheasant.roast",
    Label: "Roast Pheasant",
    Desc: "Best when roasted upside down to start, but turned right way up before the end.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      rose: 1,
      "boost.rose": 1,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pheasant.roast", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pheasant.roast.salad.grape",
    Label: "Cold Pheasant with Grape Salad",
    Desc: "This was the sort of dish you might expect to find for a late supper after the theatre, or halfway through a ball.' - Arabella Boxer",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pheasant.roast.salad.grape", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.apples",
    Label: "Apple Pie",
    Desc: "Flaky, buttery crust; tart-sweet apples with cinnamon and nutmeg.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      forge: 1,
      "boost.forge": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.apples", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.pears",
    Label: "Pear Pie",
    Desc: "Flaky, buttery crust; luscious pears with cinnamon and nutmeg.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      forge: 1,
      "boost.forge": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.pears", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Appetite satisfied.  [If you make this another time, try adding Roast Beef once it's complete.]",
    },
  },
  {
    ID: "pie.cottage",
    Label: "Cottage Pie",
    Desc: "A rich minced beef sauce under a golden crust of baked mash potatoes. Just the thing to come home to after a storm on the moors.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      heart: 1,
      "boost.heart": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.cottage", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.game",
    Label: "Game Pie",
    Desc: "Pheasant or snipe or woodcock or rabbit, and tasty pastry.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      knock: 1,
      "boost.knock": 1,
      moth: 1,
      "boost.moth": 1,
      rose: 1,
      "boost.rose": 1,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.game", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.kingsluck",
    Label: "Kingsluck Pie",
    Desc: "Thirza Blake always insisted on calling it 'the Great Pie of Power', to the lasting annoyance of her peers.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      forge: 2,
      "boost.forge": 2,
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
      knock: 1,
      "boost.knock": 1,
      lantern: 1,
      "boost.lantern": 1,
      moth: 1,
      "boost.moth": 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.kingsluck", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.pilchards",
    Label: "Starygazy Pie",
    Desc: "We are all in the gutter, but some of us are looking at the stars.' - Wilde, <i>Lady Windermere's Fan</i>",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
      scale: 1,
      "boost.scale": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.pilchards", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.pumpkin",
    Label: "Pumpkin Pie",
    Desc: "Take a pound of pumpion and slice it, a handful of thyme, a little rosemary, and sweet marjoram stripped off the stalks, chop them small, then take cinnamon, nutmeg, pepper, and a few cloves all beaten…' - Hannah Woolley, <i>A Gentlewoman's Companion</i>",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      "course.pudding": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.pumpkin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.pumpkin.amber",
    Label: "Amber Pumpkin Pie",
    Desc: "A favourite of Kitty Mazarine's second son. Of course she had to leave them behind in the place of her birth, but she brought the recipe to Brancrug. Did she remember him each time she baked it? Even until the very end?",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 1,
      "boost.heart": 1,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.pumpkin.amber", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.pumpkin.honey",
    Label: "Honey-Haunted Pumpkin Pie",
    Desc: "Harvey Hattington, perenially suspicious of the Blomberende-kind and their cuckoo-honey, nevertheless championed pumpkin pie made with cuckoo-honey as 'the Herald of Savour.'",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      "course.main": 1,
      edge: 2,
      "boost.edge": 2,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      knock: 1,
      "boost.knock": 1,
      moth: 3,
      "boost.moth": 3,
      nectar: 2,
      "boost.nectar": 2,
      scale: 3,
      "boost.scale": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.pumpkin.honey", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pie.sea",
    Label: "Sea-Pie",
    Desc: "Once a treat for sailors, hence the name. [With the Spices and Savours skill, and pears, you might recreate a legendary dish.]",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: { "course.main": 1, ingredient: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.sea", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Appetite satisfied. [If you make this another time, try adding Pears and spice once it's complete.]",
    },
  },
  {
    ID: "pie.vegetable.spring",
    Label: "Steamed Spring Vegetable Pie",
    Desc: "Originally a product of Lord Berners' kitchens at Faringdon House; favoured by Heber-Percy, 'the Mad Boy', Berners' companion, who inlaid the floor of his changing room with pennies and built steps up to his swimming pool…",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 2,
      "boost.nectar": 2,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pie.vegetable.spring", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "stew.vegetables",
    Label: "Vegetable Stew",
    Desc: "Unexciting, but also unobjectionable.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.main": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "stew.vegetables", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pilchards.pickled",
    Label: "Pickled Pilchards",
    Desc: "An acquired, and unforgettable, taste.",
    inherits: "_sustenance",
    audio: "SmallCeramic",
    aspects: {
      "course.first": 1,
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      heart: 1,
      "boost.heart": 1,
      moon: 2,
      "boost.moon": 2,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pilchards.pickled", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "How does one know when one has acquired a taste?" },
  },
  {
    ID: "plums",
    Label: "Plums",
    Desc: "[Add Bread and use a Knife for Plum Croutons, or an Egg and use Mixing Bowls for Prune Whip.]",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      ingredient: 1,
      fruit: 1,
      heart: 1,
      "boost.heart": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "plums", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "potatoes.roast",
    Label: "Roast Potatoes",
    Desc: "You <i>really</i> need rosemary for roast potatoes, but fortunately, the kitchen garden at Hush House has never been short of rosemary.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      heart: 2,
      "boost.heart": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "potatoes.roast", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "potatoes.roast.magnificent",
    Label: "Magnificent Roast Potatoes",
    Desc: "It's the dripping that elevates it. Roast potatoes are a feast for the senses, but the dripping deepens the flavour profile, makes the experience continue through the machinery of the mouth to become a kind of journey.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      edge: 1,
      "boost.edge": 1,
      forge: 1,
      "boost.forge": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "potatoes.roast.magnificent", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pudding.toffee",
    Label: "Toffee Pudding",
    Desc: "Decadent in summer, comforting in winter.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      grail: 2,
      "boost.grail": 2,
      heart: 2,
      "boost.heart": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pudding.toffee", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pudding.yorkshire",
    Label: "Yorkshire Pudding",
    Desc: "Eggy, creamy, crispy, and the eternal supporting character in a Sunday roast. [To the similarly eternal confusion of English speakers who are not British, Yorkshire Pudding is not sweet and cannot be served for the Pudding course.]",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.side": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "pudding.yorkshire", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "pumpkin",
    Label: "Pumpkin",
    Desc: "Mash it, eat it, hide forbidden documents in it.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pumpkin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Better cooked." },
  },
  {
    ID: "pumpkin.amber",
    Label: "Amber Pumpkin",
    Desc: "A lovely golden gourd grown beside the soft sea.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "pumpkin.amber", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Not bad… for a raw pumpkin." },
  },
  {
    ID: "pumpkin.amber.x",
    Label: "Soft Amber Pumpkin",
    Desc: "A lovely golden gourd grown beside the soft sea.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        {
          id: "precursor.honey.cuckoo.frompumpkin",
          morpheffect: "spawn",
          level: 1,
        },
        { id: "pumpkin.amber.x", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Not bad… for a raw pumpkin." },
  },
  {
    ID: "pumpkin.wormy",
    Label: "Wormy Pumpkin",
    Desc: "At a glance, it seems uncorrupted - but it’s squirming with regrettable visitors.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 1,
      "boost.scale": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "pumpkin.wormy", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Revolting." },
  },
  {
    ID: "pyrus.auricalcinus",
    Label: "Pyrus Auricalcinus",
    Desc: "A peculiar pear, with coppery skin that barely dints under the pressure of fingers.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      ingredient: 1,
      fruit: 1,
      forge: 4,
      "boost.forge": 4,
      nectar: 4,
      "boost.nectar": 4,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "pyrus.auricalcinus", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In our History, this grows only on the uncanny hybrids we call 'Mare-blest' trees. [Although there are Scholar-level Nectar recipes that can force it to burst from dead wood.]",
    },
  },
  {
    ID: "rosehips",
    Label: "Rosehips",
    Desc: "Berries that promise roses.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      ingredient: 1,
      fruit: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "rosehips", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Tangy and tart.[If you're looking for more Rosehips, they can sometimes be found on the Moor in summer and autumn.]",
    },
  },
  {
    ID: "sack.vegetables",
    Label: "Sack of Vegetables",
    Desc: "Stew-in-waiting.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "sack.vegetables", morpheffect: "transform" },
      ],
    },
    ambits: { "sack.vegetables": 1 },
    xexts: { scrutiny: "Fresh and hearty." },
  },
  {
    ID: "salad.grape",
    Label: "Grape Salad",
    Desc: "Just enough to fill in the gaps.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      "course.side": 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 1,
      "boost.nectar": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "salad.grape", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "sandwiches.egg",
    Label: "Egg Sandwiches",
    Desc: "Ennobled by cress but acceptable without.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      heart: 2,
      "boost.heart": 2,
      scale: 1,
      "boost.scale": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "sandwiches.egg", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "souffle.aglaophotis",
    Label: "Aglaophotis Soufflé",
    Desc: "One of the most deliciously melting incarnations of occult power ever contrived.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      heart: 2,
      "boost.heart": 2,
      knock: 2,
      "boost.knock": 2,
      lantern: 2,
      "boost.lantern": 2,
      nectar: 1,
      "boost.nectar": 1,
      rose: 2,
      "boost.rose": 2,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "horizonsight", morpheffect: "spawn", level: 1 },
        { id: "souffle.aglaophotis", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Doors can open to more than sight..." },
  },
  {
    ID: "soup.leek",
    Label: "Leek Soup",
    Desc: "A milder taste than onion soup, but no less warming.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      edge: 1,
      "boost.edge": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "soup.leek", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "soup.onion",
    Label: "Onion Soup",
    Desc: "Just enough tang to tantalise.",
    inherits: "_sustenance",
    audio: "SmallLiquid",
    aspects: {
      "course.first": 1,
      edge: 1,
      "boost.edge": 1,
      heart: 2,
      "boost.heart": 2,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "soup.onion", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "soup.pumpkin",
    Label: "Pumpkin Soup",
    Desc: "A blessed warming broth.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "soup.pumpkin", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "soup.pumpkin.amber",
    Label: "Amber Pumpkin Soup",
    Desc: "The amber 'pompions' of Brancrug are, according to tradition, all descendants of the seeds brought by Kitty Mazarine from her home across the soft sea.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      heart: 1,
      "boost.heart": 1,
      lantern: 1,
      "boost.lantern": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "soup.pumpkin.amber", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "soup.pumpkin.honey",
    Label: "Honey-Haunted Pumpkin Soup",
    Desc: "Harvey Hattington, perenially suspicious of the Blomberende-kind and their cuckoo-honey, nevertheless championed pumpkin soup made with cuckoo-honey as 'Savour's Consort.'",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      edge: 2,
      "boost.edge": 2,
      heart: 2,
      "boost.heart": 2,
      knock: 1,
      "boost.knock": 1,
      moon: 1,
      "boost.moon": 1,
      moth: 3,
      "boost.moth": 3,
      nectar: 2,
      "boost.nectar": 2,
      scale: 3,
      "boost.scale": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "soup.pumpkin.honey", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "toastie.ham.cheese",
    Label: "Ham and Cheese Toastie",
    Desc: "Breakfast, lunch or emergency.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      forge: 1,
      "boost.forge": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "toastie.ham.cheese", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "toastie.mushroom",
    Label: "Fried Mushrooms on Toast",
    Desc: "You can do great things with these with a simple white sauce with black pepper, but sometimes you're just hungry.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "toastie.mushroom", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "toastie.pilchards",
    Label: "Pilchards on Toast",
    Desc: "Triply crunchy.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.first": 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 1,
      "boost.nectar": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "toastie.pilchards", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "veg.basket",
    Label: "Basket of Vegetables",
    Desc: "Gifts from the garden.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "veg.basket", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Fresh and hearty." },
  },
  {
    ID: "veg.basket.apples",
    Label: "Basket of Apples",
    Desc: "Notoriously hard to take just one bite.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      ingredient: 1,
      fruit: 1,
      grail: 1,
      "boost.grail": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "veg.basket.apples", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Sweet, crunchy, satisfying." },
  },
  {
    ID: "veg.basket.leeks",
    Label: "Basket of Leeks",
    Desc: "The mark of St David's triumph. And very good in soup.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      edge: 1,
      "boost.edge": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "veg.basket.leeks", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "That wasn't what you'd call easy on the palate." },
  },
  {
    ID: "veg.basket.onions",
    Label: "Basket of Onions",
    Desc: "The <i>prima materia</i> of cooking. This may be why the cosmos is shaped so like an onion.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      edge: 1,
      "boost.edge": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "veg.basket.onions", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "That wasn't what you'd call easy on the palate." },
  },
  {
    ID: "veg.marrow.acrid",
    Label: "Acrid Marrow",
    Desc: "In Brancrug, they take marrows seriously. This is not a marrow conducive to harmony.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      edge: 1,
      "boost.edge": 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "veg.marrow.acrid", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "I was warned." },
  },
  {
    ID: "veg.marrow.dark",
    Label: "Dark Marrow",
    Desc: "In Brancrug, they take marrows seriously. This is a marrow with secrets.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      moon: 1,
      "boost.moon": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "veg.marrow.dark", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The secrets in this marrow are not identifiable to the tongue.",
    },
  },
  {
    ID: "veg.marrow.golden",
    Label: "Golden Marrow",
    Desc: "In Brancrug, they take marrows seriously. This is accounted a beauty among its kind.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      lantern: 1,
      "boost.lantern": 1,
      nectar: 2,
      "boost.nectar": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.solace", morpheffect: "spawn", level: 1 },
        { id: "veg.marrow.golden", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "This marrow's magnificence is not manifest in the mouth.",
    },
  },
  {
    ID: "veg.marrow.pale",
    Label: "Pale Marrow",
    Desc: "In Brancrug, they take marrows seriously. This is a marrow redolent of sorrow.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      raw: 1,
      ingredient: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 2,
      "boost.nectar": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.taste", morpheffect: "spawn", level: 1 },
        { id: "veg.marrow.pale", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Eating it raw only accentuates the sorrow." },
  },
  {
    ID: "whip.prune",
    Label: "Prune Whip",
    Desc: "Much, much tastier than it sounds.",
    inherits: "_sustenance",
    audio: "SmallGeneric",
    aspects: {
      "course.pudding": 1,
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "whip.prune", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "chart.genealogical",
    Label: "Genealogical Chart",
    Desc: "Six years ago, King George's heir Edward killed him in a quarrel over Edward's womanising. The kingdom was saved from constitutional collapse by  Henry Huddleston Abney-Hastings, 13th Count of Loudoun - who claimed descent through the Plantagenet line. Heaven lift the New King!",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { forge: 1, "boost.forge": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "chart.genealogical", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Collers was keenly interested in the history of the houses Tudor, Plantagenet, Hanover, Windsor, et cetera, all the way back to the days of the Leashed Flame. He has also doodled the Suppression Bureau seal by the name of King Henry's mother Edith. Of course: Lady Edith serves as Nocturnal Secretary... the minister with final responsibility for the entire Bureau.",
    },
  },
  {
    ID: "clock.artdeco",
    Label: "Brazen Clock",
    Desc: "It's not immediately apparent that this clock lacks hands, although, when wound, it dutifully ticks.",
    inherits: "_wallart",
    audio: "Clock",
    aspects: { forge: 1, "boost.forge": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "clock.artdeco", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "An inscription reads: 'For D.M. Time is; Time was; Time is past.'",
    },
  },
  {
    ID: "hours.sister",
    Label: "'The Sister-and-Witch'",
    Desc: "'The Sister-and-Witch brings together what cannot be apart. She is sought beneath the moon and at the water's edge. She is pearl, amber, coral; she cannot be touched; she cannot be separated.'",
    inherits: "_wallart",
    audio: "Painting",
    aspects: {
      grail: 1,
      "boost.grail": 1,
      heart: 2,
      "boost.heart": 2,
      moth: 2,
      "boost.moth": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "hours.sister", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Abbot Geffrey recorded a prophetic dream: two women, one in violet, one in white, gathering seashells. The white-clad one, he wrote, handed him a shell and reminded him that one cannot keep what one cannot hold…",
    },
  },
  {
    ID: "hours.thunderskin",
    Label: "'The Thunderskin'",
    Desc: "'He cannot be stilled; he demands the dance; he is beaten, like a drum. He is heard in the Wood below the world.'",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { heart: 2, "boost.heart": 2, sky: 2, "boost.sky": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "hours.thunderskin", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A story is told of Hendrik, 1st Baron Dewulf, and a local cunning man, one Red William, who placed a curse on the Dewulfs: 'There will be no seventh of their line.' There is another story that it was no curse but a prophecy, and that Hendrik did not execute William but kept him safe in the caves below the isle...",
    },
  },
  {
    ID: "hours.velvet",
    Label: "'The Velvet'",
    Desc: "'The Glory is a question, and the Moth always answers Yes. The Velvet's answer is No, and that is always her answer.'",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moon: 2, "boost.moon": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "hours.velvet", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The Velvet is the Hour that keeps secrets, and this painting has no more secrets to share.",
    },
  },
  {
    ID: "hours.witch",
    Label: "'The Witch-and-Sister'",
    Desc: "'The Witch-and-Sister unites what is at rest. She is sought at the water's edge and beneath the moon. She cannot be separated; she cannot be touched; she is coral, amber, pearl'",
    inherits: "_wallart",
    audio: "Painting",
    aspects: {
      grail: 2,
      "boost.grail": 2,
      heart: 1,
      "boost.heart": 1,
      moth: 2,
      "boost.moth": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "hours.witch", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Abbot Geffrey recorded a prophetic dream: two women, one in violet, one in white, gathering seashells. Each gave him a shell, but each gave him different advice…",
    },
  },
  {
    ID: "mirror.fractured",
    Label: "Fractured Mirror",
    Desc: "Cracked and fly-specked.",
    inherits: "_wallart",
    audio: "Ceramic",
    aspects: { knock: 1, "boost.knock": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "mirror.fractured", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Your face in this glass looks scarred - older - harsher. A certain Door in dreams - it is said - opens only for a mirror which has just been cracked. But this mirror was cracked long ago.",
    },
  },
  {
    ID: "mirror.frost",
    Label: "Frosty Mirror",
    Desc: "A moon-coloured metal oval. It's shaped like a mirror, but no reflection is visible.",
    inherits: "_wallart",
    audio: "Ceramic",
    aspects: { lantern: 1, "boost.lantern": 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "mirror.frost", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The frame has been carved with a quote from Blake - William, not Thirza: 'Prisons are built with stones of Law, Brothels with bricks of Religion.'",
    },
  },
  {
    ID: "mirror.night",
    Label: "Night Mirror",
    Desc: "An oddly dim mirror.",
    inherits: "_wallart",
    audio: "Ceramic",
    aspects: { lantern: 1, "boost.lantern": 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "mirror.night", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The glass returns reflected light with some reluctance, so even in broad daylight the effect is that of dusk.",
    },
  },
  {
    ID: "mirror.shaving",
    Label: "Shaving Mirror",
    Desc: "<i>Snip snip!</i>",
    inherits: "_wallart",
    audio: "Ceramic",
    aspects: { lantern: 1, "boost.lantern": 1, moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "mirror.shaving", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Faint rust-specks dot the mirror. Or, just possibly, blood.",
    },
  },
  {
    ID: "mirror.silver",
    Label: "Silvery Mirror",
    Desc: "There are silvered mirrors, and there are silvery mirrors.",
    inherits: "_wallart",
    audio: "Ceramic",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "mirror.silver", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "'When the moon rises, the stars watch.'" },
  },
  {
    ID: "mirror.storm",
    Label: "Storm-Tossed Mirror",
    Desc: "Solid workmanship, but not obviously remarkable.",
    inherits: "_wallart",
    audio: "Ceramic",
    aspects: { lantern: 1, "boost.lantern": 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "mirror.storm", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A plaque explains that in 1872 this mirror survived a shipwreck untouched, and was gifted to the House by a grateful survivor who was nursed back to health in the infirmary below.",
    },
  },
  {
    ID: "motley1.portrait1",
    Label: "'Our Benefactor'",
    Desc: "Evidently someone who donated to the Curia… but preferred to remain anonymous.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { forge: 1, "boost.forge": 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "motley1.portrait1", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "He's wearing a little silver brooch fashioned in the shape of a fox's head.",
    },
  },
  {
    ID: "motley1.portrait2",
    Label: "'Our Benefactress'",
    Desc: "Evidently someone who donated to the Curia… but preferred to remain anonymous.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { forge: 1, "boost.forge": 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "motley1.portrait2", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "She's wearing a little silver brooch fashioned in the shape of a cat's head.",
    },
  },
  {
    ID: "motto.bureau",
    Label: "ALIIS LICET TIBI NON LICET",
    Desc: "'To us it is permitted; to you it is not permitted.' The motto of the Suppression Bureau.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: { knock: 1, "boost.knock": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "motto.bureau", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The story goes that Governor Collers used to keep another sign in his office with the motto of the Nocturnal Branch, the Bureau's predecessor: RADIX MALORUM LIBERTAS EST. If someone complained about Bureau policies, he would point to the sign to remind them that things could be worse. Eventually it was pointed out to him that 'the root of evils is liberty' was an undiplomatic motto to display in a prison, and he grumpily retired the sign.",
    },
  },
  {
    ID: "painting.annointing",
    Label: "'An Anointing'",
    Desc: "A silent crowd watches a robed priest bless a patient subject with sacred oils.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.annointing", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'CS'." },
  },
  {
    ID: "painting.behatted",
    Label: "'Portrait of a Behatted Lady'",
    Desc: "'The More Prominent the Headgear, the Closer to the Glory'",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.behatted", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "The headgear is, without doubt, impressively prominent.",
    },
  },
  {
    ID: "painting.birds",
    Label: "'Departure'",
    Desc: "Here Valentine has painted gulls migrating across a darkening sea.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moth: 2, "boost.moth": 2, winter: 2, "boost.winter": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.birds", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Each winter the black-backed gulls would leave Brancrug for warmer climes. Valentine would command a candle-lit dinner on the beach in their honour, with dancing and drumming, though he would never attend, only watch approvingly from the Gullscry Tower.",
    },
  },
  {
    ID: "painting.bridge.ortucchio",
    Label: "'The Bridge at Ortucchio'",
    Desc: "A shadowy figure waits to accept its toll.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.bridge.ortucchio", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.chiliarch.victory",
    Label: "The Chiliarch's Victory'",
    Desc: "A blurred, menacing depiction of a vast, flabby carcass the colour of dirty sulphur, patched with brighter yellow. Signed 'Brulleau, 1861'.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { edge: 1, "boost.edge": 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.fear", morpheffect: "spawn", level: 1 },
        { id: "painting.chiliarch.victory", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The environment is a chilly desert beneath a low red sun. On closer inspection, the brighter patches seem to be golden blood, seeping from vast wounds.",
    },
  },
  {
    ID: "painting.cockatoo",
    Label: "'Chac'",
    Desc: "Valentine Dewulf's magnificent green cockatoo. The painting is signed by Valentine himself.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { nectar: 2, "boost.nectar": 2, sky: 2, "boost.sky": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.cockatoo", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Valentine, who had an interest in the religions of the new world, named his bird for the Mayan god of rain and thunder.",
    },
  },
  {
    ID: "painting.coupleinthelibrary",
    Label: "'Love in a Quiet Place'",
    Desc: "One of Dr Levinsen's 'prefigures', a close (and impossible) copy of a painting made twenty years later by Kirchner, whose work Levinsen often anticipated in his mirror-dreams.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.coupleinthelibrary", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Levinsen has signed the painting but added 'E.L.K.?'" },
  },
  {
    ID: "painting.donkey",
    Label: "'The Tattered Outlaw'",
    Desc: "Thirza Blake, Seventh Librarian of Hush House, liked painting donkeys. No-one else liked her donkey paintings, but Thirza never much cared what other people liked.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { heart: 1, "boost.heart": 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.donkey", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "For some reason, this donkey has human eyes. There is also a cigarette-holder  - with no cigarette - sticking coyly out of the corner of its mouth.",
    },
  },
  {
    ID: "painting.dontmesswithladyeva",
    Label: "'Eva and Abraham, 1724'",
    Desc: "A magnificent depiction in oils of an elegantly dressed eighteenth century couple. The face of the gentleman, however, was long ago obliterated by a splash of some dark, corrosive substance.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.dontmesswithladyeva", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In her youth, Lady Eva is engaged to be married to an Abraham Wheelock of Monmouthshire, but in 1725 he leaves her at the altar. Furious and humiliated, she returns to Brancrug, and is not seen in London again.\nThree days after her departure, Abraham Wheelock's body is washed up near Gravesend. His face is so badly pecked by birds that he is only identified by his belongings. These include a waxed pouch containing a letter addressed to Wheelock, whose contents seem to show he is a spy in the pay of the Austrians. Subsequent investigations suggest that the letter is a forgery, but the matter remains obscure.",
    },
  },
  {
    ID: "painting.edge",
    Label: "'The First Threshold'",
    Desc: "A horned double axe stands alone in a sandy desert.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { heart: 1, "boost.heart": 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.edge", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.forge",
    Label: "'The First End'",
    Desc: "A single candle burns against darkness; its flame is the crescent moon.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.forge", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.grail",
    Label: "'The First Birth'",
    Desc: "A single ripple disturbs the still surface of a well of blood.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.grail", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.heart",
    Label: "'The Foundlings'",
    Desc: "A pair of human eyes peer from darkness in a tangle of roots.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.heart", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.julian",
    Label: "'Julian Coseley'",
    Desc: "Julian is known to be Winter-long: at a prescribed date, his Hour-patron will ensure him a beautiful ending, but until then, he is even harder than most Long to dispose of finally. That said, he is known to have been defeated by an ascendant Long in the 1920s, and his true current status - a diminished survivor? a determined memory? something else? - is the subject of esoteric debate.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moon: 1, "boost.moon": 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.julian", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Coseley spent time at Hush House in the seventeenth century, but this painting, though undated, is clearly much more recent. It is also signed by Coseley himself. A gift to an imprisoned admirer?",
    },
  },
  {
    ID: "painting.knock",
    Label: "'A Bargain'",
    Desc: "A serpent laps at the blood that drips from a sewn-closed mouth.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.knock", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.lantern",
    Label: "'Glory's Gift'",
    Desc: "A human figure is silhouetted against a blazing sun.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.lantern", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.mansus",
    Label: "'The Mansus'",
    Desc: "There have been many attempts to depict the House of the Sun. This, by the visionary painter known only as the Magyar, is the best known. It's signed and dated - if it's really the original, it must count as one of the great treasures of the House.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: {
      knock: 2,
      "boost.knock": 2,
      lantern: 2,
      "boost.lantern": 2,
      moth: 2,
      "boost.moth": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.mansus", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'Beneath the skin of the world we find the Mansus, also called the World-Spine, also called the House of the Sun. The Mansus is the home of the Hours, on which the world depends, and a sojourning-place for certain departed souls. Above the House is the Glory, the origin of light, to which souls aspire. At the foot of the House, and around its walls - though it has no walls - is the Wood. Beneath the House is Nowhere…'",
    },
  },
  {
    ID: "painting.mihail.altar",
    Label: "Mihail in Glory",
    Desc: "Mihail, Messenger to Darkness, depicted in the fullness of his power.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: {
      "hidden.mihail.altar": 1,
      forge: 2,
      "boost.forge": 2,
      lantern: 2,
      "boost.lantern": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
        { id: "painting.mihail.altar", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'Mihail serves one who will profit by their endeavours.' [You were asked to place this on the Chancel altar behind the church.]",
    },
  },
  {
    ID: "painting.mihail.sarcophagus",
    Label: "Mihail in Chains",
    Desc: "Mihail, Messenger to Darkness, depicted after his defeat.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: {
      "hidden.mihail.sarcophagus": 1,
      lantern: 2,
      "boost.lantern": 2,
      winter: 2,
      "boost.winter": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.regret", morpheffect: "spawn", level: 1 },
        { id: "painting.mihail.sarcophagus", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'Mihail serves one who carries fire in darkness.' [You were asked to place this in the Columbine Sarcophagus beneath the House.]",
    },
  },
  {
    ID: "painting.moon",
    Label: "'The Wheel Still Turns'",
    Desc: "A shining spoked Wheel with a vaguely organic look turns beneath a full moon that holds her finger to her lips.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.moon", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.morgen",
    Label: "'Mlle Matutine'",
    Desc: "An alluring young woman with deep blue eyes hard and dark as sapphires.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.morgen", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Her teeth are very white; it is hard to be sure, but they seem also to be pointed…",
    },
  },
  {
    ID: "painting.moth",
    Label: "'The First Answer'",
    Desc: "A vast moth spirals towards a burning sun, alone in a star-speckled void.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.moth", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.mountainlake",
    Label: "'To Hear Those Voices'",
    Desc: "A Levinsen 'prefigure' - a copy of a painting that would not be committed to canvas by the <i>real</i> artist for twenty years.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moon: 2, "boost.moon": 2, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.mountainlake", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Kirchner, one of Levinsen's favourite pre-subjects. Kirchner and Levinsen fought in the Great War on opposite sides… but there is no reason to believe Kirchner had anything at all to do with Levinsen's death.",
    },
  },
  {
    ID: "painting.munday",
    Label: "'Lord Munday'",
    Desc: "A well-dressed, middle-aged gentleman with receding hair and a clear expression of astonished delight.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.munday", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "A small plaque reads MUNDAY ENDOWMENT - WITH GRATITUDE",
    },
  },
  {
    ID: "painting.nectar",
    Label: "'Gods Return'",
    Desc: "A green shoot splits a rock.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.nectar", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.owl",
    Label: "'The Watcher'",
    Desc: "Another of Valentine's paintings; a barn owl he nursed back to health.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { knock: 2, "boost.knock": 2, lantern: 2, "boost.lantern": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.owl", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Owls, of course, are associated with the Horned-Axe; but only one with one of her blades.",
    },
  },
  {
    ID: "painting.picasso1",
    Label: "'Red, Blue'",
    Desc: "It's a decent copy of a Picasso… painted twenty years before Picasso painted the original. Brian Levinsen, up to his tricks again.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.picasso1", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Levinsen has signed it, but added a question mark after his signature.",
    },
  },
  {
    ID: "painting.picasso2",
    Label: "'To Be Fruitful'",
    Desc: "It's a decent copy of a Picasso… painted twenty years before Picasso painted the original. Brian Levinsen, up to his tricks again.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1, nectar: 2, "boost.nectar": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.picasso2", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Levinsen has signed it, but added a question mark after his signature.",
    },
  },
  {
    ID: "painting.poplars",
    Label: "'Raveline Summer'",
    Desc: "A dry spell in a still place.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { forge: 1, "boost.forge": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.poplars", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is signed 'Brulleau' but dated 1902, long after the Librarian of that name left Hush House… she did come of a family of painters.",
    },
  },
  {
    ID: "painting.rose",
    Label: "Caer Ys",
    Desc: "A spired city is dimly visible through a vast rolling wave.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.rose", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.sacrifice",
    Label: "'A Sacrifice'",
    Desc: "A silent crowd watches a robed priest drown a struggling victim in a bowl of rainbowed oil.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.sacrifice", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'CI'." },
  },
  {
    ID: "painting.scale",
    Label: "'The Hatching'",
    Desc: "Human figures crawl from a clamshell.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.scale", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.serena",
    Label: "'Dr Serena Blackwood'",
    Desc: "No-one is in the picture - only an empty garden.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { forge: 1, "boost.forge": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.serena", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Blackwood abandoned Hush House for another library, the Invisible Serapeum in Alexandria. Is this a joke at her expense?",
    },
  },
  {
    ID: "painting.sky",
    Label: "'Self-Born'",
    Desc: "A furry, cloven-looking foot reaches towards a mirror: its reflection is a bird's claw.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.sky", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "painting.sky.b",
    Label: "'As Above, So Below'",
    Desc: "A framed page of illustrated vellum. Up close, the colours dazzle and puzzle.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.sky.b", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A handwritten slip of paper reads ABBESS MELANCTHE, 1100? Melancthe's work was sometimes reckoned 'too radiant for the eye'…",
    },
  },
  {
    ID: "painting.teeny2",
    Label: "'Crowcross Sands at High Tide'",
    Desc: "A gloomy study of the sea in gloomy weather.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.teeny2", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Barely visible at the painting's edge, there are floating timbers that suggest a wrecked fishing boat…",
    },
  },
  {
    ID: "painting.teeny3",
    Label: "'The Boy Prays'",
    Desc: "There's no sign of a boy in this distorted, menacing image, and no-one seems to be praying.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: {
      grail: 1,
      "boost.grail": 1,
      moon: 1,
      "boost.moon": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.teeny3", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In the darkness gathering at the back, a crowd of eyes might suggest a pack of hounds…",
    },
  },
  {
    ID: "painting.thecalm",
    Label: "'Sedona, Not Yet'",
    Desc: "One of Dr Levinsen's 'prefigures', an impossible copy of a painting that the real artist hadn't yet executed. He's signed it with the Illumination mark, and dated it '1958'.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moth: 2, "boost.moth": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.thecalm", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "At this very moment, perhaps, Max Ernst is dreaming of Arizona. But he hasn't painted this yet.",
    },
  },
  {
    ID: "painting.thekiss",
    Label: "'Again, at Night'",
    Desc: "One of Dr Levinsen's 'prefigures', a close (and impossible) copy of a painting made twenty years later by Kirchner, whose work Levinsen often anticipated in his mirror-dreams.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.thekiss", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Watchful? Hungry? Both?" },
  },
  {
    ID: "painting.tree.teeny",
    Label: "'Leaves in the Wind'",
    Desc: "A soothing but undistinguished work in oils. Someone evidently was good at trees, and wanted you to know it.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.tree.teeny", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In the foreground, an odd curl of shadow might just be a hand reaching from a crevice in a yew-tree trunk.",
    },
  },
  {
    ID: "painting.tryphon",
    Label: "'Lady Tryphon'",
    Desc: "A very old portrait in the Byzantine style.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 2, "boost.grail": 2, moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.tryphon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A handwritten card tucked into the frame reads 'Sequester on sight. - G.C'",
    },
  },
  {
    ID: "painting.winter",
    Label: "'Supplication'",
    Desc: "The Sun-in Rags, but reversed, that is, blood is dripping down into the sun and being absorbed.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "painting.winter", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Signed 'Nina Lagasse'." },
  },
  {
    ID: "shield.drake.red",
    Label: "Red Drake Shield",
    Desc: "Painted leather, riveted to heavy iron.",
    inherits: "_wallart",
    audio: "Metallic",
    aspects: { heart: 1, "boost.heart": 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "shield.drake.red", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is clearly a reproduction or facsimile, perhaps from the mid nineteenth century - but it is heavy and durable. The leather is strongly textured, with small scales arranged in a diamond pattern.",
    },
  },
  {
    ID: "shield.lion.golden",
    Label: "Golden Lion Shield",
    Desc: "Painted leather, riveted to heavy iron.",
    inherits: "_wallart",
    audio: "Metallic",
    aspects: { edge: 1, "boost.edge": 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "shield.lion.golden", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is clearly a reproduction or facsimile, perhaps from the mid nineteenth century - but it is heavy and durable. The leather is stiff and coarse - it might be cowhide, or perhaps even lionhide.",
    },
  },
  {
    ID: "shield.stag.green",
    Label: "Green Stag Shield",
    Desc: "Painted leather, riveted to heavy iron.",
    inherits: "_wallart",
    audio: "Metallic",
    aspects: { heart: 1, "boost.heart": 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "shield.stag.green", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "This is clearly a reproduction or facsimile, perhaps from the mid nineteenth century - but it is heavy and durable. The leather is fine-grained and subtle, and may in fact be deerhide.",
    },
  },
  {
    ID: "stag.finnian",
    Label: "Finnian",
    Desc: "Ambrose Westcott liked to name his hunting trophies after former rivals or adversaries whom (he said) his trophies resembled.",
    inherits: "_wallart",
    audio: "Fabric",
    aspects: { carcass: 1, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "stag.finnian", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Finnian Boole was a tobacconist whose bills Westcott inexplicably refused to pay.",
    },
  },
  {
    ID: "stag.hokobald",
    Label: "Hokobald",
    Desc: "Ambrose Westcott liked to name his hunting trophies after former rivals whom (he said) his trophies resembled.",
    inherits: "_wallart",
    audio: "Fabric",
    aspects: { carcass: 1, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "stag.hokobald", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The set of the mouth of the stag has, perhaps, a surly quality",
    },
  },
  {
    ID: "stag.philemon",
    Label: "Philemon",
    Desc: "Ambrose Westcott liked to name his hunting trophies after former rivals whom (he said) his trophies resembled.",
    inherits: "_wallart",
    audio: "Fabric",
    aspects: { carcass: 1, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "stag.philemon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Philemon was the <i>nom de plume</i> of a poet who satirically christened Westcott 'the Magus of the Silver'd Smoke'. Whatever this meant exactly, it clearly enraged Westcott.",
    },
  },
  {
    ID: "stag.tavish",
    Label: "Tavish",
    Desc: "Ambrose Westcott liked to name his hunting trophies after former rivals whom (he said) his trophies resembled.",
    inherits: "_wallart",
    audio: "Fabric",
    aspects: { carcass: 1, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "stag.tavish", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Tavish is a gamekeeper who once derided Westcott's ability to shoot straight.",
    },
  },
  {
    ID: "symbol.solinvictis",
    Label: "Sol Invictis Symbol",
    Desc: "The eternal symbol of the Unconquered Sun, all the way back to the Shadowless Empire, even through the wild heresies of the Intercalate.",
    inherits: "_wallart",
    audio: "SmallWooden",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "symbol.solinvictis", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Since the Reformation, one quarter is assigned to each of the orthodox Hours - Madrugad, Watchman, Wolf, Meniscate - and the junction at the wheel's heart to the Sun in Rags or Splendour. A less orthodox tradition assigns the rim to the enigmatic St Januarius.",
    },
  },
  {
    ID: "tapestry.thefoundationofthesun",
    Label: "'The Foundation of the Sun'",
    Desc: "'Long ago in this country, one did not build a church without first sacrificing a white bull to the Sun-in-Rags…' Solomon Husher brought this tapestry with him from - well, wherever it was that Solomon came from.",
    inherits: "_wallart",
    audio: "Fabric",
    aspects: { woven: 1, winter: 2, "boost.winter": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "tapestry.thefoundationofthesun", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The tapestry ripples very slowly, even in still air. Candle-flames bend towards it.",
    },
  },
  {
    ID: "trophy.deer.red",
    Label: "Red Deer Antlers",
    Desc: "Not quite hair, not quite teeth, but proof that someone killed something.",
    inherits: "_wallart",
    audio: "Fabric",
    aspects: { carcass: 1, scale: 2, "boost.scale": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "trophy.deer.red", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "BD' is scratched on one antler. Bryan Dewulf was a prolific and successful hunter in his time…",
    },
  },
  {
    ID: "trophy.yeth.hound",
    Label: "Yeth-Hound Horns",
    Desc: "In times past the Yeth pursued the impious and impure across the moors of this country. Hendrik Dewulf never liked them.",
    inherits: "_wallart",
    audio: "Fabric",
    aspects: {
      carcass: 1,
      grail: 1,
      "boost.grail": 1,
      scale: 2,
      "boost.scale": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "trophy.yeth.hound", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Someone has scratched derisively on one horn 'Pray Thou Upon This!'",
    },
  },
  {
    ID: "weapon.bow.hunter",
    Label: "Hunter's Bow",
    Desc: "A very practical weapon.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      wooden: 1,
      sky: 1,
      "boost.sky": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.bow.hunter", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Stout English elm - or stout once. It hasn't been used in years. It'd probably snap in two.",
    },
  },
  {
    ID: "weapon.bow.poacher",
    Label: "Poacher's Bow",
    Desc: "A very practical weapon.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: { wooden: 1, rose: 1, "boost.rose": 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.bow.poacher", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Supple Cornish ash - or supple once. It hasn't been used in years. It'd probably snap in two.",
    },
  },
  {
    ID: "weapon.bow.sentry",
    Label: "Sentry's Bow",
    Desc: "A fearsome weapon.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      wooden: 1,
      lantern: 1,
      "boost.lantern": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.bow.sentry", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Good Welsh yew once… now it's rotting from the inside out.",
    },
  },
  {
    ID: "weapon.crossbow",
    Label: "Crossbow",
    Desc: "An antique crossbow from Hush House's early Baronial period.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: { wooden: 1, forge: 1, "boost.forge": 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.crossbow", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Still in excellent condition. In the unlikely event I ever need to fend off robber knights, I could do worse than this.",
    },
  },
  {
    ID: "weapon.foil.dearday",
    Label: "Dearday's Foil",
    Desc: "A pin-sharp length of flexible steel. The blade is inscribed DEARDAY.",
    inherits: "_wallart",
    audio: "SmallMetallic",
    aspects: { edge: 2, "boost.edge": 2, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.foil.dearday", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Dearday was one-half of the Edge dyad that Natalia Brulleau hoped to lure to Hush House - to learn from them or to imprison them?",
    },
  },
  {
    ID: "weapon.foil.torgue",
    Label: "Torgue's Foil",
    Desc: "A pin-sharp length of flexible steel. The blade is inscribed TORGUE.",
    inherits: "_wallart",
    audio: "SmallMetallic",
    aspects: { edge: 2, "boost.edge": 2, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.foil.torgue", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Torgue was one-half of the Edge dyad that Natalia Brulleau hoped to lure to Hush House - to learn from them or to imprison them?",
    },
  },
  {
    ID: "weapon.leaf.grail",
    Label: "Red Practice Sword",
    Desc: "A leaf-shaped wooden sword of considerable age.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      Wooden: 1,
      edge: 1,
      "boost.edge": 1,
      grail: 1,
      "boost.grail": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "weapon.leaf.grail", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "The wood is birch; the hilt is marked with red ochre. ",
    },
  },
  {
    ID: "weapon.leaf.moth",
    Label: "Dappled Practice Sword",
    Desc: "A leaf-shaped wooden sword of considerable age.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: { wooden: 1, edge: 1, "boost.edge": 1, moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "weapon.leaf.moth", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The wood is poplar; the hilt is marked with blackthorn and holly.",
    },
  },
  {
    ID: "weapon.pistols.flintlock",
    Label: "Matched Flintlock Pistols",
    Desc: "A pair of pistols - the style and maker's mark suggest late seventeenth century.  The initials 'MD' are marked in silver, above the wolf-sejant of the Barons Brancrug.",
    inherits: "_wallart",
    audio: "SmallMetallic",
    aspects: { edge: 1, "boost.edge": 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.pistols.flintlock", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There is a story that Musgrave Dewulf died in a secret duel with a 'Welsh visitor'. There is nothing to suggest that this is true, or that these pistols were ever used in a duel… but the date might match, and one might speculate.",
    },
  },
  {
    ID: "weapon.practice.azita",
    Label: "Azita's Practice Sword",
    Desc: "A varnished length of wood. The name AZITA is inlaid in silver.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      wooden: 1,
      edge: 2,
      "boost.edge": 2,
      heart: 1,
      "boost.heart": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.practice.azita", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The wood is Cornish oak. This is one of the newer items in the practice room - no older than the current century.",
    },
  },
  {
    ID: "weapon.practice.fraser",
    Label: "Fraser's Practice Sword",
    Desc: "A varnished length of wood. The name FRASER has been carved into the flat.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      wooden: 1,
      edge: 1,
      "boost.edge": 1,
      scale: 1,
      "boost.scale": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.practice.fraser", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The wood is dark ash. The practice weapon has seen considerable use, and is notched and battered - it must be more than fifty years old.",
    },
  },
  {
    ID: "weapon.practice.grail",
    Label: "Red Quarterstaff",
    Desc: "A long staff marked with bands of red.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      Wooden: 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.scent", morpheffect: "spawn", level: 1 },
        { id: "weapon.practice.grail", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "The wood is birch; the bands are marked with red ochre. ",
    },
  },
  {
    ID: "weapon.practice.greene",
    Label: "Greene's Practice Sword",
    Desc: "A varnished length of wood.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      wooden: 1,
      edge: 1,
      "boost.edge": 1,
      heart: 1,
      "boost.heart": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.practice.greene", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The hilt is charred, as if Greene had held it over a candle-flame.",
    },
  },
  {
    ID: "weapon.practice.mehrdad",
    Label: "Mehrad's Practice Sword",
    Desc: "A varnished length of wood. The name MEHRAD is inlaid in gold.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      wooden: 1,
      edge: 2,
      "boost.edge": 2,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.practice.mehrdad", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The wood is Cornish oak. This is one of the newer items in the practice room - no older than the current century.",
    },
  },
  {
    ID: "weapon.practice.moth",
    Label: "Dappled Quarterstaff",
    Desc: "A long staff marked with bands of black and white.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      wooden: 1,
      moth: 1,
      "boost.moth": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "weapon.practice.moth", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "The wood is poplar; the bands are blackthorn and holly.",
    },
  },
  {
    ID: "weapon.practice.natalia",
    Label: "Natalia's Practice Sword",
    Desc: "A varnished length of wood. The name NATALIA has been carved into the flat.",
    inherits: "_wallart",
    audio: "Wooden",
    aspects: {
      wooden: 1,
      edge: 1,
      "boost.edge": 1,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.practice.natalia", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The wood is dark ash. The practice weapon has seen considerable use, and is notched and battered - it must be more than fifty years old.",
    },
  },
  {
    ID: "weapon.swords.sebastian",
    Label: "Sebastian's Swords",
    Desc: "Matching eighteenth-century cutlasses. The initials SD are engraved on the blade near the hilt.",
    inherits: "_wallart",
    audio: "Metallic",
    aspects: {
      knife: 1,
      edge: 1,
      "boost.edge": 1,
      moon: 1,
      "boost.moon": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.swords.sebastian", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The hilt is bone; the guard is brass, decorated rather racily with nymphs pursued by satyrs. These were not regulation Royal Navy pattern, and must have been gifts or commissions by Captain Sebastian Dewulf, last of the Dewulf line, who died in action at Quiberon Bay. ",
    },
  },
  {
    ID: "weapons.td.bokken",
    Label: "Bokken: Captain Torgue and Mistress Dearday",
    Desc: "Souvenirs from the East, heavily padded.",
    inherits: "_wallart",
    audio: "SmallMetallic",
    aspects: { edge: 2, "boost.edge": 2, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
        { id: "weapons.td.bokken", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Treasured items left behind by the occupants of the cell during their inglorious career on the high seas. Procured by Governor Collers as a gift for the occupants of the cell, in the hope it would induce better behaviour.",
    },
  },
  {
    ID: "weapons.td.cudgels",
    Label: "Cudgels: Dyddgu and St Twrog",
    Desc: "Very old iron cudgels, recently and heavily padded.",
    inherits: "_wallart",
    audio: "SmallMetallic",
    aspects: {
      edge: 2,
      "boost.edge": 2,
      forge: 2,
      "boost.forge": 2,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
        { id: "weapons.td.cudgels", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Retrieved from Gladwyn Lake and returned to the cell's occupants as a reward for good behaviour.",
    },
  },
  {
    ID: "weapons.td.wasters",
    Label: "Wasters: Darling-Dear and Father Turk",
    Desc: "Wooden swords of recent manufacture, never used.",
    inherits: "_wallart",
    audio: "SmallMetallic",
    aspects: { edge: 2, "boost.edge": 2, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
        { id: "weapons.td.wasters", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Provided to the occupants of the cell, who clearly disdained and never used them.",
    },
  },
  {
    ID: "wings.grail",
    Label: "Lepidoptery Display (Grail-centric)",
    Desc: "A collection of lepidopteran insects with unusual characteristics.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "wings.grail", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "On closer inspection, these are more like bees, but they seem to have adopted the wings and limbs of other insects, rather like hermit crabs. A typed card reads PROPINOMANIDAE.",
    },
  },
  {
    ID: "wings.heart",
    Label: "Lepidoptery Display (Heart-centric)",
    Desc: "A collection of lepidopteran insects with unusual characteristics.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "wings.heart", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The bulbous heads of these insects are alarmingly well-endowed with a great many eyes. A typed card reads TRIGINTIDAE.",
    },
  },
  {
    ID: "wings.moth",
    Label: "Lepidoptery Display (Moth-centric)",
    Desc: "A collection of lepidopteran insects with unusual characteristics.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "wings.moth", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The wings of these insects shimmer darkly as the light shifts. A typed card reads FULGENIDAE.",
    },
  },
  {
    ID: "wings.scale",
    Label: "Lepidoptery Display (Scale-centric)",
    Desc: "A collection of lepidopteran insects with unusual characteristics.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "wings.scale", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The thoraces and abdomens of these insects are crusted alarmingly with complex mouth-parts. A typed card reads FALCIDAE.",
    },
  },
  {
    ID: "wings.winter",
    Label: "Lepidoptery Display (Winter-centric)",
    Desc: "A collection of lepidopteran insects with unusual characteristics.",
    inherits: "_wallart",
    audio: "Painting",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "wings.winter", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "These insects are many-segmented, like centipedes, although their bodies are so tightly coiled this is not initially apparent. The wings look impractical, and indeed their edges bristle with claws. A typed card reads EXCETRIDAE.",
    },
  },
  {
    ID: "axe.aspect.xenodice",
    Label: "Aspect of the Axe: Xenodice Half-Faced",
    Desc: "One of the more enigmatic aspects of the Horned-Axe: Xenodice Half-Faced, who welcomes or slays strangers at the threshold. Xenodice is sister sometimes to owl and cat, sometimes to bull and butterfly, sometimes to dove and serpent. This hybrid nature suggests a link with the prehuman Carapace Cross - but that's not so surprising in a Name of the Axe.",
    inherits: "_wallartfixed",
    audio: "Stone",
    aspects: { fixed: 1, knock: 2, "boost.knock": 2 },
  },
  {
    ID: "dartboard",
    Label: "Dartboard",
    Desc: "The THOCK of the darts punctuated the long evenings and drifted down the corridor to the grilled doors of the cells. (The ex-Tragulari always won, and rather soon, none of the other guards would play with them unless they agreed to a blindfold.)",
    inherits: "_wallartfixed",
    audio: "Wooden",
    aspects: {
      fixed: 1,
      edge: 1,
      "boost.edge": 1,
      moth: 1,
      "boost.moth": 1,
      sky: 1,
      "boost.sky": 1,
    },
  },
  {
    ID: "grail.aspect.lagiah",
    Label: "Aspect of the Grail: Lagiah, the Queen Unsated",
    Desc: "One of the crueller aspects of the Red Grail: Lagiah, the Queen Unsated, devouring mother, sister-lover of Antaios. One tradition has it that Lagiah took animal form so that she could satisfy her craving to devour her own children, and go unpunished - another that the animal form was the punishment for her incest. The Grail has often been tolerant of contradictions. Perhaps her part in the Intercalate really was, after all, a long and subtle move to undermine Eternity. Or perhaps she's just not to be trusted.",
    inherits: "_wallartfixed",
    audio: "Stone",
    aspects: { fixed: 1, grail: 2, "boost.grail": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
        { id: "grail.aspect.lagiah", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Appetite satisfied." },
  },
  {
    ID: "key.hooks",
    Label: "Key Hooks",
    Desc: "All the keys of all the cells still hang here. I can unlock them all at my leisure… but the most significant cells of the Cucurbit were protected by more than locks. (The Least Cells I shouldn't trouble with. The keys to the Most Cells are labelled: ADEPT; LONG; W.I.; and, unhelpfully, ?)",
    inherits: "_wallartfixed",
    audio: "SmallMetallic",
    aspects: { fixed: 1, knock: 1, "boost.knock": 1 },
  },
  {
    ID: "malachite.aspect.mylissa",
    Label: "Aspect of the Malachite: Mylissa, Queen and Palace",
    Desc: "One of the kinder aspects of the Malachite: Mylissa, both Queen and Palace, who feeds all comers, whose body is the house in which her children dwell. Mylissa was not always a Name of the Malachite. She may have been a Name of another Hour - she may even have begun among the Carapace Cross, before she chose Eternity over History.",
    inherits: "_wallartfixed",
    audio: "Stone",
    aspects: { fixed: 1, nectar: 2, "boost.nectar": 2 },
  },
  {
    ID: "ship.model.kerisham",
    Label: "HMS Kerisham",
    Desc: "A fourth-rate ship of the line captained by Sebastian Dewulf in the Battle of Quiberon Bay. Lost with all hands.",
    inherits: "_wallartfixed",
    audio: "Wooden",
    aspects: {
      fixed: 1,
      edge: 1,
      "boost.edge": 1,
      moon: 1,
      "boost.moon": 1,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "ship.model.kerisham", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "--" },
  },
  {
    ID: "window.madrugad",
    Label: "Stained Glass Window: the Madrugad",
    Desc: "THAT WHICH IS NOT NEEDED, THAT SHALL BE QUENCHED",
    inherits: "_wallartfixed",
    audio: "Ceramic",
    aspects: { fixed: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "window.madrugad", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "--" },
  },
  {
    ID: "window.meniscate",
    Label: "Stained Glass Window: the Meniscate",
    Desc: "WHAT IS WITHIN, WITHOUT; WHAT IS WITHOUT, WITHIN",
    inherits: "_wallartfixed",
    audio: "Ceramic",
    aspects: { fixed: 1, moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "window.meniscate", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "--" },
  },
  {
    ID: "window.suninrags",
    Label: "Stained Glass Window: the Sun-in-Rags",
    Desc: "WHEN IT ENDS, IT WILL BE A BEAUTIFUL ENDING",
    inherits: "_wallartfixed",
    audio: "Ceramic",
    aspects: { fixed: 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "window.suninrags", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "--" },
  },
  {
    ID: "window.watchman",
    Label: "Stained Glass Window: the Watchman",
    Desc: "THE WAY IS LIT FOR THE WILLING AND FOR THE UNWILLING",
    inherits: "_wallartfixed",
    audio: "Ceramic",
    aspects: { fixed: 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "window.watchman", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "--" },
  },
  {
    ID: "basket.laundry",
    Label: "Basket of Dirty Laundry",
    Desc: "Once washed, it'll be suitable again.",
    inherits: "_",
    audio: "Fabric",
    aspects: { woven: 1, soiled: 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      cleaning: "basket.linen",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "basket.laundry", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "No Librarian washes their own laundry. Perhaps I can find help in the village.",
    },
  },
  {
    ID: "basket.linen",
    Label: "Basket of Clean Linen",
    Desc: "A night-time luxury.",
    inherits: "_",
    audio: "Fabric",
    aspects: { woven: 1, restorative: 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      fatiguing: "basket.laundry",
      "fatiguing.ingredients": "basket.laundry",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "basket.linen", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "I can use this to ensure a good night's sleep. [If you have no Beverages available to cure Maladies, this will do - though it won't provide any additional Power Aspects.]",
    },
  },
  {
    ID: "basket.towels",
    Label: "Basket of Towels",
    Desc: "A suitable companion for bathing.",
    inherits: "_",
    audio: "Fabric",
    aspects: { woven: 1, heart: 2, "boost.heart": 2 },
    xtriggers: {
      fatiguing: "basket.towels.damp",
      "fatiguing.ingredients": "basket.towels.damp",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "basket.towels", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "If I go swimming, I should take these. They'll be dry the next day.",
    },
  },
  {
    ID: "basket.towels.damp",
    Label: "Basket of Damp Towels",
    Desc: "A bath-time luxury (but soggy from use, now.)",
    inherits: "_",
    audio: "Fabric",
    aspects: { soaked: 1, woven: 1, heart: 2, "boost.heart": 2 },
    icon: "basket.towels",
    xtriggers: {
      dissipating: "basket.towels",
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "basket.towels.damp", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "They'll be dry the next day." },
  },
  {
    ID: "book.press",
    Label: "Book Press",
    Desc: "I am charged with the care of books, but it's important they don't forget who's in charge.",
    inherits: "_",
    audio: "Metallic",
    aspects: { tool: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "book.press", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Formidable in its pressures." },
  },
  {
    ID: "bowls.kitchen",
    Label: "Kitchen Bowls",
    Desc: "CAKE TIME.",
    inherits: "_",
    audio: "Ceramic",
    aspects: {
      tool: 1,
      kitchenware: 1,
      heart: 1,
      "boost.heart": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bowls.kitchen", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "It is not yet time for cake." },
  },
  {
    ID: "burette.cucurbit",
    Label: "Cucurbit Burette",
    Desc: "A vessel with an ambiguous history.",
    inherits: "_",
    audio: "SmallCeramic",
    aspects: { tool: 1, edge: 1, "boost.edge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "burette.cucurbit", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "Something from one of Collers' experiments, no doubt…",
    },
  },
  {
    ID: "bust.abbot.geffrey",
    unique: true,
    Label: "'Abbot Geffrey'",
    Desc: "It was Abbot Geffrey who gave Natan of Regensburg sanctuary here, and decreed the building of the Barber's Tower where Natan and his family could dwell. In fifteenth-century England, only a determined and well-respected abbot could have persuaded the brothers to shelter a Jewish physician.",
    inherits: "_",
    audio: "Wooden",
    aspects: { knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bust.abbot.geffrey", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The bust is carved from hazel wood. The night before Natan's arrival at the Isle, Abbot Geffrey recorded a certain prophetic dream… and there is an old tradition in this country concerning the prophetic virtues of hazel. Perhaps none of these things are related.",
    },
  },
  {
    ID: "bust.abbot.thomas",
    unique: true,
    Label: "'Abbot Thomas'",
    Desc: "Thomas was one of the first abbots here, just before the beginning of the Solar Gothic period. This bust is much more recent - a nineteenth-century bronze. An inscription reads: SPEECH, THE FIRST SWORD.",
    inherits: "_",
    audio: "Metallic",
    aspects: { moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.abbot.thomas", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        " The Abbey chronicles record how Viking mercenaries were quartered at the Abbey. One of their number, Toke, attempted to loot the church, and his eyes are pecked out by 'thorn-beaked crows'. He repented, became a sworn brother of the abbey under the name Thomas, and rose in time to be Abbot. But that was not the end of his story...",
    },
  },
  {
    ID: "bust.abduction.salvation",
    Label: "'Abduction, Salvation'",
    Desc: "Either interpretation is plausible.",
    inherits: "_",
    audio: "Metallic",
    aspects: { grail: 1, "boost.grail": 1, knock: 1, "boost.knock": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bust.abduction.salvation", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The sculpture is signed 'SB'." },
  },
  {
    ID: "bust.abra",
    unique: true,
    Label: "Pale Bust",
    Desc: "A delicate-featured young (?) woman. An inscription reads ABRA SOUTHEY.",
    inherits: "_",
    audio: "Ceramic",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bust.abra", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The bust bears a slight but definite resemblance to the many depictions of the notorious Eva Dewulf. But surely Eva bore only a son, and her grand-daughters died young.",
    },
  },
  {
    ID: "bust.knot.moon",
    Label: "Goddess-who-drinks-light",
    Desc: "'To every shadow her name.'",
    inherits: "_",
    audio: "Ceramic",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bust.knot.moon", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A forgotten Name of the Velvet?" },
  },
  {
    ID: "bust.knot.moth",
    Label: "Goddess-who-changes-skin",
    Desc: "'To every god her skin.'",
    inherits: "_",
    audio: "Ceramic",
    aspects: { moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bust.knot.moth", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A forgotten Name of the Moth?" },
  },
  {
    ID: "bust.knotabbess",
    Label: "'SISTER'",
    Desc: "Priestess? Oracle? Queen? A very old image from the Dawn Period with a simple inscription.",
    inherits: "_",
    audio: "Stone",
    aspects: { grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.knotabbess", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Before the Suppression Bureau, before the Curia of the Isle, before the Dewulfs, before the Church… the Sisters of the Knot were here. Almost a hundred generations have lived and died since this thing was shaped.",
    },
  },
  {
    ID: "bust.medical",
    Label: "Reference Image",
    Desc: "This is no kind of reference for conventional medicine…",
    inherits: "_",
    audio: "Ceramic",
    aspects: { heart: 2, "boost.heart": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "bust.medical", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The junction-points of the soul are clearly marked." },
  },
  {
    ID: "bust.melancthe",
    unique: true,
    Label: "'St Melancthe'",
    Desc: "Visionary, philosopher, alchemist. Most revered, and most heterodox, of the isle's abbesses. An inscription in Latin reads: THE CROSS DIED NOT BUT PASSED WITHIN.",
    inherits: "_",
    audio: "Wooden",
    aspects: { lantern: 2, "boost.lantern": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "bust.melancthe", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "On closer inspection, this is a reliquary bust; which is to say, if I cracked it open, I could retrieve St Melancthe's actual skull. That would be uncouth.",
    },
  },
  {
    ID: "candelabra.meteoric.iron",
    Label: "Meteoric Iron Candelabra",
    Desc: "Rough and dark to the touch.",
    inherits: "_",
    audio: "Metallic",
    aspects: {
      light: 1,
      edge: 1,
      "boost.edge": 1,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "candelabra.meteoric.iron", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Meteoric iron is an unusual choice for a candelabra; but it has certain uses in exorcism…",
    },
  },
  {
    ID: "candle.holderthree",
    Label: "Tall Candelabra",
    Desc: "The wind gusts, the flames flicker.",
    inherits: "_",
    audio: "Metallic",
    aspects: { light: 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "candle.holderthree", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "One, two, three…" },
  },
  {
    ID: "candle.holderthree.persian",
    Label: "Persian Candelabra",
    Desc: "A gift long ago from the Labyrinth of Lions.",
    inherits: "_",
    audio: "Metallic",
    aspects: { light: 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "candle.holderthree.persian", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Long, long ago…" },
  },
  {
    ID: "chess.set",
    Label: "Lacquered Bone Chess Set",
    Desc: "Born of battles?",
    inherits: "_",
    audio: "SmallRattly",
    aspects: { edge: 2, "boost.edge": 2, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "chess.set", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The white queen and black king are both scowling. But the black queen and white king are both grinning delightedly.",
    },
  },
  {
    ID: "clock.forge",
    Label: "Daybreak Clock",
    Desc: "A particularly unrepentant example of the roccoco style of the mid-eighteenth century.",
    inherits: "_",
    audio: "Clock",
    aspects: { forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "clock.forge", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Ambrose Westcott loved this clock. Most of his successors thought it was hideous, so it's been quietly shuffled from room to room where they didn't have to look at it, until it ended up here.",
    },
  },
  {
    ID: "clock.knock",
    Label: "Stepstrike Clock",
    Desc: "Tuned in an unlikely city to ensure its chimes attract the attention of the unseen.",
    inherits: "_",
    audio: "Clock",
    aspects: { knock: 2, "boost.knock": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "clock.knock", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "After dark, it attracts extra echoes." },
  },
  {
    ID: "clock.lantern",
    Label: "Masquewatch Clock",
    Desc: "Reputedly crafted for the Masque of Masques during the Great Writhing.",
    inherits: "_",
    audio: "Clock",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "clock.lantern", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "A handle that looks like a pull-repeat - to strike the hour again - produces only a discouraging rustling sound…",
    },
  },
  {
    ID: "clock.librarian",
    Label: "Librarian's Timepiece",
    Desc: "One of Ambrose Westcott's appalling roccoco enthusiasms. This one, less ugly than some, was suffered to remain by his sentimental successors.",
    inherits: "_",
    audio: "Clock",
    aspects: { lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "clock.librarian", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Inscribed 'ALAS CARBONEK'." },
  },
  {
    ID: "clock.moon",
    Label: "Ninewink Clock",
    Desc: "The most effective and irrefutable alarm clock ever to grace the House.",
    inherits: "_",
    audio: "Clock",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "clock.moon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The alarm can only be switched off with a particular rotation of the key. Lazier Librarians have found it easier just to let the thing run down.",
    },
  },
  {
    ID: "clock.servants",
    Label: "Inscribed Clock",
    Desc: "A gift from Sir David Greene to a favoured retainer.",
    inherits: "_",
    audio: "Clock",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "clock.servants", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "'A.M.F. SORRY ABOUT THE MIRRORS. - D.G.'" },
  },
  {
    ID: "compasses.forge",
    Label: "Compasses",
    Desc: "Invaluable for accurate circles, for accurate navigation, and in a grave emergency, for self-defence.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { tool: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "compasses.forge", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There is no blood on the compass-points. It has not been used for self-defence. Or it has been used for self-defence only by a hygienic owner.",
    },
  },
  {
    ID: "disc.fishes",
    Label: "Twinned-Fish Stone",
    Desc: "This stone disc is lighter than it should be; and the surface is soapy-smooth.",
    inherits: "_",
    audio: "SmallCeramic",
    aspects: { moon: 1, "boost.moon": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "disc.fishes", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "A memorial stone preserved from Ys, the city behind the sea…",
    },
  },
  {
    ID: "face.faceless",
    Label: "Half-Faceless Face",
    Desc: "A mask to fit a face that at the very least began as human.",
    inherits: "_",
    audio: "SmallCeramic",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "face.faceless", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A soft melancholy lingers in its single eye…" },
  },
  {
    ID: "glasses.librarian",
    Label: "Librarian's Glasses",
    Desc: "They're not lenses; just plain glass! But a certain sort of visitor is disappointed by a librarian who doesn't wear glasses.",
    inherits: "_",
    audio: "SmallRattly",
    aspects: { light: 1, glass: 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "glasses.librarian", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Of much more recent manufacture than they might appear. Possibly one of Gervinus van Lauren's little jokes.",
    },
  },
  {
    ID: "globe.lunar",
    Label: "Lunar Globe",
    Desc: "It's the Earth; but silvered like the Moon, unlabelled, and pocked with craters.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { tool: 1, moon: 1, "boost.moon": 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "globe.lunar", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There are no cities and no nations marked, but I find one label - a speck in the Western Ocean marked NOON.",
    },
  },
  {
    ID: "globe.watchman",
    Label: "Watchman's Globe",
    Desc: "The locations of each of the nine Libraries of the Watchman's Tree are clearly marked.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: {
      lantern: 1,
      "boost.lantern": 1,
      rose: 1,
      "boost.rose": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "globe.watchman", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Crossrow and the Haustorium; the Grove of the Green Immortals and the Tomb of Lies; the Yeshiva Tigris and the Monastery of the Fifth Cup; the Invisible Serapeum and the Labyrinth of Lions; and here.",
    },
  },
  {
    ID: "hourglass.scale.g",
    Label: "Serpent-Styled Glass",
    Desc: "Carved snakes writhe up the frame. A prominent inscription reads TO THE LIBRARIAN WILLEM IN EARNEST OF OUR WAGER.",
    inherits: "_",
    audio: "Metallic",
    aspects: { tool: 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "hourglass.scale.g", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The inscription is repeated on the base of the sand-glass, in Sanskrit. And, indeed, the style is Eastern - though, I think, somewhere farther than India.",
    },
  },
  {
    ID: "hourglass.scale.w",
    Label: "Serpent-Styled Glass",
    Desc: "Carved snakes writhe down the frame. A prominent inscription reads TO THE LIBRARIAN GERVINUS IN EARNEST OF OUR WAGER.",
    inherits: "_",
    audio: "Metallic",
    aspects: { tool: 1, scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "hourglass.scale.w", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The inscription is repeated on the base of the sand-glass, in Sanskrit. And, indeed, the style is Eastern - though, I think, somewhere farther than India. ",
    },
  },
  {
    ID: "jar.snootle",
    Label: "Snootle Jar",
    Desc: "Useful for calcination, purification, alteration; invaluable for snootlery.",
    inherits: "_",
    audio: "SmallCeramic",
    aspects: {
      tool: 1,
      lantern: 1,
      "boost.lantern": 1,
      moth: 1,
      "boost.moth": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "jar.snootle", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In these dark days, true snootlery is rarely to be found, but I am now in a position to correct that.",
    },
  },
  {
    ID: "key.hush.house",
    unique: true,
    Label: "Hush House Key",
    Desc: "Heavy enough that it takes both hands to turn. Heavy enough to brain someone, though you'd need both hands for that too.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: {
      key: 1,
      knock: 3,
      "boost.knock": 3,
      winter: 3,
      "boost.winter": 3,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "key.hush.house", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Serena Blackwood herself forged this key. 'I'm tired of losing it,' she said.",
    },
  },
  {
    ID: "knife.thirza",
    Label: "Bronze Knife",
    Desc: "A long knife of age-darkened metal with a teak handle inlaid with bone. It could be a hunting knife, although it's certainly no older than the nineteenth century, and it's not clear why anyone might have chosen to make a hunting knife out of bronze in the nineteenth century.",
    inherits: "_",
    audio: "Metallic",
    aspects: {
      knife: 1,
      tool: 1,
      edge: 1,
      "boost.edge": 1,
      grail: 1,
      "boost.grail": 1,
      nectar: 2,
      "boost.nectar": 2,
      winter: 1,
      "boost.winter": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "knife.thirza", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The tang is engraved with the letters T.B. The bone has absorbed a dark stain that might be old blood. Or it might be old strawberries.",
    },
  },
  {
    ID: "lamp.fringed",
    Label: "Fringed Lamp",
    Desc: "A cosy little night light.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { light: 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "lamp.fringed", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The base is  unexpectedly heavy. Obsidian?" },
  },
  {
    ID: "lamp.hurricane",
    Label: "Hurricane Lamp",
    Desc: "Proof against storm-wind and moth-swoop alike.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: {
      light: 1,
      lantern: 1,
      "boost.lantern": 1,
      sky: 1,
      "boost.sky": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "lamp.hurricane", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Unimpeachably sturdy." },
  },
  {
    ID: "lamp.table.edge",
    Label: "Strategist's Lamp",
    Desc: "Purchased by Governor Collers from a complicated general after the Great War.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { light: 1, edge: 1, "boost.edge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "lamp.table.edge", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "In certain obscure contexts, the Great War is referred to as the 'Second Worm War'. But the Suppression Bureau discourages - suppresses, in fact - use of that term.",
    },
  },
  {
    ID: "lamp.table.grail",
    Label: "Cyprian's Lamp",
    Desc: "A curio brought back from one of Serena Blackwood's trips to Greece.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { light: 1, grail: 1, "boost.grail": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "lamp.table.grail", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny: "On the base is scratched SERENA. FOR THE BAY AT SUNSET. XX",
    },
  },
  {
    ID: "lamp.table.rose",
    Label: "Cartographer's Lamp",
    Desc: "A soft and welcome light.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { light: 1, rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "lamp.table.rose", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Once used to map journeys across secret charts…" },
  },
  {
    ID: "mazarine.fife",
    Label: "Mazarine Fife",
    Desc: "Whittled according to Kitty Mazarine's patient, eccentric instructions.",
    inherits: "_",
    audio: "SmallWooden",
    aspects: { tool: 1, instrument: 1, sky: 3, "boost.sky": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sound", morpheffect: "spawn", level: 1 },
        { id: "mazarine.fife", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "To be used carefully; just in case of storms. [Crafted from wood with certain Scholar-level Sky recipes.]",
    },
  },
  {
    ID: "menorah",
    Label: "Regensburg Menorah",
    Desc: "A relic of the physician Natan of Regensburg.",
    inherits: "_",
    audio: "Metallic",
    aspects: {
      light: 1,
      heart: 1,
      "boost.heart": 1,
      lantern: 2,
      "boost.lantern": 2,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "menorah", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The monks of St Brandan's were recorded to have expressed concerns about Natan's 'many-headed device'.",
    },
  },
  {
    ID: "mirrorscope",
    Label: "Mirrorscope",
    Desc: "Bewildering and occasionally useful.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { tool: 1, lantern: 1, "boost.lantern": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "mirrorscope", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Faint dents on the obverse suggest someone has taken out their impatience on this thing.",
    },
  },
  {
    ID: "mortar.pestle",
    Label: "Mortar & Pestle",
    Desc: "CRUSH.",
    inherits: "_",
    audio: "SmallRattly",
    aspects: {
      tool: 1,
      forge: 1,
      "boost.forge": 1,
      nectar: 1,
      "boost.nectar": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "mortar.pestle", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "CRUSH CRUSH." },
  },
  {
    ID: "newspaper.yellowing",
    Label: "Yellowing Newspaper",
    Desc: "It's dated the year that Hush House was abandoned.",
    inherits: "_",
    audio: "SmallGeneric",
    aspects: { rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        { id: "occult.scrap", morpheffect: "spawn", level: 1 },
        { id: "newspaper.yellowing", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Nothing's history when first it happens…" },
  },
  {
    ID: "pot.twilight",
    unique: true,
    Label: "Twilight Pot",
    Desc: "A stylised bat grimaces gleefully on its surface.",
    inherits: "_",
    audio: "SmallCeramic",
    aspects: { moon: 1, "boost.moon": 1, sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "pot.twilight", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "It might have been intended to be menacing. It is in no way menacing.",
    },
  },
  {
    ID: "saw",
    Label: "Saw",
    Desc: "Eternally useful, though not for most librarians most of the time.",
    inherits: "_",
    audio: "Metallic",
    aspects: { tool: 1, edge: 1, "boost.edge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "saw", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "What's tangled in these teeth?" },
  },
  {
    ID: "scales.spice",
    Label: "Spice Scales",
    Desc: "Redolent of decades of piquant pesage.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: {
      tool: 1,
      kitchenware: 1,
      spicing: 1,
      grail: 1,
      "boost.grail": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "scales.spice", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "An inspirer of sneezes…" },
  },
  {
    ID: "shears.sisterhood",
    Label: "Shears of the Sisterhood",
    Desc: "Black iron shears marked with the Sisterhood's triple knot.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { tool: 1, moth: 1, "boost.moth": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "shears.sisterhood", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Much older than much of the House, but still remarkably sharp.",
    },
  },
  {
    ID: "skull",
    Label: "Cranial Tchotchke",
    Desc: "We all of us come to this condition in the end, but not all of us are fortunate enough to be lovingly buffed and fixed carefully to a stylish wooden stand.",
    inherits: "_",
    audio: "SmallGeneric",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "skull", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There is no sign of any cranial trauma; rule that out as a cause of death.",
    },
  },
  {
    ID: "skull.contained",
    Label: "Contained Skull",
    Desc: "A skull sealed firmly beneath a glass dome, possibly to prevent misbehaviour.",
    inherits: "_",
    audio: "SmallGeneric",
    aspects: { winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "skull.contained", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The skull is not currently misbehaving." },
  },
  {
    ID: "skull.x",
    Label: "Glinting Cranial Tchotchke",
    Desc: "We all of us come to this condition in the end, but not all of us are fortunate enough to be lovingly buffed and fixed carefully to a stylish wooden stand.",
    inherits: "_",
    audio: "SmallGeneric",
    aspects: { rose: 1, "boost.rose": 1 },
    xtriggers: {
      scrutiny: [
        {
          id: "precursor.dearday.lens.fromskull",
          morpheffect: "spawn",
          level: 1,
        },
        { id: "skull", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "There is no sign of any cranial trauma; rule that out as a cause of death.",
    },
  },
  {
    ID: "spanners",
    Label: "Spanners",
    Desc: "When you need 'em, you need 'em.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { tool: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "spanners", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "'Every key has its lock,' Serena Blackwood once said, 'sounds much grander than when we say that every spanner has its nut. But both remain true.'",
    },
  },
  {
    ID: "square.forge",
    Label: "Square",
    Desc: "The mason's pride.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { tool: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "square.forge", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The architect's joy." },
  },
  {
    ID: "statue.matilda.white",
    Label: "White Matilda",
    Desc: "In 1093, twin infant girls were admitted to the care of the sisters here. Both were named Matilda. In 1127, the elder of the two became Abbess.",
    inherits: "_",
    audio: "Stone",
    aspects: { winter: 2, "boost.winter": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "statue.matilda.white", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "According to gossip and circumstantial evidence, the Matildas were illegitimate daughters of Gunnhild, daughter of King Harold, and a brother of the Earl of Cornwall - though which brother is a particularly murky question.",
    },
  },
  {
    ID: "statuette.bobo.nectar",
    Label: "Bobos of Spring",
    Desc: "A votive vessel for harvest offerings.",
    inherits: "_",
    audio: "Ceramic",
    aspects: { nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "statuette.bobo.nectar", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "It might be construed as friendly." },
  },
  {
    ID: "statuette.cat.scale",
    Label: "Cat of Depths",
    Desc: "A votive offering to the Horned-Axe.",
    inherits: "_",
    audio: "Ceramic",
    aspects: { scale: 1, "boost.scale": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "statuette.cat.scale", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The Horned-Axe has been known to appreciate both owls and cats.",
    },
  },
  {
    ID: "statuette.owl.moth",
    Label: "Owl of Spirals",
    Desc: "An ancient bird for an ancient place.",
    inherits: "_",
    audio: "Ceramic",
    aspects: {
      knock: 1,
      "boost.knock": 1,
      moth: 1,
      "boost.moth": 1,
      rose: 1,
      "boost.rose": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "statuette.owl.moth", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "'To every cry its beginning.'" },
  },
  {
    ID: "statuette.pigeon",
    Label: "Pigeon Statuette",
    Desc: "A beautifully enamelled little image. The maker's mark is 'AW'.",
    inherits: "_",
    audio: "SmallWooden",
    aspects: { sky: 1, "boost.sky": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "statuette.pigeon", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Was Ambrose Westcott really asked to provide a 'watcher of the skies?'",
    },
  },
  {
    ID: "statuette.velvet",
    Label: "'The Velvet'",
    Desc: "An Hour of secrecy? Ignorance? Privacy? Shame? The Velvet has never encouraged insight, investigation, or worship. Even an image of her is unusual.",
    inherits: "_",
    audio: "Clock",
    aspects: { moon: 2, "boost.moon": 2 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "statuette.velvet", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "The material is painted iron. The craftsmanship is commendable, but the artist's name has been obliterated by furious scratching and scoring.",
    },
  },
  {
    ID: "stone.indecipherable",
    Label: "Inscribed Stone",
    Desc: "A stone tablet with rows of badly worn scratches that once, probably, were writing.",
    inherits: "_",
    audio: "Stone",
    aspects: { covenant: 1, lantern: 3, "boost.lantern": 3 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "stone.indecipherable", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "Successive Librarians all failed to decipher this tablet. It might as easily be a household inventory or an invocation to a god. Natalia Brulleau established a tradition that it always remain in the Librarian's quarters, to inspire her, and her successors, with humility and to illustrate the limits of knowledge.",
    },
  },
  {
    ID: "typewriter",
    Label: "Typewriter",
    Desc: "Now they call it unromantic. In fifty years it'll be the most romantic thing in the room.",
    inherits: "_",
    audio: "Metallic",
    aspects: { tool: 1, ink: 1, forge: 1, "boost.forge": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "typewriter", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "Monogrammed 'D.G.'" },
  },
  {
    ID: "typewriter.winter",
    Label: "Silent Typewriter",
    Desc: "An unusual custom device.",
    inherits: "_",
    audio: "SmallMetallic",
    aspects: { tool: 1, ink: 1, winter: 1, "boost.winter": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "typewriter.winter", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "The keys are bone, inlaid with ivory." },
  },
  {
    ID: "vase.redlotus",
    Label: "Red Lotus Vase",
    Desc: "A red-glazed chinoiserie vase.",
    inherits: "_",
    audio: "SmallCeramic",
    aspects: { grail: 1, "boost.grail": 1, heart: 1, "boost.heart": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "vase.redlotus", morpheffect: "transform" },
      ],
    },
    xexts: { scrutiny: "A local reproduction; but a good one." },
  },
  {
    ID: "wateringcan",
    Label: "Watering Can",
    Desc: "Good for pottering.",
    inherits: "_",
    audio: "Metallic",
    aspects: { tool: 1, nectar: 1, "boost.nectar": 1 },
    xtriggers: {
      scrutiny: [
        { id: "mem.sight", morpheffect: "spawn", level: 1 },
        { id: "wateringcan", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "An unexpectedly elegant swoop to the handle suggests something more exotic. And it's heavy. An unusual alloy… taenite? Meteoric iron? Why?",
    },
  },
  {
    ID: "weapon.hendrik",
    Label: "Hendrik's Blade",
    Desc: "A long hunting knife, or a short close-quarters sword. A plaque reads 'Hendrik Dewulf, 1525'",
    inherits: "_",
    audio: "Metallic",
    aspects: {
      knife: 1,
      edge: 2,
      "boost.edge": 2,
      lantern: 1,
      "boost.lantern": 1,
    },
    xtriggers: {
      scrutiny: [
        { id: "mem.touch", morpheffect: "spawn", level: 1 },
        { id: "weapon.hendrik", morpheffect: "transform" },
      ],
    },
    xexts: {
      scrutiny:
        "If the blade is real and the date correct, Hendrik must have borne this weapon during his time on the Continent, long before he ever became first Baron Brancrug… perhaps even in the 1527 Sack of Rome, which apparently provoked his spiritual crisis and brought him, eventually, to Brancrug.",
    },
  },
  // WEATHER!
  {
    id: "weather.rain",
    label: "Rain",
    desc: "Soft rain brings life.",
    aspects: { nectar: 2, grail: 2, "boost.nectar": 2, "boost.grail": 2 },
    inherits: "_weather.memory",
  },
  {
    id: "weather.snow",
    label: "Snow",
    desc: "The world is pale today. 'The White is west of the world, and winter does not wait forever', Solomon Husher once said.",
    aspects: { winter: 3, sky: 3, "boost.winter": 3, "boost.sky": 3 },
    inherits: "_weather.memory",
  },
  {
    id: "weather.storm",
    label: "Storm",
    icon: "mem.storm",
    desc: "Thunder-roaring, lightning-lashed skies.",
    aspects: { heart: 4, sky: 4, "boost.heart": 4, "boost.sky": 4 },
    inherits: "_weather.memory",
  },
  {
    id: "weather.fog",
    label: "Fog",
    desc: "Coastal fog - moon-mared, sea-dulling.",
    aspects: { knock: 3, moon: 3, "boost.knock": 3, "boost.moon": 3 },
    inherits: "_weather.memory",
  },
  {
    id: "weather.numa",
    label: "Nume-Brume",
    desc: "Numa's brumous vapours.",
    aspects: {
      knock: 5,
      moon: 5,
      rose: 5,
      winter: 5,
      "boost.knock": 5,
      "boost.moon": 5,
      "boost.rose": 5,
      "boost.winter": 5,
    },
    inherits: "_weather.memory",
  },
  {
    id: "weather.hail",
    label: "Hail",
    desc: "Ice raps on the roofs and tree-tops.",
    aspects: { edge: 3, sky: 3, "boost.edge": 3, "boost.sky": 3 },
    inherits: "_weather.memory",
  },
  {
    id: "weather.gale",
    label: "Gale",
    desc: "Trees bend, walls creak, travellers bend low against the blast.",
    aspects: { heart: 3, sky: 3, "boost.heart": 3, "boost.sky": 3 },
    inherits: "_weather.memory",
  },
  {
    id: "weather.sunny",
    label: "Sunny",
    desc: "The Sun is not what it was, but today he is smiling.",
    aspects: { lantern: 2, sky: 2, "boost.lantern": 2, "boost.sky": 2 },
    inherits: "_weather.memory",
  },
  {
    id: "weather.clouds",
    label: "Clouds",
    desc: "In this country the sky is rarely clear. The Sun goes courteously cloaked.",
    aspects: { moth: 1, moon: 1, "boost.moth": 1, "boost.moon": 1 },
    inherits: "_weather.memory",
  },
  {
    id: "weather.earthquake",
    label: "Earthquake",
    desc: "The gentlest of earth tremors. Just to remind us that the earth is not dead but sleeping.",
    aspects: { scale: 5, edge: 5, "boost.scale": 5, "boost.edge": 5 },
    inherits: "_weather.memory",
  },
];
