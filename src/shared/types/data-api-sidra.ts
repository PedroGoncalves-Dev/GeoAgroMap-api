export interface SidraHeaderMap {
  NC: 'Nível Territorial (Código)';
  NN: 'Nível Territorial';
  MC: 'Unidade de Medida (Código)';
  MN: 'Unidade de Medida';
  V: 'Valor';
  D1C: 'Unidade da Federação (Código)';
  D1N: 'Unidade da Federação';
  D2C: 'Variável (Código)';
  D2N: 'Variável';
  D3C: 'Ano (Código)';
  D3N: 'Ano';
  D4C: 'Produto das lavouras temporárias (Código)';
  D4N: 'Produto das lavouras temporárias';
}

export interface SidraDataRow {
  NC: string;
  NN: string;
  MC: string;
  MN: string;
  V: string;
  D1C: string;
  D1N: string;
  D2C: string;
  D2N: string;
  D3C: string;
  D3N: string;
  D4C: string;
  D4N: string;
}

export type SidraResponse = [SidraHeaderMap, ...SidraDataRow[]];
