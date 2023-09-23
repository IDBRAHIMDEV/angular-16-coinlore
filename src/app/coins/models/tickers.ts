export interface Ticker {
  csupply: string;
  id: string;
  market_cap_usd: string;
  msupply: string;
  name: string;
  nameid: string;
  percent_change_1h: String;
  percent_change_7d: String;
  percent_change_24h: String;
  price_btc: String;
  price_usd: number;
  rank: number;
  symbol: String;
  tsupply: String;
  volume24: Number;
  volume24a: number;
}

export interface Info {
  coins_num: number;
  time: number;
}

export interface Tickerdata {
  data: Ticker[];
  info: Info;
}
