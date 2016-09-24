import React from 'react'
import Input from './Input'
import Entries from './Entries'
import Controls from './Controls'
import InfoFooter from './InfoFooter'

export default function App() {
  return (
    <div className="todomvc-wrapper">
      <section className="todoapp">
        <Input/>
        <Entries/>
        <Controls/>
      </section>
      <InfoFooter/>
    </div>
  )
}
