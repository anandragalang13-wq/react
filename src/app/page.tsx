// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Link href="/profile">Profile</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs List</Link>
        <Link href="/blogs/first-post">Sample Dynamic Blog (first-post)</Link>
        <Link href="/products">Products List</Link>
        <Link href="/products/1">Product 1 Details</Link>
        <Link href="/products/1/reviews/101">Product 1 Review 101</Link>
      </nav>
    </div>
  );
}