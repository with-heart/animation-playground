import React, {useState} from 'react'
import {css} from '@emotion/core'
import {animated, useTrail} from 'react-spring'

const letters = 'phoenix'.split('')

export function Phoenix() {
  const [isHidden, setIsHidden] = useState(true)
  const trail = useTrail(letters.length, {
    opacity: isHidden ? 0 : 1,
  })
  const toggle = () => setIsHidden(isHidden => !isHidden)

  return (
    <div>
      <button
        css={css`
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
        `}
        onClick={toggle}
      >
        {isHidden ? 'Show' : 'Hide'}
      </button>

      <div className="text-6xl font-mono font-bold tracking-widest uppercase">
        {trail.map((props, i) => (
          <animated.span style={props}>{letters[i]}</animated.span>
        ))}
      </div>
    </div>
  )
}
