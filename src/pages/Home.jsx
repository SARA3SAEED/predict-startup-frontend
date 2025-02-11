import React, { useState, useEffect } from 'react';

export default function Home() {
    const [rdSpend, setRdSpend] = useState('');
    const [admin, setAdmin] = useState('');
    const [state, setState] = useState('New York');
    const [prediction, setPrediction] = useState(null);
    const [apiData, setApiData] = useState(null); 

    useEffect(() => {
        fetch("http://127.0.0.1:8081/api/data")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setApiData(data); 
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8081', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rdSpend, admin, state })
        });
        const data = await response.json();
        setPrediction(data.prediction);
    };

    return (
        <div className="w-full bg-grey-500">
            <div className="container mx-auto py-8">
                <div className="w-96 mx-auto bg-white rounded shadow">
                    <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
                        Enter Details
                    </div>
                    <form onSubmit={handleSubmit} className="py-4 px-8">
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">R&D Spend:</label>
                            <input
                                className="border rounded w-full py-2 px-3"
                                type="number"
                                value={rdSpend}
                                onChange={(e) => setRdSpend(e.target.value)}
                                required
                                placeholder="Enter R&D Spend"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Administration:</label>
                            <input
                                className="border rounded w-full py-2 px-3"
                                type="number"
                                value={admin}
                                onChange={(e) => setAdmin(e.target.value)}
                                required
                                placeholder="Enter Administration Cost"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold">State:</label>
                            <select
                                className="border rounded w-full py-2 px-3"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            >
                                <option value="New York">New York</option>
                                <option value="California">California</option>
                                <option value="Florida">Florida</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <button className="mb-2 mx-16 rounded-full py-1 px-20 bg-gradient-to-r from-green-400 to-blue-500" type="submit">
                                Predict
                            </button>
                        </div>
                    </form>
                    {prediction !== null && (
                        <h2 className="text-center text-lg font-semibold">Predicted Profit: ${prediction}</h2>
                    )}
                    {apiData && (
                        <div className="text-center mt-4">
                            <h3 className="text-lg font-semibold">Fetched API Data:</h3>
                            <pre className="text-sm bg-gray-200 p-2 rounded">{JSON.stringify(apiData, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
