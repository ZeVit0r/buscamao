import { useEffect, useState } from "react";
import { Header } from "./components/Header"
import { Body } from "./components/Body"

import GlobalStyles from './styles/global';
import api from "./service/api";

function App() {
  
  const [books, setBooks] = useState([])
  const [loja, setLoja] = useState('amazon')
  const [genero, setGenero] = useState('')
  const [name, setName] = useState('tecnologia')
  const [autor, setAutor] = useState('')

  useEffect(()=>{
    api
    .get(`${loja}/${name}`)
    .then(async (response) => {
      await setBooks(response.data.Livros)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, [loja])

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const search = () => {
    api
    .get(`${loja}/${name}`)
    .then(async (response) => {
      await setBooks(response.data.Livros)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  const handleLoja = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLoja(event.target.value)
  }

  return (
    <>
      <Header name={name} handleName={handleName} search={search} handleLoja={handleLoja}/>
      <Body livros={books} />
      <GlobalStyles/>
    </>
  )
}

export default App
