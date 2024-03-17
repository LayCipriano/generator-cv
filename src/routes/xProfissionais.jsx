import Menu from "./Menu.jsx";
import './DadosPessoais.css';
import './Educacao.css';
import './MetasProfissionais.css';
import './Menu.css';

function Educacao() {
    return (
        <main className='main'>
            <Menu/>

            <div className="data">
                <div className="titleGeral">
                    <h1>Sua Experiência Profissional</h1>
                    <h3>Preencha as informações abaixo</h3>
                </div>

                <div className="form">
                    <input className='inputForm' type="text" placeholder='Empresa/Companhia' />
                    <input className='inputForm' type="text" placeholder='Posição/Cargo' />
                    <input className='inputForm date' type="text" placeholder='Início em' />
                    <input className='inputForm date' type="text" placeholder='Término em' />
                    <input className='inputForm' type="text" placeholder='Cidade/UF' />
                    <textarea className="inputForm"  cols="30" rows="5" placeholder="Resumo do Cargo"></textarea>

                    <div className="btn">
                        <button className='btnForm btnBack' type='Submit'>Voltar</button>
                        <button className='btnForm btnNew' type='Submit'>Novo</button>
                        <button className='btnForm btnProximo' type='Submit'>próximo</button>
                    </div>
                </div>
            </div>           
            
        </main>
    )}

export default Educacao;