import React from 'react'
import InstagramEmbed from './InstagramEmbed'
import FacebookEmbed from './FaceBookEmbed'
import TikTokEmbed from './TikTokEmbed'
import TwitterEmbed from './TwitterEmbed'

interface Post {
  post_link: string
  type: string
  _key: string
  _type: string
}

interface Props {
  post: Post[]
  _key: string
  _type: string
}

const EmbedComponent = (props: Props) => {
  console.log(props.post)
  const { post } = props

  return (
    <div className="my-4 md:my-8 xl:my-10 grid grid-cols-1 gap-10">
      {post.map((_, id) => {
        if (_.type == 'facebook') {
          return (
            <div key={id}>
              <FacebookEmbed href={_.post_link} />
            </div>
          )
        }
        if (_.type == 'instagram') {
          return (
            <div key={id}>
              <InstagramEmbed href={_.post_link} />
            </div>
          )
        }
        if (_.type == 'tiktok') {
          return (
            <div key={id}>
              <TikTokEmbed href={_.post_link} />
            </div>
          )
        }
        if (_.type == 'twitter') {
          return (
            <div key={id}>
              <TwitterEmbed href={_.post_link} />
            </div>
          )
        }
      })}
    </div>
  )
}

export default EmbedComponent
