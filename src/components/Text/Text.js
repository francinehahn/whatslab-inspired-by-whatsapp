import React from 'react';
import {TextFromOthers, TextFromMyself} from './style'


export function Text(props) {
    return (
        <>
            {props.name !== 'eu' && props.name !== 'Eu' && (
                <TextFromOthers>
                    <div>
                        <div>
                            <p>{props.name}</p>
                            <p>{props.text}</p>
                        </div>
                        <button onClick={props.remove}>x</button>
                    </div>
                </TextFromOthers>
            )}
            
            {(props.name === 'eu' || props.name === 'Eu') && (
                <TextFromMyself>
                    <div>
                        <p>{props.text}</p>
                        <button onClick={props.remove}>x</button>
                    </div>
                </TextFromMyself>
            )}
        </>
    )
}