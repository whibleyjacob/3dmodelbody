import React, { useState } from 'react';
import { BodyModel } from './BodyModel';

export default function App() {
  const [selectedBodyParts, setSelectedBodyParts] = useState([]);

  const toggleBodyPart = (name) => {
    setSelectedBodyParts((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <header style={styles.header}>
        <h1 style={styles.title}>3D Body Model</h1>
        <p style={styles.subtitle}>Click a body part to select it · drag to rotate</p>
      </header>

      <BodyModel
        selectedBodyParts={selectedBodyParts}
        onToggleBodyPart={toggleBodyPart}
      />

      <aside style={styles.panel}>
        <h2 style={styles.panelTitle}>Selected parts</h2>
        {selectedBodyParts.length === 0 ? (
          <p style={styles.empty}>Nothing selected yet.</p>
        ) : (
          <ul style={styles.list}>
            {selectedBodyParts.map((part) => (
              <li key={part} style={styles.listItem}>{part}</li>
            ))}
          </ul>
        )}
        {selectedBodyParts.length > 0 && (
          <button style={styles.clearBtn} onClick={() => setSelectedBodyParts([])}>
            Clear all
          </button>
        )}
      </aside>
    </div>
  );
}

const styles = {
  header: {
    position: 'absolute',
    top: 24,
    left: 24,
    zIndex: 10,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#f1f5f9',
  },
  subtitle: {
    fontSize: '0.85rem',
    color: '#94a3b8',
    marginTop: 4,
  },
  panel: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 10,
    width: 220,
    padding: 16,
    background: 'rgba(15, 23, 42, 0.75)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: 12,
    backdropFilter: 'blur(8px)',
  },
  panelTitle: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#f1f5f9',
    marginBottom: 8,
  },
  empty: {
    fontSize: '0.85rem',
    color: '#64748b',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  listItem: {
    fontSize: '0.85rem',
    color: '#38bdf8',
    padding: '4px 8px',
    background: 'rgba(56, 189, 248, 0.12)',
    borderRadius: 6,
  },
  clearBtn: {
    marginTop: 12,
    width: '100%',
    padding: '6px 0',
    fontSize: '0.8rem',
    color: '#e2e8f0',
    background: 'rgba(148, 163, 184, 0.15)',
    border: '1px solid rgba(148, 163, 184, 0.25)',
    borderRadius: 6,
    cursor: 'pointer',
  },
};
