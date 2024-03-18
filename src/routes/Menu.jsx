import logo from '../assets/imagens/logo.png'
import dadosPessoais from '../assets/imagens/dadosPessoais.png'
import educacao from '../assets/imagens/educacao.png'
import xProfissional from '../assets/imagens/expProfissionais.png'
import goals from '../assets/imagens/metas.png'
import skills from '../assets/imagens/skills.png'
import download from '../assets/imagens/download.png'
import '../assets/css/Menu.css'
import { Link, useLocation } from 'react-router-dom'

function Menu() {
    const location = useLocation();

    return (

        <div className="menu">
            <div className="header">
                 <img className='logotipo' src={logo} alt='Logotipo Curriculum Generator'></img>
                 <h1 className='title'>Free Curriculum<br/> Generator</h1>
            </div>

            <div className="menuItems">
                <Link to={'/'} className={`link ${location.pathname === '/' ? 'selected' : ''}`}>
                    <div className="dadosPessoais">
                        <img className='iconMenu' src={dadosPessoais} alt="ícone do menu, dados pessoais" />
                        <span>Dados Pessoais</span>
                    </div>
                </Link>

                <Link to={'/educacao'} className={`link ${location.pathname === '/educacao' ? 'selected' : ''}`}>
                    <div className="educacao">
                        <img className='iconMenu' src={educacao} alt="ícone do menu, educação" />
                        <span>Educação</span>
                    </div>
                </Link>

                <Link to={'/xProfissionais'} className={`link ${location.pathname === '/xProfissionais' ? 'selected' : ''}`}>
                    <div className="xProfissional">
                        <img className='iconMenu' src={xProfissional} alt="ícone do menu, experiências profissionais" />
                        <span>Experiências Profissionais</span>
                    </div>
                </Link>

                <Link to={'/metasProfissionais'} className={`link ${location.pathname === '/metasProfissionais' ? 'selected' : ''}`}>
                    <div className="goals">
                        <img className='iconMenu' src={goals} alt="ícone do menu, metas profissionais" />
                        <span>Metas Profissionais</span>
                    </div>
                </Link>

                <Link to={'/habilidades'} className={`link ${location.pathname === '/habilidades' ? 'selected' : ''}`}>
                    <div className="skills">
                        <img className='iconMenu' src={skills} alt="ícone do menu, habilidades" />
                        <span>Habilidades</span>
                    </div>
                </Link>

                <Link to={'/download'} className={`link ${location.pathname === '/download' ? 'selected' : ''}`}>
                    <div className="download">
                        <img className='iconMenu' src={download} alt="ícone do menu, download" />
                        <span>Download</span>
                    </div>
                </Link>
            </div>
        </div>
)}

export default Menu;