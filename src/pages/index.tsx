import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ul>
        <li>cat1</li>
        <li>cat2</li>
        <li>cat3</li>
        <li>cat4</li>
        <li>cat5</li>
        <li>cat6</li>
        <li>cat7</li>
      </ul>
          </main>
  )
}
