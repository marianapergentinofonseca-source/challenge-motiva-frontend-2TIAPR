# Motiva App: apoio ao profissional de campo

Desafio Motiva · Sprint 1 · FIAP · Turma 2TIAPR · 2026

## O problema

Árvores com galhos acima do permitido e outras ocorrências na faixa de domínio das rodovias (buracos no acostamento, placas danificadas, drenagem obstruída) colocam em risco a segurança de quem trafega. O operador precisa saber, no trecho em que está, onde existe uma ocorrência e qual a situação dela.

Nesta sprint, a plataforma **só consulta** dados fixos e mostra um histórico **simulado** de comandos de voz. Nada é cadastrado pelo usuário, e o agente de voz ainda não existe.

## Quem usa

Operadores da Motiva: o profissional de campo, que está na rodovia, e a equipe de atendimento, que acompanha as ocorrências.

## O que cada tela faz

| Tela | O que mostra |
|---|---|
| **Início** | O problema, quem usa, quatro indicadores, os gráficos e a tabela de leitura rápida dos trechos |
| **Consultas** | Lista dos trechos monitorados, com rodovia, km, sentido, situação e data da última atualização |
| **Interações** | Histórico simulado de comandos que o operador teria falado ao agente de voz, com data e resposta fixa |
| **Dashboard** | Os mesmos gráficos da tela inicial, isolados |

## De onde vêm os dados

Todos os dados são **simulados** para a sprint. Não são um boletim oficial da Motiva.

| Arquivo | Conteúdo |
|---|---|
| `src/data/plataforma.js` | Nome da plataforma, textos do problema e do usuário |
| `src/data/trechos.js` | 4 trechos monitorados: SP-280 (km 8 a 10 e km 61 a 70), SP-270 (km 18 a 25) e SP-021 (km 12 a 16) |
| `src/data/interacoes.js` | 4 comandos de voz simulados, cada um com texto, data e resposta fixa |
| `src/data/resumoDashboard.js` | Recorte simulado de 34 ocorrências registradas em outubro, usado pelos gráficos |

## Indicadores e gráficos

**Indicadores da tela inicial**

- **Trechos na malha:** quantidade de trechos em `trechos.js`
- **Em atenção:** trechos marcados com `atencao: true`
- **Comandos simulados:** quantidade de interações em `interacoes.js`
- **Ocorrências no recorte:** soma das ocorrências do gráfico de barras (34)

> Os gráficos usam um **recorte de 34 ocorrências de outubro**. Esse número não é a contagem dos 4 trechos da tela de Consultas: os trechos são os pontos monitorados, e o recorte é o total de ocorrências registradas no mês.

**Gráfico de barras: ocorrências por tipo.** Responde *"quais problemas mais aparecem?"*
Vegetação/galhos 9, buraco 6, sinalização 4, drenagem 3, animal na pista 5, veículo parado 7. Total: 34.

**Gráfico de pizza: ocorrências por rodovia.** Responde *"onde os problemas se concentram?"*
SP-280: 18, SP-270: 9, SP-021: 7. Total: 34, o mesmo recorte das barras dividido por rodovia.

**Velocímetros**

- **Atendidas no prazo (68/100):** percentual das ocorrências resolvidas em até 24h
- **Poda pendente (6/9):** das 9 ocorrências de vegetação do recorte, quantas ainda aguardam poda
- **Cobertura da inspeção (54/100):** percentual dos km previstos que já foram percorridos no mês

## Identidade visual

Paleta inspirada na sinalização de rodovias: **verde das placas** (cor principal), **amarelo de sinalização** (destaque) e **laranja dos cones de obra** (indicadores e alertas). As cores estão definidas como variáveis em `:root`, no `src/index.css`.

## Como rodar

Pré-requisito: Node.js 20.19+ ou 22.12+.

```bash
git clone https://github.com/marianapergentinofonseca-source/challenge-motiva-frontend-2TIAPR.git
cd challenge-motiva-frontend-2TIAPR
npm install
npm run dev
```

Abra a URL que aparecer no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
```

## Tecnologias

- React 19 + Vite 8
- Chart.js + react-chartjs-2 (gráficos)
- Navegação entre telas feita com `useState`, sem React Router

## Estrutura de pastas

```
src/
  components/   peças reutilizáveis (Header, Nav, Layout, cards, gráficos, tabela)
  pages/        telas (Home, Consultas, Interacoes, Dashboard)
  data/         arrays e objetos fixos da sprint
  utils/        funções sem JSX (formatar datas, somar, registrar o Chart.js)
```

## Integrantes e divisão de tarefas

| Integrante | RM | Responsável por |
|---|---|---|
| Mariana Pergentino Fonseca | 568252 | _preencher_ |
| _nome_ | _RM_ | _preencher_ |
| _nome_ | _RM_ | _preencher_ |
| _nome_ | _RM_ | _preencher_ |

## O que fica para a Sprint 2

Os comentários `// TODO Sprint 2` no código marcam onde cada item vai entrar:

- Formulário para cadastrar trechos e ocorrências
- Filtro por gravidade ou tipo de ocorrência
- Selo de gravidade (baixa, média, alta)
- Status da ocorrência (aberta, em atendimento, resolvida)
- Painel calculado por trecho (`src/utils/analisarTrecho.js`)
- Dados salvos no `localStorage`, para não se perderem ao recarregar a página

## Além do pedido

_Nada além do escopo da Sprint 1 até o momento._
