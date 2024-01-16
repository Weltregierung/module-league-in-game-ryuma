import { Item, Rune, Scores, SummonerSpell } from "../types/AllGameData";
import { PlayerType } from "../types/InGameState";

export class Player implements PlayerType {
  summonerName: string;
  nickname: string = "";
  level: number = 0;
  experience: number = 0;
  currentGold: number = 0;
  totalGold: number = 0;
  items: Set<number> = new Set();
  championName: string;
  championId: string;
  championKey: number;
  team: 100 | 200;
  isAlive: boolean;
  health: number = 0;
  maxHealth: number = 0;
  mana: number = 0;
  maxMana: number = 0;
  otherItems: Item[] = [];
  isBot: boolean = false;
  isDead: boolean = false;
  respawnTimer: number = 0;
  runes: {
    keystone?: Rune;
    primaryRuneTree?: Rune;
    secondaryRuneTree?: Rune;
  } = {
    keystone: undefined,
    primaryRuneTree: undefined,
    secondaryRuneTree: undefined,
  };
  scores: Scores | undefined;
  skinID: number = 0;
  summonerSpells: {
    summonerSpellOne?: SummonerSpell;
    summonerSpellTwo?: SummonerSpell;
  } = {
    summonerSpellOne: undefined,
    summonerSpellTwo: undefined,
  };

  constructor(
    summonerName: string,
    team: "ORDER" | "CHAOS",
    championName: string,
    championId: string,
    championKey: number,
    isAlive: boolean,
    health: number,
    maxHealth: number,
    mana: number,
    maxMana: number
  ) {
    this.summonerName = summonerName;
    this.championName = championName;
    this.championId = championId;
    this.championKey = championKey;
    this.team = team === "ORDER" ? 100 : 200;
    this.isAlive = isAlive;
    this.health = health;
    this.maxHealth = maxHealth;
    this.mana = mana;
    this.maxMana = maxMana;
  }

  addItem(item: number): Set<number> {
    return this.items.add(item);
  }

  removeItem(item: number): Set<number> {
    this.items.delete(item);
    return this.items;
  }

  updateItems(items: number[]): Set<number> {
    return (this.items = new Set(items));
  }
}
