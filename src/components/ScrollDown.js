import React from 'react'
import styled from 'styled-components'

const ScrollDown = () => {
  return (
    <ScrollBtn>
        {/* wrap */}
        <a href="#about">
            <span>Scroll Down</span>
            <span className='mouse'>
                <span className='wheel'></span>
            </span>
        </a>
    </ScrollBtn>
  )
}
const ScrollBtn = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 0%;
  right: 0%;
  width: 100%;
  font-size: var(--small-size);
  a {
    &:hover {
      span {
        color: var(--green-color);
      }
      .mouse {
        border: 2px solid var(--green-color);
      }
      .wheel {
        background: var(--green-color);
      }
    }
  }
  .mouse {
    position: relative;
    margin: auto;
    margin-top: 0.75rem;
    border-radius: 1rem;
    display: block;
    width: 1.25rem;
    height: 1.6rem;
    border: 2px solid var(--text-color);

    .wheel {
      position: absolute;
      top: 0.25rem;
      left: 50%;
      transform: translateX(-50%);
      background: var(--title-color);
      border-radius: 100%;
      width: 0.25rem;
      height: 0.25rem;
      animation: ani-mouse 2s linear infinite;
    }

    @keyframes ani-mouse {
      0% {
        top: 29%;
      }
      25% {
        top: 50%;
      }

      50% {
        top: 50%;
      }

      100% {
        top: 29%;
      }
    }
  }
`; 

export default ScrollDown