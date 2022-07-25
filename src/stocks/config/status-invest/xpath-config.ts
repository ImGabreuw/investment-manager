const INDICATORS = {
  /*
  Resumo
  */
  "VALOR ATUAL": `/html/body/main/div[2]/div/div[1]/div/div[1]/div/div[1]/strong`,
  "MIN. 52 SEMANAS": `/html/body/main/div[2]/div/div[1]/div/div[2]/div/div[1]/strong`,
  "MIN. MÊS": `/html/body/main/div[2]/div/div[1]/div/div[2]/div/div[2]/div/span[2]`,
  "MÁX. 52 SEMANAS": `/html/body/main/div[2]/div/div[1]/div/div[3]/div/div[1]/strong`,
  "MÁX. MÊS": `/html/body/main/div[2]/div/div[1]/div/div[3]/div/div[2]/div/span[2]`,
  "DIVIDEND YIELD": `/html/body/main/div[2]/div/div[1]/div/div[4]/div/div[1]/strong`,
  "ÚLTIMOS 12 MESES": `/html/body/main/div[2]/div/div[1]/div/div[4]/div/div[2]/div/span[2]`,
  "VALORIZAÇÃO (12M)": `/html/body/main/div[2]/div/div[1]/div/div[5]/div/div[1]/strong`,
  "MÊS ATUAL": `/html/body/main/div[2]/div/div[1]/div/div[5]/div/div[2]/div/span[2]/b`,
  /*
  Indicadores de negociação
  */
  "TIPO AÇÃO": `/html/body/main/div[2]/div/div[5]/div/div/div[1]/div/div/h3/strong`,
  "TAG ALONG": `/html/body/main/div[2]/div/div[5]/div/div/div[2]/div/div/div/strong`,
  "LIQ. MÉD. DIÁRIA": `/html/body/main/div[2]/div/div[5]/div/div/div[3]/div/div/div/strong`,
  "PARTICIPAÇÃO NO IBOV": `/html/body/main/div[2]/div/div[5]/div/div/div[4]/div/a/div/div/strong`,
  /*
  Indicadores de valuation
  */
  "P/L": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[2]/div/div/strong`,
  "PEG Ratio": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[3]/div/div/strong`,
  "P/VP": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[4]/div/div/strong`,
  "EV/EBITDA": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[5]/div/div/strong`,
  "EV/EBIT": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[6]/div/div/strong`,
  "P/EBITDA": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[7]/div/div/strong`,
  "P/EBIT": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[8]/div/div/strong`,
  VPA: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[9]/div/div/strong`,
  "P/Ativo": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[10]/div/div/strong`,
  LPA: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[11]/div/div/strong`,
  "P/SR": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[12]/div/div/strong`,
  "P/Cap. Giro": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[13]/div/div/strong`,
  "P/Ativo Circ. Liq.": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[14]/div/div/strong`,
  /*
  Indicadores de endividamento
  */
  "Dív. líquida/PL": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[1]/div/div/strong`,
  "Dív. líquida/EBITDA": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[2]/div/div/strong`,
  "Dív. líquida/EBIT": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[3]/div/div/strong`,
  "PL/Ativos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[4]/div/div/strong`,
  "Passivos/Ativos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[5]/div/div/strong`,
  "Liq. corrente": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[6]/div/div/strong`,
  /*
  Indicadores de eficiência
  */
  "M. Bruta": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[3]/div/div[1]/div/div/strong`,
  "M. EBITDA": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[3]/div/div[2]/div/div/strong`,
  "M. EBIT": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[3]/div/div[3]/div/div/strong`,
  "M. Líquida": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[3]/div/div[4]/div/div/strong`,
  /*
  Indicadores de rentabilidade
  */
  ROE: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[4]/div/div[1]/div/div/strong`,
  ROA: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[4]/div/div[2]/div/div/strong`,
  ROIC: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[4]/div/div[3]/div/div/strong`,
  "Giro ativos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[4]/div/div[4]/div/div/strong`,
  /*
  Indicadores de crescimento
  */
  "CAGR Receitas 5 anos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[5]/div/div[1]/div/div/strong`,
  "CAGR Lucros 5 anos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[5]/div/div[2]/div/div/strong`,
};

const PAYOUT = {
  "MÉDIA": `/html/body/main/div[4]/div/div/div/div[1]/div[1]/div[1]/strong`,
  "ATUAL": `/html/body/main/div[4]/div/div/div/div[1]/div[1]/div[2]/strong/span`,
  "MENOR VALOR": `/html/body/main/div[4]/div/div/div/div[1]/div[1]/div[3]/strong/span`,
  "ANO MENOR VALOR": `/html/body/main/div[4]/div/div/div/div[1]/div[1]/div[3]/strong/small/span`,
  "MAIOR VALOR": `/html/body/main/div[4]/div/div/div/div[1]/div[1]/div[4]/strong/span`,
  "ANO MAIOR VALOR": `/html/body/main/div[4]/div/div/div/div[1]/div[1]/div[4]/strong/small/span`,
};

const ENTERPRISE_INFO = {
  "NOME DA EMPRESA": `/html/body/main/div[5]/div[1]/div/div[1]/div[2]/h4/span`,
  "PATRIMÔNIO LÍQUIDO": `/html/body/main/div[5]/div[1]/div/div[2]/div[1]/div/div/strong`,
  "ATIVOS": `/html/body/main/div[5]/div[1]/div/div[2]/div[2]/div/div/strong`,
  "ATIVO CIRCULANTE": `/html/body/main/div[5]/div[1]/div/div[2]/div[3]/div/div/div/strong`,
  "DÍVIDA BRUTA": `/html/body/main/div[5]/div[1]/div/div[2]/div[4]/div/div/strong`,
  "VALOR DE MERCADO": `/html/body/main/div[5]/div[1]/div/div[2]/div[7]/div/div/strong`,
  "VALOR DE FIRMA": `/html/body/main/div[5]/div[1]/div/div[2]/div[8]/div/div/strong`,
  "Nº TOTAL DE PAPÉIS": `/html/body/main/div[5]/div[1]/div/div[2]/div[9]/div/div/strong`,
  "SEGMENTO DE LISTAGEM": `/html/body/main/div[5]/div[1]/div/div[2]/div[10]/div/div/strong`,
  "FREE FLOAT": `/html/body/main/div[5]/div[1]/div/div[2]/div[11]/div/div/strong`,
  "SETOR DE ATUAÇÃO": `/html/body/main/div[5]/div[1]/div/div[3]/div/div[1]/div/div/div/a/strong`,
  "SUBSETOR DE ATUAÇÃO": `/html/body/main/div[5]/div[1]/div/div[3]/div/div[2]/div/div/div/a/strong`,
  "SEGMENTO DE ATUAÇÃO": `/html/body/main/div[5]/div[1]/div/div[3]/div/div[3]/div/div/div/a/strong`
}

const FULL_XPATH = { INDICATORS, PAYOUT, ENTERPRISE_INFO };

export { FULL_XPATH };
