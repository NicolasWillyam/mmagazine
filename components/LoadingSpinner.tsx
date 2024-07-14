// components/LoadingSpinner.tsx
import Image from 'next/image'

import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="uppercase text-2xl tracking-wide animate-pulse justify-center">
      <Image
            src={`/logo-black.svg`}
            alt="logo"
            width={160}
            height={160}
            className=""
          />
          <p className="text-center">
          Loading
          </p>
    </div>
  )
}

export default LoadingSpinner
