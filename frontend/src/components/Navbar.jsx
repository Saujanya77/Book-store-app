import React, { useState } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState('light'); // Initial theme is 'light'

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
            <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'bg-body-tertiary text-dark' : 'bg-dark text-white'}`}>
                <div className="container">
                    <a className="navbar-brand" href="#">BiblioHEAVEN.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add books</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                                    Toggle Theme
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
