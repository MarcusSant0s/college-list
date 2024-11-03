import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser } from '../api/api';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email, age: Number(age) };
        const user = await createUser(newUser);
        setUsers([...users, user]);
    };

    return (
        <div>
            <h2>Usuários</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name} ({user.email})</li>
                ))}
            </ul>

            <h3>Adicionar Novo Usuário</h3>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Idade" type="number" />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default UserList;
