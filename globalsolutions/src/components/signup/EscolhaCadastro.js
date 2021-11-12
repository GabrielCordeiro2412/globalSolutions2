import {EscolhaBotoes, Questions} from '../../styled';
import {Link} from 'react-router-dom'
import Question from '../../img/question.svg'

export default function Escolha(){
    return(
        <>
            <h1>Você é um:</h1>
            <EscolhaBotoes>
                <Link to="/signup"><button>ONG</button></Link>
                <Link to="/signup"><button>Mercado</button></Link>
            </EscolhaBotoes>
            <Questions src={Question} alt="Question"/>
        </>
    )
}