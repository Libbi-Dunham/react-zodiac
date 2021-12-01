import React from 'react'
import './Signs.css'

export default function signs({ name, dates }) {
  return (
    <>
      <div className="zodiac">
        <img alt={name} src={`${process.env.PUBLIC_URL}/${name}.png`} />
        <div className="name">{name}</div>
        <div>{dates}</div>
      </div>
    </>
  )
}
