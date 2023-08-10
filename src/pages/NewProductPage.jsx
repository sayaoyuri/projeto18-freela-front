import { useState, useEffect, useContext } from "react";
import Select from 'react-select';
import { Form } from "../assets/styled-components/AuthForm";
import { categories, createProduct } from "../services/services";
import { AuthContext } from "../context/AutContext";

const NewProductPage = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [price, setPrice] = useState('')
  const [photo, setPhoto] = useState('')
  const [selectOptions, setSelectOption] = useState([]);

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    categories().then(res => setSelectOption(res));
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    const body = { name, description, categoryId, price, photo };

    const result = await createProduct(authToken.token, body);

    alert(result);
  };

  return (
    <Form onSubmit={submit}>
      Cadastro de Produto
      <input type="text" placeholder="Produto" minLength={6} max={100} required value={name} onChange={e => setName(e.target.value)}/>
      <input type="text" placeholder="Descrição" minLength={6} maxLength={100} required value={description} onChange={e => setDescription(e.target.value)}/>
      <input type="number" placeholder="Preço" required value={price} onChange={e => setPrice(e.target.value)}/>
      <input type="text" placeholder="URL Foto" required value={photo} onChange={e => setPhoto(e.target.value)}/>
      <Select options={selectOptions} required onChange={e => setCategoryId(e.value)} />
      <input type="submit" value="Desapegar" />
    </Form>
  );
};

export default NewProductPage;

// name: Joi.string().min(6).max(30).trim().required(),
//   description: Joi.string().min(6).max(100).trim().required(),
//   categoryId: Joi.number().integer().required(),
//   price: Joi.number().integer().min(1).required(),
//   photo: Joi.string().uri().required()