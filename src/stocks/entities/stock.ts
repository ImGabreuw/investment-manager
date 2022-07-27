import { DebtIndicator } from "./indicators/debt-indicator";
import { EfficiencyIndicator } from "./indicators/efficiency-indicator";
import { GrowthIndicator } from "./indicators/growth-indicator";
import { NegotiationIndicator } from "./indicators/negotiation-indicator";
import { PayoutIndicator } from "./indicators/payout-indicator";
import { PriceIndicator } from "./indicators/price-indicator";
import { RentabilityIndicator } from "./indicators/rentability-indicator";
import { ValorizationIndicator } from "./indicators/valorization-indicator";
import { ValuationIndicator } from "./indicators/valuation-indicator";
import { InterpreseInfo } from "./interprese-info";

class Stock {
  constructor(
    readonly priceIndicator: PriceIndicator,
    readonly valorizationIndicator: ValorizationIndicator,
    readonly negotiationIndicator: NegotiationIndicator,
    readonly valuationIndicator: ValuationIndicator,
    readonly debtIndicator: DebtIndicator,
    readonly efficienciesIndicator: EfficiencyIndicator,
    readonly rentabilityIndicator: RentabilityIndicator,
    readonly growthIndicator: GrowthIndicator,
    readonly payoutIndicator: PayoutIndicator,
    readonly interpreseInfo: InterpreseInfo
  ) {}
}

export { Stock };
