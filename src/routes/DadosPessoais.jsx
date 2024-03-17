import Menu from '../routes/Menu.jsx';
import '../assets/css/DadosPessoais.css';


function DadosPessoais() {
    return (
        <main className='main'>
            <Menu/>
            <div className="data">
                <div className="titleGeral">
                    <h1>Dados Pessoais</h1>
                    <h3>Preencha as informações abaixo</h3>
                </div>

                <div className="form">
                    <input className='inputForm' type="text" placeholder='Nome Completo' />
                    <input className='inputForm' type="email" placeholder='Seu melhor e-mail' />
                    <input className='inputForm' type="text" placeholder='Seu telefone' />
                    <input className='inputForm' type="text" placeholder='Seu endereço' />
                    <input className='inputForm' type="text" placeholder='Seu LinkedIn' />
                    <input className='inputForm' type="text" placeholder='Cargo almejado' />

                    <button className='inputForm btnProximo' type='Submit'>
                        próximo
                    </button>
                </div>
            </div>
        </main>


)}

export default DadosPessoais;