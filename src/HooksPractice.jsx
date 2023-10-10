import React from 'react'
import { useState, useEffect } from 'react'
import styles from './button.module.scss'
import { useNavigate } from 'react-router-dom'

// Custom hook to check whether the user is connected to internet or not
function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }

        function handleOffline() {
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    return isOnline;
}

const CustomHookExample = () => {
    const isOnline = useOnlineStatus()
    const navigate = useNavigate()

    function handleSaveClick() {
        alert('✅ Well done! ✅')
    }

    return (
        <>
            <button onClick={() => { navigate('/homePage') }}>
                Back to Home Page
            </button>
            <br />
            <p>Turn off the internet to see the functionality.</p>
            <button className={styles.example} disabled={!isOnline} onClick={handleSaveClick}>
                {isOnline ? 'Show alert' : 'Reconnecting...'}
            </button>
        </>

    )
}

export default CustomHookExample
