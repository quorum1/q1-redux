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

document.querySelectorAll('.nodes-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.panel;
    tab.closest('.nodes-tabs').querySelectorAll('.nodes-tab').forEach(t => {
      t.classList.toggle('active', t === tab);
      t.setAttribute('aria-selected', String(t === tab));
    });
    document.querySelectorAll('.nodes-panel').forEach(panel => {
      panel.hidden = panel.id !== `panel-${target}`;
    });
  });
});

// ─── Content filter tabs ──────────────────────────────────────────────────────

const filterTabs = document.querySelectorAll('.filter-tab');
const contentCards = document.querySelectorAll('#content-cards .content-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;

    filterTabs.forEach(t => {
      t.classList.toggle('active', t === tab);
      t.setAttribute('aria-selected', String(t === tab));
    });

    contentCards.forEach(card => {
      const show = filter === 'all' || card.dataset.format === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// ─── Unpublished work toggle ──────────────────────────────────────────────────

const toggle = document.getElementById('unpublished-toggle');
if (toggle) {
  const activate = () => {
    const on = toggle.classList.toggle('on');
    toggle.setAttribute('aria-checked', String(on));
    // In a real implementation this would fetch/show draft content
  };
  toggle.addEventListener('click', activate);
  toggle.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); activate(); }
  });
}
