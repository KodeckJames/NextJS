import Link from 'next/link';
import { Search } from '@/components/search';
import { Counter } from '@/components/counter';

export default function Home() {
  return (
    <>
      <div className=" flex flex-col">
        <h1>Welcome Home!</h1>
        <Search />
        <Link href="/dashboardRSC">dashboardRSC</Link>
        <Link href="/about">about</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
        <Link href={'/profile'}>
          <button className=" bg-blue-700 rounded-lg p-2 cursor-pointer">
            Profile
          </button>
        </Link>
        <Link href={'/dashboardRSC'}>Dashboard</Link>
        <Counter/>
      </div>
    </>
  )
}
