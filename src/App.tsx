import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading...">{useRoutes(routes)}</Suspense>
    </div>
  );
}

export default App;
