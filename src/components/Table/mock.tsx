export const columns = [
  'Origem',
  'Destino',
  'Tempo',
  'Plano FaleMais',
  'Com FaleMais',
  'Sem FaleMais',
]

export const data = [
  {
    Origem: '01',
    Destino: '02',
    Tempo: '100',
    'Plano FaleMais': 'FaleMais 30',
    'Com FaleMais': 'R$8.00',
    'Sem FaleMais': 'R$12.00',
  },
  {
    Origem: '03',
    Destino: '04',
    Tempo: '60',
    'Plano FaleMais': 'FaleMais 30',
    'Com FaleMais': 'R$13.40',
    'Sem FaleMais': 'R$22.12',
  },
  {
    Origem: '05',
    Destino: '06',
    Tempo: '30',
    'Plano FaleMais': 'FaleMais 40',
    'Com FaleMais': 'R$12.50',
    'Sem FaleMais': 'R$15.56',
  },
] as Record<string, string>[]
