export type ChaveSumarizacao = 'periodo' | 'nivelTerritorial';

export interface Periodicidade {
  frequencia: string;
  inicio: number;
  fim: number;
}

export interface NivelTerritorial {
  Administrativo: string[];
  Especial: string[];
  IBGE: string[];
}

export interface Variavel {
  id: number;
  nome: string;
  unidade: string;
  sumarizacao: ChaveSumarizacao[];
}

export interface ClassificacaoCategoria {
  id: number;
  nome: string;
  unidade: string | null;
  nivel: number;
}

export interface ClassificacaoSumarizacao {
  status: boolean;
  excecao: number[];
}

export interface Classificacao {
  id: number;
  nome: string;
  sumarizacao: ClassificacaoSumarizacao;
  categorias: ClassificacaoCategoria[];
}

export interface TabelaSidraDetalhe {
  id: number;
  nome: string;
  URL: string;
  pesquisa: string;
  assunto: string;
  periodicidade: Periodicidade;
  nivelTerritorial: NivelTerritorial;
  variaveis: Variavel[];
  classificacoes: Classificacao[];
}
