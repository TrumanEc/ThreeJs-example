const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//creaando el cubo
const geometryCube = new THREE.BoxGeometry();
const materialCube = new THREE.MeshNormalMaterial(  );
const cube = new THREE.Mesh( geometryCube, materialCube );
cube.position.set(1,1,1)
scene.add( cube );

//creando el cilindro
const geometryCylinder = new THREE.CylinderGeometry( 1, 1, 2, 32 );
const materialCylinder = new THREE.MeshNormalMaterial(  );
const cylinder = new THREE.Mesh( geometryCylinder, materialCylinder );
cube.position.set(0,3,0)
scene.add( cylinder );

//creando el cono
const geometryCone = new THREE.ConeGeometry( 1, 2, 5 );
const materialCone = new THREE.MeshNormalMaterial(  );
const cone = new THREE.Mesh( geometryCone, materialCone );
cone.position.set(0,-3,0)
scene.add( cone );

//creando plano
const geometryPlane = new THREE.PlaneGeometry( 1, 1 );
const materialPlane = new THREE.MeshNormalMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometryPlane, materialPlane );
plane.position.set(0,6,0)
scene.add( plane );

//creacion sphere
const geometryS = new THREE.SphereGeometry( 1, 64, 32 );
const materialS = new THREE.MeshNormalMaterial( {wireframe: true} );
const sphere = new THREE.Mesh( geometryS, materialS );
sphere.position.set(0,-6,0)
scene.add( sphere );

camera.position.z = 12;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

    plane.rotation.x += 0.01;
    plane.rotation.y += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
