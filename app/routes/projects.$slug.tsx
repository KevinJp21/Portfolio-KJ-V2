import { useParams } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Layout from "~/Layout/Layout";
import { MetaFunction } from "@remix-run/node";

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
        { title: translationKey ? t(`${translationKey}.title`) : 'Proyecto no encontrado' }
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



    return (
        <Layout>
            {translationKey ? (
                <article className="project-content">
                    <h1>{t(`${translationKey}.title`)}</h1>
                    <p>{t(`${translationKey}.intro`)}</p>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: t(`${translationKey}.p1`),
                        }}
                    />
                </article>
            ) : (
                <div>Proyecto no encontrado</div>
            )}
        </Layout>
    );
}
