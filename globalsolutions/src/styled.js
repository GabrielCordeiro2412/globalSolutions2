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
        margin: 5px;
        width: 200px;

    }
    button:hover{
        background-color: #FF6D50;
        cursor: pointer;
    }

    img{
        width: 200px;
    }
`