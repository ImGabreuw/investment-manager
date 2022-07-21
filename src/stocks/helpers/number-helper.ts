class NumberHelper {
  private constructor() {}

  static format(value: number | null, locale: string = "pt-br"): string {
    if (value === null) {
      value = 0;
    }

    return value.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  static formatToPercentage(
    value: number | null,
    locale: string = "pt-br"
  ): string {
    if (value === null) {
      value = 0;
    }

    return value.toLocaleString(locale, {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

export { NumberHelper };
