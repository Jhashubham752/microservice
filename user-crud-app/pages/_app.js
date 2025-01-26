import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure bootstrap styles are imported
import NavigationBar from '@/layouts/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
