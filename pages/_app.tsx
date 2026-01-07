import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Cookies from 'js-cookie';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // The token is hardcoded and contains a flag in its payload
    const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZ3Vlc3QiLCJyb2xlIjoiY3VzdG9tZXIiLCJmbGFnIjoiVlZ7and3N19kM2MwZDNkXzV1Y2MzNTV2dWxseX0ifQ.A2bC3dE4fG5hI6jK7lM8nO9pQ0rS1tU2vW3xY4zA5bC';
    
    // Set the cookie (visible in browser DevTools)
    Cookies.set('token', jwtToken, { expires: 7 });
  }, []);

  return <Component {...pageProps} />;
}