// Serviços de Dados e Mock (Simulação)
const STORAGE_KEYS = {
    USER: 'vc_vanilla_user',
    JOBS: 'vc_vanilla_jobs',
    ANALYSES: 'vc_vanilla_analyses',
    STEPS: 'vc_vanilla_steps',
    SAVED: 'vc_vanilla_saved'
};

const initialUser = {
    name: 'Rafael Costa',
    email: 'rafael.costa@email.com',
    role: 'Desenvolvedor Front-End',
    seniority: 'Júnior',
    plan: 'Gratuito',
    analysesCount: 1,
    analysesLimit: 3,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
};

const mockJobs = [
    {
        id: 'job-1',
        title: 'Desenvolvedor Front-End Júnior (React/TypeScript)',
        company: 'TechFlow Soluções',
        location: 'Remoto',
        seniority: 'Júnior',
        type: 'Remoto',
        salary: 'R$ 3.500 - R$ 4.800',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        description: 'Buscamos um Desenvolvedor Front-End Júnior apaixonado por criar interfaces modernas. Experiência com React, TypeScript e Tailwind.',
        featured: true
    },
    {
        id: 'job-2',
        title: 'Engenheiro de Dados Júnior',
        company: 'DataMetrics Brasil',
        location: 'Híbrido - BH',
        seniority: 'Júnior',
        type: 'Híbrido',
        salary: 'R$ 4.000 - R$ 5.500',
        tags: ['Python', 'SQL', 'AWS'],
        description: 'Auxiliar na construção de pipelines de dados, modelagem SQL e relatórios. Necessário Python e SQL avançado.',
        featured: false
    },
    {
        id: 'job-3',
        title: 'Estágio em Desenvolvimento Web',
        company: 'Alpha Code Lab',
        location: 'Remoto',
        seniority: 'Estágio',
        type: 'Remoto',
        salary: 'R$ 1.800 - R$ 2.400',
        tags: ['JavaScript', 'HTML/CSS', 'React'],
        description: 'Estágio para estudantes de TI. Mentoria para desenvolver aplicações web modernas. Lógica de programação necessária.',
        featured: false
    }
];

const mockAnalyses = [
    {
        id: 'an-1',
        jobTitle: 'Desenvolvedor Front-End Júnior',
        company: 'TechFlow Soluções',
        score: 74,
        missingKeywords: ['TypeScript avançado', 'Testes Unitários (Jest)', 'CI/CD'],
        matchedKeywords: ['React', 'JavaScript', 'HTML5', 'CSS3'],
        createdAt: '10/11/2026'
    }
];

const mockSteps = [
    { id: 'st-1', title: 'Domínio de TypeScript: Tipagem Avançada', provider: 'Alura', category: 'Curso', priority: 'Alta', completed: false },
    { id: 'st-2', title: 'Testes em React com Jest e RTL', provider: 'Youtube', category: 'Curso', priority: 'Média', completed: false },
    { id: 'st-3', title: 'Dashboard SaaS com API (Projeto)', provider: 'Prática', category: 'Projeto', priority: 'Alta', completed: true }
];

const StorageService = {
    init() {
        if (!localStorage.getItem(STORAGE_KEYS.USER)) localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(initialUser));
        if (!localStorage.getItem(STORAGE_KEYS.JOBS)) localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(mockJobs));
        if (!localStorage.getItem(STORAGE_KEYS.ANALYSES)) localStorage.setItem(STORAGE_KEYS.ANALYSES, JSON.stringify(mockAnalyses));
        if (!localStorage.getItem(STORAGE_KEYS.STEPS)) localStorage.setItem(STORAGE_KEYS.STEPS, JSON.stringify(mockSteps));
        if (!localStorage.getItem(STORAGE_KEYS.SAVED)) localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify(['job-1']));
    },
    get(key) { return JSON.parse(localStorage.getItem(key)); },
    set(key, val) { localStorage.setItem(key, JSON.stringify(val)); },
    reset() {
        localStorage.clear();
        this.init();
        window.location.reload();
    }
};

StorageService.init();
