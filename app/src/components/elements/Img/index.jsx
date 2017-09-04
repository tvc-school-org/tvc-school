// Img
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

const Img = (props) => {
  console.log('source', props.src)
  console.log('inline', props.inline)
  console.log('small', props.small)
  let cite = props.cite
    ? <cite>{`source: ${props.cite}`}</cite>
      : false
  console.log('maxWidth', props.maxWidth)
  let mTop = 0
  let mRight = 0
  let mBottom = 0
  let mLeft = 0
  if (props.margin) {
    const margin = props.margin
    const len = margin.length

    if (len > 0) {
      if (len === 2) {
        mTop = margin[0]
        mRight = margin[1]
        mBottom = margin[0]
        mLeft = margin[1]
      } else if (len === 4) {
        mTop = margin[0]
        mRight = margin[1]
        mBottom = margin[2]
        mLeft = margin[3]
      }
    }
  }
  let passedStyles = {}
  passedStyles.maxWidth = props.maxWidth
  if (props.margin) {
    passedStyles.marginTop = mTop
    passedStyles.marginRight = mRight
    passedStyles.marginBottom = mBottom
    passedStyles.marginLeft = mLeft
  }

  // const imgMaxWidth = 10
  const localStyles = classNames(
    {
      [styles.imgSizeSmall]: props.small,
      [styles.imgSizeMedium]: props.medium,
      [styles.imgSizeLarge]: props.large,
    }
  )

  const image = <img
    className={styles.responsive}
    src={props.src}
    alt={props.alt}
                />
  if (cite) {
    // imgae with div and cite
    return (
      <div>
        {image}
        {cite}
      </div>
    )
  } else if(props.inline) {
    // image with no div
    return image
  } else {
    // image with div
    return (
      <div className={localStyles} style={passedStyles}>
        {image}
        {cite}
      </div>
    )
  }

}
export default Img;
