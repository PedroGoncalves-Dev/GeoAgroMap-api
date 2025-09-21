export type RegionId = 1 | 2 | 3 | 4 | 5;
export type RegionSigla = 'N' | 'NE' | 'SE' | 'S' | 'CO';
export type RegionName =
  | 'Norte'
  | 'Nordeste'
  | 'Sudeste'
  | 'Sul'
  | 'Centro-Oeste';

export interface Region {
  id: RegionId;
  sigla: RegionSigla;
  nome: RegionName;
}

export type RegionResponse = Region[];
