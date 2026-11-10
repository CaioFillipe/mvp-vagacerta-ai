import React from 'react';
import { Sparkles, Briefcase, Award, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Users, Star } from 'lucide-react';
import { UserProfile } from '../types';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
  user: UserProfile;
  onOpenUpgrade: () => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentTab, user, onOpenUpgrade }) => {
  return (
    <div className="space-y-20 pb-16">
      
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-600/20 border border-brand-500/30 text-indigo-300 text-xs font-semibold shadow-inner">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>A Revolução no Recrutamento Inteligente de TI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Encontre a <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Vaga Certa</span> e saiba exatamente o que melhorar.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal">
            Esqueça plataformas generalistas. O VagaCerta.AI reúne oportunidades exclusivas de TI, analisa seu currículo vaga a vaga com inteligência artificial e gera um plano prático de estudos para garantir sua contratação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrentTab('jobs')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/30 transition flex items-center justify-center space-x-2 text-base"
            >
              <Briefcase className="w-5 h-5" />
              <span>Explorar Vagas de TI</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCurrentTab('analyzer')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-indigo-200 border border-indigo-500/30 font-bold rounded-xl transition flex items-center justify-center space-x-2 text-base"
            >
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>Testar Analisador IA</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800/80 max-w-4xl mx-auto text-left">
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
              <p className="text-2xl sm:text-3xl font-black text-indigo-400">159 mil</p>
              <p className="text-xs text-slate-400 mt-1">Demanda anual por talentos de TIC (Brasscom)</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
              <p className="text-2xl sm:text-3xl font-black text-indigo-400">Vaga a Vaga</p>
              <p className="text-xs text-slate-400 mt-1">Análise inteligente adaptada para sistemas ATS</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">R$ 24,90</p>
              <p className="text-xs text-slate-400 mt-1">Plano Premium acessível em reais</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
              <p className="text-2xl sm:text-3xl font-black text-indigo-400">100% TI</p>
              <p className="text-xs text-slate-400 mt-1">Foco vertical exclusivo sem dispersão</p>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 inline-block px-3 py-1 rounded-full">
            Quatro Soluções Integradas
          </h2>
          <h3 className="text-3xl font-black text-slate-900">Tudo o que você precisa para alavancar sua carreira</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            Conheça os pilares que resolvem o descompasso entre a sua formação e as exigências reais do mercado de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-brand-600 flex items-center justify-center font-bold">
              <Briefcase className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Agregador de Vagas</h4>
            <p className="text-sm text-slate-600">
              Oportunidades de TI reunidas em um só lugar com filtros por stack, senioridade e modalidade (remoto/híbrido).
            </p>
            <button onClick={() => setCurrentTab('jobs')} className="text-xs font-bold text-brand-600 flex items-center space-x-1 hover:underline">
              <span>Ver vagas disponíveis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Analisador com IA</h4>
            <p className="text-sm text-slate-600">
              Leitura do currículo frente à vaga: identifica palavras-chave ausentes e aderência aos sistemas de triagem (ATS).
            </p>
            <button onClick={() => setCurrentTab('analyzer')} className="text-xs font-bold text-purple-600 flex items-center space-x-1 hover:underline">
              <span>Analisar meu currículo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Plano de Carreira</h4>
            <p className="text-sm text-slate-600">
              Cursos, certificações e projetos práticos priorizados especificamente para fechar as lacunas apontadas na sua análise.
            </p>
            <button onClick={() => setCurrentTab('career')} className="text-xs font-bold text-emerald-600 flex items-center space-x-1 hover:underline">
              <span>Ver plano de estudos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Alertas em Tempo Real</h4>
            <p className="text-sm text-slate-600">
              Notificações inteligentes por nicho (front-end, dados, cibersegurança) para você se candidatar antes de todo mundo.
            </p>
            <button onClick={() => setCurrentTab('dashboard')} className="text-xs font-bold text-amber-600 flex items-center space-x-1 hover:underline">
              <span>Configurar alertas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 inline-block px-3 py-1 rounded-full">
            Planos Acessíveis
          </h2>
          <h3 className="text-3xl font-black text-slate-900">Escolha o plano ideal para a sua jornada</h3>
          <p className="text-slate-600 text-sm">Democratizamos o acesso com um plano gratuito robusto e um Premium de alto custo-benefício.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Iniciante</span>
                <h4 className="text-2xl font-black text-slate-900 mt-1">Plano Gratuito</h4>
                <p className="text-sm text-slate-600 mt-2">Ideal para conhecer a plataforma e fazer primeiras buscas.</p>
              </div>

              <div className="text-4xl font-black text-slate-900">
                R$ 0 <span className="text-sm font-normal text-slate-500">/ sempre</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Busca unificada de vagas de TI</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>3 análises de currículo por mês</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Plano de carreira resumido (3 principais lacunas)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setCurrentTab('jobs')}
              className="mt-8 w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition text-sm"
            >
              Começar Gratuitamente
            </button>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-indigo-950 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between relative border border-brand-500/40">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
              ★ Mais Popular
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Busca Ativa</span>
                <h4 className="text-2xl font-black text-white mt-1">Plano Premium</h4>
                <p className="text-sm text-indigo-200 mt-2">Para quem quer conquistar a vaga dos sonhos rapidamente.</p>
              </div>

              <div className="text-4xl font-black text-white">
                R$ 24,90 <span className="text-sm font-normal text-indigo-300">/ mês</span>
              </div>

              <ul className="space-y-3 text-sm text-indigo-100">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span><strong>Até 30 análises de currículo por mês</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Planos de carreira completos e priorizados por vaga</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Alertas em tempo real ilimitados</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenUpgrade}
              className="mt-8 w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/40 transition text-sm flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Assinar Premium (Teste Grátis 7 Dias)</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};