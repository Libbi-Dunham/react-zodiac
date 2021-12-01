import React from 'react'
import './Main.css'
import { zodiac } from '../../data'
import Zodiac from '../Signs/Signs'
import background from '../../background.png'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zodiac) => (
        <Zodiac key={zodiac.name} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  )
}
