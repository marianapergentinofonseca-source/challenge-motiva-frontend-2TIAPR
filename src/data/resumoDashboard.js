// Recorte simulado de outubro. Não é a contagem dos quatro trechos da consulta.
// Os três gráficos leem estes objetos. Se o grupo mudar um número, muda o desenho.
//
// Ponto de extensão: copiem um objeto para cada gráfico novo e documentem
// no README de onde saiu o número. Não encham este arquivo de campos soltos.
 
export const ocorrenciasPorTipo = {
  titulo: 'Ocorrências por tipo (outubro)',
  labels: ['Vegetação / galhos', 'Buraco', 'Sinalização', 'Drenagem', 'Animal na pista', 'Veículo parado'],
  valores: [9, 6, 4, 3, 5, 7],
}
 
export const ocorrenciasPorRodovia = {
  titulo: 'Ocorrências por rodovia (outubro)',
  labels: ['SP-280', 'SP-270', 'SP-021'],
  valores: [18, 9, 7],
}
 
export const velocimetros = [
  {
    id: 'atendimento',
    titulo: 'Atendidas no prazo',
    valor: 68,
    maximo: 100,
    detalhe: '% das ocorrências resolvidas em até 24h',
    cor: '#9a4e12',
  },
  {
    id: 'poda',
    titulo: 'Poda pendente',
    valor: 6,
    maximo: 9,
    detalhe: 'de 9 ocorrências de vegetação ainda sem poda',
    cor: '#1e3a5f',
  },
  {
    id: 'inspecao',
    titulo: 'Cobertura da inspeção',
    valor: 54,
    maximo: 100,
    detalhe: '% dos km previstos já percorridos',
    cor: '#1e3a5f',
  },
]