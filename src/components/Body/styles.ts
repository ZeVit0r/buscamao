import styled from 'styled-components'

export const ContentBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    flex: 1;

    top: 110px;
    width: 100%;
    flex-wrap: wrap;

    margin-top: 20px;

    .card {
        width: 200px;
        height: 240px;
        background-color: white;
        margin: 10px 5px;
        border-radius: 5px;

        position: relative;

        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }

        .card-info {
            height: 120px;
            width: 100%;
            position: absolute;
            bottom: 0;

            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;

            padding-bottom: 7px;

            background: rgba(39,39,39,100%);

            text-align: center;

            
            border-radius: 0 0 5px 5px;

            .title {
                padding: 2px;
                overflow: hidden; 
                width:100%;
                white-space:pre-wrap;
                h1 {
                    font-size: 10px;
                }
                
            }

            h3 {
                font-size: 10px;
            }
            

            .card-foot {
                padding: 0 5px;
                width: 100%;

                display: flex;
                align-items: center;
                justify-content: space-between;

                h1 {
                    color: #FED766;
                }
            
                a { 
                font-size: 30px;
                border: 1 solid white;
                text-decoration: none;
                color: white;
                cursor: pointer;
                background-color: rgba(0, 161, 183, 80%);
                padding: 0px 5px;
                border-radius: 5px;
                margin-top: 10px;

                }

                a:hover {
                    background-color: rgba(0, 161, 183, 120%);
                    color: #FED766;
                    transition: 0.5s;
                }


            }

            
        }
    }

    .card:hover {
        .card-info {
            background: rgba(39,39,39,50%);
            transition: 2s;
        }
    }
`