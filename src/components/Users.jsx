import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users =use(usersPromise);
    console.log(users)
    return (
        <div className='text-center'>
           <h2> Users :{users.length}</h2>
           {
            users.map(user =><li key={user.id} >Name : {user.name} <br /> Email : {user.email}</li>)
           }
        </div>
    );
};

export default Users;