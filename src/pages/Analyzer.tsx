import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, AlertTriangle, FileText, Briefcase, RotateCcw } from 'lucide-react';
import { Job, ResumeAnalysis, UserProfile } from '../types';
import { AIService } from '../services/aiService';

interface AnalyzerProps {
  jobs: Job[];
  user: UserProfile;
  onSaveAnalysis: (analysis: ResumeAnalysis) => void;
  onOpenUpgrade: () => void;
}

export const Analyzer: React.FC<AnalyzerProps> = ({ jobs, user, onSaveAnalysis, onOpenUpgrade }) => {
  const [selectedJobId, setSelectedJobId] = useState(jobs[0]?.id || '');
  const [resumeText, setResumeText] = useState(
    'Rafael Costa\nDesenvolvedor Front-End Júnior\nExperiência com React, JavaScript, HTML, CSS, Git, Bootstrap. Estudante de Sistemas de Informação.\nProjetos: E-commerce responsivo em React, Landing Page institucional.'
  );
  const [jobDesc, setJobDesc] = useState(jobs[0]?.description || '');
  const [loading, setLoading] = useState(false);
  const [currentAnalysis, setCurrentAnalysis] = useState<ResumeAnalysis | null>(null);

  const handleJobChange = (jobId: string) => {
    setSelectedJobId(jobId);
    const j = jobs.find(item => item.id === jobId);
    if (j) {
      setJobDesc(j.description);
    }
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user.plan === 'Gratuito' && user.analysesCount >= user.analysesLimit) {
      onOpenUpgrade();
      return;
    }

    setLoading(true);
    const j = jobs.find(item => item.id === selectedJobId);
    const title = j ? j.title : 'Desenvolvedor Front-End';
    const company = j ? j.company : 'Empresa Parceira';

    const result = await AIService.analyzeResume(title, company, resumeText, jobDesc);
    setCurrentAnalysis(result);
    onSaveAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Análise de Currículo Inteligente (ATS Match)</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Descubra o que falta no seu currículo</h2>
        <p className="text-slate-600 text-sm">
          Nossa IA lê os requisitos da vaga e compara com seu perfil, apontando palavras-chave ausentes e gerando dicas para você passar pelos sistemas automáticos das empresas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <h3 className="text-lg font-black text-slate-900 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-brand-600" />
            <span>Dados da Vaga e Currículo</span>
          </h3>

          <form onSubmit={handleAnalyze} className="space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Selecionar Vaga de Referência ou "Cole a Vaga"
              </label>
              <select
                value={selectedJobId}
                onChange={(e) => handleJobChange(e.target.value)}
                className="w-full py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500"
              >
                {jobs.map(job => (
                  <option key={job.id} value={job.id}>{job.title} — {job.company}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Descrição da Vaga (Requisitos)
              </label>
              <textarea
                rows={4}
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Cole o seu Currículo (Texto)
              </label>
              <textarea
                rows={6}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Cole seu currículo aqui..."
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-500 font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>IA analisando aderência e palavras-chave...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Executar Análise Inteligente de Currículo</span>
                </>
              )}
            </button>

          </form>
        </div>

        <div className="space-y-6">
          {currentAnalysis ? (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase">Resultado da Análise IA</span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">{currentAnalysis.jobTitle}</h3>
                </div>
                <div className="text-center bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Score ATS</span>
                  <span className={`text-2xl font-black ${currentAnalysis.score >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {currentAnalysis.score}%
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Palavras-chave ausentes ({currentAnalysis.missingKeywords.length})</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentAnalysis.missingKeywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-lg border border-red-200">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Palavras-chave encontradas</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentAnalysis.matchedKeywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-lg border border-emerald-200">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Recomendações Práticas da IA</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {currentAnalysis.improvements.map((imp, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-brand-600 font-bold">•</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ) : (
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-2xl shadow-sm space-y-6">
              <div className="w-12 h-12 bg-brand-600/30 text-indigo-300 rounded-xl flex items-center justify-center border border-brand-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Aguardando Execução</h3>
                <p className="text-sm text-slate-300">
                  Selecione uma vaga à esquerda ou cole os dados e clique em <strong>"Executar Análise Inteligente"</strong> para visualizar o diagnóstico completo gerado pela IA.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};