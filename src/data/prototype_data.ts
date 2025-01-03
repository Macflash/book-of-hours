export const PrototypeData = [
  {
    id: "_",
    noartneeded: true,
    label: "Prima Materia",
    desc: "FNOR_, as the saying goes, is not as it was.",
    comments: "The THING root class for THINGS",
    ManifestationType: "Thing",
    aspects: { considerable: 1, thing: 1 },
    slots: [
      {
        id: "examine",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: -1, malady: 1 },
      },
    ],
  },

  {
    id: "_ability.fatigued",
    aspects: { ability: 1, fatigued: 1 },
    noartneeded: true,
  },
  {
    id: "_ability.setup",
    aspects: { memory: 1, "ability.setup": 1 },
    noartneeded: true,
  },

  {
    id: "_assistance",
    noartneeded: true,
    aspects: { assistance: 1, introduction: 1 },
    xtriggers: {
      fatiguing: "departure.assistance",
      departing: "departure.assistance.longer",
    },
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description: "Work alongside them, or provide something they can use.",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },
  {
    id: "_assistance.usescandles",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of Candles.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          candle: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },

  {
    id: "_assistance.usescooperative",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of an co-operative beast - who will, with luck, be returned to you unharmed.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          cooperative: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },

  {
    id: "_assistance.usesfabric",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of Fabric.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          fabric: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },
  {
    id: "_assistance.usesflower",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of Flowers.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          flower: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },
  {
    id: "_assistance.usesfuel",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of Fuel.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          fuel: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },

  {
    id: "_assistance.usesmetal",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of Metals.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          metal: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },
  {
    id: "_assistance.usessound",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of Sound - that is, they can use a Sound card and another Memory card in the same day.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          sound: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },

  {
    id: "_assistance.usesomen",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of an Omen - that is, they can use an Omen card and another Memory card in the same day.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          omen: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },

  {
    id: "_assistance.usespigment",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of Pigments.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          pigment: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },
  {
    id: "_assistance.useswood",
    inherits: "_assistance",
    slots: [
      {
        id: "collaborate",
        label: "Collaborate",
        description:
          "Work alongside them, or provide something they can use. [This assistant can also make use of Wood.]",
        actionid: "talk",
        required: {
          memory: 1,
          ability: 1,
          tool: 1,
          sustenance: 1,
          beverage: 1,
          wood: 1,
        },
        forbidden: { fatigued: 1, malady: 1 },
      },
    ],
  },

  {
    id: "_beast.herbivore",
    noartneeded: true,
    aspects: { beast: 1, considerable: 1, comfort: 1 },
    ManifestationType: "Comfort",
    slots: [
      {
        id: "examine",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: 1, malady: 1 },
      },

      {
        id: "handle",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "talk",
        required: { ability: 1 },
        forbidden: { fatigued: 1, malady: 1 },
      },
      {
        id: "feed",
        label: "Food",
        description: "[Add any appropriate Sustenance card.]",
        actionid: "talk",
        essential: { sustenance: 1 },
        forbidden: { remains: 1, egg: 1 },
      },
    ],
  },

  {
    id: "_beast.carnivore",
    noartneeded: true,
    aspects: { beast: 1, considerable: 1, comfort: 1 },
    ManifestationType: "Comfort",
    slots: [
      {
        id: "examine",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: 1, malady: 1 },
      },
      {
        id: "handle",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "talk",
        required: { ability: 1 },
        forbidden: { fatigued: 1, malady: 1 },
      },
      {
        id: "feed",
        label: "Food",
        description: "[Add any appropriate Sustenance card.]",
        actionid: "talk",
        essential: { sustenance: 1 },
        required: { remains: 1, egg: 1 },
      },
    ],
  },

  {
    id: "_beast.carnivore.plusmilk",
    noartneeded: true,
    aspects: { beast: 1, considerable: 1, comfort: 1 },
    ManifestationType: "Comfort",
    slots: [
      {
        id: "examine",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: 1, malady: 1 },
      },
      {
        id: "handle",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "talk",
        required: { ability: 1 },
        forbidden: { fatigued: 1, malady: 1 },
      },
      {
        id: "feed",
        label: "Food",
        description: "[Add any appropriate Sustenance card.]",
        actionid: "talk",
        essential: { sustenance: 1 },
        required: { remains: 1, egg: 1, "milk.aspect": 1 },
      },
    ],
  },

  {
    id: "_beverage",
    noartneeded: true,
    aspects: { beverage: 1, restorative: 1 },
    xtriggers: {
      fatiguing: "dregs",
      "fatiguing.ingredients": "dregs",
      "fatiguing.beverage": "dregs",
    },
    inherits: "_liquid",
  },
  {
    id: "_beverage.raveline",
    noartneeded: true,
    aspects: { "beverage.raveline": 1 },
    inherits: "_beverage",
  },

  {
    id: "_blank",
    noartneeded: true,
    aspects: { blank: 1 },
    inherits: "_",
  },

  {
    id: "_book.unc",
    label: "_book.unc",
    desc: "[Catalogue this to learn more]",
    manifestationtype: "Book",
    slots: [
      {
        id: "ability",
        label: "Soul",
        actionid: "consider",
        essential: { ability: 1 },
        forbidden: { scale: 1, nectar: 1, fatigued: 1, malady: 1 },
      },
    ],
    aspects: { uncatalogued: 1, readable: 1, thing: 1 },
    noartneeded: true,
  },
  {
    id: "_book",
    label: "_book",
    manifestationtype: "Book",
    aspects: { readable: 1, thing: 1 },
    xtriggers: {
      "ability.exposed.actinic": [
        {
          id: "contamination.actinic",
          morpheffect: "mutate",
          level: 1,
          chance: 50,
        },
      ],
      "ability.exposed.bloodlines": [
        {
          id: "contamination.bloodlines",
          morpheffect: "mutate",
          level: 1,
          chance: 50,
        },
      ],
      "ability.exposed.chionic": [
        {
          id: "contamination.chionic",
          morpheffect: "mutate",
          level: 1,
          chance: 50,
        },
      ],
      "ability.exposed.keeperskin": [
        {
          id: "contamination.keeperskin",
          morpheffect: "mutate",
          level: 1,
          chance: 50,
        },
      ],
      "ability.exposed.winkwell": [
        {
          id: "contamination.winkwell",
          morpheffect: "mutate",
          level: 1,
          chance: 50,
        },
      ],
      "ability.exposed.witchworms": [
        {
          id: "contamination.witchworms",
          morpheffect: "mutate",
          level: 1,
          chance: 50,
        },
      ],
    },
    noartneeded: true,
    slots: [
      {
        id: "ability1",
        label: "Soul",
        description: "I'll need to apply myself.",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: 1 },
      },
      {
        id: "skill",
        label: "Skill?",
        description: "Optionally, use a Skill.",
        actionid: "consider",
        required: { skill: 1 },
      },
      {
        id: "memory",
        label: "Memory?",
        description: "Optionally, use a Memory.",
        actionid: "consider",
        required: { memory: 1 },
      },
    ],
    unique: true,
  },
  {
    id: "_bust.collectible",
    inherits: "_",
  },

  {
    id: "_cache",
    noartneeded: true,
    aspects: { cache: 1 },
    inherits: "_",
  },

  {
    id: "_callingcard",
    aspects: { correspondence: 1, tool: 1 },
  },

  {
    id: "_circumstance",
    noartneeded: true,
    aspects: { circumstance: 1 },
    xtriggers: {
      "forgetting.persistent": "fleeting",
      fatiguing: "echo",
      "fatiguing.memory": "echo",
    },
  },

  {
    id: "_comfort",
    noartneeded: true,
    aspects: { comfort: 1, considerable: 1 },
    slots: [
      {
        id: "examine",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: -1 },
      },
    ],
    ManifestationType: "Comfort",
  },

  {
    id: "_candle",
    noartneeded: true,
    aspects: { light: 1, considerable: 1, candle: 1, thing: 1 },
    ManifestationType: "Candle",
    slots: [
      {
        id: "examine",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: -1 },
      },
    ],
    xtriggers: { fatiguing: "dust", "fatiguing.ingredients": "dust" },
    comments:
      "We need to specify the slot explicitly because the custom Manifestation stops us inheriting from the fundamental _",
  },

  {
    id: "_candlecomfort",
    noartneeded: true,
    aspects: { light: 1, considerable: 1, candle: 1, comfort: 1 },
    ManifestationType: "CandleComfort",
    slots: [
      {
        id: "examine",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: -1 },
      },
    ],
    comments:
      "We need to specify the slot explicitly because the custom Manifestation stops us inheriting from the fundamental _",
  },

  {
    id: "_device",
    noartneeded: true,
    aspects: { device: 1, tool: 1 },
    xtriggers: { fatiguing: "scraps", "fatiguing.ingredients": "scraps" },
    inherits: "_",
  },
  {
    id: "_flower",
    noartneeded: true,
    aspects: { flower: 1 },
    xtriggers: { fatiguing: "dust", "fatiguing.ingredients": "dust" },
    inherits: "_",
  },
  {
    id: "_egg",
    noartneeded: true,
    aspects: { egg: 1 },
    xtriggers: { fatiguing: "scraps", "fatiguing.ingredients": "scraps" },
    inherits: "_sustenance",
  },
  {
    id: "_employable",
    noartneeded: true,
    aspects: { employable: 1 },
    xtriggers: {
      fatiguing: "departure.assistance",
      departing: "departure.assistance",
    },
    slots: [
      {
        id: "p",
        label: "Pay",
        actionid: "talk",
        required: { pence: 1 },
      },
    ],
  },
  {
    id: "_fabric",
    noartneeded: true,
    aspects: { fabric: 1 },
    xtriggers: { fatiguing: "scraps", "fatiguing.ingredients": "scraps" },
    inherits: "_",
  },

  {
    id: "_hanging",
    noartneeded: true,
    aspects: { hanging: 1 },
    inherits: "_",
  },
  {
    id: "_incident",
    label: ".",
    aspects: { incident: 1, rank: 80 },
  },

  {
    id: "_incident.numa",
    label: ".",
    aspects: { incident: 1, numatic: 1, rank: 80 },
  },

  {
    id: "_ingredient",
    noartneeded: true,
    aspects: { ingredient: 1 },
    xtriggers: {
      fatiguing: "scraps",
      "fatiguing.ingredients": "scraps",
      "fatiguing.sustenance": "scraps",
    },
    inherits: "_",
  },

  {
    id: "_inspiration",
    isaspect: true,
    desc: "A Visitor has been affected by recent events... and may now be more inclined to join the Lighthouse Institute.",
  },

  {
    id: "_key",
    noartneeded: true,
    aspects: { key: 1 },
    inherits: "_",
  },

  {
    id: "_leaf",
    noartneeded: true,
    aspects: { leaf: 1 },
    xtriggers: { fatiguing: "dust", "fatiguing.ingredients": "dust" },
    inherits: "_",
  },

  {
    id: "_liquid",
    noartneeded: true,
    aspects: { liquid: 1 },
    xtriggers: { fatiguing: "dregs", "fatiguing.ingredients": "dregs" },
    inherits: "_",
  },

  {
    id: "_manuscript",
    aspects: { readable: 1, codex: 1, thing: 1, manuscript: 1 },
    manifestationtype: "Book",
  },

  {
    id: "_mark",
    noartneeded: true,
    aspects: { mark: 1 },
    xtriggers: {
      fatiguing: "residue",
      "fatiguing.ingredients": "residue",
    },
    inherits: "_",
  },
  {
    id: "_material",
    noartneeded: true,
    aspects: { material: 1 },
    xtriggers: {
      fatiguing: "residue",
      "fatiguing.ingredients": "residue",
    },
    inherits: "_",
  },
  {
    id: "_memory",
    aspects: { memory: 1 },
    xtriggers: {
      forgetting: "fleeting",
      "forgetting.persistent": "fleeting",
      fatiguing: "echo",
      "fatiguing.memory": "echo",
    },
  },
  {
    id: "_memory.persistent",
    aspects: { memory: 1, persistent: 1 },
    xtriggers: {
      fatiguing: "echo",
      "fatiguing.memory": "echo",
      "forgetting.persistent": "fleeting",
    },
    comments:
      "Forgetting and forgetting.persistent are intended for xpans - so persistent memories are immune to basic forgetting. Fatiguing and fatiguing.memory work on both, though, so people can burn them in crafting and exaltation recipes.",
  },

  {
    id: "_n",
    noartneeded: true,
    ambits: {
      agdistis: 1,
      aladim: 1,
      arthur: 1,
      arun: 1,
      auntmopsy: 1,
      azita: 1,
      chaima: 1,
      connie: 1,
      coquille: 1,
      corso: 1,
      dagmar: 1,
      douglas: 1,
      echidna: 1,
      ehsan: 1,
      franklin: 1,
      fraser: 1,
      hokobald: 1,
      julian: 1,
      morgen: 1,
      olympe: 1,
      rowena: 1,
      serena: 1,
      "spencer.down": 1,
      "spencer.out": 1,
      "spencer.trace": 1,
      stanislav: 1,
      yvette: 1,
      zachary: 1,
      visitor: 1,
    },
  },

  {
    id: "_n.complete",
    aspects: { finished: 1 },
  },

  {
    id: "_numen",
    aspects: { memory: 1, numen: 1, persistent: 1 },
    uniquenessgroup: "uqnumen",
    sort: "group7_histories.numen",
    xtriggers: {
      fatiguing: "echo",
      "fatiguing.memory": "echo",
      "forgetting.persistent": "fleeting",
    },
  },

  {
    id: "_remains",
    noartneeded: true,
    aspects: { remains: 1 },
    xtriggers: { fatiguing: "dust", "fatiguing.ingredients": "dust" },
    inherits: "_",
  },
  {
    id: "_root",
    noartneeded: true,
    aspects: { root: 1 },
    xtriggers: { fatiguing: "dust", "fatiguing.ingredients": "dust" },
    inherits: "_",
  },
  {
    id: "_spintria",
    noartneeded: true,
    aspects: { ductile: 1, rank: 50 },
    comments: "base 50 + imms outcome gives us auto-ranked by tally",
    imms: [{ reqs: { tally: 1 }, effects: { rank: "tally" } }],
    xtriggers: { "fatiguing.spintria": "fleeting" },
  },
  {
    id: "_sustenance",
    noartneeded: true,
    aspects: { sustenance: 1 },
    xtriggers: {
      fatiguing: "scraps",
      "fatiguing.ingredients": "scraps",
      "fatiguing.sustenance": "scraps",
    },
    inherits: "_",
  },

  {
    id: "_wallart",
    noartneeded: true,
    aspects: { wallart: 1, considerable: 1 },
    ManifestationType: "WallArt",
    slots: [
      {
        id: "examine",
        label: "Effort",
        description: "[Add any Soul card.]",
        actionid: "consider",
        required: { ability: 1 },
        forbidden: { fatigued: -1 },
      },
    ],
  },

  {
    id: "_wallartfixed",
    noartneeded: true,
    ManifestationType: "WallArt",
  },

  {
    id: "_weather.memory",
    noartneeded: true,
    aspects: { weather: 1, memory: 1 },
    xtriggers: {
      forgetting: "fleeting",
      fatiguing: "echo",
      "fatiguing.memory": "echo",
    },
  },

  {
    id: "_visitor",
    noartneeded: true,
    slots: [
      {
        id: "subject",
        label: "About?",
        description: "[Add an Incident that this visitor might discuss.]",
        actionid: "talk",
        required: { incident: 1, tally: 1, readable: 1 },
        forbidden: { numatic: 1 },
      },
    ],
    xtriggers: {
      "inspiring.agenda.corrivality": [
        {
          id: "agenda.corrivality",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "agenda.peace",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.agenda.peace": [
        {
          id: "agenda.peace",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "agenda.corrivality",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.agenda.secrecy": [
        {
          id: "agenda.secrecy",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "agenda.revelation",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.agenda.revelation": [
        {
          id: "agenda.revelation",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "agenda.secrecy",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.agenda.autarchy": [
        {
          id: "agenda.autarchy",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
      ],
      "inspiring.agenda.better.gods": [
        {
          id: "agenda.better.gods",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
      ],
      "inspiring.agenda.stone.consumed": [
        {
          id: "agenda.stone.consumed",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "agenda.stone.remembered",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.agenda.stone.remembered": [
        {
          id: "agenda.stone.remembered",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "agenda.stone.consumed",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.sympathy.chandler": [
        {
          id: "sympathy.chandler",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "fear.chandler",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.sympathy.ys": [
        {
          id: "sympathy.ys",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "fear.ys",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.sympathy.carapace": [
        {
          id: "sympathy.carapace",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "fear.carapace",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.sympathy.reckoners": [
        {
          id: "sympathy.reckoners",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
      ],
      "inspiring.fear.chandler": [
        {
          id: "fear.chandler",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "sympathy.chandler",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.fear.ys": [
        {
          id: "fear.ys",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "sympathy.ys",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.fear.carapace": [
        {
          id: "fear.carapace",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
        {
          id: "sympathy.carapace",
          morpheffect: "mutate",
          level: -1,
          additive: false,
        },
      ],
      "inspiring.fear.devourers": [
        {
          id: "fear.devourers",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
      ],
      "inspiring.fear.nowhere": [
        {
          id: "fear.nowhere",
          morpheffect: "mutate",
          level: 1,
          additive: false,
        },
      ],
    },
    imms: [
      { reqs: { "agenda.corrivality": 1 }, effects: { inspired: 1 } },
      { reqs: { "agenda.peace": 1 }, effects: { inspired: 1 } },
      { reqs: { "agenda.secrecy": 1 }, effects: { inspired: 1 } },
      { reqs: { "agenda.revelation": 1 }, effects: { inspired: 1 } },
      { reqs: { "agenda.autarchy": 1 }, effects: { inspired: 1 } },
      { reqs: { "agenda.better.gods": 1 }, effects: { inspired: 1 } },
      {
        reqs: { "agenda.stone.consumed": 1 },
        effects: { inspired: 1 },
      },
      {
        reqs: { "agenda.stone.remembered": 1 },
        effects: { inspired: 1 },
      },
      { reqs: { "sympathy.chandler": 1 }, effects: { inspired: 1 } },
      { reqs: { "sympathy.ys": 1 }, effects: { inspired: 1 } },
      { reqs: { "sympathy.carapace": 1 }, effects: { inspired: 1 } },
      { reqs: { "sympathy.reckoners": 1 }, effects: { inspired: 1 } },
      { reqs: { "fear.chandler": 1 }, effects: { inspired: 1 } },
      { reqs: { "fear.ys": 1 }, effects: { inspired: 1 } },
      { reqs: { "fear.carapace": 1 }, effects: { inspired: 1 } },
      { reqs: { "fear.devourers": 1 }, effects: { inspired: 1 } },
      { reqs: { "fear.nowhere": 1 }, effects: { inspired: 1 } },
    ],

    aspects: { visitor: 1, rank: 100 },
  },

  {
    id: "_visitor.numa",
    noartneeded: true,
    slots: [
      {
        id: "subject",
        label: "About?",
        description:
          "[Add a Numa-related Incident that this visitor might discuss.]",
        actionid: "talk",
        required: { incident: 1, tally: 1 },
      },
    ],

    aspects: { visitor: 1 },
  },

  {
    id: "_visitor.embarking",
    noartneeded: true,
    aspects: { "visitor.embarking": 1, rank: 90 },
  },
];
