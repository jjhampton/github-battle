const React = require('react');

const Main = ({children}) => {
    return (
        <div className='main-container'>
            {children}
        </div>
    );
};

module.exports = Main;