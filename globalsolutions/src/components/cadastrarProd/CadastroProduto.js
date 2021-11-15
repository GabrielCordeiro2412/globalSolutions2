import hamburgerIMG from '../../img/hamburgerIMG.svg'
import {ContentSignup} from '../../styled'

export default function CadastroProduto(){
    return(
        <section>
        <ContentSignup>
            <form>
                <h1>Cadastrar Produto</h1>
                <input type="text" placeholder="Nome do Produto"/>
                <input type="number" placeholder="Quantidade"/>
                <input type="text" placeholder="Descrição"/>
                <input type="date" placeholder="Data de Validade"/>
                
                <button type="submit">Salvar Produto</button>
            </form>
            <img src={hamburgerIMG} alt="Hamburger"/>
        </ContentSignup>
        </section>
    )
}