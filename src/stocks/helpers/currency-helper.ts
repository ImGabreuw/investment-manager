import { LocaleHelper } from "./locale-helper";

class CurrencyHelper {
  static format(
    value: number | null,
    locale: string = LocaleHelper.getUserLocale(),
    currency: string = "BRL"
  ): string {
    if (value === null) {
      value = 0;
    }

    return value.toLocaleString(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

export { CurrencyHelper };
