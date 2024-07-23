import React, { useEffect } from 'react'

const FacebookEmbed: React.FC<{ href: string }> = ({ href }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }, [])

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
      className="md:ml-12"
    >
      <div
        className="fb-post"
        data-href={href}
        style={{ maxWidth: '600px', width: '100%' }}
      ></div>
    </div>
  )
}

export default FacebookEmbed
