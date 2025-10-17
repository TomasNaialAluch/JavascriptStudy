// Funcionalidad principal de la página
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar funcionalidades
    initNavigation();
    initBreadcrumbs();
    initMobileMenu();
    initScrollAnimations();
    initJobApplications();
    
    console.log('Página JavaScript Junior Developer cargada correctamente');
});

// Navegación suave
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Ajuste para header fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Actualizar breadcrumb
                updateBreadcrumb(targetId);
            }
        });
    });
}

// Sistema de breadcrumbs dinámico
function initBreadcrumbs() {
    const breadcrumbItems = {
        'inicio': 'Inicio',
        'conocimientos': 'Conocimientos',
        'herramientas': 'Herramientas',
        'proyectos': 'Proyectos',
        'oportunidades': 'Oportunidades'
    };
    
    window.updateBreadcrumb = function(sectionId) {
        const currentPageElement = document.getElementById('current-page');
        if (currentPageElement && breadcrumbItems[sectionId]) {
            currentPageElement.textContent = breadcrumbItems[sectionId];
        }
    };
}

// Menú móvil
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos animables
    const animatedElements = document.querySelectorAll('.knowledge-card, .project-card, .opportunity-card, .tool-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Funcionalidad de tarjetas expandibles
function toggleCard(button) {
    const card = button.closest('.knowledge-card');
    const content = card.querySelector('.card-content');
    
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        content.style.maxHeight = '200px';
        button.textContent = 'Ver Detalles';
    } else {
        card.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + 'px';
        button.textContent = 'Ocultar Detalles';
    }
}

// Scroll suave a secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        updateBreadcrumb(sectionId);
    }
}

