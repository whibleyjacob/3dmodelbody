# 3D Body Model

An interactive 3D human body model built with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber).
Click any body part to select it, drag to rotate.

**[▶ Live demo](https://whibleyjacob.github.io/3dmodelbody/)**

## About the model

The model is a stylised, anatomically segmented human figure built entirely from
procedural Three.js geometry — no external 3D files to load. Every region is its
own selectable, hover-aware part, split into anterior (front) and posterior (back)
halves where that distinction matters.

**Selectable regions** (~50 parts):

- **Head & neck** — Head, Left/Right Neck
- **Torso (front)** — Chest, Abdomen, Anterior Hips
- **Torso (back)** — Left/Right Upper Back, Left/Right Lower Back, Left/Right Posterior Hip
- **Joints** — Left/Right Hip, Shoulder, Elbow, Wrist, Knee, Ankle
- **Arms** — Anterior/Posterior Upper Arm and Forearm (each side)
- **Hands** — Anterior (palm) and Posterior (back) of each hand, with fingers and thumb
- **Legs** — Anterior/Posterior Upper Leg and Lower Leg (each side)
- **Feet** — Anterior (top) and Posterior (sole + heel) of each foot, with toes

Parts change colour on hover and stay highlighted while selected. Selection state
is fully controlled by the parent, so the host app decides what selecting a part means.

## Use cases

- **Pain / symptom mapping** — let users tap where it hurts in a health or
  physiotherapy app.
- **Anatomy education** — an interactive reference for body regions.
- **Fitness & rehab** — pick muscle groups to target, or log exercises by area.
- **Medical intake forms** — a visual alternative to a checklist of body parts.
- **Any UI** that needs a "select a part of the body" control.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually <http://localhost:5173/3dmodelbody/>).

## Use the component in your own project

The model lives in a single file: [`src/BodyModel.tsx`](src/BodyModel.tsx).
Copy it into your React app and install the peer dependencies:

```bash
npm install three @react-three/fiber @react-three/drei
```

Then render it with controlled selection state:

```tsx
import { useState } from 'react';
import { BodyModel } from './BodyModel';

function Example() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) =>
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

> The component fills its parent, so give the wrapper an explicit width and height.

### Props

| Prop                | Type                     | Description                                  |
| ------------------- | ------------------------ | -------------------------------------------- |
| `selectedBodyParts` | `string[]`               | Names of currently selected parts.           |
| `onToggleBodyPart`  | `(name: string) => void` | Called with a part name when it is clicked.  |

See [About the model](#about-the-model) for the full list of part names.

## Deployment

Every push to `main` is built and published to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
In the repo settings, set **Settings → Pages → Build and deployment → Source**
to **GitHub Actions** once.

## License

[MIT](LICENSE) © Jacob Whibley
