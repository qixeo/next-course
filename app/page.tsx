'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import ProductCard from './components/ProductCard';
// import { getServerSession } from 'next-auth';
// import { authOptions } from './api/auth/[...nextauth]/route';
// import qixeo from '@/public/images/qixeo.jpg';
// import HeavyComponent from './components/HeavyComponent';

export default function Home() {
  return (
    <main>
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];

          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Qixeo dashboard"
        fill
        className="object-cover"
        sizes="(max-width: 480) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
