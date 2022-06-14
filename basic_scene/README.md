# Four elements to get started

1. A scene that will contain objects
2. Some objects
3. A camera
4. A render

## SCENE

- Like a container
- We put objects, models, lights, etc. in it.
- At some point we ask Three.js to render that scene.

## OBJECTS

- Primitive geometries
  1. Mesh: combination of a **geometry**(the shape) and a **material**(how it looks)
  2. Start with a BoxGeometry and a MeshBasicMaterial
- Imported models
- Particles
- Lights
  etc.

## CAMERA

- Not Visible
- Serve as point of view when doing a render
- Can have multiple and switch between them
- Different types

## RENDER

- Render the scene from the camera point of view
- Result drawn into a Canvas
- A Canvas is a HTML element in which you chan draw stuff
- Three.js will use WebGL to draw the render inside this canvas
- You can create it or you can let Three.js do it
