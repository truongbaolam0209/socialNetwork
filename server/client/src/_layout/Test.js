import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Test = () => {

    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/api/test');
                setDataUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            TEST PAGE<br/>
            {dataUser.map(dt => (
                <Link to={'/' + dt._id} key={dt._id}>
                    <h3>{dt.name}</h3>
                    <h5>{dt.email}</h5>
                    <br />
                </Link>
            ))}
        </div>
    );
};
export default Test;