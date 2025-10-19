/**
 * Componente de Navegación Reutilizable
 * Recibe un array de objetos con {href, text} para generar los enlaces
 */

// Importar CSS del componente
function loadNavigationCSS() {
    if (!document.querySelector('#navigation-css')) {
        const link = document.createElement('link');
        link.id = 'navigation-css';
        link.rel = 'stylesheet';
        link.href = 'components/navigation/Navigation.css';
        document.head.appendChild(link);
    }
}

class Navigation {
    constructor(containerId, brandIcon, brandText, navItems) {
        this.containerId = containerId;
        this.brandIcon = brandIcon;
        this.brandText = brandText;
        this.navItems = navItems;
    }

    render() {
        // Cargar CSS del componente
        loadNavigationCSS();
        
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with id "${this.containerId}" not found`);
            return;
        }

        container.innerHTML = `
            <nav class="navbar">
                <div class="nav-brand">
                    <i class="${this.brandIcon}"></i>
                    <span>${this.brandText}</span>
                </div>
                <ul class="nav-menu">
                    ${this.navItems.map(item => `
                        <li><a href="${item.href}" class="nav-link">${item.text}</a></li>
                    `).join('')}
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        `;

        // Inicializar funcionalidad del hamburger menu
        this.initHamburgerMenu();
    }

    initHamburgerMenu() {
        // Usar setTimeout para asegurar que el DOM esté completamente renderizado
        setTimeout(() => {
            const container = document.getElementById(this.containerId);
            const hamburger = container?.querySelector('.hamburger');
            const navMenu = container?.querySelector('.nav-menu');

            if (hamburger && navMenu) {
                // Función para toggle del menú
                const toggleMenu = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Menu toggled!');
                    hamburger.classList.toggle('active');
                    navMenu.classList.toggle('active');
                };

                // Agregar múltiples eventos para mejor compatibilidad
                hamburger.addEventListener('click', toggleMenu);
                hamburger.addEventListener('touchstart', toggleMenu);
                hamburger.addEventListener('touchend', (e) => {
                    e.preventDefault();
                });

                // Hacer el hamburger más "tocable"
                hamburger.style.touchAction = 'manipulation';
                hamburger.style.webkitTapHighlightColor = 'transparent';

                // Cerrar menu al hacer click en un enlace
                container.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    });
                });
            } else {
                console.error('Hamburger or nav-menu not found');
            }
        }, 100);
    }
}

// Función helper para crear la navegación fácilmente
function createNavigation(containerId, brandIcon, brandText, navItems) {
    const nav = new Navigation(containerId, brandIcon, brandText, navItems);
    nav.render();
    return nav;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Navigation, createNavigation };
} else {
    window.Navigation = Navigation;
    window.createNavigation = createNavigation;
}
