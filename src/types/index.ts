export interface GainDetail {
  balance: number;
  gain: number;
}

export interface Holding {
  coin: string;
  coinName: string;
  logo: string;
  currentPrice: number;
  totalHolding: number;
  averageBuyPrice: number;
  stcg: GainDetail;
  ltcg: GainDetail;
}

export interface CategoryGains {
  profits: number;
  losses: number;
}

export interface CapitalGainsData {
  stcg: CategoryGains;
  ltcg: CategoryGains;
}

export interface MockApiResponse {
  capitalGains: CapitalGainsData;
}
