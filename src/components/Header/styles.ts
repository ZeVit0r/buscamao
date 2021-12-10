import styled from 'styled-components'

export const Content = styled.div`
    background: #272727;
    height: 110px;
    width: 100vw;

    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .top-header {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        .search {
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                width: 800px;
                height: 35px;
                color: #272727;
                padding: 10px;
            }

            button {
                height: 35px;
                width: 55px;
                color: #272727;
                font-weight: 600;
            }
        }
        
    }

    hr {
        width: 90%;
        margin: 10px;
    }

    .bottom-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        padding: 0 50px;

        >div {
            display: flex;
            flex-direction: row;
            align-items: center;

            p {
                font-size: 25px;
            }
        }

        .preco {
            input {
                width: 40px;
                margin: 0 5px;
            }
        }
        .autor {
            input {
                
                margin: 0 5px;
            }
        }
        .loja {
            select {
                height: 20px;
                width: 200px;
                margin: 0 5px;
                text-align: center;
            }
        }
        .genero {
            input {
                
                margin: 0 5px;
            }
        }
    }
`