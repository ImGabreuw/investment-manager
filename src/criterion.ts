import { RealStateFundIndicators } from "./real-state-fund-Indicators.js";

class CriterionValidation {
  private readonly positivePoints = new Map<string, number>;
  private readonly negativePoints = new Map<string, number>;

  constructor(readonly fundIndicators: RealStateFundIndicators) {}

  check() {
    const props = Object.entries(this.fundIndicators);
    const criterion = new Criterion(); // used on "eval()" method, DO NOT REMOVE

    for (const method of CriterionHelper.getAllCriterionMethods()) {
      const indicator = props.filter(prop => prop[0] === method).shift();
      const name = indicator?.at(0);
      const value = indicator?.at(1);

      const analysisResult = eval(`criterion.${method}(${value})`);

      if (analysisResult) {
        this.positivePoints.set(name, value);
        continue;
      }

      this.negativePoints.set(name, value);
    }
  }
}

class Criterion {

  /* TEMPLATE
  [RealStateFundIndicators attribute](value: number): boolean {
    // implementation
  }
  */

  patrimony(value: number): boolean {
    return value >= 500_000_000;
  }

  pVP(value: number): boolean {
    return value <= 1;
  }

  averageDailyLiquidityLast30Days(value: number): boolean {
    return value >= 1_000_000;
  }

}

class CriterionHelper {

  private constructor() {}

  static getAllCriterionMethods(): string[] {
    return Object
      .getOwnPropertyNames(Criterion.prototype)
      .filter(property => CriterionHelper.isCriterionMethod(property));
  }

  static isCriterionMethod(methodName: string): boolean {
    return methodName !== "constructor";
  }
}

export { CriterionValidation, Criterion, CriterionHelper };
