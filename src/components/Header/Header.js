import React from 'react'
import {HeaderSection} from './style'
import iconeCelular from '../../img/icone-celular.png'
import iconeCamera from '../../img/icone-camera.png'
import laura from '../../img/laura.jpg'

export function Header() {
    return (
        <HeaderSection>
            <span>
                <img src={laura} alt={'Foto do usuário'}/>
                <h3>Laura</h3>
            </span>
            <span>
                <img src={iconeCelular} alt={'Ícone de um celular'}/>
                <img src={iconeCamera} alt={'Ícone de uma câmera'}/>
            </span>
        </HeaderSection>
    )
}