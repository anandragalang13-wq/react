// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Selamat Datang di Portal Sekolah</h1>
      <h3><Link href="/library">Perpustakaan</Link></h3>
      <h3><Link href="/teacher">Guru</Link></h3>
      <hr />

      <h1>Welcome to Home</h1>
      <h3><Link href="/profile">Profile</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/blogs">Blogs</Link>
        <br />
        <Link href="/blogs/first">First Blog</Link>
        <br />
        <Link href="/blogs/second">Second Blog</Link>
        <br />
        <Link href="/products">Products</Link>
        <br />
        <Link href="/products/1">Product 1 Details</Link>
        <br />
        <Link href="/products/1/reviews/101">Product 1 Review 101</Link>

      </h3>
    </div>
    )
}