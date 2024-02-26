import * as React from 'react';
import { User } from '../models/user.model';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface UserCardProps {
    user: User
    handleDeleteUser: (id: string) => void
}

const UserCard: React.FunctionComponent<UserCardProps> = ({ user, handleDeleteUser }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Users Id: {user.id}</Card.Title>
                <Card.Text>
                    First Name: {user.firstName}
                    <br />
                    Last Name: {user.lastName}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default UserCard
