//src/app/library/page.tsx
import Link from "next/link";
export default function Library() {
    return (
        <main>
            <h1>Perpustakaan</h1>
            <table border={1} cellPadding={2} cellSpacing={1}>
                <thead>
                    <tr>
                        <th>Daftar Buku</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Matematika</td>
                    </tr>
                    <tr>
                        <td>DDK</td>
                    </tr>
                    <tr>
                        <td>IPAS</td>
                    </tr>
                    <tr>
                        <td>Bahasa Indonesia</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <button><Link href="/">Kembali ke Beranda</Link></button>
        </main>
    )
}