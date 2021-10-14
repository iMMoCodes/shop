import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import styled from 'styled-components'
import Home from './pages/Home/Home'

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`

function App() {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </>
  )
}

export default App
