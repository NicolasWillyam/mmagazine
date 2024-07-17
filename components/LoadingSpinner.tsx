// components/LoadingSpinner.tsx

import React from 'react'
import styles from './LoadingAnimation.module.css'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="uppercase text-4xl font-light tracking-wide  animate-pulse sfu-font">
      Loading
    </div>
  )
}

export default LoadingSpinner
