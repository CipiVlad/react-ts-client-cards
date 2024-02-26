import React, { SetStateAction, useRef } from 'react'
import { User } from "../models/user.model"
import { Button, Form } from 'react-bootstrap'



interface CreateUserProps {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}
const CreateUser: React.FunctionComponent<CreateUserProps> = ({ users, setUsers }) => {
    const firstNameRef = useRef<HTMLInputElement | null>(null)
    const lastNameRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setUsers([...users, {
            id: (Math.floor(Math.random() * 99)).toString(),
            firstName: (firstNameRef.current as HTMLInputElement).value,
            lastName: (lastNameRef.current as HTMLInputElement).value,
        }]);
        (firstNameRef.current as HTMLInputElement).value = "";
        (lastNameRef.current as HTMLInputElement).value = "";
    }

    return (
        <>
            <h2>Create New User</h2>
            <Form onSubmit={(e) => handleSubmit(e)} style={{ border: '1px solid crimson', borderRadius: '16px', padding: "5%" }}>
                <Form.Group>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type='text' ref={firstNameRef} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type='text' ref={lastNameRef} />
                </Form.Group>
                <Button type='submit' variant='success'>create</Button>
            </Form>
        </>
    )
}
export default CreateUser