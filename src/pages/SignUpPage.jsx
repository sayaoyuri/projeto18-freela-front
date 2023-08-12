import { useState } from "react";
import { createUser } from "../services/services";
import { Link } from "react-router-dom";
import { Form, BottomDiv }  from "../assets/styled-components/AuthForm";

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const signUp = async (e) => {
    e.preventDefault();

    const body = { name, cpf, email, password, phone };

    const result = await createUser(body);

    console.log(result);
    alert(result);
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
      <BottomDiv>
        <input type="submit" value="Cadastrar-se!" />
        <p>Já possui uma conta? <Link to={'/sign-in'} ><span>Entrar</span></Link> </p>
      </BottomDiv>
    </Form>
  );
};

export default SignUpPage;