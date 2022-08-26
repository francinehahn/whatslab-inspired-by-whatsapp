import React, {useState} from 'react';
import {GlobalStyle, BiggerContainer, MiddleContainer, SmallerContainer, Messages} from './GlobalStyle'
import {Text} from './components/Text/Text';
import {Header} from './components/Header/Header'
import { useForm } from './hooks/useForm'
import { Conversations } from './components/Conversations/Conversations'
import background from './img/background.png'
import send from './img/send.png'



function App() {
  const [form, onChange, clear] = useForm({name: "", text: ""})
  const [allTexts, setAllTexts] = useState([])
    
  function handleSubmit(e) {
    e.preventDefault()
    const newText = {name: form.name, text: form.text}
    setAllTexts([...allTexts, newText])
    clear()
  }

  function handlePressEnter(e) {
    e.charCode === 13 && handleSubmit(e)
  }

  function handleRemoveText(indexRemove) {
    const arrayUpdated = allTexts.filter((item, index) => {
      return index !== indexRemove
    })
    return setAllTexts(arrayUpdated)
  }

  return (
    <BiggerContainer>
      <GlobalStyle/>

      <MiddleContainer>
        <Conversations/>
        
        <SmallerContainer>
          <Header/>
          
          <Messages backgroundImg={background}>
            {allTexts && allTexts.map((item, index) => {
              return <Text key={index} name={item.name} text={item.text} remove={() => handleRemoveText(index)}/>
            })}
          </Messages>

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              required
              name='name'
              value={form.name}
              placeholder='Nome'
              onChange={onChange}
              onKeyPress={(e) => handlePressEnter(e)}
            />
            <input
              type='text'
              required
              name='text'
              value={form.text}
              placeholder='Mensagem'
              onChange={onChange}
              onKeyPress={(e) => handlePressEnter(e)}
            />
            <button>
              <img src={send} alt={'Ícone de envio de mensagem'}/>
            </button>
          </form>

        </SmallerContainer>
      </MiddleContainer>
    </BiggerContainer>
  );
}

export default App;
