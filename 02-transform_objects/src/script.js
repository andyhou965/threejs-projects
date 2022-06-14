import "./style.css";
import * as THREE from "three";

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // The Shape
const cubeMaterial = new THREE.MeshBasicMaterial({
  // How it looks
  color: "#ff0000",
});
// Mesh Object
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh.position.x = 0.7;
cubeMesh.position.y = -0.6;
cubeMesh.position.z = 1;
scene.add(cubeMesh);

// Camera
// First Param: Field of View(fov) - Vertical vision angle, in degrees
// Second Param: Aspect Ratio - The width of the render divied by the height of the render
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
scene.add(camera);

// Renderer
const canvas = document.querySelector("canvas.webgl"); // get the canvas from html
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
// Provide a scene and camera for rendering, it will show the scene from camera point of view
// "Rendering" like take pictures using camera
renderer.render(scene, camera);
