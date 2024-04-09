import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover {
        font-weight: bold;
    }

    &:active {
        color: red;
    }

    &:visited {
        color: black;
    }
`

const Header = ({ submitFunction }) => {
    const styleHeader = {
        margin: '0px',
        height: '50px',
        backgroundColor: '#f6f6f6',
        display: 'flex',
    }

    const styleUl = {
        marginLeft: '0px',
        display: 'flex',
    }

    const styleLi = {
        marginRight: '50px',
        listStyleType: 'none',
        fontSize: '18px',
    }

    const styleBotton = {
        padding: '0px',
        border: '0px solid white',
    }

    const styleInput = {
        width: '300px',
        height: '20px',
        padding: '0px',
        border: '0px solid',
        outline: 'none',
        marginLeft: '5px',
    }

    const styleIcon = {
        padding: '0px',
        margin: '0px',
        height: '20px',
        backgroundColor: 'white',
        borderColor: 'white',
        marginRight: '5px',
    }

    const styleForm = {
        margin: '17px 0px 0px 345px',
        height: '22.8px',
        width: '325px',
        display: 'flex',
    }

    const styleImg = {
        margin: '-8px 0px 0px 350px',
        height: '70px',
    }

    return (
        <header style={styleHeader}>
            <nav style={{ marginRight: '100px' }}>
                <ul style={styleUl}>
                    <li style={styleLi}>
                        <StyledLink to="/">Home</StyledLink>
                    </li>
                    <li style={styleLi}>
                        <StyledLink to="/about">About us</StyledLink>
                    </li>
                </ul>
            </nav>
            <img
                style={styleImg}
                src="https://png.pngitem.com/pimgs/s/149-1495237_fox-movies-logo-png-transparent-png.png"
                alt="film logo"
            />
            <form className="form" style={styleForm} onSubmit={submitFunction}>
                <input
                    className="input"
                    name="searchbarInput"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search films"
                    style={styleInput}
                />
                <button type="submit" className="button" style={styleBotton}>
                    <span className="button-label">
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
                            alt=""
                            style={styleIcon}
                        />
                    </span>
                </button>
            </form>
        </header>
    )
}

export default Header
