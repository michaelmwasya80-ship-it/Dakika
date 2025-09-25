const loans = [
  { title: 'Check off loans', desc: 'Payroll-backed loans for salaried clients.' },
  { title: 'Logbook loans', desc: 'Quick loans secured against your vehicle logbook.' },
  { title: 'Logbook Asset financing', desc: 'Asset financing using your vehicle as collateral.' },
  { title: 'Logbook buy off loan', desc: 'Buy off your vehicle loan with flexible repayment.' },
  { title: 'Nairobi metropolitan Title deed loans', desc: 'Loans secured by Nairobi metro title deeds.' },
  { title: 'Bankers loan', desc: 'Business and personal loans for various needs.' }
];

const loanList = document.getElementById('loanList');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const yearSpan = document.getElementById('year');

yearSpan.textContent = new Date().getFullYear();

loans.forEach((loan) => {
  const card = document.createElement('div');
  card.classList.add('loan-card');
  card.innerHTML = `<h4>${loan.title}</h4><p>${loan.desc}</p>`;
  card.addEventListener('click', () => {
    modalTitle.textContent = loan.title;
    modalBody.textContent = loan.desc;
    modal.style.display = 'flex';
  });
  loanList.appendChild(card);
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

document.getElementById('getQuote').addEventListener('click', () => {
  const type = document.getElementById('loanType').value;
  const amount = Number(document.getElementById('amount').value);
  const tenor = Number(document.getElementById('tenor').value);
  if (!amount || !tenor) {
    alert('Please enter amount and tenor');
    return;
  }
  const monthlyRate = 0.018;
  const monthly = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -tenor));
  alert(`${type}\nEstimated monthly repayment: KES ${Math.round(monthly).toLocaleString()}`);
});
