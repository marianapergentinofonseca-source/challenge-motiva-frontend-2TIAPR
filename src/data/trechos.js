// Dados fixos da Sprint 1. Números e situações são simulados para a aula.
// TODO Sprint 2: este array deixa de alimentar a tela direto.
// Ele vira o valor inicial do useState de trechos no App.jsx
// (ou a lista começa vazia e o grupo cadastra pelo formulário).
export const trechos = [
  {
    id: 't-sp280-45',
    rodovia: 'SP-280',
    nome: 'Castello Branco',
    kmInicial: 08,
    kmFinal: 10,
    sentido: 'interior',
    situacao: 'Arvore com galhos acima do permitido entre o kilometro 8 e 10 ',
    atencao: true,
    atualizadoEm: '2026-10-05T14:30:00',
  },
  {
    id: 't-sp280-69',
    rodovia: 'SP-280',
    nome: 'Castello Branco',
    kmInicial: 61,
    kmFinal: 70,
    sentido: 'capital',
    situacao: 'buraco no acostamento',
    atencao: true,
    atualizadoEm: '2026-10-06T09:15:00',
  },
  {
    id: 't-sp270-15',
    rodovia: 'SP-270',
    nome: 'Raposo Tavares',
    kmInicial: 18,
    kmFinal: 25,
    sentido: 'interior',
    situacao: 'Placa de velocidade danificada',
    atencao: true,
    atualizadoEm: '2026-10-04T16:05:00',
  },
  {
    id: 't-sp021-19',
    rodovia: 'SP-021',
    nome: 'Rodoanel',
    kmInicial: 12,
    kmFinal: 16,
    sentido: 'leste',
    situacao: 'Drenagem obstruída no acostamento',
    atencao: true,
    atualizadoEm: '2026-10-03T11:40:00',
  },
]
 