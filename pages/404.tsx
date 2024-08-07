import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#111111] flex h-screen w-full items-center justify-center">
      <div className="flex justify-center mt-8 flex-col items-center text-gray-200 space-y-2">
        <h1 className="font-bold text-2xl">Not Found</h1>
        <Link href="/"
          className="border-gray-200 border-[1px] text-[14px] hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-white">
          ← Go back to home
        </Link>
      </div>
    </div>
  );
}
