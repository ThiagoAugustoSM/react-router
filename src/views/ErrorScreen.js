import React from 'react';

import { useHistory } from 'react-router-dom';

import './ErrorScreen.css';

const ErrorScreen = (props) => {

  let history = useHistory();

  const goBack = () => history.goBack();

  return (
    <>
    <div className='container__error'>
      <img src='./error404.png'></img>
      <div className='text'>
        <h2>A gente não achou essa página que você estava procurando. Gostaria de continuar na plataforma?</h2>
        <input onClick={goBack} type='button' value='Voltar para a página anterior'></input>
      </div>
    </div>
    </>
  )
}

export default ErrorScreen;