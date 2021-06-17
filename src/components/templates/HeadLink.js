import * as React from "react"
import { Helmet } from "react-helmet"

const HeadLink = () => {
  return (
    <Helmet>
      <link rel="preload" as="image" href="/common/nav_text_news_hover.png" />
      <link rel="preload" as="image" href="/common/nav_text_comic_hover.png" />
      <link rel="preload" as="image" href="/common/nav_text_world_hover.png" />
      <link rel="preload" as="image" href="/common/nav_text_characters_hover.png" />
      <link rel="preload" as="image" href="/common/nav_text_staff_hover.png" />
      <link rel="preload" as="image" href="/common/nav_text_special_hover.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" /><meta name="robots" content="noindex" />
    </Helmet>
  )
}

export default HeadLink
