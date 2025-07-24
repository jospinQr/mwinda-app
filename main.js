// Gestionnaire du mode sombre
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}

// Estimation du prix
function estimatePrix(distance) {
    const tarifBase = 2.50;
    const tarifKm = 1.5;
    return (tarifBase + (distance * tarifKm)).toFixed(2);
}

// Gestion du formulaire
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const reservation = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        departure: document.getElementById('departure').value,
        destination: document.getElementById('destination').value,
        transport: document.getElementById('transport').value,
        date: new Date().toISOString()
    };

    // Sauvegarder la réservation
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    // Confirmation
    alert('Réservation enregistrée avec succès !');
    window.location.href = 'historique.html';
});

// Sauvegarder l'historique
function saveToHistory(reservation) {
    let history = JSON.parse(localStorage.getItem('history') || '[]');
    history.push(reservation);
    localStorage.setItem('history', JSON.stringify(history));
}

// Afficher la confirmation
function showConfirmation(reservation, prix) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center';
    modal.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-xl max-w-md">
            <h3 class="text-xl font-bold mb-4">Réservation confirmée !</h3>
            <p>Prix estimé : ${prix}€</p>
            <p>Départ : ${reservation.departure}</p>
            <p>Destination : ${reservation.destination}</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Fermer
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}