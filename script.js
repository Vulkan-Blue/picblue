// Filtra imágenes por categoría
function filtrarImagenes(categoria) {
    const contenedores = document.querySelectorAll('.image-container');
    contenedores.forEach(container => {
        if (container.classList.contains(categoria)) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}

// Descarga imagen
function descargarImagen(src) {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Crear modal para agrandar imagen
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.innerHTML = `
        <span class="cerrar" onclick="cerrarModal()">×</span>
        <img id="modal-img" src="" alt="Imagen Ampliada">
    `;
    body.appendChild(modal);

    const todasLasImagenes = document.querySelectorAll('.image-container img');
    todasLasImagenes.forEach(img => {
        img.addEventListener('click', () => {
            document.getElementById('modal-img').src = img.src;
            modal.style.display = 'flex';
        });
    });
});

// Cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.getElementById('modal-img').src = '';
}
