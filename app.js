// Datos iniciales de ejemplo
const data = {
    estudiantes: [
        { id: 1, nombre: "Germán Velandia", nivel: 1, xp: 0 },
        { id: 2, nombre: "Estudiante 2", nivel: 1, xp: 0 }
    ]
};

// Función para pintar la grilla
function renderGrid() {
    const grid = document.getElementById('students-grid');
    grid.innerHTML = data.estudiantes.map(e => `
        <div class="glass p-4 rounded-3xl card-hover">
            <h3 class="font-bold text-white">${e.nombre}</h3>
            <p class="text-amber-400 text-xs">Nivel ${e.level} | XP: ${e.xp}</p>
        </div>
    `).join('');
}

// Inicializar
document.addEventListener('DOMContentLoaded', renderGrid);
