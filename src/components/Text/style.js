import styled from "styled-components";


export const TextFromMyself = styled.div `
    display: flex;
    justify-content: flex-end;
    div {
        display: flex;
        align-items: center;
        gap: 1vw;
        background-color: lightgreen;
        border-radius: 10px 0 10px 10px;
        width: fit-content;
        padding: 1vh;
        :hover {
            button {
                opacity: 1;
            }
        }
        @media screen and (min-width: 1200px) {
            max-width: 25vw;
        }
        @media screen and (min-width: 900px) and (max-width: 1200px) {
            max-width: 30vw;
        }
        @media screen and (min-width: 500px) and (max-width: 900px) {
            max-width: 50vw;
        }
        @media screen and (max-width: 500px) {
            max-width: 85vw;
        }
        p {
            font-size: 13px;
        }
        button {
            height: 2.5vh;
            width: 1.3vw;
            border: none;
            border-radius: 50%;
            background-color: transparent;
            cursor: pointer;
            font-size: 14px;
            color: grey;
            opacity: 0;
        }
    }
`

export const TextFromOthers = styled.div `
    display: flex;
    justify-content: flex-start;
    div {
        display: flex;
        background-color: white;
        border-radius: 0 10px 10px 10px;
        width: fit-content;
        padding: 1vh;
        :hover {
            button {
                opacity: 1;
            }
        }
        @media screen and (min-width: 1200px) {
            max-width: 25vw;
        }
        @media screen and (min-width: 900px) and (max-width: 1200px) {
            max-width: 30vw;
        }
        @media screen and (min-width: 500px) and (max-width: 900px) {
            max-width: 50vw;
        }
        @media screen and (max-width: 500px) {
            max-width: 85vw;
        }
        div {
            display: flex;
            flex-direction: column;
            p {
                font-size: 13px;
            }
            p:nth-child(1) {
                font-weight: bold;
            }
        }
        button {
            height: 2.5vh;
            width: 1.3vw;
            border-radius: 50%;
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 14px;
            color: grey;
            opacity: 0;
        }
    }
`
