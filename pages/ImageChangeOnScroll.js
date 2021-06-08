import React, { useState, useEffect } from 'react'
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'

const ImageChangeOnScroll = () => {
  const [currentTitle, setCurrentTitle] = useState('Default title')
  const [mouseEventCnt, setMouseEventCnt] = useState(0)

  useEffect(() => {
    window.document.title = `${currentTitle}`
    console.log(`useEffect: setting title to ${currentTitle}`)
  }, [currentTitle])

  return (
        <div
        style={{ display: 'flex', flexDirection: 'column' }}>
            <p>Mouse events: {mouseEventCnt}</p>
            {['rash1', 'rash2', 'rash3', 'rash4', 'rash5', 'DragulescuSonia'].map((imageName) => {
              return (
                    <div
                        key={imageName}
                        onMouseOver={() => {
                          setCurrentTitle(imageName)
                          setMouseEventCnt(mouseEventCnt + 1)
                          console.log(`onMouseOver: ${imageName}`)
                        }}>
                        <ImageToggleOnScroll
                        primaryImg={`${imageName}.jpg`}
                        secondaryImg={`bw/${imageName}_bw.jpg`}/>
                    </div>
              )
            })}
        </div>
  )
}

export default ImageChangeOnScroll
