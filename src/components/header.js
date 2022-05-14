import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import Navegacion from './navegacion';


const Header = () => {
    return ( 
        <header
            css={css`
                background-color: #0D283B;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width:768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link to="/">
                    <StaticImage src='../images/logo.svg' alt='Logo' />
                </Link>
                <Navegacion />
            </div>
        </header>
     );
}
 
export default Header;