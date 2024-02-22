import React from "react";

const User = ({userData}) =>{
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'je@gmail.com', name: '제우스'},
        {email: 'o@gmail.com', name: '오너'},
        {email: 'fa@gmail.com', name: '페이커'},
        {email: 'gu@gmail.com', name: '구마유시'},
        {email: 'ke@gmail.com', name: '케리아'}
    ];

    return(
        <table>
            <thead>
            <tr>
                <th> 이름 </th>
                <th> 이메일 </th>

            </tr>
            </thead>
            <tbody>
            {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
)
}

export default UserList;







