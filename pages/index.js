import { useState } from 'react'
import Component1 from '../components/Component1'
import { usernameContext } from '../components/Component4'

export default function Home() {

  const [userName, setUserName] = useState()
  return (
    // ### 2) wrap context.Provider around the main component to provide value
    // ### 3) useContext in desired Component and use Inverse Function trick to pass the value to the main/upper component
    <usernameContext.Provider value={(cb) => setUserName(cb)}>
      <div className='flex flex-col bg-green-300 justify-center items-center'>
        <h1>This is main Component</h1>
        <p>username is:<span className='bg-white' >{userName}</span></p>
        <Component1 />
      </div >
    </usernameContext.Provider>
  )
}
