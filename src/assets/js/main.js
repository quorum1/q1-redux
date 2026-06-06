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

// ─── Generic filter tabs (content, orgs, members, etc.) ──────────────────────

document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const bar = tab.closest('[role="tablist"]') || tab.parentElement;
    bar.querySelectorAll('.filter-tab').forEach(t => {
      t.classList.toggle('active', t === tab);
      t.setAttribute('aria-selected', String(t === tab));
    });

    const filter = tab.dataset.filter;
    const grid = document.querySelector('#content-grid, #members-grid, #orgs-grid');
    if (!grid) return;

    grid.querySelectorAll('[data-format], [data-type]').forEach(card => {
      const val = card.dataset.format || card.dataset.type;
      card.style.display = (filter === 'all' || val === filter) ? '' : 'none';
    });
  });
});

// ─── Unpublished work toggle ──────────────────────────────────────────────────

const toggle = document.getElementById('unpublished-toggle');
if (toggle) {
  const activate = () => {
    const on = toggle.classList.toggle('on');
    toggle.setAttribute('aria-checked', String(on));
  };
  toggle.addEventListener('click', activate);
  toggle.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); activate(); }
  });
}

// ─── FAQ accordion ────────────────────────────────────────────────────────────

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    item.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});
