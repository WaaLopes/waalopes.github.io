import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wagner Lopes - Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-4 p-4 bg-slate-800 min-h-screen items-center text-center">
        <h1 className="text-6xl text-gray-300 h-min">Wagner Lopes</h1>
        <h2 className="text-4xl text-gray-500 h-min">Software Engineer</h2>
      </main>
    </div>
  );
}
