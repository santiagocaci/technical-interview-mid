import { lazy, Suspense } from 'react';
import { Route } from 'wouter';
import { Header } from './components/Header';

const Details = lazy(() => import('./pages/Details'));
const TopStories = lazy(() => import('./pages/TopStories'));

// Todo: Hacer un fallback mejor
function App() {
  return (
    <>
      <Header />

      <Suspense fallback='Loading...'>
        <Route path='/' component={TopStories} />
        <Route path='/details' component={Details} />
      </Suspense>
    </>
  );
}

export default App;
