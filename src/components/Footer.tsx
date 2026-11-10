import React from 'react';
import { Sparkles, Github, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">VagaCerta.AI</span>
            </div>
            <p className="text-sm text-slate-400">
              Plataforma HRTech inteligente voltada exclusivamente para o mercado de TI, unindo agregador de vagas, análise ATS de currículo e plano de carreira.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Funcionalidades</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-300">Agregador de Vagas TI</span></li>
              <li><span className="text-slate-300">Analisador de Currículo com IA</span></li>
              <li><span className="text-slate-300">Plano de Desenvolvimento</span></li>
              <li><span className="text-slate-300">Alertas por Senioridade</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Sobre o Projeto</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-300">Protótipo MVP Demonstrativo</span></li>
              <li><span className="text-slate-300">Baseado no Plano de Negócio INF3A</span></li>
              <li><span className="text-slate-300">100% Estático & LocalStorage</span></li>
              <li><span className="text-slate-300">Hospedado no GitHub Pages</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Segurança & Privacidade</h4>
            <p className="text-xs text-slate-400 mb-3">
              Em conformidade simulada com a LGPD (Lei nº 13.709/2018). Seus dados de currículo ficam armazenados apenas no seu navegador.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Dados protegidos localmente</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs">
          <p>© 2026 VagaCerta.AI Tecnologia LTDA (Protótipo Acadêmico MVP).</p>
          <p className="flex items-center mt-2 sm:mt-0 text-slate-400">
            Desenvolvido para apresentação acadêmica com React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};