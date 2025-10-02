const users = [
  { firstname: "Alice", lastname: "Smith", email: "alice.smith@example.com" },
  { firstname: "Bob", lastname: "Johnson", email: "bob.johnson@example.com" },
  { firstname: "Charlie", lastname: "Brown", email: "charlie.brown@example.com" },
];

document.addEventListener("DOMContentLoaded", () => {
  // Appeler la fonction populateTable pour remplir le tableau avec les données initiales
  populateTable();
});

function populateTable() {
  // Parcourir la collection `users` et appeler addRow pour chaque utilisateur
  users.forEach(user => {
    addRow(user.firstname, user.lastname, user.email);
  });
}

function addRow(firstname, lastname, email) {
  // Ajouter une ligne au tableau avec les valeurs firstname, lastname, email
  // Sélectionner le corps du tableau
  const tableBody = document.querySelector("table tbody");
  
  // Créer une nouvelle ligne de tableau
  const row = document.createElement("tr");
  row.classList.add("data-row");
  row.id = `row-${email}`; // Ajouter un ID unique basé sur l'email

  // Créer et ajouter les cellules pour chaque colonne
  const firstnameCell = document.createElement("td");
  firstnameCell.textContent = firstname;
  row.appendChild(firstnameCell);
  
  const lastnameCell = document.createElement("td");
  lastnameCell.textContent = lastname;
  row.appendChild(lastnameCell);
  
  const emailCell = document.createElement("td");
  emailCell.textContent = email;
  row.appendChild(emailCell);

  const actionsCell = document.createElement("td");
  actionsCell.innerHTML = '<button class="toggle-details">Details</button>&nbsp;<button class="delete-row">Supprimer</button>';
  row.appendChild(actionsCell);

  // Ajouter la ligne principale au corps du tableau
  tableBody.appendChild(row);

  // Ajouter une ligne de détails cachée
  const detailsRow = document.createElement("tr");
  detailsRow.id = `details-${email}`; // Ajouter un ID unique basé sur l'email
  detailsRow.setAttribute("data-parent-row", row.id); // Lier la ligne de détails à la ligne principale
  detailsRow.classList.add("details-row");
  detailsRow.style.display = "none"; // Cacher la ligne de détails par défaut

    const detailsCell = document.createElement("td");
    detailsCell.colSpan = 4; // Étendre sur toutes les colonnes
    detailsCell.innerHTML = `<strong>Détails:</strong> <span class="bloc-details">${firstname} ${lastname} - ${email}</span>`;
    detailsRow.appendChild(detailsCell);

    tableBody.appendChild(detailsRow);

    row.querySelector('.toggle-details').addEventListener('click', (el) => {
        // Method 1 - event context (el.target => clicked element)
        const targetRowId = el.target.closest('tr.data-row').id;
        const detailsRow = tableBody.querySelector(`tr[data-parent-row="${targetRowId}"]`);

        // Method 2 - context from block
        detailsRow.style.display = 'block'; 
    });
}

document.querySelector("#add-row").addEventListener("click", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page lors du submit

  // Récupérer les données du formulaire
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;

  // Ajouter une nouvelle ligne au tableau en appelant addRow
  addRow(firstname, lastname, email);
  
  // Réinitialiser le formulaire après ajout
  document.querySelector("#add-row-form").reset();
});