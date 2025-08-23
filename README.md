# UWAL | WebGPU Fundamentals

[WebGPU Fundamentals](https://webgpufundamentals.org/) lessons developed using [UWAL](https://ustymukhman.github.io/uwal/) library versions `<=0.1`.<br>
For a more up-to-date lessons and examples, feel free to check the library [repo](https://github.com/UstymUkhman/uwal).

## Download

```bash
git clone https://github.com/UstymUkhman/uwal-webgpu-fundamentals.git
cd uwal-webgpu-fundamentals
```

## Develop

```bash
bun i           # Install project dependencies
bun run dev     # Run in development mode
bun run build   # Build for production
bun run preview # Preview production build
```

<br>

| Lesson | Live | Source |
|:- |:- |:- |
| _Basics_ |
| [Fundamentals](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#fundamentals) | [Code](./src/fundamentals/index.js) |
| [Inter-stage Variables](https://webgpufundamentals.org/webgpu/lessons/webgpu-inter-stage-variables.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#inter-stage-variables) | [Code](./src/inter-stage-variables/index.js) |
| [Uniforms](https://webgpufundamentals.org/webgpu/lessons/webgpu-uniforms.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#uniforms) | [Code](./src/uniforms/index.js) |
| [Storage Buffers](https://webgpufundamentals.org/webgpu/lessons/webgpu-storage-buffers.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#storage-buffers) | [Code](./src/storage-buffers/index.js) |
| [Vertex Buffers](https://webgpufundamentals.org/webgpu/lessons/webgpu-vertex-buffers.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#vertex-buffers) | [Code](./src/vertex-buffers/index.js) |
| _Textures_ |
| [Textures](https://webgpufundamentals.org/webgpu/lessons/webgpu-textures.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#textures) | [Code](./src/textures/index.js) |
| [Mipmap Filter](https://webgpufundamentals.org/webgpu/lessons/webgpu-textures.html#mipmapfilter) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#mipmap-filter) | [Code](./src/mipmap-filter/index.js) |
| [Loading Images](https://webgpufundamentals.org/webgpu/lessons/webgpu-importing-textures.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#loading-images) | [Code](./src/loading-images/index.js) |
| [Generating mipmaps on the GPU](https://webgpufundamentals.org/webgpu/lessons/webgpu-importing-textures.html#a-generating-mips-on-the-gpu) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#gpu-mipmaps) | [Code](./src/gpu-mipmaps/index.js) |
| [Loading Canvas](https://webgpufundamentals.org/webgpu/lessons/webgpu-importing-textures.html#loading-canvas) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#loading-canvas) | [Code](./src/loading-canvas/index.js) |
| [Loading Video](https://webgpufundamentals.org/webgpu/lessons/webgpu-importing-textures.html#loading-video) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#loading-video) | [Code](./src/loading-video/index.js) |
| [Texture Atlases](https://webgpufundamentals.org/webgpu/lessons/webgpu-importing-textures.html#texture-atlases) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#texture-atlases) | [Code](./src/texture-atlases/index.js) |
| [Using Video](https://webgpufundamentals.org/webgpu/lessons/webgpu-textures-external-video.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#using-video) | [Code](./src/using-video/index.js) |
| [Using Camera](https://webgpufundamentals.org/webgpu/lessons/webgpu-textures-external-video.html#a-web-camera) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#using-camera) | [Code](./src/using-camera/index.js) |
| [Cubemaps](https://webgpufundamentals.org/webgpu/lessons/webgpu-cube-maps.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#cubemaps) | [Code](./src/cubemaps/index.js) |
| [Storage Textures](https://webgpufundamentals.org/webgpu/lessons/webgpu-storage-textures.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#storage-textures) | [Code](./src/storage-textures/index.js) |
| [Multisampling](https://webgpufundamentals.org/webgpu/lessons/webgpu-multisampling.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#multisampling) | [Code](./src/multisampling/index.js) |
|   |   |   |
| [Shader Constants](https://webgpufundamentals.org/webgpu/lessons/webgpu-constants.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#shader-constants) | [Code](./src/shader-constants/index.js) |
| [Transparency and Blending](https://webgpufundamentals.org/webgpu/lessons/webgpu-transparency.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#transparency) | [Code](./src/transparency/index.js) |
| [Blend Settings](https://webgpufundamentals.org/webgpu/lessons/webgpu-transparency.html#blend-settings) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#blend-settings) | [Code](./src/blend-settings/index.js) |
| [Bind Group Layouts](https://webgpufundamentals.org/webgpu/lessons/webgpu-bind-group-layouts.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#bind-group-layouts) | [Code](./src/bind-group-layouts/index.js) |
| [Timing Performance](https://webgpufundamentals.org/webgpu/lessons/webgpu-timing.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#timing-performance) | [Code](./src/timing-performance/index.js) |
| _3D Math_ |
| [Translation](https://webgpufundamentals.org/webgpu/lessons/webgpu-translation.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#translation) | [Code](./src/translation/index.js) |
| [Rotation](https://webgpufundamentals.org/webgpu/lessons/webgpu-rotation.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#rotation) | [Code](./src/rotation/index.js) |
| [Scale](https://webgpufundamentals.org/webgpu/lessons/webgpu-scale.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#scale) | [Code](./src/scale/index.js) |
| [Matrix Math](https://webgpufundamentals.org/webgpu/lessons/webgpu-matrix-math.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#matrix-math) | [Code](./src/matrix-math/index.js) |
| [Adding in Projection](https://webgpufundamentals.org/webgpu/lessons/webgpu-matrix-math.html#adding-in-projection) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#adding-projection) | [Code](./src/adding-projection/index.js) |
| [Orthographic Projection](https://webgpufundamentals.org/webgpu/lessons/webgpu-orthographic-projection.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#orthographic-projection) | [Code](./src/orthographic-projection/index.js) |
| [Perspective Projection](https://webgpufundamentals.org/webgpu/lessons/webgpu-perspective-projection.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#perspective-projection) | [Code](./src/perspective-projection/index.js) |
| [Cameras](https://webgpufundamentals.org/webgpu/lessons/webgpu-cameras.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#cameras) | [Code](./src/cameras/index.js) |
| [Matrix Stacks](https://webgpufundamentals.org/webgpu/lessons/webgpu-matrix-stacks.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#matrix-stacks) | [Code](./src/matrix-stacks/index.js) |
| [Recursive Tree](https://webgpufundamentals.org/webgpu/lessons/webgpu-matrix-stacks.html#a-recursive-tree) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#recursive-tree) | [Code](./src/recursive-tree/index.js) |
| [Scene Graphs](https://webgpufundamentals.org/webgpu/lessons/webgpu-scene-graphs.html) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#scene-graphs) | [Code](./src/scene-graphs/index.js) |
| [Making a Hand](https://webgpufundamentals.org/webgpu/lessons/webgpu-scene-graphs.html#a-hand) | [Preview](https://ustymukhman.github.io/uwal-webgpu-fundamentals/dist/#making-hand) | [Code](./src/making-hand/index.js) |
