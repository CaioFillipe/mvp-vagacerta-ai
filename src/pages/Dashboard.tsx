import React from 'react';
import { Briefcase, Sparkles, Award, BarChart3, BookmarkCheck, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { UserProfile, ResumeAnalysis } from '../types';

interface DashboardProps {
  user: UserProfile;
  analyses: ResumeAnalysis[];
  savedJobIds: string[];
  setCurrentTab: (tab: string) => void;
  onOpenUpgrade: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, analyses, savedJobIds, setCurrentTab, onOpenUpgrade }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400 shadow-md" />
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-black">Olá, {user.name}!</h2>
              <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${user.plan === 'Premium' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-brand-600/30 text-indigo-300'}`}>
                {user.plan === 'Premium' ? '★ Premium' : 'Plano Gratuito'}
              </span>
            </div>
            <p className="text-slate-300 text-sm">Perfil: {user.role} • Senioridade: {user.seniority}</p>
          </div>
        </div>

        {user.plan === 'Gratuito' && (
          <div className="bg-indigo-900/60 p-4 rounded-xl border border-indigo-500/30 flex flex-col sm:flex-row items-center gap-4">
            <div className="text-xs text-indigo-200">
              <p>Análises usadas este mês:</p>
              <p className="text-lg font-black text-white">{user.analysesCount} / {user.analysesLimit}</p>
            </div>
            <button
              onClick={onOpenUpgrade}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-95 text-white font-bold rounded-xl text-xs shadow flex items-center space-x-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>Fazer Upgrade</span>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Vagas Salvas</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{savedJobIds.length}</p>
          </div>
          <div className="w-12 h-12 bg-indigo-50 text-brand-600 rounded-xl flex items-center justify-center">
            <BookmarkCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Análises de Currículo</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{analyses.length}</p>
          </div>
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Aderência Média ATS</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">
              {analyses.length > 0 ? `${analyses[0].score}%` : '74%'}
            </p>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Plano de Carreira</p>
            <p className="text-2xl font-black text-slate-900 mt-1">25% Concluído</p>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-brand-600" />
              <span>Histórico de Análises de Currículo com IA</span>
            </h3>
            <button
              onClick={() => setCurrentTab('analyzer')}
              className="text-xs font-bold text-brand-600 hover:underline flex items-center space-x-1"
            >
              <span>Nova Análise</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {analyses.map(item => (
              <div key={item.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-indigo-50/40 transition space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900">{item.jobTitle}</h4>
                    <p className="text-xs text-slate-600">{item.company} • Analisado em {item.createdAt}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-500">Aderência ATS:</span>
                    <span className={`px-2.5 py-1 text-xs font-black rounded-lg ${item.score >= 70 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {item.score}%
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-slate-500 mr-1">Palavras-chave ausentes:</span>
                  {item.missingKeywords.slice(0, 3).map((kw, i) => (
                    <span key={i} className="px-2 py-0.5 bg-red-50 text-red-700 text-[11px] font-medium rounded border border-red-200">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="px-3 py-1 bg-brand-600/30 text-indigo-300 text-xs font-semibold rounded-full border border-brand-500/30 inline-block">
              Dica da IA para Rafael
            </span>
            <h3 className="text-xl font-bold">Como aumentar suas chances em 40%</h3>
            <p className="text-sm text-slate-300">
              Vagas para Desenvolvedor Front-End Júnior exigem familiaridade com testes unitários e TypeScript estrito. Conclua o curso recomendado em seu plano de carreira para atualizar o currículo automaticamente.
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('career')}
            className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl text-sm transition flex items-center justify-center space-x-2 shadow-lg"
          >
            <Award className="w-4 h-4" />
            <span>Ver Meu Plano de Carreira</span>
          </button>
        </div>

      </div>

    </div>
  );
};