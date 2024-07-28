// components/LoadingSpinner.tsx
import Image from 'next/image'

import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="uppercase text-4xl font-light tracking-wide  animate-pulse sfu-font">
      Loading
    </div>
  )
}

export default LoadingSpinner
