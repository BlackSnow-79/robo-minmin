console.log("Robo hello world");
import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from 'react-simple-chatbot';
import data from '../../data.json';

const steps = data.data;
console.log(steps);
ReactDOM.render(React.createElement(
    'div',
    null,
        React.createElement(ChatBot, {
        steps: steps
    })
), document.getElementById('root'));