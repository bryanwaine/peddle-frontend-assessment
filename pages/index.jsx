import { useRouter } from 'next/router';
import { useEffect } from 'react';
import metricks from '../public/metricks.png';
import Image from 'next/image';

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      router.push('/comingsoon');
      return
    }, 1000);
  }, []);
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '32px',
        backgroundImage: 'url(Path_1.png)',
        backgroundSize: 'cover',
        color: '#FFFFFF',
      }}
    >
      <Image src={metricks} alt='Metricks' width={500} height={450} />
    </div>
  );
}
