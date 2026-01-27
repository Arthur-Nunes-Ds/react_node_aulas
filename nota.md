para criar um projetor react
    biblioteca que criar um projetor react
    npm create vite@latest    
npm install
npm run dev

=================================================================

configuração do projeto é o arquivo 
01/package-lock.json e/ou package.json

=================================================================

estrutura
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
=================================================================

o que tem que ter em cada arquivo importante

package.json{
  "name": "01",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}

index.html(body)=> <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>


vite.config.js => import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

app.jsx => function App() {
  return (
    <div><\div>
  )}

main.jsx => import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


=================================================================


