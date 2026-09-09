let batches = JSON.parse(localStorage.getItem('biotrack_batches')) || [];
let currentFilter = 'all';

// Éléments DOM
const batchForm = document.getElementById('batch-form');
const batchList = document.getElementById('batch-list');
const searchInput = document.getElementById('search-batch');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');

// Événements
batchForm.addEventListener('submit', addBatch);
batchList.addEventListener('click', deleteBatch);
searchInput.addEventListener('input', renderBatches);
themeToggle.addEventListener('click', toggleTheme);
document.getElementById('btn-translate').addEventListener('click', translateDNA);

filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    renderBatches();
  });
});

// Module ADN -> Protéine (Biotech)
function translateDNA() {
  const dna = document.getElementById('dna-input').value.toUpperCase().trim();
  const output = document.getElementById('dna-output');
  
  if (!/^[ATCG]+$/.test(dna)) {
    output.textContent = "⚠️ Séquence invalide. Utilisez uniquement A, T, C, G.";
    return;
  }

  // Transcription ADN -> ARNm
  const mrna = dna.replace(/T/g, 'U');
  output.innerHTML = `<strong>ARNm:</strong> ${mrna}`;
}

// Logique du Système d'Information LIMS
function addBatch(e) {
  e.preventDefault();
  
  const code = document.getElementById('batch-code').value.trim();
  const drug = document.getElementById('drug-name').value.trim();
  const temp = parseFloat(document.getElementById('temp-val').value);
  const ph = parseFloat(document.getElementById('ph-val').value);
  const stage = document.getElementById('stage-select').value;

  // Contrôle Qualité automatique (Normes biopharmaceutiques)
  const isConform = (temp >= 36.5 && temp <= 37.5) && (ph >= 6.8 && ph <= 7.4);
  const status = isConform ? 'Conforme' : 'Non Conforme';

  const newBatch = {
    id: Date.now(),
    code,
    drug,
    temp,
    ph,
    stage,
    status
  };

  batches.push(newBatch);
  saveAndRender();
  batchForm.reset();
}

function deleteBatch(e) {
  if (e.target.classList.contains('delete-btn')) {
    const id = Number(e.target.dataset.id);
    batches = batches.filter(b => b.id !== id);
    saveAndRender();
  }
}

function renderBatches() {
  const search = searchInput.value.toLowerCase();
  batchList.innerHTML = '';

  const filtered = batches.filter(batch => {
    const matchesSearch = batch.code.toLowerCase().includes(search) || batch.drug.toLowerCase().includes(search);
    const matchesFilter = currentFilter === 'all' ? true : batch.status === currentFilter;
    return matchesSearch && matchesFilter;
  });

  filtered.forEach(b => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${b.code}</strong></td>
      <td>${b.drug}</td>
      <td>${b.stage}</td>
      <td>${b.temp}°C | pH ${b.ph}</td>
      <td><span class="badge ${b.status === 'Conforme' ? 'success' : 'danger'}">${b.status}</span></td>
      <td><button class="delete-btn" data-id="${b.id}">Supprimer</button></td>
    `;
    batchList.appendChild(tr);
  });
}

function saveAndRender() {
  localStorage.setItem('biotrack_batches', JSON.stringify(batches));
  renderBatches();
}

function toggleTheme() {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = '🌙 Mode Sombre';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Mode Clair';
  }
}

renderBatches();