import React from 'react'

type Props = {
    title: string
    titleAccent?: string
    text?: string
}


const Header = ({title, titleAccent}: Props) => {
  return (
    <header className='hero'>
      <h1 className='hero__title'>{title}

        {
            titleAccent && (
            <span className='hero__title--accent'> {titleAccent}</span>
            )
        }
      </h1>
    </header>
  )
}

export default Header
