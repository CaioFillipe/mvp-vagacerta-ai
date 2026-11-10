import React from 'react';
import { Award, CheckCircle2, Circle, Sparkles, ExternalLink, BookOpen } from 'lucide-react';
import { CareerPlanStep } from '../types';

interface CareerProps {
  steps: CareerPlanStep[];
  onToggleStep: (id: string) => void;
}

export const Career: React.FC<CareerProps> = ({ steps, onToggleStep }) => {
  const completedCount = steps.filter(s => s.completed).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="px-3 py-1 bg-brand-600/30 text-indigo-300 text-xs font-semibold rounded-full border border-brand-500/30 inline-block">
            Plano de Desenvolvimento de Carreira
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">Trilha Priorizada para Fechar Lacunas</h2>
          <p className="text-slate-300 text-sm max-w-2xl">
            Com base nas análises de currículo, o VagaCerta AI priorizou os cursos, certificações e projetos práticos mais relevantes para o seu perfil.
          </p>
        </div>

        <div className="bg-indigo-900/60 p-4 rounded-xl border border-indigo-500/30 text-center min-w-[160px]">
          <span className="text-xs text-indigo-200 block">Progresso Geral</span>
          <span className="text-3xl font-black text-emerald-400">{progressPercent}%</span>
          <span className="text-[10px] text-slate-300 block mt-1">{completedCount} de {steps.length} concluídos</span>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map(step => (
          <div 
            key={step.id} 
            onClick={() => onToggleStep(step.id)}
            className={`bg-white rounded-2xl p-6 shadow-sm border transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              step.completed ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200 hover:border-brand-300'
            }`}
          >
            <div className="flex items-start space-x-4">
              <button className="mt-1 text-emerald-600 flex-shrink-0">
                {step.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                ) : (
                  <Circle className="w-6 h-6 text-slate-300 hover:text-brand-500" />
                )}
              </button>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    step.category === 'Curso' ? 'bg-indigo-50 text-indigo-700' :
                    step.category === 'Certificação' ? 'bg-purple-50 text-purple-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {step.category}
                  </span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    step.priority === 'Alta' ? 'bg-red-50 text-red-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    Prioridade {step.priority}
                  </span>
                </div>
                <h3 className={`text-lg font-bold ${step.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500">Provedor: {step.provider} • Duração estimada: {step.duration}</p>
              </div>
            </div>

            {step.link && (
              <a
                href={step.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition flex items-center justify-center space-x-1.5 self-start sm:self-center"
              >
                <span>Acessar Material</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};