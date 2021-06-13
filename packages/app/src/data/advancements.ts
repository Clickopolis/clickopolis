import { Advancement } from 'components/AdvancementScreen';
import { Era } from 'utils';
import { Category } from 'utils/Category';

export enum AdvName {
  fireMaking = 'Fire Making',
  art = 'Art',
  tools = 'Tools',

  animalDomestication = 'Animal Domestication',
  archery = 'Archery',
  bartering = 'Bartering',
  clothing = 'Clothing',
  fishing = 'Fishing',
  irrigation = 'Irrigation',
  law = 'Law',
  mining = 'Mining',
  mysticism = 'Mysticism',
  painting = 'Painting',
  paper = 'Paper',
  pottery = 'Pottery',
  sailing = 'Sailing',
  woodcutting = 'Wood Cutting',
  writing = 'Writing',
  wheel = 'Wheel',

  astronomy = 'Astronomy',
  calendar = 'Calendar',
  construction = 'Construction',
  currency = 'Currency',
  demokratia = 'Demokratia',
  drama = 'Drama',
  engineering = 'Engineering',
  fortifications = 'Fortifications',
  instruments = 'Instruments',
  ironWorking = 'Iron Working',
  mathematics = 'Mathematics',
  medicine = 'Medicine',
  philosophy = 'Philosophy',
  poetics = 'Poetics',
  saddles = 'Saddles',
  shipbuilding = 'Ship Building',
  standingArmies = 'Standing Armies',
  theology = 'Theology',
}

