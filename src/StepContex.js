import React, { useEffect, useState } from 'react';
import Register from '../src/pages/Register.jsx';
// import Dashoboard from './components/Dashboard/Dashoboard.jsx';

export const multiStepContex = React.createContext();

const StepContex = () => {
    const [setItem] = useState([]);
    const [currentStep, setCureentStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])

    useEffect(() => {
        localStorage.setItem(userData, JSON.stringify(userData))

    }, [userData])

    const handleSubmit = (e) => {
        setFinalData(finalData => [...finalData, userData]);
        setUserData('');
        setCureentStep(1)
        const data = localStorage.getItem(userData)
        setItem(data)
    }

    // const handleDelete = () => {

    // }




    return (
        <div>
            <multiStepContex.Provider value={{ currentStep, setCureentStep, userData, setUserData, finalData, setFinalData, handleSubmit }} >
                <Register />
            </multiStepContex.Provider>
        </div>
    );
}

export default StepContex;
