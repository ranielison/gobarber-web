import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

function handleSubmit(data) {
  console.tron.log(data);
}

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
