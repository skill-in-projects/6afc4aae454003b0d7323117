import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import WalkingHamster from './components/WalkingHamster.jsx'

// The app shell: a top bar with links, and the page for each address.
export default function App() {
  const linkStyle = ({ isActive }) => ({
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: isActive ? 700 : 400,
    borderBottom: isActive ? '2px solid #f5c542' : '2px solid transparent',
    paddingBottom: 2,
  })

  return (
    <HashRouter>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 24px',
          background: '#2f6b3a',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <strong>Golden Grain</strong>
        <nav style={{ display: 'flex', gap: 20 }}>
          <NavLink to="/" end style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/shop" style={linkStyle}>
            Shop
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>

      <WalkingHamster />
    </HashRouter>
  )
}
