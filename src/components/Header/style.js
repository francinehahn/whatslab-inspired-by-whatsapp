import styled from "styled-components";


export const HeaderSection = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f6f6f6;
    color: black;
    padding: 1.5vh;
    span {
        display: flex;
        align-items: center;
        gap: 1vw;
        :nth-child(1) {
            h3 {
                font-size: 16px;
            }
            img {
                border-radius: 50%;
                margin-left: 1.5vw;
                @media screen and (min-width: 1440px) {
                    width: 5%;
                }
                @media screen and (min-width: 1200px) and (max-width: 1440px) {
                    width: 5.5%;
                }
                @media screen and (min-width: 900px) and (max-width: 1200px) {
                    width: 6%;
                }
                @media screen and (min-width: 600px) and (max-width: 900px) {
                    width: 9%;
                }
                @media screen and (max-width: 600px) {
                    width: 12%;
                }
            }
        }
        :nth-child(2) {
            @media screen and (min-width: 600px) and (max-width: 900px) {
                margin-right: 4vw;
            }
            @media screen and (min-width: 320px) and (max-width: 600px) {
                margin-right: 7vw;
            }
            img {
                border-radius: 50%;
                @media screen and (min-width: 1200px) {
                    width: 25%;
                }
                @media screen and (min-width: 900px) and (max-width: 1200px) {
                    width: 35%;
                }
                @media screen and (min-width: 600px) and (max-width: 900px) {
                    width: 55%;
                }
                @media screen and (min-width: 500px) and (max-width: 600px) {
                    width: 70%;
                }
                @media screen and (max-width: 500px) {
                    width: 80%;
                }
            }
        }
    }
`