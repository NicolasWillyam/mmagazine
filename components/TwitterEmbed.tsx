import React, { useEffect } from 'react'

const TwitterEmbed: React.FC<{ href: string }> = ({ href }) => {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full flex justify-center">
      <blockquote className="twitter-tweet">
        <a href={href} />
      </blockquote>
    </div>
  )
}

export default TwitterEmbed
