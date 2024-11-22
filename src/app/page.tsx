'use client';

import {usePathname} from 'next/navigation';

export default function Home() {
  // Dev:
  // - Server: '/test'
  // - Client: '/test'

  // Build:
  // - Prerender: '/'
  // - Client: '/test'

  const pathname = usePathname();
  console.log(pathname);

  return (
    <main>
      <div>{pathname}</div>
    </main>
  );
}
