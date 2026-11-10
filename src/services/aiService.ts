import { ResumeAnalysis } from '../types';

export const AIService = {
  async analyzeResume(jobTitle: string, company: string, resumeText: string, jobDescription: string): Promise<ResumeAnalysis> {
    await new Promise(resolve => setTimeout(resolve, 1500));

    const hasTypeScript = resumeText.toLowerCase().includes('typescript') || jobDescription.toLowerCase().includes('typescript');
    const hasReact = resumeText.toLowerCase().includes('react');
    const hasPython = resumeText.toLowerCase().includes('python');

    let baseScore = 65;
    if (hasReact) baseScore += 10;
    if (hasTypeScript) baseScore += 12;
    if (hasPython) baseScore += 8;
    const finalScore = Math.min(95, Math.max(55, baseScore + Math.floor(Math.random() * 8)));

    const missing = [];
    const matched = ['Git', 'HTML5', 'CSS3', 'JavaScript'];
    if (hasReact) matched.push('React');
    else missing.push('React.js');

    if (hasTypeScript) matched.push('TypeScript');
    else missing.push('TypeScript Avançado');

    missing.push('Testes Automatizados (Jest)', 'Docker', 'Metodologias Ágeis');

    const strengths = [
      'Boa clareza na descrição de experiências anteriores',
      'Uso correto de tecnologias fundamentais exigidas no mercado',
      'Boa estrutura de tópicos e contatos'
    ];

    const improvements = [
      'Adicionar palavras-chave específicas do sistema ATS mencionadas na vaga',
      'Destacar métricas quantificáveis de impacto nos projetos realizados',
      'Incluir certificações recentes na área'
    ];

    return {
      id: 'an-' + Date.now(),
      jobTitle,
      company,
      score: finalScore,
      missingKeywords: missing,
      matchedKeywords: matched,
      strengths,
      improvements,
      createdAt: new Date().toLocaleDateString('pt-BR')
    };
  }
};