export type Referencia = {
  texto: string;
  url?: string;
};

export type Periodo = {
  slug: string;
  nome: string;
  inicio: number;
  fim: number | null;
  descricao: string;
  texto?: string[];
  presidentes?: { nome: string; mandato: string }[];
  eventos?: { ano: number; titulo: string }[];
  referencias?: Referencia[];
};

const comuns: Referencia[] = [
  { texto: "FAUSTO, Boris. História do Brasil. São Paulo: Edusp, 2013." },
  { texto: "SCHWARCZ, Lilia M.; STARLING, Heloisa M. Brasil: uma biografia. São Paulo: Companhia das Letras, 2015." },
];

const base: Periodo[] = [
  {
    slug: "republica-da-espada",
    nome: "República da Espada",
    inicio: 1889,
    fim: 1894,
    descricao: "Primeira fase da República brasileira, governada por militares.",
    texto: [
      "A República foi proclamada em 15 de novembro de 1889, quando um movimento militar liderado pelo marechal Deodoro da Fonseca derrubou o gabinete imperial e encerrou a Monarquia. Deodoro chefiou o Governo Provisório, que preparou a primeira Constituição republicana.",
      "O período ficou conhecido como República da Espada porque os dois primeiros presidentes foram marechais do Exército: Deodoro da Fonseca e Floriano Peixoto. A fase foi de instabilidade: crise financeira com o Encilhamento, disputas entre o Executivo e o Congresso e revoltas contra o governo.",
      "O período terminou em 1894, com a posse de Prudente de Morais, o primeiro presidente civil, que inaugurou a chamada República Oligárquica.",
    ],
    presidentes: [
      { nome: "Deodoro da Fonseca", mandato: "1889–1891" },
      { nome: "Floriano Peixoto", mandato: "1891–1894" },
    ],
    eventos: [
      { ano: 1889, titulo: "Proclamação da República e início do Governo Provisório" },
      { ano: 1890, titulo: "Encilhamento: crise especulativa ligada à política financeira do governo" },
      { ano: 1891, titulo: "Promulgação da Constituição (federalismo e presidencialismo)" },
      { ano: 1891, titulo: "Deodoro fecha o Congresso, enfrenta a Primeira Revolta da Armada e renuncia" },
      { ano: 1893, titulo: "Revolta da Armada e Revolução Federalista contra o governo de Floriano" },
      { ano: 1894, titulo: "Eleição de Prudente de Morais, primeiro presidente civil" },
    ],
  },
  {
    slug: "republica-oligarquica",
    nome: "República Oligárquica",
    inicio: 1894,
    fim: 1930,
    descricao: "Período marcado pelo coronelismo e pela política do café com leite.",
    texto: [
      "A República Oligárquica começou em 1894, com a posse de Prudente de Morais, o primeiro presidente civil do país. Nessa fase, o poder federal ficou concentrado nas mãos das elites agrárias, sobretudo as de São Paulo e Minas Gerais, ligadas ao café e à pecuária leiteira. Daí vem a expressão \"política do café com leite\", que descreve o predomínio dos dois estados na presidência, embora esse acordo nem sempre tenha funcionado.",
      "O sistema se sustentava em outros mecanismos. A política dos governadores, criada no governo de Campos Sales, trocava apoio entre o governo federal e as oligarquias estaduais. No interior, o coronelismo dava aos grandes proprietários o controle dos votos locais, e as eleições eram marcadas por voto aberto, fraude e pressão sobre os eleitores, o chamado voto de cabresto. Mulheres e analfabetos não votavam.",
      "O período também teve forte contestação social e política: a Guerra de Canudos, a Revolta da Vacina, a Revolta da Chibata, o Contestado, greves operárias e as revoltas tenentistas. Em 1930, a ruptura do acordo entre as elites paulistas e mineiras na sucessão presidencial, somada à derrota eleitoral de Getúlio Vargas, levou à Revolução de 1930, que encerrou a Primeira República e iniciou a Era Vargas.",
    ],
    presidentes: [
      { nome: "Prudente de Morais", mandato: "1894–1898" },
      { nome: "Campos Sales", mandato: "1898–1902" },
      { nome: "Rodrigues Alves", mandato: "1902–1906" },
      { nome: "Afonso Pena", mandato: "1906–1909" },
      { nome: "Nilo Peçanha", mandato: "1909–1910" },
      { nome: "Hermes da Fonseca", mandato: "1910–1914" },
      { nome: "Venceslau Brás", mandato: "1914–1918" },
      { nome: "Delfim Moreira", mandato: "1918–1919" },
      { nome: "Epitácio Pessoa", mandato: "1919–1922" },
      { nome: "Artur Bernardes", mandato: "1922–1926" },
      { nome: "Washington Luís", mandato: "1926–1930" },
    ],
    eventos: [
      { ano: 1894, titulo: "Prudente de Morais assume como primeiro presidente civil" },
      { ano: 1897, titulo: "Fim da Guerra de Canudos, no interior da Bahia" },
      { ano: 1898, titulo: "Campos Sales inaugura a política dos governadores" },
      { ano: 1904, titulo: "Revolta da Vacina, no Rio de Janeiro" },
      { ano: 1910, titulo: "Revolta da Chibata, de marinheiros contra castigos físicos" },
      { ano: 1912, titulo: "Início da Guerra do Contestado, no Paraná e em Santa Catarina" },
      { ano: 1917, titulo: "Greve geral de trabalhadores em São Paulo" },
      { ano: 1922, titulo: "Revolta dos 18 do Forte e Semana de Arte Moderna" },
      { ano: 1925, titulo: "Coluna Prestes percorre o interior do país" },
      { ano: 1930, titulo: "Revolução de 1930 derruba o governo e leva Vargas ao poder" },
    ],
  },
  {
    slug: "era-vargas",
    nome: "Era Vargas",
    inicio: 1930,
    fim: 1945,
    descricao: "Período de centralização do poder e modernização do Estado.",
    texto: [
      "A Era Vargas começou com a Revolução de 1930, que depôs o presidente Washington Luís, impediu a posse de Júlio Prestes e levou Getúlio Vargas ao poder, encerrando a República Oligárquica. O período durou 15 anos e costuma ser dividido em três fases: o Governo Provisório (1930–1934), o Governo Constitucional (1934–1937) e o Estado Novo (1937–1945).",
      "No Governo Provisório, Vargas governou sem Constituição, centralizou o poder, nomeou interventores nos estados e criou os ministérios do Trabalho e da Educação e Saúde. A reação de São Paulo levou à Revolução Constitucionalista de 1932, e em 1934 foi promulgada uma nova Constituição, que previu voto secreto, voto feminino e direitos trabalhistas. Vargas foi então eleito indiretamente para um mandato constitucional.",
      "Em novembro de 1937, com a justificativa de uma ameaça comunista baseada no falso Plano Cohen, Vargas fechou o Congresso e instaurou o Estado Novo, uma ditadura com censura, repressão política, propaganda oficial e governo por decretos-leis. Ao mesmo tempo, o regime promoveu a industrialização e criou a CLT, em 1943. Com a participação do Brasil na Segunda Guerra Mundial e o desgaste do regime autoritário, Vargas foi deposto por militares em 1945.",
    ],
    presidentes: [
      { nome: "Getúlio Vargas (Governo Provisório)", mandato: "1930–1934" },
      { nome: "Getúlio Vargas (Governo Constitucional)", mandato: "1934–1937" },
      { nome: "Getúlio Vargas (Estado Novo)", mandato: "1937–1945" },
    ],
    eventos: [
      { ano: 1930, titulo: "Revolução de 1930: Vargas assume a presidência em caráter provisório" },
      { ano: 1932, titulo: "Revolução Constitucionalista em São Paulo e novo Código Eleitoral (voto secreto e feminino)" },
      { ano: 1934, titulo: "Nova Constituição e eleição indireta de Vargas" },
      { ano: 1935, titulo: "Intentona Comunista e Lei de Segurança Nacional" },
      { ano: 1937, titulo: "Plano Cohen (documento falso), golpe de 10 de novembro e início do Estado Novo" },
      { ano: 1941, titulo: "Criação da Companhia Siderúrgica Nacional" },
      { ano: 1942, titulo: "Brasil entra na Segunda Guerra Mundial ao lado dos Aliados" },
      { ano: 1943, titulo: "Criação da Consolidação das Leis do Trabalho (CLT)" },
      { ano: 1945, titulo: "Vargas é deposto, encerrando o Estado Novo" },
    ],
  },
  {
    slug: "republica-populista",
    nome: "República Populista",
    inicio: 1946,
    fim: 1964,
    descricao: "Retorno da democracia após o Estado Novo.",
    texto: [
      "Com a queda de Vargas em 1945, o país voltou a ter eleições diretas, e em 1946 foi promulgada uma nova Constituição. O período, também chamado de Quarta República, teve presidentes eleitos pelo voto, partidos nacionais e disputa entre forças conservadoras e trabalhistas, num cenário em que lideranças personalistas e o apelo direto às massas tiveram grande peso, o que levou muitos autores a chamá-lo de populista.",
      "Eurico Gaspar Dutra abriu a fase, e Getúlio Vargas voltou ao poder pelo voto em 1951, num governo marcado pelo nacionalismo econômico e pela criação da Petrobras. Sua morte por suicídio, em 1954, abalou o país. Juscelino Kubitschek foi eleito em 1955, enfrentou resistências à posse e governou com o Plano de Metas e a construção de Brasília, num período de crescimento econômico e de aumento da inflação e da dívida externa.",
      "A estabilidade acabou no início dos anos 1960. Jânio Quadros, eleito em 1960, renunciou depois de sete meses, e a posse do vice, João Goulart, só foi aceita com a adoção temporária do parlamentarismo. Em 1963, um plebiscito restabeleceu o presidencialismo, e Goulart passou a propor reformas de base, que provocaram forte reação política. Em 31 de março de 1964, um golpe com participação de militares e de setores civis derrubou o governo e encerrou o período.",
    ],
    presidentes: [
      { nome: "Eurico Gaspar Dutra", mandato: "1946–1951" },
      { nome: "Getúlio Vargas", mandato: "1951–1954" },
      { nome: "Café Filho", mandato: "1954–1955" },
      { nome: "Carlos Luz (interino)", mandato: "1955" },
      { nome: "Nereu Ramos (interino)", mandato: "1955–1956" },
      { nome: "Juscelino Kubitschek", mandato: "1956–1961" },
      { nome: "Jânio Quadros", mandato: "1961" },
      { nome: "Ranieri Mazzilli (interino)", mandato: "1961" },
      { nome: "João Goulart", mandato: "1961–1964" },
    ],
    eventos: [
      { ano: 1946, titulo: "Posse de Dutra e promulgação da nova Constituição" },
      { ano: 1951, titulo: "Vargas volta à presidência, eleito pelo voto direto" },
      { ano: 1953, titulo: "Criação da Petrobras" },
      { ano: 1954, titulo: "Suicídio de Vargas" },
      { ano: 1956, titulo: "Posse de Juscelino Kubitschek e início do Plano de Metas" },
      { ano: 1960, titulo: "Inauguração de Brasília e eleição de Jânio Quadros" },
      { ano: 1961, titulo: "Renúncia de Jânio e posse de Goulart sob o parlamentarismo" },
      { ano: 1963, titulo: "Plebiscito restabelece o presidencialismo" },
      { ano: 1964, titulo: "Golpe de 31 de março derruba João Goulart" },
    ],
  },
  {
    slug: "ditadura-militar",
    nome: "Ditadura Militar",
    inicio: 1964,
    fim: 1985,
    descricao: "Regime militar instaurado após o golpe de 1964.",
    texto: [
      "O regime começou com o golpe de 31 de março de 1964, que derrubou o presidente João Goulart com participação de militares e de setores civis. Nos primeiros anos, os Atos Institucionais suspenderam direitos políticos, cassaram mandatos, acabaram com as eleições diretas para presidente e criaram o bipartidarismo, com a Arena, governista, e o MDB, de oposição. Os cinco presidentes do período foram militares escolhidos dentro do sistema.",
      "Em 1968, o AI-5 deu início à fase mais dura do regime: o Congresso foi fechado, o habeas corpus foi suspenso para crimes políticos e a censura se ampliou. No governo Médici (1969–1974), a repressão a opositores chegou ao auge, com prisões, tortura, exílios e casos de mortes e desaparecimentos, ao mesmo tempo em que a economia crescia rapidamente, no chamado \"milagre econômico\".",
      "A partir de 1974, Geisel iniciou uma abertura política que ele mesmo descreveu como lenta, gradual e segura. Seu governo revogou o AI-5, e o de Figueiredo aprovou a Lei da Anistia em 1979 e restabeleceu o pluripartidarismo. Em 1984, a campanha das Diretas Já levou multidões às ruas pedindo eleições diretas para presidente. A emenda não foi aprovada, e em 1985 o Colégio Eleitoral elegeu Tancredo Neves, encerrando o ciclo de presidentes militares.",
    ],
    presidentes: [
      { nome: "Ranieri Mazzilli (interino)", mandato: "1964" },
      { nome: "Humberto Castello Branco", mandato: "1964–1967" },
      { nome: "Artur da Costa e Silva", mandato: "1967–1969" },
      { nome: "Junta Militar", mandato: "1969" },
      { nome: "Emílio Garrastazu Médici", mandato: "1969–1974" },
      { nome: "Ernesto Geisel", mandato: "1974–1979" },
      { nome: "João Figueiredo", mandato: "1979–1985" },
    ],
    eventos: [
      { ano: 1964, titulo: "Golpe de 31 de março e AI-1, que acaba com as eleições diretas para presidente" },
      { ano: 1965, titulo: "AI-2 institui o bipartidarismo (Arena e MDB)" },
      { ano: 1968, titulo: "AI-5: fechamento do Congresso, censura e suspensão de garantias" },
      { ano: 1969, titulo: "Costa e Silva é afastado por doença e uma junta militar assume; Médici toma posse" },
      { ano: 1974, titulo: "Geisel inicia a abertura política \"lenta, gradual e segura\"" },
      { ano: 1978, titulo: "Geisel revoga o AI-5, com efeito a partir de 1979" },
      { ano: 1979, titulo: "Lei da Anistia e fim do bipartidarismo" },
      { ano: 1984, titulo: "Campanha das Diretas Já; a emenda das eleições diretas não é aprovada" },
      { ano: 1985, titulo: "Colégio Eleitoral elege Tancredo Neves" },
    ],
  },
  {
    slug: "nova-republica",
    nome: "Nova República",
    inicio: 1985,
    fim: null,
    descricao: "Período democrático iniciado após a redemocratização.",
    texto: [
      "A Nova República começou em 1985, com o fim do ciclo de presidentes militares. O Colégio Eleitoral elegeu Tancredo Neves, que adoeceu antes de tomar posse, e o vice, José Sarney, assumiu a presidência. Em 1988, foi promulgada a Constituição, símbolo da redemocratização, e em 1989 o país voltou a escolher o presidente pelo voto direto.",
      "Nos anos 1990, Fernando Collor foi o primeiro presidente eleito pelo voto direto após a ditadura, mas renunciou em 1992, em meio a um processo de impeachment por corrupção, e foi sucedido pelo vice, Itamar Franco. No governo de Itamar, o Plano Real, coordenado pelo então ministro da Fazenda Fernando Henrique Cardoso, reduziu a inflação, e Cardoso foi eleito presidente em 1994 e reeleito em 1998.",
      "Entre 2003 e 2016, o país teve dois mandatos de Luiz Inácio Lula da Silva e o governo de Dilma Rousseff, eleita em 2010 e reeleita em 2014. Em 2016, Dilma sofreu impeachment no Congresso, e o vice, Michel Temer, assumiu até o fim do mandato. A palavra usada para descrever esse episódio é disputada: seus defensores falam em impeachment dentro das regras constitucionais, e seus críticos falam em golpe parlamentar.",
      "Jair Bolsonaro foi eleito em 2018 e governou de 2019 a 2022, quando Lula venceu a eleição e voltou à presidência em 2023. Em 8 de janeiro de 2023, manifestantes invadiram as sedes dos Três Poderes, em Brasília. Em 2025, o STF condenou Bolsonaro e aliados por tentativa de golpe de Estado, e a defesa contesta a condenação. Em 25 de outubro de 2026, Lula foi reeleito no segundo turno, com mandato previsto para começar em janeiro de 2027.",
    ],
    presidentes: [
      { nome: "José Sarney", mandato: "1985–1990" },
      { nome: "Fernando Collor de Mello", mandato: "1990–1992" },
      { nome: "Itamar Franco", mandato: "1992–1995" },
      { nome: "Fernando Henrique Cardoso", mandato: "1995–2002" },
      { nome: "Lula (1º e 2º mandatos)", mandato: "2003–2010" },
      { nome: "Dilma Rousseff", mandato: "2011–2016" },
      { nome: "Michel Temer", mandato: "2016–2018" },
      { nome: "Jair Bolsonaro", mandato: "2019–2022" },
      { nome: "Lula (3º mandato)", mandato: "2023–atual" },
    ],
    eventos: [
      { ano: 1985, titulo: "Colégio Eleitoral elege Tancredo Neves; Sarney assume a presidência" },
      { ano: 1988, titulo: "Promulgação da Constituição de 1988" },
      { ano: 1989, titulo: "Primeira eleição presidencial direta desde o fim da ditadura" },
      { ano: 1992, titulo: "Impeachment de Collor e posse de Itamar Franco" },
      { ano: 1994, titulo: "Plano Real reduz a inflação" },
      { ano: 2002, titulo: "Eleição de Lula, que toma posse em 2003" },
      { ano: 2016, titulo: "Impeachment de Dilma Rousseff e posse de Michel Temer" },
      { ano: 2018, titulo: "Eleição de Jair Bolsonaro" },
      { ano: 2023, titulo: "Posse de Lula e ataques de 8 de janeiro às sedes dos Três Poderes" },
      { ano: 2025, titulo: "STF condena Bolsonaro e aliados pela trama golpista" },
      { ano: 2026, titulo: "Lula é reeleito no segundo turno de 25 de outubro" },
    ],
  },
];

