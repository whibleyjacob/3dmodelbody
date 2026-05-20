# 3D Body Model

An interactive 3D human body model built with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber).
Click body parts to select them, drag to rotate.

**[▶ Live demo](https://whibleyjacob.github.io/3dmodelbody/)**

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually <http://localhost:5173>).

## Use the component in your own project

The model lives in a single file: [`src/BodyModel.jsx`](src/BodyModel.jsx).
Copy it into your React app and install the peer dependencies:

```bash
npm install three @react-three/fiber @react-three/drei
```

Then render it with controlled selection state:

```jsx
import { useState } from 'react';
import { BodyModel } from './BodyModel.jsx';

function Example() {
  const [selected, setSelected] = useState([]);

  const toggle = (name) =>
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <BodyModel selectedBodyParts={selected} onToggleBodyPart={toggle} />
    </div>
  );
}
```

### Props

| Prop               | Type                     | Description                                    |
| ------------------ | ------------------------ | ---------------------------------------------- |
| `selectedBodyParts` | `string[]`              | Names of currently selected parts.             |
| `onToggleBodyPart`  | `(name: string) => void` | Called with a part name when it is clicked.    |

Available part names: `Head`, `Chest`, `Abdomen`, `Right Upper Back`, `Left Upper Back`.

## Deployment

Every push to `main` is built and published to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
In the repo settings, set **Settings → Pages → Source** to **GitHub Actions** once.

## License

MIT
