import React, { useState } from 'react';
import { Sparkles, Check, X, ShieldCheck, Zap } from 'lucide-react';
import { UserProfile } from '../types';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onUpgrade: (plan: 'Gratuito' | 'Premium') => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, user, onUpgrade }) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = () => {
    setSuccess(true);
    setTimeout(() => {
      onUpgrade('Premium');
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Parabéns! Assinatura Ativada</h3>
            <p className="text-slate-600 text-sm">
              Agora você tem acesso ilimitado ao Analisador IA, planos de carreira prioritários e alertas em tempo real.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center space-y-2 mb-6">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Desbloqueie todo o seu potencial em TI</span>
              </span>
              <h2 className="text-2xl font-black text-slate-900">Seja VagaCerta Premium</h2>
              <p className="text-sm text-slate-600">
                Acelere sua transição ou recolocação no mercado de tecnologia com IA avançada.
              </p>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                  selectedPlan === 'monthly' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mensal (R$ 24,90/mês)
              </button>
              <button
                onClick={() => setSelectedPlan('annual')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition relative ${
                  selectedPlan === 'annual' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Anual (R$ 199/ano)
                <span className="absolute -top-2.5 right-2 bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                  33% OFF
                </span>
              </button>
            </div>

            <div className="space-y-3 mb-6 text-sm text-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Até 30 análises de currículo por mês</strong> com feedback detalhado ATS</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Plano de carreira completo</strong> com cursos e projetos priorizados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Alertas em tempo real</strong> por nicho e senioridade</span>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-indigo-700 font-medium">Valor selecionado</p>
                <p className="text-2xl font-black text-slate-900">
                  {selectedPlan === 'monthly' ? 'R$ 24,90' : 'R$ 199,00'}
                  <span className="text-xs font-normal text-slate-600"> {selectedPlan === 'monthly' ? '/mês' : '/ano'}</span>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-semibold bg-emerald-100 px-2.5 py-1 rounded-lg">
                Garantia de 7 dias
              </span>
            </div>

            <button
              onClick={handleSubscribe}
              className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Simular Assinatura Instantânea (Pix / Cartão)</span>
            </button>

            <p className="text-center text-[11px] text-slate-400 mt-4">
              * Demonstração acadêmica. Nenhuma cobrança real será realizada. Cancele quando quiser.
            </p>
          </>
        )}

      </div>
    </div>
  );
};