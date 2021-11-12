import './Login.css';
import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <section>
            <form>
                <input type="text" name="inputEmail" placeholder="email"/>
                <input type="password" name="inputSenha" placeholder="senha"/>
                <button type="submit" name="btnSubmit">Fazer login</button>
            </form>
            <p>Não possui conta?<Link to="/chooseSignup"> Faça seu cadastro</Link></p>
        </section>
    )
}