// Detalles de proyectos
function showProjectDetails(projectType) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    const projectDetails = {
        'todo': {
            title: 'Todo List App',
            description: 'Una aplicación completa de lista de tareas con funcionalidades CRUD.',
            features: [
                'Agregar nuevas tareas',
                'Marcar tareas como completadas',
                'Editar tareas existentes',
                'Eliminar tareas',
                'Filtrar por estado (todas, pendientes, completadas)',
                'Persistencia de datos con localStorage',
                'Interfaz responsive y moderna'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'LocalStorage API', 'DOM Manipulation'],
            difficulty: 'Principiante',
            estimatedTime: '2-3 días'
        },
        'weather': {
            title: 'Weather App',
            description: 'Aplicación del clima que consume una API externa para mostrar información meteorológica.',
            features: [
                'Búsqueda por ciudad',
                'Información actual del clima',
                'Pronóstico de 5 días',
                'Iconos dinámicos según el clima',
                'Conversión de unidades (Celsius/Fahrenheit)',
                'Manejo de errores de API',
                'Diseño responsive'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Fetch API', 'Async/Await', 'OpenWeatherMap API'],
            difficulty: 'Intermedio',
            estimatedTime: '3-5 días'
        },
        'memory': {
            title: 'Memory Game',
            description: 'Juego de memoria con tarjetas que se voltean para encontrar pares.',
            features: [
                'Tablero de juego configurable',
                'Sistema de puntuación',
                'Timer de juego',
                'Animaciones suaves',
                'Efectos de sonido (opcional)',
                'Diferentes niveles de dificultad',
                'Estadísticas de juego'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'CSS Animations', 'LocalStorage'],
            difficulty: 'Intermedio',
            estimatedTime: '4-6 días'
        }
    };
    
    const project = projectDetails[projectType];
    if (project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p class="project-description">${project.description}</p>
            
            <div class="project-info">
                <div class="info-item">
                    <strong>Dificultad:</strong> ${project.difficulty}
                </div>
                <div class="info-item">
                    <strong>Tiempo estimado:</strong> ${project.estimatedTime}
                </div>
            </div>
            
            <h3>Características principales:</h3>
            <ul class="features-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <h3>Tecnologías utilizadas:</h3>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="project-actions">
                <button class="btn btn-primary" onclick="startProject('${projectType}')">
                    <i class="fas fa-play"></i> Comenzar Proyecto
                </button>
                <button class="btn btn-outline" onclick="viewCode('${projectType}')">
                    <i class="fab fa-github"></i> Ver Código
                </button>
            </div>
        `;
        
        modal.style.display = 'block';
    }
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Iniciar proyecto
function startProject(projectType) {
    alert(`¡Excelente! Has decidido comenzar el proyecto: ${projectType.toUpperCase()}\n\nTe recomendamos:\n1. Crear una carpeta para el proyecto\n2. Configurar la estructura de archivos\n3. Comenzar con el HTML básico\n4. Implementar la funcionalidad paso a paso\n\n¡Buena suerte! 🚀`);
    closeModal();
}

// Ver código del proyecto
function viewCode(projectType) {
    const codeRepositories = {
        'todo': 'https://github.com/ejemplo/todo-list-app',
        'weather': 'https://github.com/ejemplo/weather-app',
        'memory': 'https://github.com/ejemplo/memory-game'
    };
    
    const repoUrl = codeRepositories[projectType];
    if (repoUrl) {
        window.open(repoUrl, '_blank');
    } else {
        alert('El repositorio de código estará disponible próximamente.');
    }
    closeModal();
}

// Sistema de aplicaciones a trabajos
function initJobApplications() {
    // Simular almacenamiento de trabajos guardados
    let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    
    // Actualizar estado de botones guardados
    updateSavedJobsButtons(savedJobs);
}

// Aplicar a trabajo
function applyJob(jobId) {
    const jobTitles = {
        'frontend-junior': 'Desarrollador Frontend Junior',
        'js-developer': 'JavaScript Developer',
        'frontend-dev': 'Frontend Developer'
    };
    
    const jobTitle = jobTitles[jobId] || 'Trabajo';
    
    // Simular proceso de aplicación
    const applyButton = event.target;
    const originalText = applyButton.innerHTML;
    
    applyButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Aplicando...';
    applyButton.disabled = true;
    
    setTimeout(() => {
        applyButton.innerHTML = '<i class="fas fa-check"></i> Aplicado';
        applyButton.classList.remove('btn-success');
        applyButton.classList.add('btn-outline');
        
        // Mostrar mensaje de confirmación
        showNotification(`¡Aplicación enviada para ${jobTitle}!`, 'success');
        
        // Restaurar botón después de 3 segundos
        setTimeout(() => {
            applyButton.innerHTML = originalText;
            applyButton.disabled = false;
            applyButton.classList.remove('btn-outline');
            applyButton.classList.add('btn-success');
        }, 3000);
    }, 2000);
}

// Guardar trabajo
function saveJob(jobId) {
    let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    
    if (savedJobs.includes(jobId)) {
        // Remover de guardados
        savedJobs = savedJobs.filter(id => id !== jobId);
        showNotification('Trabajo removido de guardados', 'info');
    } else {
        // Agregar a guardados
        savedJobs.push(jobId);
        showNotification('Trabajo guardado exitosamente', 'success');
    }
    
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    updateSavedJobsButtons(savedJobs);
}

// Actualizar botones de trabajos guardados
function updateSavedJobsButtons(savedJobs) {
    const saveButtons = document.querySelectorAll('[onclick^="saveJob"]');
    
    saveButtons.forEach(button => {
        const jobId = button.getAttribute('onclick').match(/saveJob\('([^']+)'\)/)[1];
        const heartIcon = button.querySelector('i');
        
        if (savedJobs.includes(jobId)) {
            button.classList.add('saved');
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
        } else {
            button.classList.remove('saved');
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
        }
    });
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Agregar estilos
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Agregar estilos CSS para notificaciones
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .btn.saved {
        background: #dc3545 !important;
        color: white !important;
    }
    
    .btn.saved:hover {
        background: #c82333 !important;
    }
`;
document.head.appendChild(notificationStyles);

// Efectos de scroll para el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Contador de visitas (simulado)
function updateVisitCounter() {
    let visits = localStorage.getItem('pageVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('pageVisits', visits);
    
    console.log(`Visitas a la página: ${visits}`);
}

// Inicializar contador al cargar la página
updateVisitCounter();

// Funcionalidad de búsqueda (para futuras mejoras)
function initSearch() {
    // Placeholder para funcionalidad de búsqueda
    console.log('Sistema de búsqueda listo para implementar');
}

// Exportar funciones para uso global
window.scrollToSection = scrollToSection;
window.toggleCard = toggleCard;
window.showProjectDetails = showProjectDetails;
window.closeModal = closeModal;
window.startProject = startProject;
window.viewCode = viewCode;
window.applyJob = applyJob;
window.saveJob = saveJob;
