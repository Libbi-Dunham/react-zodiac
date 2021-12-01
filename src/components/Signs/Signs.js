import React from 'react'

export default function signs({ name, dates }) {
  return (
    <>
      <div className="zodiac">
        <img alt={name} src={`${process.env.PUBLIC_URL}/${name}.png`} />
        <p className="name">{name}</p>
        <p>{dates}</p>
      </div>
    </>
  )
}
