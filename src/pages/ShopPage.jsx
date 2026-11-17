import { useState } from 'react'
import { products } from '../data/products.js'

// The shop: every rice with an "Add to cart" button. The cart lives only in this page's state.
export default function ShopPage() {
  const [cart, setCart] = useState({})

  const addToCart = (id) => {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }))
  }

  const items = products.filter((item) => cart[item.id])
  const total = items.reduce((sum, item) => sum + item.price * cart[item.id], 0)
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', color: '#2b2b2b', background: '#fbf7ef', minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, marginTop: 0 }}>Shop</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {products.map((item) => (
            <article key={item.id} style={{ background: '#ffffff', borderRadius: 10, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontSize: 20, margin: '0 0 6px' }}>{item.name}</h2>
              <p style={{ margin: '0 0 12px', color: '#6b6b6b' }}>
                {item.note} · {item.size}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <strong style={{ color: '#2f6b3a' }}>${item.price.toFixed(2)}</strong>
                <button
                  type="button"
                  onClick={() => addToCart(item.id)}
                  style={{ background: '#2f6b3a', color: '#ffffff', border: 'none', borderRadius: 6, padding: '8px 14px', cursor: 'pointer' }}
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>

        <section style={{ marginTop: 32, background: '#ffffff', borderRadius: 10, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: 20, marginTop: 0 }}>Your cart ({count})</h2>
          {items.length === 0 ? (
            <p style={{ color: '#6b6b6b' }}>Your cart is empty.</p>
          ) : (
            <>
              <ul style={{ paddingLeft: 20 }}>
                {items.map((item) => (
                  <li key={item.id}>
                    {item.name} × {cart[item.id]}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total: ${total.toFixed(2)}</strong>
              </p>
            </>
          )}
          <p style={{ margin: '12px 0 0', color: '#8a5a00', fontSize: 14 }}>
            Not saved yet: upgrade to keep your changes
          </p>
        </section>
      </div>
    </main>
  )
}
