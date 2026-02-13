export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'portaria',
    title: 'Agente de Portaria',
    shortDescription: 'Profissionais treinados para garantir a segurança e o controle de acesso do seu condomínio ou empresa.',
    fullDescription: 'Nosso serviço de Agente de Portaria oferece profissionais altamente capacitados e treinados para garantir a segurança e o controle eficiente de acesso em condomínios, empresas e estabelecimentos comerciais. Com 10 anos de experiência no mercado, nossa equipe é formada por colaboradores próprios, devidamente uniformizados e preparados para atender com cordialidade e eficiência.',
    icon: 'ShieldCheck',
    features: [
      'Controle rigoroso de acesso de pessoas e veículos',
      'Recepção e atendimento profissional',
      'Monitoramento de portarias 24 horas',
      'Registro detalhado de ocorrências',
      'Equipe própria uniformizada',
      'Treinamento contínuo dos profissionais'
    ],
    benefits: [
      'Maior segurança para seu patrimônio',
      'Atendimento cordial e profissional',
      'Redução de riscos e imprevistos',
      'Tranquilidade para moradores e colaboradores'
    ]
  },
  {
    id: 'limpeza',
    title: 'Limpeza e Conservação',
    shortDescription: 'Serviços completos de limpeza profissional para manter seu ambiente sempre impecável e organizado.',
    fullDescription: 'A CONFIANÇA oferece serviços completos de limpeza e conservação com padrão de excelência. Nossa equipe utiliza produtos profissionais de qualidade e técnicas modernas para garantir ambientes limpos, higienizados e bem conservados. Atendemos condomínios, empresas, indústrias e estabelecimentos comerciais.',
    icon: 'Sparkles',
    features: [
      'Limpeza diária, semanal ou mensal',
      'Uso de produtos profissionais e ecológicos',
      'Equipe treinada e uniformizada',
      'Limpeza de áreas comuns e privativas',
      'Conservação de pisos, vidros e fachadas',
      'Cronograma personalizado de limpeza'
    ],
    benefits: [
      'Ambiente sempre limpo e organizado',
      'Redução de custos com produtos e equipamentos',
      'Equipe profissional dedicada',
      'Melhoria na imagem da empresa'
    ]
  },
  {
    id: 'jardinagem',
    title: 'Jardinagem e Paisagismo',
    shortDescription: 'Cuidados especializados para manter áreas verdes bonitas, saudáveis e bem conservadas.',
    fullDescription: 'Transformamos e mantemos áreas verdes com nossos serviços especializados de jardinagem e paisagismo. Nossa equipe cuida de jardins, gramados e áreas verdes com técnica e dedicação, garantindo ambientes agradáveis e bem cuidados durante todo o ano.',
    icon: 'Trees',
    features: [
      'Manutenção preventiva de jardins',
      'Poda de árvores e arbustos',
      'Corte e tratamento de gramados',
      'Adubação e controle de pragas',
      'Plantio e replantio de espécies',
      'Projetos de paisagismo'
    ],
    benefits: [
      'Áreas verdes sempre bem cuidadas',
      'Valorização do imóvel',
      'Ambiente mais agradável e saudável',
      'Economia com mão de obra especializada'
    ]
  },
  {
    id: 'manutencao',
    title: 'Manutenção Predial',
    shortDescription: 'Serviços completos de manutenção para conservar e valorizar seu patrimônio.',
    fullDescription: 'Oferecemos serviços completos de manutenção predial preventiva e corretiva, garantindo a conservação e o bom funcionamento de todas as instalações do seu condomínio ou empresa. Nossa equipe técnica está preparada para resolver desde pequenos reparos até grandes intervenções.',
    icon: 'Wrench',
    features: [
      'Manutenção preventiva e corretiva',
      'Reparos elétricos e hidráulicos',
      'Pintura e acabamento',
      'Reparos em alvenaria',
      'Manutenção de portões e esquadrias',
      'Serviços de serralheria'
    ],
    benefits: [
      'Prevenção de problemas maiores',
      'Conservação do patrimônio',
      'Rapidez no atendimento',
      'Custos reduzidos com manutenção'
    ]
  }
];

export const featuredServices = services.filter(s =>
  s.id === 'portaria' || s.id === 'limpeza'
);
