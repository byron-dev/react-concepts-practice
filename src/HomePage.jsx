import React from 'react'
import styles from './button.module.scss'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </a>
            </div>
            <h1>Byron's React Concepts Practice</h1>
            <div className='card'>
                <p>The first button was styled with a css module.</p>
                <button className={styles.example} onClick={() => { navigate('/hocPractice') }}>
                    High Order Components
                </button>
                <button onClick={() => { navigate('/styledComponentsPractice') }}>
                    Styled Components
                </button>
                <button onClick={() => { navigate('/hooksPractice') }}>
                    React Hooks
                </button>
                <button onClick={() => { navigate('/portalPractice') }}>
                    React Portals
                </button>
            </div>
        </>

    )
}

export default HomePage
