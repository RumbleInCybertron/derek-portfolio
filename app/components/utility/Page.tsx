import "@/app/styles/globals.css"
import Navbar from "@/app/components/global/Navbar"
import Head from "next/head";
import Link from "next/link";

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
  return (
    <div>
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
      </Head>
      <main>
        {children}
        <Navbar currentPage={currentPage} />
      </main>
    </div>
  )
};
