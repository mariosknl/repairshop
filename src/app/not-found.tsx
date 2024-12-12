import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          src="/images/not-found-1024x1024.png"
          className="m-0 rounded-xl"
          width={300}
          height={300}
          sizes="300px"
          alt="page-not-found"
          priority={true}
          title="Page Not Found"
        />
      </div>
    </div>
  );
}
