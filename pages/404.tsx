// pages/404.tsx

import Link from 'next/link'

const Custom404 = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>
          404 - Page Not Found
        </h1>
        <p style={{ fontSize: '1.5rem' }}>
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <a
            style={{
              fontSize: '1.2rem',
              textDecoration: 'underline',
              color: 'blue',
            }}
          >
            Go back to home page
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Custom404
