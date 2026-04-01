// ── THEME TOGGLE ──
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

// Load saved preference
const savedTheme = localStorage.getItem('ewallet-theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('ewallet-theme', next);
});

// ── PRESET AMOUNT BUTTONS ──
const presetBtns = document.querySelectorAll('.preset-btn');
const amountInput = document.getElementById('amountInput');

presetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    presetBtns.forEach(b => b.classList.remove('active'));
    // Set active + fill input
    btn.classList.add('active');
    amountInput.value = btn.dataset.amount;
  });
});

// Clear active preset when user types manually
amountInput.addEventListener('input', () => {
  presetBtns.forEach(b => b.classList.remove('active'));
});

// ── LOAD MONEY BUTTON ──
const loadBtn = document.getElementById('loadBtn');

loadBtn.addEventListener('click', () => {
  const amount = amountInput.value;
  const source = document.querySelector('input[name="fundingSource"]:checked')?.value;

  if (!amount || Number(amount) <= 0) {
    alert('Please enter a valid amount.');
    amountInput.focus();
    return;
  }

  // Replace this with your actual load-money logic / API call
  alert(`Loading NRP ${amount} via ${source === 'visa' ? 'Visa debit card' : 'Bank'}...`);
});
