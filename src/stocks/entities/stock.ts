import { DebtIndicator } from "./indicators/debt-indicator";
import { EfficiencyIndicator } from "./indicators/efficiency-indicator";
import { GrowthIndicator } from "./indicators/growth-indicator";
import { NegotiationIndicator } from "./indicators/negotiation-indicator";
import { PayoutIndicator } from "./indicators/payout-indicator";
import { PriceIndicator } from "./indicators/price-indicator";
import { RentabilityIndicator } from "./indicators/rentability-indicator";
import { ValorizationIndicator } from "./indicators/valorization-indicator";
import { ValuationIndicator } from "./indicators/valuation-indicator";
import { InterpreseInfo } from "./indicators/interprese-info";

class Stock {
  "priceIndicator": PriceIndicator;
  "valorizationIndicator": ValorizationIndicator;
  "negotiationIndicator": NegotiationIndicator;
  "valuationIndicator": ValuationIndicator;
  "debtIndicator": DebtIndicator;
  "efficiencyIndicator": EfficiencyIndicator;
  "rentabilityIndicator": RentabilityIndicator;
  "growthIndicator": GrowthIndicator;
  "payoutIndicator": PayoutIndicator;
  "interpreseInfo": InterpreseInfo;

  constructor() {}
}

export { Stock };
