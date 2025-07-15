import { Link } from 'react-router-dom';
import { createZignal } from '@zignal/core';
import { buildQueryString } from '@zignal/paramagic';

const useUrlCounter = buildQueryString(createZignal({ a: 0, b: 0 }), { 
  key: { b: 'customKey' }, 
  withStartValue: false 
});

function UrlSyncCounter() {
  const [state, setState] = useUrlCounter();
  
  const incrementA = () => setState({ ...state, a: state.a + 1 });
  const decrementA = () => setState({ ...state, a: state.a - 1 });
  const incrementB = () => setState({ ...state, b: state.b + 1 });
  const decrementB = () => setState({ ...state, b: state.b - 1 });
  
  return (
    <div style={{ padding: 32, maxWidth: 600, margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007acc' }}>← Back to Examples</Link>
      
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <h2>URL Synced Counter (Multi-key)</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, margin: '32px 0' }}>
          <div>
            <h3>Counter A</h3>
            <div style={{ fontSize: 36, margin: '16px 0', fontWeight: 'bold' }}>
              {state.a}
            </div>
            <div>
              <button 
                onClick={decrementA}
                style={{ 
                  padding: '8px 16px', 
                  fontSize: 16, 
                  marginRight: 8,
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
                onClick={incrementA}
                style={{ 
                  padding: '8px 16px', 
                  fontSize: 16,
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
          </div>
          
          <div>
            <h3>Counter B</h3>
            <div style={{ fontSize: 36, margin: '16px 0', fontWeight: 'bold' }}>
              {state.b}
            </div>
            <div>
              <button 
                onClick={decrementB}
                style={{ 
                  padding: '8px 16px', 
                  fontSize: 16, 
                  marginRight: 8,
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
                onClick={incrementB}
                style={{ 
                  padding: '8px 16px', 
                  fontSize: 16,
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
          </div>
        </div>
        
        <div style={{ 
          marginTop: 32, 
          padding: 16, 
          backgroundColor: '#fff3e0', 
          borderRadius: 8,
          border: '1px solid #ff9800'
        }}>
          <p style={{ margin: 0, color: '#f57c00' }}>
            🔗 <strong>withStartValue: false</strong>
          </p>
          <p style={{ margin: '8px 0 0 0', color: '#f57c00' }}>
            Only changed values appear in the URL. Check the address bar as you increment!
          </p>
        </div>
      </div>
    </div>
  );
}

export default UrlSyncCounter;