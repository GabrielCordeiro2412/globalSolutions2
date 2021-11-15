import ongIMG from '../../img/ongIMG.svg'
import {ContentSignup} from '../../styled'

export default function CadastroONG(){
    return(
        <section>
        <ContentSignup>
            <form>
                <h1>Cadastrar ONG</h1>
                <input type="text" placeholder="Nome da ONG"/>
                <input type="text" placeholder="Nome do responsável pela conta"/>
                <input type="text" placeholder="CNPJ"/>
                <input type="text" placeholder="Telefone"/>
                <input type="text" placeholder="Endereço"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit">Cadastrar ONG</button>
            </form>
            <img src={ongIMG} alt="ONG IMG"/>
        </ContentSignup>
        </section>
    )
}