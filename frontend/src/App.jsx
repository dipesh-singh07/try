import { useEffect, useState } from 'react';
import { getHealth } from './services/api';
import './App.css';

function App() {
  const [status, setStatus] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    getHealth()
      .then((data) => setStatus({ loading: false, data, error: null }))
      .catch((err) => setStatus({ loading: false, data: null, error: err.message }));
  }, []);

  return (
    <main className="app">
      <h1>Full-Stack App</h1>
      <p>React + Vite frontend connected to an Express backend.</p>
      <section className="status">
        {status.loading && <p>Checking backend…</p>}
        {status.error && <p className="error">Backend not reachable: {status.error}</p>}
        {status.data && (
          <p className="ok">
            {status.data.message} · Database: {status.data.database}
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
