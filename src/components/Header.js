import React from 'react';
import Button from "./Button";

const Header = ({title}) =>{

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button text={'Add'} color={'steelBlue'}/>
        </header>
    );
}

Header.defaultProps = {
    title: "Tracker App"
}

// const HeaderStyles = {
//     fontFamily: ' Arial, Helvetica, sans-serif',
//     color: '#510551',
//     margin: '5px'
// }


export default Header;