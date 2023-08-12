import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 60%;
  margin: 20vh auto;
  border-radius: 5px;
  padding: 0% 15%;

  h1 {
    color: #343434;
  };

  input {
    width: 100%;
    height: 55px;
    border: 1px solid #7e7777;
    border-radius: 10px;
    padding: 5px;
    font-size: 20px;
    color: #343434;
  };

  input[type='submit'] {
    color: white;
    border-radius: 30px;
    background-color: #5858e6;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
  };
  
  span {
    color: blue;
    text-decoration: underline;
  }
`;

export const BottomDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
`;

export const AuthError = styled.p`
  color: #ac2a2a;
`;