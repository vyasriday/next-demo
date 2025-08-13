import Link from 'next/link'
export default function Page() {
  return (
    <nav>
      <Link href="/patternfly">Patternfly React Table</Link>
      <br/>
      <Link href="/rhds">RHDS Table</Link>
    </nav>
  )
}