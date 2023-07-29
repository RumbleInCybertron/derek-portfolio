import "@/app/styles/globals.css"
import Navbar from "@/app/components/global/Navbar"
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};

export default function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${currentPage === "Home"
    ? "Derek Haus - Designer, Developer, Investor."
    : `${currentPage} - Derek.Haus`
    }`;
  console.log("Current Page: ", currentPage);
  return (<>
    <Script
      id="Google Analytics"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer',${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`,
      }}
    />
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>

        <Link href="/favicon.ico" />
        <Link href="/favicon.ico" />
        <Link href="/favicon.ico" />
        <Link href="/static/favicon/site.webmanifest" />

        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://derek.haus/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://derek.haus/static/misc/og.png" // TODO: design/create/add og.png
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>
      <main>
        {children}
        <Navbar currentPage={currentPage} />
      </main>
    </div>
  </>
  )
};
