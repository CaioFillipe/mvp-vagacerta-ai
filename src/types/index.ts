export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Remoto' | 'Híbrido' | 'Presencial';
  seniority: 'Júnior' | 'Pleno' | 'Sênior' | 'Estágio';
  salary: string;
  tags: string[];
  description: string;
  requirements: string[];
  sourceUrl: string;
  postedAt: string;
  featured?: boolean;
}

export interface ResumeAnalysis {
  id: string;
  jobTitle: string;
  company: string;
  score: number;
  missingKeywords: string[];
  matchedKeywords: string[];
  strengths: string[];
  improvements: string[];
  createdAt: string;
}

export interface CareerPlanStep {
  id: string;
  title: string;
  category: 'Curso' | 'Certificação' | 'Projeto Prático';
  provider: string;
  duration: string;
  priority: 'Alta' | 'Média' | 'Baixa';
  completed: boolean;
  link?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  seniority: string;
  plan: 'Gratuito' | 'Premium';
  analysesCount: number;
  analysesLimit: number;
  avatarUrl: string;
}