import React from 'react'
import styles from './button.module.scss'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function HomePage() {

    return (
        <>
            <div className='logos-wrapper'>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </a>
            </div>
            <h1>React Concepts Practice</h1>
            <div className='card'>
                <p>Here you can see working examples of important topics related to the <span>React Learning Path</span>.</p>
                <p>First, open <code>src/App.scss</code> file to see how <span>Sass styles</span> work with variables and nested styles.</p>
                <p>For the routing, we are using the <code>react-router-dom</code> dependency.</p>
                <p>To see how routes are defined, go to <code>src/App.jsx</code>.</p>
                <p>For other topics, click the buttons at the bottom of this card.</p>
                <hr />
                <p><span>NOTE:</span></p>
                <p>The first button was styled with a css module.</p>
                <p>To do that we created the <code>src/button.module.scss</code> file where we declared the style for a class:</p>
                <p><code>{".example { background-color: #c3e2ef; }"}</code></p>
                <p>then, we imported the styles from that module to the <code>HomePage.jsx</code> component:</p>
                <p><code>{"import styles from './button.module.scss'"}</code></p>
                <p>and finally, we used that class in the className attribute:</p>
                <p><code>{"<a className={styles.example} "}</code></p>
                <p><span>LIST OF TOPICS:</span></p>
                <div className="topics-list">
                    <a className={`${styles.example} btn`} href='/hocPractice'>
                        High Order Components
                    </a>
                    <a className='btn' href='/styledComponents'>
                        Styled Components
                    </a>
                    <a className='btn' href='/reactHooks'>
                        React Hooks
                    </a>
                    <a className='btn' href='/reactPortals'>
                        React Portals
                    </a>
                    <a className='btn' href='/storyBookPractice'>
                        StoryBook
                    </a>
                </div>
                <p><span>UNIT TESTING:</span></p>
                <p>Go to <code>src/__tests__/Homepage.test.jsx</code> and <code>src/__tests__/Login.test.jsx</code> to see how unit tests are created.</p>
                <p>The goal here is to test the UI result expected by the end user, not the logic.</p>
                <p>To run the tests, run <code>npm run test</code> in the terminal.</p>
            </div>
        </>

    )
}

export default HomePage
