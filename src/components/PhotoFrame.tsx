import * as React from 'react'

export interface OwnProps {
  path       : string,
  thumbPath? : string,
  altText?   : string,
}

const wrapperStyle = {
  border       : '2px solid #979797',
  borderRadius : '5px',
  padding      : '20px',
}

const PhotoFrame = (props: OwnProps) => {

  const { path, altText } = props

  const alt = altText ? altText : ''

  return (
    <div style={ wrapperStyle } className={ 'image-wrap' }>
      <img className={ 'image' } src={ path } alt={ alt } />
    </div>
  )

}

export default PhotoFrame
