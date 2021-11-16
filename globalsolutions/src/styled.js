import styled from 'styled-components'

export const EscolhaBotoes = styled.div`
    display: flex;
    flex-direction: row;

    button {
        width: 200px;
        height: 70px;
        font-size: 20px;
        font-weight: 500;
        margin: 20px;
        cursor: pointer;
    }

    button:hover {
        background-color: #FF6D50;
        cursor: pointer;
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
        margin-right: 60px;
    }
    
    img{
        width: 450px;
    }

    input {
        width: 450px
    }

    h1{
        font-size:36px;
    }

    button:hover {
        background-color: #FF6D50;
        cursor: pointer;
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
        width: 18%;
        display: flex;
        flex-direction: row;
    }

    button{
        height: 50px;
        background-color: #FF8870;
        border-radius: 5px;
        outline: none;
        border: none;
        width: 100%;
        margin: 5px;
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
        width: 400px;
        outline: none;
    }

    button:hover{
        background-color: #FF6D50;
        cursor: pointer;
    }


`

export const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1{
        font-size: 36px
    }
`

export const ContainerHome = styled.section`
    max-width: 1400px;
    margin: 5% auto;
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
        height: 50px;
        background-color: #FF8870;
        border-radius: 5px;
        outline: none;
        border: none;
        width: 100%;
        margin: 20px auto;
    }

    button:hover{
        background-color: #FF6D50;
        cursor: pointer;
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
    justify-content: space-between;
    flex-wrap: wrap;
`

export const TitleMeusProd = styled.h1`
    font-size: 30px;
    margin-top: 40px;
`

export const CardProduto = styled.div`
    border: 1px solid #000;
    max-width: 400px;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;

    h1{
        font-size: 25px;
    }

    h2{
        font-size: 18px;
        font-weight: 600
    }

    p{
        font-size: 15px;
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