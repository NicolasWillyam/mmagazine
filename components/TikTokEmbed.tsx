// components/TikTokEmbed.tsx
import React, { useEffect } from 'react'
import { getTikTokVideoId } from 'utils/function'

interface TikTokEmbedProps {
  href: string
}

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ href }) => {
  const videoID = getTikTokVideoId(href)
  useEffect(() => {
    // Load TikTok embed script dynamically
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <blockquote className="tiktok-embed" cite={href} data-video-id={videoID}>
      <section>
        <script
          type="text/javascript"
          src="https://www.embedista.com/j/tiktok.js"
          async
        ></script>
        <div
          style={{
            overflow: 'left',
            position: 'absolute',
            height: '0pt',
            width: '0pt',
          }}
        >
          <a href="https://www.embedista.com/tiktok-embed">
            Tiktok Embed Code Generator
          </a>
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            bottom: '4px',
            left: '0',
            right: '0',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#000',
            textAlign: 'left',
          }}
        ></div>
      </section>
    </blockquote>
  )
}

export default TikTokEmbed
