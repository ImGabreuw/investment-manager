class StatusInvestStockDTO {
  /*
  Resumo
  */
  readonly "VALOR ATUAL": number;
  readonly "MIN. 52 SEMANAS": number;
  readonly "MIN. MÊS": number;
  readonly "MÁX. 52 SEMANAS": number;
  readonly "MÁX. MÊS": number;
  readonly "DIVIDEND YIELD": number;
  readonly "ÚLTIMOS 12 MESES": number;
  readonly "VALORIZAÇÃO (12M)": number;
  readonly "MÊS ATUAL": number;
  /*
  Indicadores de negociação
  */
  readonly "TIPO AÇÃO": string;
  readonly "TAG ALONG": number;
  readonly "LIQ. MÉD. DIÁRIA": number;
  readonly "PARTICIPAÇÃO NO IBOV": number;
  /*
  Indicadores de valuation
  */
  readonly "P/L": number;
  readonly "PEG Ratio": number;
  readonly "P/VP": number;
  readonly "EV/EBITDA": number;
  readonly "EV/EBIT": number;
  readonly "P/EBITDA": number;
  readonly "P/EBIT": number;
  readonly "VPA": number;
  readonly "P/Ativo": number;
  readonly "LPA": number;
  readonly "P/SR": number;
  readonly "P/Cap. Giro": number;
  readonly "P/Ativo Circ. Liq.": number;
  /*
  Indicadores de endividamento
  */
  readonly "Dív. líquida/PL": number;
  readonly "Dív. líquida/EBITDA": number;
  readonly "Dív. líquida/EBIT": number;
  readonly "PL/Ativos": number;
  readonly "Passivos/Ativos": number;
  readonly "Liq. corrente": number;
  /*
  Indicadores de eficiência
  */
  readonly "M. Bruta": number;
  readonly "M. EBITDA": number;
  readonly "M. EBIT": number;
  readonly "M. Líquida": number;
  /*
  Indicadores de rentabilidade
  */
  readonly "ROE": number;
  readonly "ROA": number;
  readonly "ROIC": number;
  readonly "Giro ativos": number;
  /*
  Indicadores de crescimento
  */
  readonly "CAGR Receitas 5 anos": number;
  readonly "CAGR Lucros 5 anos": number;

  constructor() {}
}

export { StatusInvestStockDTO };
