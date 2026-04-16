import { Holding, MockApiResponse } from '../types';

export const holdingsData: Holding[] = [
  {
    "coin": "BTC",
    "coinName": "Bitcoin",
    "logo": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
    "currentPrice": 85320.15,
    "totalHolding": 0.63776,
    "averageBuyPrice": 80000,
    "stcg": {
      "balance": 0.338,
      "gain": -1200
    },
    "ltcg": {
      "balance": 0.300,
      "gain": 2400
    }
  },
  {
    "coin": "ETH",
    "coinName": "Ethereum",
    "logo": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
    "currentPrice": 1620.15,
    "totalHolding": 5.6736,
    "averageBuyPrice": 1500,
    "stcg": {
      "balance": 2.332,
      "gain": 55320.15
    },
    "ltcg": {
      "balance": 3.245,
      "gain": 8239.29
    }
  },
  {
    "coin": "USDT",
    "coinName": "Tether",
    "logo": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
    "currentPrice": 1.15,
    "totalHolding": 3096.54,
    "averageBuyPrice": 1.0,
    "stcg": {
      "balance": 2011.23,
      "gain": -1200
    },
    "ltcg": {
      "balance": 902.47,
      "gain": 2400
    }
  },
  {
    "coin": "MATIC",
    "coinName": "Polygon",
    "logo": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png",
    "currentPrice": 2.31,
    "totalHolding": 2210,
    "averageBuyPrice": 0.8,
    "stcg": {
      "balance": 802,
      "gain": -1200
    },
    "ltcg": {
      "balance": 1402,
      "gain": 2400
    }
  }
];

export const capitalGainsData: MockApiResponse = {
  "capitalGains": {
    "stcg": {
      "profits": 1540,
      "losses": 743
    },
    "ltcg": {
      "profits": 1200,
      "losses": 650
    }
  }
};

export const fetchHoldings = (): Promise<Holding[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(holdingsData), 600);
  });
};

export const fetchInitialGains = (): Promise<MockApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(capitalGainsData), 400);
  });
};
