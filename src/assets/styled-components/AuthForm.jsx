import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 50%;
  height: 50vh;
  border: 1px solid black;
  margin: 24vh auto;
  border-radius: 5px;
  padding: 5px;

  input {
    width: 50%;
    height: 30px;
  };
`;