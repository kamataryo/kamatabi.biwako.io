import * as React from 'react'

export interface OwnProps {
  path       : string,
  thumbPath? : string,
  altText?   : string,
}

const PhotoFrame = (props: OwnProps) => {

  const { path, altText } = props

  const alt = altText ? altText : ''

  return (
    <div className={ 'image-wrap' }>
      <img className={ 'image' } src={ path } alt={ alt } />
    </div>
  )

}

export default PhotoFrame
