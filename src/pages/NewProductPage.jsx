import { useState, useEffect, useContext } from "react";
import Select from 'react-select';
import { Form, BottomDiv } from "../assets/styled-components/AuthForm";
import { categories, createProduct } from "../services/services";
import { AuthContext } from "../context/AutContext";
import { useNavigate } from "react-router-dom";

const NewProductPage = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [price, setPrice] = useState('')
  const [photo, setPhoto] = useState('')
  const [selectOptions, setSelectOption] = useState([]);

  const { authToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    categories().then(res => setSelectOption(res));
  }, []);

  if(!authToken.token) {
    navigate('/sign-in')
  };

  const submit = async (e) => {
    e.preventDefault();

    const fixedPrice = Number(price).toFixed(2);

    const body = { name, description, categoryId, price: fixedPrice, photo };

    const result = await createProduct(authToken.token, body);

    alert(result);
  };

  return (
    <Form onSubmit={submit}>
      <h1>Desapegue</h1>
      <div style={{width: "100%"}}>
        <Select placeholder="Categoria..." options={selectOptions} required onChange={e => setCategoryId(e.value)} />
      </div>
      <input type="text" placeholder="Produto" minLength={6} max={100} required value={name} onChange={e => setName(e.target.value)}/>
      <input type="text" placeholder="Descrição" minLength={6} maxLength={100} required value={description} onChange={e => setDescription(e.target.value)}/>
      <input type="number" placeholder="Preço" minLength={3} required value={price} onChange={e => setPrice(e.target.value)}/>
      <input type="text" placeholder="URL Foto" required value={photo} onChange={e => setPhoto(e.target.value)}/>
      <BottomDiv>
        <input type="submit" value="Desapegar" />
      </BottomDiv>
    </Form>
  );
};

export default NewProductPage;
