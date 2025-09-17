export const URL_API_IBGE_PERIODS = (idTabela: string) => {
  return `https://servicodados.ibge.gov.br/api/v3/agregados/${idTabela}/periodos`;
};

export const URL_API_IBGE_METADADOS = (idTabela: string) => {
  return `https://servicodados.ibge.gov.br/api/v3/agregados/${idTabela}/metadados
`;
};
