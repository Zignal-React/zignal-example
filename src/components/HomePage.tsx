import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ padding: 32, maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Zignal Counter Examples</h1>
      <p style={{ textAlign: 'center', marginBottom: 48, color: '#666' }}>
        Explore different counter implementations using Zignal's reactive state management.
      </p>
      
      <div style={{ display: 'grid', gap: 24 }}>
        <Link 
          to="/simple" 
          style={{ 
            textDecoration: 'none', 
            padding: 24, 
            border: '1px solid #ddd', 
            borderRadius: 8,
            display: 'block',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>1. Simple Counter</h3>
          <p style={{ margin: 0, color: '#666' }}>
            Basic counter implementation using Zignal's core functionality.
          </p>
        </Link>

        <Link 
          to="/persistent" 
          style={{ 
            textDecoration: 'none', 
            padding: 24, 
            border: '1px solid #ddd', 
            borderRadius: 8,
            display: 'block',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>2. Persistent Counter</h3>
          <p style={{ margin: 0, color: '#666' }}>
            Counter that saves its state to localStorage and persists across page reloads.
          </p>
        </Link>

        <Link 
          to="/broadcast" 
          style={{ 
            textDecoration: 'none', 
            padding: 24, 
            border: '1px solid #ddd', 
            borderRadius: 8,
            display: 'block',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>3. Cross-tab Sync Counter</h3>
          <p style={{ margin: 0, color: '#666' }}>
            Counter synchronized across browser tabs and windows using broadcast channels.
          </p>
        </Link>

        <Link 
          to="/url-sync" 
          style={{ 
            textDecoration: 'none', 
            padding: 24, 
            border: '1px solid #ddd', 
            borderRadius: 8,
            display: 'block',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>4. URL Synced Counter</h3>
          <p style={{ margin: 0, color: '#666' }}>
            Multi-key counter that syncs state with URL query parameters.
          </p>
        </Link>

        <Link 
          to="/url-sync-init" 
          style={{ 
            textDecoration: 'none', 
            padding: 24, 
            border: '1px solid #ddd', 
            borderRadius: 8,
            display: 'block',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>4.1 URL Synced Counter (Init)</h3>
          <p style={{ margin: 0, color: '#666' }}>
            URL synced counter that shows all keys in URL from the start.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;