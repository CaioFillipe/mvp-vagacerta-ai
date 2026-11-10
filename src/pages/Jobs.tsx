import React, { useState } from 'react';
import { Briefcase, Search, MapPin, DollarSign, Bookmark, ExternalLink, Sparkles, Filter, Check } from 'lucide-react';
import { Job } from '../types';

interface JobsProps {
  jobs: Job[];
  savedJobIds: string[];
  onToggleSave: (id: string) => void;
  onSelectJobForAnalysis: (job: Job) => void;
}

export const Jobs: React.FC<JobsProps> = ({ jobs, savedJobIds, onToggleSave, onSelectJobForAnalysis }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeniority, setSelectedSeniority] = useState('Todos');
  const [selectedType, setSelectedType] = useState('Todos');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSeniority = selectedSeniority === 'Todos' || job.seniority === selectedSeniority;
    const matchesType = selectedType === 'Todos' || job.type === selectedType;
    return matchesSearch && matchesSeniority && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
            Agregador Inteligente de TI
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">Vagas de Tecnologia Disponíveis</h2>
          <p className="text-slate-600 text-sm">Oportunidades filtradas e organizadas com foco exclusivo no mercado de TI.</p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl text-xs text-indigo-900 flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span>Clique em <strong>"Analisar com IA"</strong> para verificar seu currículo para a vaga instantaneamente.</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por cargo, empresa ou tecnologia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <select
            value={selectedSeniority}
            onChange={(e) => setSelectedSeniority(e.target.value)}
            className="w-full py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500"
          >
            <option value="Todos">Todas as Senioridades</option>
            <option value="Estágio">Estágio</option>
            <option value="Júnior">Júnior</option>
            <option value="Pleno">Pleno</option>
            <option value="Sênior">Sênior</option>
          </select>
        </div>

        <div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500"
          >
            <option value="Todos">Todas as Modalidades</option>
            <option value="Remoto">Remoto</option>
            <option value="Híbrido">Híbrido</option>
            <option value="Presencial">Presencial</option>
          </select>
        </div>

      </div>

      <div className="space-y-4">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">Nenhuma vaga encontrada</h3>
            <p className="text-sm text-slate-500">Tente ajustar os filtros ou pesquisar por outro termo.</p>
          </div>
        ) : (
          filteredJobs.map(job => {
            const isSaved = savedJobIds.includes(job.id);
            return (
              <div key={job.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-black text-slate-900">{job.title}</h3>
                      {job.featured && (
                        <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full">
                          ★ Destaque
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{job.company}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onToggleSave(job.id)}
                      className={`p-2 rounded-xl border transition ${isSaved ? 'bg-indigo-50 border-indigo-200 text-brand-600' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'}`}
                      title={isSaved ? 'Salvo' : 'Salvar vaga'}
                    >
                      <Bookmark className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} />
                    </button>

                    <button
                      onClick={() => onSelectJobForAnalysis(job)}
                      className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs shadow transition flex items-center space-x-1.5"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Analisar com IA</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.salary}</span>
                  </span>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-medium">
                    {job.seniority}
                  </span>
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-medium">
                    {job.type}
                  </span>
                  <span className="text-slate-400">• Publicado {job.postedAt}</span>
                </div>

                <p className="text-sm text-slate-600 line-clamp-2">{job.description}</p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};