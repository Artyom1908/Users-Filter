import React, { useState } from 'react'
import userData from './users.json'

function UsersFilter() {
    const [searchText, setSearchText] = useState("");
    const userNames = userData.map((user) => user.name);

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const filteredUserNames = userNames.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <div>
            <input type="text" placeholder="Search users" onChange={handleSearch} />
            <ul>
                {filteredUserNames.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UsersFilter