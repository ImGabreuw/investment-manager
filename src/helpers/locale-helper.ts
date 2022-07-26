class LocaleHelper {
  static getUserLocale(): string {
    const languagePreferences = navigator.languages;

    if (languagePreferences === undefined || languagePreferences.length === 0) {
      return "pt-br";
    }

    return languagePreferences[0];
  }
}

export { LocaleHelper };
