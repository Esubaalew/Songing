
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
const notFound = css`
text-align: center;
font-size: 3rem;
color: darkblue;
font-family: 'Lato', sans-serif;
`
const notFoundDescription = css`
text-align: center;
font-style: italic;
color: gray;
font-family: 'Lato', sans-serif;
`
const goHomeButton = css`
margin-right: 10px;
background-color: darkblue;
color: white;
border: none;
padding: 10px 20px;
cursor: pointer;
`
const divContainer = css`
display: flex;
justify-content: center;
align-items: center;
`
const inputField = css`
margin-right: 10px;
border: 1px solid darkblue;
padding: 10px 20px;
`
const searchButton = css`
background-color: darkblue;
color: white;
border: none;
padding: 10px 20px;
cursor: pointer;
`
const image = css`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`


const NotFound = () => {
    return (
        <React.Fragment>
            <h1 css={notFound}>Oops! Page not found</h1>
            <h3 css={notFoundDescription}>We're sorry, the page you requested could not be found. Please go back to the homepage or try searching for something else.</h3>
            <div css={divContainer}>
                <button css={goHomeButton}>Go Home</button>
                <input type="text" placeholder="Search..." css={inputField} />
                <button css={searchButton}>Search</button>
            </div>
            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404 image" css={image} />
        </React.Fragment>
    )
}

export default NotFound;
