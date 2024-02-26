import * as React from 'react'
import { User } from '../models/user.model'
import UserCard from './UserCard'


interface UsersListProps {
    users: User[]
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}
const UsersList: React.FunctionComponent<UsersListProps> = ({ users, setUsers }) => {

    const handleDeleteUser = (id: string) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div>
            {users.map(user => {
                return (
                    <UserCard
                        key={user.id}
                        user={user}
                        handleDeleteUser={handleDeleteUser}
                    />
                )
            })}
        </div>
    )
}
export default UsersList