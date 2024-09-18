// 'use client';
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';

// const Hero: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const loader = new GLTFLoader();

//     // Define renderer
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     const width = mountRef.current?.clientWidth || window.innerWidth;
//     const height = mountRef.current?.clientHeight || window.innerHeight;
//     renderer.setSize(width, height);

//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }

//     // Define camera
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 5;

//     // Add lighting (models often require lights)
//     const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
//     directionalLight.position.set(10, 10, 10).normalize();
//     scene.add(directionalLight);

//     // Helper function to calculate focus distance
//     const calculateFocusDistance = (model: THREE.Object3D): number => {
//       const boundingBox = new THREE.Box3().setFromObject(model);
//       const modelCenter = boundingBox.getCenter(new THREE.Vector3());
//       const distance = camera.position.distanceTo(modelCenter);
//       console.log('Focus distance:', distance); // Log focus distance for debugging
//       return distance;
//     };

//     let bokehPass: BokehPass; // Declare the BokehPass outside to modify it later
//     const modelsLoaded: THREE.Object3D[] = [];

//     // Function to load model and calculate focus distance
//     const loadModel = (
//       url: string,
//       scale: [number, number, number],
//       position: [number, number, number],
//       rotation: [number, number, number]
//     ): Promise<number> => {
//       return new Promise((resolve, reject) => {
//         loader.load(
//           url,
//           (gltf) => {
//             const model = gltf.scene;
//             model.scale.set(...scale);
//             model.position.set(...position);
//             model.rotation.set(...rotation);

//             scene.add(model);
//             const focusDistance = calculateFocusDistance(model);
//             modelsLoaded.push(model);
//             resolve(focusDistance);
//           },
//           undefined,
//           reject
//         );
//       });
//     };

//     // Load all models
//     Promise.all([
//       loadModel('./Assets/3d_models/vans_shoe.glb', [100, 100, 100], [4, 0, 1], [0.5, -1.5, 0.5]),
//       loadModel('./Assets/3d_models/vans_shoe_box.glb', [10, 10, 10], [0, -1, -2], [0.2, 1.6, -0.1]),
//       loadModel('./Assets/3d_models/vans_chima_pro_2.glb', [10, 10, 10], [0, 0.2, -2], [0, 0, 0]),
//       loadModel('./Assets/3d_models/unused_blue_vans_shoe.glb', [1, 1, 1], [-3, 0, 1], [0.2, 1.2, 0.4]),
//     ])
//       .then((focusDistances) => {
//         // Use the minimum focus distance to focus on the closest object
//         const closestFocusDistance = Math.min(...focusDistances);
//         console.log('Closest focus distance:', closestFocusDistance); // Log for debugging

//         // Post-processing with EffectComposer
//         const composer = new EffectComposer(renderer);
//         const renderPass = new RenderPass(scene, camera);
//         composer.addPass(renderPass);

//         // Apply BokehPass (Depth of Field effect) with calculated focus
//         bokehPass = new BokehPass(scene, camera, {
//           focus: closestFocusDistance, // Use the closest model for focus
//           aperture: 0.015, // Subtle depth of field effect
//           maxblur: 0.01, // Reduced maximum blur for more realism
//         });
//         composer.addPass(bokehPass);

//         const animate = () => {
//         //   requestAnimationFrame(animate);
//           composer.render(); // Use composer to render with post-processing
//         };

//         renderer.setAnimationLoop(animate);
//       })
//       .catch((error) => {
//         console.error('Error loading models:', error);
//       });

//     // Handle window resizing
//     const handleResize = () => {
//       const newWidth = mountRef.current?.clientWidth || window.innerWidth;
//       const newHeight = mountRef.current?.clientHeight || window.innerHeight;

//       // Update renderer size and camera aspect ratio
//       renderer.setSize(newWidth, newHeight);
//       camera.aspect = newWidth / newHeight;
//       camera.updateProjectionMatrix();

//       if (bokehPass) {
//         bokehPass.setSize(newWidth, newHeight); // Ensure BokehPass resizes correctly
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup when component unmounts
//     return () => {
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement); // Remove the renderer on unmount
//       }
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       {/* This div will contain the 3D scene */}
//       <div ref={mountRef} className='w-full h-[700px] bg-gradient-to-b from-gray-200 to-50%'></div>
//     </div>
//   );
// };

// export default Hero;
