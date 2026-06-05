// ─── Site nav hamburger toggle ────────────────────────────────────────────────

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#site-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── Nodes section tab switcher ───────────────────────────────────────────────

const nodeTabs = document.querySelectorAll('.nodes-tab');

nodeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.panel;

    nodeTabs.forEach(t => {
      t.classList.toggle('active', t === tab);
      t.setAttribute('aria-selected', String(t === tab));
    });

    document.querySelectorAll('.nodes-panel').forEach(panel => {
      panel.hidden = panel.id !== `panel-${target}`;
    });
  });
});
