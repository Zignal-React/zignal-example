import { Link } from 'react-router-dom';
import { createZignal } from '@zignal/core';

const counter = createZignal(0);

function SimpleCounter() {
  const [count, setCount] = counter();
  
  return (
    <div style={{ padding: 32, maxWidth: 600, margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007acc' }}>← Back to Examples</Link>
      
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <h2>Simple Counter Example</h2>
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
        <p style={{ marginTop: 32, color: '#666' }}>
          This is a basic counter using Zignal's core <code>createZignal</code> function.
          The state is managed reactively and updates the UI automatically.
        </p>
      </div>
    </div>
  );
}

export default SimpleCounter;