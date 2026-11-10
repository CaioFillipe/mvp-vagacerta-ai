import { initialUser, mockJobs, mockAnalyses, mockCareerSteps } from '../mocks/data';
import { UserProfile, Job, ResumeAnalysis, CareerPlanStep } from '../types';

const STORAGE_KEYS = {
  USER: 'vc_user_v1',
  JOBS: 'vc_jobs_v1',
  ANALYSES: 'vc_analyses_v1',
  STEPS: 'vc_steps_v1',
  SAVED_JOBS: 'vc_saved_jobs_v1'
};

export const StorageService = {
  getUser(): UserProfile {
    const data = localStorage.getItem(STORAGE_KEYS.USER);
    return data ? JSON.parse(data) : initialUser;
  },
  saveUser(user: UserProfile) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  getJobs(): Job[] {
    const data = localStorage.getItem(STORAGE_KEYS.JOBS);
    return data ? JSON.parse(data) : mockJobs;
  },

  getAnalyses(): ResumeAnalysis[] {
    const data = localStorage.getItem(STORAGE_KEYS.ANALYSES);
    return data ? JSON.parse(data) : mockAnalyses;
  },
  saveAnalysis(analysis: ResumeAnalysis) {
    const list = this.getAnalyses();
    localStorage.setItem(STORAGE_KEYS.ANALYSES, JSON.stringify([analysis, ...list]));
    
    const user = this.getUser();
    user.analysesCount += 1;
    this.saveUser(user);
  },

  getCareerSteps(): CareerPlanStep[] {
    const data = localStorage.getItem(STORAGE_KEYS.STEPS);
    return data ? JSON.parse(data) : mockCareerSteps;
  },
  toggleStep(id: string) {
    const steps = this.getCareerSteps().map(s => s.id === id ? { ...s, completed: !s.completed } : s);
    localStorage.setItem(STORAGE_KEYS.STEPS, JSON.stringify(steps));
    return steps;
  },

  getSavedJobIds(): string[] {
    const data = localStorage.getItem(STORAGE_KEYS.SAVED_JOBS);
    return data ? JSON.parse(data) : ['job-1'];
  },
  toggleSaveJob(jobId: string): string[] {
    let saved = this.getSavedJobIds();
    if (saved.includes(jobId)) {
      saved = saved.filter(id => id !== jobId);
    } else {
      saved.push(jobId);
    }
    localStorage.setItem(STORAGE_KEYS.SAVED_JOBS, JSON.stringify(saved));
    return saved;
  },

  resetAll() {
    localStorage.clear();
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(initialUser));
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(mockJobs));
    localStorage.setItem(STORAGE_KEYS.ANALYSES, JSON.stringify(mockAnalyses));
    localStorage.setItem(STORAGE_KEYS.STEPS, JSON.stringify(mockCareerSteps));
    localStorage.setItem(STORAGE_KEYS.SAVED_JOBS, JSON.stringify(['job-1']));
  }
};