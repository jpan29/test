
import { useState } from 'react'
import './App.css'
import Alert from './Alert'

function App () {
  const [isSuccess, setIsSuccess] = useState(false)

  const clickHandler = () => {
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }
  return (
    //test
    //test
    <div className="App">
      <button onClick={clickHandler}>Alert</button>

      <div role='alert'>

        {isSuccess && (
          <div id='success-alert'>
            <div>
              <Alert> success</Alert>
            </div>
          </div>
        )}
        {/* {!isSuccess && (
          <p>NOT success</p>
        )} */}
      </div>
    </div>
  )
}

export default App
