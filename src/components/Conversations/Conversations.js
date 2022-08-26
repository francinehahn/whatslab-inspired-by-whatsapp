import React, { useState } from "react"
import { MockDeDados } from "../../MockDeDados"
import logo from '../../img/logo-labenu.png'
import {Container, Conversation, Top, UserImg, Form} from './style'
import lupa from '../../img/lupa.png'
import circle from '../../img/circle.png'
import talk from '../../img/talk.png'
import dots from '../../img/dots.png'


export function Conversations() {
    const [search, setSearch] = useState("")
    
    const time = () => {
        const localTime = new Date().toLocaleTimeString();
        const list = localTime.split(":")
        return `${list[0]}:${list[1]}`
    }
    
    
    const renderEntireList = () => {
        return (
            MockDeDados.map((item, index) => {
                return (
                    <Conversation key={index}>
                        <div>
                            <img src={item.photo} alt={'Imagem do usuário'}/>
                            <h6>{item.name}</h6>
                        </div>
                        <p>{time()}</p>
                    </Conversation>
                )
            })
        )
    }

    const renderFilteredList = () => {
        const filter = MockDeDados.filter(item => item.name.startsWith(search))
        return (
            filter.map((item, index) => {
                return (
                    <Conversation key={index}>
                        <div>
                            <img src={item.photo} alt={'Imagem do usuário'}/>
                            <h6>{item.name}</h6> 
                        </div>
                        <p>{time()}</p>
                    </Conversation>
                )
            })
        )
    }

    return (
        <Container>
            <Top>
                <UserImg src={logo} alt={'Imagem do usuário'}/>
                <div>
                    <img src={circle} alt={'Ícone de um círculo'}/>
                    <img src={talk} alt={'Ícone de um balão de bate-papo'}/>
                    <img src={dots} alt={'Ícone de três pontos na vertical'}/>
                </div>
            </Top>
            
            <Form>
                <form>
                    <img src={lupa} alt={'Ícone de uma lupa'}/>
                    <input placeholder="Procurar conversa" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </form>
            </Form>

            {!search && renderEntireList()}
            {search && renderFilteredList()}
        </Container>
    )
}