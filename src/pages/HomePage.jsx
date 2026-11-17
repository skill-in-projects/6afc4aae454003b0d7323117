import { Link } from 'react-router-dom'
import { products } from '../data/products.js'

// The landing page: a welcome banner and a few featured rices.
export default function HomePage() {
  const featured = products.slice(0, 3)

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', color: '#2b2b2b', background: '#fbf7ef', minHeight: '100vh' }}>
      <section style={{ padding: '72px 24px', textAlign: 'center', background: '#2f6b3a', color: '#ffffff' }}>
        <h1 style={{ fontSize: 42, margin: '0 0 12px' }}>Golden Grain Rice Shop</h1>
        <p style={{ fontSize: 18, margin: '0 auto 28px', maxWidth: 560, opacity: 0.9 }}>
          Fresh rice from around the world, packed for home cooks, restaurants and gift lovers.
        </p>
        <Link
          to="/shop"
          style={{ background: '#f5c542', color: '#2b2b2b', padding: '12px 26px', borderRadius: 6, textDecoration: 'none', fontWeight: 600 }}
        >
          Browse the shop
        </Link>
      </section>

      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: 28, marginTop: 0 }}>Featured rice</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {featured.map((item) => (
            <article key={item.id} style={{ background: '#ffffff', borderRadius: 10, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h3 style={{ margin: '0 0 6px' }}>{item.name}</h3>
              <p style={{ margin: '0 0 12px', color: '#6b6b6b' }}>{item.note}</p>
              <strong style={{ color: '#2f6b3a' }}>${item.price.toFixed(2)}</strong> <span style={{ color: '#6b6b6b' }}>· {item.size}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
