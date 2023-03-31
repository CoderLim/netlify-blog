import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { ConfigProvider, theme } from 'antd';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <ConfigProvider
        theme={{
          token: {},
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}

export default MyApp;
