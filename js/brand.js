/* ============================================================
   brand.js — THE POWER | ACADEMIA DE MUSCULAÇÃO
   ------------------------------------------------------------
   MODO PADRÃO: site de demonstração com direção baseada em Framer
   (tipografia de pôster, tela escura, gradientes e CTA claro em pílula).
   As cores do conceito são provisórias, pois a identidade oficial não foi localizada.

   CONFIRMADO (set/2026)
     - Nome "The Power" e categoria "Academia" — perfil do
       Google Maps: https://www.google.com/maps/place/The+Power/@-23.4831898,-46.7218722,17z/data=!16s%2Fg%2F1pv19p80y
     - O título "The Power | Academia de Musculação" veio do
       resultado do Google enviado pelo usuário.
     - Endereço: Av. Miguel de Castro, 57, Vila Pereira Barreto,
       São Paulo/SP, 02950-000 — perfil do Google Maps.
     - Telefone (11) 4306-5898 — perfil do Google Maps.
     - Horários: seg–sex 05:30–23:00, sáb 09:00–17:00,
       dom 10:00–13:00 — perfil do Waze para o mesmo endereço.

   A CONFIRMAR COM A ACADEMIA
     - WhatsApp (o perfil consultado publica telefone, não informa
       que o número também recebe mensagens).
     - Horários, planos, preços, modalidades além de musculação,
       aula experimental, público atendido, redes sociais, avaliação
       atual no Maps e acessibilidade da entrada.
     - Cores e logotipo oficiais. O monograma e o laranja deste
       conceito são provisórios e não foram apresentados como marca.
     - Fotos próprias e autorização para uso no site oficial.

   IMAGENS
     - assets/hero-wide.svg é uma ilustração vetorial provisória
       criada localmente. Não encontrei foto publicada pela academia.
       As fotos visíveis no Google Maps são de colaboradores do Maps;
       não foram copiadas. Substituir por foto autorizada da unidade.

   FONTES
     - Google Maps: https://www.google.com/maps/place/The+Power/@-23.4831898,-46.7218722,17z/data=!16s%2Fg%2F1pv19p80y
     - Waze: https://www.waze.com/live-map/directions/br/sp/the-power?to=place.ChIJjdhIBg35zpQRaAcC_UHItEk
   ============================================================ */

window.BRAND = {
  nome: 'The Power',
  sigla: 'TP',

  seo: {
    titulo: 'The Power | Academia de Musculação em Pirituba, São Paulo',
    descricao: 'The Power é uma academia na Vila Pereira Barreto, em Pirituba. Consulte o endereço, os horários publicados e o telefone da unidade.'
  },

  tema: {
    primary: '#f7f5f1',
    'primary-hover': '#ffffff',
    'primary-soft': '#392218',
    'primary-tint': '#241913',
    accent: '#f26936',
    'accent-soft': '#392218',
    'accent-ink': '#1b100b',
    'on-primary': '#17110e',
    canvas: '#111111',
    surface: '#191919',
    'surface-card': '#1d1d1d',
    'surface-deep': '#0d0d0d',
    ink: '#f7f5f1',
    body: '#d1cec8',
    muted: '#aaa69f',
    'muted-soft': '#77736e',
    border: '#30302f',
    'border-strong': '#484643',
    'footer-bg': '#0c0c0c',
    'footer-fg': '#f7f5f1',
    focus: '#ff8b5d'
  },

  fontes: {
    display: "'Archivo Black', Impact, sans-serif",
    corpo: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },

  contato: {
    whatsapp: '',
    whatsappLabel: '',
    telefone: '+55 11 4306-5898',
    telefoneLabel: '(11) 4306-5898',
    email: '',
    endereco: 'Av. Miguel de Castro, 57 — Vila Pereira Barreto — São Paulo/SP — CEP 02950-000',
    enderecoCurto: 'Av. Miguel de Castro, 57 — Pirituba'
  },

  links: {
    google: 'https://www.google.com/maps/place/The+Power/@-23.4831898,-46.7218722,17z/data=!16s%2Fg%2F1pv19p80y'
  },

  redes: [],

  ui: {
    pularConteudo: 'Pular para o conteúdo',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
    navPrincipal: 'Navegação principal'
  },

  nav: {
    academia: 'A academia',
    horarios: 'Horários',
    google: 'Google Maps',
    contato: 'Contato',
    cta: 'Ligar agora'
  },

  hero: {
    eyebrow: 'Musculação · Pirituba, São Paulo',
    tituloHtml: 'O seu treino.<br><em>Com intenção.</em>',
    subtitulo: 'A The Power é uma academia na Vila Pereira Barreto. Consulte a equipe sobre horários, planos e modalidades disponíveis.',
    ctaPrimario: 'Ligar para a academia',
    ctaSecundario: 'Ver localização',
    visualLabel: 'Ilustração provisória · foto oficial a incluir',
    fotoAlt: 'Ilustração vetorial provisória com barra e anilhas de musculação'
  },

  academia: {
    eyebrow: 'The Power · Vila Pereira Barreto',
    titulo: 'Informação clara para você começar',
    texto: 'Confira os dados publicados da unidade e fale diretamente com a academia para confirmar os detalhes do seu treino.',
    itens: [
      {
        icone: 'clock',
        numero: '01',
        titulo: 'Horários',
        texto: 'Veja os horários indicados nos mapas e confirme antes de planejar sua visita.'
      },
      {
        icone: 'dumbbell',
        numero: '02',
        titulo: 'Planos e modalidades',
        texto: 'Consulte a equipe sobre opções disponíveis, valores e condições atuais.'
      },
      {
        icone: 'pin',
        numero: '03',
        titulo: 'Como chegar',
        texto: 'A unidade fica na Av. Miguel de Castro, em Vila Pereira Barreto, Pirituba.'
      }
    ]
  },

  horarios: {
    eyebrow: 'Antes de sair',
    titulo: 'Horários publicados',
    cartaoTitulo: 'Horário de funcionamento',
    subtitulo: 'Informação encontrada no perfil do Waze para a unidade. Confirme pelo telefone, pois os horários podem mudar.',
    origem: 'Horários vistos no Waze e na página da GeoLista indicada pelo Maps, em setembro de 2026.',
    itens: [
      { dia: 'Segunda a sexta', hora: '05:30–23:00' },
      { dia: 'Sábado', hora: '09:00–17:00' },
      { dia: 'Domingo', hora: '10:00–13:00' }
    ],
    cta: 'Confirmar pelo telefone'
  },

  google: {
    eyebrow: 'Perfil no Google Maps',
    titulo: 'Encontre a unidade e abra o perfil',
    cta: 'Abrir perfil no Google'
  },

  contatoSecao: {
    eyebrow: 'Visite a unidade',
    titulo: 'A The Power fica em Pirituba.',
    subtitulo: 'Ligue para confirmar horários, planos e informações antes da primeira visita.',
    chaves: {
      telefone: 'Telefone',
      endereco: 'Endereço'
    },
    ctaMapa: 'Abrir rota no Google Maps',
    ctaTelefone: 'Ligar para a unidade'
  },

  rodape: {
    sobre: 'Academia de musculação na Vila Pereira Barreto, em Pirituba, São Paulo.',
    colLocal: 'Unidade',
    colContato: 'Contato',
    direitos: 'Todos os direitos reservados.',
    nota: 'Horários publicados consultados em setembro de 2026. Confirme com a academia.'
  }
};