const referenciasPorSlug: Record<string, Referencia[]> = {
  "republica-da-espada": [
    ...comuns,
    { texto: "FERREIRA, Jorge; DELGADO, Lucilia de A. N. (orgs.). O Brasil republicano, v. 1: O tempo do liberalismo excludente. Rio de Janeiro: Civilização Brasileira, 2003." },
  ],
  "republica-oligarquica": [
    ...comuns,
    { texto: "FERREIRA, Jorge; DELGADO, Lucilia de A. N. (orgs.). O Brasil republicano, v. 1: O tempo do liberalismo excludente. Rio de Janeiro: Civilização Brasileira, 2003." },
  ],
  "era-vargas": [
    ...comuns,
    { texto: "FERREIRA, Jorge; DELGADO, Lucilia de A. N. (orgs.). O Brasil republicano, v. 2: O tempo do nacional-estatismo. Rio de Janeiro: Civilização Brasileira, 2003." },
  ],
  "republica-populista": [
    ...comuns,
    { texto: "FERREIRA, Jorge; DELGADO, Lucilia de A. N. (orgs.). O Brasil republicano, v. 3: O tempo da experiência democrática. Rio de Janeiro: Civilização Brasileira, 2003." },
  ],
  "ditadura-militar": [
    ...comuns,
    { texto: "FERREIRA, Jorge; DELGADO, Lucilia de A. N. (orgs.). O Brasil republicano, v. 4: O tempo da ditadura. Rio de Janeiro: Civilização Brasileira, 2003." },
  ],
  "nova-republica": [
    ...comuns,
    { texto: "FERREIRA, Jorge; DELGADO, Lucilia de A. N. (orgs.). O Brasil republicano, v. 5: O tempo da Nova República. Rio de Janeiro: Civilização Brasileira, 2018." },
    {
      texto: "TRE-SP. Eleições 2026: Lula é reeleito presidente da República (25/10/2026).",
      url: "https://www.tre-sp.jus.br/comunicacao/noticias/2026/Outubro/eleicoes-2026-lula-e-reeleito-presidente-da-republica-confira-resultado-do-2o-turno-em-sp",
    },
    {
      texto: "CNN Brasil. Condenação de Bolsonaro no STF pela trama golpista completa 1 ano.",
      url: "https://www.cnnbrasil.com.br/politica/condenacao-de-bolsonaro-no-stf-pela-trama-golpista-completa-1-ano/",
    },
    {
      texto: "Agência Brasil. Bolsonaro entra com revisão criminal no STF para anular condenação (maio de 2026).",
      url: "https://agenciabrasil.ebc.com.br/justica/noticia/2026-05/bolsonaro-entra-com-revisao-criminal-no-stf-para-anular-condenacao",
    },
  ],
};

export const periodos: Periodo[] = base.map((p) => ({
  ...p,
  referencias: referenciasPorSlug[p.slug],
}));