import React, { use } from 'react';

const Users = ({ usersPromise }) => {
    const users = use(usersPromise);


    const handleAddUser = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value;
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "contant-type": "application/json"
            },
            body:JSON.stringify(user)
    })
    }

    return (
        <div className='text-center'>

            <div>
                <form onSubmit={handleAddUser}>
                    <input name='name' type="text" className='border' /> <br />
                    <input name='email' type="text" className='border' /> <br />
                    <input type="submit" value="Add user" className='btn btn-primary my-5' />
                </form>
            </div>

            <div>
                <h2> Users :{users.length}</h2>
                {
                    users.map(user => <li key={user.id} >Name : {user.name} <br /> Email : {user.email}</li>)
                }
            </div>
        </div>
    );
};

export default Users;