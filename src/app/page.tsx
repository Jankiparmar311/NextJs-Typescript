import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  sm:items-start">
       <Link href="/dashboard">Go to dashboard page</Link>
      </main>
    
    </div>
  );
}
