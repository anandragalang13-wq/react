//src/app/teacher/page.tsx
import Link from "next/link";

export default function DaftarGuru() {
    return (
        <main>
            <table border={1} cellPadding={2} cellSpacing={1}>
                <thead>
                    <tr>
                        <th>Daftar Nama Guru</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><Link href="/teacher/Budi">Budi</Link></td>
                    </tr>
                    <tr>
                        <td><Link href="/teacher/Ani">Ani</Link></td>
                    </tr>
                    <tr>
                        <td><Link href="/teacher/Dedi">Dedi</Link></td>
                    </tr>
                </tbody>
            </table>

            <br />
            <button><Link href="/">Kembali ke Beranda</Link></button>
        </main>
    );
}