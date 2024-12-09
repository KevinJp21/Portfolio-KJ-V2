import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteLoaderData
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json, LoaderFunctionArgs } from "@remix-run/node";

import "./styles.css";
import font from "~/assets/SF_Fonts/font.css?url";

import i18nServer from "./modules/i18n.server";
import { useEffect, useState } from "react";
import { useChangeLanguage } from "remix-i18next/react";

export const handle = { i18n: ["translation"] }


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: font },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio | Kevin Julio" },
    { name: "description", content: "Soy Kevin Julio Pineda (KevinJp21), ingeniero de sistemas especializado en desarrollo frontend Descubre mis trabajos y habilidades en mi portfolio." },
    { name: "keywords", content: "Soy Kevin Julio Pineda (KevinJp21), ingeniero de sistemas especializado en desarrollo frontend Descubre mis trabajos y habilidades en mi portfolio." }
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  let locale = await i18nServer.getLocale(request);
  return json({ locale });
}


export function Layout({ children }: { children: React.ReactNode }) {
  let loaderData = useRouteLoaderData<typeof loader>("root");
  return (
    <html lang={loaderData?.locale ?? "es"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  let { locale: initialLocale } = useLoaderData<typeof loader>();
  const [locale, setLocale] = useState(initialLocale);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = sessionStorage.getItem('lng');
      if (storedLanguage) {
        setLocale(storedLanguage)
      }
    }
  }, [initialLocale]);

  useChangeLanguage(locale);
  return <Outlet />;
}
