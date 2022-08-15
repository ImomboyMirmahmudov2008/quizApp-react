import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Quizinc = () => (
    <Fragment>
        <Helmet><title>Quiz Instruction</title></Helmet>
        <div className="container">
            <h1>Rules of the game</h1>
            <p>Manual</p>
            <ul className="b_d" id="main-list">
                <li>The game lasts 2 minutes and ends if there is no answer</li>
                <li>The game will consist of 15 questions</li>
                <li>
                    4 options in one question
                </li>
                <li>
                    Choose the best option
                </li>
                <li>
                    2 lifelines per game
                    <ul id="sublist">
                        <li>Two 50-50 chances</li>
                        <li>Five hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the instructions
                    will remove 2 wrong answers, leaving the one correct answer and one wrong answer
                </li>
                <li>
                    Using a hint by clicking the icon
                    will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many...
                </li>
                <li>
                    Quit and surrender at any time
                </li>
            </ul>
            <div className="buttons">
                <span className="left"><Link to="/" className="buttons" id="to">Qaytarib olish yo'q</Link></span>
                <br></br>
                <span className="right"><Link to="/play/quiz" className="buttons" id="to1">GO</Link></span>
            </div>
        </div>
    </Fragment>
);

export default Quizinc;