export const advancements: Advancement[] = [
  {
    name: AdvName.fireMaking,
    era: Era.Ancient,
    cost: 1,
    categories: ['resources'],
    unlocked: true,
    results: ['Unlocks all other Advancements'],
    tier: 0,
    subtier: 1,
    // connections: [AdvName.animalDomestication, AdvName.archery],
  },
  {
    name: AdvName.art,
    era: Era.Ancient,
    cost: 1,
    categories: ['culture'],
    unlocked: true,
    results: ['Unlocks [culture] Culture panel'],
    tier: 0,
    subtier: 2,
    // connections: [AdvName.animalDomestication, AdvName.archery],
  },
  {
    name: AdvName.tools,
    era: Era.Ancient,
    cost: 1,
    categories: ['military', 'buildings'],
    unlocked: true,
    results: ['Unlocks [military] Military panel'],
    tier: 0,
    subtier: 3,
  },
  // ANCIENT
  {
    name: AdvName.animalDomestication,
    era: Era.Ancient,
    cost: 20,
    categories: ['resources'],
    unlocked: true,
    results: ['Unlocks: Horses, Cattle', '+500 Max food'],
    tier: 1,
    subtier: 0,
    arrow: [192 / 2, 115, 0],
    parents: [AdvName.fireMaking],
  },
  {
    name: AdvName.archery,
    era: Era.Ancient,
    cost: 20,
    categories: ['military'],
    unlocked: true,
    results: ['Can raise Archers'],
    tier: 1,
    subtier: 6,
    parents: [AdvName.fireMaking],
  },
  {
    name: AdvName.bartering,
    era: Era.Ancient,
    cost: 20,
    categories: ['economy'],
    unlocked: true,
    results: [
      'Can create Trade Routes',
      'Citizens award +1 Gold',
      'Unlocks Economy panel',
    ],
    tier: 3,
    subtier: 2,
  },
  {
    name: AdvName.clothing,
    era: Era.Ancient,
    cost: 20,
    categories: ['culture'],
    unlocked: true,
    results: ['Can build [tent] Tents'],
    tier: 1,
    subtier: 1,
    arrow: [192 * 2, 131, 45],
    parents: [AdvName.art],
  },
  {
    name: AdvName.fishing,
    era: Era.Ancient,
    cost: 20,
    categories: ['resources'],
    unlocked: true,
    results: ['Can gain Ocean resources'],
    tier: 2,
    subtier: 0,
    parents: [AdvName.animalDomestication],
    arrow: [192 / 2, 115 + 192, 0],
  },
  {
    name: AdvName.irrigation,
    era: Era.Ancient,
    cost: 20,
    categories: ['resources'],
    unlocked: true,
    results: ['+.5 Food/s from Farmers', 'Unlocks Banana resource'],
    tier: 2,
    subtier: 2,
    parents: [AdvName.tools],
  },
  {
    name: AdvName.law,
    era: Era.Ancient,
    cost: 20,
    categories: ['culture'],
    unlocked: true,
    results: ['+10 Happiness'],
    tier: 4,
    subtier: 0,
    parents: [AdvName.pottery],
  },
  {
    name: AdvName.mining,
    era: Era.Ancient,
    cost: 20,
    categories: ['resources'],
    unlocked: true,
    results: ['Can hire Miners', '+500 Max Production', 'Can build Furnaces'],
    tier: 1,
    subtier: 3,
    parents: [AdvName.tools],
  },
  {
    name: AdvName.mysticism,
    era: Era.Ancient,
    cost: 20,
    categories: ['faith'],
    unlocked: true,
    results: [
      'Unlocks Faith panel',
      'Can build Shrine, Graveyard, Obelisk',
      'Can build Stonehedge World Wonder',
    ],
    tier: 1,
    subtier: 4,
    parents: [AdvName.fireMaking],
  },
  {
    name: AdvName.paper,
    era: Era.Ancient,
    cost: 20,
    categories: ['culture', 'research'],
    unlocked: true,
    requirements: [AdvName.woodcutting],
    results: ['Can build Pyramid'],
    tier: 3,
    subtier: 3,
    parents: [AdvName.pottery],
  },
  {
    name: AdvName.pottery,
    era: Era.Ancient,
    cost: 20,
    categories: ['culture', 'buildings'],
    unlocked: true,
    results: ['Allows construction of Granary'],
    tier: 1,
    subtier: 2,
    parents: [AdvName.art],
    arrow: [192 * 2.5, 115, 0],
  },
  {
    name: AdvName.sailing,
    era: Era.Ancient,
    cost: 20,
    categories: ['military', 'economy'],
    unlocked: true,
    results: ['Can raise a Navy', 'Can discover Coast and Island biomes'],
    requirements: [AdvName.woodcutting],
    tier: 3,
    subtier: 0,
    parents: [AdvName.fishing],
  },
  {
    name: AdvName.wheel,
    era: Era.Ancient,
    cost: 20,
    categories: ['research'],
    unlocked: true,
    requirements: [],
    results: [],
    tier: 4,
    subtier: 3,
    parents: [],
  },
  {
    name: AdvName.woodcutting,
    era: Era.Ancient,
    cost: 20,
    categories: ['military'],
    unlocked: true,
    results: ['Can assign woodcutters', 'Unlocks Spices resource'],
    tier: 1,
    subtier: 5,
    parents: [AdvName.tools],
  },
  {
    name: AdvName.writing,
    era: Era.Ancient,
    cost: 20,
    categories: ['research'],
    unlocked: true,
    requirements: [AdvName.paper, AdvName.pottery],
    results: [
      'Can build Library',
      'Can build The Great Library World Wonder',
      'Can assign Writers',
    ],
    tier: 4,
    subtier: 2,
    parents: [AdvName.pottery],
  },

  // // CLASSICAL
  // {
  //     name: AdvName.astronomy,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.research, Category.military],
  //     unlocked: false,
  //     requirements: [AdvName.mysticism, AdvName.writing],
  //     results: [
  //         '+1 Navy unit strength',
  //     ]
  // },
  // {
  //     name: AdvName.calendar,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.culture],
  //     unlocked: false,
  //     requirements: [AdvName.mysticism, AdvName.pottery],
  //     results: [
  //         ''
  //     ]
  // },
  // {
  //     name: AdvName.construction,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.buildings],
  //     unlocked: false,
  //     requirements: [AdvName.mining],
  //     results: [
  //         ''
  //     ]
  // },
  // {
  //     name: AdvName.currency,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.economy],
  //     requirements: [AdvName.bartering, AdvName.writing],
  //     unlocked: false,
  //     results: [
  //         'Awards 3 Trade Routes',
  //         'Can build Market',
  //     ]
  // },
  // {
  //     name: AdvName.drama,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: ['culture'],
  //     requirements: [AdvName.writing, AdvName.clothing],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.demokratia,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.culture],
  //     requirements: [AdvName.law, AdvName.bartering],
  //     unlocked: false,
  //     results: [],
  // },
  // {
  //     name: AdvName.engineering,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.buildings],
  //     requirements: [AdvName.mining, AdvName.mathematics],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.fortifications,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.buildings],
  //     unlocked: false,
  //     results: [
  //         'Can build Forts',
  //     ]
  // },
  // {
  //     name: AdvName.instruments,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.culture],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.ironWorking,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.military],
  //     unlocked: false,
  //     results: [
  //         '+1 Food/ps from farmers',
  //         'Can train Swordsmen'
  //     ]
  // },
  // {
  //     name: AdvName.mathematics,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.buildings],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.medicine,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.resources],
  //     unlocked: false,
  //     results: [
  //         '+1 Health from Mushrooms',
  //     ]
  // },
  // {
  //     name: AdvName.philosophy,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.research, Category.culture],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.poetics,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.culture],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.saddles,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.military],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.shipbuilding,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.resources, Category.military],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.standingArmies,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.military],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
  // {
  //     name: AdvName.theology,
  //     era: Era.Classical,
  //     cost: 40,
  //     categories: [Category.faith],
  //     unlocked: false,
  //     results: [

  //     ]
  // },
];
