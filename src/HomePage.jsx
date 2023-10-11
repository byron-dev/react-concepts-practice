import React from 'react'
import styles from './button.module.scss'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function HomePage() {

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
            <h1>React Concepts Practice</h1>
            <div className='card'>
                <p>The first a was styled with a css module.</p>
                <p>To do that you create a scss file where you declare the style for example for a class:</p>
                <p><code>{".example { background-color: #c3e2ef; }"}</code></p>
                <p>then you import that module to the component:</p>
                <p><code>{"import styles from './a.module.scss'"}</code></p>
                <p>and then you used that class in you className attribute</p>
                <p><code>{"<a className={styles.example} "}</code></p>
                <a className={styles.example} href='/hocPractice'>
                    High Order Components
                </a>
                <a href='/styledComponentsPractice'>
                    Styled Components
                </a>
                <a href='/hooksPractice'>
                    React Hooks
                </a>
                <a href='/portalPractice'>
                    React Portals
                </a>
            </div>
        </>

    )
}

export default HomePage
