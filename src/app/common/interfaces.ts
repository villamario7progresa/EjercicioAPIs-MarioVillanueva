export interface ApiPokemonResponse {
  data: InfoPKM[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export interface InfoPKM {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp: string
  types: string[]
  evolvesFrom?: string
  attacks: Attack[]
  weaknesses?: Weakness[]
  resistances?: Resistance[]
  retreatCost?: string[]
  convertedRetreatCost?: number
  set: Set
  number: string
  artist: string
  rarity?: string
  flavorText?: string
  nationalPokedexNumbers: number[]
  legalities: Legalities2
  images: Images2
  tcgplayer?: Tcgplayer
  cardmarket: Cardmarket
  evolvesTo?: string[]
  level?: string
  abilities?: Ability[]
  rules?: string[]
}

export interface Attack {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}

export interface Weakness {
  type: string
  value: string
}

export interface Resistance {
  type: string
  value: string
}

export interface Set {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  ptcgoCode?: string
  releaseDate: string
  updatedAt: string
  images: Images
}

export interface Legalities {
  unlimited: string
  expanded?: string
}

export interface Images {
  symbol: string
  logo: string
}

export interface Legalities2 {
  unlimited: string
  expanded?: string
}

export interface Images2 {
  small: string
  large: string
}

export interface Tcgplayer {
  url: string
  updatedAt: string
  prices: Prices
}

export interface Prices {
  normal?: Normal
  reverseHolofoil?: ReverseHolofoil
  holofoil?: Holofoil
  "1stEditionHolofoil"?: N1stEditionHolofoil
  unlimitedHolofoil?: UnlimitedHolofoil
}

export interface Normal {
  low: number
  mid: number
  high: number
  market: number
  directLow: any
}

export interface ReverseHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface N1stEditionHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: any
}

export interface UnlimitedHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: any
}

export interface Cardmarket {
  url: string
  updatedAt: string
  prices: Prices2
}

export interface Prices2 {
  averageSellPrice: number
  lowPrice: number
  trendPrice: number
  germanProLow: number
  suggestedPrice: number
  reverseHoloSell: number
  reverseHoloLow: number
  reverseHoloTrend: number
  lowPriceExPlus: number
  avg1: number
  avg7: number
  avg30: number
  reverseHoloAvg1: number
  reverseHoloAvg7: number
  reverseHoloAvg30: number
}

export interface Ability {
  name: string
  text: string
  type: string
}



export type ApiMonsterResponse = InfoMonster[]

export interface InfoMonster {
  id: number
  type: string
  rarity: number
  attack: Attack
  elderseal?: string
  attributes: Attributes
  damageType: string
  name: string
  durability: Durability[]
  slots: Slot[]
  elements: Element[]
  crafting: Crafting
  assets: Assets
}

export interface Attack {
  display: number
  raw: number
}

export interface Attributes {}

export interface Durability {
  red: number
  orange: number
  yellow: number
  green: number
  blue: number
  white: number
  purple: number
}

export interface Slot {
  rank: number
}

export interface Element {
  type: string
  damage: number
  hidden: boolean
}

export interface Crafting {
  craftable: boolean
  previous?: number
  branches: number[]
  craftingMaterials: CraftingMaterial[]
  upgradeMaterials: UpgradeMaterial[]
}

export interface CraftingMaterial {
  quantity: number
  item: Item
}

export interface Item {
  id: number
  rarity: number
  carryLimit: number
  value: number
  name: string
  description: string
}

export interface UpgradeMaterial {
  quantity: number
  item: Item2
}

export interface Item2 {
  id: number
  rarity: number
  carryLimit: number
  value: number
  name: string
  description: string
}

export interface Assets {
  icon: string
  image: string
}



export interface ApiValorantResponse {
  status: number
  data: InfoValorant[]
}

export interface InfoValorant {
  uuid: string
  displayName: string
  description: string
  developerName: string
  releaseDate: string
  characterTags?: string[]
  displayIcon: string
  displayIconSmall: string
  bustPortrait: string
  fullPortrait: string
  fullPortraitV2: string
  killfeedPortrait: string
  minimapPortrait: string
  homeScreenPromoTileImage?: string
  background: string
  backgroundGradientColors: string[]
  assetPath: string
  isFullPortraitRightFacing: boolean
  isPlayableCharacter: boolean
  isAvailableForTest: boolean
  isBaseContent: boolean
  role: Role
  recruitmentData?: RecruitmentData
  abilities: Ability[]
  voiceLine: any
}

export interface Role {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
  assetPath: string
}

export interface RecruitmentData {
  counterId: string
  milestoneId: string
  milestoneThreshold: number
  useLevelVpCostOverride: boolean
  levelVpCostOverride: number
  startDate: string
  endDate: string
}

export interface Ability {
  slot: string
  displayName: string
  description: string
  displayIcon?: string
}


export type ApiFinalResponse = InfoFinal[]

export interface InfoFinal {
  id: number
  name: string
  status: string
  species?: string
  gender: string
  hair: string
  alias: string[]
  origin: string
  abilities: string[]
  img_url: string
}


