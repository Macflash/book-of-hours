export const BookData = [
  {
    ID: "t.thesunsdesign",
    Label: "The Sun's Design",
    Desc: "A scorched slab of black corundum, minutely scratched on every side with intricate ideoglyphs. [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.lantern": 10,
      "period.dawn": 1,
      "w.cracktrack": 1,
      "cost.tally": 8,
      "r.watchmansparadoxes": 1,
      soph: 10,
      tablet: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.cracktrack": 1 },
      },
    ],
    xexts: {
      "reading.lantern.intro":
        "In the city of Emesa, beneath the Church of the Holy Belt, in a sarcophagus of black corundum, Elagabalus lies: accursed of Janus, neither Long nor mortal, neither man nor woman, neither a liar nor a speaker of truth, neither real nor imagined. On his light-suffused skin is made manifest the Sun-in-Splendour's grand design...",
      "reading.lantern":
        " Elagabalus is the source of one-half of this text. The source of the other-half is obscure, but its power is evident. It is impossible to be certain if the Sun really planned for us to enter Eternity. It is impossible to be sure if the Grail, the Vagabond, and the Forge, stole this birthright from us, or saved us from it. But there is a great secret here.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.watchmansparadoxes", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [{ id: "numen.asce", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Ceramic",
    manifestationtype: "Book",
  },
  {
    ID: "t.thesundisfigured",
    Label: "The Sun Disfigured",
    Desc: "A scroll of anthropoderm parchment, written in the golden ink called Uzult. [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.grail": 10,
      "period.dawn": 1,
      "w.cracktrack": 1,
      "cost.tally": 8,
      "r.applebrighteuphonies": 1,
      soph: 10,
      scroll: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.cracktrack": 1 },
      },
    ],
    xexts: {
      "reading.grail.intro":
        "The author of the text calls herself 'the Elagabaline'. Sometimes she seems to be Sunset Celia, the Watchman's Name; sometimes she seems to be Lady Tryphon, the Grail-long. It is unclear whether these are separate entities or the same person - it may be unclear even to the writer.",
      "reading.grail":
        "The flaws in the Sun's Plan are elucidated. The Sun's Plan itself is never entirely clear, but it is a project of some kind to enter, possess, or surrender to the Glory - the pure light above the Mansus. This book suggests ways in which that Plan might fail.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.applebrighteuphonies", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [{ id: "numen.desc", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Scroll",
    manifestationtype: "Book",
  },
  {
    ID: "t.towardsafundamentalaesthetic",
    Label: "Towards a Fundamental Aesthetic",
    Desc: "Or, 'The House of Glass'. Julian Coseley considered this his masterwork. [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.knock": 10,
      "period.curia": 1,
      "w.ericapaean": 1,
      "cost.tally": 8,
      "r.glassblowing.vesselcrafting": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.ericapaean": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "Techniques for perception and analysis which permit invidious and apocalyptic conclusions. Probably the most assiduously suppressed book in history. The entire run was destroyed - even the presses were melted and dispersed - but the manuscript edition has survived.",
      "reading.knock":
        "The perfect hegemony of the Hours is, perhaps, eternal. But Coseley proposes and describes 'Confinement Inescapable', aesthetic and optical techniques which might contain even an Hour, profoundly disrupting the order of the Mansus. He presents this as his own work, but there are hints here and there that he received inspiration or even assistance from the Nowhere-Hour named Snow.",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.glassblowing.vesselcrafting", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [{ id: "numen.conf", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.towardsafundamentalaestheticsecondedition",
    Label: "Towards a Fundamental Aesthetic: Second Edition",
    Desc: "Or, 'The Refinements of Light'. Julian Coseley had never wanted or expected to write a second edition of his masterwork... [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.winter": 10,
      "period.nocturnal": 1,
      "w.ericapaean": 1,
      "cost.tally": 8,
      "r.sights.sensations": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.ericapaean": 1 },
      },
    ],
    xexts: {
      "reading.winter.intro":
        "Julian Coseley long regarded Solomon Husher as a charlatan. But his friend Nina Lagasse painted three paintings before her death in 1895… and these paintings apparently convinced Coseley to change his mind. With considerable irritation, he revised his magnum opus. ",
      "reading.winter":
        "The perfect hegemony of the Hours is, perhaps, eternal. Coseley had always championed History rather than Eternity - the exceptions, limitations, contradictions of freedom. But Husher's and Lagasse's work convinced him to believe in the 'paradox of the eternal ending', a means in which perfection might be reconciled with freedom. He's not happy about it. This is perhaps the angriest book ever written in support of a peaceful philosophy of acceptance. But Coseley was always scrupulous about his conclusions.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.sights.sensations", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [{ id: "numen.unde", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thewritingonthewall",
    Label: "The Writing on the Wall",
    Desc: "The most delicious traditions of the Carapace Cross, as recorded on the walls of the Mansus and transcribed into a book of ninety-nine pages by one known only as 'cc'. Although this book does not exist, it is read to a sleeper under certain very specific circumstances - and certain fragments jotted down on waking. [This 'book' houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.nectar": 10,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 8,
      "r.spices.savours": 1,
      soph: 10,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.nectar.intro":
        "'It was Hunger that made Worms of Dragons - when they consumed the corpses of Hours. Without the savour-secret of the Carapace, their hunger would not have been sufficient…'",
      "reading.nectar":
        "Here is outlined the savour-secret of the Carapace, which harnesses hunger to permit impossible hybridisations. With this secret, even the most potent and fundamental entities have devoured and been devoured. And this, no doubt, is why it's secret.",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.spices.savours", morpheffect: "spawn", level: 2 },
      ],
      "reading.nectar": [{ id: "numen.feas", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.achildstreasuryofgoldenafternoons",
    Label: "A Child's Treasury of Golden Afternoons",
    Desc: "Once upon a time, a very bad man encoded very bad secrets into the charming illustrations of a book of charming stories. Wake the pictures, and you will see. [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.edge": 10,
      "period.baronial": 1,
      "w.hyksos": 1,
      "cost.tally": 8,
      "r.sharps": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.hyksos": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "Lord Jacob Gristwood: surgeon, ethnologist, philanthropist. There is no proof that he ever kept children in hutches beneath his bed. There is no proof he vivisected cats at dinner with his pen-knife. The Suppression Bureau keeps its secrets.",
      "reading.edge":
        "'Here is your paint,' whispered the Wolf to the Pale Girl. 'Here is your knife-for-scraping. And here is your face.'",
    },
    xtriggers: {
      "mastering.edge": [{ id: "x.sharps", morpheffect: "spawn", level: 2 }],
      "reading.edge": [{ id: "numen.alte", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.kopralithomphalos",
    Label: "Kopralith Omphalos",
    Desc: "What is this? A tufted fossil of silken fibre, big as a child. [This object houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.moth": 10,
      "period.dawn": 1,
      "w.killasimi": 1,
      "cost.tally": 8,
      "r.weaving.knotworking": 1,
      soph: 10,
      tablet: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.killasimi": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        " Something consumed, and something was consumed. If we interpret its interweavings, we might understand. ",
      "reading.moth":
        "The meaning of this object isn't something that one reads, but rather something that one follows, until at last one has passed three times around it, and one finds the meaning waiting at one's shoulder.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.weaving.knotworking", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "numen.worl", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "SmallWooden",
    manifestationtype: "Book",
  },
  {
    ID: "t.theturquoisehand",
    Label: "The Turquoise Hand",
    Desc: "A calligraphic manual of Ramsund which employs as exemplar-text Farid ud-Din's 'Conference of the Birds'. [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.rose": 10,
      "period.solar": 1,
      "w.ramsund": 1,
      "cost.tally": 8,
      "r.pentiments.precursors": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.ramsund": 1 },
      },
    ],
    xexts: {
      "reading.rose.intro":
        "'At noon the Sun moves like the beating of a wing. At sunset he sends the herald-child with her candle. At midnight, he sends the wind that extinguishes the candle-flame…'",
      "reading.rose":
        "Commentary, illustrations and interleavings carry revelations never intended in the original: a sense of history, and the senses of Histories.",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.pentiments.precursors", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [{ id: "numen.oldl", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theskyinthescar",
    Label: "The Sky in the Scar",
    Desc: "Gnomic exhortations that might be described as 'emergency procedures' for the return of the travelling kinds of the Carapace Cross. [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.edge": 10,
      "period.dawn": 1,
      "w.sabazine": 1,
      "cost.tally": 8,
      "r.sickle.eclipse": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.sabazine": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "Each page of this book except the last bears a single sign, clear and irrefutable as a gem... ",
      "reading.edge":
        "…the final page is empty. The travelling kinds of the Carapace Cross might never return.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.sickle.eclipse", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [{ id: "numen.bala", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.shuriticbookofsuns",
    Label: "Shuritic Book of Suns",
    Desc: "A radically different text from any of the other versions of the Book of Suns, attributed to Hagar, Queen of Shur, Mother of Wolves. [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.sky": 10,
      "period.dawn": 1,
      "w.mandaic": 1,
      "cost.tally": 8,
      "r.sacrasolisinvicti": 1,
      soph: 10,
      scroll: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.sky.intro":
        "'Set down with reverence before the Intercalate, by one who understood what would come to pass…'",
      "reading.sky":
        "Apocryphal chapters foretell the means by which the Sun-in-Splendour and the Forge might circumvent the impossibility of their joining, through proxies that are in some sense themselves…",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.sacrasolisinvicti", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "numen.secr", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Scroll",
    manifestationtype: "Book",
  },
  {
    ID: "t.amiranisbeteli",
    Label: "Amiranis Beteli",
    Desc: "A fragment of iron-alloy meteorite carefully inscribed and polished. [This object houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.forge": 10,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 8,
      "r.bells.brazieries": 1,
      soph: 10,
      tablet: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.forge.intro":
        "'Who gave us fire? Who gave us steel? What is the sound of dusk? Of what alloy is wind forged?'",
      "reading.forge":
        "Esoteric secrets of metallurgy and resonance are revealed - including directions towards the creation of a terrible Bell. ",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.bells.brazieries", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [{ id: "numen.bell", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Ceramic",
    manifestationtype: "Book",
  },
  {
    ID: "t.serpentroot",
    Label: "Serpent-Root",
    Desc: "A mass of root-stock, shiny with age but still somehow viable. Tiny spidery scratchings, marked with embedded egg-shell shards, encode a cryptic message. [This object houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.nectar": 10,
      "period.dawn": 1,
      "w.cracktrack": 1,
      "cost.tally": 8,
      "r.rites.theroots": 1,
      soph: 10,
      tablet: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.cracktrack": 1 },
      },
    ],
    xexts: {
      "reading.nectar.intro":
        "Sea-born, tide-drawn, Meniscate-sister, Witch-lover. The House of the Moon will always have its messenger, though its messenger is different each time, in eye and flesh and heart…'",
      "reading.nectar":
        "Feits, feats, posterns, loopholes, set down against the advent of Eternity by powers favouring imperfection and impermanence.",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.rites.theroots", morpheffect: "spawn", level: 2 },
      ],
      "reading.nectar": [{ id: "numen.loop", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "SmallWooden",
    manifestationtype: "Book",
  },
  {
    ID: "t.thethreeandthethreestchiavimanuscript",
    Label: "The Three and the Three (St Chiavi Manuscript)",
    Desc: "This book describes the operations of the Chancel and the Calyptra, two triads of Hours with subtle, far-reaching powers and responsibilities. Of all the extant versions, this one has best survived the interventions of the Calyptra. [This book houses a <i>numen</i> - a truth so powerful it can perhaps believe itself.]",
    aspects: {
      "mystery.moon": 18,
      "period.solar": 1,
      "cost.tally": 8,
      "r.edictsinviolable": 1,
      soph: 18,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'Certain knowledge cannot be learnt by any entity below the rank of Know - outside the covenant of the Watchman's Tree. The enforcement of this rule is Calyptra. The three who enforce it are Calyptra also. It is said that Janus elects Calyptra, that the Chancel is the judgement of Janus, that Janus is the wound in the Law...'",
      "reading.moon":
        "'The Watchman's Tree is a compromise. If Calyptra could end it, they would. If the Watchman could end Calyptra, he might. Between their planes conflicting, sparks illuminate the angles of unmade law…'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.edictsinviolable", morpheffect: "spawn", level: 3 },
      ],
      "reading.moon": [{ id: "numen.thre", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thelocksmithsdreamstolenreflections",
    Label: "The Locksmith's Dream: Stolen Reflections",
    Desc: "The fourth volume of Teresa Galmier's expansive work - no longer a discussion of the dreams of artisans, but a valuable survey of other works. The tone is calmer than that of 'Trespasses', but occasionally fearful, even paranoid. This volume was published in 1926 but almost immediately recalled and pulped by the publisher - at the request of the author or possibly the authorities, depending which story you believe. A few copies survive.",
    aspects: {
      "mystery.sky": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.watchmansparadoxes": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "'Janus is the Gatekeeper, the twin-god, the god that wounds, the presager of changes, the sun, the moon. So we identify him with the Watchman, the Twins, with the Mother, with the Forge, with the Meniscate and the Madrugad. He cannot be all these. Can he? The flamines knew the Church, knew the Dry Land, knew Elagabalus. Is he then synthesis? Or is he something else? In Gallaecia they called him Ianus Lamius, but the Obliviates are notorious for their slanders.'",
      "reading.sky":
        "'Janus has, they say, not one face but two. To which I reply: why only one? Why only two? Hersault and Coseley - according to Thomas Love Denman - once agreed that Janus was 'all the gods and none'. But later, Hersault described him as 'all the gods', and Coseley favoured 'none'. Denman was a sinister dilettante, but this rings true of them both.'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.watchmansparadoxes", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.revelation", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thelocksmithsdreamincursus",
    Label: "The Locksmith's Dream: Incursus",
    Desc: "The fifth (and final?) volume of Teresa Galmier's notorious work, which began as an examination of parallels in the mystic dreams of artisans but became an account of her own occult journey. This volume was apparently never published nor, allegedly, even written. Yet here it is.",
    aspects: {
      "mystery.lantern": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.glaziery.lightsmithing": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "'The Law goes back all the way to Stone: the Keys cannot be held or owned. This had, I believe, the unexpected consequence that those outside the law may hold and own them. But even they cannot keep them. And of course a Key is no more physical than a spirit. But a spirit may be housed in a body, and I have touched a Key with my own hands.'",
      "reading.lantern":
        "'So the Ligeians hold the keys. I had thought the Ligeians only - 'only' - old and powerful transgressors of the Crime of the Sky. But I begin to understand that the Crime of the Sky is more even than it seems. And why a Twin, who unites what is not to be divided, might accept a Ligeian as her Name...'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.glaziery.lightsmithing", morpheffect: "spawn", level: 1 },
      ],
      "reading.lantern": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thefallencross",
    Label: "The Fallen Cross",
    Desc: "In which Julian Coseley, magus, immortal, occasional anarchist, argues that through language the Carapace Cross decayed to seed the lives of our ancestors.",
    aspects: {
      "mystery.sky": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.ouranoscopy": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "'Speech is a Wound; Silence is Silver. There is no Silver Door, nor can there be, even in the Moon's House…'",
      "reading.sky":
        "'Without Language there can be no Wordes. Without Wordes there can be no Message. But only in Silence can there be no Error; and Lo, even in that beginning, in that First of Messages, an Error. Thus did we enter the House.'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.ouranoscopy", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.kitlingripeandthemoldywarpsgraveandotherstories",
    Label: "Kitling Ripe and the Moldywarp's Grave (and Other Stories)",
    Desc: "A lusciously illustrated tome of loosely connected children's stories. Few of them are remotely suitable for children.",
    aspects: {
      "mystery.moth": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.resurgences.emergences": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "The protagonist, a speechless cat-thing called Kitling Ripe, performs a series of elaborate rites to rescue members of her extended family, culminating in the resurrection of her 'other grandmother', Moldywarp.",
      "reading.moth":
        "'When the Snake-Witch killed the horse, Kitling snatched one of its eyes. When the Dry-Witch killed the pig, Kitling stole a cup of its blood. Then she took them to the place Moldywarp lay buried, and she shook out her hair, and she began to dance…'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.resurgences.emergences", morpheffect: "spawn", level: 1 },
      ],
      "reading.moth": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.raptintheking",
    Label: "Rapt in the King",
    Desc: "Detailed accounts of secret bacchanals and ecstatic dances observed in necropolises and graveyards in Southern Europe, in Egypt and in Anatolia. The author is a self-confessed ghoul, an eater of buried flesh: he claims to have witnessed the dances while at his feasting.",
    aspects: {
      "mystery.heart": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.drums.dances": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "The dances draw from the traditions of the Mysteries, of the cults of Isis and of Cybele, but include both symbolic and literal flayings, and the human heart is always central in the rites. The author punctuates his accounts with queasily sensuous descriptions of his own interrupted feasts.",
      "reading.heart":
        "'At these greater Feasts a Black Pig is always crowned as King before its Slaying. On this Occasion, its Heart was weighed in the Balance against a Knot of Feathers, and its Skin became a Cape for the Officiant. Its Flesh was left for the Crows, but I must confess my Interest was not in its Carcass but in the Perfumed Flesh of the Milliner laid fresh in the Earth.'",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.drums.dances", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [{ id: "earthsign", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thevienneseconundra",
    Label: "The Viennese Conundra",
    Desc: "Van Driel describes odd events in Vienna - the disappearance of children; epidemics of parasite activity; animal mutilations; nightmares of worms; the activities of a charitable organisation, the New Ligeians, that funds the burial of the poor. She proposes peculiar connections between these activities.",
    aspects: {
      "mystery.moon": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.wolfstories": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'When the individual K. attends the meetings, black dogs are sacrificed and quartered. When the element M. is in attendance, black mares are found with their throats slashed. I propose that these sacrifices are not necessary, but that our Ligeian friends may consider them 'fitting'. Herewith diagrams of the mutilations -'",
      "reading.moon":
        "'Medusa's Riddle, then, I choose to render as 'What is Not Seen?' There is another riddle, one I have heard rendered as 'What may be Lost?' I will delineate some historic attempts to answer it- these are in themselves, in some sense, sacrifices - '",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.wolfstories", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.collectedhushhouselectures",
    Label: "Collected Hush House Lectures",
    Desc: "In the 1800s, Dr Arun Peel was invited to give a series of lectures to the Curia. They combine his pithy view of the Histories with his particular brand of unhelpfully ironical insight.",
    aspects: {
      "mystery.moon": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.sickle.eclipse": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'1776, the Third History: Louis declares the Masque of Masques, and forbids mention of the Great Writhing within the walls of the Palace of Versailles, although by this point the Worms are observed to move openly along the boulevards of Paris, sometimes even in daylight. The Army is redeployed to defend the Court. The Masque lasts one lunar month, and attracts several of the Long abroad in Western Europe at the time - fleeing the Worms, or hoping to take advantage of the desperate Louis, or seeking access to the sealed mirrors of the Palace - or just eager to attend the most inventive and desperate debauch of the century…'",
      "reading.moon":
        "'Many Know espouse Wormish sympathies. Let a hundred Histories flourish! Tear down the tyranny of eternity! To grow Long is, usually, to cast off these sympathies. There would be no immortality without Eternity, and Eternity, we often seem to decide, is only tyranny as long as <i>we</i> are not eternal.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.sickle.eclipse", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thedebateofsevencups",
    Label: "The Debate of Seven Cups",
    Desc: "'Distillations of Spirit' recorded by an alchemist who identifies himself in the foreword as 'But Sir Thomas Browne's Reflexion.'",
    aspects: {
      "mystery.moth": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.solutions.separations": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "'Time is a pure Flame, and we live by an invisible Sun within us.' ",
      "reading.moth":
        "'Darkness and Light divide the Course of Time, and until that Course is Run, Eternity remains History's Bed-Fellow. Sorrow then is Sense's final Solvent, and even a Tear, should it fall enow, might destroy a Stone…'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.solutions.separations", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thetemptationsofarchitecture",
    Label: "The Temptations of Architecture",
    Desc: "The antiquarian and nyctodromist Ambrose Westcott writes of the 'dangers of doors', with particular reference to a house in the bounds named 'Treowen'.",
    aspects: {
      "mystery.forge": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.door.wall": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "No doubt they have come to regret the ambitions of their Winding Stair; even now in Treowen, a silver sea is unwisely visible from a rash window…'",
      "reading.forge":
        "Westcott explains that the Wheelocks, the 'charge-holders of Treowen', have had recourse to dramatic measures to prevent oneiric encroachment, removing the entire top floor of the building. 'Nevertheless,' he writes, 'the business of the Moon-Hall has begun to touch the other business of the house...'",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.door.wall", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "secret.threshold", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thetripledheart",
    Label: "The Tripled Heart",
    Desc: "Sacred poems composed in honour of the Hours venerated by the Sisterhood of the Triple Knot.",
    aspects: {
      "mystery.grail": 4,
      "period.solar": 1,
      "w.henavek": 1,
      "cost.tally": 4,
      "r.tridesmahiera": 1,
      soph: 4,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.henavek": 1 },
      },
    ],
    xexts: {
      "reading.grail.intro":
        "The Grail is celebrated for her colours, the Malachite for her sweetness, the Axe for her constancy…",
      "reading.grail":
        "The Thunderskin, least of the Hours of the Knot when he is even counted among their number at all, is celebrated with an unexpectedly poignant elegy. 'What lives, departs; what is dead, remains.'",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.tridesmahiera", morpheffect: "spawn", level: 1 },
      ],
      "reading.grail": [
        { id: "mem.intuition", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thefivelettersonmemory",
    Label: "The Five Letters On Memory",
    Desc: "Julian Coseley's epistolary treatise on 'matters memorial and mnemonic', addressed to his then-friend Claude Hersault, the mystic and antiquarian.",
    aspects: {
      "mystery.winter": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.rhyme.remembrance": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "The book is partly a practical manual, expounding memory-palace-like techniques, and partly an exploration of 'Memory Rarefied' - modes in which sense or experience persist outside a mortal mind.",
      "reading.winter":
        "This is an early work, and by Coseley's standards it brims with optimism, even enthusiasm. If books, he suggests, are the memory that does not die, then 'perhaps with sufficient Endeavours, Memory's Murderer might be Contain'd'.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.rhyme.remembrance", morpheffect: "spawn", level: 1 },
      ],
      "reading.winter": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thetwelvelettersonconsequence",
    Label: "The Twelve Letters On Consequence",
    Desc: "Julian Coseley's epistolary treatise on 'what may come after', addressed to his once-friend Claude Hersault, the mystic and antiquarian.",
    aspects: {
      "mystery.moon": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.putrefactions.calcinations": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "By the time he wrote these letters, Coseley was identified with the oneiropolitical 'Worms' movement, and Hersault with the 'Birds' - meaning roughly that Hersault held the order of the Hours to be desirable, and Coseley held it to be oppressive.",
      "reading.moon":
        "Many of Coseley's arguments about consequence and finality are couched in erudite and practical alchemical terms. Others appear to be thinly-veiled threats directed at Hersault. Some are both.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.putrefactions.calcinations", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.gospelofnicodemus",
    Label: "Gospel of Nicodemus",
    Desc: "An apocryphal account of the works and experiences of the Shepherd Illuminate by one of his supposed companions.",
    aspects: {
      "mystery.lantern": 6,
      "period.solar": 1,
      "cost.tally": 4,
      "r.sacrasolisinvicti": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "'Inventori Lucis Soli Invicto Nuntio' reads the dedication - loosely translatable as 'I am the herald of the Sun Unconquerable, Light's Contriver'. This is a variation on the more usual 'invicto augusto', the declaration which united the eastern and western traditions of the Church Solar.",
      "reading.lantern":
        "The Shepherd Illuminate, the Virgin-Born, warns of the Sun's Division but promises its ultimate reunification in the Second Dawn 'through the ministry of St Uzult'. <i>Uzult</i> is of course the ink of power used by Librarians of the Tree, but also venerated as a saint in some borderline heterodox solar traditions.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.sacrasolisinvicti", morpheffect: "spawn", level: 1 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.analmanacofentrances",
    Label: "An Almanac of Entrances",
    Desc: "A handbook of sealed and unsealed byways and shortcuts through the Bounds, compiled by Willem Harries in the 1860s - during his term as Librarian of Hush House.",
    aspects: {
      "mystery.knock": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.edictsliminal": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "Harries discusses the role played by the 'Légion du Seuil' and the 'Company of the Wolf-in-Gold' in warding the Bounds against outside influences. He warns that Bounds-travellers may themselves be considered 'outside influences…'",
      "reading.knock":
        "'The Mansus, as Ys, lacks walls; Ys and the Mansus have both their gates, and there may be no gate without a wall. Thus the paradox resolves, as all those who walk in dream will learn. But the Wood has neither gate nor wall, and so it is the Wood whose roots may creep after us into the hours of our waking.'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.edictsliminal", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [
        { id: "secret.threshold", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.justverse",
    Label: "Just Verse",
    Desc: "A rare surviving copy of Christopher Illopoly's notoriously unsuccessful volume of experimental poetry, published in 1912.",
    aspects: {
      "mystery.rose": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.preliminalmeter": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        "Illopoly is clearly more interested in the occult than the aesthetic aspects of the work. By most measures, the rhymes are contrived; the meter inconsistent; the imagery banal. Still, even the worst verses have a compelling quality, and I find myself drumming my fingers on the desk to accompany their rhythms.",
      "reading.rose":
        "In an afterword, Illopoly discusses 'mnemonic holometaboly', by which he seems to mean a sort of crafting process where memories, when fed into a Preliminal Meter technique in the presence of enough Knock or Rose, can 'blossom and fissure' into more potent versions of themselves...",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 1 },
      ],
      "reading.rose": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebookofcinders",
    Label: "The Book of Cinders",
    Desc: "Ostensibly an eighteenth-century fireworks manual, but with some exotic ingredient choices and a substantial section on 'teframancy', divination from ashes.",
    aspects: {
      "mystery.forge": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.pyroglyphics": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "The text takes as its theme the motto of the Society of the Noble Endeavour, ALITUR PROPRIIS IGNIS CINERIBUS - 'a fire by its own ashes is nourished', and uses this as a way into discussions of alchemical techniques…",
      "reading.forge":
        "A surprisingly casual final section mentions that iotic essence, 'the root of the Great and Exultant Ink Orpimental', can be refined with enough Forge from a variety of liquids.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.pyroglyphics", morpheffect: "spawn", level: 1 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.codexacephali",
    Label: "Codex Acephali",
    Desc: "Sometimes called 'The Book of the Clean Skull'. The book contains accounts of enlightenments available through the gradual, surgical removal of the lobes of the brain.",
    aspects: {
      "mystery.moon": 10,
      "period.curia": 1,
      "w.latin": 1,
      "cost.tally": 2,
      "r.snowstories": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "It becomes clear that the processes described are mostly allegorical or metaphorical descriptions of Winter techniques for less revolting occult work. Even the metaphors are pretty horrible, though.",
      "reading.moon":
        "The author explains adaptations of these techniques, with sufficient Winter aspect, to harvest a mysterious substance described as the 'rags of the final bone' from the remains of almost any animal…",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.snowstories", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thehistoryofinks",
    Label: "The History of Inks",
    Desc: "A legendary grimoire of exotic ink-making lore. The cover and some of the pages, unfortunately are stained and crusted with something more like mucus than ink.",
    aspects: {
      "mystery.rose": 14,
      "period.solar": 1,
      "cost.tally": 4,
      "r.inks.power": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        "'The encaustum Marakat is refined from the liquor named <i>leathy</i> in the presence of Nectar aspect. The Priestesses of the Knot have also learnt to brew Marakat in this wise - yet for the nature of their arts, their task may be easier…'",
      "reading.rose":
        "The History concludes with the admission that the encaustum named 'Orpiment Exultant' was once drawn from the veins of Forge-long. Thankfully, it seems, it can also be refined from Iotic Essence using the techniques in this book - or with 'transformations' and 'the jewel-science'.",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.inks.power", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.inthemalleary",
    Label: "In the Malleary",
    Desc: "A lively account of the creation of each jewel at the world's beginning.",
    aspects: {
      "mystery.lantern": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.anbary.lapidary": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "Lively, yes; but also almost entirely nonsense. 'Pearl, the tears of the forgotten moon, caught by the Lionsmith in his net. Ruby, the blood of the first bird, stung by the Lionsmith's hammer.'",
      "reading.lantern":
        "The author is either terribly misinformed of the nature of the Hours, or - one begins to suspect - intentionally throwing up a smoke-screen to confuse seekers of the Invisible Arts. But there are some useful crumbs of fact to be picked out of the daft and gaping cracks. ",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.anbary.lapidary", morpheffect: "spawn", level: 1 },
      ],
      "reading.lantern": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thekerishamportolan",
    Label: "The Kerisham Portolan",
    Desc: "A beautifully illustrated and heavily annotated 'portolan' - a nautical atlas of ports and destinations.",
    aspects: {
      "mystery.moon": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.seastories": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "It quickly becomes clear that many of its destinations no longer exist, or never existed in the traditional sense, but the annotations remain fascinating. The routes to Noon, the Long-sanctuary across the Western Sea, may remain viable…",
      "reading.moon":
        "Two pages have been gummed together. When teased apart they reveal a route to 'Ys Behind the Wave' - marked in red and gold inks with heavily underlined warnings. 'HERE THE FINAL CITY'. 'STRIKE THE HOURS.' 'LEST EARTH AND SKY BREAK OPEN…'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.seastories", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.gossip", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.nixabolix",
    Label: "Nix Abolix",
    Desc: "A grim treatise on 'those feasts that occur, those feasts that are not to be witnessed.'",
    aspects: {
      "mystery.moon": 16,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.wolfstories": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.moon.intro":
        "The alukites, who feasted on their children and became monsters. The dragon-kinds among the Carapace Cross, who feasted on Hour-flesh and became monsters. The khalvites, who drank of Echidna's bounty, and became monsters…",
      "reading.moon":
        "'Marinette, the Ligeian: so young, so hungry. All her children cannot slake her thirst. When Moth rose, another held the Flaying Key, but at the Grail's bidding did Marinette consume that she.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.wolfstories", morpheffect: "spawn", level: 3 },
      ],
      "reading.moon": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.oghkoroghkortissilakoghkor",
    Label: "OGHKOR OGHKOR TISSILAK OGHKOR",
    Desc: "A surprisingly chatty text by an entity that identifies itself as 'the Excellency Gnathobasis'.",
    aspects: {
      "mystery.knock": 12,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.thegreatsignsandthegreatscars": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "The Excellency Gnathobasis explains the 'limbs and extensions' of potent and dangerous 'glyphic achievements'. The sentences are nonsense on first reading, but quickly acquire an insistent meaning on each repetition.",
      "reading.knock":
        "'With adequate Grail,' the Excellency Gnathobasis explains, 'the Pale Mommet wakes to life. With generous Grail, the Flushed Mommet accepts our beneficence. It may be necessary to overcome scruple! The Excellency Gnathobasis will assure you as to how, and to whom, and with which most perfect instrument.'",
    },
    xtriggers: {
      "mastering.knock": [
        {
          id: "x.thegreatsignsandthegreatscars",
          morpheffect: "spawn",
          level: 2,
        },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theradicalmeasure",
    Label: "The Radical Measure",
    Desc: "Manifesto for experimental and dangerous-sounding invocatory poetry, written some time in the nineteenth century by Dr Arun Peel. A notoriously inconsistent and incoherent text, apparently produced in a tearing hurry.",
    aspects: {
      "mystery.rose": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.preliminalmeter": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        "'The Hours have little time for poetry,' Dr Peel avers, 'but they have a tremendous amount of time for poets.'",
      "reading.rose":
        "'As the Rose opens,' Dr Peel explains, 'an Enduring memory opens to the Horizon. This is a way of saying something that cannot otherwise be said, and is best only written with one's eyes firmly closed.'",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theradicalmeasureglossed",
    Label: "The Radical Measure (Glossed)",
    Desc: "The original 'Radical Measures' was a manifesto for experimental poetry with occult properties, written in the nineteenth century by Dr Arun Peel. The original is notoriously incoherent - much later, Christopher Illopoly took on the task of editing and glossing it. He has taken some liberties, but the updated version is generally well regarded.",
    aspects: {
      "mystery.rose": 12,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.preliminalmeter": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        "'The Hours have little time for poetry,' Dr Peel avers, 'but they have a tremendous amount of time for poets.' (Illopoly has added a note suggesting this should in fact be 'the most tremendous time with poets'.)",
      "reading.rose":
        "'As the Rose opens,' Dr Peel explains, 'Enduring Memory opens to the Horizon. This is a way of saying something that cannot otherwise be said, and is best only written with one's eyes firmly closed.' (Illopoly's gloss reads: Horizon-Sight synthesis method. Reverse procedure, with Knock, to elaborate Gervinite in the Chronsichord mode.)",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.bookofmiah",
    Label: "Book of Miah",
    Desc: "An account of the 'five visits of the Desert Wanderer' - probably the Hour called the Vagabond - to the city Miah. She begins as a delighted child - perhaps even a mortal - but things then go badly…",
    aspects: {
      "mystery.rose": 10,
      "period.dawn": 1,
      "w.hyksos": 1,
      "cost.tally": 5,
      "r.sandstories": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.hyksos": 1 },
      },
    ],
    xexts: {
      "reading.rose.intro":
        "'In her second visit, she came as Laughingthrush. Her heart was bright within, her beak was ripe with song, but in the first moment her feathers touched the city stones, the laughter began….'",
      "reading.rose":
        "The Wanderer's penultimate visit is as Centipede, whose 'venom cracks stone'. Miah is abandoned to the desert. But she returns one last time, again as Laughingthrush, with four other Hours who take the shape of birds, 'to celebrate the First Roost above the bones of her hated kin.'",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.sandstories", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theintimationsofskin",
    Label: "The Intimations of Skin",
    Desc: "Fiendishly complex, weirdly distorted illustrations of 'congress and anatomy' by the haunted visionary painter Niels Frederik Malskær.",
    aspects: {
      "mystery.grail": 8,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.desires.dissolutions": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "Malskær illuminates the evolutions of the Names of the Grail with unfortunate clarity. It seems that a Lovely who consumes an Ivory becomes an Ivory. A Lovely who consumes a Thirstly becomes a Thirstly. A Lovely who consumes a Name of another Hour might take its place...",
      "reading.grail":
        "In the penultimate illustration, a Lovely grapples with a fungoid knot that can only be a Name of the Crowned Growth. The Lovely's mouth and other portals gape wide, and the Growth-Name is already partially engulfed - but it seems that Malskær couldn't bring himself to illustrate the result, and the final illustration is only a scrawled, bloated obscurity.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.desires.dissolutions", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "music.beguiling", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theberrybook",
    Label: "The Berrybook",
    Desc: "Thirza Blake, seventh librarian of Hush House, talks about fruit. For no other apparent reason but that it was the kind of thing she did, she talks about fruit in the woven language Killasimi.",
    aspects: {
      "mystery.nectar": 8,
      "period.curia": 1,
      "w.killasimi": 1,
      "cost.tally": 2,
      "r.leaves.thorns": 1,
      soph: 8,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.killasimi": 1 },
      },
    ],
    xexts: {
      "reading.nectar.intro":
        "'Who was it once said, fruit is the womb of a plant? It was me. Take a few moments to think on that enripened wisdom. I shall leave a blank space for your moments, here in this page.'",
      "reading.nectar":
        "'Nectar, children mine - cast my words into a sufficiency of Nectar and watch the pyrus pyrissimus burst from wood. Gather more Nectar! Wring it from the trees and earth! And our pyrissimus gushes forth the Sacrament! You will thank me.'",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.leaves.thorns", morpheffect: "spawn", level: 2 },
      ],
      "reading.nectar": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.sevenshards",
    Label: "Seven Shards",
    Desc: "The Lionsmith, one of the two great Hours of struggle, broke his sword into seven shards. Natalia Brulleau, fifth Librarian of Hush House, describes the nature of each of those shards, allegorically and otherwise.",
    aspects: {
      "mystery.edge": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.disciplines.thehammer": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "'The Third Shard then has been identified with 'the cry of pain'. The Lionsmith is a stoic Hour, but we must assume that in the Sundering Moment even he might have been unable to restrain his distress. Now the sound of tin under pressure we call the 'tin cry' - a reason, perhaps, for the further identification of the Third Shard as the 'Shard Royal'...",
      "reading.edge":
        "'The Seventh Shard we call, informally, the Invincible Audacity, which is struck from the Winning Move as the Winning Move is struck from a memory - with the application of sufficient Edge.'",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thehammer", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [{ id: "mem.hindsight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thecrossingtonoon",
    Label: "The Crossing to Noon",
    Desc: "The mystic Garcia Sauri gives a picaresque account of the adventures of Franklin Bancroft, 'Prince of Wines', and Eva Dewulf, 'the Pale Lady', on their way to the hidden island of Noon.",
    aspects: {
      "mystery.moon": 8,
      "period.curia": 1,
      "w.latin": 1,
      "cost.tally": 2,
      "r.seastories": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'For a long long time the Blackbone pondered her next move, until the Moon dared to peep from behind a cloud, and the Prince completed the composition of his third sestina. But the Lady met the blind gaze of its open pores, waiting for the tide…'",
      "reading.moon":
        "Garcia Sauri acknowledges in an epilogue that it is widely known that Eva in fact tragically drowned herself - and her twin infant grand-daughters - without ever making such a journey. But he adds contemptuously: 'it is also widely known that the City Unbuilt will so remain, that only one History is ever written, and that Janus is a Mansus-prank.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.seastories", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.whatdoesnotbark",
    Label: "What Does Not Bark",
    Desc: "Alexander Probst writes warily of 'Calyptra' - a law, principle or society which prevents the dissemination of dangerous knowledge.",
    aspects: {
      "mystery.moon": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.edictsinviolable": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'Calyptra, like the planet that occludes the star, or the Doylian dog that fails to bark, can be identified only by its absence. Even the name, I think, must be a mask…'",
      "reading.moon":
        "'Calyptra is said to make exceptions specifically for the libraries of the Watchman's Tree. Does it make those exceptions so the Hours can make use of them?'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.edictsinviolable", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.storm", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.stolenhistories",
    Label: "Stolen Histories",
    Desc: "The agitator and pamphleteer Alexander Sparrow inveighs against the 'monstrous Serpents, Thieves of History.'",
    aspects: {
      "mystery.scale": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.coil.chasm": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "Sparrow acknowledges five Histories, insists the Third History may be 'overrun by Coils', warns the Fifth History is already lost.",
      "reading.scale":
        "Sparrow, with his usual paranoia, appears to be conflating the horror of the Worm Wars and the Great Writhing with the activities of the Great Hooded Princes. Still, he draws thought-provoking comparisons between the Princes - normally conceived as exotic Knock-long - and the widely feared Worms.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.coil.chasm", morpheffect: "spawn", level: 1 },
      ],
      "reading.scale": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.blacknephrite",
    Label: "Black Nephrite",
    Desc: "One of Valentine Dewulf's dream-journals, in which he records his visions of 'a place that is no place, beneath the house that is no house.'",
    aspects: {
      "mystery.moon": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.wolfstories": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "The dark, inchoate, feral space described by Valentine seems to be the 'Nowhere' of the Invisible Arts - the infra-oneiric lair of the alien Hours sometimes called gods-from-Nowhere.",
      "reading.moon":
        "Valentine's attitude to the Nowhere-Hours is unexpectedly relaxed. He speaks darkly of their appetites, but he insists they are too alien to penetrate the House of the Sun, let alone the waking world. He even seems to suggest that the Mansus-Hours have exaggerated the threat of the Nowhere-Hours for their own reasons. 'Not all Birds are trustworthy in their Feathers', he warns.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.wolfstories", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theseadoesnotregret",
    Label: "The Sea Does Not Regret",
    Desc: "Ehsan Fekri, one-time Secretary Salvant of the Curia of the Isle - responsible for the Curia's healing efforts - writes of his experiences in Brancrug, and hints at his travels elsewhere.",
    aspects: {
      "mystery.moon": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.pearl.tide": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'The Sea does not regret the tide,' Fekri writes, 'for when the tide has passed, it leaves its traces on the sand; which traces are the Sea's memory.'",
      "reading.moon":
        "Fekri is a keen fisherman, and speaks glowingly of the fish suppers of Brancrug. He also admits that his enthusiasm for 'the bounty of the sea' has altered him - that before he came to Brancrug, he consumed only those things found in the earth. 'I was the greater thereby, but all of us give up what we were, to become what we are.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.pearl.tide", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.twowombsoneheart",
    Label: "Two Wombs, One Heart",
    Desc: "A fanciful account by Thirza Blake of the early life of the Twins - their time as mortals before they became Hours or even Long, in a 'dry kingdom beyond the Western Sea' which Thirza suggests might have been ancient Mexico.",
    aspects: {
      "mystery.heart": 8,
      "period.curia": 1,
      "w.killasimi": 1,
      "cost.tally": 2,
      "r.stitching.binding": 1,
      soph: 8,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.killasimi": 1 },
      },
    ],
    xexts: {
      "reading.heart.intro":
        "'It is widely known that the Sister was rich and the Witch poor. It is widely known that the Witch loved the Sister first. It is not widely known that the Witch was first employed to teach the Sister the arts of embroidery…'",
      "reading.heart":
        "Although Thirza is very probably just making up much of the story, there are long passages expounding notable techniques of weave-work and thread-feit. In particular, when Witch and Sister flee across the Sea to be together, Thirza explains how they fashioned a 'peace-weave' with Heart and these arts, and then, to tame the winds, called on Heart again to swaddle the thunder in the peace-weave.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.stitching.binding", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onehundredandeight",
    Label: "One Hundred And Eight",
    Desc: "Eva Dewulf discurses on the Fifth History, and particularly on those who are said to have 'passed over' from it - the Great Hooded Princes, the Knock-long who ascended under the Mother of Ants but now (so Eva claims) honour the Horned-Axe.",
    aspects: {
      "mystery.scale": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.pentiments.precursors": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "'The Great Hooded Princes call their library the Tomb of Lies, and this has given rise to a foolish tradition that the Princes are habitual liars. Of course, in fact, Truth flourishes when Lies are slain. On the other hand, the Princes do not say 'Knowledge is Power', but rather, 'Power is Knowledge.'",
      "reading.scale":
        "Eva has, to her regret, never visited the Library. She notes that it is said to be 'west of the Lion, and north of Victory' - and suggests that, although the Princes are generally associated with India, their library might be farther East…",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.pentiments.precursors", morpheffect: "spawn", level: 1 },
      ],
      "reading.scale": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theworlddespoild",
    Label: "The World Despoil'd",
    Desc: "Subtitled 'the Flowers in the Waste': an epic poem that presents a medical treatise through allegory. The author is Gideon Dewulf, 5th Baron Brancrug, sometimes unkindly called 'the Cutter'.",
    aspects: {
      "mystery.moon": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.maggephenemysteries": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "The poem is a substantial variation on the Fisher-King tale. A wounded wasteland monarch learns that he and his land can be cured, but that the cure is their own response to ever more savage maladies…",
      "reading.moon":
        "Gideon concludes with a concrete example: that the Mysteries can be used to despoil 'mine own Soaks', but then the Soak can then be refined with sufficient Heart into 'the sanguis saltandis'.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.maggephenemysteries", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.solace", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.animpertinentvitulation",
    Label: "An Impertinent Vitulation",
    Desc: "A book of kitchen-garden techniques and aphrodisiac recipes recorded by Ernestine Peterhans, the 'Iron Seneschale' of Hush House for three generations of Dewulfs.",
    aspects: {
      "mystery.grail": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.leaves.thorns": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "Peterhans asserts casually that the rousing liquor called 'Rubywise Ruin', which Leaves & Thorns techniques can brew from flowers, was a favourite of the notoriously severe Baron Thomas. If true, this would have raised eyebrows had it been known in his lifetime...",
      "reading.grail":
        "Peterhans mentions that one of these Leaves & Thorns techniques, with sufficient Nectar aspect, can supposedly cause 'a marvellous copper fruit' to burst from wood, although she has never managed it herself - but in a 'certain season' the pear-trees in the Practic Garden will deliver something similar.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.leaves.thorns", morpheffect: "spawn", level: 1 },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.cardeasdelights",
    Label: "Cardea's Delights",
    Desc: "The third volume of Abbot Geffrey's hypothetical theological dialogues in the Socratic mode.",
    aspects: {
      "mystery.knock": 8,
      "period.solar": 1,
      "w.latin": 1,
      "cost.tally": 4,
      "r.thegreatsignsandthegreatscars": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "'If Janus were an Hour, Cardea might be counted among his Names, but the world has never turned in such a manner, and so she is not…'",
      "reading.knock":
        "Geffrey discusses the 'living Signs' - signs which change their shape, and whose flexibility is part of what makes it identifiable. He gives as one example 'the Paradox of the Hinge', and draws comparisons with the 'Names' called Twins (who would be considered Hours beyond the Church). He hints at the 'Amethyst Vessel' which can be sanctified by the Great Signs in the presence of Knock...",
    },
    xtriggers: {
      "mastering.knock": [
        {
          id: "x.thegreatsignsandthegreatscars",
          morpheffect: "spawn",
          level: 2,
        },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theelationsoflimentinus",
    Label: "The Elations of Limentinus",
    Desc: "The second volume of Abbot Geffrey's hypothetical theological debates in the Socratic mode.",
    aspects: {
      "mystery.knock": 6,
      "period.solar": 1,
      "w.latin": 1,
      "cost.tally": 4,
      "r.thegreatsignsandthegreatscars": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "'If Janus were an Hour, Limentinus might be counted among his Names, but Janus has never passed that threshold, and so Limentinus is not…'",
      "reading.knock":
        "Geffrey discusses 'the signs upon the Threshold', drawing comparisons between the duties of guest and host, and the status accorded to Hours and other powers who dwell in, are permitted in, or are forbidden access to the House of the Sun. (It was of course Geffrey who later invited censure by giving sanctuary to Natan of Regensburg, in an age when the Jews were by royal order unwelcome anywhere in the kingdom.)",
    },
    xtriggers: {
      "mastering.knock": [
        {
          id: "x.thegreatsignsandthegreatscars",
          morpheffect: "spawn",
          level: 1,
        },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.therapturesofforculus",
    Label: "The Raptures of Forculus",
    Desc: "The first volume of Abbot Geffrey's hypothetical theological debates in the Socratic mode.",
    aspects: {
      "mystery.knock": 4,
      "period.solar": 1,
      "w.latin": 1,
      "cost.tally": 4,
      "r.thegreatsignsandthegreatscars": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "'If Janus were an Hour, Forculus might be counted among his Names, but that door remains closed, and so Forculus is not…'",
      "reading.knock":
        "Geffrey discusses 'the signs that mark Doors', which might permit or forbid access to certain thoughts and dreams, speculating (carefully) on which of the sanctioned Hours might teach or govern each sign.",
    },
    xtriggers: {
      "mastering.knock": [
        {
          id: "x.thegreatsignsandthegreatscars",
          morpheffect: "spawn",
          level: 1,
        },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.snareofthetreecollectedproverbsofauntmopsy",
    Label: "Snare of the Tree: Collected Proverbs of Aunt Mopsy",
    Desc: "'Once in the Wood, we call a visit. Twice in the Wood, we call a journey. Thrice, we call coming home.'",
    aspects: {
      "mystery.grail": 8,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.applebrighteuphonies": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "'Every timber has its knots, the straight and the crooked both. Every weave is more absence than thread. You can't keep Nowhere out any more than you can keep Somewhere in…'",
      "reading.grail":
        "'When the cuckoo learns the nightingale's song, our sleep is sweeter than honey.'",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.applebrighteuphonies", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.deratioquercuum",
    Label: "De Ratio Quercuum",
    Desc: "In English the title translates roughly as 'the Account of the Oaks'; but this is Nathaniel Darcy-Evers' fascinating, if haphazard, survey of the occult properties of every tree he can find, not just oaks.",
    aspects: {
      "mystery.nectar": 8,
      "period.curia": 1,
      "w.latin": 1,
      "cost.tally": 2,
      "r.rites.theroots": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "'In Persia <i>taxus baccata</i>, the yew, is called <i>sorkhdar</i>, which is 'the red tree'. There they had long understood the Grail-Root. In later times, the Great King of Pontus had bee-hives set in the branches of the oldest of the female trees….'",
      "reading.nectar":
        "'The berries of the Pontine Yew open the door to death but the honey of their flowers opens a different door entirely. This was not the Great King's <i>mithridate</i> but one who has suckled at the Great Yew fears poison no longer. Perhaps they should…' Nathaniel is here distracted, however, by the toxic properties of certain inks. He does mention more usefully that the minor Ink of Power, Yewgall, can be brewed through the Rites of the Roots with the assistance of the aspect Nectar.",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.rites.theroots", morpheffect: "spawn", level: 2 },
      ],
      "reading.nectar": [{ id: "earthsign", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.opusmagnuscaeruleus",
    Label: "Opus Magnum Caeruleum",
    Desc: "Ambrose Westcott used to render the title of this venerable and anonymous work mockingly as 'the Big Blue Business'. A kinder translation would be 'the Great Work in Azure'.",
    aspects: {
      "mystery.lantern": 14,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.pyroglyphics": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "The reasons for Westcott's enmity to this work are clear to any pyroglyphicist: it was written at least two centuries before he was born, but anticipates or undermines many of his preferred conclusions.",
      "reading.lantern":
        "The 'Work' in question is the creation of the 'blue gold' allegedly necessary for the terrible Rite which allows a Forge-long to become a Name. The book mentions that Pyroglyphics techniques can be used with Forge to create Iotic Essence as a necessary component; but withholds the final step, insisting that the consequences are too dire, and that any interest should remain only a matter of theory.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.pyroglyphics", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.sunriseawakenings",
    Label: "Sunrise Awakenings",
    Desc: "An uncharacteristically poignant meditation by the Edge-long Twrog of Meirionnydd, who later came to Hush House under a variety of other names, often in search of some sort of fight.",
    aspects: {
      "mystery.lantern": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.auroralcontemplations": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "'If Light were not silent, it would be Music. If Music were visible, it would be Light…'",
      "reading.lantern":
        "Each day's light, Twrog suggests, is faintly touched by the light of every past day; so in the light of every present day, we may begin to understand something of days to come. At least, this appears to be his conclusion, but he stops in mid-sentence, apparently having lost patience with the act of writing, or possibly been ambushed.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.auroralcontemplations", morpheffect: "spawn", level: 1 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.dehorisbook1",
    Label: "De Horis book 1",
    Desc: "An occasionally coherent catalogue of the secret gods, organised by hour. This is a reprint, but in the original Latin.",
    aspects: {
      "mystery.nectar": 4,
      "period.baronial": 1,
      "w.latin": 1,
      "cost.tally": 3,
      "r.rites.theroots": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "This volume deals mostly with the Hours of the Wood: the Moth, the Black-Flax, the Ring-Yew, among others.",
      "reading.nectar":
        "'The Glory is a question, and the Moth always answers 'Yes'.'",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.rites.theroots", morpheffect: "spawn", level: 1 },
      ],
      "reading.nectar": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.dehorisbook2",
    Label: "De Horis book 2",
    Desc: "In Latin. A nineteenth-century reprint (by the indefatigable Nathaniel Darcy-Evers) of a fourteenth-century Latin translation of a fourth-century work.",
    aspects: {
      "mystery.edge": 4,
      "period.baronial": 1,
      "w.latin": 1,
      "cost.tally": 3,
      "r.disciplines.thehammer": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "This volume deals mostly with the Hour called Lionsmith, the Hour called the Tribune of Scars, and with their enmity.",
      "reading.edge":
        "'The Lionsmith makes monsters to defeat the Tribune; but the scars of the Tribune are each a weapon.'",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thehammer", morpheffect: "spawn", level: 1 },
      ],
      "reading.edge": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.dehorisbook3",
    Label: "De Horis book 3",
    Desc: "In Latin. A nineteenth-century reprint (by the indefatigable Nathaniel Darcy-Evers) of a fourteenth-century Latin translation of a fourth-century work.",
    aspects: {
      "mystery.edge": 4,
      "period.baronial": 1,
      "w.latin": 1,
      "cost.tally": 3,
      "r.disciplines.thescar": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "This is usually described as the third volume of 'De Horis', but Darcy-Evers' foreword argues persuasively that it's a substantial reworking by the original author…",
      "reading.edge":
        "The Lionsmith makes monsters, the Colonel has his scars, but the <i>De Horis</i> now insists that neither can truly defeat the other; that they must at some level understand these limits in their strategies; and that their enmity is an 'eternal engine of the world.'",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thescar", morpheffect: "spawn", level: 1 },
      ],
      "reading.edge": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.travellingatnightvol1",
    Label: "Travelling at Night, vol 1",
    Desc: "The annotated dream-journals of Christopher Illopoly, sometimes called 'the only readable occultist': literate, entertaining, bewildering.",
    aspects: {
      "mystery.knock": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.edictsliminal": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "'The Wood lies outside the walls of the Mansus. As any student of the Histories knows, the Mansus has no walls.'",
      "reading.knock":
        "Illopoly describes how he came to make repeated visits to a dream-Wood via what he calls silver dreams. 'Trying to think your way to the Wood,' he explains, 'is like thinking your way to being in love. But I did find a Secret that helped.'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.edictsliminal", morpheffect: "spawn", level: 1 },
      ],
      "reading.knock": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.travellingatnightvol2",
    Label: "Travelling at Night, vol 2",
    Desc: "The annotated dream-journals of Christopher Illopoly, sometimes called 'the only readable occultist': literate, entertaining, bewildering.",
    aspects: {
      "mystery.sky": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.sights.sensations": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "There is an extensive discussion of the comparisons between Illopoly's own dreams and those of the Emperor Elagabalus, who Illopoly regards as a dupe or avatar of the Sun-in-Rags. 'The White is west of the world,' Illopoly remarks, 'and Winter does not wait forever.'",
      "reading.sky":
        "'Elagabalus found his way to the White Door at last, thankfully. Speech can't pass the White Door, and honestly, Elagabalus never had anything very interesting to say. I tried to follow in his footsteps, but I never learnt enough of the White. I suppose I'm thankful for that, too. But here's what I do know...'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.sights.sensations", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.solace", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.travellingatnightvol3",
    Label: "Travelling at Night, vol 3",
    Desc: "The annotated dream-journals of Christopher Illopoly, sometimes called 'the only readable occultist': literate, entertaining, bewildering.",
    aspects: {
      "mystery.knock": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.door.wall": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "Illopoly's disquisitions on fire and the Unburnt God are interrupted by passages of distractingly erotic poetry addressed to 'Baldomera'.",
      "reading.knock":
        "'To reach the Stag Door, I believe that all you really need is to want something enough. But I've never wanted anything that much, except of course Baldomera, and I'm very much afraid that the knot in the story is this: what Baldomera wants is the Stag Door. But here's something I learnt in Persia. Perhaps it'll teach you what *you* want.'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.door.wall", morpheffect: "spawn", level: 1 },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thelocksmithsdreamalightthroughthekeyhole",
    Label: "The Locksmith's Dream: a Light through the Keyhole",
    Desc: "The first volume of Teresa Galmier's examination of parallels in the mystic dreams of artisans.",
    aspects: {
      "mystery.lantern": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.purifications.exaltations": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "The parallels in mystic dreams experienced by carpenters, masons and other artisans, and what they purport to reveal about the architecture of the world. Surprisingly mordant and even funny. No-one has ever explained why Galmier devoted herself to this quixotic exploration of artisan's dreams.",
      "reading.lantern":
        "'Time and again we hear of the Wood, which rises from the world's foundation. All trees reach for light. What does the Wood reach for? Is there a difference between light and Light? I think the key to dreams of the Wood might be one of these - the one that isn't exactly real.'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.purifications.exaltations", morpheffect: "spawn", level: 1 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thelocksmithsdreamportionsandproportions",
    Label: "The Locksmith's Dream: Portions and Proportions",
    Desc: "The second volume of Teresa Galmier's examination of parallels in the mystic dreams of artisans. The frontispiece has been slashed with a razor.",
    aspects: {
      "mystery.sky": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.lockworks.clockworks": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "In this volume, Galmier records fewer dreams, and explicates more of her own elaborate theories. 'We see this again and again: what is below can't escape what is above.'",
      "reading.sky":
        "'The finest artisans all dream of the White Door in the end. I'm no artisan, only a scholar. I think there's a Secret that all these artisans know, but I think that Secret is only half the story.'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.lockworks.clockworks", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thelocksmithsdreamtrespasses",
    Label: "The Locksmith's Dream: Trespasses",
    Desc: "The third volume of Teresa Galmier's examination of parallels in the mystic dreams of artisans.",
    aspects: {
      "mystery.knock": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.edictsliminal": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "In this volume, notoriously, Galmier's prose begins to disintegrate, and it is not clear which dreams are in fact her own.",
      "reading.knock":
        "'The woman in the sand-coloured robe has told me: the stairways of the Mansus go ever up. Death is down. The Mother of Ants guards both directions with each of her heads, and so the passage must always be through a wound. I think the White Door might be a wound. That's one reason the Dead sometimes pass it. I think I have the other half of the Secret now, and I hope my reader can put both halves together.'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.edictsliminal", morpheffect: "spawn", level: 1 },
      ],
      "reading.knock": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thesixlettersonnecessity",
    Label: "The Six Letters on Necessity",
    Desc: "Warnings and confessions about the cost of the secret arts, addressed to a student by the seventeenth-century magus (and reputed immortal) Julian Coseley",
    aspects: {
      "mystery.moth": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.transformations.liberations": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "Coseley's tone is urgent - as if he suspected he might have little time left.",
      "reading.moth":
        "'Even the Sunne can be divided, though it require the Forge of Dayes for its division.'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.transformations.liberations", morpheffect: "spawn", level: 1 },
      ],
      "reading.moth": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thevictoryofcrowns",
    Label: "The Victory of Crowns",
    Desc: "Erratic accounts by 'Arun' of the hunting and consumption of supposed immortals by shadowy assassins. Published in the late nineteenth century.",
    aspects: {
      "mystery.edge": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.sharps": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "The assassins are, according to 'Arun', the agents of a power called the Coronel, a 'soldier of the Secret Masters'. The accounts date back to Roman times.",
      "reading.edge":
        "Arun's scholarship is dubious, but he (she?) writes pithily. Incidents of sudden and violent death are interspersed with aphorisms: 'Hours don't dream. Long try not to.'",
    },
    xtriggers: {
      "mastering.edge": [{ id: "x.sharps", morpheffect: "spawn", level: 1 }],
      "reading.edge": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.anintroductiontohistories",
    Label: "An Introduction to Histories",
    Desc: "The seventeenth-century mystic and antiquarian Claude Hersault describes divergent incidents in five major Histories.",
    aspects: {
      "mystery.winter": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.snowstories": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "The prologue warns at length of the iniquities of one Julian Coseley, a former colleague who Hersault now describes darkly as 'a Worm of Worms'. It seems Coseley advised Hersault early in the writing of the book, but Hersault later became suspicious.",
      "reading.winter":
        "Hersault identifies Blood, Silver, Design and the Worms as the central axes of each of the Histories, and claims that the so-called Second History is the true one. ",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.snowstories", morpheffect: "spawn", level: 1 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onthewhite",
    Label: "On the White",
    Desc: "Solomon Husher writes, perhaps allegorically, of Winter, and its long slow doomed romance with the Sun. The epigraph is 'Sunset at Noon'.",
    aspects: {
      "mystery.winter": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.quenchings.quellings": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "On closer investigation, the work seems to be a theory of aesthetics, or perhaps a set of warnings about the dangers of painting.",
      "reading.winter":
        "Husher writes distractedly about his suspicion of colours and his yearning for death. He hints at a Great Work he has envisaged, or begun, where the 'palest of paintings' will enthral the world. He returns again and again to certain compelling phrases which he claims are the 'secret words of Winter'.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.quenchings.quellings", morpheffect: "spawn", level: 1 },
      ],
      "reading.winter": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thehumoursofagentleman",
    Label: "The Humours of a Gentleman",
    Desc: "Samuel Savage's satirical comedy, on the intrigues of the ailing, but cunning John Sonne, his mistress Maevelin, her lover Leo, and the upstart Corvino.",
    aspects: {
      "mystery.sky": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.skystories": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "By the end of the first act, Maevelin has revealed a secret door in the walls of the House to Leo, and Corvino has taken to consuming Worms.",
      "reading.sky":
        "The play is scabrous and occasionally hilarious. The characters are contrary and capricious. Many of the more resonant lines might well be formulae of power, disguised in plain sight.",
    },
    xtriggers: {
      "mastering.sky": [{ id: "x.skystories", morpheffect: "spawn", level: 1 }],
      "reading.sky": [{ id: "mem.gossip", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thequeensoftherivers",
    Label: "The Queens of the Rivers",
    Desc: "A surreal contemporary play by the enigmatic Monica Medina, in which the Queens of the Rivers are murdered, one by one.",
    aspects: {
      "mystery.scale": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.path.pilgrim": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "The Queen of the Vistula is poisoned. The Queen of the Dnieper chokes on a fish-hook. The Queen of the Tagus is burnt alive...",
      "reading.scale":
        "The culprit, it transpires, is the audience. The surviving Queens are directed to execute whatever audience members do not escape. A surprisingly lucid epilogue suggests that the correspondence of river-names with historical events does provide clues to secret histories behind our own.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.path.pilgrim", morpheffect: "spawn", level: 1 },
      ],
      "reading.scale": [{ id: "mem.gossip", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.apolloandmarsyas",
    Label: "Apollo and Marsyas",
    Desc: "The libretto of a lost opera concerning the contest between Apollo and Marsyas, and its tragic outcome. The librettist is identified only by their initials.",
    aspects: {
      "mystery.heart": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.surgeries.exsanguinations": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "In the original myth, Marsyas lost the musical contest and was flayed by Apollo, who later regretted it. In this version, Marsyas' skin has a further history...",
      "reading.heart":
        "The Skin of Marsyas gives oracles, and is later smuggled to Phrygia, where the priestesses of Cybele use it for a drum. At the climax, the striking of the drum drives would-be violators of the priestess to suicidal madness. The opera ends with a wistful hymn from the youngest priestess on the beauty of mountain pines.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.surgeries.exsanguinations", morpheffect: "spawn", level: 1 },
      ],
      "reading.heart": [{ id: "mem.storm", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theskeletonsongs",
    Label: "The Skeleton Songs",
    Desc: "Poems of greedy delight composed by the possibly pseudonymous Arabella Dusk, the rumoured heiress-turned-madam-turned-poetess.",
    aspects: {
      "mystery.grail": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.resurgences.emergences": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "In Arabella's introduction, she explains that the book was to be illustrated, but that the Suppression Bureau would not permit it. She hints that the illustrations still exist somewhere. The book is dedicated to 'Sir Parsival of the Red Cup'.",
      "reading.grail":
        "The Twenty-Six Delightful Fruits; the Seven Chastisements; the Nine Gardens; the Four Regrets.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.resurgences.emergences", morpheffect: "spawn", level: 1 },
      ],
      "reading.grail": [
        { id: "music.beguiling", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theorchidtransfigurationsafeast",
    Label: "The Orchid Transfigurations: a Feast",
    Desc: "A compilation of quasi-Rosicrucian allegories, supposedly by Robert Fludd. This is in the original Latin.",
    aspects: {
      "mystery.grail": 4,
      "period.baronial": 1,
      "w.latin": 1,
      "cost.tally": 3,
      "r.desires.dissolutions": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "The illustrations are certainly striking. They flush the skin and glow beneath the eyelids after the book is closed.",
      "reading.grail":
        "'We must devour to be devoured. We cannot be undevoured, as we cannot be unborn.'",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.desires.dissolutions", morpheffect: "spawn", level: 1 },
      ],
      "reading.grail": [
        { id: "mem.intuition", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theorchidtransfigurationsnoon",
    Label: "The Orchid Transfigurations: Noon",
    Desc: "The third volume of a compilation of quasi-Rosicrucian allegories, supposedly by Robert Fludd. This is in the original Latin.",
    aspects: {
      "mystery.heart": 4,
      "period.curia": 1,
      "w.latin": 1,
      "cost.tally": 2,
      "r.maggephenemysteries": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "A long dialogue between the Mountain-Mother and the Vigilant Storm describes the ways in which both mountains and storms end, and the protections they use against those ends.",
      "reading.heart":
        "'But we must use the knife,' said the Lion-Throned One, 'the noose, the flame, the Waking Word, against those who have passed the Three-Valved Door. And so none may pass: that is our Law, and the Law of the Sun.'",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.maggephenemysteries", morpheffect: "spawn", level: 1 },
      ],
      "reading.heart": [{ id: "mem.solace", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theorchidtransfigurationsabirth",
    Label: "The Orchid Transfigurations: a Birth",
    Desc: "The second volume of a compilation of quasi-Rosicrucian allegories, supposedly by Robert Fludd. This is in the original Latin.",
    aspects: {
      "mystery.grail": 8,
      "period.baronial": 1,
      "w.latin": 1,
      "cost.tally": 3,
      "r.resurgences.emergences": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "Fludd, or pseudo-Fludd, suggests alignments between the alchemical tradition of rubedo and the older Grail traditions, through the Pine-Knight's quest for the Cinnabar Cup.",
      "reading.grail":
        "Seek the Cup in the birthing-bed,' the Pine-Knight is told. The Midwife at the birthing-bed, to his amazement, is the Mountain-Mother. In a fit of awe, he both gelds and flays himself. The Vigilant Storm bursts joyfully from the remains.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.resurgences.emergences", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.debellismurorum",
    Label: "De Bellis Murorum",
    Desc: "An eighteenth-century epic poem by the pseudonymous 'Solipsistos'.",
    aspects: {
      "mystery.edge": 6,
      "period.curia": 1,
      "w.latin": 1,
      "cost.tally": 2,
      "r.disciplines.thescar": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "The poem elliptically describes a war between beasts, weather phenomena, and arcane concepts. It's quite specific about their tactics.",
      "reading.edge":
        "'The Two-One joined, and the Horned distinguished. Consequently, blood.'",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thescar", morpheffect: "spawn", level: 1 },
      ],
      "reading.edge": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onwhatiscontainedbysilver",
    Label: "On What is Contained By Silver",
    Desc: "A dire bestiary of the horrors to be found in mirrors. This is a recent edition of a third century text by 'Poemander'.",
    aspects: {
      "mystery.sky": 6,
      "period.baronial": 1,
      "w.greek": 1,
      "cost.tally": 3,
      "r.glassblowing.vesselcrafting": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Poemander engages in a considerable and pedantic discussion about the particular mirror-alloys that attract particular danger from particular entities. This is less useful, of course, in an era where most mirrors are silvered glass.",
      "reading.sky":
        "'The virgins/maidens of the mirror favour orchids. The [behindlings?] favour the rhododendron. Cut flowers of either nature should not be placed before polished bronze.'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.glassblowing.vesselcrafting", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.atrueandcompleteaccountingoftheasclepianmysteriesoftherootsofthehouse",
    Label:
      "A True and Complete Accounting of the Asclepian Mysteries of the Roots of the House",
    Desc: "Descriptions of the 'Asclepian Mysteries', reproduced by one 'Rylee Grese' from - supposedly - a much older text. It's unlikely to be genuine, but it makes a reference to 'The House without Walls and its Wood' right there in the prologue.",
    aspects: {
      "mystery.heart": 4,
      "period.curia": 1,
      "w.greek": 1,
      "cost.tally": 2,
      "r.weaving.knotworking": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "This is very obviously not an antique text. At the very least, it has been badly mutilated. But it contains substantial intriguing material: especially, a persuasive comparison of the House without Walls, without doors to the human body, with its many portals.",
      "reading.heart":
        "'The direction of Death is down,' the book explains. 'The Peacock Door has been considered a rent, or an abrasion, but in some respects is more like a mouth - if not a more treasured point of entry.' Discussions of the Doors include a rite which may conjure creatures through those doors, although key incantations are missing.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.weaving.knotworking", morpheffect: "spawn", level: 1 },
      ],
      "reading.heart": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.wainscothistories",
    Label: "Wainscot Histories",
    Desc: "Subtitled 'Stories from Behind the Walls': a miscellany of non-traditional histories, including battles not generally acknowledged and countries which appear on no map, told in a playful, apparently fictional manner.",
    aspects: {
      "mystery.lantern": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.auroralcontemplations": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "Gore does not mention the Mansus directly, but constant coy metaphorical references to 'Ascending the Staircase of Years', to 'the Doors of Sleep', and to 'the Blue Light of Dawn' suggest he had commerce with the unseen world.",
      "reading.lantern":
        "'It was common in that time to speak of the Division of the Sun; by which Contemporaries understood, the irruption of Barbarian Forces, and of their uncouth Gods.'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.auroralcontemplations", morpheffect: "spawn", level: 1 },
      ],
      "reading.lantern": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.chioneatabydos",
    Label: "Chione at Abydos",
    Desc: "A play dealing with the nine-year sojourn of a snow-goddess in the Thracian city of Abydos, by 'Apollo Fireweaver'. In English, published in 1892; purportedly from an older Greek text.",
    aspects: {
      "mystery.winter": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.snowstories": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "The entity called 'Chione' arrives in a blizzard and demands the city gates are barred. As Abydos falls under her spell, the dead return, but do not speak...",
      "reading.winter":
        "For eight years the city is a place of slow death, frosty ecstasy and silent beauty, but in the ninth year a Conspiracy of Shouts is mounted against the quiet that Chione demands. The conspirators open the city gates, and a scarred man comes to drag Chione out by the hair. Summer returns, but the conspirators die of remorse.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.snowstories", morpheffect: "spawn", level: 1 },
      ],
      "reading.winter": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thehightraditionsofthenobleendeavour",
    Label: "The High Traditions of the Noble Endeavour",
    Desc: "A blandly positive work on the Endeavour Club, published by the Endeavour Club. The Club was founded in 1862 but claims to draw from much older traditions.",
    aspects: {
      "mystery.edge": 6,
      "period.baronial": 1,
      "w.latin": 1,
      "cost.tally": 3,
      "r.disciplines.thehammer": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "Club members are assigned names out of noble myth - 'Jaufre', 'Roland', and, unexpectedly, 'Breadbeddel'. They claim to be heirs to the Leashed Flame, which gave the island of Britain such appalling power in some histories.",
      "reading.edge":
        "Their 'Endeavour' itself is a purifying fire which makes its fuel something more than human. This transformation, however, is no longer encouraged by the Club, and perhaps - the work is coy on this - no longer permitted.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thehammer", morpheffect: "spawn", level: 1 },
      ],
      "reading.edge": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theroseofnuriel",
    Label: "The Rose of Nuriel",
    Desc: "A volume of collected teachings of the Sisterhood of the Knot, that arcane-contemplative order that existed in all histories, but in some was very powerful indeed. This was recorded by 'Nuriel', and dedicated to St Tryphon.",
    aspects: {
      "mystery.grail": 10,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.thegreatsignsandthegreatscars": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "St Tryphon, Nuriel explains, performed secret miracles in the name of 'She who Bleeds and Bears'' and 'She who Opens'. Thus St Tryphon opened the way to the House of the Sun; thus St Tryphon underwent the Great Birth, an ascension to immortality.",
      "reading.grail":
        "St Tryphon began his ascension by passing the 'Horned Door'. St Tryphon continued his ascension by learning the 'Invocation Thiatic' - which Nuriel does not here record, on account of its extreme holiness. And, Nuriel explains grimly, to achieve the Seven Marks of the Great Birth, St Tryphon consumed 'those whose soul had left them, and even those in whom the soul remained.'",
    },
    xtriggers: {
      "mastering.grail": [
        {
          id: "x.thegreatsignsandthegreatscars",
          morpheffect: "spawn",
          level: 2,
        },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theroseofhypatia",
    Label: "The Rose of Hypatia",
    Desc: "A volume of collected teachings of the Sisterhood of the Knot, that arcane-contemplative order that existed in all histories, but in some was very powerful indeed. This was recorded by 'Hypatia', and dedicated to St Nympha.",
    aspects: {
      "mystery.moth": 8,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.weaving.knotworking": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "St Nympha is described as 'not born, but cultivated'. The sentience that became the saint, 'Hypatia' indicates, inhabited a sinner's corpse in order to enable that sinner's redemption.",
      "reading.moth":
        "'Not all the Dead enter the Mansus by the Winter Door. Not all the Dead enter the Mansus at all.'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.weaving.knotworking", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.solace", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theroseofwaznei",
    Label: "The Rose of Waznei",
    Desc: "The heretical teachings of a disgraced offshoot of the Sisterhood of the Knot, that arcane-contemplative order that existed in all histories. This was recorded by 'Waznei', and dedicated to St Respicius.",
    aspects: {
      "mystery.lantern": 8,
      "period.baronial": 1,
      "w.greek": 1,
      "cost.tally": 3,
      "r.auroralcontemplations": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "The offshoot favoured by Waznei - 'the True Sisterhood' - followed St Respicius in pursuing ascension in the name of the Door-in-the-Eye, the merciless Hour of light. St Respicius failed, perhaps because the larger Sisterhood tracked him down and ritually strangled him, but Waznei outlines steps for those who hope to succeed.",
      "reading.lantern":
        "'Seek in dreams; seek the Mansus. The Third Mark can be achieved only when one has passed the Stag Door. One must pass the Wood. One must rise to the White Door. The Stag Door awaits the light-bearer, in the sight of Ghirbi.'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.auroralcontemplations", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thetreatiseonunderplaces",
    Label: "The Treatise on Underplaces",
    Desc: "Herein, the seventeenth-century mystic and antiquarian Claude Hersault describes the 'Bounds' or 'Underplaces' on the borders of dream. He warns that they shift over time.",
    aspects: {
      "mystery.knock": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.horns.ivories": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "'The walls of the Mansus,' Hersault begins, 'are the size of starlight.' Many of his directions are equally unhelpful, but common relationships do emerge.",
      "reading.knock":
        "A picaresque account of a journey through nightmare, interspersed with what might be partial rites. 'On the eighteenth Ascent is the bud. On the thirty-sixth Ascent, the blossom.'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.horns.ivories", morpheffect: "spawn", level: 1 },
      ],
      "reading.knock": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thewaroftheroads14511551",
    Label: "The War of the Roads, 1451-1551",
    Desc: "Willis-Ford describes the War of the Roads, an event in a History other than our own, in detail - from its beginnings as a martial-philosophical dispute between the Dawn and Sunset Roads of alchemy, to a war which ravaged half of Europe.",
    aspects: {
      "mystery.edge": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.meniscatereflections": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "'It is not now widely believed that the sons and daughters of the Red Rose were forged into immortals. Understandably: they are, after all, now all long dead. The Forge itself devoured the greatest among them.'",
      "reading.edge":
        "The royalty of England, according to Willis-Ford, became the Sovereigns of the Leashed Flame, destroying or transforming their enemies, conquering Europe, establishing grand cathedrals to St Spark. The alliance with the Forge begins to take its toll. At last, the Bronze King undergoes his 'Great Misfortune' and 'Great Debasement', and is afterwards known as the Copper King. His attempt to cheat the Forge ends badly, the Leashed Flame is released, and the King's heirs are merely mortal sovereigns.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.meniscatereflections", morpheffect: "spawn", level: 1 },
      ],
      "reading.edge": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.sunsetpassages",
    Label: "Sunset Passages",
    Desc: "A miscellany of the funerary prayers, ceremonies and hymns of the Church of the Unconquered Sun, which was ascendant in the Third and Fourth Histories. It schismed during the Intercalate, when the Sun was divided, and has not survived as a significant force.",
    aspects: {
      "mystery.forge": 4,
      "period.dawn": 1,
      "w.latin": 1,
      "cost.tally": 5,
      "r.sacrasolisinvicti": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "The Church revered the Sun-in-Splendour before it was divided - but even while it was still whole, its later selves were recognised as its Names. The Madrugad, of course, presided over death and the passage into the House.",
      "reading.forge":
        "The White Ceremony was spoken to honour the Madrugad, at funerals held in the chilly space before dawn. The text cautions that all blades should remain sheathed while the Ceremony is spoken, 'lest the corpse be not quiet.'",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.sacrasolisinvicti", morpheffect: "spawn", level: 1 },
      ],
      "reading.forge": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thegospelofzacchaeus",
    Label: "The Gospel of Zacchaeus",
    Desc: "An extremely heterodox account of the Nazarene Messiah and his works, describing his ascension to the Mansus through the opening of his body.",
    aspects: {
      "mystery.knock": 8,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.horns.ivories": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "'Seven were the wounds of His body, seven the doors of the House. Seven the lesser aspects of the Hours, and Knock the aspect above all, for the Mother of Ants is the Mother of Salvation.'",
      "reading.knock":
        "The book includes a description of a rite which can be used to raise a corpse to half-life, 'in memory of He who bled for the Wood'; but the marginalia claim that the Mother of Ants no longer permits use of this rite.",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.horns.ivories", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [{ id: "mem.dreamt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onmatthiasandtheamethystimagoloss",
    Label: "On Matthias and the Amethyst Imago: Loss",
    Desc: "An account of an occult romance. A certain Para, son of Aaron, claims to have written this in a single night as part of his initiation into the Damascene branch of the House of Lethe - that order of immortals who rejected their past and future.",
    aspects: {
      "mystery.moth": 6,
      "period.dawn": 1,
      "w.aramaic": 1,
      "cost.tally": 5,
      "r.solutions.separations": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "'The laws of the House forbade Matthias to love. The customs of the Wood forbade the Imago to remain. So he conjured her a final time, when she had uncovered the Shears of Alakapura; and she suffered him to cut the wings from her back, so that she might remain; and he suffered her to cut the parts which hold man's seed, to keep them from the Detestable Act. This was love in all its blood and joy. We have cast out Matthias from the House.'",
      "reading.moth":
        "'In the cradle of the roots, Matthias and the Imago left their names, and though their names were lost, they found their Nameday Riddles. This we recall in Solution and Separation, so that in the presence of the Moth our memories may become our futures. Do this wisely, in memory of the Name and the Long who gave up their past that they might be together forgotten.'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.solutions.separations", morpheffect: "spawn", level: 1 },
      ],
      "reading.moth": [{ id: "mem.dreamt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onmatthiasandtheamethystimagotransformation",
    Label: "On Matthias and the Amethyst Imago: Transformation",
    Desc: "An account of an occult romance. A certain Iyavogos claims to have written this in a single night as part of his initiation into the Aleppine branch of the House of Lethe - that order of immortals who would not pledge themselves to any Hour.",
    aspects: {
      "mystery.forge": 6,
      "period.dawn": 1,
      "w.aramaic": 1,
      "cost.tally": 5,
      "r.spices.savours": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "'We cast Matthias out, and we pronounced a curse upon the Amethyst Imago, but we watched them in dreams. We saw them pledge themselves to the Forge, to change themselves and ascend anew. Into the fire they fly.'",
      "reading.forge":
        "''This is the first of the practices that the Imago and Matthias used, to begin their ascent to power. They have risen beyond our sight, but their flames may yet burn in the Malleary.'",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.spices.savours", morpheffect: "spawn", level: 1 },
      ],
      "reading.forge": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onmatthiasandtheamethystimagopursuit",
    Label: "On Matthias and the Amethyst Imago: Pursuit",
    Desc: "An account of an occult romance. A certain Mek claims to have written this in a single night as part of his initiation into the Theban branch of the House of Lethe - that order of immortals who used the arts of water to conceal themselves.",
    aspects: {
      "mystery.grail": 6,
      "period.dawn": 1,
      "w.aramaic": 1,
      "cost.tally": 5,
      "r.desires.dissolutions": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "'Matthias defied us to hunt the Names of the Moth in the Wood, to populate his pinned collection. The Amethyst Imago had dallied with the Witch-and-Sister, but she'd returned to the Wood to plead the Moth's pardon. The Moth, as a whim or a penance, sent her out to lure the Long to a slough of nightmares.'",
      "reading.grail":
        "'Matthias loved the Imago. (Did he? Can Long love, or has that organ of their soul desiccated beyond repair?) The Imago loved Matthias. (Did she? or did she only enact a whim?) He pursued her through the Wood, but at the last she turned aside from the nightmare-slough, and they lay together where the Bounds grow bright. So they learnt the Grail's pleasures, and this is the lore they won.'",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.desires.dissolutions", morpheffect: "spawn", level: 1 },
      ],
      "reading.grail": [{ id: "mem.gossip", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.bancroftdiaries",
    Label: "Bancroft Diaries",
    Desc: "Lord Franklin Bancroft was initiated into the arts of the Flowermaker by the 'rose-witch' Fionna Ayrshire. He rose to become a Society provider of occult services and secret pleasures, before his abrupt disappearance in 1790.",
    aspects: {
      "mystery.lantern": 4,
      "period.curia": 1,
      "w.latin": 1,
      "cost.tally": 2,
      "r.pyroglyphics": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "Bancroft seems to have been a talented adept, but devoted his energies to frustratingly whimsical projects: arranging 'grape-fetching races' between Mansus-spirits, teaching Percussigants to juggle, and conjuring storms of imaginary blossoms for the rose-witch Ayrshire, who resolutely refused ever to couple with him. Bancroft spends twenty pages bemoaning this last.",
      "reading.lantern":
        "The Mantra here recorded is a high and exacting magic which can be used to pledge one's spirit to the Watchman, beginning an ascent to the House. Bancroft boasts of his ability to recite it when in his cups. He also had it set to music for a performance with fireworks at Vauxhall Gardens.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.pyroglyphics", morpheffect: "spawn", level: 1 },
      ],
      "reading.lantern": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thoseindignitiesperpetratedbythedeceitfulfraternityofobliviates",
    Label:
      "Those Indignities Perpetrated By the Deceitful Fraternity of Obliviates",
    Desc: "It's not clear whether 'C.R.O.D', who is identified only by his initials, was in fact an initiate of the Obliviate order of immortal adepts. He wrote in the sixteenth century, after the order - if he is to be believed - had passed the height of its power.",
    aspects: {
      "mystery.winter": 6,
      "period.baronial": 1,
      "w.latin": 1,
      "cost.tally": 3,
      "r.raggedcrossroads": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "'FIFTY-EIGHT. That they did claim inheritance of the traditions of the House of Lethe, but that they have DISREGARDED both its most sacred and its most beautiful ceremonies where they are not found CONVENIENT. FIFTY-NINE...'",
      "reading.winter":
        "'SEVENTY-ONE. The Glassfinger Toxin is no mere assassin's convenience for the Obliv-IDIOTS to confine to the disposal of their enemies. It has higher uses! Certainly it is a great matter of Winter, but I have already outlined the technique by which it may be fitted for its ultimate destiny...'",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.raggedcrossroads", morpheffect: "spawn", level: 1 },
      ],
      "reading.winter": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thedevouredtantra",
    Label: "The Devoured Tantra",
    Desc: "The diplomat-priest Stanislav John Schaller transcribed this from the library of a Red Long, but his manuscript remains in a private collection in Kerisham.",
    aspects: {
      "mystery.grail": 6,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.applebrighteuphonies": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "The Devoured Tantra warns of the uses and dangers of appetite, but devotes an entire passage to the 'star-limbed hunger-bringers', who it describes with obvious affection.",
      "reading.grail":
        "'A million blazing fires in the belly engulf what has been swallowed by the multiform mouths.'",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.applebrighteuphonies", morpheffect: "spawn", level: 1 },
      ],
      "reading.grail": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theceaselesstantra",
    Label: "The Ceaseless Tantra",
    Desc: "The avant-garde choreographer Nicholas Keirle supposedly incorporated this Tantra into his menacing ballets.",
    aspects: {
      "mystery.heart": 6,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.weaving.knotworking": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "The Ceaseless Tantra is devoted mostly to warnings about the lively creatures called Percussigants, but concludes with a chant which can be used to summon them. It observes that Percussigants can be taught any dance, but they prefer only one.",
      "reading.heart": "'That which does not cease, is not ceased.'",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.weaving.knotworking", morpheffect: "spawn", level: 1 },
      ],
      "reading.heart": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theknownunknowntantra",
    Label: "The Known-Unknown Tantra",
    Desc: "Carlos Garcia Sauri, the ecstatic mystic of the Pyrenees, was known to recite this in three languages, though he had never visited the Subcontinent.",
    aspects: {
      "mystery.lantern": 6,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.watchmansparadoxes": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "The Known-Unknown Tantra describes a journey to the White Door of the Mansus, beyond which speech ceases. It describes a mantra which can be used, at the right place and time, to achieve that door.",
      "reading.lantern":
        "'The light of a lantern can only ever reveal the space between the forest shadows.'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.watchmansparadoxes", morpheffect: "spawn", level: 1 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theencirclingtantra",
    Label: "The Encircling Tantra",
    Desc: "The explorer and entrepreneur T. Everett Duplantis once attempted to plunder the temple where this text was held. His fate is recorded in an appendix.",
    aspects: {
      "mystery.scale": 6,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.horns.ivories": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "The Encircling Tantra speaks of the Serpent Gate, that hungry portal sometimes known as the Spider's Door, which is sacred to the Mother of Ants, through which the Great Hooded Princes pass. ",
      "reading.scale":
        "The tantra includes an invocation but cautions, helpfully, that the invocation is of insufficient power to reach the Serpent Gate from the Hunter's Gate. 'A road which has no destination is itself a destination,' it adds helpfully.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.horns.ivories", morpheffect: "spawn", level: 1 },
      ],
      "reading.scale": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theshavenlocktantra",
    Label: "The Shaven Lock Tantra",
    Desc: "Also known as 'The One Who Has Shaven His Hair'. This, the story goes, is the lore that even the shapechanging Vanaras rejected.",
    aspects: {
      "mystery.moth": 6,
      "period.dawn": 1,
      "w.sanskrit": 1,
      "cost.tally": 5,
      "r.rites.theroots": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "The Tantra speaks glowingly of those who are prepared to abandon their old self to seek a new and higher self. It warns that once the change has truly begun - 'past the Third Mark' - a return to the old self is dangerous and painful.",
      "reading.moth":
        "'Whisper your secrets into the earth, burn them in fire, scatter them in the sea. Still they will cling to your hair,' the Tantra cautions. It provides an occult riddle that it claims is sometimes the answer to the Riddle of the Hunter's Gate.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.rites.theroots", morpheffect: "spawn", level: 1 },
      ],
      "reading.moth": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thetantraofworms",
    Label: "The Tantra of Worms",
    Desc: "The entomologist Juliana Zawistowski eventually came to insist that this text was written by insects inhabiting a human skin. She never presented evidence for her claim. There are diagrams. The diagrams are not good to look upon.",
    aspects: {
      "mystery.scale": 8,
      "period.nocturnal": 1,
      "w.sanskrit": 1,
      "cost.tally": 1,
      "r.coil.chasm": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "The Tantra explains various less than practical countermeasures against the Worms, the 'Serpents Which Are Not Serpents'. Moth and Winter are closest to them, and so understand their weaknesses, but both have their own perils. The Lionsmith crushes them, but that's not recommended for mortals.",
      "reading.scale":
        "'The Worms have always been eager to inhabit us. Here are the practices which make us inhospitable to them.' There are diagrams. The diagrams are not good to look upon, and none of the practices they show would allow the subject to survive.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.coil.chasm", morpheffect: "spawn", level: 2 },
      ],
      "reading.scale": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebookofthecentipede",
    Label: "The Book of the Centipede",
    Desc: "In the mid 1860s one 'Madam Yi' presented an entertainment based, she claimed, on this book.",
    aspects: {
      "mystery.rose": 6,
      "period.curia": 1,
      "w.greek": 1,
      "cost.tally": 2,
      "r.sandstories": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        "'The Centipede always found her way into the dark places. When she was punished for it, she reacted badly, in the Mansus as in Miah.'",
      "reading.rose":
        "'The River runs through the sands out of myth and into legend. The Painted River runs the other way. One is barred to the Centipede now, but she finds ways back in, sometimes.'",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.sandstories", morpheffect: "spawn", level: 1 },
      ],
      "reading.rose": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theaccountofkanishkatthespidersdoor",
    Label: "The Account of Kanishk at the Spider's Door",
    Desc: "Lok Kahuli, Kanishk's victim and lover, wrote this account, perhaps posthumously.",
    aspects: {
      "mystery.moon": 6,
      "period.dawn": 1,
      "w.aramaic": 1,
      "cost.tally": 5,
      "r.sharps": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "Kanishk sought to become a Name. In pursuit of that end, he made Lok Kahuli the vessel of his appetites, promising Lok that they would ascend together. At the Spider's Door, he betrayed his lover...",
      "reading.moon":
        "The Chiliarch listened to it happen and then forced Kanishk into his service. The Chiliarch cannot be denied. Lok Kahuli remained to write this work, and to describe the outer magics of struggle and contest.",
    },
    xtriggers: {
      "mastering.moon": [{ id: "x.sharps", morpheffect: "spawn", level: 1 }],
      "reading.moon": [{ id: "mem.dreamt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thevinzantinscriptions",
    Label: "The Vinzant Inscriptions",
    Desc: "Everett Vinzant transcribed these from a cliff in Anatolia, where he famously survived a lightning-strike. He died seven years later to the day. His bones, the legend has it, were hot to the touch.",
    aspects: {
      "mystery.forge": 6,
      "period.dawn": 1,
      "w.phrygian": 1,
      "cost.tally": 5,
      "r.transformations.liberations": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "Long ago, the Sisterhood of the Knot recounted, the Forge loved the Hour called the Sun-in-Splendour. The Red Grail long anticipated their union, and the Grail-priestesses prophesied it...",
      "reading.forge":
        "The remainder of the text consists of gloating remarks by the Grail-priestesses of the Shaping that will come, interpolated with warnings and laments from those of the Sisterhood who serve the Ring-Yew and especially the Horned Axe. Nevertheless, an invocation to the Forge is included as part of an attempt to urge it onwards.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.transformations.liberations", morpheffect: "spawn", level: 1 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thelarquebinecodex",
    Label: "The Larquebine Codex",
    Desc: "Christoph Larquebus claimed to have purchased two hand-written copies of the Codex from a family of witches on the shores of the Sea of Marmara. A third was 'given to the Sea'.",
    aspects: {
      "mystery.moon": 6,
      "period.dawn": 1,
      "w.phrygian": 1,
      "cost.tally": 5,
      "r.seastories": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "The Sister-and-Witch came from the West, where they were born in two wombs, one a princess, one a monster. Nevertheless they loved each other from birth, and met in secret 'to seek union'.",
      "reading.moon":
        "When the great drought came, the kings of that land tried to sacrifice the princess and the witch, so they sailed across the Sea. When despair took them, they flung themselves into the drowning waters... and so found the Painted River, where they entered the Mansus through the offices of the Red Grail. Nevertheless, the Codex ends with a condemnation of the Grail.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.seastories", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.againstthesisterhoodoftheknotandthefoulnessoftheirdepravedcustoms",
    Label:
      "Against the Sisterhood of the Knot and the Foulness of their Depraved Customs",
    Desc: "Hieronymus Pseudo-Hypnerotomachus wrote this furious screed about the sinister influence of the Sisterhood of the Knot on his own Church of the Unconquered Sun.",
    aspects: {
      "mystery.sky": 6,
      "period.curia": 1,
      "w.greek": 1,
      "cost.tally": 2,
      "r.skystories": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Hieronymus claims that the powers served by the Sisterhood of the Knot made an arrangement: the Thunderskin loved the Yew, and the Grail destroyed him, as restitution for the destruction of the Axe's loved ones. Hieronymus' writing becomes incoherent with rage at this point.",
      "reading.sky":
        "Hieronymus recovers his composure, eventually, to describe how the Thunderskin entered the Mansus through the Peacock Door. This, Hieronymus insists, is 'abomination upon abomination: but then that most abominable of Doors has always been an abomination.'",
    },
    xtriggers: {
      "mastering.sky": [{ id: "x.skystories", morpheffect: "spawn", level: 1 }],
      "reading.sky": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.themorphycodex",
    Label: "The Morphy Codex",
    Desc: "A priestess of the Sisterhood of the Knot claims to have discerned the true meaning of the Thunderskin's birth.",
    aspects: {
      "mystery.moon": 6,
      "period.dawn": 1,
      "w.aramaic": 1,
      "cost.tally": 5,
      "r.tridesmahiera": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "The writer credits the Red Grail, the Ring-Yew and the Horned-Axe - the powers the Sisterhood reveres - with agreeing a final treaty between the Hours of the House and the Hours they'd displaced: the Thunderskin loved the Yew, and the Grail destroyed him, as restitution for the slaying of the Horned-Axe's sisters and brothers.",
      "reading.moon":
        "The Thunderskin entered the Mansus through the Peacock Door, 'a privilege never given to the Witch-and-Sister: but then their merit was much less'. The writer admits that entry through the Peacock Door is unseemly, but insists that under the circumstances, there was no other way.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.tridesmahiera", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [
        { id: "music.beguiling", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theleoninetantra",
    Label: "The Leonine Tantra",
    Desc: "In the most notorious translation of the Leonine Tantra, Ashley Phillips is listed as the translator, but their existence is explicitly denied in the prologue. This confusion is characteristic of books which mention the Great Hooded Princes.",
    aspects: {
      "mystery.edge": 8,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.edictsmartial": 1,
      soph: 8,
      scroll: 1,
    },
    xexts: {
      "reading.edge.intro":
        "The Tantra describes, elliptically, the Great Hooded Princes and the multitudinous ways in which they influenced wars against foreign invaders of the Land of the Great River, 'although in a sense they were also invaders'",
      "reading.edge":
        "Lions can be created, not as children are created, nor as words are created, but as weapons are created. The Great Hooded Princes learnt to create lions from their spyings on the affairs of the Hours, and not all lions now serve the Golden General.'",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.edictsmartial", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Scroll",
    manifestationtype: "Book",
  },
  {
    ID: "t.theincandescenttantra",
    Label: "The Incandescent Tantra",
    Desc: "Michael Blockley, the eccentric iron magnate, was fond of quoting from this tantra. Blockley died in a factory fire.",
    aspects: {
      "mystery.forge": 8,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.transformations.liberations": 1,
      soph: 8,
      scroll: 1,
    },
    xexts: {
      "reading.forge.intro":
        "Dialogues with an entity called the Crucible Prince. The Prince warns about the appetites of his mistress, the Burning Queen, and the peril of the naked desire she shares with the Sun, but professes his loyalty nevertheless.",
      "reading.forge":
        "'A rite which changes is necessarily a rite which destroys. But a great change requires a destruction of savage extent.'",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.transformations.liberations", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Scroll",
    manifestationtype: "Book",
  },
  {
    ID: "t.thethirstingtantra",
    Label: "The Thirsting Tantra",
    Desc: "C.G. Burial, the temperance campaigner, published elements of this in a pamphlet, which had to be withdrawn and destroyed after it became popular.",
    aspects: {
      "mystery.grail": 8,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.orchids.narcotics": 1,
      soph: 8,
      scroll: 1,
    },
    xexts: {
      "reading.grail.intro":
        "A disquisition on the many varieties of thirst, their uses and their effects. ",
      "reading.grail":
        "The tantra describes how the satisfaction of thirsts may allow a mortal to rise into the service of the Thirsting Power, but warns of the consequences of rejecting those rarer thirsts for common ones.“A man who thirsts, O Mighty One, whose mind clings to actions in this world, will return to this world of action from that other place.”",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.orchids.narcotics", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Scroll",
    manifestationtype: "Book",
  },
  {
    ID: "t.theflayedtantra",
    Label: "The Flayed Tantra",
    Desc: "This Tantra is recorded as being spoken by an enigmatic individual identified as 'Peel', with many of the qualities of the mythological naga. The Flayed Tantra played a notable part in Alexander Sparrow's paranoid pamphleteering.",
    aspects: {
      "mystery.heart": 8,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.maggephenemysteries": 1,
      soph: 8,
      scroll: 1,
    },
    xexts: {
      "reading.heart.intro":
        "'Peel' was numbered among the Great Hooded Princes, but it breaks with its brethren and followed the Thunderskin in the endless dance.",
      "reading.heart":
        "Once Peel had peeled itself, it had the ink it needed to write the Tantra. It had to face the wrath of its fellows. Here is the invocation it used to fend them off.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.maggephenemysteries", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [{ id: "mem.storm", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Scroll",
    manifestationtype: "Book",
  },
  {
    ID: "t.thewatchfultantra",
    Label: "The Watchful Tantra",
    Desc: "Notorious for its involvement in the deaths of Dafydd Jones and Meredith Blaine, two early physicists who each claimed to have the only copy and who ultimately fought a duel over it in 1840.",
    aspects: {
      "mystery.lantern": 8,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.purifications.exaltations": 1,
      soph: 8,
      scroll: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "The Tantra describes processes of occult illumination, including a formula which may show the way from the 'Hunter's Gate' to the 'Serpent Gate' - which in the West is usually called the Spider's Door.",
      "reading.lantern":
        "The Sun passes through the House at the appointed time. Since the Sun's division, the time has become uncertain.'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.purifications.exaltations", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Scroll",
    manifestationtype: "Book",
  },
  {
    ID: "t.thetwinserpenttantra",
    Label: "The Twin-Serpent Tantra",
    Desc: "Just before the outbreak of the Great War, 'Alexander Sparrow' - almost certainly a pseudonym - published leaflets claiming the influence of 'Snake Princes' on world affairs. The text called the Twin-Serpent Tantra was his primary inspiration.",
    aspects: {
      "mystery.knock": 8,
      "period.nocturnal": 1,
      "w.sanskrit": 1,
      "cost.tally": 1,
      "r.edictsliminal": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "The Tantra describes the Great Hooded Princes - a dynasty of unclear origin - engaging in prayers, sacrifices and poetry in honour of the Key-Serpent, the Crossroads-Twins and the Mirror-Queen. 'Nagi encircles; Nagi arises from wounds; Nagi spares those who are already harmed.'",
      "reading.knock":
        "The Great Hooded Princes are described as having 'escaped from the history of their death to a history where they yet live'. The text claims that there are now one hundred and eight of them, but - in one of many instances of twinnedness - before they crossed from their death chronicle, there were only fifty-four.",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.edictsliminal", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thefirecircletantra",
    Label: "The Fire-Circle Tantra",
    Desc: "The one known extant copy of this in Western Europe was stolen from the British Library in 1892. One Harvey Hattington confessed to the crime and claimed to have eaten it, with butter and garlic, in a moment of ungovernable whimsy.",
    aspects: {
      "mystery.moth": 8,
      "period.curia": 1,
      "w.sanskrit": 1,
      "cost.tally": 2,
      "r.solutions.separations": 1,
      soph: 8,
      scroll: 1,
    },
    xexts: {
      "reading.moth.intro":
        "Herein the Great Hooded Princes are shown beseeching the Wood to rise and devour an invading Timurid army. The 'Dapple-King', the 'Honey-Tree' and the 'Sea-Twins' all deny their request, until they enlist the help of a burrowing secret-keeper...",
      "reading.moth":
        "Armed with blackmail material from the 'burrowing secret-keeper', the Great Hooded Princes petition the powers of the Wood for a second time, and are successful. One quarter of the Timurid army is devoured by bees, one quarter drowns themselves, and one quarter 'disrobe themselves until nothing remains'.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.solutions.separations", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Scroll",
    manifestationtype: "Book",
  },
  {
    ID: "t.asthesunhiscourse",
    Label: "As The Sun His Course",
    Desc: "Joel of the Bridge, a retired soldier and sometime tollkeeper, wrote this epic poem about Alexander's famously inexplicable decision at Issus to withdraw from the war with the Achaemenids, and his subsequent return to Macedonia.",
    aspects: {
      "mystery.edge": 8,
      "period.dawn": 1,
      "w.aramaic": 1,
      "cost.tally": 5,
      "r.sickle.eclipse": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "Alexander meets at Issus with Darius, King of Kings, for three days and three nights. On the first day, the two men trade threats; on the second, promises; on the third, secrets. Darius tells Alexander something so shattering that he retires to his tent to consider 'matters of strength and matters of mastery'.",
      "reading.edge":
        "At dawn on the fourth day, Alexander announces: 'the Sun has his course, upon which he returns; and so do I'. He returns to Macedonia, executing two of his captains when they dispute his decision. He brings with him the 'names of a blind God', and a 'rite of sacred betrayal': for, Joel opines, without betrayal there would be an end to war.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.sickle.eclipse", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theconcursumdiaries",
    Label: "The Concursum Diaries",
    Desc: "The diaries of the explorer and murderer Lars Westergren. He's unhelpfully translated them into Phrygian, for privacy.",
    aspects: {
      "mystery.rose": 8,
      "period.dawn": 1,
      "w.phrygian": 1,
      "cost.tally": 5,
      "r.path.pilgrim": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        "'There are map-legends, there are maps of legends, and there are legends of maps. Aspects of the Mansus subsist in all of these, in much the same way that you find water in a swamp and in a cup and in the sky.'",
      "reading.rose":
        "Westergren describes a series of expeditions into the Mansus. He focuses on the details of the experience - the colours, the vistas, the textures - rather than the practicalities. He does warn that the Mansus changes each year, although he assures the reader that the Doors have been the same. 'Doors may close, but they never disappear. At least not while there have been mortals in the Mansus. We're like mice.'",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.path.pilgrim", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theironbook",
    Label: "The Iron Book",
    Desc: "A manual of the Ordo Limiae, an order of quasi-immortals who maintained a secret enclave at the source of the river Limia, in the Roman province of Hispania Gallaecia. This manual was compiled by one Melerai Yivni, who claims to have travelled to join the Ordo from 'the Crossroads of the Waters'.",
    aspects: {
      "mystery.edge": 8,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.disciplines.thehammer": 1,
      soph: 8,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "Members of the Ordo took an oath, the Iron Chain, that required them to remain hidden from the world. This manual includes presumably long-obsolete addresses and pass-phrases that could have been used to find the Ordo's contact in the town of Iria.",
      "reading.edge":
        "The final part of the manual describes the punishments for Ordo members who break their oath of secrecy. This includes an invocation used to summon the spirit called King Crucible as an agent of vengeance. Yivni cautions that this must be a last resort when the oathbreaker would otherwise go unpunished: summoning King Crucible might draw the personal attention of the Forge of Days. (A marginal note suggests, in any case, that King Crucible, 'in a most transcendent Sulk of Sulks', no longer leaves the Mansus.)",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thehammer", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thesilverbook",
    Label: "The Silver Book",
    Desc: "A manual of the Ordo Limiae, an order of quasi-immortals who maintained a secret enclave at the source of the river Limia, in the Roman province of Hispania Gallaecia. This manual was compiled by one Burzghash, who explains that he came to join the Ordo from the 'city of messenger eagles' after he abandoned the service of the Ivory Dove.",
    aspects: {
      "mystery.moth": 8,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.edictsliminal": 1,
      soph: 8,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        "Members of the Ordo took an oath, the Silver Chain, that forbade men to lie with woman, or women with men: 'for what may come is not always the Crime of the Sky, yet that is a furious danger.' It was apparently permissible for men to lie with men, and women with women - in fact, Burzghash suggests that should be encouraged, to distract from other temptations.",
      "reading.moth":
        "The manual prescribes potential countermeasures to protect those who might be tempted to go against the oath: masks, disfigurement, severe poetic disciplines. Those who do break it are to be punished with death, although there are lesser punishments prescribed for various acts that don't involve actual coitus. Death is to be administered with 'the Glassfinger Toxin', which can be created with the assistance of the techniques described earlier in the manual, and with sufficient Knock aspect.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.edictsliminal", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theivorybook",
    Label: "The Ivory Book",
    Desc: "A manual of the Ordo Limiae, an order of quasi-immortals who maintained a secret enclave at the source of the river Limia, in the Roman province of Hispania Gallaecia. This manual was compiled by one Kurenai, who claims to have fled 'the tyranny of the Chrysanthemum Throne' to cross the world and join the Ordo.",
    aspects: {
      "mystery.winter": 8,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.quenchings.quellings": 1,
      soph: 8,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.winter.intro":
        "Members of the Ordo took an oath, the Ivory Chain, not to have commerce with the Hours. Followed literally, this would be almost impossible for an adept, so the manual contains numerous clarifications, exceptions and processes of indulgence.",
      "reading.winter":
        "Kurenai describes the Order's burial rites, which include spells to ensure - in theory - that the souls of dead Long are not given to the Hours. The Hour called the Ivory Dove, who memorialises and commemorates, is to be invoked, in secret, in these rites, 'for with that Hour we have made an understanding'.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.quenchings.quellings", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thegeminiadi",
    Label: "The Geminiad i",
    Desc: "A fragile manuscript, illuminated with twinned shapes of sad and luminous beauty, and with all the phases of the moon. It might be as old as the seventh century, but the language - Fucine - is much older. The cover is tooled goatskin decorated with garnet.",
    aspects: {
      "mystery.heart": 10,
      "period.curia": 1,
      "w.fucine": 1,
      "cost.tally": 2,
      "r.weaving.knotworking": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.heart.intro":
        "These pages outline the nature, and the doctrines, of an Hour that weaves together the willing, an Hour that is sought beneath the moon and at the water's edge: the Sister-and-Witch. The language is wilful, knotty, poetic. It'll take some untangling.",
      "reading.heart":
        "The first volume of the Geminiad reminds us that the Sister-and-Witch has been known to manifest as the Witch-and-Sister - and that this face is always hungry, while the other face may heal. It implies connections between the Sister-and-Witch and the Hours of the upper Mansus - especially the lunar Hour called the Meniscate - but it is ambiguous on whether the Sister-and-Witch is a Mansus-Hour proper. And it speaks at length about the sadness of the two-who-are-one, the sadness that remains from their time as flesh.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.weaving.knotworking", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [{ id: "mem.solace", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thegeminiadii",
    Label: "The Geminiad ii",
    Desc: "A fragile manuscript, illuminated with twinned shapes of sad and luminous beauty, and with all the phases of the moon. It might be as old as the seventh century, but the language - Fucine - is much older. The cover is a dark and exotic leather with a smooth, almost chitinous surface, decorated with jasper.",
    aspects: {
      "mystery.grail": 10,
      "period.curia": 1,
      "w.fucine": 1,
      "cost.tally": 2,
      "r.pentiments.precursors": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.grail.intro":
        "These pages outline the seven bloody natures of the 'Daughters of Lagiah' - those corrupted immortals who gave birth to children, in defiance of the Laws of the Upper Heaven; who devoured them, in obedience to the Hours' punishment; and who have been left outside the law...",
      "reading.grail":
        "The second volume of the Geminiad suggests that these seven corrupted immortals have been accorded the privileges of Names of the Witch-and-Sister - or perhaps the Sister-and-Witch. It reminds us that the Twins unite what is apart, and that the 'Crime of the Sky' is in some sense a supreme joining. And it speaks at length about the sadness of the seven, the sadness of mothers whose children are forever lost, and far worse than lost.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.pentiments.precursors", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thegeminiadiii",
    Label: "The Geminiad iii",
    Desc: "A fragile manuscript, illuminated with twinned shapes of sad and luminous beauty, and with all the phases of the moon. It might be as old as the seventh century, but the language - Fucine - is much older. Coral decorates its cover, and its page-edges are sharp enough to slash a throat.",
    aspects: {
      "mystery.moth": 12,
      "period.curia": 1,
      "w.fucine": 1,
      "cost.tally": 2,
      "r.resurgences.emergences": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        "These pages outline the nature, and the doctrines, of an Hour that demands the union of what has been separated, an Hour that is sought at the water's edge and beneath the moon: the Witch-and-Sister. The language is allusive, enigmatic, intricate. It'll take some untangling.",
      "reading.moth":
        "The third volume of the Geminiad reminds us that the Witch-and-Sister has been known to manifest as the Sister-and-Witch - and that this face may heal, while the other face is always hungry. It implies connections between the Witch-and-Sister and the Hours of the Wood - especially the secret-keeper called the Velvet - but it is ambiguous on whether the Witch-and-Sister is a Wood-hour proper. And it speaks at length about the sadness of the two-who-are-one, the sadness that remains from their time as flesh.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.resurgences.emergences", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [
        { id: "music.beguiling", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theworlddoesnotweep",
    Label: "The World Does Not Weep",
    Desc: "'Brown' Joshua found this in a well in Hamath. There's an unlikely story that it was abandoned by Alexander during his retreat from Issus.",
    aspects: {
      "mystery.winter": 10,
      "period.solar": 1,
      "w.aramaic": 1,
      "cost.tally": 4,
      "r.putrefactions.calcinations": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "The unknown adept who wrote this proclaims: the world forgets, but the Ivory Dove does not. The text contains a number of prescriptions for ensuring that certain acts are remembered, including a rite which requires a sacrifice in a particularly monstrous mode...",
      "reading.winter":
        "The Hours tried to bury the memory of what happened to the Wheel, the Flint, the Tide, and the Seven-Coiled, but the Dove won't permit it. Nor will he permit what happened to the First Egg to be forgotten, although it is perhaps the one thing that the Watchman might ever forgive...",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.putrefactions.calcinations", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thedeedsofthescarredcaptain",
    Label: "The Deeds of the Scarred Captain",
    Desc: "Painstakingly assembled by the soldier of fortune and sometime remittance man, Pavel Shulga, during his years in Greece.",
    aspects: {
      "mystery.edge": 12,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.sharps": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "An account of the founding of Mycenae by a 'Scarred Captain' who first slew seven monsters to make the land safe.",
      "reading.edge":
        "As the Captain destroys each monster, a flood of blood rises higher, until at last a priestess drowns and is reborn as a serpent-goddess. She blesses the Captain, and he departs for the 'House above the Forest', leaving Mycenae to reign supreme after the flood of blood subsides.",
    },
    xtriggers: {
      "mastering.edge": [{ id: "x.sharps", morpheffect: "spawn", level: 2 }],
      "reading.edge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebookofdissolution",
    Label: "The Book of Dissolution",
    Desc: "Alexander Probst recovered a copy of this work from a mountain-temple in Persia. Other copies surface now and then, usually seared on rock.",
    aspects: {
      "mystery.forge": 12,
      "period.dawn": 1,
      "w.mandaic": 1,
      "cost.tally": 5,
      "r.transformations.liberations": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.forge.intro":
        "The Book consists mostly of prayers to the Unburnt God, the Forge of Days which consumes and transforms. It suggests the Forge's power arises partly from its nature, and partly from its tools.",
      "reading.forge":
        "The Book describes an earlier House of the Sun, whose doors and ways were different. It praises the Forge of Days for opening the ways into the house, and for transforming that which was to that which is, despite the screams of stone...",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.transformations.liberations", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.acatalogueofunchartedpleasures",
    Label: "A Catalogue of Uncharted Pleasures",
    Desc: "'The Dark Gentleman' is the only, and rather grandiosely, identified author of this often-copied work.",
    aspects: {
      "mystery.grail": 12,
      "period.dawn": 1,
      "w.phrygian": 1,
      "cost.tally": 5,
      "r.orchids.narcotics": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "Some pleasures,' the Formulae Voluptuous attest, 'are so intense they can corrupt the laws of the physical world'. This text catalogues some of those instances.",
      "reading.grail":
        "Birth occurs at the conjunction of pleasure and torment. So the first Forbidden Acts of the Forge birthed sparks of delight which took root in the Glory or in Nowhere: who can say? So the seeds of the Flowermaker were planted, though for long years he was nothing but an unfulfilled ache.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.orchids.narcotics", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thosewhodonotsleep",
    Label: "Those Who Do Not Sleep",
    Desc: "The mystic Brodnax discusses the origins of the Sister-and-Witch, and of the Thunderskin.",
    aspects: {
      "mystery.heart": 12,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.surgeries.exsanguinations": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.heart.intro":
        "The Sister-and-Witch were born in two wombs, one poor one rich, across the sea. The Sister was stronger in the aspect of Heart, and so their survival was assured; the Witch was stronger in the aspect of Grail, and so they were not satisfied...'",
      "reading.heart":
        "When the Sister and Witch came West, the Red Grail permitted their ascension, but then grew jealous of their power. It lured a great musician into the ranks of its Names, and caused him to be reborn from blood as a Heart-hour, so that the Grail might maintain dominion there also. But its victory is not assured.'",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.surgeries.exsanguinations", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [{ id: "mem.storm", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theskythesoul",
    Label: "The Sky, the Soul",
    Desc: "The grand labour of Kalle, an ascetic poet writing at the court of the Shadowless Kings.",
    aspects: {
      "mystery.lantern": 12,
      "period.dawn": 1,
      "w.aramaic": 1,
      "cost.tally": 5,
      "r.pyroglyphics": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "Kalle's verses are brief, obscure, and often dominated by images of violence. 'A star is a pin-prick, but the Sun is a wound.'",
      "reading.lantern":
        "It's always possible to be deader,' Kalle states. 'The Watchman goes before; none but seven may go after.' 'Yet surely we are born to the Glory as the sparks fly upwards.'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.pyroglyphics", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onthematterandthedeedsofserpents",
    Label: "On the Matter and the Deeds of Serpents",
    Desc: "This was probably the 'prophecies of the naga' rendered into English, and illustrated, by 'William Midnight' in Paris in the 1880s; but it shows a number of divergences from that text. It's certainly quite recent by the standards of Vak texts.",
    aspects: {
      "mystery.knock": 12,
      "period.curia": 1,
      "w.vak": 1,
      "cost.tally": 2,
      "r.edictsliminal": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "The serpent-folk called the Great Hooded Princes came to know the order called the House of Lethe, and warred across the miles with them. They made an alliance with the Mother of Ants, 'whose children they had been'...",
      "reading.knock":
        "The text describes how the Great Hooded Princes escaped (or will escape) from the Fifth History, where they had died (or were doomed to die). They engaged in a secret conquest of 'the land of the Great River', called India in some histories, and have ensured that all other conquests of that land are false conquests.",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.edictsliminal", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [
        { id: "secret.threshold", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theserenityoftheblackwood",
    Label: "The Serenity of the Black Wood",
    Desc: "An allegorical history of the House of Lethe, which it is here implied was inspired by the Centipede. 'Sereno Blackwood' is an occult alias to this day.",
    aspects: {
      "mystery.moth": 12,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.sacralimiae": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "'The Proverbial Footloose' gathers travellers in a wood, and leads them through, but abandons them part-way. They find themselves beset by 'glorious monsters'.",
      "reading.moth":
        "The travellers discover they can survive if they close their eyes (they adopt a closed eye as their sign) and that they can go unnoticed if they drink from the clear cold streams. They never forget 'that proverbial footloose, the Centipede' but they never forgive her either.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.sacralimiae", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebookofthrones",
    Label: "The Book of Thrones",
    Desc: "A legend of the Shadowless Empire, transcribed by Alexander Peterhans from annals at a secret shrine in Anatolia.",
    aspects: {
      "mystery.edge": 12,
      "period.curia": 1,
      "w.phrygian": 1,
      "cost.tally": 2,
      "r.auroralcontemplations": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "In 'the first and greatest history', a subject of the Shadowless Empire of Persia travels to the West, to the kingdom of the Perseids. There he becomes a protégé of the tutelary Perseid deity, the Scarred Man who lives in the dark. He returns after seven years to put his skills at the service of the Shadowless Empire, becoming their Golden General... ",
      "reading.edge":
        "After many years of peace, the heirs of the Perseids move against the King of Kings and the Shadowless Empire. The Golden General will not take arms against the blood of his mentor, until the King of Kings whispers 'a great secret of betrayal' in his ear. He breaks his sword, forswears his oath to both the Empire and the Scarred Man, and enters 'the Temple behind the World', leaving his life behind.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.auroralcontemplations", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.asecondglory",
    Label: "A Second Glory",
    Desc: "The priest Juceh celebrates the extirpation of the Gods-who-were-stone, those Hours who preceded humanity.",
    aspects: {
      "mystery.winter": 12,
      "period.solar": 1,
      "w.mandaic": 1,
      "cost.tally": 4,
      "r.snowstories": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.winter.intro":
        "Juceh engages in an apologia for the destruction of the Hours: they were old, they were cowardly, they were vile, their time had passed, and it was the shining destiny of humankind to seize the House through glorious battle.",
      "reading.winter":
        "Juceh recounts how the Hour called Seven-Coils was slain in battle by the Colonel, how the Grail devoured the Hour called Tide, and how the Egg Unhatching 'fled like a coward'. He's quite vituperative about the Egg Unhatching. He warns darkly against its return.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.snowstories", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.bookoftrueblood",
    Label: "Book of True Blood",
    Desc: "Cassius the Thoman reveals the deeds of the Unnumbered Legion, the secret army that protected Rome against the Shadowless Empire.",
    aspects: {
      "mystery.edge": 14,
      "period.solar": 1,
      "w.latin": 1,
      "cost.tally": 4,
      "r.meniscatereflections": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "The Legion's Legate answered directly to the Hour called the Tribune of Scars, and was promised immortality if he died in battle....",
      "reading.edge":
        "In the final part, Cassius confesses to being a former Legate. He recounts his terror of the Tribune, and divulges the secret lore of the Golden General, the champion of the Shadowless Empire, the enemy of the Tribune, in the hope that the Tribune will some day be undone.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.meniscatereflections", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theburningwoman",
    Label: "The Burning Woman",
    Desc: "A transcription of the play by Menander the Victor, possibly the dramatist of that name, into Phrygian, with commentaries.",
    aspects: {
      "mystery.forge": 14,
      "period.dawn": 1,
      "w.phrygian": 1,
      "cost.tally": 5,
      "r.transformations.liberations": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "The play describes a pilgrimage of smiths and adepts following the trail of the Burning Woman, who has appeared in all their dreams and given each a Wound and a Word.",
      "reading.forge":
        "The smiths and adepts give up on finding the Burning Woman, and resolve to build their own kingdom, 'where our strength will be sufficient to shatter the world.'",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.transformations.liberations", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.twentysixenticementsseventorments",
    Label: "Twenty-Six Enticements, Seven Torments",
    Desc: "The painter Niels Frederik Malskær, notoriously, attempted a series of paintings based on the Torments. By the Fifth Torment, the demands of the painting had grown so dire that he died of blood loss. The diagrams in this text are thankfully less detailed.",
    aspects: {
      "mystery.grail": 14,
      "period.nocturnal": 1,
      "w.fucine": 1,
      "cost.tally": 1,
      "r.resurgences.emergences": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.grail.intro":
        "The Enticements of the Grail outnumber its Torments, but its Torments are its final nature. Birth is the First Torment, and Thirst the Seventh'.",
      "reading.grail":
        "Through the enumeration of the Grail's enticements and torments winds the sorrowful history of the Witches of the Dry Land: the ordeal of birth from two wombs, their struggle from and supplication of the Grail, the yearning for union which drives them all.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.resurgences.emergences", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.isaacofkarthshistoryoftheshadowlesskings",
    Label: "Isaac of Karth's History of the Shadowless Kings",
    Desc: "'A True and Accurate History of the Shadowless Kings, by Isaac of Karth.' Isaac describes the thousand-year ascendancy of the Shadowless Empire.",
    aspects: {
      "mystery.rose": 14,
      "period.dawn": 1,
      "w.aramaic": 1,
      "cost.tally": 5,
      "r.sandstories": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        " 'The first and greatest history' is described herein. The Persian Empire - 'the sons of Achaemenes', 'the Shadowless Kings', 'the most Glorious Empire' - survives the assaults of Alexander the Great and flourishes as late as the fifth century. ",
      "reading.rose":
        "After the fall of Rome, the Shadowless Empire takes Byzantium under its wing, and moves East against the Land of the Great River. Isaac begins to recount the invasion struggling against 'the unskinned armies of the hooded serpents', but ends abruptly with a series of incantations that he claims allowed the Shadowless Empire to persist.",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.sandstories", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thehighmysteriesoftheinnermostchamberofourchurchsolar",
    Label: "The High Mysteries of the Innermost Chamber of our Church Solar",
    Desc: "The secret rites of the Church of the Unconquered Sun, which held power in at least two Histories.",
    aspects: {
      "mystery.lantern": 14,
      "period.solar": 1,
      "w.fucine": 1,
      "cost.tally": 4,
      "r.sacrasolisinvicti": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.lantern.intro":
        "The Church chiefly worshipped the Sun-in-Splendour, the original undivided sun; but this text also includes the devotions of its aspects as the chilly winter dawn and the departing sunset, as well as the Meniscate, the Sun's 'night-self'. Priests of the Church were all male, but rites are also included which allowed women to cross ceremonially to manhood.",
      "reading.lantern":
        "The Church's highest rites were performed in the Concursum, the chamber at the Mansus' heart where the Hours were known to pass. These rites include salutations to non-solar Hours: the Grail, the Ring-Yew, the Horned Axe and the Thunderskin.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.sacrasolisinvicti", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.medusaslament",
    Label: "Medusa's Lament",
    Desc: "On the death of the Hour called Seven-Coils, 'the Father of the Mother'.",
    aspects: {
      "mystery.scale": 14,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.horns.ivories": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "The first part of the poem describes the ambush of the Seven-Coils by a warrior 'scarred all over by the traitor gods, scarred even unto his eyes, so that the sight of the great coils would not destroy him'.",
      "reading.scale":
        "The battle rages on until the Seven-Coils drowns in its own blood, at which point the narrative turns mystical and allusive. A seven-titled goddess arises from the foam of its blood: she is an armoured queen, a serpent-daughter, a key, a healer, a murderess, an oracle, but her seventh title is not to be revealed.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.horns.ivories", morpheffect: "spawn", level: 2 },
      ],
      "reading.scale": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebookofmasks",
    Label: "The Book of Masks",
    Desc: "Athena Vana's work on the rogue Hour called the Vagabond, who is also known as the Laughingthrush, the Centipede, the Pilgrim, and by many other names - or as Vana has it, 'masks'.",
    aspects: {
      "mystery.moth": 14,
      "period.dawn": 1,
      "w.phrygian": 1,
      "cost.tally": 5,
      "r.weaving.knotworking": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "The Mask of the Laughingthrush, says Athena Vana, had a great friendship with the Sun-in-Splendour, the highmost Hour of the Mansus (now divided and departed). The Mask of the Sight-Thief painted the river in the Mansus. The Mask of the Vagabond was forbidden the Mansus, not for what she had done, but for what would occur...",
      "reading.moth":
        "The Mask of the Centipede recalled her birth-place, Miah, which had punished her for creeping into the temple precinct. This Mask cursed Miah to drink only dust and to be remembered only by the wind - 'for not beneath any Mask does she forgive, and the Centipede's hunger is not to be forgotten.'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.weaving.knotworking", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.inthemountainsasupontheplaintheremaynotbeapathwherenonehaspassed",
    Label:
      "In The Mountains As Upon The Plain There May Not Be A Path Where None Has Passed",
    Desc: "Ninegala of Lagash describes the secrets to be found in mountains.",
    aspects: {
      "mystery.sky": 18,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.skystories": 1,
      soph: 18,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.sky.intro":
        "Ninegala tells a number of lively stories about riddling ogres and wars between mountain tribes, but turns sombre in the tale of the Empty-Handed Hunter: a lover of the Grail who sought to match her appetites and join her as an Hour, but in the end rent and devoured himself, giving his name to the mountains he had once roamed.",
      "reading.sky":
        "Ninegala claims that the Hours who sometimes manifest as birds - the Laughingthrush, the Ivory Dove, the Beachcrow and the Witch-and-Sister - meet at a secret location on a mountaintop to exchange gossip unheard by their peers. Now and then a mortal overhears them. The mortal is always obliterated, and the meeting-place always changed.",
    },
    xtriggers: {
      "mastering.sky": [{ id: "x.skystories", morpheffect: "spawn", level: 3 }],
      "reading.sky": [{ id: "mem.gossip", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.inmemoryofgods",
    Label: "In Memory of Gods",
    Desc: "The 'Barrowchild', a nameless Gaulish adept who joined an organisation identified as the Ordo Limiae, writes regretfully of the destruction of the gods-who-were-stone - the Hours who preceded humanity.",
    aspects: {
      "mystery.winter": 12,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.raggedcrossroads": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.winter.intro":
        "The Barrowchild singles out the Scarred Tribune, the Red Grail, the Forge and the Moth for especial condemnation as murderers of the first gods. 'We live in the shadow of their crime', she writes, 'and we must evade it or repeat it.'",
      "reading.winter":
        "The Barrowchild describes how the Grail drained the Hour called Tide, how the Moth 'usurped the Wheel from within', stealing its skin, and how the Forge first eclipsed then shattered Flint. 'Perhaps these are glories,' she observes, 'but then it cannot be that Glory is merciful.'",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.raggedcrossroads", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thesevenfoldslayingofthesevencoiled",
    Label: "The Sevenfold Slaying of the Seven-Coiled",
    Desc: "An account of the destruction of a primaeval Hour, a god-who-was-Stone.",
    aspects: {
      "mystery.edge": 16,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.disciplines.thescar": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "There are twelve verses. In the first, an ascendant Hour identified as the Scarred One enumerates his justifications for destroying the Seven-Coiled: its appetites, its growth, its enmity to humanity. In the second, a priestess puts out his eyes and scars his skin to protect him against the Seven-Coiled's magics. In each of the next seven verses, he destroys one aspect of the Seven-Coiled....",
      "reading.edge":
        "In the tenth verse, the Scarred One bathes his priestess-patron in the blood of the Seven-Coiled, to lend her power. In the eleventh, they assault the 'temple behind the world', entering it by force. In the twelfth, they swear a tripartite oath to protect their ancestors, their descendants, and themselves.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thescar", morpheffect: "spawn", level: 3 },
      ],
      "reading.edge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.mydeedsmypowersmyachievementsandtheinjusticesperpetratedagainstme",
    Label:
      "My Deeds, My Powers, My Achievements and the Injustices Perpetrated Against Me",
    Desc: "A diatribe by Hokobald of Pocsind, formerly of the order of immortals called the House of Lethe (later the Ordo Limiae; much latter the Obliviates). He has scores to settle.",
    aspects: {
      "mystery.forge": 16,
      "period.solar": 1,
      "w.mandaic": 1,
      "cost.tally": 4,
      "r.transformations.liberations": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.forge.intro":
        "Hokobald boasts of his royal descent, and insists that the magics of the Forge are more effective when practised by those of noble blood.",
      "reading.forge":
        "Pocsind complains of his condemnation by the Ordo Limiae. He acknowledges that he has 'undergone alterations' after the 'consummation of that particular delight', but insists that these changes are both elegant and inevitable. 'Who is the fire, and who the fuel?' he asks rhetorically.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.transformations.liberations", morpheffect: "spawn", level: 3 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thedreamoftheconspiracyofthelowerskies",
    Label: "The Dream of the Conspiracy of the Lower Skies",
    Desc: "The disgraced oracle Damaon Azenaten sifts through the tall tales of Penelope of Gordion, the work of the court poet Kalle and the forbidden fragments of the work of the adept Arrettrez, identifying common themes.",
    aspects: {
      "mystery.grail": 16,
      "period.dawn": 1,
      "w.phrygian": 1,
      "cost.tally": 5,
      "r.thegreatsignsandthegreatscars": 1,
      soph: 16,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "Damaon insists that the Hours, far more than mortals, are subject to their passions - to hatred, and even to love. 'The seasons of famine and plenty, the turn of the Earth, the transformations of the furnace - all these are only the results of the enactment of the lesser passions of the Hours.'",
      "reading.grail":
        "Damaon suggests that the Hours have constrained their rivalry to avoid a war within the House of the Sun. He identifies the 'Fear of the Crime of the Sky' as the reason that Hours do not satisfy other passions. He speculates on the horrifying possibilty of Hours turned alukite. 'What then would they devour?'",
    },
    xtriggers: {
      "mastering.grail": [
        {
          id: "x.thegreatsignsandthegreatscars",
          morpheffect: "spawn",
          level: 3,
        },
      ],
      "reading.grail": [{ id: "mem.gossip", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebookofthewhitecat",
    Label: "The Book of the White Cat",
    Desc: "Stories brought by a blind white cat to Penelope of Gordion.",
    aspects: {
      "mystery.sky": 16,
      "period.dawn": 1,
      "w.phrygian": 1,
      "cost.tally": 5,
      "r.watchmansparadoxes": 1,
      soph: 16,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "The aviform Hours - the Crow, the Laughingthrush, the Dove, and the twin Kites - have been known to meet in the mountains north of Gordion, at a place called the Roost, to exchange gossip. Penelope indicates that mortals who hear their words directly are obliterated, but claims that her cat goes unnoticed and returns to her with rumours from the Hours' meetings.",
      "reading.sky":
        "The stories that Penelope claims as Hour-gossip are fragmentary and confusing: accounts of contests where Hope and Dread and the Shadowless Empire are used as game-pieces, agendas of ruin and remembrance from no known history. The most interesting element is the protective incantation she records at the end of the book, after she worries that the Hours might in fact learn of her spying.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.watchmansparadoxes", morpheffect: "spawn", level: 3 },
      ],
      "reading.sky": [{ id: "mem.revelation", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thelionandtheglass",
    Label: "The Lion and the Glass",
    Desc: "An early work by Omar the Blaze, a novice or apprentice at the Labyrinth of Lions.",
    aspects: {
      "mystery.sky": 12,
      "period.dawn": 1,
      "w.mandaic": 1,
      "cost.tally": 5,
      "r.glaziery.lightsmithing": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.sky.intro":
        "Omar describes his progress in mastering the Illumination techniques that rely on the 'Truths of Glass'.",
      "reading.sky":
        "Omar divulges a glassmaker's secret: that 'the Ichor Vitreous' can be filtered and enriched (with enough Lantern Aspect) to become the ink ashartine, which resists untruths…",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.glaziery.lightsmithing", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "mem.revelation", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.eachflamehisfuel",
    Label: "Each Flame His Fuel",
    Desc: "A work by Omar, the Blaze, an initiate or craftsmaster at the Labyrinth of Lions.",
    aspects: {
      "mystery.sky": 14,
      "period.dawn": 1,
      "w.mandaic": 1,
      "cost.tally": 5,
      "r.glaziery.lightsmithing": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.sky.intro":
        "Omar describes his work in the construction of mirrors for the enclosure of a sacred flame, and his slow realisation of 'a Flaw in the Glass'.",
      "reading.sky":
        "Omar explains how his lightsmithing techniques can be used, in the presence of sufficient Lantern, to enrich Xanthotic Essence into 'the Great Ink of the First History'. But he pleads caution in its use… 'lest the Chandler be Realised.'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.glaziery.lightsmithing", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "mem.revelation", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thefocusofamber",
    Label: "The Focus of Amber",
    Desc: "Omar, the Blaze, spent seven years manning a lighthouse in Tyre, in atonement for the extinguishing of a sacred flame. By the end of his stint, he was so terrified of fire that he could not stand to share a room with a candle. This work was written in partial penance.",
    aspects: {
      "mystery.sky": 16,
      "period.dawn": 1,
      "w.mandaic": 1,
      "cost.tally": 5,
      "r.glaziery.lightsmithing": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.sky.intro":
        "Omar claims that the Hour called Watchman is both a god-who-was-flesh - an Hour who was mortal - and also a god-from-Light - an Hour who descended from the Glory - but adds, finally, that the Watchman's origin is triple, and that 'in essence, he is Amber.'",
      "reading.sky":
        "The Watchman, according to Omar, was once another Hour entirely, who ascended into the Glory to escape efforts by other Hours to send him to Nowhere. It may be that Omar's sense of persecution creeps into the narrative at this point: certainly it grows less coherent, and the last part is devoted to attempts to prove that eyes, eggs and the Sun are all in some sense conjunct.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.glaziery.lightsmithing", morpheffect: "spawn", level: 3 },
      ],
      "reading.sky": [{ id: "mem.revelation", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thesongsofthecarapacecross",
    Label: "The Songs of the Carapace Cross",
    Desc: "Micah Xi, sometimes called the Magus of Quartz, etched this work in acid on stone. It has been reproduced many times in many languages since, but the reproductions are often lost to landslides.",
    aspects: {
      "mystery.moth": 16,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.edictsliminal": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        "Xi describes the rites of the gods-who-were-stone, the first Hours, as practiced before the existence of human civilisation by the 'Carapace Cross'. He claims a final survivor of the Cross shared the information with him.",
      "reading.moth":
        "The rites are largely obsolete now. Few have been observed, in the last thousand years at least, to have any effect at all. Nevertheless, Xi identifies at least one invocation of particular power. He warns that it should be used with caution, lest the gods-who-were-stone might find their way back from Nowhere.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.edictsliminal", morpheffect: "spawn", level: 3 },
      ],
      "reading.moth": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theoriginsofhours",
    Label: "The Origins of Hours",
    Desc: "The sage and ecstatic Soham, a frequent visitor to the Mansus, claimed to have discoursed with the Beachcrow in person. Soham later insisted on a sky-burial.",
    aspects: {
      "mystery.sky": 16,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.sacralimiae": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.sky.intro":
        "Soham's writings veer from poetry to confession. He identifies from flesh (those who were mortal), from blood (those who arose from sacrifice), from Light (entry from the Glory) and from stone (those who arose before his knowledge.) He insists that the Moth was the first god-who-was-blood, but later contradicts himself and claims it was the Red Grail.",
      "reading.sky":
        "'The Mansus was different before the first god came from Light, but never doubt it existed, even then.'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.sacralimiae", morpheffect: "spawn", level: 3 },
      ],
      "reading.sky": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.wherehasshegone",
    Label: "Where Has She Gone?",
    Desc: "'The Speeth' - perhaps a single adept, perhaps a council of scholars - hypothesises secret events from limited evidence with persuasive accuracy.",
    aspects: {
      "mystery.rose": 16,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.sandstories": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.rose.intro":
        "The Vagabond is recorded to have travelled not only the Mansus and the Wood, not only all nine continents, but also places forbidden to other Hours...",
      "reading.rose":
        "From Hour-gossip and invisible lore, Speeth deduces that the Vagabond has visited Nowhere, but that she will not return. He also asserts that she has yet to visit the Glory, but that inevitably, this must be her goal.",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.sandstories", morpheffect: "spawn", level: 3 },
      ],
      "reading.rose": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebookoftheextinguishedheart",
    Label: "The Book of the Extinguished Heart",
    Desc: "In the days of the Shadowless Kings, Ennis Lazali was executed for prophesying the Division of the Sun. If any of his captors grew Long, they probably feel rather abashed now.",
    aspects: {
      "mystery.heart": 16,
      "period.dawn": 1,
      "w.mandaic": 1,
      "cost.tally": 5,
      "r.quenchings.quellings": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.heart.intro":
        "Lazali indicates that the Sun will be divided in the Malleary, by the Forge of Days, armed with the love in her heart.",
      "reading.heart":
        "'Love will not be the cause of the Sun's death, but rather envy. Envy will not be the cause of the Sun's death, but rather thirst. Thirst shall not be the cause of his death, but curiosity. Curiosity shall not be his end; rather will it be love.'",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.quenchings.quellings", morpheffect: "spawn", level: 3 },
      ],
      "reading.heart": [
        { id: "bittersweet.certainty", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.howtheendwillbegin",
    Label: "How the End will Begin",
    Desc: "A prophecy of the Wars of the Roads, recorded in the Subcontinent in the days before the Great Hooded Princes.",
    aspects: {
      "mystery.edge": 14,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.raggedcrossroads": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "In the foretold war, the Children of the Leashed Flame march on the cities of the Continent, but the 'Enactors of Solar Law' and the 'Triple Sisterhood' join forces to hold them back... at tremendous cost.",
      "reading.edge":
        "'In that battle between the Imperishable Legions and the Leashed Flame, the Legions will perish and the Flame will be unleashed.'",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.raggedcrossroads", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.themannerinwhichthealchemistwasspared",
    Label: "The Manner in which the Alchemist was Spared",
    Desc: "In 1782, Anaël Verdier used this text as the basis for a presentation to the Academy of Sciences in Paris. He was executed in secret the following morning without trial.",
    aspects: {
      "mystery.forge": 14,
      "period.curia": 1,
      "w.vak": 1,
      "cost.tally": 2,
      "r.anbary.lapidary": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.forge.intro":
        "In the days of the Carapace Cross, when humanity lived in the dark and ate on its knees, humans could enter the Mansus like vermin. One learnt the arts of Flint, the arts of shaping and remaking...",
      "reading.forge":
        "Through the Black, the Yellow, the Red, the Unwise Mortal ascended to the shadow of the Egg Unhatching, and remained in his service. He may be there to this day.'",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.anbary.lapidary", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.fivecreations",
    Label: "Five Creations",
    Desc: "The itinerant scholar Shohei debated five possible origins for humanity with a hooded figure since claimed to be the Beach-Crow. Shohei later claimed that all these accounts had proven false, but the debate was, nevertheless, recorded.",
    aspects: {
      "mystery.moth": 14,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.resurgences.emergences": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        "THE CARAPACE ORIGIN: we were born from shell, like the children of the wasp from the spider. THE GLORIOUS ORIGIN: our life-motes descended from Light. THE ORIGIN BEFOULED: we were found naked and smeared with muck in the roots of the Wood...'",
      "reading.moth":
        "Shohei's preferred theories are that we are the children of apes who walked upright, although his tone here is satirical; or that we consumed not only our parents, 'which is not the Crime of the Sky', but also our origin, so that we came from Nowhere.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.resurgences.emergences", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.gossip", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.commandmentsforthepreservationofallthatexists",
    Label: "Commandments For the Preservation of All That Exists",
    Desc: "Black Elie, Damascene Matriarch of the Sisterhood of the Knot, was imprisoned by the emperor Didius Julianus. She reportedly instructed that these secret doctrines be recorded in writing to preserve against their loss. Regrettably, the story goes, Didius Julianus ordered that the work be entombed with her in an unmarked sepulcher.",
    aspects: {
      "mystery.heart": 14,
      "period.solar": 1,
      "w.mandaic": 1,
      "cost.tally": 4,
      "r.stitching.binding": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.heart.intro":
        "Elie describes powerful protective incantations to be used in a variety of circumstances.",
      "reading.heart":
        "'It is essential that these Protections be completed every fourth year, to defend against the entry of the Worms and against the avidity of the Wave and the Wound.' In the current History at least, there is no indication that these Protections have been performed regularly for at least the last thousand years.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.stitching.binding", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thetimeofdivision",
    Label: "The Time of Division",
    Desc: "In which Amira Zahra prophesies the events later known as the Intercalate, when the Hour called Sun-in-Splendour will be divided.",
    aspects: {
      "mystery.heart": 14,
      "period.dawn": 1,
      "w.mandaic": 1,
      "cost.tally": 5,
      "r.surgeries.exsanguinations": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.heart.intro":
        "The Sun will be divided that it might not sire children. Still its children shall be Four in number and its children shall be Seven in number and its children shall also be Numberless. The Numberless shall open the way for the Seven, and the Seven shall consume the Four...'",
      "reading.heart":
        "Amira prophesies four great wars before the Second Dawn, when the Sun-in-Splendour shall rise again. She cautions: 'Sunrise is blood, and I foretell now that the Sun shall rise from blood, yet not the colour of the blood, nor the hour of Night.' She includes a rite that she speculates will be necessary for the Second Dawn.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.surgeries.exsanguinations", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.amanualfordeparture",
    Label: "A Manual for Departure",
    Desc: "The author, who identifies itself as the Jekadu, claims to be one of the Great Hooded Princes of the Land of the River. The style is informal, even chatty.",
    aspects: {
      "mystery.knock": 14,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.door.wall": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "'No, these doors shouldn't be recorded, but if we had only recorded things before we'd had to leave the Fifth History, we would be in a much better state. So here I am writing it down, and if you don't like it you can sanction me.'",
      "reading.knock":
        "The 'Manual for Departure' lists a number of strategies - occult, martial and political - for quick escapes. Many are irrelevant, obsolete or enigmatic, but the Manual does include a number of powerful techniques for opening portals.",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.door.wall", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [
        { id: "secret.threshold", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.inaamkapigiginlupirgarkiecryppys",
    Label: "Inaam, Kapigiginlupir, Garkie, Cryppys",
    Desc: "In which four enigmatic figures tell the stories they've heard over the years at the Roost, the secret location where the aviform Hours congregate.",
    aspects: {
      "mystery.moth": 14,
      "period.curia": 1,
      "w.phrygian": 1,
      "cost.tally": 2,
      "r.transformations.liberations": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "INAAM: Has not the Beach-Crow shared his treasures? GARKIE: Not the rarest. He takes those things most precious, which he claims found, not stolen.",
      "reading.moth":
        "The Beach-Crow, Kapigiginlupir suggests, is not only a thief, but also a spy and even a voyeur. He has hidden the memory of secret couplings among the Hours and their Names in the corners of the House, as treasures to gloat over. There is particularly fevered speculation on a liaison between the Ring-Yew, that fervent hour of the Wood, and the Mare-in-the-Tree, who sometimes has been the Witch's Sister.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.transformations.liberations", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thevoyagesofferninshunoforeol",
    Label: "The Voyages of Ferninshun of Oreol",
    Desc: "The impossible travels of a sea-captain of the late Phoenician era. Suppressed throughout recorded history: those who read it were said to disappear.",
    aspects: {
      "mystery.moon": 18,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.seastories": 1,
      soph: 18,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.moon.intro":
        "Ferninshun clearly visited the Mansus, sailing the length of the Painted River. He also claims to have traversed a sea of finest sand, to have dared the blazing waves of the Sun's surface, and to have descended to an underworld ocean lit by lamps of black nephrite...",
      "reading.moon":
        "Ferninshun's final voyage is to retirement on a peaceful island across an evening sea, where he identifies a spring whose waters will keep him safe. 'I will be forgotten,' he declares, 'and this work my only trace.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.seastories", morpheffect: "spawn", level: 3 },
      ],
      "reading.moon": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thescarinthesky",
    Label: "The Scar in the Sky",
    Desc: "Nyn wrote this, and came to regret it.",
    aspects: {
      "mystery.winter": 14,
      "period.dawn": 1,
      "w.fucine": 1,
      "cost.tally": 5,
      "r.quenchings.quellings": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.winter.intro":
        "Each page of this book contains one word only, but as each page is turned, a knowledge creeps in.",
      "reading.winter":
        "The final page is crowded. Each reader of the book records the same word. Now it is my turn.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.quenchings.quellings", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.aseventhvoice",
    Label: "A Seventh Voice",
    Desc: "Samuel Savage's cycle of comic poems about a band of players who double as footpads seeking a seventh member.",
    aspects: {
      "mystery.sky": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.preliminalmeter": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Sir Snatch-Sea is distracted by Mistress Twitch-Shell kissing Mistress Nether-Pearls, and fails to see Master Magglepie making off with the players' funds…",
      "reading.sky":
        "The whole enterprise almost ends in disaster when Mistress Wander-Eye's family insults her costume, and she burns down their house in a fit of pique, but the day is finally saved by the Seventh Voice, a wandering book-monger who returns the band's lost music.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theotherline",
    Label: "The Other Line",
    Desc: "One of Samuel Savage's more thoughtful works: an allegorical play about the City Clarity, a city that is also a book, and the sentences which inhabit it.",
    aspects: {
      "mystery.heart": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.preliminalmeter": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "The Lords Proverbial and Lords Disquisitional war in the streets of Clarity, while the Punctuants get drunk on ink and supply the jokes (though, by Savage's usual standards, there aren't very many jokes.)",
      "reading.heart":
        "The final act sees the Lords Proverbial unsealing the City Clarity's gate to expel the population into the unknown. (The formula that they use for the unsealing is a real one - it can be used with Knock and Preliminal Meter to create a gate-sign of power.)",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 1 },
      ],
      "reading.heart": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.anovelmethodforinvocation.contrition",
    Label: "A Novel Method for Invocation & Contrition",
    Desc: "Ingenious and rather beautiful techniques for entreating the Names of the Hours, developed by Rory Morrow, who styled himself 'the Sage-Knight'.",
    aspects: {
      "mystery.rose": 14,
      "period.curia": 1,
      "w.ericapaean": 1,
      "cost.tally": 2,
      "r.preliminalmeter": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.ericapaean": 1 },
      },
    ],
    xexts: {
      "reading.rose.intro":
        "The techniques rely on the unique qualities of the Ericapaean tongue. Morrow professes himself surprised that they serve better to entreat the Names of the Vagabond than the Names of Lantern or Winter Hours…",
      "reading.rose":
        "Morrow demonstrates that Preliminal Meter techniques can be used with sufficient Rose to invoke the Vagabond's Names, transforming an Enduring Reflection into 'something wider of sky.'",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.calicitesupplications",
    Label: "Calicite Supplications",
    Desc: "Prayers addressed to the Red Grail by the Sisterhood of the Triple Knot.",
    aspects: {
      "mystery.grail": 8,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.tridesmahiera": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "'If we should remember not, let our children remember, in their redmost dreams…'",
      "reading.grail":
        "One prayer describes how sufficient Grail-aspect can be used with Tridesma Hiera rites to give 'a life, a little life, a little little life' to a doll twisted from fabric…",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.tridesmahiera", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.ascitesupplications",
    Label: "Ascite Supplications",
    Desc: "Prayers addressed to the Horned-Axe by the Sisterhood of the Triple Knot.",
    aspects: {
      "mystery.scale": 8,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.stonestories": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "'If we should pass not, let our enemies pass, unto their deserved end…'",
      "reading.scale":
        "One prayer describes how sufficient Moon-aspect can be used with Tridesma Hiera with almost any egg to hatch 'the Stone's children, the Sky's daughters, the Sea's sons.'",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.stonestories", morpheffect: "spawn", level: 2 },
      ],
      "reading.scale": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.malachitesupplications",
    Label: "Malachite Supplications",
    Desc: "Prayers addressed to the Malachite by the Sisterhood of the Triple Knot.",
    aspects: {
      "mystery.moon": 8,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.tridesmahiera": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'If we should flourish not, let our enemies flourish, in that time when we are no more…'",
      "reading.moon":
        "One prayer describes how a strong degree of Nectar-aspect can be used with Leathy and Tridesma Hiera rites to bring forth 'the Last Nectar of the Last History, the Living Ink, the Ink-in-Secret…'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.tridesmahiera", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thesunslament",
    Label: "The Sun's Lament",
    Desc: "The first volume of the meditations of Abbot Thomas of the Abbey of the Black Dove.",
    aspects: {
      "mystery.edge": 4,
      "period.solar": 1,
      "cost.tally": 4,
      "r.raggedcrossroads": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "'The thorn-beaked crows took my eyes from me in justice for my crimes, but though I lost my Sight, I found my Light.'",
      "reading.edge":
        "Abbot Thomas speaks of the breaking of his oaths to his sword-brother Trygve, and to the 'Lord of Scars' that he served before he came to the Abbey. He writes of the power of oath-bonds, and considers the means and morality of their sundering.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.raggedcrossroads", morpheffect: "spawn", level: 1 },
      ],
      "reading.edge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thewindsruin",
    Label: "The Wind's Ruin",
    Desc: "The second volume of the meditations of Abbot Thomas of the Abbey of the Black Dove.",
    aspects: {
      "mystery.grail": 4,
      "period.solar": 1,
      "cost.tally": 4,
      "r.applebrighteuphonies": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "Abbot Thomas speaks of his time as a raider, when his name was not Thomas but Toke, 'scything the sea, striving for plunder'…",
      "reading.grail":
        "Abbot Thomas clearly regrets his 'storm-years', and much of the book is taken up with his thoughts on penitence; but there are hints also that he misses those years, and the companionship of his 'sword-brother, ship-brother' Trygve.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.applebrighteuphonies", morpheffect: "spawn", level: 1 },
      ],
      "reading.grail": [
        { id: "music.beguiling", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.themoonsegg",
    Label: "The Moon's Egg",
    Desc: "The third and last volume of the meditations of Abbot Thomas of the Abbey of the Black Dove.",
    aspects: {
      "mystery.moon": 4,
      "period.solar": 1,
      "cost.tally": 4,
      "r.pearl.tide": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "Abbot Thomas speaks of the coming death he hears in the sound of the waves, but rejoices that his blood will water the 'Egg of the Moon' - by which he seems to mean the future.",
      "reading.moon":
        "The last chapter was dictated, not written, by Abbot Thomas. When Thomas' old sword-brother Trygve returned to raid the Abbey, Thomas had broken his monastic oaths and taken up arms to defend the abbey. The two had both been mortally wounded. Thomas' last words are 'The Wheel turns; the Moon sleeps.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.pearl.tide", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theblackbookofbrittany",
    Label: "The Black Book of Brittany",
    Desc: "A volume of ink-lore gifted to St Brandan's by Brian of Brittany, who was made Earl of Cornwall after the Norman Conquest.",
    aspects: {
      "mystery.moon": 12,
      "period.solar": 1,
      "cost.tally": 4,
      "r.inks.containment": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        " ''The Black Flower lies heavy, but the roots of the Watchman's Tree run deep, and they may not be hidden forever…'",
      "reading.moon":
        "The Black Flower, spoken of as a doom or geas, can be held at bay with the Last Ink of Power - brewed from 'the Pale Mixture' in the presence of sufficient Winter with the arts of Containment.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.inks.containment", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [
        { id: "bittersweet.certainty", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thewhitebookofbrittany",
    Label: "The White Book of Brittany",
    Desc: "A volume of death-lore gifted to St Brandan's by Brian of Brittany, who was made Earl of Cornwall after the Norman Conquest.",
    aspects: {
      "mystery.winter": 10,
      "period.solar": 1,
      "cost.tally": 4,
      "r.raggedcrossroads": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "'The White Flower lies heavy, but the roots of the Watchman's Tree run deeper than snow...'",
      "reading.winter":
        "The White Flower is described as the 'death of wisdom' - but wisdom can pass into sleep, not death, when 'the Rage of Glass' is subjected to sufficiently powerful Winter-aspect while the Ragged Crossroads arts are invoked.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.raggedcrossroads", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theredbookofbrittany",
    Label: "The Red Book of Brittany",
    Desc: "A volume of ink-lore gifted to St Brandan's by Brian of Brittany, who was made Earl of Cornwall after the Norman Conquest.",
    aspects: {
      "mystery.rose": 12,
      "period.solar": 1,
      "cost.tally": 4,
      "r.inks.power": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        "'The Red Flower lies heavy, but the roots of the Watchman's Tree are constant…''",
      "reading.rose":
        "The Red Flower is described as 'the temptation of suffering'; but its suffering can apparently be allayed when 'the Copper Fruit' is enspelled with Nectar-aspect alongside Herbs and Infusions techniques. A variant of the same approach, with the Inks of Power techniques outlined here, can 'gentle Leathy into a Great Ink...'",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.inks.power", morpheffect: "spawn", level: 2 },
      ],
      "reading.rose": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.themirrorofmelancthe",
    Label: "The Mirror of Melancthe",
    Desc: "The day-book and dream-journal of Abbess Melancthe, venerated as a saint and respected as an alchemist.",
    aspects: {
      "mystery.sky": 12,
      "period.solar": 1,
      "cost.tally": 4,
      "r.sights.sensations": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Melancthe speaks longingly of 'those we would call from behind the sky…'",
      "reading.sky":
        "Melancthe claims that the Sights and Sensations arts that she describes can be used to invoke 'the Dream of a Star', when sufficient Sky-aspect is invoked to uplift an Ascendant Harmony.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.sights.sensations", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "mem.solace", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.adescentoftheshell",
    Label: "A Descent of the Shell",
    Desc: "A treatise on eggs, light, and optics by Abbess Melancthe, dazzlingly illuminated with renderings of the Abbess' visions.",
    aspects: {
      "mystery.forge": 14,
      "period.solar": 1,
      "cost.tally": 4,
      "r.purifications.exaltations": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "The book is unexpectedly challenging to read. The bright glitter of the gold-leaf illuminations acquires a migrainous quality; the eye aches and tires…",
      "reading.forge":
        "This is, most likely, the 'certain vivid book' that Melancthe once sent to Gunnhild, daughter of King Harold, which provoked in her 'a dream of eyes' but also caused her to begin to lose her sight (until she was healed by the saint-bishop Wulfstan). To complete it is a kind of test. Its double thesis, at last, seems to be that the Sun is either an eye or an egg; and so the Second Dawn will be either its opening, or its hatching.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.purifications.exaltations", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.againstvitruvius",
    Label: "Against Vitruvius",
    Desc: "A fourteenth-century treatise on esoteric mechanics and parahydraulics by Abbot Ranulph, best known now as a mason-architect.",
    aspects: {
      "mystery.sky": 6,
      "period.solar": 1,
      "cost.tally": 4,
      "r.lockworks.clockworks": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Ranulph describes how he tested some of these techniques in the construction of the Winter Tower (now called the Long Tower). He admits to unexpected consequences…",
      "reading.sky":
        "Ranulph mentions that the tower of Ely Cathedral collapsed around the time the Winter Tower was completed… although he stops short of suggesting that one was the cause of another. 'A tower falls, a tower rises,' is all he'll commit to.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.lockworks.clockworks", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.demotucorporumvetitorum",
    Label: "De motu corporum vetitorum",
    Desc: "The author rejoices in the name of 'Abelard Hubris', and the title might be translated as 'On the Forbidden Motions of Bodies' - evidently a reference to Newton's 'De Motu Corporem', published some twenty years previously.",
    aspects: {
      "mystery.sky": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.ouranoscopy": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Hubris's thesis: that stars, planets and other bodies are the proxies or even essences of the Hours, and that conjunctions and occlusions reveal the outcome of Hour-intrigues in the Mansus.",
      "reading.sky":
        "Hubris declares that the Great Comet of 1577 was the physical embodiment of the Hour named Madrugad; that It disintegrated but its fragments gravitate to bone-marrow, where they can be located even now. He insists that Ouranoscopic techniques can be used with Essential Periost and sufficient Sky to create a 'talisman gerifugic'.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.ouranoscopy", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "mem.storm", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theinstrumentsoftheheart",
    Label: "The Instruments of the Heart",
    Desc: "Sister Isabel, then Precentress of the Abbey-Church of St Brandan's, engages in dialogues with a Heart-long of a kind called 'duendrazon' that has taken partial possession of her body.",
    aspects: {
      "mystery.heart": 10,
      "period.solar": 1,
      "cost.tally": 4,
      "r.drums.dances": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "The duendrazon, like all its kind, usually dwells in the Mansus but can enter the physical world by manifesting as music, and take possession of a willing - or semi-willing - mortal who hears and loves that music… like Isabella.",
      "reading.heart":
        "Isabella records her dreams of the high Mansus, where she is accorded the duendrazon's status and titles. In return, the duendrazon enjoys what it calls 'caesura' - a welcome oblivion. 'Our mostly-blessing is that we may never cease - except <i>in caesurae</i>'. There is something more that Isabella refers to as the 'caesura magna', but she laments that her duendrazon will not tell her exactly what that might be.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.drums.dances", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [
        { id: "music.cheerful", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.journalofthomasdewulf",
    Label: "Journal of Thomas Dewulf",
    Desc: "Thomas Dewulf, 2nd Baron Brancrug, was nicknamed 'Baron Silence of Castle Silence' for his taciturn severity - most likely the origin, eventually, of the name 'Hush House'.",
    aspects: {
      "mystery.sky": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.ouranoscopy": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "There are very few personal details here. Thomas, a talented astronomer and ouranoscopist, dispassionately details his observations and the building of the observatory atop the Watchman's Tower.",
      "reading.sky":
        "As he records the passing of the Great Comet in 1577, the tone finally becomes more animated but also more obscure. Thomas cites his Dawn Period namesake, Abbot Thomas, as an authority on 'Wind, Moon, and Shell in the Heavens Inferior'. He observes: 'My predecessor knew this Truth - three Blossoms hath the Watchman's Tree: Paper; Ink; and Flame. The Great Comet, I now aver, is that Flame.'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.ouranoscopy", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.journalofwalterdewulf",
    Label: "Journal of Walter Dewulf",
    Desc: "Walter Dewulf, 3rd Baron Brancrug, was grandson of Thomas, son of the disgraced Giles, who eloped with 'Pale Hafren'. The Dewulf line might have ended here if the Seneschale Ernestine - by then over eighty - had not managed to reconcile Thomas with a dying Giles.",
    aspects: {
      "mystery.forge": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.door.wall": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "Walter, though nominally siding with the Parliamentarians, manages to stay out of the war... but in 1642, his son Bryan runs away on the night of his sixteenth birthday and joins the Royalist army. He is captured and returned to his father, who pleads for mercy and gives his parole for his son's good behaviour.",
      "reading.forge":
        "In 1648, Bryan runs away again to join a Royalist uprising. Walter writes of news that Bryan has been seen on the field of battle at Gear Camp, but that his fate is yet unknown. Walter writes one last entry about his fear for his son and the future of his family.\n\nThere the journal ends; but the extensive account of Walter's collaboration with the architect Gregory Wheelock includes usefully esoteric information.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.door.wall", morpheffect: "spawn", level: 1 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.apaleladyandaprinceofwines",
    Label: "A Pale Lady and a Prince of Wines",
    Desc: "An anonymous biography of Eva Dewulf, last of the Dewulfs, focused rather salaciously on her personal troubles and intrigues.",
    aspects: {
      "mystery.moon": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.seastories": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "Eva Dewulf is engaged to one Abraham Wheelock, but he leaves her at the altar. Furious and humiliated, she returns to Brancrug, and is not seen in London again. Three days after her departure, Abraham Wheelock's body is washed up near Gravesend. His face is so badly pecked by birds that he is only identified by his belongings. These include a waxed pouch containing a letter addressed to Wheelock, whose contents seem to show he is a spy in the pay of the Austrians. Subsequent investigations suggest that the letter is a forgery, but the matter remains obscure...",
      "reading.moon":
        "Lord Franklin Bancroft, sometimes called the Prince of Wines, begins a series of visits to Brancrug House. His relationship with Eva becomes a source of scandal. Eva is by now forty-nine, but rumours persist for years of a Dewulf-Bancroft heir. Eva's biographer claims that before her 'drowning death', her child by Bancroft was adopted by her friends the Southeys - that the child became the sister of the later Poet Laureate, Robert Southey. (No real evidence is provided in support of this claim.)",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.seastories", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.atruehistoryofvalentinedewulf",
    Label: "A True History of Valentine Dewulf",
    Desc: "Written in the third person by Valentine Dewulf. Rarely coherent, though it includes some useful footnotes on falconry and on exotic veterinary medicine.",
    aspects: {
      "mystery.sky": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.furs.feathers": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Valentine is obsessed with the meaning of the Dewulf coat-of-arms: 'On a field or, a chevron enarched gules between two corby heads erased sable in chief and a wolf sejant sable in base.'",
      "reading.sky":
        "'Long have the two birds pursued my blood, yet one is no Crow, yet it is darker. Long has the Wolf rolled itself in gold like a clovered cow, until its slobberings stain our thoughts…'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.furs.feathers", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.annalsofstbrandans",
    Label: "Annals of St Brandan's",
    Desc: "Over a hundred years of the abbey's annals, from 1230 to 1350.",
    aspects: {
      "mystery.winter": 4,
      "period.solar": 1,
      "w.latin": 1,
      "cost.tally": 4,
      "r.inks.containment": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "Three events of particular interest are recorded: an endowment by Eva de Braose, widow of the Marcher Lord Gwilym Ddu ('Black William), which enables an expansion of the Abbey; the construction of the Winter Tower, which is dedicated to the Madrugad; and the death 'by poisoning and Arts unsanctioned' of Abbess Nonna...",
      "reading.winter":
        "After Abbess Nonna's death, the 'double foundation' is dissolved and the monastery is reformed to accept only male novices. At this point the ink changes. The helpful scribe explains that for the new foundation, the Abbot has mandated stargall, not yewgall, ink. He outlines the differences (use of Inks of Containment techniques with a Sky, not Nectar, context) but doesn't trouble to explain why.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.inks.containment", morpheffect: "spawn", level: 1 },
      ],
      "reading.winter": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.themostsorrowfulendoftheladynonna",
    Label: "The Most Sorrowful End of the Lady Nonna",
    Desc: "An unauthorised account of the death of Abbess Nonna, written by Eusebia, one of the two sisters accused of having murdered Nonna through 'poisoning and Arts unsanctioned.' Eusebia, awaiting execution, intends to hide this account in her cell...",
    aspects: {
      "mystery.nectar": 4,
      "period.solar": 1,
      "w.henavek": 1,
      "cost.tally": 4,
      "r.herbs.infusions": 1,
      soph: 4,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.henavek": 1 },
      },
    ],
    xexts: {
      "reading.nectar.intro":
        "Nonna has introduced Eusebia to an unsanctioned Thunderskin-cult which meets in the caves below the Abbey; there she and others perform sacred dances for 'the Preservation of the Kingdom.'",
      "reading.nectar":
        "Eusebia claims that Nonna asked her and another sister to prepare her a leathy-draught (which can be brewed from another beverage with Herbs and Infusions techniques, and a sufficient quantity of Nectar) for a rite all three of them would perform below the Abbey. Something goes awry, Nonna is 'possessed of a tenebrous spirit', and the Abbey-brethren are forced to 'quell her with star-iron'. The other two are implicated: as scapegoats, Eusebia implies, although she acknowledges her fault also...",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.herbs.infusions", morpheffect: "spawn", level: 1 },
      ],
      "reading.nectar": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.threeflowershaththetree",
    Label: "Three Flowers Hath the Tree",
    Desc: "Ernestine Peterhans records her observations of the growths of trees and flowers around the Isle, and the omens and portents she attempts to draw from them - particularly the yew-tree in Earl Brian's Meadow, whose flowerings are sometimes eccentric.",
    aspects: {
      "mystery.nectar": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.leaves.thorns": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "Ernestine observes that in years when the tree flowers black, 'troubling Secrets arise'; when it flowers red, war and fires follow; and that no Dewulf heir has ever been born in a year when it flowers white...",
      "reading.nectar":
        "Ernestine attempts to use the tree's growths to advantage in her business affairs, but it fails. She is evidently very concerned when Hendrik Dewulf's grandson Giles runs off with 'the Pale Trollop Hafren' in a year when the tree flowers white - she begins to fear she has entirely misinterpreted all the relevant omens. She is deeply concerned for the continuation of the Dewulf line, and prays for Giles' return.",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.leaves.thorns", morpheffect: "spawn", level: 1 },
      ],
      "reading.nectar": [{ id: "mem.gossip", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theshadowinthestair",
    Label: "The Shadow in the Stair",
    Desc: "Ernestine Peterhans records her conversations with the 'little darkness' in Hush House's Stair Tenebrous, which she calls 'Donkerling'.",
    aspects: {
      "mystery.nectar": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.coil.chasm": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "Ernestine's business in the cellars of Hush House often took her up and down the Stair Tenebrous, although it is avoided by every other servant. 'Donkerling' attempted first to consume her and then to demand sacrifices from her; Ernestine consented to bring it mice, but became very stern when it asked for a 'new-drowned child...'",
      "reading.nectar":
        "'Donkerling' claims to be an imprisoned Long under the protection of 'the deepest power of the Sea'. It is prone to occasional bouts of raving about how, when it has its freedom, its patron will drown the Isle. Ernestine renders most of these long speeches as '...', but is very interested in what it can tell her about the circumstances of shipwrecks; there are hints that she may have been planning a salvage expedition.",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.coil.chasm", morpheffect: "spawn", level: 1 },
      ],
      "reading.nectar": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.cucurbitprisonerrecords1927",
    Label: "Cucurbit Prisoner Records 1927",
    Desc: "Accounts by Governor Collers' private secretary of interventions and experiments in the last years of the Cucurbit prison, focusing particularly on prisoners he believes might have Carapace Cross lineage.",
    aspects: {
      "mystery.nectar": 12,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.insects.nectars": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "Two prisoners suspected of oneiric crimes are encouraged to access their inner Carapace Cross tendencies, and develop the attributes of the Seglaz-kind ('sickle-formed pseudocrustacea'). Regrettably they lose the ability to breathe air; one dies and Collers releases the other into the sea.",
      "reading.nectar":
        "Collers describes how he's successfully induced an unstable Carapace-larva to develop into a greater form, using Insects and Nectars techniques in the context of considerable Moon-aspect to 'awaken what would rather remain hidden'. He hopes that similar techniques might be used to expedite the moral development of prisoners...",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.insects.nectars", morpheffect: "spawn", level: 2 },
      ],
      "reading.nectar": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.cucurbitprisonerrecords1928",
    Label: "Cucurbit Prisoner Records 1928",
    Desc: "Accounts by Governor Collers' private secretary of interventions and experiments in the last years of the Cucurbit prison, focusing particularly on the 'hill-children', wild Wood-things that have found a shape in the physical world.",
    aspects: {
      "mystery.scale": 12,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.hill.hollow": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "Something called a 'Singlefoot', a horned mountain-dweller, is brought back from some kind of embassy to the Grove of Green Immortals. Collers expresses his irritation that Gervinus van Lauren refuses to assist in its containment.",
      "reading.scale":
        "The Singlefoot somehow conjures an earthquake that cracks the tower and enables its escape. Collers determines that it should not have been permitted to dream while kept beneath the earth: it had access to sufficient Scale aspect to use its 'arts of Hill and Hollow' to develop an Old Moment into an Earthquake Name. He mandates above-ground confinement for all hill-children prisoners in the future.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.hill.hollow", morpheffect: "spawn", level: 2 },
      ],
      "reading.scale": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onthewindingstair",
    Label: "On the Winding Stair",
    Desc: "Gregory Wheelock, the master mason and architect employed by Walter Dewulf to construct the Winding Stair and the guest chambers in Hush House, describes a more ambitious and dangerous project.",
    aspects: {
      "mystery.knock": 8,
      "period.curia": 1,
      "w.ramsund": 1,
      "cost.tally": 2,
      "r.door.wall": 1,
      soph: 8,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.ramsund": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "Gregory marks the bricks of his Roost-touched family home, Treowen, with Ramsund, hoping to open forbidden doors…",
      "reading.knock":
        "Gregory evidently succeeds in opening a way to something he calls the 'Moon-Hall', but here his account becomes erratic. He insists that in the Moon-Hall the Horned-Axe is still an Edge-power; he hopes for an 'eternal rival', but cannot find the one he needs. The narrative is increasingly interspersed with chess notations, and ends abruptly.",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.door.wall", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.lettersfromafugitive",
    Label: "Letters from a Fugitive",
    Desc: "Lars Westergren, explorer and murderer, spent seven years escaping justice through his knowledge of byways and shortcuts in the Bounds. Throughout that time he wrote regularly to his daughter, possibly in part to taunt his pursuers.",
    aspects: {
      "mystery.rose": 6,
      "period.baronial": 1,
      "w.phrygian": 1,
      "cost.tally": 3,
      "r.path.pilgrim": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.rose.intro":
        "A year with the Légion du Seuil, patrolling the Bounds, until he deserts; a month in the Priory of Captains in Morbihan; seven days, or so he claims, in Ys behind the wave…",
      "reading.rose":
        "Cornered at last by his pursuers, Westergren writes that he will 'attempt the Paths of the Sun'. He doesn't seem sanguine about his chances, and indeed, this is his last letter. An editor's note adds that Westergren's whereabouts or end remain unknown, although he was supposedly sighted at the 'Christmas Market' in Vienna - the negotiations between invisible underworld figures that happen each year there - in 1929.",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.path.pilgrim", morpheffect: "spawn", level: 1 },
      ],
      "reading.rose": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.perugiandiaries",
    Label: "Perugian Diaries",
    Desc: "In 1907, at the age of eighteen, Christopher Illopoly left Strathcoyne's household to study theology at the University of Perugia in Italy, enrolling under the name 'Christopher Strathcoyne'.",
    aspects: {
      "mystery.sky": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.strings.songs": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "For four years, since his adoption from a Bristol orphanage, Illopoly served as Strathcoyne's pupil and protégé, but his relationship with this austere and secretive man was always complicated. His journal confides: 'I still think Fraser's intentions are good. Certainly he agrees. But I never understood the final goal of his investigations. He was never prepared to enlighten me. And good intentions or not, I can no longer bear this dream of eyes. We have agreed to part, almost amicably.'",
      "reading.sky":
        "Illopoly left Perugia in 1909 without completing his degree. He had long lost interest in his studies, and the latter half of the journal is concerned with his studies of Umbrian folk-songs, and notes towards his own compositions (which are of widely varying quality). One of the better ones, 'In the Marshes of Night', suggests he visited the site of the old Lake Fucinus near Ortucchio…",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.strings.songs", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "music.cheerful", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.keyofnight",
    Label: "Key of Night",
    Desc: "The deliberations leading to a manifesto of the 'Worms of a Scale', as recorded around 1900 in the Bar Vienna, in the cellar of the Hotel Ciervo in Noon.",
    aspects: {
      "mystery.scale": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.pentiments.precursors": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "The Worms, all of whom use grandiose <i>noms de guerre</i> like Citizen Knife and the Midnight Pilgrim, agree that all previous iterations of their movement have been feckless and treacherous, and agree that the return of the prehuman Hours - the gods-from-stone - is the true way to end 'the tyranny of Eternity.'",
      "reading.scale":
        "The Worms identify the Wheel, the Tide, the Flint, Sulochana, the Spider Door, the Excellency Gnathobasis and Wickel Inextinguishable as the Seven Necessary Pentiments that must be 'returned to every History through the Propaganda of the Deed'. This is an eccentric list and clearly a compromise; the process of thrashing it out clearly exhausts all the participants, who don't specify the necessary Deed beyond a vague reference to 'the Loopholes'.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.pentiments.precursors", morpheffect: "spawn", level: 1 },
      ],
      "reading.scale": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onresonance",
    Label: "On Resonance",
    Desc: "Experiments in ithastry by the 'sky-smith' Everett Vinzant.",
    aspects: {
      "mystery.sky": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.bells.brazieries": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Vinzant suggests percussion instruments that might be 'sympathetic' to a number of Hours and Names. Some are more likely than others…",
      "reading.sky":
        "Vinzant uncontroversially suggests drums of various materials as the sympathetic instrument for the Thunderskin and its 'ascendant duendrazones'. He proposes bells of bronze and iron for the Lionsmith and Colonel. He spends some time on the design of a 'bee-rattle' for the Malachite, but doesn't seem entirely confident of his findings...",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.bells.brazieries", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.enchiridiontragularis",
    Label: "Enchiridion Tragularis",
    Desc: "The poison-manual of the order of assassins called the Tragulari.",
    aspects: {
      "mystery.moon": 14,
      "period.dawn": 1,
      "w.greek": 1,
      "cost.tally": 5,
      "r.serpents.venoms": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "The Tragulari - 'dartsmen' - were employed by the Duties in their various incarnations to hunt down inhuman troublemakers. They developed poisons that even the immortals called Long could not withstand…",
      "reading.moon":
        "Immunity to their own poisons was a constant concern for the Tragulari, and they constantly dosed themselves with substances that might built up immunity. Perinculate, the notoriously toxic Unsanctioned Ink, can be used as a base for one of these - Serpent-Milk - with sufficient Scale and with arts of Serpents and Venoms.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.serpents.venoms", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.therepublicofteeth",
    Label: "The Republic of Teeth",
    Desc: "An eccentric political tract by Valentine Dewulf.",
    aspects: {
      "mystery.scale": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.serpents.venoms": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "Valentine suggests that rulers should be elected to govern by serpents, not their subjects, 'for the Serpent, being cold-blooded in its Nature, is incorruptible.'",
      "reading.scale":
        "Valentine's initial proposal is that a college of electors should subject themselves to the bites of venomous serpents - which he grades and details, preferring the least dangerous - and should allow the resulting deliria to guide them in their choice of people's representatives. He becomes concerned, however, by the practicalities of ensuring equal quantities of venom in each case, and gets half-way into a proposal for using birds instead in the selection process, before giving up mid-sentence.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.serpents.venoms", morpheffect: "spawn", level: 1 },
      ],
      "reading.scale": [
        { id: "mem.intuition", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.sevenfacesoficarus",
    Label: "Seven Faces of Icarus",
    Desc: "In the early 1530s, the last Abbot of St Brandan's, called 'Roaring Richard', set down his conversations with the illiterate local cunning-man, Red William.",
    aspects: {
      "mystery.sky": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.furs.feathers": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Red William describes the seven forms in which he 'goes about and under the world' - viper, cat, fox, eagle, dove, boar and crow. Abbot Richard ingeniously fits these all into a framework of Solar belief…",
      "reading.sky":
        "According to Abbot Richard, each of Red William's forms is closer to the Sun, and is increasingly 'winged with virtue'. Richard draws an analogy with the waxen wings of Icarus: hypocrisy and false virtue will melt before the Sun's heat, and so sincerity and untrammelled expression of the Self are the utmost piety. It's worth noting that only a year or two after Richard wrote this book, John Tregonwell was so appalled by the debaucheries of the monks of St Brandan's that he recommended the monastery's immediate dissolution.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.furs.feathers", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onthirstliesivoriesandlovelies",
    Label: "On Thirstlies, Ivories and Lovelies",
    Desc: "Fionna Ayrshire recounts her visits in dreams to the 'Red Church' in the Mansus, and her conversations with the Names of the Grail.",
    aspects: {
      "mystery.grail": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.resurgences.emergences": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "An Hour, Ayrshire explains, may usually only have seven Names - but since the Thirstlies, Ivories and Lovelies who usually comprise the Red Grail's Names are constantly attempting to devour one another, and the Names of other Hours, that number fluctuates.",
      "reading.grail":
        "Lovelies, the 'freshest' of the Grail's Names, usually adopt the characteristics of whatever they devour - be it an Ivory, a Thirstly, or, occasionally, an entirely different kind of Name. A practical application of the principle is described. The arts of Resurgences and Emergences, in the presence of sufficiently potent Grail-aspect, can be used to feed a Pale Mommet to its successor-doll, creating something 'notably more avid'.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.resurgences.emergences", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.bytheirmarksshallyeknowthem",
    Label: "By Their Marks Shall Ye Know them",
    Desc: "A monster-hunting initiate of the Hour named the Colonel, who identifies herself as 'Little Sophia', provides advice on finding the weak spots of Long.",
    aspects: {
      "mystery.knock": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.surgeries.exsanguinations": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "Little Sophia observes drily: 'Should one desire to slay an immortal, it is most practical to do so before they become immortal entirely.' She details the 'Marks', the changes that Long undergo as they abandon their mortal condition.",
      "reading.knock":
        "As the Lantern-long begins to abandon its flesh, its skin becomes loose, its bones soften. The Sixth Mark is to be observed thus: when the flesh between finger and thumb can be pulled to the final finger-joint…'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.surgeries.exsanguinations", morpheffect: "spawn", level: 1 },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.oblationsiniron",
    Label: "Oblations in Iron",
    Desc: "A Monster-hunting initiate of the Hour named the Colonel, who identifies herself as 'Little Sophia', records the exhibits she has rendered to the Worm Museum in the Mansus.",
    aspects: {
      "mystery.winter": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.inks.containment": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "Little Sophia has never visited the Worm Museum, or even the Mansus, in person, and evidently has no desire to do so. She mixes ink which incorporates the remains of her prey, writes her records in that ink, then burns them before the Colonel's altar…",
      "reading.winter":
        "'It is essential however to permit no drop of the ink thereby obtained to enter any portal of the body, even a break in the barrier of the skin. Should any fragment of the Worm remain viable, it might enter thereby, and the Hunt's ultimate conclusion be melancholy indeed...'",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.inks.containment", morpheffect: "spawn", level: 1 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.propheciesofglory",
    Label: "Prophecies of Glory",
    Desc: "Religious and patriotic fables collected, or composed, by William Gore.",
    aspects: {
      "mystery.lantern": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.watchmansparadoxes": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "This is much more sober in tone than Gore's previous 'Wainscot Histories'; evidently he became religious in his later years.",
      "reading.lantern":
        "Each fable describes the coming of the Second Dawn, when the Hours of the Sun will be united - but in 'Eternity Denied', 'The Vampire Light', and 'The Feast of Rays,' Gore depicts a tainted Dawn which can only be purified by a second Division of the Sun. He insists repeatedly on the dangers and temptations of a false Dawn...",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.watchmansparadoxes", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.ashapeinsmoke",
    Label: "A Shape in Smoke",
    Desc: "Ambrose Westcott's exposition on tobacco-blending and 'the Oracles of the Pipe.'",
    aspects: {
      "mystery.forge": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.pyroglyphics": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro": "The text is spotted with spark-holes throughout…",
      "reading.forge":
        "Westcott observes gnomically that a pipe might be said to manifest the Red Flower of the Watchman's Tree: 'for when Lies are burnt, Wisdom arises, and <i>vice versa</i>.'",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.pyroglyphics", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.alightintheinkwell",
    Label: "A Light in the Inkwell",
    Desc: "Musgrave, fourth of the Dewulf line, writes tentatively about the 'Covenant of Brancrug' and the legacy of the sacred inks he calls 'encausta revelationia'.",
    aspects: {
      "mystery.lantern": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.inks.revelation": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "'Words are of the First Importance. So the Book of Suns teaches. But do not Words require Ink? And is the Inkwell not then the Womb of Words?'",
      "reading.lantern":
        "Musgrave identifies 'the Ichor Auroral' as the mother of the encaustum Porphyrine. He adds that it would be blasphemous to describe the origins of the Ichor itself, although a scrawled marginal note suggests a later reader thought Musgrave was only hiding his ignorance beneath a cloak of piety.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.inks.revelation", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.itiswritten",
    Label: "It Is Written",
    Desc: "Musgrave, fourth of the Dewulf line, writes tentatively about the 'Covenant of Brancrug' and the legacy of the sacred inks he calls 'encausta potentialia'.",
    aspects: {
      "mystery.scale": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.inks.power": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "'As the Light passeth through a Prism into many Colours, so the Great Inks separateth into the Lesser Inks, and the Lesser Inks into Inks Minor…'",
      "reading.scale":
        "Musgrave coyly refuses to talk of the Great Inks (or else refuses to admit he doesn't know much about them). He insists that yewgall and stargall, which can be mixed with sufficient Nectar or Sky aspect, are sufficient for 'most befitting Purposes'.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.inks.power", morpheffect: "spawn", level: 2 },
      ],
      "reading.scale": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.etteryafter",
    Label: "Ettery After",
    Desc: "An anonymous erotic novel occasionally claimed to have been written by Eva Dewulf, although at least two duels were fought in her honour to avenge this slander.",
    aspects: {
      "mystery.winter": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.inks.containment": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "The novel graphically details Madame Ettery's various imprisonments, ravishments and escapes in the debauched Commonwealth of Tinctures and its neighbour, the pious Atrament.",
      "reading.winter":
        "It becomes apparent that many of Ettery's lovers and pursuers - Catwink, Houndsgall, Nilique - are transparent allegories for inks, and that Ettery is an embodiment of knowledge pinned to paper - to her mingled delight and dismay. The author only half-commits to the metaphor, though, and is clearly at least as interested in titillation as revelation.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.inks.containment", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theinvisibleoperaunfinishedrecording",
    Label: "The Invisible Opera (Unfinished Recording)",
    Desc: "A recording of a 1911 attempt at a performance of 'Wings within Wings', the so-called Invisible Opera.",
    aspects: {
      "mystery.sky": 12,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.strings.songs": 1,
      soph: 12,
      "record.phonograph": 1,
    },
    xexts: {
      "reading.sky.intro":
        "The singers complete <i>the Skewbald Aria</i>, <i>Beneath Our Skin</i>, and <i>A Rose in Miah</i> without incident; but the Invisible Opera is dedicated to Ferezeref the Magpie, who delights in unexpected interruptions…",
      "reading.sky":
        "The recording ends with a clamour of horrified voices, a grating metallic screech, and a soft brass buzzing that fades into burring silence…",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.strings.songs", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "music.cheerful", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.openingthesky",
    Label: "Opening the Sky",
    Desc: "An unusual recording of Verro's 'Opening the Sky', composed for the coronation of the New King, Henry IX. The record bears the Suppression stamp EXPUNGE.",
    aspects: {
      "mystery.sky": 10,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.strings.songs": 1,
      soph: 10,
      "record.phonograph": 1,
    },
    xexts: {
      "reading.sky.intro":
        "The first movement is soft, autumnal. The second unsettling, febrile. The third is bright, soaring, rapturous. The fourth movement is glassy, slithering, a tintinnabulous icicle rattle…",
      "reading.sky":
        "The fifth returns to the theme of the third, bright and rapturous once again, but this is a choral movement. It becomes apparent, though, that these are much, much too pure and high to be human voices. They recall birdsong - they recall the sweep of the windswept sky, blue turning black at the edge of the higher heaven - and they wrench the heart in a direction the Bureau does not permit.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.strings.songs", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "music.cheerful", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.lakefucinorecordings",
    Label: "Lake Fucino Recordings",
    Desc: "Recordings of the folk-dances of the Fucine Marshes.",
    aspects: {
      "mystery.heart": 12,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.drums.dances": 1,
      soph: 12,
      "record.phonograph": 1,
    },
    xexts: {
      "reading.heart.intro":
        "The wailing of flutes, the roaring of drums, cries like birds lost in the marshes…",
      "reading.heart":
        "These are the songs the Sister sang to the Witch - that the Thunderskin roared to the Sky - the songs with which the duendrazones of the Mansus keep their vigil. Once heard, they are not forgotten.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.drums.dances", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [
        { id: "music.beguiling", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.vinzantsminglings",
    Label: "Vinzant's Minglings",
    Desc: "The metallurgist and 'sky-smith' Everett Vinzant speaks of 'the sacred alloys', 'the alloys eternal', 'the alloys sufficient', 'the alloys intendant'…",
    aspects: {
      "mystery.forge": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.bells.brazieries": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "Everett describes the voices and powers of mortals and immortals based on their composition by analogy to the sounds and strengths of bells based on the metals of their casting…",
      "reading.forge":
        "Vinzant warns that the mingling of metals of 'too great a nobility' can produce 'the alloys incestuous'. He suggests very cautiously that the means used by the Sovereigns of the Leashed Flame to produce their heirs may have analogous issues: 'for though the Crime of the Sky might be circumvented, yet the Law remaineth the Law, in Spirit as in Letter'.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.bells.brazieries", morpheffect: "spawn", level: 1 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.honeythecomprehensiveguide",
    Label: "Honey: the Comprehensive Guide",
    Desc: "Harvey Hattington - pilot, polymath, confectioner - writes with great enthusiasm about the 'marvellous work of the Bee'.",
    aspects: {
      "mystery.nectar": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.insects.nectars": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "Hattington insists that all the primary aspects - Nectar, Scale, Heart, Lantern, Moth, Grail - are possessed by bees and expressed in honey. (Clearly, he points out, there are only six primary aspects, as a honeycomb has only six angles.)",
      "reading.nectar":
        "'Yewgall Ink is prepared with these techniques - but so is Skinshuck Mead, and only Skinshuck requires honey. Just as any beverage or foodstuff can be improved with the addition of honey, so any garden is improved with the presence of bees. Even those bloody Blomberende.'",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.insects.nectars", morpheffect: "spawn", level: 1 },
      ],
      "reading.nectar": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.fekrisherbary",
    Label: "Fekri's Herbary",
    Desc: "The early wisdom of Ehsan Fekri, at that point a travelling healer, much later the Secretary Salvant of the Curia of the Isle.",
    aspects: {
      "mystery.nectar": 6,
      "period.baronial": 1,
      "w.aramaic": 1,
      "cost.tally": 3,
      "r.herbs.infusions": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "As a skaptodon, Ehsan may consume only that which is found in the earth, so he's best with root-lore...",
      "reading.nectar":
        "Ehsan identifies a pale sea-weed found on the beaches of Cornwall as a useful source of Rose and Winter aspect. His tone here is a little guilty - perhaps because he's showing an interest in sea-produce, which might be thought unwise for a skaptodon, and perhaps because his proposal to name it 'Eva's Locks' suggests a tiny crush on the Pale Lady of Brancrug...",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.herbs.infusions", morpheffect: "spawn", level: 1 },
      ],
      "reading.nectar": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.kitlingripestastytreats",
    Label: "Kitling Ripe's Tasty Treats",
    Desc: "The Velvet is the Hour of secrets; and so very little is known of the - Moth-long? Nectar-long? - who ascend to immortality under her auspices. But this book (by 'Kitling's Friend') purports to be part cook-book, and part manual for immortality.",
    aspects: {
      "mystery.nectar": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.spices.savours": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "Kitling Ripe is the name usually given to the speechless 'but never silent' cat-thing that serves as a Name of the Velvet. Kitling Ripe, it seems, enjoys hunting immortals; and the Velvet is very fond of Kitling Ripe.",
      "reading.nectar":
        "The secret, it appears, is to arouse the Kitling's appetite enough to become her quarry, but not <i>quite</i> enough to be caught. The Velvet permits the game, since it culls immortals careless enough to attract attention, and keeps her Name happy. The author bemoans the loss of the Carapace Cross' savour-secrets, which apparently were particularly tempting - but suggests decent spice-substitutes, which also happen to make for excellent pigeon-pie.",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.spices.savours", morpheffect: "spawn", level: 1 },
      ],
      "reading.nectar": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebarrowchildselegies",
    Label: "The Barrowchild's Elegies",
    Desc: "The Barrowchild, a Gaulish adept who won a place in the ranks of the Ordo Limiae, enumerates the 'great shadows' laid to rest in tombs of power, and discusses their various conditions.",
    aspects: {
      "mystery.winter": 10,
      "period.baronial": 1,
      "w.latin": 1,
      "cost.tally": 3,
      "r.rhyme.remembrance": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "The Barrowchild identifies numerous modes that are neither true death nor true life: the 'vitrification of the heart'; 'the corrupt light of the Wood'; 'chor-stasis'; 'the wandering of the fet'…",
      "reading.winter":
        "The Barrowchild warns particularly of the 'avidity of trist', where a remnant-shadow's longing for change survives its sense of self and even devours its wist. That longing may draw the curious into the tomb, where the remnant-shadow changes so that it cannot be distinguished from its visitor - or that the reverse becomes true - and that it is never again possible to say whether it is the shadow or the visitor that exits the tomb.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.rhyme.remembrance", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.damascenetraditionsofthehouseoflethe",
    Label: "Damascene Traditions of the House of Lethe",
    Desc: "The House of Lethe was an order of immortals who sought obscurity, rejecting their past and future. If the author of this short text is to be believed, the initiates of the Damascene branch were much more radical than their fellows elsewhere.",
    aspects: {
      "mystery.sky": 8,
      "period.solar": 1,
      "cost.tally": 4,
      "r.sacralimiae": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "The House generally forbade any potentially procreative activities, for fear of the terrible consequences of two Long bearing a child. The Damascene order took this much further…",
      "reading.sky":
        "At one point, male initiates were required to undergo castration, and female initiates to strangle any children they had previously borne. These measures were so horrific that the Order was shaken by repeated schisms, and eventually absorbed into the local Sisterhood of the Knot as a society of healers and exorcists.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.sacralimiae", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.exorcismforgirls",
    Label: "Exorcism for Girls",
    Desc: "Simple but forceful techniques for 'rousting unbefitting spirits', written in straightforward and colourful language.",
    aspects: {
      "mystery.edge": 6,
      "period.curia": 1,
      "cost.tally": 2,
      "r.sickle.eclipse": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.edge.intro":
        "Blake seems uncertain at points whether the techniques are intended for use <i>by</i> or <i>on</i> girls. She clearly regards children as a nuisance.",
      "reading.edge":
        "Thirza's advice on the shapeless Wood-things known as Raw Prophets is typically practical: (1) discourage them with buckets of water as close as possible to freezing, and with the smoke of dried lemongrass (2) under no circumstances kiss them or receive kisses from them. (3) an effective formula is provided for laundering clothes stained with Prophet-slime.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.sickle.eclipse", morpheffect: "spawn", level: 1 },
      ],
      "reading.edge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.singlefootsongs",
    Label: "Singlefoot Songs",
    Desc: "Father Stanislav John Schaller, priest and diplomat, writes of his time on the slopes of Huashan - 'near to the Grove of the Green Immortals, but never too near.'",
    aspects: {
      "mystery.scale": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.hill.hollow": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "Schaller's relations with the Grove are cautious - it's a Library of the Tree, but under the hand of the Hour named Applebright. In time, however, Schaller comes to be more sympathetic to the Applebright, which he suggests 'causes harm only when so invited.'",
      "reading.scale":
        "The 'Singlefoots' of the title are one-horned, one-footed hill-things with sweet but powerful voices - powerful enough to 'open the mountain.' The Singlefoots sometimes trample pilgrims; sometimes heal them; sometimes coerce them to 'enter the mountain' and become Singlefoots. Schaller explains that when he found this last becoming too tempting, he decided to return to his homeland.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.hill.hollow", morpheffect: "spawn", level: 1 },
      ],
      "reading.scale": [{ id: "music.savage", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.anexorcistsfieldmanual",
    Label: "An Exorcist's Field Manual",
    Desc: "A practical guide to 'troublesome Dead', grounded in theory but with a clear focus on their disposal, by the redoubtable Detective-Ostiary Wheelock of the Suppression Bureau.",
    aspects: {
      "mystery.moon": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.edictsmartial": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'The Dead usually avoid Light - as the most immediate manifestation of Eternity, which has no place for death. However those Dead 'uplifted by gold', that is to say touched by an actinic theoplasma, happily bod about in daylight and are perhaps strongest at noon...'",
      "reading.moon":
        "'If you are dead but 'uplifted by green', that's the Ring-Yew's blessing. (The Crowned Growth offers a similar but nastier benefit.) This is how Burgeoning Risen come about, but there are different degrees of sentience and freedom depending on which growths are involved. The consciousness of one 'uplifted by green' is always greatly altered, though - they never really seem like the same person. They may have dregs of their original souls, but these are often replaced by something else. The upshot, invariably, is that they need to be set firmly on fire.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.edictsmartial", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.velletriinterviews",
    Label: "Velletri Interviews",
    Desc: "Interrogation of a man named Lacombe, a former Nocturnal Branch inspector now identified as 'terminally robigoid'.",
    aspects: {
      "mystery.heart": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.edictsinviolable": 1,
      soph: 6,
      "record.phonograph": 1,
    },
    xexts: {
      "reading.heart.intro":
        "Lacombe is not especially lucid, and the state called 'robigoia' evidently includes a malady of the lungs which causes coughing fits: he weakens audibly over the course of the interrogation. He is questioned about the disposition of various unsanctioned items recovered from a Nocturnal Branch raid on a castle at Ortucchio, in the region of the Fucine Marshes. He is, however, defiant as well as incoherent.",
      "reading.heart":
        "Lacombe insists the items have been put to good use; he derides Nocturnal Branch as 'the lackeys of Calyptra'. Alarmingly, during the last few minutes of the interrogation, he begins to insist that his interrogator should 'burn the Library'. He waxes enthusiastic about the fire he wants to see, leading to a final coughing fit after which the interview abruptly ends.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.edictsinviolable", morpheffect: "spawn", level: 1 },
      ],
      "reading.heart": [{ id: "mem.dreamt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.aninvestigationofafounderedcountry",
    Label: "An Investigation of A Foundered Country",
    Desc: "Subtitled 'Recordings from the Atlantic Coast.'",
    aspects: {
      "mystery.moon": 4,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.hill.hollow": 1,
      soph: 4,
      "record.phonograph": 1,
    },
    xexts: {
      "reading.moon.intro":
        "The phonograph initially seems to consist entirely of wave sounds, and the cries of gulls - but attention to the cries suggests they are not gulls at all - perhaps not even birds.",
      "reading.moon":
        "The bird-cries resolve to possibly-human voices, half-lost in the sound of waves. They lament the absence of a 'city unborn'; they hymn the 'ice behind the wave,' the 'amber cobbles', or perhaps 'amber corals.' The tenor of their song is melancholy but also, increasingly, menacing, as they promise the 'city irresistible.' As the voices fade, distant bells are clearly to be heard among the surf-sounds.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.hill.hollow", morpheffect: "spawn", level: 1 },
      ],
      "reading.moon": [{ id: "mem.dreamt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.recordingsfromthealthibanabyss",
    Label: "Recordings from the Althiban Abyss",
    Desc: "Recordings from a subterranean space in the mountains near Baghdad of 'conversations' between the entomologist Juliana Zawistowski and an unidentified presence.",
    aspects: {
      "mystery.scale": 4,
      "period.nocturnal": 1,
      "w.mandaic": 1,
      "cost.tally": 1,
      "r.stonestories": 1,
      soph: 4,
      "record.phonograph": 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.scale.intro":
        "Only Zawistowski's part in the 'conversations' is comprehensible to the listener. The other side consists of grating, buzzing and rumbling sounds, perhaps only rock movements or artifacts of the recording process, which Zawistowski nevertheless unhesitatingly translates.",
      "reading.scale":
        "Zawistowski seems to believe that the presence identifies itself as a Name or remnant of the lost Hour called Seven-Coils. It pleads with her to assist its rebirth; it begs her to find something for it in the city of Emesa. Towards the end of the interview, Zawistowski grows suspicious, and repeatedly accuses the presence of being not the Seven-Coils at all - only 'an inhabitant.' The recording ends in mid-sentence.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.stonestories", morpheffect: "spawn", level: 1 },
      ],
      "reading.scale": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.evastreasury",
    Label: "Eva's Treasury",
    Desc: "Eva Dewulf, last of the Brancrugs, discusses the occult and aesthetic properties of jewels and other precious minerals.",
    aspects: {
      "mystery.sky": 6,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.anbary.lapidary": 1,
      soph: 6,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Black nephrite and scolecite, for Nowhere; orichalc and amber, for Ys; amethyst for the Night Key of the Spider Door...",
      "reading.sky":
        "Eva points out - bitterly? - that there is no shortage of uplifting parables and proverbs about the saving graces of a flaw in a jewel; but that no-one, 'not jeweller, not priest, not Hour' has ever found a way to repair such a flaw.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.anbary.lapidary", morpheffect: "spawn", level: 1 },
      ],
      "reading.sky": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.adviceoncontainment",
    Label: "Advice on Containment",
    Desc: "Thirza Blake discusses ways 'to keep Wood-things out of trouble, and Mansus-things in it.'",
    aspects: {
      "mystery.knock": 4,
      "period.curia": 1,
      "cost.tally": 2,
      "r.glassblowing.vesselcrafting": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "Thirza is irritatingly light on specifics, insisting above all that the duties of an adept are the duties of a host, and that a conjured spirit should be kept in as luxurious a vessel as possible.",
      "reading.knock":
        "Thirza notes the similarities between the Lantern-long habit of 'scrining' - returning to the physical world, despite their absence of a body, by entering a mirror or light - and Poemander's techniques of confining Mansus-long to mirrors. She wonders whether Poemander himself might be lured to visit Hush House if provided with a sufficiently alluring scrine.",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.glassblowing.vesselcrafting", morpheffect: "spawn", level: 1 },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theadmonitoryautomataproject",
    Label: "The Admonitory Automata Project",
    Desc: "Footage of experimental devices under development in the Cucurbit under Governor Collers' supervision.",
    aspects: {
      "mystery.forge": 10,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.lockworks.clockworks": 1,
      soph: 10,
      film: 1,
    },
    xexts: {
      "reading.forge.intro":
        "The 'admonitory automata' are nasty little things of spring and wire, but they all have merry faces of painted tin…",
      "reading.forge":
        "The last item shown is a prototype towards something called a 'condignator', which, Collers says proudly, will allow a prisoner to 'elaborate their own punishment.' He hastens to add that he hopes that in the coming era, 'punishment' will be an entirely obsolete concept.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.lockworks.clockworks", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.oldcoppernoseandthesoftermetal",
    Label: "Old Coppernose and the Softer Metal",
    Desc: "A disgraceful compendium of ribald poetry about the habits and corruptions of Henry VIII.",
    aspects: {
      "mystery.forge": 8,
      "period.curia": 1,
      "cost.tally": 2,
      "r.bells.brazieries": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "Henry's 'Great Misfortune' - his crushing injury at a jousting bout - has left him unable to stand 'any straighter than a splintered withy'…",
      "reading.forge":
        "The most savage mockery is reserved for Henry's 'Great Debasement', where the corruption of his softer metal is supposed to have crept into the coin of the realm. The last and most serious lampoon makes seditious references to 'the Crucible Revolution'.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.bells.brazieries", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.notesonbindings",
    Label: "Notes on Bindings",
    Desc: "Gideon Dewulf, 5th Baron Brancrug, discusses techniques shared between medical suturing, tailoring, and - carefully, allusively - the binding of restless spirits.",
    aspects: {
      "mystery.heart": 10,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.stitching.binding": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "Gideon's favourite motif is 'the history of the flesh'. He insists obscurely that histories should be woven, not written.",
      "reading.heart":
        "Gideon speaks reverently of the 'wyrd-weft', which he has achieved by applying Stitching and Binding arts to a fabric in the presence of sufficient Heart. He laments however that its complexities only approach those understood by the Sisterhood of the Knot, which in turn are only a shadow of 'the true Braid of Histories'.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.stitching.binding", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [{ id: "mem.solace", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.huntingjournalsofbryandewulf",
    Label: "Hunting Journals of Bryan Dewulf",
    Desc: "Bryan Dewulf, the son of the 3rd Baron Brancrug, gives advice on hunting in the Bounds.",
    aspects: {
      "mystery.scale": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.furs.feathers": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "It is clear from Bryan's journals that he sought unorthodox trophies and put them to unorthodox uses. He was in fact hanged as a witch at the age of twenty-four, and never inherited the estate…",
      "reading.scale":
        "Bryan describes how a 'Sky-inspired fife' can be prepared using these Fur and Feathers techniques, in the presence of greater Sky-aspect, to 'make of the winds good neighbours.' It's a powerful technique to be described so casually: Bryan's main interest seems to be in ensuring good weather for his hunts.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.furs.feathers", morpheffect: "spawn", level: 2 },
      ],
      "reading.scale": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.toapalelady",
    Label: "To a Pale Lady",
    Desc: "A collection of Franklin Bancroft's letters to Eva Dewulf.",
    aspects: {
      "mystery.moon": 8,
      "period.curia": 1,
      "cost.tally": 2,
      "r.pearl.tide": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "There is a substantial body of erotic pleading and half-finished poetry, but also learned discursions on matters mythical and marine, as well as notes towards a comic opera on which Franklin and Eva were apparently collaborating.",
      "reading.moon":
        "'Do not return, O my Light, to the Sea. None of us can be what we were; that is History's curse. None of us know what we may be; that is History's gift. Your mothers, and the mothers of your mothers, are caught in Eternity's jaws like a robe-hem in a trap. It is the pearl that shines; but the tide that returns.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.pearl.tide", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thebeekeepersends",
    Label: "The Bee-Keeper's Ends",
    Desc: "Dialogues with bees and uses for honey, as erratically recorded by Ricardo Milagro, gardener of Hush House in Musgrave's time.",
    aspects: {
      "mystery.nectar": 8,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.insects.nectars": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.nectar.intro":
        "Milagro spends an entire chapter on his hatred of wasps, which he describes as 'the Vile Pretenders'.",
      "reading.nectar":
        "Milagro claims that bees retain many traditions passed down from earlier and greater branches of their species, but that they are fiercely jealous of these traditions being passed to lesser insects, and insist above all on an oath of secrecy. Tragically, therefore, he is unable to describe these more substantial and powerful traditions.",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.insects.nectars", morpheffect: "spawn", level: 2 },
      ],
      "reading.nectar": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.warmingdraughtstouplifttheheart",
    Label: "Warming Draughts to Uplift the Heart",
    Desc: "A wonderful compendium of healing tisanes compiled by Natan of Regensburg.",
    aspects: {
      "mystery.heart": 8,
      "period.curia": 1,
      "w.greek": 1,
      "cost.tally": 2,
      "r.herbs.infusions": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.heart.intro":
        "Natan and his family sought sanctuary at Brancrug but were confined to the Barber's Tower (as it was then known) by the suspicions of the monks, but won more freedom over time…",
      "reading.heart":
        "Natan records his delight on the day he was finally permitted access to Earl Brian's Meadow. He speaks very carefully of the black bird he met in its branches, and the 'treasures of music and history' that it brought him when he healed its wing.",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.herbs.infusions", morpheffect: "spawn", level: 2 },
      ],
      "reading.heart": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.ajourneytothegrove",
    Label: "A Journey to the Grove",
    Desc: "Black Elie, who much later became Damascene Matriarch of the Sisterhood of the Knot, recounts her journey to the Grove of Green Immortals.",
    aspects: {
      "mystery.grail": 10,
      "period.solar": 1,
      "cost.tally": 4,
      "r.orchids.narcotics": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.grail.intro":
        "In the Grove, Elie meets with an entity identified as 'Three Faces, Nine Colours' - who may have become her lover.",
      "reading.grail":
        "Three Faces is a Name of the Applebright, the Nowhere Hour of youth, healing and mutation. It offers Elie a form of eternal youth to take back West with her, which she rejects for certain reasons. She does promise, however, to renew their acquaintance 'in the season when the Applebright is the Witch' - not from sentiment, but rather grandly, to ensure the continuity of the Histories.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.orchids.narcotics", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thehissingkey",
    Label: "The Hissing Key",
    Desc: "An account of the ascent of the Hour called the Mother of Ants, by the Bosk-scholar Mek, of the Theban branch of the House of Lethe.",
    aspects: {
      "mystery.scale": 8,
      "period.dawn": 1,
      "w.greek": 1,
      "cost.tally": 5,
      "r.serpents.venoms": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.scale.intro":
        "Mek is not sympathetic to the Mother of Ants, who he calls 'the Milk-Thief'. He reviles her for her part in the death of the Seven-Coils, which he presents as a treacherous conspiracy.",
      "reading.scale":
        "The Milk-Thief conspires with the Ligeian Echidna and the Hour-to-be called Chiliarch (now more generally rendered as 'Colonel') to unseam the Seven-Coils with feathers and drown her in salt. The Colonel thus ascends to Hour status; the jealous Milk-Thief, once the Colonel's priestess, seduces Echidna into lending her the Hissing Key to enter the Mansus through the Savage Door, beginning her own ascent to Name and ultimately Hour.",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.serpents.venoms", morpheffect: "spawn", level: 2 },
      ],
      "reading.scale": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.musgravessketches",
    Label: "Musgrave's Sketches",
    Desc: "Musgrave, 4th Baron Brancrug, was widely mocked as 'the Bleating Baron' and 'the Lamb Dewulf', but these sketches reveal a complex, sombre inner life.",
    aspects: {
      "mystery.winter": 8,
      "period.curia": 1,
      "cost.tally": 2,
      "r.sights.sensations": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "'Art begins in Colours; grows Dappled; finally is either mostly Darkness, or mostly Light.'",
      "reading.winter":
        "Musgrave discusses the temptation of the perfectly minimal 'palest painting'. He has so far managed to resist this temptation, but does guiltily describe success in using Sights and Sensations with Winter-aspect to create first a 'chilly elixir' from flowers, which he believes he can refine further into a 'final pigment'...",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.sights.sensations", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "bittersweet.certainty", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.ambrosial!",
    Label: "Ambrosial!",
    Desc: "Ambrose Westcott's inventive - one might say pioneering, or indeed buccaneering - essays into kitchencraft.",
    aspects: {
      "mystery.forge": 8,
      "period.curia": 1,
      "cost.tally": 2,
      "r.spices.savours": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "Westcott proudly announces his intention to transform cuisine to become 'an Engine of Alchemy, a Fount of War.'",
      "reading.forge":
        "Westcott compares the ferocity of fire with the intensity of appetite as 'in essence, one essence'. A fire's ability to transform and destroy grows when it is offered the correct fuel; so too, he implies, can a sufficiently inspired appetite allow its possessor to consume 'greatly, strangely, unwisely.'",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.spices.savours", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.exercisesinthecontinuityofself",
    Label: "Exercises in the Continuity of Self",
    Desc: "Techniques proposed by the Haustorium - the most inaccessible and upsetting of the libraries of the Watchman's Tree - for 'the persistence of memory after the body is discarded'.",
    aspects: {
      "mystery.winter": 8,
      "period.curia": 1,
      "cost.tally": 2,
      "r.rhyme.remembrance": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "The soul-element wist is regarded as 'the fundamental value of the individual'. All other soul-elements, it is implied, may potentially be discarded, as can the individual itself.",
      "reading.winter":
        "The Haustorium expresses grudging respect for the Hour called Elegiast, 'who calls each of the Dead by name', but also concern over the Elegiast's subtlety when it chooses to inspire particular interpretations of Histories. The Haustorium proposes the use of Nowhere-energies in distracting or discouraging the Elegiast, in order to assure that 'the persistence of History remains unalloyed'.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.rhyme.remembrance", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theamalgamoftheredrose",
    Label: "The Amalgam of the Red Rose",
    Desc: "An account by 'Mistress Red-Flower' of the alchemical operations favoured by the House of Lancaster, also identified with the 'Sunset Road'. These operations ultimately led to their victory in the War of the Roads, but are described as 'now debased'.",
    aspects: {
      "mystery.forge": 8,
      "period.curia": 1,
      "cost.tally": 2,
      "r.meniscatereflections": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "The generals of the Houses of Lancaster and York are described as 'brother-enemies' - a term more usually associated with the dyadic, invariably twinned Edge-long…",
      "reading.forge":
        "The author's conclusion is that in the absence of the operations of the Dawn Road, the operations of Sunset inevitably became unbalanced, debased, and ultimately enfeebled. The combination of the two is described, tantalisingly, as 'the Forge's True Alloy'.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.meniscatereflections", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.ladyevasrepose",
    Label: "Lady Eva's Repose",
    Desc: "A 'meditation' on the drowning of Lady Eva Dewulf and her two grandchildren, written in the years when the estate was abandoned by Father Theo, once the Dewulf family chaplain, one of the few to remain on the Isle in those desolate years.",
    aspects: {
      "mystery.winter": 4,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.rhyme.remembrance": 1,
      soph: 4,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "'There are so many stories of her heritage, so many rumours of her persistence. We might easily choose to believe that the grand-twins escaped - even that they live yet beyond the sea - '",
      "reading.winter":
        "Father Theo has come to believe that Eva sought an escape from a family curse - the 'pale heritage' of Hafren her forebear, or the curse placed upon the line by the cunning-man Red William in the time of Hendrik Dewulf. He had begun by believing neither curse was real; but as the book concludes, he decides that he has determined to believe in them, rather than accept the three deaths as a futile tragedy. 'One does not so easily escape the long necessity of faith,' he concludes.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.rhyme.remembrance", morpheffect: "spawn", level: 1 },
      ],
      "reading.winter": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.operationsofacertainfinality",
    Label: "Operations of a Certain Finality",
    Desc: "Subtitled 'The Hammer's Sundering'. The work of an anonymous adept who violently despised the Invisible Serapeum, the library of the Watchman's Tree in Alexandria.",
    aspects: {
      "mystery.winter": 8,
      "period.curia": 1,
      "cost.tally": 2,
      "r.putrefactions.calcinations": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.winter.intro":
        "The author outlines the means they had taken to sabotage the place and its collection, which increasingly seem more poetic than effective, to the point where the whole business may in fact be some kind of allegory.",
      "reading.winter":
        "The author gloats that with the techniques of Putrefaction and Calcination, they have transformed the Library's stocks of asimel to 'a seduction of black sapphire' which will ensure the texts therein contain only 'Moon-truths'.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.putrefactions.calcinations", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thealloyofthewhiterose",
    Label: "The Alloy of the White Rose",
    Desc: "An account by 'Mistress White-Flower' of the alchemical techniques favoured by the House of York, also identified with the 'Dawn Road'. These techniques failed to bring them victory in the War of the Roads, but are 'not to be discounted'.",
    aspects: {
      "mystery.lantern": 10,
      "period.solar": 1,
      "cost.tally": 4,
      "r.purifications.exaltations": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "The author asserts proudly that the Dawn Road ends in the Second Dawn; and hints darkly that the downfall of the House of York was 'Grail-sabotage'.",
      "reading.lantern":
        "'Mistress White-Flower' urges a 'History of Uzult', where the Second Dawn may come to pass. She identifies Xanthotic Essence as Uzult's predecessor; she explains that with sufficient Lantern, Bitterblack Salts can be Purified to Xanthotic Essence, and Iotic Essence can be Exalted to Xanthotic Essence.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.purifications.exaltations", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.udrocashaas",
    Label: "Ud Rocashaas",
    Desc: "An anonymous confessional account of unsanctioned activities by the nuns of St Brandan's. The title is a Henavek phrase that might be translated as 'the spirit flees the shadowed places.'",
    aspects: {
      "mystery.scale": 10,
      "period.solar": 1,
      "w.henavek": 1,
      "cost.tally": 4,
      "r.stonestories": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.henavek": 1 },
      },
    ],
    xexts: {
      "reading.scale.intro":
        "The author writes guiltily of her dealings with hill-children and Carapace-relics - she suggests she herself has a connection with one of the Carapace-kinds. Most of these dealings are trivial, but she claims to have arranged the death of the Marcher Lord William de Braose, called Black William...",
      "reading.scale":
        "De Braose' wife, Eva, evidently seeks the Abbey's help to free her from her hated husband. Subsequently he is found in the bed-chamber of the wife of Llywelyn the Great, Prince of the Welsh, while attempting to negotiate the marriage of his daughter (also Eva) to Llywelyn's son. Llywellyn takes this badly, de Braose is hanged, the elder Eva inherits his estates and makes a substantial endowment to St Brandan's. In the author's telling, de Braose was 'innocent of all but cruelty' and the adulterer found in the bed-chamber was a shape-changing 'undergoer'...",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.stonestories", morpheffect: "spawn", level: 2 },
      ],
      "reading.scale": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.unhatchedhymns",
    Label: "Unhatched Hymns",
    Desc: "Hymns attributed to Saint Lucia the Eyeless, patron of glassworkers and Name of the Hour called Meniscate.",
    aspects: {
      "mystery.lantern": 10,
      "period.solar": 1,
      "w.sabazine": 1,
      "cost.tally": 4,
      "r.sacrasolisinvicti": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.sabazine": 1 },
      },
    ],
    xexts: {
      "reading.lantern.intro":
        "The hymns venerate every sanctioned Hour, celebrating them as the Sun Undivided, but also suggesting that each Hour may <i>become</i> the next - Madrugad to Watchman, Watchman to Wolf, and so on.",
      "reading.lantern":
        "The Hymn of the Phases celebrates the Meniscate 'from whom we do not turn', for the truth which is beauty, the beauty which is truth, and the perfect balance between the two. The Hymn of the Reflections, more puzzlingly, celebrates the Meniscate as the 'Sister of Janus, Mother of Shadow', whose 'visage wondrous in emptiness' can reveal all truths.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.sacrasolisinvicti", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "music.savage", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.anechoofsilence",
    Label: "An Echo of Silence",
    Desc: "A very heterodox history of the House of Lethe as recorded by 'the Serenity' - a Lethean adept who declares that the House of Lethe was created explicitly to prevent the ascension of any more mortals to Name or Hour status.",
    aspects: {
      "mystery.moth": 10,
      "period.solar": 1,
      "w.sabazine": 1,
      "cost.tally": 4,
      "r.sacralimiae": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.sabazine": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        "'Eternity cannot be escaped; but in History, it may be delayed,' the Serenity explains. 'The gods-who-were-flesh, by their nature, are a surrender to Eternity.'",
      "reading.moth":
        "The 'roots of the House' are said to pass into the Wood of dreams through three forests in the Bounds, identified as the Bei Ilai, the Black Cedar Forest, and the Brecheliant. 'While one tree of these may yet stand, one single tree, the Histories continue.'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.sacralimiae", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.observationsonthepeacockdoor",
    Label: "Observations on the Peacock Door",
    Desc: "Ninegala of Lagash discusses the Peacock Door, the highest door available to mortals in the Mansus: 'a rent, an imperfection, an abrasion.'",
    aspects: {
      "mystery.moon": 10,
      "period.solar": 1,
      "w.vak": 1,
      "cost.tally": 4,
      "r.sickle.eclipse": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.moon.intro":
        "Notably, the book is written in Vak, which by some accounts is another aspect of the Peacock Door itself. Ninegala addresses this by apologising courteously to the Door, and the language, at the end of every section.",
      "reading.moon":
        "The Peacock Door did not exist - Ninegala says - in the days when the gods-from-stone entered the Mansus. They used the 'Fanged Key' to open the Savage Door, a door not usually available to mortals. 'Speech, as the initiates of Chione would have it, is a wound. I fear that through that wound, the blood of the Mansus flows even now, and that one day Speech will be an end to Dream. I fear that; but I fear the alternative far more.'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.sickle.eclipse", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theascendant",
    Label: "The Ascendant",
    Desc: "The Edge-long Dardesh boasts of her victories over her brother-enemy Tareg in the days of the Shadowless Empire.",
    aspects: {
      "mystery.edge": 10,
      "period.solar": 1,
      "w.hyksos": 1,
      "cost.tally": 4,
      "r.edictsmartial": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.hyksos": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "'Sweeter than wine, than nectar is the blood of my brother. We have raised up armies one against another, we have sated the Blackbone with the sinking of our ships…'",
      "reading.edge":
        "Dardesh's boasting at length turns melancholy. An Edge-long is half a dyad; she may not defeat her hated brother-enemy without ending herself. She doesn't even want to; but she is aware, to her frustration, that she is 'a piece on the board, an axle on the ox-cart' - an essential part of the eternal engine of contention which the Lionsmith and Colonel use to sustain the world.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.edictsmartial", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thethreeandthethreekerishammanuscript",
    Label: "The Three and the Three (Kerisham Manuscript)",
    Desc: "A more recent version of a much older text, this book describes the operations of the Chancel and the Calyptra, two triads of Hours with subtle, far-reaching powers and responsibilities. It has been heavily censored, but even so contains potent secrets.",
    aspects: {
      "mystery.moon": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.edictsinviolable": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'The deepest knowledge is safeguarded by the Covenant of the Watchman's Tree, whose patrons are Calyptra - the three flowers on the Watchman's Tree - blood, soot, and snow…'",
      "reading.moon":
        "Calyptra may be known, as Night, Dawn, Eclipse. The Chancel may be known, as Threshold, Mirror, Shell. Calyptra and Chancel then are two: is Janus a third?'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.edictsinviolable", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thethreeandthethreevaticanmanuscript",
    Label: "The Three and the Three (Vatican Manuscript)",
    Desc: "A Church-authorised version of an older text, this book describes the Chancel and the Calyptra, two triads of Hours with subtle, far-reaching powers and responsibilities. It has clearly been reworked to fit Church doctrine.",
    aspects: {
      "mystery.moon": 14,
      "period.solar": 1,
      "cost.tally": 4,
      "r.edictsinviolable": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "'The deepest knowledge is forbidden to all mortals except those who seek it beneath the Watchman's Tree. It is Calyptra that planted that tree, but it is the Chancel, the Cruciate, that has elected Calyptra. Who then elected the Cruciate? Or is this, as the saying goes, 'a matter of Janus'?",
      "reading.moon":
        "'The Sister-and-Witch is Cruciate, but the Witch-and-Sister is not. Even those powers that demand a conjunction are not always conjoined. When the Sister is Nowhere, does this mean Nowhere sits <i>in crucem</i>?'",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.edictsinviolable", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theothereyeoftheserpent",
    Label: "The Other Eye of the Serpent",
    Desc: "In which the heresiarch Cygnifer attempts to resolve certain mysteries of Lightning.",
    aspects: {
      "mystery.sky": 10,
      "period.solar": 1,
      "cost.tally": 4,
      "r.anbary.lapidary": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "Cygnifer considers Lightning to be 'the division, the connection, the joined serpent.' The Serpent's Eye is said to be the Sun - but as the division and connection, it must have a second Eye.",
      "reading.sky":
        "Cygnifer considers and rejects, three times, the hypothesis that the Moon is the Serpent's other eye, insisting that it and the Sun do not share a nature. (This, as much as the Serpent business, is what got him burnt by the Church.) He proposes that the Serpent's teeth are towers, that the Serpent's mouth is a gate, that the Serpent is the 'devourer of Ys'... and 'therefore' that the Serpent's other eye is amber.",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.anbary.lapidary", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onimperfections",
    Label: "On Imperfections",
    Desc: "Poemander, light-smith and Lantern-long, describes the process of 'transinhabitation', which he calls 'a manifestation of imperfection.'",
    aspects: {
      "mystery.knock": 10,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.glassblowing.vesselcrafting": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.knock.intro":
        "Lantern-long lack bodies, and so cannot normally leave the Mansus - but they can 'steady-glint' in the physical world by establishing a 'road of glass'. Poemander notes with disgust that the order of Long called the Obliviates refer to it as 'scrining', which he considers a 'debased term'.",
      "reading.knock":
        "Poemander explains the benefits of transinhabitation - that a Lantern-long can affect the senses and thoughts of those nearby, that they can even enter their spirits, and that they can 'employ the senses of those inhabited to experience again the scent of blossom and season'. This seems to be what interests him most. He insists that a Lantern-long should only ever inhabit a mirror of silver, not silvered glass, but he declines to explain why.",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.glassblowing.vesselcrafting", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thesecretcolours",
    Label: "The Secret Colours",
    Desc: "Black Elie, disgraced Damascene Matriarch of the Sisterhood of the Triple Knot, wrote this while fleeing the 'agents of the Duty.'",
    aspects: {
      "mystery.moon": 14,
      "period.solar": 1,
      "w.greek": 1,
      "cost.tally": 4,
      "r.sickle.eclipse": 1,
      soph: 14,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "Elie writes of the 'secret colours of the Sun' - the blessed 'traces of Error' - weaknesses in sunlight, balancing principles in its reflection.",
      "reading.moon":
        "A deeper account of these secret colours, Elie reveals, was kept at a shrine to the Three Hours of the Chancel at the 'grey rock in the sea', far from the intrigues of Sisterhood and Church. It is hidden from the common eye, but can be revealed with the arts of Sickle and Eclipse.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.sickle.eclipse", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.deathsandtheirevasions",
    Label: "Deaths and their Evasions",
    Desc: "Father Stanislav John Schaller writes of the means and limitation of passage between the orders of the Mansus - Know, Long, Names, Hours. Unusually, Father John has written this book in Fucine - for, he says, especial secrecy.",
    aspects: {
      "mystery.knock": 14,
      "period.baronial": 1,
      "w.fucine": 1,
      "cost.tally": 3,
      "r.edictsliminal": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.fucine": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "He speaks <i>very</i> cautiously of the exceptions that can sometimes be made to the edicts of Chancel and Calyptra, and hints at the means by which he successfully returned a Lantern-long to flesh...",
      "reading.knock":
        "Schaller mentions most cautiously of all that he has been permitted to see a book that speaks more deeply on the matter, but that it was surrendered 'into the shadow of a covenant-stone of the Watchman's Tree.' It can be retrieved if 'the ninety-ninth wink is reserved under the Edicts Liminal.'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.edictsliminal", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [{ id: "mem.dreamt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.atowerfalls",
    Label: "A Tower Falls",
    Desc: "The phonograph is packaged in glossy amethyst purple card with the words A TOWER FALLS in nine languages on both sides. There is no other identifying information at all.",
    aspects: {
      "mystery.knock": 16,
      "period.nocturnal": 1,
      "w.vak": 1,
      "cost.tally": 1,
      "r.preliminalmeter": 1,
      soph: 16,
      "record.phonograph": 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "A recording of uncertain origin: inexplicably compelling poetry recorded by a speaker with a rasping, rumbling, impossibly deep voice… in the language called Vak, which probably isn't spoken by more than a few dozen living scholars.",
      "reading.knock":
        "The poem speaks of a four-winged war, a four-mouthed king, a four-rayed sun, a four-cornered stone. It speaks of a tide-washed hunger of the heart; it speaks, lastly, of its own conclusion, when it might, might, might be spoken in dreams before the Deep Door, by a Messenger of Histories...",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 3 },
      ],
      "reading.knock": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.atowerrises",
    Label: "A Tower Rises",
    Desc: "The phonograph is packaged in glossy card the bright pink of a dog-rose, with the words A TOWER RISES in nine languages on both sides. There is no other identifying information at all.",
    aspects: {
      "mystery.rose": 18,
      "period.nocturnal": 1,
      "w.vak": 1,
      "cost.tally": 1,
      "r.preliminalmeter": 1,
      soph: 18,
      "record.phonograph": 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.rose.intro":
        "A recording of uncertain origin: inexplicably compelling poetry recorded by a speaker with a high, sweet voice that scales up beyond human hearing… in the language called Vak, which probably isn't spoken by more than a few dozen living scholars.",
      "reading.rose":
        "The poem speaks of the Wheel that turns, the Coil that turns, the Tide that returns, Egg that returns; it speaks of a cloven sky, an opened heart, a dream of glittering eyes; speaks, lastly, of its own conclusion, when it might, might, might be spoken in dreams before the Deep Door, by a Messenger of Histories...",
    },
    xtriggers: {
      "mastering.rose": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 3 },
      ],
      "reading.rose": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thechandlerswish",
    Label: "The Chandler's Wish",
    Desc: "Formulae and instructions invoking Moth, Lantern and - exceptionally, paradoxically - the liminal and theoretical Hour called the Chandler. The author is anonymous, admitting only that they are 'one who is not yet nameless.'",
    aspects: {
      "mystery.lantern": 12,
      "period.curia": 1,
      "cost.tally": 2,
      "r.inks.revelation": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "The author makes a passionate argument that the Hour named Chandler is in fact the oldest, even though he does not exist, because he is - supposedly - the culminating event of a plan that precedes even Grail and Moth.",
      "reading.lantern":
        "'Where the Chandler has passed, the understandings of the Colonel and the Lionsmith will wrench open truth. Where the Chandler will pass, Moth will pass before him.'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.inks.revelation", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.sunsetceliaandtheendofdays",
    Label: "Sunset Celia and the End of Days",
    Desc: "An Obliviate adept identified only as 'the Emiliano' rants desperately about the part Sunset Celia played in the Intercalate, as 'the proxy of the Sun'. ",
    aspects: {
      "mystery.sky": 10,
      "period.curia": 1,
      "cost.tally": 2,
      "r.sacralimiae": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.sky.intro":
        "'Now she walks behind the Watchman, but did she always? She has many of the characteristics of a Maid-in-the-Mirror, after all. In older texts she has been called Caelia the Elagabaline. Perhaps she was his daughter? Perhaps Tryphon's sister? Perhaps, like the Watchman himself, she is like a shadow cast by two candles.'",
      "reading.sky":
        "'What must be revealed, will be revealed. Our Order's root is tainted, but its branches flourish beneath the shelter of the Watchman's greater Tree. I shall invoke its rites before the Chancel, the Cruciate, and the Rode. I shall write a final History. Or another shall write it for me.'",
    },
    xtriggers: {
      "mastering.sky": [
        { id: "x.sacralimiae", morpheffect: "spawn", level: 2 },
      ],
      "reading.sky": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thecarminepetalrevised",
    Label: "The Carmine Petal: Revised",
    Desc: "An apparently theoretical project proposed by 'Lionel' of the Society of the Noble Endeavour which might permit the imprisonment of a renegade Forge-Name. A very heavily revised edition of an earlier and even more controversial work.",
    aspects: {
      "mystery.forge": 12,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.disciplines.thehammer": 1,
      soph: 12,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "The book was evidently revised some time after the Wars of the Roads had ended, but even then this kind of discussion would have been politically difficult.",
      "reading.forge":
        "'Lionel' suggests that the Disciplines of Scar and Hammer together would be necessary to create such a prison - but that either on its own would serve to release its occupant.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.disciplines.thehammer", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thecarminepetalunexpurgated",
    Label: "The Carmine Petal: Unexpurgated",
    Desc: "A project proposed by 'Lionel' of the Society of the Noble Endeavour by which, he claims, he succeeded in creating a sanctuary for a fugitive Forge-Name. The unexpurgated version.",
    aspects: {
      "mystery.forge": 18,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.disciplines.thehammer": 1,
      soph: 18,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "At the time this book was written, a 'fugitive' Forge-Name would have been guilty of heresy, treason, or both.",
      "reading.forge":
        "'Lionel' suggests that the 'house of iron and fire' so created would include 'hollows of air and night', which would serve as a final hiding-place if the larger sanctuary were uncovered - though, he says, they could be easily revealed with invocations of the Disciplines either of Scar or of Hammer.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.disciplines.thehammer", morpheffect: "spawn", level: 3 },
      ],
      "reading.forge": [
        { id: "mem.foresight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.letterstomysuccessor",
    Label: "Letters To My Successor",
    Desc: "Advice from Gervinus van Lauren, eleventh Librarian of Hush House, to the one who will come after him.",
    aspects: {
      "mystery.lantern": 8,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.inks.revelation": 1,
      soph: 8,
      codex: 1,
    },
    xexts: {
      "reading.lantern.intro":
        "Some of the advice is practical - don't worry about losing the House Key; always close the seaward windows; make sure you feed the cockatoo. Much more of it is rarefied, specifically about the 'Inks of Revelation'. And some of it relates to van Lauren's own doom...",
      "reading.lantern":
        "'When I was another, I made a foolish wager with the Hooded Princes, to solve seven riddles. I had not realised the riddles would be set by me for the one I would become. Six are resolved. The seventh will be the end of me. It waits now in the cellar of the Gaol, where Collers still believes I can keep it confined. But the first riddle told me I would not see the Second Dawn...'",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.inks.revelation", morpheffect: "spawn", level: 2 },
      ],
      "reading.lantern": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.fromhistorytoeternity",
    Label: "From History to Eternity",
    Desc: "A contraband manual of the Inks of Revelation. The author explains in a brief foreword that she is a high-ranking officer of 'an agency of the Duties' and that, though she supports its mission, she has concerns about the long-term consequences of its work.",
    aspects: {
      "mystery.moth": 10,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.inks.revelation": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.moth.intro":
        "'All Histories braided into a golden loop; a shining ascent to Eternity. I had never imagined I could be afraid that there might be too few Truths. I could be wrong. But I'd like to leave at least one door ajar.'",
      "reading.moth":
        "'Ichor Auroral' can be brewed into an <i>encaustum terminale</i> associated with the Second History, using Inks of Revelation techniques with Rose aspect. The author warns that this is exceptionally difficult, since these techniques aren't aligned with Rose. 'But that's why I'm hoping the door will stay ajar, even once all the others are closed. I wish you luck.'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.inks.revelation", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.intuition", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.nynscagesavignontext",
    Label: "Nyn's Cages (Avignon Text)",
    Desc: "The 'merciful measures' of the witch Nyn.",
    aspects: {
      "mystery.heart": 16,
      "period.solar": 1,
      "w.ericapaean": 1,
      "cost.tally": 4,
      "r.quenchings.quellings": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.ericapaean": 1 },
      },
    ],
    xexts: {
      "reading.heart.intro":
        "Nyn's stated aim was to 'keep beyond the Walls of Sleep that business which should not trouble the world'. This includes fever, madness and delirium, as well as spirits identified as 'Devourers' and 'Deceivers'.",
      "reading.heart":
        "Nyn warns against cutting hair, cracking mirrors, spilling blood, or invoking the Edicts Liminal or Inviolable before sleep - 'for no matter how secure a lock may be, its key will surely open it.'",
    },
    xtriggers: {
      "mastering.heart": [
        { id: "x.quenchings.quellings", morpheffect: "spawn", level: 3 },
      ],
      "reading.heart": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.nynscagesbrugestextilluminated",
    Label: "Nyn's Cages (Bruges Text, Illuminated)",
    Desc: "The 'merciful measures' of the witch Nyn. This is only a partial version of the original, but it contains illustrations by Nyn's pupil, Mabelie of Bruges, which supplement the original.",
    aspects: {
      "mystery.winter": 10,
      "period.solar": 1,
      "w.ericapaean": 1,
      "cost.tally": 4,
      "r.quenchings.quellings": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.ericapaean": 1 },
      },
    ],
    xexts: {
      "reading.winter.intro":
        "Nyn's stated aim was to 'keep beyond the Walls of Sleep that business which should not trouble the world'. This includes fever, madness and delirium as well as spirits identified as 'Devourers' and 'Deceivers'. (Mabelie clearly enjoyed drawing both Devourers and Deceivers, but was less interested in illustrating disease symptoms.)",
      "reading.winter":
        "Nyn warns against invoking the Edicts Liminal or Inviolable before sleep - 'for no matter how secure a lock may be, its key will surely open it.' Mabelie has helpfully illustrated this by drawing a sleepwalker clambering through an open window, about to leap into the jaws of a sea-monster. The sea-monster is goggle-eyed with happy anticipation.",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.quenchings.quellings", morpheffect: "spawn", level: 2 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.experimentbeyondsight",
    Label: "EXPERIMENT BEYOND SIGHT",
    Desc: "Ilse Bischoff's bewildering, widely derided final film.",
    aspects: {
      "mystery.moon": 8,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.edictsinviolable": 1,
      soph: 8,
      film: 1,
    },
    xexts: {
      "reading.moon.intro":
        "The film is an unrelenting fusillade of apparently unrelated images - birth, mirrors, grain-threshers, animal attacks, crowds at stations… but a single image appears again and again, dominating the rush of images until the film is only a single static shot.",
      "reading.moon":
        "The repeating image is a view through a grimy window-pane of a nearby tower. There is a vague impression of flickering light around the tower-top. Just as the film ends, smoke plumes from the tower. That's it. Nothing of note at all… unless one happens to recognise the view of the Crucible Tower from the window of the Librarian's Quarters, and unless one happens to know that Ilse Bischoff never visited Brancrug, or even Britain, before her untimely death.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.edictsinviolable", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.coloursintheliver",
    Label: "COLOURS IN THE LIVER",
    Desc: "Ilse Bischoff's most controversial film, blamed for outbreaks of cannibalistic killings in Tiflis and Leipzig.",
    aspects: {
      "mystery.grail": 6,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.resurgences.emergences": 1,
      soph: 6,
      film: 1,
    },
    xexts: {
      "reading.grail.intro":
        "A gang of heretic priests agrees to strike the 'fear of the Change' into the infuriatingly atheist citizenry. At night they dress as four-winged angels and crawl down chimneys and through windows to savage members of their congregation.",
      "reading.grail":
        "The priests are caught by unidentified figures wearing heavily mandibled masks, like grotesque caricatures of ants. They are force-fed larvae: a final caption indicates that at dawn the larvae will hatch…",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.resurgences.emergences", morpheffect: "spawn", level: 1 },
      ],
      "reading.grail": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theopenhead",
    Label: "THE OPEN HEAD",
    Desc: "Ilse Bischoff's hallucinatory quasi-documentary, notionally about the Greco-Turkish War of the previous decade.",
    aspects: {
      "mystery.edge": 8,
      "period.nocturnal": 1,
      "w.hyksos": 1,
      "cost.tally": 1,
      "r.disciplines.thescar": 1,
      soph: 8,
      film: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.hyksos": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "A hammer-armed Turk and a sword-armed Greek pursue each other through the Pindus, setting traps for each other, robbing peasants, chalking insulting graffiti on walls. The tone is notionally anti-war, but any scholar of the invisible arts would recognise the Edge-hour subtext... and the Hyksos messages in the graffiti.",
      "reading.edge":
        "The sword-wielder methodically fills a church with candles; lights each one; strips, again, to the waist to reveal his terrible scars; his chest somehow swings open like a cupboard door to reveal a blood-drenched book… and the film ends.",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thescar", morpheffect: "spawn", level: 2 },
      ],
      "reading.edge": [
        { id: "mem.revelation", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thedeathsofthemoon",
    Label: "The Deaths of the Moon",
    Desc: "A Haustorial tract on various forms of survival after death.",
    aspects: {
      "mystery.moon": 8,
      "period.baronial": 1,
      "w.killasimi": 1,
      "cost.tally": 3,
      "r.snowstories": 1,
      soph: 8,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.killasimi": 1 },
      },
    ],
    xexts: {
      "reading.moon.intro":
        "When the heart no longer beats, the Grail may keep the spirit in the body, and an appetite is indicated to sustain. (Alukites are the best-known, but not the only, of this nature). This is the waning-moon mode…",
      "reading.moon":
        "The full-moon mode is the intensification of one element of the soul to the point where ordinary sustension is unstable. Our Protector, the Generous of Hosts, began of this nature, and its generosity remains ungentle. It is possible for the body's health or the heart's chor to outpace the other elements, so that a static mode becomes impossible and growth proceeds in dramatic stages until balance remanifests...",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.snowstories", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thequeensturn",
    Label: "The Queen's Turn",
    Desc: "A sixteenth-century translation of the Barrowchild's account of 'Lagiah's Turn' - when Lagiah, the Queen Unsated, was offered the opportunity to enter the service of the Hours of the Triple Knot, as long as she repudiated her brother-lover Antaios.",
    aspects: {
      "mystery.moon": 10,
      "period.baronial": 1,
      "cost.tally": 3,
      "r.hill.hollow": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.moon.intro":
        "Lagiah accepts, setting aside 'the arts of the low red sun' associated with Antaios. She bargains, however, for freedom for her daughters. The Hours of the Triple Knot accept casually, knowing that Lagiah has devoured her daughters - but wily Lagiah has decided, 'in the secret hollow of her heart', that she will adopt any who ask, if they can prove their fierceness.",
      "reading.moon":
        "The traditions described here - the ones generally described as 'Hill and Hollow' - are associated with Lagiah before her Turn; but now that she's a Name of the Red Grail, they might also be safely used before an altar of the Triple Knot.",
    },
    xtriggers: {
      "mastering.moon": [
        { id: "x.hill.hollow", morpheffect: "spawn", level: 2 },
      ],
      "reading.moon": [{ id: "mem.salt", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.skinofsilver",
    Label: "Skin of Silver",
    Desc: "The epic of the final battle of the Lionsmith with the remnant-giant Antaios.",
    aspects: {
      "mystery.forge": 10,
      "period.dawn": 1,
      "w.mandaic": 1,
      "cost.tally": 5,
      "r.disciplines.thehammer": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.forge.intro":
        "As always, the Lionsmith drew his strength from metal, and Antaios from stone… but the Lionsmith began to suspect also that this time, Antaios was drawing power from the Moon.",
      "reading.forge":
        "The Lionsmith beseeches the Three for their assistance, and the Meniscate favours him with a skin of silver, like water, like mercury, so he too can drink power from the Moon; for, she whispers, he too will one day be drawn into a perfect balance.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.disciplines.thehammer", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.onethousandthreads",
    Label: "One Thousand Threads",
    Desc: "The fate-supplications of the Matriarch of the Well, recorded in darkness by her weavers and her daughters…",
    aspects: {
      "mystery.grail": 12,
      "period.dawn": 1,
      "w.killasimi": 1,
      "cost.tally": 5,
      "r.tridesmahiera": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.killasimi": 1 },
      },
    ],
    xexts: {
      "reading.grail.intro":
        "The Well is long choked with rubble and ashes; the Matriarch long gone. She predicted her own end even as these supplications were recorded, but their power remains.",
      "reading.grail":
        "Speak these supplications before an altar whose roots have drawn from a sacred spring; perhaps another root will rise towards daylight.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.tridesmahiera", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thecarbonekschism",
    Label: "The Carbonek Schism",
    Desc: "The order of Obliviates, on the brink of schism, assembles in a Bounds-house identified only as 'Carbonek', after the Fisher-King's castle of legend. There the Know and the Long of the order debate their long policy of non-involvement in 'matters of Feather and Scale'.",
    aspects: {
      "mystery.moth": 6,
      "period.baronial": 1,
      "w.sabazine": 1,
      "cost.tally": 3,
      "r.sacralimiae": 1,
      soph: 6,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.sabazine": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        "One of their number - the one recording their debates - describes how in desperation he has found some kind of solution in a 'volume of transcendent heresy', but dares not pursue it alone. He convinces a handful of other Obliviates to depart Carbonek with him, while the others cross the sea to Port Noon.",
      "reading.moth":
        "In the last few pages, the author reveals himself as the Know-adept Ambrose Westcott, writing in an uncharacteristically serious mode. He informs any who should find this work that he has returned the book he spoke of to 'Abbot Geffrey's Secret', where it can be retrieved with certain invocations of the Sacra Limiae. He hopes that one who has read this far, and understood this much, will find a History to determine.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.sacralimiae", morpheffect: "spawn", level: 1 },
      ],
      "reading.moth": [{ id: "mem.hindsight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thewoundwounds",
    Label: "The Wound-Wounds",
    Desc: "'A history of a hundred wars', sewn into a design of metallic threads that pursues itself across every page...",
    aspects: {
      "mystery.edge": 18,
      "period.curia": 1,
      "w.killasimi": 1,
      "cost.tally": 2,
      "r.disciplines.thescar": 1,
      soph: 18,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.killasimi": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "Darius and Alexander at Issus - the incandescent strivings of the Houses of Lancaster and York - the Second Worm War - ",
      "reading.edge":
        "The final page of the book depicts the first battles of a war among Hours, but the threads fray into alternatives, unbraiding from History. One of those threads is a coarse iron wire whose twists suggest the Disciplines of the Scar invoked before a subterranean configuration of iron, fire, and night...",
    },
    xtriggers: {
      "mastering.edge": [
        { id: "x.disciplines.thescar", morpheffect: "spawn", level: 3 },
      ],
      "reading.edge": [{ id: "mem.regret", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.glimmerings",
    Label: "Glimmerings",
    Desc: "An anonymous prison diary written by a dreamer convicted of 'oneiric irresponsibility' and confined to the Cucurbit.",
    aspects: {
      "mystery.forge": 10,
      "period.nocturnal": 1,
      "cost.tally": 1,
      "r.sights.sensations": 1,
      soph: 10,
      codex: 1,
    },
    xexts: {
      "reading.forge.intro":
        "The prisoner is plainly terrified and bewildered by their situation, and has been unable to wrangle a coherent explanation out of anyone. But the dreams keep coming, and they keep writing them down…",
      "reading.forge":
        "Snow; broken mirrors; half-heard sky music; flowers of white, red and black; a blood-streaked winter dawn... the most notorious signifiers of oneiric risk, fantastically vivid and detailed. No wonder they were locked up. Their final recorded dream is of a 'worm-jewel' beneath Brancrug Isle, which they open with a key carved from their finger-bone.",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.sights.sensations", morpheffect: "spawn", level: 2 },
      ],
      "reading.forge": [
        { id: "bittersweet.certainty", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thewonderfulshape",
    Label: "The Wonderful Shape",
    Desc: "Blessings and invocations of the Triple Knot recorded at a sanctuary in Cyprus notable for its weavers, sculptors, and gardeners.",
    aspects: {
      "mystery.grail": 10,
      "period.dawn": 1,
      "w.killasimi": 1,
      "cost.tally": 5,
      "r.tridesmahiera": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.killasimi": 1 },
      },
    ],
    xexts: {
      "reading.grail.intro": "'The roots go deep. The knots remain…'",
      "reading.grail":
        "The final invocation is one for the 'Restoration of the Roots', to be spoken before an altar of the Triple Knot - but, puzzlingly, it should not be spoken by any priestess of the Knot, or even by one who has been initiated into their Mysteries.",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.tridesmahiera", morpheffect: "spawn", level: 2 },
      ],
      "reading.grail": [
        { id: "mem.satisfaction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.thegrandpassageofthehours",
    Label: "The Grand Passage of the Hours",
    Desc: "The Limian Burzghash's gazetteer of the patterns and rhythms of the Hours' progress through the Mansus, from Concursum to Malleary, Malleary to Wood…",
    aspects: {
      "mystery.knock": 12,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.door.wall": 1,
      soph: 12,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "'Each century in the Mansus is a great feasting-hall. In each ninety-ninth year, the hall falls silent; the Elegiast sits alone at the feast.'",
      "reading.knock":
        "'There are paths in the Mansus that only the Sun has walked. In the time of the Sun's Division, who will know them? When the Second Dawn comes, who will walk them?'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.door.wall", morpheffect: "spawn", level: 2 },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.themessengerawaitingherdestination",
    Label: "The Messenger Awaiting Her Destination",
    Desc: "The Limian Burzghash records his prophecies of a City Unbuilt, and entreaties to its Herald.",
    aspects: {
      "mystery.forge": 16,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.door.wall": 1,
      soph: 16,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.forge.intro":
        "'The Herald may never arrive at the City Unbuilt. The City may never be built without the Herald's Message…'",
      "reading.forge":
        "The Herald is finally identified as the 'Twelfth Initiate of the House of Silence'. The foundation-stone will be taken from the House of Silence, Burzghash suggests, to become the foundation-stone of the City Unbuilt…",
    },
    xtriggers: {
      "mastering.forge": [
        { id: "x.door.wall", morpheffect: "spawn", level: 3 },
      ],
      "reading.forge": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.theroadtojanus",
    Label: "The Road to Janus",
    Desc: "The Limian Burzghash makes a series of prophecies regarding 'the Initiates of the House of Silence', with intricate, if unhelpful, predictions on their passage through the House.",
    aspects: {
      "mystery.knock": 18,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.door.wall": 1,
      soph: 18,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "'The Sixth Initiate is Priest and Key, Gate and Church. He shall cross the sea and open the tide. He shall not be the Eleventh, yet shall there be Seven between them. In the first Year of his Time, the Flower-Door is opened…'",
      "reading.knock":
        "'The Twelfth Initiate is Salvation and Wrack, Steed and Rider, who chooseth one Blossom of Three, who casteth away the Key and whom the Key shall not cast away, who comes after the Flame and before the Snow….'",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.door.wall", morpheffect: "spawn", level: 3 },
      ],
      "reading.knock": [{ id: "mem.pattern", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.greenjaspertablet",
    Label: "Green Jasper Tablet",
    Desc: "Supposedly copied from a tablet of green jasper which serves as the Covenant-stone of the Monastery of the Fifth Cup - the token which gives that Library shelter beneath the Watchman's Tree.",
    aspects: {
      "mystery.nectar": 10,
      "period.dawn": 1,
      "w.cracktrack": 1,
      "cost.tally": 5,
      "r.rites.theroots": 1,
      soph: 10,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.cracktrack": 1 },
      },
    ],
    xexts: {
      "reading.nectar.intro":
        "'Humankind hid itself from the Glory's light in the Roots of the Watchman's Tree. But for every chink we stuffed with cloth and hair, we opened another, and the light crept in. Until we looked below, into Nowhere, and the Eye of the Mare-in-the-Tree winked Red...'",
      "reading.nectar":
        "The Tablet expounds the dangers of inviting in the Nowhere-Hour called the Mare-in-the-Tree, and also of forbidding her entry, since she can never entirely be denied. Along the way, it reveals the secret of the Sacrament Malachite ('in which the merry Mare merrily spits') - brewed with the Rites of the Roots from the numa-pear, in the presence of sufficient Nectar-aspect.",
    },
    xtriggers: {
      "mastering.nectar": [
        { id: "x.rites.theroots", morpheffect: "spawn", level: 2 },
      ],
      "reading.nectar": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.whitejadetablet",
    Label: "White Jade Tablet",
    Desc: "Supposedly copied from a tablet of white jade which serves as the Covenant-stone of the Grove of the Green Immortals - the token which gives that Library shelter beneath the Watchman's Tree.",
    aspects: {
      "mystery.moth": 14,
      "period.dawn": 1,
      "w.cracktrack": 1,
      "cost.tally": 5,
      "r.rites.theroots": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.cracktrack": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        "'When humankind emerged from the weft of the Roots, we were smeared with the filth of crumbled ages. The foolish sought to wash it from themselves, but our skins were yet soft, and fell easily from us…'",
      "reading.moth":
        "The Tablet expounds the dangers (and pleasures) of abandoning appearances in search of essence. Along the way, it reveals the secret of Skinshuck Mead, which can be brewed from honey by application of the Rites of the Roots, if enough Moth-aspect is present.",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.rites.theroots", morpheffect: "spawn", level: 2 },
      ],
      "reading.moth": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.xenodiceneodes",
    Label: "Xenodicene Odes",
    Desc: "Poetry attributed to Xenodice, Name of the Horned-Axe.",
    aspects: {
      "mystery.knock": 21,
      "period.dawn": 1,
      "w.vak": 1,
      "cost.tally": 5,
      "r.preliminalmeter": 1,
      soph: 21,
      codex: 1,
      infinitereadable: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.vak": 1 },
      },
    ],
    xexts: {
      "reading.knock.intro":
        "In the House of Lethe's heyday, it held an annual competition where its initiates competed to produce the best ode in Xenodice's honour. So there are still a lot of odes out there.",
      "reading.knock":
        "It has never been clear why the Letheans, who avoided traffic with the Hours with the occasional exception of the Elegiast, would devote effort to a Name of the Horned-Axe. Perhaps Xenodice was just a suitably challenging subject…",
    },
    xtriggers: {
      "mastering.knock": [
        { id: "x.preliminalmeter", morpheffect: "spawn", level: 3 },
      ],
      "reading.knock": [
        { id: "confounding.parable", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.quirinicmeditations",
    Label: "Quirinic Meditations",
    Desc: "Battle-apothegms of the Name Quirinus.",
    aspects: {
      "mystery.lantern": 21,
      "period.solar": 1,
      "w.ericapaean": 1,
      "cost.tally": 4,
      "r.auroralcontemplations": 1,
      soph: 21,
      codex: 1,
      infinitereadable: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.ericapaean": 1 },
      },
    ],
    xexts: {
      "reading.lantern.intro":
        "Quirinus of the Two-Headed Spear is one of the more approachable Names of the Colonel - still grave and inflexible, but more inclined to divulge occasionally useful advice…",
      "reading.lantern":
        "When Quirinus was honoured in Rome, he was sometimes associated with the enigmatic god Janus - especially in the rites of the Unnumbered Legion. The advice in these pages doesn't confirm any such connection, but does suggest a more philosophical side to this warrior-Name.",
    },
    xtriggers: {
      "mastering.lantern": [
        { id: "x.auroralcontemplations", morpheffect: "spawn", level: 3 },
      ],
      "reading.lantern": [
        { id: "mem.contradiction", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.medusancommentaries",
    Label: "Medusan Commentaries",
    Desc: "Haustorial discussions of Medusa's histories.",
    aspects: {
      "mystery.grail": 21,
      "period.baronial": 1,
      "w.killasimi": 1,
      "cost.tally": 3,
      "r.pentiments.precursors": 1,
      soph: 21,
      codex: 1,
      infinitereadable: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.killasimi": 1 },
      },
    ],
    xexts: {
      "reading.grail.intro":
        "'Medusa's Riddle: 'What Is Not Seen?' She might be the oldest of her kind still living; and she is dead. Once she held the key to the door in the Wood; and though perhaps she lost it, she holds it still…",
      "reading.grail":
        "The scholars of the Haustorium seem to suggest that just as there are always seven Ligeians but they are not always the same, there is always one Medusa but she is not always the same. There does seem to be more of a common thread of identity than simply a series of titled successors, and here the Haustorium's argument becomes harder to follow - especially because the Haustorium and its members themselves have an unusual concept of individual identity...",
    },
    xtriggers: {
      "mastering.grail": [
        { id: "x.pentiments.precursors", morpheffect: "spawn", level: 3 },
      ],
      "reading.grail": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.echidnalia",
    Label: "Echidnalia",
    Desc: "Part genealogy, part taxonomy, part family gossip - a closely detailed, highly specialised account of one branch of the complex brood of children associated with the Ligeian Echidna.",
    aspects: {
      "mystery.scale": 21,
      "period.curia": 1,
      "w.cracktrack": 1,
      "cost.tally": 2,
      "r.stonestories": 1,
      soph: 21,
      codex: 1,
      infinitereadable: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.cracktrack": 1 },
      },
    ],
    xexts: {
      "reading.scale.intro":
        "The gods-who-were-Stone knew the uses of the Biting Key, and now Echidna claims it. She has birthed so many children, and some yet survive.",
      "reading.scale":
        "Echidna's children are of two kinds: 'born' and 'won'. She seems to have had some success in winning over the creations of other powers to her service. In particular she has a habit of giving sustenance to the labhites, who consume what is found in the sky, and seducing them away from the Lionsmith...",
    },
    xtriggers: {
      "mastering.scale": [
        { id: "x.stonestories", morpheffect: "spawn", level: 3 },
      ],
      "reading.scale": [{ id: "mem.impulse", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.naeniansketches",
    Label: "Naenian Sketches",
    Desc: "Travelogues and studies exchanged by raggies and ghouls - that is, the Long who've ascended under the patronage of the Sun-in-Rags and those who won the attention of the Elegiast.",
    aspects: {
      "mystery.winter": 21,
      "period.nocturnal": 1,
      "w.sabazine": 1,
      "cost.tally": 1,
      "r.sights.sensations": 1,
      soph: 21,
      codex: 1,
      infinitereadable: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.sabazine": 1 },
      },
    ],
    xexts: {
      "reading.winter.intro":
        "'Naenia is the Elegiast's Name, but she has always stood high in the Sun-in-Rags' favour; and she offers her consolations also to those Long who have taken him as a patron...'",
      "reading.winter":
        "Both kinds of Winter-long know that their death is only deferred, so both tend to seek and treasure beauty. Here they detail their purest experiences - the mountain after the avalanche, the peace after the storm-wreck, the gusted silence of the sun-shadowed hill...",
    },
    xtriggers: {
      "mastering.winter": [
        { id: "x.sights.sensations", morpheffect: "spawn", level: 3 },
      ],
      "reading.winter": [
        { id: "mem.hindsight", morpheffect: "spawn", level: 1 },
      ],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.plantagenetmysteries",
    Label: "Plantagenet Mysteries",
    Desc: "Exhaustive attempts to analyse and renew the Blood of the Sun by one of the numerous occult societies, after the manner of the Endeavour Club, for whatever squalid political motive.",
    aspects: {
      "mystery.moth": 21,
      "period.baronial": 1,
      "w.mandaic": 1,
      "cost.tally": 2,
      "r.transformations.liberations": 1,
      soph: 21,
      codex: 1,
      infinitereadable: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.mandaic": 1 },
      },
    ],
    xexts: {
      "reading.moth.intro":
        "'…until the King fell beneath his great Steed in its Utmost Configuration. By the time he could be cut free, his Alloy had already begun to tarnish, and that Day was ever afterwards known as his Great Misfortune…'",
      "reading.moth":
        "'Since the Sun and the Forge had both bestowed their Favour, one could not remove it without the other - or would not. But neither could the Alloy be renewed by any Power in the Mansus. So the King looked beyond the Mansus - beyond the Bounds…'",
    },
    xtriggers: {
      "mastering.moth": [
        { id: "x.transformations.liberations", morpheffect: "spawn", level: 3 },
      ],
      "reading.moth": [{ id: "mem.foresight", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
  {
    ID: "t.journalofsirdavidgreene1903",
    Label: "Journal of Sir David Greene, 1903",
    Desc: "A confidential journal kept by Greene, former Nocturnal Branch Superindent but, by 1903, Librarian of the House. Greene has kept his journal in Hyksos, presumably as an extra measure of privacy.",
    aspects: {
      "mystery.edge": 14,
      "period.nocturnal": 1,
      "w.hyksos": 1,
      "cost.tally": 4,
      "r.sharps": 1,
      soph: 14,
      codex: 1,
    },
    slots: [
      {
        id: "language",
        label: "Language",
        actionid: "*consider",
        required: { "s.hyksos": 1 },
      },
    ],
    xexts: {
      "reading.edge.intro":
        "In 1903, the House co-operated closely with the Branch, and Greene was the public face of that co-operation. In private, however, Greene is clearly disillusioned with the Branch, which he increasingly regards as irresponsible. He is especially concerned about the construction of a 'suppressive mechanism' beneath Brancrug Gaol, and its likely occupant. /'Hours and Names are dangerous,' he writes, 'but at least our dealings have the benefit of long experience. An Hour who acts before she is born - who leaves those places she has never entered - if her Names walk the world already, how can we understand their courses and their capabilities?'",
      "reading.edge":
        "The last entries alternate between calculations (tides, dates, financial calculations) and expressions of fevered longing for 'A.F'. It seems that Greene intends to run away with A.F., and some of the calculations imply that he has been embezzling funds to that end, under cover of the chaos caused by the Ortucchio Incident and the subsequent reorganisation of Nocturnal Branch into the Suppression Bureau... The entries, however, stop abruptly before the year's end. It's not clear whether Greene did in fact abscond with funds and fond friend, or whether he abandoned this journal for other reasons.",
    },
    xtriggers: {
      "mastering.edge": [{ id: "x.sharps", morpheffect: "spawn", level: 2 }],
      "reading.edge": [{ id: "mem.fear", morpheffect: "spawn", level: 1 }],
    },
    inherits: "_book",
    unique: true,
    audio: "Book",
    manifestationtype: "Book",
  },
];
