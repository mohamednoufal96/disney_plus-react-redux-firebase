import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="not-found" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="not-found" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="not-found" />
                    <span>WATCHLISTS</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="not-found" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="not-found" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="not-found" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImage src="https://media-exp1.licdn.com/dms/image/C5103AQF96ES8oDkyUA/profile-displayphoto-shrink_200_200/0/1555241079252?e=1646870400&v=beta&t=vA65u27ullTUwgIoWzSzbs5ny68x2UfUpyedUbGg8TU" />
        </Nav>
    );
}

export default Header;
const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    // justify-content:center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                top: 0;
                left: 0;
                top: 0;
                bottom: -6px;
                // opacity:0;
                transform: scaleX(0.5);
            }
        }
    }
`;

const UserImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;
