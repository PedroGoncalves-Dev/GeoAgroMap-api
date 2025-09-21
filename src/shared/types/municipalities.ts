// Regiões do IBGE
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

// Siglas de UF
export type UFSigla =
  | 'RO'
  | 'AC'
  | 'AM'
  | 'RR'
  | 'PA'
  | 'AP'
  | 'TO'
  | 'MA'
  | 'PI'
  | 'CE'
  | 'RN'
  | 'PB'
  | 'PE'
  | 'AL'
  | 'SE'
  | 'BA'
  | 'MG'
  | 'ES'
  | 'RJ'
  | 'SP'
  | 'PR'
  | 'SC'
  | 'RS'
  | 'MS'
  | 'MT'
  | 'GO'
  | 'DF';

export interface UF {
  id: number;
  sigla: UFSigla;
  nome: string;
  regiao: Region;
}

export interface Mesorregion {
  id: number;
  nome: string;
  UF: UF;
}

export interface Microrregion {
  id: number;
  nome: string;
  mesorregiao: Mesorregion;
}

export interface IntermediariaRegion {
  id: number;
  nome: string;
  UF: UF;
}

export interface ImediataRegion {
  id: number;
  nome: string;
  'regiao-intermediaria': IntermediariaRegion;
}

export interface Municipality {
  id: number;
  nome: string;
  microrregiao: Microrregion;
  'regiao-imediata': ImediataRegion;
}

export type MunicipalityResponse = Municipality[];
