/**
 * Componente de Breadcrumb Reutilizable
 * Siempre incluye "Inicio" como primer elemento
 * Recibe array de elementos adicionales para construir la ruta
 */

// Importar CSS del componente
function loadBreadcrumbCSS() {
    if (!document.querySelector('#breadcrumb-css')) {
        const link = document.createElement('link');
        link.id = 'breadcrumb-css';
        link.rel = 'stylesheet';
        link.href = 'components/navigation/Breadcrumb.css';
        document.head.appendChild(link);
    }
}

class Breadcrumb {
    constructor(containerId, items = [], options = {}) {
        this.containerId = containerId;
        this.items = items;
        this.options = {
            separator: options.separator || '>',
            homeIcon: options.homeIcon || 'fas fa-home',
            homeText: options.homeText || 'Inicio',
            homeHref: options.homeHref || 'index.html',
            responsive: options.responsive !== false, // Por defecto true
            maxMobileItems: options.maxMobileItems || 2
        };
    }

    render() {
        // Cargar CSS del componente
        loadBreadcrumbCSS();
        
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with id "${this.containerId}" not found`);
            return;
        }

        // Construir el breadcrumb completo
        const breadcrumbItems = this.buildBreadcrumbItems();
        
        // Determinar si usar versión responsive
        const isMobile = this.options.responsive && window.innerWidth <= 768;
        const displayItems = isMobile ? this.getMobileItems(breadcrumbItems) : breadcrumbItems;

        container.innerHTML = `
            <nav class="breadcrumb" id="breadcrumb">
                <ol class="breadcrumb-list ${this.getBreadcrumbClass()}"">
                    ${displayItems.map((item, index) => this.renderBreadcrumbItem(item, index, displayItems.length)).join('')}
                </ol>
            </nav>
        `;

        // Agregar event listeners para responsive
        if (this.options.responsive) {
            this.initResponsiveListener();
        }
    }

    buildBreadcrumbItems() {
        // Siempre empezar con Inicio
        const items = [{
            href: this.options.homeHref,
            text: this.options.homeText,
            icon: this.options.homeIcon,
            isHome: true
        }];

        // Agregar elementos adicionales
        this.items.forEach(item => {
            if (this.validateItem(item)) {
                items.push({
                    href: item.href,
                    text: item.text,
                    icon: item.icon,
                    isCurrent: !item.href // Si no tiene href, es la página actual
                });
            }
        });

        return items;
    }

    getMobileItems(items) {
        if (items.length <= this.options.maxMobileItems) {
            return items;
        }

        // En móvil, mostrar solo Inicio + elemento actual
        const homeItem = items[0];
        const currentItem = items[items.length - 1];
        
        return [homeItem, currentItem];
    }

    renderBreadcrumbItem(item, index, totalItems) {
        const isLast = index === totalItems - 1;
        const hasHref = item.href && !item.isCurrent;
        
        return `
            <li class="breadcrumb-item ${item.isCurrent ? 'current' : ''} ${item.isHome ? 'home' : ''}">
                ${hasHref ? `<a href="${item.href}" class="breadcrumb-link">` : '<span class="breadcrumb-text">'}
                    ${item.icon ? `<i class="${item.icon}"></i>` : ''}
                    ${item.icon ? ' ' : ''}${item.text}
                ${hasHref ? '</a>' : '</span>'}
                ${!isLast ? `<span class="breadcrumb-separator">${this.options.separator}</span>` : ''}
            </li>
        `;
    }

    validateItem(item) {
        // Validar que el item tenga al menos texto
        if (!item || !item.text) {
            console.warn('Breadcrumb item must have text property');
            return false;
        }

        // Validar href si existe
        if (item.href && typeof item.href !== 'string') {
            console.warn('Breadcrumb item href must be a string');
            return false;
        }

        return true;
    }

    getBreadcrumbClass() {
        const itemCount = this.items.length + 1; // +1 por Inicio
        
        if (itemCount === 1) {
            return 'breadcrumb-simple';
        } else if (itemCount <= 3) {
            return 'breadcrumb-medium';
        } else {
            return 'breadcrumb-complex';
        }
    }

    initResponsiveListener() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.render(); // Re-renderizar cuando cambie el tamaño
            }, 250);
        });
    }

    // Método para actualizar items dinámicamente
    updateItems(newItems) {
        this.items = newItems;
        this.render();
    }

    // Método para agregar un item
    addItem(item) {
        if (this.validateItem(item)) {
            this.items.push(item);
            this.render();
        }
    }
}

// Función helper para crear breadcrumb fácilmente
function createBreadcrumb(containerId, items = [], options = {}) {
    const breadcrumb = new Breadcrumb(containerId, items, options);
    breadcrumb.render();
    return breadcrumb;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Breadcrumb, createBreadcrumb };
} else {
    window.Breadcrumb = Breadcrumb;
    window.createBreadcrumb = createBreadcrumb;
}
