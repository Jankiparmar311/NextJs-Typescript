import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js Project</title> {/* Set title for this page */}
        <meta name="description" content="Welcome to my Next.js project!" />
      </Head>
      <div className=" min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2  sm:items-start">
          <Link href="/dashboard">Go to dashboard page</Link>
        </main>
      </div>
    </>
  );
}
