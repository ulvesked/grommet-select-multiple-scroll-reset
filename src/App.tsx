import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from 'grommet/components'
import { InsideFormField } from './LongList'
import { Grommet } from 'grommet/components/Grommet'

function App() {
  const [count, setCount] = useState(0)
const [formValues, setFormValues] = useState({});
  return (
    <Grommet>
        <Form onChange={e => setFormValues(e)} value={formValues}>
          <InsideFormField />
        </Form>
    </Grommet>
  )
}

export default App
