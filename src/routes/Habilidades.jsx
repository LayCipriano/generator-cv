import Menu from "./Menu.jsx";
import './DadosPessoais.css';
import './Educacao.css';
import './MetasProfissionais.css';

function Skills() {
    return (
        <main className='main'>
            <Menu/>

            <div className="data">
                <div className="titleGeral">
                    <h1>Suas Habilidadess</h1>
                    <h3>Preencha as informações abaixo</h3>
                </div>

                <div className="form">
                    
                    <textarea className="inputForm"  cols="30" rows="5" placeholder="Soft Skills"></textarea>
                    <textarea className="inputForm"  cols="30" rows="5" placeholder="Hard Skills"></textarea>
                    <textarea className="inputForm"  cols="30" rows="5" placeholder="Idiomas"></textarea>

                    <div className="btn">
                        <button className='btnForm btnBack' type='Submit'>Voltar</button>
                        <button className='btnForm btnProximo' type='Submit'>próximo</button>
                    </div>
                </div>
            </div>           
            
        </main>
    )}

export default Skills;