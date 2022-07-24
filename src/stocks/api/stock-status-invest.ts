const fullXpath = {
  "MIN. MÊS": `/html/body/main/div[2]/div/div[1]/div/div[2]/div/div[2]/div/span[2]`,
};

function removeBrazilianCurrencySymbol(text: string): string {
  text = text.toUpperCase().trim();

  if (!text.startsWith("R$")) return text;

  return text.substring(2);
}

export { fullXpath, removeBrazilianCurrencySymbol };
