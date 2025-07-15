import { Link } from 'react-router-dom';
import { createZignal } from '@zignal/core';
import { write } from '@zignal/persist';

// Create separate counters for each storage type
const useLocalStorageCounter = write(createZignal(0), { key: 'counter_local', storage: 'localStorage' });
const useSessionStorageCounter = write(createZignal(0), { key: 'counter_session', storage: 'sessionStorage' });

// Storage type selector using Zignal
const storageTypeSignal = createZignal<'localStorage' | 'sessionStorage'>('localStorage');

function PersistentCounter() {
  // Use Zignal for storage type selection
  const [storageType, setStorageType] = storageTypeSignal();
  const [localCount, setLocalCount] = useLocalStorageCounter();
  const [sessionCount, setSessionCount] = useSessionStorageCounter();
  
  // Use the appropriate counter based on storage type
  const count = storageType === 'localStorage' ? localCount : sessionCount;
  const setCount = storageType === 'localStorage' ? setLocalCount : setSessionCount;
  
  return (
    <div style={{ padding: 32, maxWidth: 600, margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007acc' }}>← Back to Examples</Link>
      
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <h2>Persistent Counter Example</h2>
        
        {/* Storage Type Switch */}
        <div style={{ 
          margin: '24px 0', 
          padding: 16, 
          backgroundColor: '#f9f9f9', 
          borderRadius: 8,
          border: '1px solid #e0e0e0'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <span style={{ color: '#666' }}>Storage Type:</span>
            <select 
              value={storageType}
              onChange={(e) => setStorageType(e.target.value as 'localStorage' | 'sessionStorage')}
              style={{
                padding: '8px 12px',
                fontSize: 14,
                border: '1px solid #ccc',
                borderRadius: 4,
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="localStorage">localStorage</option>
              <option value="sessionStorage">sessionStorage</option>
            </select>
          </label>
        </div>
        
        <div style={{ fontSize: 48, margin: '32px 0', fontWeight: 'bold' }}>
          {count}
        </div>
        <div>
          <button 
            onClick={() => setCount(count - 1)}
            style={{ 
              padding: '12px 24px', 
              fontSize: 18, 
              marginRight: 16,
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer'
            }}
          >
            -
          </button>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ 
              padding: '12px 24px', 
              fontSize: 18,
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer'
            }}
          >
            +
          </button>
        </div>
        <div style={{ 
          marginTop: 32, 
          padding: 16, 
          backgroundColor: storageType === 'localStorage' ? '#e8f5e8' : '#fff3e0', 
          borderRadius: 8,
          border: `1px solid ${storageType === 'localStorage' ? '#4caf50' : '#ff9800'}`
        }}>
          <p style={{ margin: 0, color: storageType === 'localStorage' ? '#2e7d32' : '#f57c00' }}>
            💾 This counter is saved to <code>{storageType}</code>.
          </p>
          <p style={{ margin: '8px 0 0 0', color: storageType === 'localStorage' ? '#2e7d32' : '#f57c00' }}>
            {storageType === 'localStorage' 
              ? 'Persists across browser sessions - try closing and reopening the browser!'
              : 'Only persists for this browser session - will reset when you close the tab.'
            }
          </p>
          <p style={{ margin: '8px 0 0 0', fontSize: 12, color: '#888' }}>
            Switch between storage types to see how each counter maintains its own value.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersistentCounter;