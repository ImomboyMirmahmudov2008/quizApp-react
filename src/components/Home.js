import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

const Home = () => (
    // For the main page
    <Fragment>
        <Helmet><title>Quiz App</title></Helmet>
        <div id="home">
            <section>
                {/* <div style={{ textAlign: 'center' }}> 
                    <p>LOGO HERE</p>
                </div> */}
                <h1 className='h1'>Quiz App</h1>
                <div className = "play-button1">
                    <ul>
                        <Link className="play-button" to="/play/instructions">play</Link>
                    </ul>
                </div>
                <div className = "auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">!Log-in</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">!Click me</Link>
                </div>
            </section>
        </div>
    </Fragment>
    
    );

export default Home