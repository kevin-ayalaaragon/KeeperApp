import React from 'react';


function Footer() {
    
    let currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                Copywrite {currentYear}
            </p>
        </footer>
    );
}

export default Footer;
