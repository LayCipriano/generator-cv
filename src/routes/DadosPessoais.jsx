import Menu from '../routes/Menu.jsx';
import '../assets/css/DadosPessoais.css';
import { useState } from 'react';


function DadosPessoais() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('');
    const [endereco, setEndereco] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        switch(name) {
            case 'nome': setNome(value);
                break;
            case 'email': setEmail(value);
                break;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nome: ${nome}`)
        console.log(`Email: ${email}`)
    }

    return (
        <main className='main'>
            <Menu/>
            <div className="data">
                <div className="titleGeral">
                    <h1>Dados Pessoais</h1>
                    <h3>Preencha as informações abaixo</h3>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <input className='inputForm' type="text" 
                    // value={nome} 
                    onChange={handleChange} 
                    placeholder='Nome Completo' />
                    <input className='inputForm' type="email" 
                    value={email} 
                    onChange={handleChange}
                    placeholder='Seu melhor e-mail' />
                    <input className='inputForm' type="text" placeholder='Seu telefone' />
                    <input className='inputForm' type="text" placeholder='Cargo almejado' />
                    <input className='inputForm' type="text" placeholder='Seu endereço' />
                    <input className='inputForm' type="text" placeholder='Seu LinkedIn' />

                    <button className='inputForm btnProximo' type='Submit'>
                        próximo
                    </button>
                </form>
            </div>
        </main>


)}

export default DadosPessoais;