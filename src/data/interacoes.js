// Histórico simulado. O agente de voz ainda não existe.
// Cada item é um comando que o operador teria falado, com data e resposta fixa.
export const interacoes = [
  {
    id: 'i-1',
    texto: 'Registrar animal morto no km 50',
    data: '2026-10-05T14:32:00',
    resposta:
      'Comando simulado recebido. Animal morto anotado no km 50 da SP-280, sentido interior. Nesta sprint a resposta é fixa: ninguém está ouvindo o microfone.',
  },
  {
    id: 'i-2',
    texto: 'Verificar a situacao de um buraco no acostamento da SP-280, km 61 ao 70',
    data: '2026-10-06T09:18:00',
    resposta:
      'Trecho simulado da SP-280, km 61 ao 70, sentido capital. Situação registrada: buraco no acostamento.',
  },
  {
    id: 'i-3',
    texto: 'A placa do km 50 da Ayrton Senna está coberta pelo mato, entre o kilometro 19 e 21',
    data: '2026-10-04T16:12:00',
    resposta:
      'Comando simulado associado à SP-270, km 19 ao 21. Situação: placa de velocidade encoberta.',
  },
  {
    id: 'i-4',
    texto: 'Tem um carro parado no acostamento do km 20 do Rodoanel',
    data: '2026-10-03T11:48:00',
    resposta:
      'Comando simulado associado à SP-021, km 20 Situação: carro parado no acostamento.',
  },
]