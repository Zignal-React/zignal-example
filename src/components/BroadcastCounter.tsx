import { Link } from 'react-router-dom';
import { createZignal } from '@zignal/core';
import { broadcast } from '@zignal/sync';

const useBroadcastCounter = broadcast(createZignal(0), { key: 'counter' });

function BroadcastCounter() {
  const [count, setCount] = useBroadcastCounter();
  
  return (
    <div style={{ padding: 32, maxWidth: 600, margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007acc' }}>← Back to Examples</Link>
      
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <h2>Cross-tab Sync Counter</h2>
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
          backgroundColor: '#e3f2fd', 
          borderRadius: 8,
          border: '1px solid #2196f3'
        }}>
          <p style={{ margin: 0, color: '#1976d2' }}>
            🔄 This counter syncs across browser tabs and windows!
          </p>
          <p style={{ margin: '8px 0 0 0', color: '#1976d2' }}>
            Open this page in another tab and watch the magic happen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BroadcastCounter;