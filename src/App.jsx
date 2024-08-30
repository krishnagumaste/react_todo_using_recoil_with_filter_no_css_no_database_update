import { RecoilRoot } from 'recoil'
import './App.css'
import Input from './components/Input.jsx'
import Display from './components/Display.jsx'
import Filter from './components/Filter.jsx'

function App() {
  return (
    <RecoilRoot>
      <Input />
      <Filter />
      <Display />
    </RecoilRoot>
  )
}

export default App
