// A small hamster that walks from one side of the screen to the other and back, on every page.
// The walk and the turn-around use the same 20 second cycle, so it turns at each edge.
export default function WalkingHamster() {
  const css = `
    @keyframes hamster-walk {
      from { transform: translateX(0); }
      to { transform: translateX(calc(100vw - 64px)); }
    }
    @keyframes hamster-face {
      0%, 49.9% { transform: scaleX(1); }
      50%, 100% { transform: scaleX(-1); }
    }
    @media (prefers-reduced-motion: reduce) {
      .hamster-walk, .hamster-face { animation: none !important; }
    }
  `

  return (
    <div
      className="hamster-walk"
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: 8,
        left: 0,
        zIndex: 10,
        pointerEvents: 'none',
        animation: 'hamster-walk 10s linear infinite alternate',
      }}
    >
      <style>{css}</style>
      <span
        className="hamster-face"
        style={{
          display: 'inline-block',
          fontSize: 48,
          lineHeight: 1,
          animation: 'hamster-face 20s steps(1) infinite',
        }}
      >
        🐹
      </span>
    </div>
  )
}
