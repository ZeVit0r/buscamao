import { Content } from './styles'

import Logo from '../../assets/logo.svg'

interface props {
    name: string;
    handleName: (e:React.ChangeEvent<HTMLInputElement>) => void
    search: () => void
    handleLoja: (e:React.ChangeEvent<HTMLSelectElement>) => void
}

export function Header({name, handleName, search, handleLoja}: props) {
    return(
        <Content>
            <div className="top-header">
                <img src={Logo} alt="buscamao" className="logo" />
                <div className="search">
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => handleName(e)}
                        />
                    <button onClick={() =>search()}>Buscar</button>
                </div>
            </div>
            <hr />
            <div className="bottom-header">
                <div className="genero">
                    <p>Gênero: </p>
                    <input type="value" />
                </div>
                {/* <div className="loja">
                    <p>Loja: </p>
                    <input type="value" />
                </div> */}
                <div className="loja">
                    <p>Loja: </p>
                    <select name="amazon" onChange={(e) =>handleLoja(e)}>
                        <option value="amazon" >amazon</option>
                        <option value="cultura">cultura</option>
                        <option value="saraiva">saraiva</option>
                        <option value="estantevirtual">estante virtual</option>
                        <option value="travessa">travessa</option>
                    </select>
                </div>
                <div className="autor">
                    <p>Autor: </p>
                    <input type="value" />
                </div>
            </div>
        </Content>
    )
}