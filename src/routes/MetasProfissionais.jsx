import Menu from "../routes/Menu.jsx";
import '../assets/css/DadosPessoais.css';
import '../assets/css/Educacao.css';
import '../assets/css/MetasProfissionais.css'

function Metas() {
    return (
        <main className='main'>
            <Menu/>

            <div className="data">
                <div className="titleGeral">
                    <h1>Suas Metas Profissionais</h1>
                    <h3>Preencha as informações abaixo</h3>
                </div>

                <div className="form">
                    
                    <textarea className="inputForm"  cols="30" rows="20" placeholder="Resumo do Cargo"></textarea>

                    <div className="btn">
                        <button className='btnForm btnBack' type='Submit'>Voltar</button>
                        <button className='btnForm btnProximo' type='Submit'>próximo</button>
                    </div>
                </div>
            </div>           
            
        </main>
    )}

export default Metas;