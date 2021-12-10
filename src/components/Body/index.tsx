import { useEffect, useState } from 'react'
import { ContentBody } from './styles'

interface props {
    livros: Array<books>;
}

interface books {
    author: string;
    id: number;
    image: string;
    link: string;
    price: string;
    title: string;
}

export function Body( props: props) {

    // const [livros, setLivros] = useState([])

    /* useEffect(()=>{
        setLivros(books.Livros)
    }, [books.Livros]) */

    // console.log(props.livros)

    return(
        
        <ContentBody>
            {
                props.livros.map(livro =>{
                    return(
                        <div className="card" key = {livro.id}>
                            <img src={livro.image} alt={livro.title} />
                            <div className="card-info">
                                <div className="title">
                                    <h1>{livro.title}</h1>
                                </div>
                                -
                                <h3>{livro.author}</h3>
                                <div className="card-foot">
                                    <h1>{livro.price}</h1>
                                    <a href={livro.link}>ver</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           
        </ContentBody>
    )
}