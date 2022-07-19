import { RealStateFundIndicators } from "./real-state-fund-Indicators.js";

class CriterialValidation {
  private readonly positivePoints = new Map<string, number>;
  private readonly negativePoints = new Map<string, number>;

  constructor(readonly fundIndicators: RealStateFundIndicators) {}

  verifyPatrimony(patrimony: number | null): void {
    if (!patrimony) return;

    if (patrimony >= 500_000_000) {
      this.positivePoints.set("patrimony", patrimony);
      return;
    }

    this.negativePoints.set("patrimony", patrimony);
  }

  verifyPVP(pVP: number | null): void {
    if (!pVP) return;

    if (pVP <= 1) {
      this.positivePoints.set("pVP", pVP);
      return;
    }

    this.negativePoints.set("pVP", pVP);
  }


  verifyLiquidity(liquidity: number | null): void {
    if (!liquidity) return;

    if (liquidity >= 1_000_000) {
      this.positivePoints.set("averageDailyLiquidityLast30Days", liquidity);
      return;
    }

    this.negativePoints.set("averageDailyLiquidityLast30Days", liquidity);
  }

  validate() {
    this.verifyPatrimony(this.fundIndicators.patrimony);
    this.verifyPVP(this.fundIndicators.pVP);
    this.verifyLiquidity(this.fundIndicators.averageDailyLiquidityLast30Days);
  }
}

export { CriterialValidation };
