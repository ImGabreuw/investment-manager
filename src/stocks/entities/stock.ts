import { DebtIndicator } from "./indicators/debt-indicator";
import { EfficiencyIndicator } from "./indicators/efficiency-indicator";
import { GrowIndicator } from "./indicators/grow-indicator";
import { NegotiationIndicator } from "./indicators/negotiation-indicator";
import { PayoutIndicator } from "./indicators/payout-indicator";
import { PriceIndicator } from "./indicators/price-indicator";
import { RentabilityIndicator } from "./indicators/rentability-indicator";
import { ValorizationIndicator } from "./indicators/valorization-indicator";
import { ValuationIndicator } from "./indicators/valuation-indicator";

class Stock {
  constructor(
    readonly priceIndicator: PriceIndicator,
    readonly valorizationIndicator: ValorizationIndicator,
    readonly negotiationIndicator: NegotiationIndicator,
    readonly valuationIndicator: ValuationIndicator,
    readonly debtIndicator: DebtIndicator,
    readonly efficienciesIndicator: EfficiencyIndicator,
    readonly rentabilityIndicator: RentabilityIndicator,
    readonly growIndicator: GrowIndicator,
    readonly payoutIndicator: PayoutIndicator
  ) {}
}
