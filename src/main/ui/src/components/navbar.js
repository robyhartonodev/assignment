import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div>Navbar</div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/orders">Orders</Link>
                </li>
            </ul>
        </>
    )
}