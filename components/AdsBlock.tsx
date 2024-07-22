import React, { useEffect } from 'react'

const AdsBlock: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!window.adsbygoogle) {
        window.adsbygoogle = []
      }
      window.adsbygoogle.push({})
    }
  }, [])

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6460957180122693"
        data-ad-slot="4632040534"
        data-ad-format="auto"
      />
    </div>
  )
}

export default AdsBlock
