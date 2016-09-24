import React from 'react'
import Input from './Input'
import Entries from './Entries'
import Controls from './Controls'

export default function App() {
  return (
    <section className="todoapp">
      <Input/>
      <Entries/>
      <Controls/>
    </section>
  )
}
