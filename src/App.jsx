import './App.scss'
import Login from './Login'
import HomePage from './HomePage'
import HOCComponents from './HOCComponents'
import StyledComponents from './StyledComponents'
import CustomHookExample from './HooksPractice'
import PortalPractice from './PortalPractice'
import { Routes, Route } from 'react-router-dom'
import { Button } from './stories/Button'
import RefsExample from './RefsExample'
import Lists from './Lists'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/homePage" element={<HomePage />} />
        <Route exact path="/hocPractice" element={<HOCComponents />} />
        <Route exact path="/styledComponents" element={<StyledComponents />} />
        <Route exact path="/reactHooks" element={<CustomHookExample />} />
        <Route exact path="/reactPortals" element={<PortalPractice />} />
        <Route exact path="/storyBookPractice" element={<Button />} />
        <Route exact path="/refsExample" element={<RefsExample />} />
        <Route exact path="/listsExample" element={<Lists />} />
      </Routes>
    </>
  )
}

export default App
