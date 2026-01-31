import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My E-Commerce App</h1>
      <Link href="/products">View Products</Link>
    </div>
  );
}
