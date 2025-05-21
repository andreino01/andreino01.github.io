// static/js/custom_ghironda.js
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('aside.sidebar');
    const sidebarToggleButton = document.querySelector('.sidebar-toggle-button'); // Pulsante "X" DENTRO la sidebar
    const pageHamburgerButton = document.querySelector('.page-hamburger-button'); // Pulsante hamburger sulla PAGINA
    const pageOverlay = document.querySelector('.page-overlay');
    const body = document.body; // Per spostare il contenuto principale

    // Verifica iniziale elementi
    if (!sidebar) {
        console.error('Errore Critico: Elemento Sidebar (aside.sidebar) non trovato.');
        if(pageHamburgerButton) pageHamburgerButton.style.display = 'none';
        return;
    }
    // Non è un errore critico se uno dei due pulsanti manca, ma avvisa
    if (!sidebarToggleButton) console.warn('Attenzione: Pulsante .sidebar-toggle-button non trovato.');
    if (!pageHamburgerButton) console.warn('Attenzione: Pulsante .page-hamburger-button non trovato.');

    function setSidebarState(isClosed) {
        sidebar.classList.toggle('closed', isClosed);
        body.classList.toggle('sidebar-is-open', !isClosed); // Aggiungi/rimuovi classe al body

        if (isClosed) {
            // Sidebar CHIUSA -> Mostra hamburger sulla pagina, nascondi X nella sidebar
            if (pageHamburgerButton) pageHamburgerButton.style.display = 'block';
            if (sidebarToggleButton) sidebarToggleButton.style.display = 'none';
            // Assicurati che l'hamburger sulla pagina non sia in stato "X"
            if (pageHamburgerButton) pageHamburgerButton.classList.remove('active');
            if (pageHamburgerButton) pageHamburgerButton.setAttribute('aria-expanded', 'false');
            if (sidebarToggleButton) sidebarToggleButton.setAttribute('aria-expanded', 'false'); // Anche se nascosto

        } else {
            // Sidebar APERTA -> Nascondi hamburger sulla pagina, mostra X nella sidebar (e attivala)
            if (pageHamburgerButton) pageHamburgerButton.style.display = 'none';
            if (sidebarToggleButton) sidebarToggleButton.style.display = 'block';
            if (sidebarToggleButton) sidebarToggleButton.classList.add('active'); // Metti la X
            if (pageHamburgerButton) pageHamburgerButton.setAttribute('aria-expanded', 'true');
            if (sidebarToggleButton) sidebarToggleButton.setAttribute('aria-expanded', 'true');
        }

        if (pageOverlay) {
            pageOverlay.classList.toggle('active', !isClosed);
        }
    }

    function toggleSidebar() {
        const 현재상태_닫힘 = sidebar.classList.contains('closed'); // Leggi lo stato attuale
        setSidebarState(!현재상태_닫힘); // Inverti lo stato
    }

    if (sidebarToggleButton) {
        sidebarToggleButton.addEventListener('click', toggleSidebar);
    }
    if (pageHamburgerButton) {
        pageHamburgerButton.addEventListener('click', toggleSidebar);
    }
    if (pageOverlay) {
        pageOverlay.addEventListener('click', toggleSidebar);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !sidebar.classList.contains('closed')) {
            toggleSidebar();
        }
    });

    // Stato iniziale: sidebar chiusa
    setSidebarState(true); // true significa 'chiusa'

});