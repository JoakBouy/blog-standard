import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>This is the homepage</h1>
      <div>
        {!!user && (
          <div>
            <Image src={user.picture} alt={user.name} width={50} height={50} />
            <div>{user.email}</div>
          </div>
        )}
        {!!user ? (
          <Link href="/api/auth/logout?returnTo=/api/auth/login">
            Logout
          </Link>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>
    </div>
  );
}

function Image(props) {
  return <img {...props} />;
}