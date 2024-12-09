import { useParams } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Layout from "~/Layout/Layout";
import { MetaFunction } from "@remix-run/node";
import '~/content/posts/articels.css'
import '~/Sections/Home/Projects/ToolBadge.css'
import DocMeImg from '~/assets/Images/docme.webp'
import ApiResidenciasImg from '~/assets/Images/ApiResidencias.webp'
import ApiOrdersImg from '~/assets/Images/ApiOrdenes.webp'
import ChatbotImg from '~/assets/Images/docme-chatbot.webp'
import RestauranteSCocinaImg from '~/assets/Images/chikos-gourmet.webp'
import { useEffect } from "react";

export const meta: MetaFunction = () => {
    const { t } = useTranslation();
    const params = useParams();
    const slug = params.slug || '';

    const getTranslationKey = (slug: string) => {
        const projectKeys: { [key: string]: string } = {
            'DocMe': 'P_DocMe',
            'APIResidences': 'P_APIResi',
            'APIOrders': 'P_APIOrders',
            'Chatbot': 'P_Chatbot',
            'RestauranteSCocina': 'P_RestS'
        };
        return projectKeys[slug] || '';
    };

    const translationKey = getTranslationKey(slug);

    return [
        { title: translationKey ? t(`${translationKey}.seo.title`) : 'Proyecto no encontrado' }
    ];
}

export default function ProjectPage() {
    const { slug } = useParams();
    const { t } = useTranslation();

    // Obtener la clave de traducción basada en el slug
    const getTranslationKey = (slug: string) => {
        const projectKeys: { [key: string]: string } = {
            'DocMe': 'P_DocMe',
            'APIResidences': 'P_APIResi',
            'APIOrders': 'P_APIOrders',
            'Chatbot': 'P_Chatbot',
            'RestauranteSCocina': 'P_RestS'
        };

        return projectKeys[slug] || '';
    };

    const translationKey = getTranslationKey(slug || '');

    // Mapa de imágenes
    const projectImages: { [key: string]: string } = {
        'P_DocMe': DocMeImg,
        'P_APIResi': ApiResidenciasImg,
        'P_APIOrders': ApiOrdersImg,
        'P_Chatbot': ChatbotImg,
        'P_RestS': RestauranteSCocinaImg
    };

    // Usar useEffect para manipular el DOM
    useEffect(() => {
        const projectHeader = document.querySelector('.projectHeader');
        if (projectHeader && translationKey) {
            projectHeader.innerHTML = `
            <picture>
                <img class="imgProject" itemProp="image" src="${projectImages[translationKey]}" alt="Imagen del proyecto ${slug}" width="800px" height="450px" />
            </picture>
        `;
        }
    }, [translationKey, projectImages, slug]);


    return (
        <Layout>
            {translationKey ? (
                <article className={`project-content ${t(`${translationKey}.className`)}`}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: t(`${translationKey}.header`),
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: t(`${translationKey}.content`),
                        }}
                    />
                </article>
            ) : (
                <div>Proyecto no encontrado</div>
            )}
        </Layout>
    );
}
