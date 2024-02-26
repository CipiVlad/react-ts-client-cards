import { useState } from 'react'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { User } from './models/user.model'
import UsersList from './components/UsersList'
import CreateUser from './components/CreateUser'


function App() {
  const [users, setUsers] = useState<User[]>([{
    id: (Math.floor(Math.random() * 99)).toString(),
    firstName: 'John',
    lastName: 'Doe'
  }])
  return (
    <>
      <Container>
        <Row>
          <Col>
            <UsersList users={users} setUsers={setUsers} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateUser users={users} setUsers={setUsers} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
