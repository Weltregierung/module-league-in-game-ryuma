import { EventType, MobType } from "./InGameEvent";
import { Item, Rune, Scores, SummonerSpell } from "./AllGameData";

export interface InGameState {
  gameTime: number;
  showLeaderBoard: "xp" | "gold" | false;
  targetFrameCover: boolean;
  towers: {
    100: TowerState;
    200: TowerState;
  };
  platings: {
    showPlatings: boolean;
    100: PlatingState;
    200: PlatingState;
  };
  showInhibitors: 100 | 200 | 300 | null;
  inhibitors: {
    100: InhibitorState;
    200: InhibitorState;
  };
  player: PlayerType[];
  gold: {
    100: number;
    200: number;
  };
  kills: {
    100: number;
    200: number;
  };
  goldGraph: {
    [t: number]: number;
  };
  objectives: {
    100: Objective[];
    200: Objective[];
  };
  nextDragonType: string | "Fire";
}

export interface PlayerType {
  riotIdGameName: string;
  nickname: string;
  level: number;
  experience: number;
  currentGold: number;
  totalGold: number;
  items: Set<number>;
  championName: string;
  championId: string;
  championKey: number;
  team: 100 | 200;
  isAlive: boolean;
  health: number;
  maxMana: number;
  mana: number;
  maxHealth: number;
  otherItems: Item[];
  isBot: boolean;
  isDead: boolean;
  respawnTimer: number;
  runes: {
    keystone?: Rune;
    primaryRuneTree?: Rune;
    secondaryRuneTree?: Rune;
  };
  scores: Scores | undefined;
  skinID: number;
  summonerSpells: {
    summonerSpellOne?: SummonerSpell;
    summonerSpellTwo?: SummonerSpell;
  };
}

export interface Objective {
  type: EventType;
  mob: MobType;
  time: number;
}

export interface TowerState {
  L: {
    [turret: string]: boolean;
  };
  C: {
    [turret: string]: boolean;
  };
  R: {
    [turret: string]: boolean;
  };
}

export interface PlatingState {
  L: number;
  C: number;
  R: number;
}

export interface InhibitorState {
  L1: {
    alive: boolean;
    respawnIn: number;
    respawnAt: number;
    percent: number;
    time: number;
  };
  C1: {
    alive: boolean;
    respawnIn: number;
    respawnAt: number;
    percent: number;
    time: number;
  };
  R1: {
    alive: boolean;
    respawnIn: number;
    respawnAt: number;
    percent: number;
    time: number;
  };
}
