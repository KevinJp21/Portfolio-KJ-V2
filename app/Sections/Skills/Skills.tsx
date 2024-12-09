//Logos
import Java_Logo from '~/assets/Logos/Java.webp'
import JavaScript_Logo from '~/assets/Logos/JavaScript.webp'
import ReactJS_Logo from '~/assets/Logos/React.webp'
import RemixLogo from '~/assets/Logos/Remix.webp'
import PHP_Logo from '~/assets/Logos/PHP.webp'
import TypeScript_Logo from '~/assets/Logos/TypeScript.webp'
import Angular_Logo from '~/assets/Logos/Angular.webp'
import HTML_Logo from '~/assets/Logos/HTML.webp'
import CSS_Logo from '~/assets/Logos/CSS.webp'
import ExpressJS_Logo from '~/assets/Logos/ExpressJS.webp'
import jQuery_Logo from '~/assets/Logos/jQuery.webp'
import NodeJS_Logo from '~/assets/Logos/NodeJS.webp'
import MySQL_Logo from '~/assets/Logos/MySQL.webp'
import Python_Logo from '~/assets/Logos/Python.webp'
import TensorFlow_Logo from '~/assets/Logos/TensorFlow.webp'
import Keras_Logo from '~/assets/Logos/Keras.webp'
import Flask_Logo from '~/assets/Logos/Flaks.webp'
import SQLA_Logo from '~/assets/Logos/SQLA.webp'
import NLTK_Logo from '~/assets/Logos/NLTK.webp'
import SciKitLearn_Logo from '~/assets/Logos/ScikitLearn.webp'
import Matplotlib_Logo from '~/assets/Logos/Matplotlib.webp'
import Seaborn_Logo from '~/assets/Logos/Seaborn.webp'
import Pandas_Logo from '~/assets/Logos/Pandas.webp'
import Numpy_Logo from '~/assets/Logos/numpy.webp'
import npm_Logo from '~/assets/Logos/npm.webp'
import Vite_Logo from '~/assets/Logos/Vite.webp'
import pnpm_Logo from '~/assets/Logos/pnpm.webp'
import Git_Logo from '~/assets/Logos/Git.webp'

import Tools from './Tools';
import { useTranslation } from 'react-i18next';
import './Skills.css';

export default function Skills() {
    const { t } = useTranslation();

    const Tool = [{ id: 1, name: 'Java', Logo: Java_Logo },
    { id: 2, name: 'JavaScript', Logo: JavaScript_Logo },
    { id: 3, name: 'PHP', Logo: PHP_Logo },
    { id: 4, name: 'TypeScript', Logo: TypeScript_Logo },
    { id: 5, name: 'React', Logo: ReactJS_Logo },
    { id: 6, name: 'Remix', Logo: RemixLogo },
    { id: 7, name: 'Angular', Logo: Angular_Logo },
    { id: 8, name: 'HTML', Logo: HTML_Logo },
    { id: 9, name: 'CSS', Logo: CSS_Logo },
    { id: 10, name: 'ExpressJS', Logo: ExpressJS_Logo },
    { id: 11, name: 'jQuery', Logo: jQuery_Logo },
    { id: 12, name: 'NodeJS', Logo: NodeJS_Logo },
    { id: 13, name: 'MySQL', Logo: MySQL_Logo },
    { id: 14, name: 'Vite', Logo: Vite_Logo },];

    const ToolIA = [{ id: 1, name: 'Python', Logo: Python_Logo },
    { id: 2, name: 'TensorFlow', Logo: TensorFlow_Logo },
    { id: 3, name: 'Keras', Logo: Keras_Logo },
    { id: 4, name: 'NLTK', Logo: NLTK_Logo },
    { id: 5, name: 'SQLAlchemy', Logo: SQLA_Logo },
    { id: 6, name: 'Flask', Logo: Flask_Logo },
    { id: 7, name: 'SciKitLearn', Logo: SciKitLearn_Logo },
    { id: 8, name: 'Matplotlib', Logo: Matplotlib_Logo },
    { id: 9, name: 'Seaborn', Logo: Seaborn_Logo },
    { id: 10, name: 'Pandas', Logo: Pandas_Logo },
    { id: 11, name: 'NumPy', Logo: Numpy_Logo }
    ];

    const OthersTools = [{ id: 1, name: 'npm', Logo: npm_Logo },
    { id: 2, name: 'pnpm', Logo: pnpm_Logo },
    { id: 3, name: 'Git', Logo: Git_Logo }
    ]

    return (
        <section className="ContainerSkills" id="Skills">
            <div className="HeaderSkills">
                <h2>{t('Skills.title')}</h2>
            </div>
            <h3 className='toolCategory'>{t('Skills.SubTitle1')}</h3>
            <div className="ContentSkills">
                {Tool.map((Tool) => (
                    <Tools key={Tool.id} Logo={Tool.Logo} name={Tool.name} />
                ))}
            </div>

            <h3 className='toolCategory'>{t('Skills.SubTitle2')}</h3>
            <div className="ContentSkills">
                {ToolIA.map((Tool) => (
                    <Tools key={Tool.id} Logo={Tool.Logo} name={Tool.name} />
                ))}
            </div>

            <h3 className='toolCategory'>{t('Skills.SubTitle3')}</h3>
            <div className="ContentSkills">
                {OthersTools.map((Tool) => (
                    <Tools key={Tool.id} Logo={Tool.Logo} name={Tool.name} />
                ))}
            </div>
        </section>

    )
}

