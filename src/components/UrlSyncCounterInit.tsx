import { Link } from 'react-router-dom';
import { createZignal } from '@zignal/core';
import { buildQueryString } from '@zignal/paramagic';

const useUrlCounterInit = buildQueryString(createZignal({ c: 0, d: 0 }), { 
  withStartValue: true 
});

function UrlSyncCounterInit() {
  const [state, setState] = useUrlCounterInit();
  
  const incrementC = () => setState({ ...state, c: state.c + 1 });
  const decrementC = () => setState({ ...state, c: state.c - 1 });
  const incrementD = () => setState({ ...state, d: state.d + 1 });
  const decrementD = () => setState({ ...state, d: state.d - 1 });
  
  return (
    <div style={{ padding: 32, maxWidth: 600, margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007acc' }}>← Back to Examples</Link>
      
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <h2>URL Synced Counter (Init Values)</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, margin: '32px 0' }}>
          <div>
            <h3>Counter C</h3>
            <div style={{ fontSize: 36, margin: '16px 0', fontWeight: 'bold' }}>
              {state.c}
            </div>
            <div>
              <button 
                onClick={decrementC}
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
                onClick={incrementC}
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
            <h3>Counter D</h3>
            <div style={{ fontSize: 36, margin: '16px 0', fontWeight: 'bold' }}>
              {state.d}
            </div>
            <div>
              <button 
                onClick={decrementD}
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
                onClick={incrementD}
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
          backgroundColor: '#e8f5e8', 
          borderRadius: 8,
          border: '1px solid #4caf50'
        }}>
          <p style={{ margin: 0, color: '#2e7d32' }}>
            🔗 <strong>withStartValue: true</strong>
          </p>
          <p style={{ margin: '8px 0 0 0', color: '#2e7d32' }}>
            All keys appear in the URL from the start, even with initial values.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UrlSyncCounterInit;