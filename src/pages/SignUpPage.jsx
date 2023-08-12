import { useState } from "react";
import { createUser } from "../services/services";
import { Link, useNavigate } from "react-router-dom";
import { Form, AuthError, BottomDiv }  from "../assets/styled-components/AuthForm";

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    const body = { name, cpf, email, password, phone };

    createUser(body).then(res => {
      if(res.response) {
        setAuthError(res.response.data);
      } else {
        navigate('/sign-in');
      }
    });
  };

  return (
    <Form onSubmit={signUp}>
      <h1>Crie sua conta</h1>
      <input 
        type="text" 
        placeholder="Nome" 
        minLength={3} 
        maxLength={30} 
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="CPF" 
        minLength={11} 
        maxLength={11} 
        required 
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <input 
        type="email" 
        placeholder="E-mail" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Senha" 
        minLength={4} 
        maxLength={25} 
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input 
        type="tel" 
        placeholder="Celular"  
        value={phone}
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      <AuthError>{authError}</AuthError>
      <BottomDiv>
        <input type="submit" value="Cadastrar-se!" />
        <p>Já possui uma conta? <Link to={'/sign-in'} ><span>Entrar</span></Link> </p>
      </BottomDiv>
    </Form>
  );
};

export default SignUpPage;