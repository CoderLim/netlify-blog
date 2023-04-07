import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { ConfigProvider, theme } from 'antd';
import SiteAnalysis from '../components/SiteAnalysis';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <SiteAnalysis></SiteAnalysis> */}

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
