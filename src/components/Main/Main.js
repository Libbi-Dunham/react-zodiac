import React from 'react'
import './Main.css'
import '../Signs/Signs.js'
import { zodiacs } from '../..data'
import Zodiac from '../Signs/Signs.js'
import background from '../..background.jpg'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.name} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  )
}
