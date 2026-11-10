import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { UpgradeModal } from './components/UpgradeModal';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Jobs } from './pages/Jobs';
import { Analyzer } from './pages/Analyzer';
import { Career } from './pages/Career';
import { StorageService } from './services/storage';
import { UserProfile, Job, ResumeAnalysis, CareerPlanStep } from './types';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [user, setUser] = useState<UserProfile>(StorageService.getUser());
  const [jobs, setJobs] = useState<Job[]>(StorageService.getJobs());
  const [analyses, setAnalyses] = useState<ResumeAnalysis[]>(StorageService.getAnalyses());
  const [careerSteps, setCareerSteps] = useState<CareerPlanStep[]>(StorageService.getCareerSteps());
  const [savedJobIds, setSavedJobIds] = useState<string[]>(StorageService.getSavedJobIds());
  const [isUpgradeOpen, setIsUpgradeOpen] = useState<boolean>(false);

  const handleReset = () => {
    StorageService.resetAll();
    setUser(StorageService.getUser());
    setJobs(StorageService.getJobs());
    setAnalyses(StorageService.getAnalyses());
    setCareerSteps(StorageService.getCareerSteps());
    setSavedJobIds(StorageService.getSavedJobIds());
    setCurrentTab('home');
    alert('Protótipo reiniciado com sucesso para o estado inicial!');
  };

  const handleToggleSaveJob = (id: string) => {
    const updated = StorageService.toggleSaveJob(id);
    setSavedJobIds([...updated]);
  };

  const handleSaveAnalysis = (analysis: ResumeAnalysis) => {
    StorageService.saveAnalysis(analysis);
    setAnalyses(StorageService.getAnalyses());
    setUser(StorageService.getUser());
  };

  const handleToggleStep = (id: string) => {
    const updated = StorageService.toggleStep(id);
    setCareerSteps([...updated]);
  };

  const handleUpgrade = (plan: 'Gratuito' | 'Premium') => {
    const updatedUser = { ...user, plan, analysesLimit: plan === 'Premium' ? 30 : 3 };
    StorageService.saveUser(updatedUser);
    setUser(updatedUser);
  };

  const handleSelectJobForAnalysis = (job: Job) => {
    setCurrentTab('analyzer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        user={user}
        onReset={handleReset}
        onOpenUpgrade={() => setIsUpgradeOpen(true)}
      />

      <main className="flex-grow">
        {currentTab === 'home' && (
          <Home
            setCurrentTab={setCurrentTab}
            user={user}
            onOpenUpgrade={() => setIsUpgradeOpen(true)}
          />
        )}
        {currentTab === 'dashboard' && (
          <Dashboard
            user={user}
            analyses={analyses}
            savedJobIds={savedJobIds}
            setCurrentTab={setCurrentTab}
            onOpenUpgrade={() => setIsUpgradeOpen(true)}
          />
        )}
        {currentTab === 'jobs' && (
          <Jobs
            jobs={jobs}
            savedJobIds={savedJobIds}
            onToggleSave={handleToggleSaveJob}
            onSelectJobForAnalysis={handleSelectJobForAnalysis}
          />
        )}
        {currentTab === 'analyzer' && (
          <Analyzer
            jobs={jobs}
            user={user}
            onSaveAnalysis={handleSaveAnalysis}
            onOpenUpgrade={() => setIsUpgradeOpen(true)}
          />
        )}
        {currentTab === 'career' && (
          <Career
            steps={careerSteps}
            onToggleStep={handleToggleStep}
          />
        )}
      </main>

      <Footer />

      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        user={user}
        onUpgrade={handleUpgrade}
      />
    </div>
  );
}

export default App;