// Escena, cámara y renderizador
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Crear una esfera
const geometría = new THREE.SphereGeometry(1, 32, 32); // Radio de 1, 32 segmentos horizontales y verticales

// Crear un material personalizado para la esfera
const material = new THREE.MeshPhongMaterial({
    vertexColors: true, // Habilitar colores por vértice
});

// Crear colores para la esfera (mitad verde, mitad blanca)
const colores = [];
const colorVerde = new THREE.Color(0x00ff00); // Verde
const colorBlanco = new THREE.Color(0xffffff); // Blanco

// Asignar colores a cada vértice de la esfera
for (let i = 0; i < geometría.attributes.position.count; i++) {
    if (geometría.attributes.position.getY(i) > 0) {
        colores.push(colorVerde.r, colorVerde.g, colorVerde.b); // Mitad superior (verde)
    } else {
        colores.push(colorBlanco.r, colorBlanco.g, colorBlanco.b); // Mitad inferior (blanco)
    }
}

// Añadir los colores a la geometría
geometría.setAttribute('color', new THREE.Float32BufferAttribute(colores, 3));

// Crear la esfera con la geometría y el material
const esfera = new THREE.Mesh(geometría, material);
escena.add(esfera);

// Añadir una luz para ver mejor los colores
const luz = new THREE.DirectionalLight(0xffffff, 1);
luz.position.set(0.1, 0.1, 1).normalize();
escena.add(luz);

// Posicionar la cámara
camara.position.z = 5;

// Animación de la esfera
function animacion() {
    requestAnimationFrame(animacion);
    esfera.rotation.x += 0.01;
    esfera.rotation.y += 0.01;
    renderizador.render(escena, camara);
}

animacion();

// Ajustar el tamaño de la ventana al cambiar su tamaño
window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
});