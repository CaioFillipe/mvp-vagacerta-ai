// Lógica da Aplicação (Vanilla JS)
let user = StorageService.get(STORAGE_KEYS.USER);
let jobs = StorageService.get(STORAGE_KEYS.JOBS);
let analyses = StorageService.get(STORAGE_KEYS.ANALYSES);
let steps = StorageService.get(STORAGE_KEYS.STEPS);
let savedJobs = StorageService.get(STORAGE_KEYS.SAVED);

function initApp() {
    updateNavbar();
    navigate('home');
    lucide.createIcons();
}

function updateNavbar() {
    document.getElementById('user-name').innerText = user.name;
    document.getElementById('user-role').innerText = `${user.role} • ${user.plan === 'Premium' ? 'Premium' : 'Gratuito'}`;
    document.getElementById('user-avatar').src = user.avatarUrl;
    
    const upgradeContainer = document.getElementById('upgrade-btn-container');
    if (user.plan === 'Gratuito') {
        upgradeContainer.innerHTML = `<button onclick="openModal()" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition">Ser Premium</button>`;
    } else {
        upgradeContainer.innerHTML = `<span class="px-2.5 py-1 text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">★ Premium</span>`;
    }
}

function navigate(viewId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden-view'));
    // Show target view
    document.getElementById(`view-${viewId}`).classList.remove('hidden-view');
    
    // Update nav styles
    document.querySelectorAll('.nav-btn').forEach(el => {
        el.classList.remove('bg-brand-600/20', 'text-indigo-300', 'border', 'border-brand-500/30');
        el.classList.add('text-slate-300');
    });
    
    const activeNav = document.getElementById(`nav-${viewId}`);
    if(activeNav) {
        activeNav.classList.remove('text-slate-300');
        activeNav.classList.add('bg-brand-600/20', 'text-indigo-300', 'border', 'border-brand-500/30');
    }

    // Render specific data
    if(viewId === 'jobs') renderJobs();
    if(viewId === 'dashboard') renderDashboard();
    if(viewId === 'analyzer') renderAnalyzerInit();
    if(viewId === 'career') renderCareer();

    lucide.createIcons();
}

function renderJobs() {
    const container = document.getElementById('jobs-list');
    container.innerHTML = jobs.map(job => {
        const isSaved = savedJobs.includes(job.id);
        return `
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
                    ${job.title} ${job.featured ? '<span class="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] rounded-full">Destaque</span>' : ''}
                </h3>
                <p class="text-sm text-slate-600 font-semibold mb-2">${job.company} • ${job.location}</p>
                <div class="flex gap-2 text-xs">
                    <span class="px-2 py-1 bg-slate-100 text-slate-700 rounded">${job.type}</span>
                    <span class="px-2 py-1 bg-slate-100 text-slate-700 rounded">${job.salary}</span>
                </div>
            </div>
            <div class="flex gap-2">
                <button onclick="toggleSave('${job.id}')" class="p-2 rounded-xl border ${isSaved ? 'bg-indigo-50 border-indigo-200 text-brand-600' : 'bg-slate-50 border-slate-200 text-slate-400'}">
                    <i data-lucide="bookmark"></i>
                </button>
                <button onclick="goToAnalyze('${job.id}')" class="px-4 py-2 bg-brand-600 text-white text-xs font-bold rounded-xl flex items-center gap-1">
                    <i data-lucide="sparkles" class="w-4 h-4"></i> Analisar
                </button>
            </div>
        </div>
        `;
    }).join('');
}

function toggleSave(jobId) {
    if(savedJobs.includes(jobId)) {
        savedJobs = savedJobs.filter(id => id !== jobId);
    } else {
        savedJobs.push(jobId);
    }
    StorageService.set(STORAGE_KEYS.SAVED, savedJobs);
    renderJobs();
    lucide.createIcons();
}

function renderDashboard() {
    document.getElementById('dash-greeting').innerText = `Olá, ${user.name}!`;
    document.getElementById('dash-subtitle').innerText = `${user.role} • ${user.seniority}`;
    document.getElementById('dash-avatar').src = user.avatarUrl;
    document.getElementById('dash-count').innerText = `${user.analysesCount} / ${user.analysesLimit}`;
    
    document.getElementById('stat-saved').innerText = savedJobs.length;
    document.getElementById('stat-analyses').innerText = analyses.length;
    document.getElementById('stat-score').innerText = analyses.length > 0 ? `${analyses[0].score}%` : '0%';
    
    const compSteps = steps.filter(s => s.completed).length;
    document.getElementById('stat-career').innerText = `${Math.round((compSteps/steps.length)*100)}%`;

    const list = document.getElementById('analyses-list');
    list.innerHTML = analyses.map(an => `
        <div class="p-4 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center">
            <div>
                <h4 class="font-bold text-slate-900">${an.jobTitle}</h4>
                <p class="text-xs text-slate-500">${an.company} • ${an.createdAt}</p>
            </div>
            <div class="px-3 py-1 text-xs font-black rounded-lg ${an.score >= 70 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${an.score}%</div>
        </div>
    `).join('');
}

