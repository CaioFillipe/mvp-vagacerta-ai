import { Job, ResumeAnalysis, CareerPlanStep, UserProfile } from '../types';

export const initialUser: UserProfile = {
  name: 'Rafael Costa',
  email: 'rafael.costa@email.com',
  role: 'Desenvolvedor Front-End / React',
  seniority: 'Júnior',
  plan: 'Gratuito',
  analysesCount: 1,
  analysesLimit: 3,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
};

export const mockJobs: Job[] = [
  {
    id: 'job-1',
    title: 'Desenvolvedor Front-End Júnior (React/TypeScript)',
    company: 'TechFlow Soluções',
    location: 'São Paulo, SP (Remoto)',
    type: 'Remoto',
    seniority: 'Júnior',
    salary: 'R$ 3.500 - R$ 4.800',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
    description: 'Buscamos um Desenvolvedor Front-End Júnior apaixonado por criar interfaces modernas e responsivas. Você irá trabalhar diretamente com nossa equipe de produto utilizando React, TypeScript e Tailwind.',
    requirements: ['1+ ano de experiência com JavaScript/React', 'Familiaridade com TypeScript', 'Conhecimento em controle de versão (Git)', 'Boa comunicação e trabalho em equipe'],
    sourceUrl: 'https://techflow.example.com/jobs/fe-jr',
    postedAt: 'Há 2 dias',
    featured: true
  },
  {
    id: 'job-2',
    title: 'Engenheiro de Dados Júnior',
    company: 'DataMetrics Brasil',
    location: 'Belo Horizonte, MG (Híbrido)',
    type: 'Híbrido',
    seniority: 'Júnior',
    salary: 'R$ 4.000 - R$ 5.500',
    tags: ['Python', 'SQL', 'ETL', 'AWS', 'Pandas'],
    description: 'Estamos expandindo nosso time de dados. O profissional irá auxiliar na construção de pipelines de dados, modelagem SQL e automação de relatórios analíticos.',
    requirements: ['Graduação em andamento ou concluída em exatas/TI', 'Python intermediário e SQL avançado', 'Conhecimento básico em Cloud (AWS/GCP)', 'Noções de ferramentas de ETL'],
    sourceUrl: 'https://datametrics.example.com/jobs/data-jr',
    postedAt: 'Há 1 dia',
    featured: true
  },
  {
    id: 'job-3',
    title: 'Desenvolvedor Full Stack Pleno (Node/React)',
    company: 'Inovação Digital S.A.',
    location: 'Florianópolis, SC (Remoto)',
    type: 'Remoto',
    seniority: 'Pleno',
    salary: 'R$ 7.000 - R$ 9.500',
    tags: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    description: 'Procuramos um Desenvolvedor Full Stack Pleno para desenvolver APIs RESTful robustas e interfaces escaláveis em nossa plataforma SaaS de logística.',
    requirements: ['Experiência sólida com Node.js e Express/NestJS', 'Domínio de React e ecossistema moderno', 'Experiência com bancos relacionais (PostgreSQL)', 'Conhecimento em Docker e CI/CD'],
    sourceUrl: 'https://inovacaodigital.example.com/jobs/fs-pl',
    postedAt: 'Hoje',
    featured: false
  },
  {
    id: 'job-4',
    title: 'Estágio em Desenvolvimento Web',
    company: 'Alpha Code Lab',
    location: 'Rio de Janeiro, RJ (Remoto)',
    type: 'Remoto',
    seniority: 'Estágio',
    salary: 'R$ 1.800 - R$ 2.400',
    tags: ['JavaScript', 'HTML/CSS', 'React', 'Git'],
    description: 'Oportunidade de estágio para estudantes de cursos de TI. Você receberá mentoria sênior para desenvolver aplicações web modernas e participar de projetos reais.',
    requirements: ['Estar cursando Análise de Sistemas, Ciência da Computação ou afins', 'Conhecimento fundamental em lógica de programação e JavaScript', 'Vontade de aprender e evoluir rápido'],
    sourceUrl: 'https://alphacode.example.com/jobs/estagio-web',
    postedAt: 'Há 3 dias',
    featured: false
  },
  {
    id: 'job-5',
    title: 'Analista de Cibersegurança Júnior',
    company: 'CyberGuard Seguros',
    location: 'São Paulo, SP (Híbrido)',
    type: 'Híbrido',
    seniority: 'Júnior',
    salary: 'R$ 4.500 - R$ 6.000',
    tags: ['Redes', 'Linux', 'Segurança da Informação', 'Python'],
    description: 'Atuação em monitoramento de eventos de segurança, análise de vulnerabilidades e suporte a incidentes em infraestrutura corporativa.',
    requirements: ['Conhecimento em redes TCP/IP e sistemas Linux', 'Noções de testes de intrusão e análise de logs', 'Certificações iniciais (Security+ ou CEH) serão um diferencial'],
    sourceUrl: 'https://cyberguard.example.com/jobs/sec-jr',
    postedAt: 'Há 4 dias',
    featured: false
  }
];

export const mockAnalyses: ResumeAnalysis[] = [
  {
    id: 'an-1',
    jobTitle: 'Desenvolvedor Front-End Júnior (React/TypeScript)',
    company: 'TechFlow Soluções',
    score: 74,
    missingKeywords: ['TypeScript avançado', 'Tailwind CSS', 'Testes Unitários (Jest/React Testing Library)', 'CI/CD'],
    matchedKeywords: ['React', 'JavaScript', 'Git', 'HTML5', 'CSS3', 'Responsive Design'],
    strengths: ['Boa experiência declarada com projetos em React', 'Uso adequado de controle de versão (Git)', 'Formação alinhada à vaga'],
    improvements: ['Incluir projetos práticos utilizando TypeScript estrito', 'Adicionar menção a frameworks CSS modernos como Tailwind', 'Demonstrar conhecimento em testes automatizados'],
    createdAt: '10/11/2026'
  }
];

export const mockCareerSteps: CareerPlanStep[] = [
  {
    id: 'step-1',
    title: 'Domínio de TypeScript: Tipagem Avançada e Genéricos',
    category: 'Curso',
    provider: 'Alura / Rocketseat',
    duration: '15 horas',
    priority: 'Alta',
    completed: false,
    link: 'https://example.com/cursos/typescript'
  },
  {
    id: 'step-2',
    title: 'Tailwind CSS do Zero ao Avançado em Projetos Reais',
    category: 'Curso',
    provider: 'Udemy',
    duration: '10 horas',
    priority: 'Alta',
    completed: true,
    link: 'https://example.com/cursos/tailwind'
  },
  {
    id: 'step-3',
    title: 'Testes em React com Jest e React Testing Library',
    category: 'Curso',
    provider: 'Origamid / Youtube',
    duration: '12 horas',
    priority: 'Média',
    completed: false,
    link: 'https://example.com/cursos/testes'
  },
  {
    id: 'step-4',
    title: 'Projeto Prático: Dashboard SaaS responsivo com API externa',
    category: 'Projeto Prático',
    provider: 'VagaCerta AI Labs',
    duration: '20 horas',
    priority: 'Alta',
    completed: false
  }
];