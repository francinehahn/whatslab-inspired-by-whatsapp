import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }
`

export const BiggerContainer = styled.main `
    font-family: Arial, Helvetica, sans-serif;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 700px) {
        height: 100vh;
    }
    @media screen and (max-width: 700px) {
        height: 94vh;
    }
`

export const MiddleContainer = styled.section ` 
    @media screen and (min-width: 700px) {
        height: 95vh;
        width: 98vw;
    }
    @media screen and (max-width: 700px) {
        height: 94vh;
        width: 100vw;
    }
    background-color: white;
    display: grid;
    background-color: #f6f6f6;
    @media screen and (min-width: 900px) {
        grid-template-columns: 25% 75%;    
    }
    @media screen and (min-width: 700px) and (max-width: 900px) {
        grid-template-columns: 30% 70%;    
    }
`

export const SmallerContainer = styled.section `
    display: flex;
    flex-direction: column;
    form {
        display: flex;
        gap: 5px;
        justify-content: center;
        padding: 0 .5vw;
        margin: 2vh 0;
        background-color: #f8f8f8;
        input:focus {
            border: 0 none;
            outline: 0;
        }
        input:nth-child(1) {
            padding: 1.5vh;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            background-color: white;
            width: 20%;
        }
        input:nth-child(2) {
            padding: 1.5vh;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            background-color: white;
            width: 70%;
        }
        button {
            border: none;
            border-radius: 5px;
            font-size: 16px;
            background-color: white;
            cursor: pointer;
            width: 10%;
            img {
                @media screen and (min-width: 900px) {
                    width: 40%;
                }
                @media screen and (min-width: 550px) and (max-width: 900px) {
                    width: 50%;
                }
                @media screen and (min-width: 320px) and (max-width: 550px) {
                    width: 70%;
                }
            }
        }
    }
`


export const Messages = styled.section `
    padding: 5vh 2vw;
    background-image: url(${props => props.backgroundImg});
    background-size: contain;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    justify-content: flex-end;
    overflow-y: scroll;
    ::-webkit-scrollbar-track {
        background-color: #EFECE7;
    }
    ::-webkit-scrollbar {
        width: .8vw;
        background: white;
    }
    ::-webkit-scrollbar-thumb {
        background: lightgrey;
    }
`