function renderAnalyzerInit() {
    const select = document.getElementById('analyzer-job-select');
    select.innerHTML = jobs.map(j => `<option value="${j.id}">${j.title} - ${j.company}</option>`).join('');
    updateAnalyzerDesc();
}

function updateAnalyzerDesc() {
    const val = document.getElementById('analyzer-job-select').value;
    const job = jobs.find(j => j.id === val);
    if(job) document.getElementById('analyzer-job-desc').value = job.description;
}

function goToAnalyze(jobId) {
    navigate('analyzer');
    setTimeout(() => {
        document.getElementById('analyzer-job-select').value = jobId;
        updateAnalyzerDesc();
    }, 100);
}

function runAnalysis() {
    if(user.plan === 'Gratuito' && user.analysesCount >= user.analysesLimit) {
        openModal();
        return;
    }

    const btn = document.getElementById('btn-analyze');
    btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Analisando...`;
    btn.disabled = true;

    setTimeout(() => {
        const jobId = document.getElementById('analyzer-job-select').value;
        const job = jobs.find(j => j.id === jobId);
        
        const newAnalysis = {
            id: 'an-' + Date.now(),
            jobTitle: job.title,
            company: job.company,
            score: Math.floor(Math.random() * 20) + 65, // Random 65-84
            missingKeywords: ['Teste Unitário', 'Docker', 'Design Patterns'],
            matchedKeywords: ['React', 'HTML', 'Git'],
            createdAt: new Date().toLocaleDateString('pt-BR')
        };

        analyses.unshift(newAnalysis);
        StorageService.set(STORAGE_KEYS.ANALYSES, analyses);
        
        user.analysesCount++;
        StorageService.set(STORAGE_KEYS.USER, user);

        btn.innerHTML = `<i data-lucide="sparkles" class="w-5 h-5"></i> Executar Análise Inteligente`;
        btn.disabled = false;

        renderAnalysisResult(newAnalysis);
        updateNavbar();
        lucide.createIcons();
    }, 1500);
}

function renderAnalysisResult(an) {
    const res = document.getElementById('analyzer-results');
    res.className = "bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4";
    res.innerHTML = `
        <div class="flex justify-between items-center border-b pb-4">
            <div>
                <span class="text-xs font-bold text-brand-600 uppercase">Resultado IA</span>
                <h3 class="text-lg font-black text-slate-900">${an.jobTitle}</h3>
            </div>
            <div class="text-center bg-slate-50 p-2 rounded-xl border border-slate-200">
                <span class="text-[10px] uppercase font-bold text-slate-500 block">Score ATS</span>
                <span class="text-2xl font-black ${an.score >= 70 ? 'text-emerald-600' : 'text-amber-600'}">${an.score}%</span>
            </div>
        </div>
        <div>
            <h4 class="text-xs font-bold text-slate-700 uppercase mb-2">Palavras-chave Ausentes</h4>
            <div class="flex flex-wrap gap-2">
                ${an.missingKeywords.map(k => `<span class="px-2 py-1 bg-red-50 text-red-700 text-xs font-medium rounded border border-red-200">${k}</span>`).join('')}
            </div>
        </div>
        <div>
            <h4 class="text-xs font-bold text-slate-700 uppercase mb-2 mt-4">Palavras Encontradas</h4>
            <div class="flex flex-wrap gap-2">
                ${an.matchedKeywords.map(k => `<span class="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded border border-emerald-200">${k}</span>`).join('')}
            </div>
        </div>
    `;
}

function renderCareer() {
    const list = document.getElementById('career-list');
    list.innerHTML = steps.map(st => `
        <div class="bg-white rounded-xl p-5 border ${st.completed ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200'} flex justify-between items-center cursor-pointer" onclick="toggleStep('${st.id}')">
            <div>
                <div class="flex gap-2 mb-1">
                    <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded">${st.category}</span>
                    <span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">${st.provider}</span>
                </div>
                <h4 class="${st.completed ? 'line-through text-slate-400' : 'text-slate-900 font-bold'}">${st.title}</h4>
            </div>
            <i data-lucide="check-circle-2" class="w-6 h-6 ${st.completed ? 'text-emerald-500' : 'text-slate-300'}"></i>
        </div>
    `).join('');
    lucide.createIcons();
}

function toggleStep(id) {
    steps = steps.map(s => s.id === id ? {...s, completed: !s.completed} : s);
    StorageService.set(STORAGE_KEYS.STEPS, steps);
    renderCareer();
}

// Modal functions
function openModal() { document.getElementById('modal-premium').classList.remove('hidden-view'); }
function closeModal() { document.getElementById('modal-premium').classList.add('hidden-view'); }
function confirmUpgrade() {
    user.plan = 'Premium';
    user.analysesLimit = 30;
    StorageService.set(STORAGE_KEYS.USER, user);
    updateNavbar();
    closeModal();
    alert("Plano Premium ativado (Modo Demonstração)!");
}
function resetData() { StorageService.reset(); }

window.onload = initApp;
