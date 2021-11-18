import styled from 'styled-components'

export const EscolhaBotoes = styled.div`
    display: flex;
    flex-direction: row;

    button {
        width: 200px;
        height: 70px;
        font-size: 20px;
        font-weight: 500;
        margin: 30px;
        cursor: pointer;
        background-color: #FF8870;
        border: none;
        outline: none;
        border-radius: 5px;

    }

    button:hover {
        background-color: #FF6D50;
        cursor: pointer;
    }

    @media (max-width: 412px) {
        flex-direction: column;

        button{
            margin: 15px;   
            width: 250px;
        }
    }

    
`

export const Questions = styled.img`
    width: 600px;
    margin-top: 20px;
`

export const ContentSignup = styled.div`
    display: flex;
    flex-direction: row;
    form{
        margin-right: 200px;
    }
    
    img{
        width: 500px;
    }

    input{
        margin: 15px auto;
        outline: none;
        border: none;
        border-bottom: 2px solid #000;
        width: 450px;
        font-size: 15px;
    }

    h1{
        font-size:36px;
    }

    button{
        height: 50px;
        background-color: #FF8870;
        border-radius: 5px;
        outline: none;
        border: none;
        margin: 20px auto;
        width: 450px;
    }

    button:hover {
        background-color: #FF6D50;
        cursor: pointer;
    }


    @media (max-width: 412px) {
        flex-direction: column;

        img{
            width: 300px;
            margin-top: 20px;
        }

        form{
        margin-right: 0px;
    }
    }
`

export const BackContent = styled.div`
    display: flex;
    border: 1px solid #000;
`

export const MenuBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;

    .buttons{
        width: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    button{
        height: 50px;
        background-color: #FF8870;
        border-radius: 5px;
        outline: none;
        border: none;
        width: 250px;
        margin: 5px;
        font-size: 20px;
    }

    button a{
        text-decoration: none;
        color: #000;
    }

    button:hover{
        background-color: #FF6D50;
        cursor: pointer;
    }

    img{
        width: 200px;
    }

    a{
        text-decoration: none;
        color: #000;
        margin-right: 20px;
    }

    @media (max-width: 412px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .buttons{
            width: 100%;
        }

        button{
            width: 300px;
        }   
    }
`

export const BarraBuscar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        height: 50px;
        width: 80px;
        background-color: #FF8870;
        border-radius: 5px;
        outline: none;
        border: none;
    }

    img{
        margin: auto;
        width: 40px;
    }

    input{
        background-color: #DDDDDD;
        border-radius: 5px;
        border: none;
        padding: 14px;
        width: 350px;
        outline: none;
    }

    button:hover{
        background-color: #FF6D50;
        cursor: pointer;
    }

    @media (max-width: 412px){
        justify-content: center;
        input{
            width: 230px;
        }
    }

`

export const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0% auto 3% auto;
    max-width: 1400px;

    h1{
        font-size: 36px
    }

    @media (max-width: 412px){
        align-items: center;
    }
`

export const ContainerHome = styled.section`
    max-width: 1400px;
    margin: 3% auto;
`

export const Section = styled.section`
    margin: 5% auto;
    max-width: 1400px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 35px;
    }

    @media (max-width: 412px) {
        img{
            width: 350px;
        }   
    }
`

export const SectionLogin = styled.section`
    margin: 5% auto;
    max-width: 1400px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column
    }

    input{
        margin: 15px auto;
        outline: none;
        border: none;
        border-bottom: 2px solid #000;
        width: 300px;
        font-size: 15px;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px white inset;
    }

    button{
        background-color: #FF8870;
        border-radius: 5px;
        outline: none;
        border: none;
        height: 50px;
        width: 100%;
    }

    button:hover{
        background-color: #FF6D50;
        cursor: pointer;
    }

    p{
        margin-top: 20px;
    }

    a{
        color: #000;
    }

    img{
        margin-bottom: 20px;
    }
`

export const SectionHome = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    max-width: 1400px;

    @media (max-width: 412px) {
        h1{
            margin: auto;
        }
    }
`

export const TitleMeusProd = styled.h1`
    font-size: 30px;
`

export const CardProduto = styled.div`
    border: 1px solid #000;
    max-width: 400px;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    box-sizing: border-box;
    margin-right: 30px;

    h1{
        font-size: 25px;
    }

    h2{
        font-size: 18px;
        font-weight: 500
    }

    p{
        font-size: 15px;
    }

    .btnSelect{
        background-color: #FF8870;
        border-radius: 5px;
        outline: none;
        border: none;
        width: 100%;
        height: 50px;
        margin-top: 15px;
        font-size: 17px;
    }

    .btnSelect:hover{
        background-color: #FF6D50;
        cursor: pointer;
    }

    h3{
        font-weight: 500;
        font-size: 18px;
    }

   
`

export const BottomCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    justify-content: space-between;

    h3{
        font-weight: 500;
        font-size: 18px;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;

    button{
        background-color: #FF8870;
        border-radius: 5px;
        outline: none;
        border: none;
        margin-right: 15px;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover{
        background-color: #FF6D50;
        cursor: pointer;
    }

    img{
        margin: auto;
    }

    .btn2{
        background-color: #AAFF82;
    }

    .btn2:hover{
        background-color: #43D001;
    }
`
export const BtnFinalizar = styled.button`
        background-color: #61AB43;
        border-radius: 5px;
        outline: none;
        border: none;
        margin: auto;
        height: 100px;
        width: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:25px;

        :hover{
            background-color: #529338;
            cursor: pointer;
        }
`