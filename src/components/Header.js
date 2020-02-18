import React, { useState } from 'react';

import { useHistory, Prompt } from 'react-router-dom';

import { FaShoppingCart, FaShoppingBasket } from 'react-icons/fa';

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
    <div className='header'>
      <div onClick={goToHome} className='title'>
        <div className='logo'>
          PS
        </div>
        <h1 className='name'>PLATZI STORE</h1>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          placeholder='O que você quer pesquisar?'
        >
        </input>
        <Prompt
          when={isBlocking}
          message={() => 'Você tem certeza que deseja sair dessa tela? A pesquisa não foi concluída.'}
        />

      </form>
      <div className='shoppingCart'>
        <FaShoppingCart className='icon'/>
        <div className='qnt'>
          <p>0</p>
        </div>
        <p>Meu Carrinho</p>
      </div>
    </div>
  )
}

export default Header;