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

      <Suspense fallback=''>
        <Route path='/technical-interview-mid' component={TopStories} />
        <Route path='/article/:id' component={Details} />
      </Suspense>
    </>
  );
}

export default App;
