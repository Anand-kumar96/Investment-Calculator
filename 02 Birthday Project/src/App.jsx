import { useState } from 'react'
import data from './data'
import List from './List'
const App = () => {
  const [userData, setUserData] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{userData.length} Birthdays today</h3>
        <List people ={userData}/>
      <button onClick={()=>{setUserData([])}}>clear all</button>
      </section>
    </main>
  )
}

export default App
