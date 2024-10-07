import React from 'react'
import './Footer.css'
import { GitHubIcon, LinkedInIcon, ContactIcon } from '../../assets/Icons/icons'

//Translation
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="ContentFooter">
                <span>{t('Footer.author')}</span>
                <ul className='FooterList'>
                    <li><a title='GitHub' className='LinkFooter LinkSocials' href='https://github.com/KevinJp21' target="_blank"><GitHubIcon /></a></li>
                    <li><a title='Linkedin' className='LinkFooter LinkSocials' href='https://www.linkedin.com/in/kevin-julio-667280240/' target="_blank"><LinkedInIcon /></a></li>
                    <li><a title='Contacto' className="LinkFooter Contact" href="mailto: kevinjp821@gmail.com" aria-label="Contact"><ContactIcon /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer