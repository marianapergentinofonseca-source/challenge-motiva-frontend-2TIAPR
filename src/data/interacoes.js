// Histórico simulado. O agente de voz ainda não existe.
// Cada item é um comando que o operador teria falado, com data e resposta fixa.
export const interacoes = [
  {
    id: 'i-1',
    texto: 'Registrar galhos acima do permitido no km 9 da Castello Branco',
    data: '2026-10-05T14:32:00',
    resposta:
      'Comando simulado recebido. Galhos acima do permitido anotados no km 9 da SP-280, trecho do km 8 ao 10, sentido interior. Nesta sprint a resposta é fixa: ninguém está ouvindo o microfone.',
  },
  {
    id: 'i-2',
    texto: 'Verificar a situação do buraco no acostamento do km 65 da Castello Branco',
    data: '2026-10-06T09:18:00',
    resposta:
      'Trecho simulado da SP-280, km 61 ao 70, sentido capital. Situação registrada: buraco no acostamento.',
  },
  {
    id: 'i-3',
    texto: 'A placa de velocidade do km 20 da Raposo Tavares está danificada',
    data: '2026-10-04T16:12:00',
    resposta:
      'Comando simulado associado à SP-270, km 18 ao 25, sentido interior. Situação: placa de velocidade danificada.',
  },
  {
    id: 'i-4',
    texto: 'Tem um carro parado no acostamento do km 14 do Rodoanel',
    data: '2026-10-03T11:48:00',
    resposta:
      'Comando simulado associado à SP-021, km 12 ao 16, sentido leste. Novo relato: veículo parado no acostamento. Situação já registrada no trecho: drenagem obstruída.',
  },
]
