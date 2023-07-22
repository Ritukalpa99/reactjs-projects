import Link from "next/link";

function AboutUs() {
    return <>
    <ul>
        <li>
            <Link href="/aboutus/1">
            Yash
            </Link>
        </li>
        <li>
            <Link href="/aboutus/2">
            Vaibhav
            </Link>
        </li>
        <li>
            <Link href="/aboutus/3">
            Suresh
            </Link>
        </li>
    </ul>
    <Link href="/">Back</Link>
    </>
}

export default AboutUs;