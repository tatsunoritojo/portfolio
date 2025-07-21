
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const isEnglish = path.includes('/en/');

    if (path.includes('profile.html')) {
        loadProfileData(isEnglish);
        loadSkillsData();
    } else if (path.includes('projects.html')) {
        loadProjectsData(isEnglish);
    }
});

async function loadProfileData(isEnglish = false) {
    try {
        const lang = isEnglish ? 'en' : 'ja';
        const basePath = isEnglish ? '../data/' : 'data/';
        const response = await fetch(`${basePath}content-${lang}.json`);
        const data = await response.json();
        
        const profileElement = document.querySelector('#profile .profile-text p');
        if (profileElement) {
            profileElement.textContent = data.profile.bio;
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

async function loadSkillsData() {
    try {
        const isEnglish = window.location.pathname.includes('/en/');
        const basePath = isEnglish ? '../data/' : 'data/';
        const response = await fetch(`${basePath}skills.json`);
        const data = await response.json();
        
        const langList = document.getElementById('skills-lang');
        const fwList = document.getElementById('skills-fw');
        const toolsList = document.getElementById('skills-tools');

        if (langList && fwList && toolsList) {
            data.languages.forEach(skill => {
                langList.innerHTML += `<li class="skill-item">${skill.name}</li>`;
            });
            data.frameworks.forEach(skill => {
                fwList.innerHTML += `<li class="skill-item">${skill.name}</li>`;
            });
            data.tools.forEach(skill => {
                toolsList.innerHTML += `<li class="skill-item">${skill.name}</li>`;
            });
        }

    } catch (error) {
        console.error('Error loading skills data:', error);
    }
}

async function loadProjectsData(isEnglish = false) {
    try {
        const basePath = isEnglish ? '../data/' : 'data/';
        const response = await fetch(`${basePath}projects.json`);
        const data = await response.json();
        const projectList = document.getElementById('project-list');

        if (!projectList) return;

        const lang = isEnglish ? 'en' : 'ja';
        const techStackLabel = isEnglish ? 'Tech Stack:' : '技術スタック:';
        const periodLabel = isEnglish ? 'Duration:' : '開発期間:';
        const scaleLabel = isEnglish ? 'Scale:' : '規模:';
        const outcomeLabel = isEnglish ? 'Outcome:' : '成果:';

        data.forEach(project => {
            const imagePath = isEnglish ? `../${project.image}` : project.image;
            
            // Generate features HTML if available
            let featuresHTML = '';
            if (project.features && project.features.length > 0) {
                const featuresLabel = isEnglish ? 'Key Features:' : '主要機能:';
                featuresHTML = `
                    <div class="project-features">
                        <strong>${featuresLabel}</strong>
                        <div class="features-grid">
                            ${project.features.map(feature => `
                                <div class="feature-item">
                                    <h4>${feature[`title_${lang}`]}</h4>
                                    <p>${feature[`description_${lang}`]}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            
            // Generate development process HTML if available
            let processHTML = '';
            if (project.development_process && project.development_process.length > 0) {
                const processLabel = isEnglish ? 'Development Process:' : '開発プロセス:';
                processHTML = `
                    <div class="project-process">
                        <strong>${processLabel}</strong>
                        <div class="process-steps">
                            ${project.development_process.map((phase, index) => `
                                <div class="process-item">
                                    <div class="process-step">${index + 1}</div>
                                    <div class="process-info">
                                        <div class="process-phase">${phase[`phase_${lang}`]}</div>
                                        <div class="process-period">${phase.period}</div>
                                        <div class="process-description">${phase[`description_${lang}`]}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            
            // Generate GitHub link if available
            let githubLinkHTML = '';
            if (project.github_url) {
                const viewCodeLabel = isEnglish ? 'View Code' : 'コードを見る';
                githubLinkHTML = `
                    <div class="project-links">
                        <a href="${project.github_url}" target="_blank" class="btn btn-secondary project-github-btn">
                            <span class="github-icon">⚡</span> ${viewCodeLabel}
                        </a>
                    </div>
                `;
            }

            projectList.innerHTML += `
                <div class="project-card ${project.features ? 'project-card-detailed' : ''}">
                    <div class="project-image">
                        <img src="${imagePath}" alt="${project[`title_${lang}`]}" onerror="this.style.display='none'">
                    </div>
                    <div class="project-card-content">
                        <div class="project-category">${project[`category_${lang}`]}</div>
                        <h3>${project[`title_${lang}`]}</h3>
                        <p class="project-description">${project[`description_${lang}`]}</p>
                        
                        ${featuresHTML}
                        
                        ${processHTML}
                        
                        <div class="project-tech">
                            <strong>${techStackLabel}</strong>
                            <div class="tech-tags">
                                ${project.tech_stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        <div class="project-metrics">
                            <div class="metric">
                                <span class="metric-label">${periodLabel}</span>
                                <span class="metric-value">${project.period}</span>
                            </div>
                            <div class="metric">
                                <span class="metric-label">${scaleLabel}</span>
                                <span class="metric-value">${project.scale}</span>
                            </div>
                        </div>
                        <div class="project-outcome">
                            <strong>${outcomeLabel}</strong> ${project[`outcome_${lang}`]}
                        </div>
                        
                        ${githubLinkHTML}
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error('Error loading projects data:', error);
    }
}
