# 🌾 Geo Agro Map API

API REST desenvolvida com NestJS para fornecer dados geográficos e agrícolas do Brasil, utilizando os serviços de dados do IBGE. A aplicação permite consultar informações sobre produção agrícola, metadados de tabelas, períodos, regiões, estados e municípios brasileiros.

## 🚀 Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **NestJS** - Framework progressivo para aplicações Node.js
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Axios** - Cliente HTTP para requisições às APIs do IBGE

### Ferramentas de Desenvolvimento

- **ESLint** - Linter para padronização de código
- **Prettier** - Formatador de código
- **Jest** - Framework de testes
- **SWC** - Compilador rápido para TypeScript/JavaScript
- **Yarn** - Gerenciador de pacotes

### APIs Externas

- **API SIDRA/IBGE** - Dados estatísticos agrícolas
- **API de Localidades/IBGE** - Dados geográficos (estados, municípios, regiões)
- **API de Malhas Territoriais/IBGE** - Dados geoespaciais em formato GeoJSON

## 📋 Funcionalidades

### 🗂️ Módulo de Filtros (`/filters`)

- **Períodos**: Obter períodos disponíveis para uma tabela específica
- **Metadados**: Buscar metadados de tabelas do IBGE
- **Estados (UFs)**: Listar todos os estados brasileiros
- **Municípios**: Obter municípios por estado
- **Regiões**: Listar regiões do Brasil

### 📊 Módulo de Dados (`/data-api`)

- **Consulta de Dados Agrícolas**: Buscar dados de produção agrícola com filtros personalizados
- **Dados Geoespaciais**: Obter malhas territoriais em formato GeoJSON
- **Transformação de Dados**: Processar e estruturar dados do IBGE para formato padronizado

## 📁 Estrutura de Pastas

```
src/
├── modules/                    # Módulos da aplicação
│   ├── data-api/              # Módulo para consulta de dados agrícolas
│   │   ├── data-api.controller.ts
│   │   ├── data-api.service.ts
│   │   └── data-api.module.ts
│   └── filters/               # Módulo para filtros e metadados
│       ├── filters.controller.ts
│       ├── filters.service.ts
│       └── filters.module.ts
├── shared/                    # Recursos compartilhados
│   ├── consts/               # Constantes da aplicação
│   │   └── url-api-ibge.ts   # URLs das APIs do IBGE
│   └── types/                # Definições de tipos TypeScript
│       ├── data-api-sidra.ts
│       ├── data-kwitwear.ts
│       ├── ibge-api-response.ts
│       ├── metadados.ts
│       ├── municipalities.ts
│       ├── payload-filter-for-result.ts
│       ├── periods.ts
│       ├── regions.ts
│       ├── transformed-data-response.ts
│       └── ufs.ts
├── app.module.ts             # Módulo principal da aplicação
└── main.ts                   # Ponto de entrada da aplicação
```

## ⚙️ Como Executar a Aplicação

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **Yarn** (recomendado) ou **npm**

### 1. Clone o repositório

```bash
git clone https://github.com/PedroGoncalves-Dev/GeoAgroMap-api
cd geo-agro-map-api
```

### 2. Instale as dependências

```bash
yarn install
# ou
npm install
```

### 3. Execute a aplicação

#### Desenvolvimento (com watch mode)

```bash
yarn dev
# ou
npm run dev
```

#### Produção

```bash
# Build da aplicação
yarn build
# ou
npm run build

# Executar em produção
yarn start:prod
# ou
npm run start:prod
```

### 4. Acesse a API

A aplicação estará disponível em: `http://localhost:3001`

## 🔗 Endpoints da API

### Filtros

- `GET /filters/periods/:idTable` - Obter períodos de uma tabela
- `GET /filters/metadados/:idTable` - Obter metadados de uma tabela
- `GET /filters/ufs` - Listar estados brasileiros
- `GET /filters/municipalities/:idUF` - Obter municípios por estado
- `GET /filters/regions` - Listar regiões brasileiras

### Dados Agrícolas

- `POST /data-api` - Consultar dados agrícolas e geoespaciais

#### Exemplo de payload para `/data-api`:

```json
{
  "idTable": "1612",
  "variables": 214,
  "products": 2713,
  "periods": "2022",
  "locality": "N1",
  "idClassification": 81,
  "intraRegion": "municipio"
}
```

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev                # Executa em modo desenvolvimento
yarn start             # Executa a aplicação
yarn start:debug       # Executa com debug habilitado

# Build e Produção
yarn build             # Compila a aplicação
yarn start:prod        # Executa a versão compilada

# Qualidade de Código
yarn lint              # Executa linting
yarn format            # Formata o código

# Testes
yarn test              # Executa testes unitários
yarn test:watch        # Executa testes em modo watch
yarn test:cov          # Executa testes com coverage
yarn test:e2e          # Executa testes end-to-end
```

## 🌐 CORS

A aplicação possui CORS habilitado para todas as origens (`*`) com suporte aos métodos:

- GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS

## 📝 Variáveis de Ambiente

- `PORT` - Porta da aplicação (padrão: 3001)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença UNLICENSED.

---

## 🔗 URLs das APIs IBGE Utilizadas

### API de Agregados (SIDRA)

- **Períodos**: `https://servicodados.ibge.gov.br/api/v3/agregados/{idTable}/periodos`
- **Metadados**: `https://servicodados.ibge.gov.br/api/v3/agregados/{idTable}/metadados`
- **Dados Agregados**: `https://servicodados.ibge.gov.br/api/v3/agregados/{idTable}/periodos/{periods}/variaveis/{variables}?localidades={locality}[all]&classificacao={idClassification}[{products}]`

### API de Localidades

- **Estados (UFs)**: `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
- **Municípios por UF**: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{idUF}/municipios`
- **Regiões**: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes`

### API de Malhas Territoriais

- **Dados Geoespaciais**: `https://servicodados.ibge.gov.br/api/v4/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=maxima&intrarregiao={intraRegion}`

## 📚 Documentação das APIs IBGE

- [API SIDRA](https://servicodados.ibge.gov.br/api/docs/agregados)
- [API de Localidades](https://servicodados.ibge.gov.br/api/docs/localidades)
- [API de Malhas Territoriais](https://servicodados.ibge.gov.br/api/docs/malhas)
