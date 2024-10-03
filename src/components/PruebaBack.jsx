import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/data');
            setData(response.data);
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name: input };
        await axios.post('http://localhost:5000/api/data', newItem);
        setData([...data, newItem]);
        setInput('');
    };

    return (
        <div>
            <h1>Datos</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Agregar nuevo dato" 
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}
