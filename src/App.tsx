import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SimpleCounter from './components/SimpleCounter';
import PersistentCounter from './components/PersistentCounter';
import BroadcastCounter from './components/BroadcastCounter';
import UrlSyncCounter from './components/UrlSyncCounter';
import UrlSyncCounterInit from './components/UrlSyncCounterInit';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/simple" element={<SimpleCounter />} />
          <Route path="/persistent" element={<PersistentCounter />} />
          <Route path="/broadcast" element={<BroadcastCounter />} />
          <Route path="/url-sync" element={<UrlSyncCounter />} />
          <Route path="/url-sync-init" element={<UrlSyncCounterInit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
