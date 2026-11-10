import React from 'react';
import { Briefcase, Sparkles, User, BookmarkCheck, BarChart3, RotateCcw, Home, Award } from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  user: UserProfile;
  onReset: () => void;
  onOpenUpgrade: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, user, onReset, onOpenUpgrade }) => {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentTab('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              VagaCerta<span className="text-brand-500">.AI</span>
            </span>
            <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-semibold bg-brand-600/30 text-indigo-300 rounded-full border border-brand-500/30">
              MVP RHTech TI
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <button
            onClick={() => setCurrentTab('home')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${
              currentTab === 'home' ? 'bg-brand-600/20 text-indigo-300 border border-brand-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Início</span>
          </button>
          
          <button
            onClick={() => setCurrentTab('dashboard')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${
              currentTab === 'dashboard' ? 'bg-brand-600/20 text-indigo-300 border border-brand-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Painel</span>
          </button>

          <button
            onClick={() => setCurrentTab('jobs')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${
              currentTab === 'jobs' ? 'bg-brand-600/20 text-indigo-300 border border-brand-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Vagas TI</span>
          </button>

          <button
            onClick={() => setCurrentTab('analyzer')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${
              currentTab === 'analyzer' ? 'bg-brand-600/20 text-indigo-300 border border-brand-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Analisador IA</span>
          </button>

          <button
            onClick={() => setCurrentTab('career')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${
              currentTab === 'career' ? 'bg-brand-600/20 text-indigo-300 border border-brand-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Plano de Carreira</span>
          </button>
        </nav>

        <div className="flex items-center space-x-3">
          {user.plan === 'Gratuito' ? (
            <button
              onClick={onOpenUpgrade}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow hover:opacity-95 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Seja Premium R$ 24,90</span>
            </button>
          ) : (
            <span className="hidden sm:inline-block px-2.5 py-1 text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
              ★ Plano Premium
            </span>
          )}

          <button
            onClick={onReset}
            title="Reiniciar dados do protótipo"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <div 
            onClick={() => setCurrentTab('dashboard')}
            className="flex items-center space-x-2 pl-2 border-l border-slate-700 cursor-pointer"
          >
            <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 rounded-full object-cover border border-indigo-500" />
            <div className="hidden lg:block text-left text-xs">
              <p className="font-semibold text-white">{user.name}</p>
              <p className="text-slate-400">{user.seniority} TI</p>
            </div>
          </div>
        </div>

      </div>

      <div className="md:hidden flex items-center justify-around bg-slate-800/90 border-t border-slate-700 px-2 py-2 text-xs">
        <button onClick={() => setCurrentTab('home')} className={`flex flex-col items-center ${currentTab === 'home' ? 'text-indigo-400' : 'text-slate-400'}`}>
          <Home className="w-4 h-4" />
          <span>Início</span>
        </button>
        <button onClick={() => setCurrentTab('dashboard')} className={`flex flex-col items-center ${currentTab === 'dashboard' ? 'text-indigo-400' : 'text-slate-400'}`}>
          <BarChart3 className="w-4 h-4" />
          <span>Painel</span>
        </button>
        <button onClick={() => setCurrentTab('jobs')} className={`flex flex-col items-center ${currentTab === 'jobs' ? 'text-indigo-400' : 'text-slate-400'}`}>
          <Briefcase className="w-4 h-4" />
          <span>Vagas</span>
        </button>
        <button onClick={() => setCurrentTab('analyzer')} className={`flex flex-col items-center ${currentTab === 'analyzer' ? 'text-indigo-400' : 'text-slate-400'}`}>
          <Sparkles className="w-4 h-4" />
          <span>IA</span>
        </button>
        <button onClick={() => setCurrentTab('career')} className={`flex flex-col items-center ${currentTab === 'career' ? 'text-indigo-400' : 'text-slate-400'}`}>
          <Award className="w-4 h-4" />
          <span>Carreira</span>
        </button>
      </div>
    </header>
  );
};