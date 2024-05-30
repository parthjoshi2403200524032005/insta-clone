import React from 'react'

export default function FirstLayout({ children }) {
    return (
        <div>
            <header>
                <h1>Simple Layout</h1>
            </header>
            <main>
                <div
                    style={{
                        display: 'flex',
                    }}

                >
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>Search</li>
                            <li>Profile</li>
                        </ul>
                    </nav>
                    <div
                        style={{
                            padding: '1rem',
                        }}>
                        {children}
                    </div>
                </div>
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}