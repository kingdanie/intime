import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar2 from "../components/sidebar2";
import { Fragment, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import TopBar from "../components/topbar";

export default function Test() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const layout = {
    width: "20%",
    color: "red",
  };
  return (
    // <div>
    //   <Head>
    //     <title>How For Messaging</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //     <aside>
    // <Sidebar  />
    //     </aside>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>
    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.tsx</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.card}
    //       >
    //         <h2 className='text-red-500'>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
    <>
      {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    */}
      <Sidebar2 sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* <div> */}

      <div className="flex flex-1 flex-col h-screen">
        {/* <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div> */}
        <TopBar setSidebarOpen={() => setSidebarOpen(true)} />

        <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
          {/* Primary column */}
          <section
            aria-labelledby="primary-heading"
            className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
          >
            <h1 id="primary-heading" className="sr-only">
              Home
            </h1>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <p className={styles.description}>
              Get started by editing{" "}
              <code className={styles.code}>pages/index.tsx</code>
            </p>

            {/* Your content */}
          </section>

          {/* Secondary column (hidden on smaller screens) */}
          <aside className="hidden lg:order-last lg:block lg:flex-shrink-0">
            <div className="relative flex h-full w-64 flex-col overflow-y-auto border-r border-gray-200 bg-gray-100">
              {/* Your content */}
              <p>Other section</p>
            </div>
          </aside>
        </main>
      </div>
      {/* </div> */}
    </>
  );
}
