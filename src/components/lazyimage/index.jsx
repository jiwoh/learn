import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
const LazyImage = ({ url, alt }) => (
  <div>
    <LazyLoadImage
      alt={alt}
      src={url}
      effect="blur"
      height="inherit"
      width="inherit"
      className="h-full w-full rounded-xl"
    />
  </div>
)

export default LazyImage
