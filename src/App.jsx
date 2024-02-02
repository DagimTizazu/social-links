import React from 'react'
import avatar from './assets/avatar-jessica.jpeg'
import Card from './components/card/Card'

function App() {
  return (
    <div>
      <Card
        avatar={avatar}
        name="Jessica Randall"
        country="London, United Kingdom"
        profession='"Front-end developer and avid reader."'
        />
    </div>
  )
}

export default App
