import mercadoIMG from '../../img/mercadoIMG.svg'
import {ContentSignup} from '../../styled'

export default function CadastroMercado(){
    return(
        <section>
        <ContentSignup>
            <form>
                <h1>Cadastrar Mercado</h1>
                <input type="text" placeholder="Nome da Mercado"/>
                <input type="text" placeholder="CNPJ"/>
                <input type="text" placeholder="Telefone"/>
                <input type="text" placeholder="Endereço"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit">Cadastrar Mercado</button>
            </form>
            <img src={mercadoIMG} alt="Mercado IMG"/>
        </ContentSignup>
        </section>
    )
}