function ajouterEntreprise(nom, horaires) {
  const entreprises = JSON.parse(localStorage.getItem('entreprises')) || [];
  entreprises.push({ nom, horaires });
  localStorage.setItem('entreprises', JSON.stringify(entreprises));
}

function chargerEntreprisesDansSelect(selectId) {
  const entreprises = JSON.parse(localStorage.getItem('entreprises')) || [];
  const select = document.getElementById(selectId);
  entreprises.forEach(ent => {
    const option = document.createElement('option');
    option.value = ent.nom;
    option.textContent = ent.nom;
    select.appendChild(option);
  });
}

function chargerCreneaux(entrepriseNom, selectId) {
  const entreprises = JSON.parse(localStorage.getItem('entreprises')) || [];
  const entreprise = entreprises.find(e => e.nom === entrepriseNom);
  const select = document.getElementById(selectId);
  select.innerHTML = '<option disabled selected>Choisissez un créneau</option>';
  entreprise?.horaires.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h;
    opt.textContent = h;
    select.appendChild(opt);
  });
}

function getEntreprises() {
  return JSON.parse(localStorage.getItem('entreprises') || '[]');
}
function addEntreprise(entreprise) {
  let entreprises = getEntreprises();
  entreprises.push(entreprise);
  localStorage.setItem('entreprises', JSON.stringify(entreprises));
}