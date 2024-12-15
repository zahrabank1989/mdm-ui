// src/pages/_app.js or src/pages/_app.tsx
import '../styles/globals.css'; // Make sure the path is correct

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
