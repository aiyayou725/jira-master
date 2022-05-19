import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import styled from "@emotion/styled"
import { Row } from "assets/components/lib";
import SoftWareLogo from 'assets/software-logo.svg'
import { Dropdown, Menu, Button } from "antd";
import { Route, Routes, Navigate } from 'react-router'
import { ProjectScreen } from 'screens/project'
import { BrowserRouter as Router } from "react-router-dom";


export const AuthenticatedApp = () => {
  return (<Container>
    <PageHeader />
    <Main>
      <Router>
      <Routes>
        <Route path={'/projects'} element={<ProjectListScreen />} />
          <Route path={'/projects/:projectId/*'} element={<ProjectScreen />} />
          <Route path="*" element={<Navigate to="/projects" replace={true}/>} />
      </Routes>

      </Router>
      

    </Main>
  </Container>)
}

const PageHeader = () => {
  const { logout, user } = useAuth()
  return <Header between={true}>
  <HeaderLeft gap={true}>
      <img src={SoftWareLogo} alt={""} />
    <h3>项目</h3>
    <h3>用户</h3>
  </HeaderLeft>
  <HeaderRight>
    <Dropdown overlay={<Menu>
      <Menu.Item key={'logout'}>
        <Button type={'link'} onClick={logout}>登出</Button> 
      </Menu.Item>   
    </Menu>}>
      
      <Button type={'link'} onClick={e=>e.preventDefault()}>Hi, { user?.name}</Button>
    </Dropdown>
  </HeaderRight>
</Header>
  
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.1);
  z-index:1;
`

const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``

const Main = styled.main`
`

