class CurrencyHelper {
  static format(
    value: number | null,
    locale: string = "pt-br",
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
