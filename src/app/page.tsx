export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: '#0a0a0a',
      color: '#ededed',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Hello World 3 🚀</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>Deployed with OpenClaw</p>
      </div>
    </main>
  )
}
