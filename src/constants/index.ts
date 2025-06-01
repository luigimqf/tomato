import { CardItem, MenuItem } from "@/types";

export const MENU_ITEMS: MenuItem[] = [
  {
    title: "Página Inicial",
    href: "/",
  },
  {
    title: "Quem sou",
    href: "/#bio",
  },
  {
    title: "Especialidades",
    href: "/especialidades",
  },
  {
    title: "Contato",
    href: "/#contact",
  },
]

export const BIO_INFO: CardItem[] = [
  {
    title: "QUEM SOU",
    description: "Sou Lorrayne Reis, psicóloga com uma forte paixão pela compreensão do comportamento humano e pela promoção de mudanças positivas na vida dos meus pacientes. Acredito que cada pessoa possui um conjunto único de valores e, ao reconhecê-los, é possível tomar decisões que tragam mais significado e satisfação.",
  },
  {
    title: "FORMAÇÃO",
    list: [
      "PUC Minas, 2021, Bacharel em Psicologia",
      "Pós-graduação Lato Sensu, Neuropsicologia, 2022",
      "Pós-graduação Lato Sensu, Psicologia Organizacional, 2023",
      "Certificado em Uso Terapêutico da Cannabis, UNIFESP",
      "Pós-graduação em Cannabis Medicinal, FACUMINAS",
    ],
  },
  {
    title: "EXPERIÊNCIA",
    description: "Com mais de 10 anos de atuação em empresas, tenho desenvolvido habilidades em gestão de conflitos e promoção da saúde emocional, sempre voltada para a melhoria do clima organizacional. Minha experiência inclui a realização de consultorias para organizações que buscam criar ambientes de trabalho mais colaborativos e saudáveis. Também sou especialista no uso da cannabis terapêutica, auxiliando no tratamento de ansiedade, depressão e burnout, sempre com foco no bem-estar e na qualidade de vida dos meus pacientes.",
  },
  {
    title: "ESPECIALIDADES",
    list: [
      "Atendimento a adultos, crianças e adolescentes",
      "Terapia individual e para casais",
      "Dificuldades nas relações",
      "Gerenciamento de estresse e trauma",
      "Crises de ansiedade",
      "Vícios",
    ],
  },
];

export const SPECIALTIES:  CardItem[] = [
  {
    title: "Atendimento a adultos, crianças e adolescentes",
    description: "Com uma abordagem centrada no indivíduo, ofereço atendimento especializado para adultos, crianças e adolescentes, visando atender às suas necessidades únicas. Utilizo técnicas baseadas na psicologia cognitivo-comportamental para promover o autoconhecimento e o desenvolvimento emocional, ajudando cada paciente a superar desafios e construir resiliência."
  },
  {
    title: "Terapia individual e para casais",
    description: "Na terapia individual, crio um espaço seguro e acolhedor onde os pacientes podem explorar suas emoções e aprender a lidar com desafios pessoais. Para casais, trabalho na comunicação e na resolução de conflitos, proporcionando ferramentas práticas para fortalecer relacionamentos e resolver diferenças, sempre valorizando os sentimentos e necessidades de cada um."
  },
  {
    title: "Dificuldades nas relações",
    description: "Compreendo que as dificuldades nas relações podem impactar a qualidade de vida de uma pessoa. Através da escuta ativa e da análise das dinâmicas interpessoais, ajudo meus pacientes a identificar padrões que podem estar prejudicando suas relações e trabalho junto a eles em estratégias eficazes para promover conexões mais saudáveis e satisfatórias."
  },
  {
    title: "Gerenciamento de estresse e trauma",
    description: "Possuo uma forte experiência em ajudar indivíduos a gerenciarem o estresse e os efeitos de traumas passados. Por meio de intervenções adaptadas às necessidades de cada pessoa, auxilio na reestruturação de pensamentos e na ressignificação de experiências dolorosas, promovendo o alívio emocional e uma vida mais equilibrada."
  },
  {
    title: "Crises de ansiedade",
    description: "As crises de ansiedade podem ser debilitantes, mas com meu apoio, os pacientes aprendem a reconhecer os gatilhos e a desenvolver técnicas de enfrentamento. Utilizando abordagens terapêuticas personalizadas, ensino habilidades práticas que ajudam a reduzir a intensidade da ansiedade, promovendo um estado de calma e segurança."
  },
  {
    title: "Vícios",
    description: "No trabalho com vícios, meu foco é compreender as raízes do comportamento aditivo e ajudar meus pacientes a desenvolver um plano de recuperação sustentável. Com um olhar acolhedor e estratégias baseadas em evidência, auxilio na construção de uma vida mais saudável, livre de dependências, e como resultado, mais alinhada com os seus valores pessoais."
  },
]