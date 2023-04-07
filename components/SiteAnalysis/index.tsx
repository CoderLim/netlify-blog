import React from 'react';

export default function SiteAnalysis() {
  return (
    <>
      {/* 百度统计 */}
      <script
        id="baidu-analytics"
        dangerouslySetInnerHTML={{
          __html: `
              var _hmt = _hmt || [];
              (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?c3d1ac0de7e186f86c1bca683ddf9f65";
                  var s = document.getElementsByTagName("script")[0]; 
                  s.parentNode.insertBefore(hm, s);
              })();
              `,
        }}
      ></script>

      {/* 谷歌统计  */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1FWZWK635D"
      ></script>
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-1FWZWK635D');`,
        }}
      ></script>
    </>
  );
}

// export default function SiteAnalysis() {
//   return (
//     <>
//       {/* 百度统计 */}
//       <script id="baidu-analytics" strategy="afterInteractive">
//         {`
//             var _hmt = _hmt || [];
//             (function() {
//                 var hm = document.createElement("script");
//                 hm.src = "https://hm.baidu.com/hm.js?c3d1ac0de7e186f86c1bca683ddf9f65";
//                 var s = document.getElementsByTagName("script")[0];
//                 s.parentNode.insertBefore(hm, s);
//             })();
//             `}
//       </script>

//       {/* 谷歌统计  */}
//       <script src="https://www.googletagmanager.com/gtag/js?id=G-1FWZWK635D"></script>
//       <script id="google-analytics" strategy="afterInteractive">
//         {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());

//             gtag('config', 'G-1FWZWK635D');
//         `}
//       </script>
//     </>
//   );
// }
