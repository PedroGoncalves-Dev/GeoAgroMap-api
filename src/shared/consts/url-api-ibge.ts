export const URL_API_IBGE_PERIODS = (idTable: string) => {
  return `https://servicodados.ibge.gov.br/api/v3/agregados/${idTable}/periodos`;
};

export const URL_API_IBGE_METADADOS = (idTable: string) => {
  return `https://servicodados.ibge.gov.br/api/v3/agregados/${idTable}/metadados
`;
};

export const URL_API_IBGE_UF =
  'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export const URL_API_IBGE_MUNICIPALITIES_BY_UF = (idUF: string) => {
  return `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUF}/municipios
`;
};

export const URL_API_IBGE_REGIONS =
  'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';

export const URL_API_IBGE_DATA = (
  idTable: string,
  periods: string,
  variables: number,
  locality: string,
  products: number,
  idClassification: number,
) => {
  const periodsStr = periods;
  const variablesStr = variables;
  const localityStr = `${locality}[all]`;
  const productsStr = products;

  return `https://servicodados.ibge.gov.br/api/v3/agregados/${idTable}/periodos/${periodsStr}/variaveis/${variablesStr}?localidades=${localityStr}&classificacao=${idClassification}[${productsStr}]`;
};

export const URL_API_IBGE_KNITWEAR_DATA = (intraRegion: string) => {
  return `https://servicodados.ibge.gov.br/api/v4/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=maxima&intrarregiao=${intraRegion}
`;
};
