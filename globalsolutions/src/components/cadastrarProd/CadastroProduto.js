import hamburgerIMG from '../../img/hamburgerIMG.svg'
import {ContentSignup, SectionLogin} from '../../styled'

export default function CadastroProduto(){
    return(
        <SectionLogin>
        <ContentSignup>
            <form>
                <h1>Cadastrar Produto</h1>
                <input type="text" placeholder="Nome do Produto"/><br/>
                <input type="number" placeholder="Quantidade"/><br/>
                <input type="text" placeholder="Descrição"/><br/>
                <input type="date" placeholder="Data de Validade"/><br/>
                
                <button type="submit">Salvar Produto</button>
            </form>
            <img src={hamburgerIMG} alt="Hamburger"/>
        </ContentSignup>
        </SectionLogin>
    )
}