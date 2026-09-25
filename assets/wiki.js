(() => {
  'use strict';
  const form = document.querySelector('.search-box');
  const input = document.getElementById('wiki-search');
  const panel = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const list = panel.querySelector('ul');
  const index = window.WIKI_INDEX || [];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function search() {
    const query = input.value.trim();
    list.replaceChildren();
    if (!query) { panel.hidden = true; return; }
    panel.hidden = false;
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    const matches = index.filter(item => terms.every(term => normalize(item.title + ' ' + item.text).includes(term)));
    const shown = matches.slice(0, 10);
    status.textContent = matches.length ? `${matches.length} result${matches.length === 1 ? '' : 's'} for “${query}”${matches.length > 10 ? ' · Showing the first 10' : ''}` : `No results for “${query}”. Try population, history, or state symbols.`;
    for (const item of shown) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      const p = document.createElement('p');
      const start = Math.max(0, normalize(item.text).indexOf(terms[0]) - 60);
      p.textContent = (start ? '…' : '') + item.text.slice(start, start + 190) + (item.text.length > start + 190 ? '…' : '');
      li.append(a, p);
      list.append(li);
    }
  }
  input.addEventListener('input', search);
  form.addEventListener('submit', event => { event.preventDefault(); search(); });
  function closeSearch() { panel.hidden = true; input.value = ''; input.focus(); }
  panel.querySelector('.close-search').addEventListener('click', closeSearch);
  input.addEventListener('keydown', event => { if (event.key === 'Escape') closeSearch(); });
  panel.addEventListener('keydown', event => { if (event.key === 'Escape') closeSearch(); });
  panel.addEventListener('click', event => { if (event.target.closest('a')) { panel.hidden = true; input.value = ''; } });
  const printButton = document.querySelector('.print-button');
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
})();
