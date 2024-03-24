import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Link href="/login" passHref>
        <button style={{ padding: '10px 15px', margin: '10px', cursor: 'pointer', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', fontSize: '16px', textDecoration: 'none' }}>
          Login
        </button>
      </Link>
      <Link href="/register" passHref>
        <button style={{ padding: '10px 15px', margin: '10px', cursor: 'pointer', border: 'none', borderRadius: '5px', backgroundColor: '#28a745', color: 'white', fontSize: '16px', textDecoration: 'none' }}>
          Register
        </button>
      </Link>
    </main>
  );
}
