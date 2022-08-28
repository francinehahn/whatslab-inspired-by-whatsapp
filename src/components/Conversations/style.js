import styled from "styled-components";


export const Container = styled.section `
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow-y: scroll;
    ::-webkit-scrollbar-track {
        background-color: white;
    }
    ::-webkit-scrollbar {
        width: .4vw;
        background: white;
    }
    ::-webkit-scrollbar-thumb {
        background: lightgrey;
    }
    @media screen and (max-width: 700px){
        display: none;
    }
`

export const Top = styled.aside `
    display: flex;
    align-items: center;
    gap: 11vw;
    background-color: #f6f6f6;
    padding: 1vh;
    border-right: 1px solid lightgrey;
    div {
        display: flex;
        gap: 1.5vw;
        img {
            @media screen and (min-width: 1000px) {
                width: 16%;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                width: 20%;
            }
            @media screen and (min-width: 600px) and (max-width: 800px) {
                width: 18%;
            }
        }
    }
`

export const UserImg = styled.img `
    padding-left: 1vw;
    border-radius: 50%;
    @media screen and (min-width: 1200px) {
        width: 20%;
    }
    @media screen and (min-width: 900px) and (max-width: 1200px) {
        width: 19%;
    }
    @media screen and (min-width: 320px) and (max-width: 900px) {
        width: 21%;
    }
`

export const Form = styled.div `
    background-color: white;
    padding: .5vh;
    margin: 1vh;
    form {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 2vw;
        padding: 1vh 1vw;
        background-color: #f6f6f6;
        border-radius: 10px;
        img {
            width: 7%;
        }
        input {
            width: 17vw;
            font-size: 13px;
            border: none;
            background-color: #f6f6f6;
            padding: .5vh;
            :focus {
                border: 0 none;
                outline: 0;
            }
        }
    }
`

export const Conversation = styled.aside `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .5px solid #EFECE7;
    padding: 1vh 3vh 1vh 1vh;
    div {
        display: flex;
        align-items: center;
        gap: 1vw;
        margin-left: 1vw;
        img {
            width: 20%;
            border-radius: 50%;
        }
        h6 {
            color: black;
            font-size: 14px;
            font-weight: 400;
        }   
    }
    p {
        font-size: 13px;
        color: grey;
    }
`