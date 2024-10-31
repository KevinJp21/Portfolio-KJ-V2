//Imagenes
import DocMe from '~/assets/Images/docme.webp'
import RestauranteSCocina from '~/assets/Images/restaurantescocina.webp';
import ApiResidencias from '~/assets/Images/ApiResidencias.webp';
import ApiOrdenes from '~/assets/Images/ApiOrdenes.webp';
import DocMeChatbot from '~/assets/Images/docme-chatbot.webp';

//Iconos
import { LinkIcon, GitHubIcon, ReactJsIcon, MySQLIcon, PhpIcon, JavaScriptIcon, PythonIcon, FlaskIcon, TensorFlowIcon, SQLAlchemyIcon } from '~/assets/Icons/icons';

import { useTranslation } from 'react-i18next';
import { Link } from '@remix-run/react';
import ToolBadge from './ToolBadge';
import './Projects.css'


export default function Projects() {
    const { t } = useTranslation();

    const projects = [
        { id: 1, title: t('Projects.p1'), description: '1', img: DocMe, tool: [{ name: "ReactJS", icon: <ReactJsIcon /> }, { name: "ExpressJS" }, { name: "MySQL", icon: <MySQLIcon /> }], Git: 'https://github.com/KevinJp21/DocMe_ReactJS', demo: 'https://docme-two.vercel.app/', article: "/Projects/DocMe"},
        { id: 2, title: t('Projects.p2'), description: '2', img: ApiResidencias, tool: [{ name: 'PHP', icon: <PhpIcon /> }], Git: 'https://github.com/KevinJp21/ApiResidencia', demo: '', article: "/Projects/APIResidences" },
        { id: 3, title: t('Projects.p3'), description: '3', img: ApiOrdenes, tool: [{ name: "JavaScript", icon: <JavaScriptIcon /> }, { name: "ExpressJS" }], Git: 'https://github.com/KevinJp21/API_Gestion_Orden', demo: '',  article: "/Projects/APIOrders" },
        { id: 4, title: t('Projects.p4'), description: '4', img: DocMeChatbot, tool: [{ name: 'Python', icon: <PythonIcon /> }, { name: 'Flask', icon: <FlaskIcon /> }, { name: 'TensorFlow', icon: <TensorFlowIcon /> }, { name: 'SQLAlchemy', icon: <SQLAlchemyIcon /> }, { name: "MySQL", icon: <MySQLIcon /> }], Git: 'https://github.com/KevinJp21/ChatBot', demo: '' , article: "/Projects/Chatbot"},
        { id: 5, title: t('Projects.p5'), description: '5', img: RestauranteSCocina, tool: [{ name: "ReactJS", icon: <ReactJsIcon /> }, { name: 'PHP', icon: <PhpIcon /> }, { name: "MySQL", icon: <MySQLIcon /> }], Git: 'https://github.com/KevinJp21/RestauranteSCocina-ReactJS', demo: 'https://restaurantescocina.netlify.app/', article: "/Projects/RestauranteSCocina"}
    ];



    return (
        <section className="ContainerProjects" id='Projects'>
            <div className="HeaderProjects">
                <h2>{t('Projects.title')}</h2>
            </div>
            <div className="ContentProjects">
                {projects.map((project) => (
                    <div key={project.id} className={`CardProject Card${project.id}`}>
                        {project.img && <img decoding="async" src={project.img} alt={project.title} loading='lazy'/>}
                        <div className="contentCard">
                            <div className="HeaderCard">
                                <a title='DemoProject' className="IconsCards" target="-blank" href={project.demo}><LinkIcon /></a>
                            </div>
                            <div className="FooterCard">
                                <div className="TitleCard">
                                    <Link to={`${project.article}`}><h3>{project.title}</h3></Link>
                                    <ul className="ToolsWrapper">
                                        {project.tool && project.tool.map((tool, index) => (
                                            <ToolBadge key={index} icon={tool.icon} name={tool.name} className={tool.name} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="LinkProject">
                                    <a title='RepositoryGitHub' target="-blank" href={project.Git}><GitHubIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

