export interface IBGEApiResponse {
  id: string;
  variavel: string;
  unidade: string;
  resultados: Array<{
    classificacoes: Array<{
      id: string;
      nome: string;
      categoria: Record<string, string>;
    }>;
    series: Array<{
      localidade: {
        id: string;
        nome: string;
        nivel: {
          id: string;
          nome: string;
        };
      };
      serie: Record<string, string>;
    }>;
  }>;
}
