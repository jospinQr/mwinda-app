// Initialisation de la carte
mapboxgl.accessToken = 'VOTRE_CLE_API_MAPBOX';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.3522, 48.8566], // Paris
    zoom: 11
});

// Mise à jour de la carte lors de la saisie
document.getElementById('departure').addEventListener('change', updateMap);
document.getElementById('destination').addEventListener('change', updateMap);

function updateMap() {
    // Ajoutez ici la logique pour mettre à jour les marqueurs sur la carte
}