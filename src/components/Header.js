import React, { useState } from 'react';

import { useHistory, Prompt } from 'react-router-dom';

import './Header.css';

import * as ROUTES from '../constants/Routes';

const Header = (props) => {

  let history = useHistory();
  let [isBlocking, setIsBlocking] = useState(true);

  const goToHome = () => {
    history.push(ROUTES.HOME_SCREEN);
  }

  const handleSubmit = () => {
    alert('Foi Submetido')
  }

  return (
    <>
      <div onClick={goToHome} className='logo'>
        <h1>Platzi Store</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='O que você quer pesquisar?'
        >
        </input>
        <Prompt
          when={isBlocking}
          message={() => 'Você tem certeza que deseja sair dessa tela? A pesquisa não foi concluída.'}
        />

      </form>
    </>
  )
}

export default Header;