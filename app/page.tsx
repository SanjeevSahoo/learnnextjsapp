"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  return (
    <div>
      Hello world
      <Link href="/dashboard">Go to Dashboard</Link>
      <br />
      <button
        onClick={() => {
          router.push("/dynamicroutes/1");
        }}
      >
        Go to Dynamic Route 1
      </button>
    </div>
  );
}

export default Home;
