# Zignal Counter Examples

Interactive examples showcasing Zignal's reactive state management capabilities.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```

### StackBlitz Deployment
1. **Option 1: Direct Upload**
   - Zip the entire `counter-app` folder
   - Go to [StackBlitz](https://stackblitz.com)
   - Click "Import project" and upload the zip

2. **Option 2: GitHub Integration**
   - Push this code to a GitHub repository
   - Go to `https://stackblitz.com/github/YOUR_USERNAME/YOUR_REPO/tree/main/counter-app`

3. **Option 3: One-Click Deploy**
   - Use the StackBlitz URL: `https://stackblitz.com/fork/github/YOUR_USERNAME/YOUR_REPO/tree/main/counter-app`

## 📱 Examples Included

### 🔢 Simple Counter
Basic counter implementation using Zignal's core functionality.

### 💾 Persistent Counter
- Counter that saves state to localStorage or sessionStorage
- Toggle between storage types to see the difference
- Demonstrates persistence across page reloads

### 🔄 Cross-tab Sync Counter
- Counter synchronized across browser tabs and windows
- Uses BroadcastChannel API for real-time sync
- Open multiple tabs to see it in action

### 🔗 URL Synced Counter
- Multi-key counter that syncs with URL query parameters
- Two variants: with and without initial values in URL
- Demonstrates URL state management

## 🛠 Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Zignal** - Reactive state management (from npm)

## 📦 Zignal Features Demonstrated

- `createZignal()` - Core reactive state
- `write()` - Persistent state with localStorage/sessionStorage
- `broadcast()` - Cross-tab synchronization
- `buildQueryString()` - URL state synchronization

## 🌐 Live Demo

Once deployed to StackBlitz, you can:
- Share the live URL with others
- Embed examples in documentation
- Fork and modify for your own projects
- Test cross-tab sync by opening multiple browser tabs

## 📝 Notes

- Uses published Zignal packages from npm for easy deployment
- All Zignal packages are automatically installed from the registry
- Ready for StackBlitz, CodeSandbox, or any online IDE