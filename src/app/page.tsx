import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center max-w-5xl text-center mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 text-white w-4/5 sm:max-w-96 mx-auto sm:text-2xl">
          <h1 className="text-3xl font-bold">
            Marios&apos;s Computer
            <br />
            Repair Shop
          </h1>
          <address>
            555 Street Lane
            <br />
            Patras, GR 26300
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:2610123456" className="underline">
            2610-123456
          </Link>
        </div>
      </main>
    </div>
  );
}
