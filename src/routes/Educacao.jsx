import Menu from "./Menu.jsx";
import '../assets/css/DadosPessoais.css';
import '../assets/css/Educacao.css';

function Educacao() {
    return (
        <main className='main'>
            <Menu/>

            <div className="data">
                <div className="titleGeral">
                    <h1>Educação</h1>
                    <h3>Preencha as informações abaixo</h3>
                </div>

                <div className="form">
                    <input className='inputForm' type="text" placeholder='Instituição de Ensino' />
                    <input className='inputForm' type="email" placeholder='Curso Superior' />
                    <input className='inputForm' type="text" placeholder='Nível Superior (mestrado, doutorado, MBA...)' />
                    <input className='inputForm date' type="text" placeholder='Início em' />
                    <input className='inputForm date' type="text" placeholder='Término em' />
                    <input className='inputForm' type="text" placeholder='Cidade/UF' />
                    <textarea className="inputForm"  cols="30" rows="5" placeholder="Resumo do Curso"></textarea>

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