/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
const songContainer = css`
display: flex;
align-items: center;
justify-content: center;
padding: 0.25rem;
border-bottom: 1px solid #ddd;
`
const songs = css`
color: #ddd;
text-decoration: none;
padding: 0.5rem 1rem;
font-size: 2rem;
font-family: 'Pacifico', cursive;
font-weight: bold;
letter-spacing: 0.1rem;
text-transform: uppercase;
`
const Header = () => {
    return (
        <div css={songContainer}>
            <Link to="/" css={songs}>HomePage</Link>
        </div>
    )
}

export default Header;