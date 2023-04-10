import { SiteGroupData } from '../../types';

const data: SiteGroupData[] = [
  {
    title: '最新资讯',
    imgSeed: 0,
    children: [
      {
        title: 'HackerNews',
        href: 'https://news.ycombinator.com/',
        description: '科技社区，讨论技术和创新的平台',
      },
      {
        title: 'bestofjs',
        href: 'https://bestofjs.org/',
        description: '介绍了流行的开源项目，Web 趋势',
      },
    ],
  },
  {
    title: '技术社区',
    imgSeed: 4,
    children: [
      {
        title: '掘金社区',
        href: 'https://juejin.cn/',
        description: '国内比较有影响力的技术社区',
      },
      {
        title: 'dev.to',
        href: 'https://dev.to/',
        description: '国外程序员在讨论什么，这里有答案',
      },
      {
        title: 'v2ex',
        href: 'https://www.v2ex.com/',
        description:
          '创意工作者的社区。讨论编程、设计、硬件、游戏等令人激动的话题。',
      },
    ],
  },
  {
    title: '技术博客',
    imgSeed: 8,
    children: [
      {
        title: '鑫空间，鑫生活',
        href: 'https://www.zhangxinxu.com/wordpress/',
        description: 'CSS 大佬的博客',
      },
      {
        title: '科技爱好者',
        href: 'https://www.ruanyifeng.com/blog/weekly/',
        description: '阮一峰大佬的博客',
      },
      {
        title: '阿里妈妈前端快爆',
        href: 'https://www.zhihu.com/column/mm-fe',
        description: '看看有哪些新鲜事',
      },
      {
        title: 'CSS Trick',
        href: 'https://css-tricks.com/',
        description: '专注于 CSS 的平台，内容还不错',
      },
      {
        title: 'Chrome 官方博客',
        href: 'https://developer.chrome.com/blog/',
        description: '可以看到 chrome 新发布的特性',
      },
    ],
  },
  {
    title: '技术规范',
    imgSeed: 12,
    children: [
      {
        title: 'MDN',
        href: 'https://developer.mozilla.org/zh-CN/',
        description: 'Web 技术文档，包含 HTML、CSS、Javascript',
      },
      {
        title: 'ecma262',
        href: 'https://tc39.es/ecma262/',
        description: '最新最准确的 javascript 说明',
      },
      {
        title: 'caniuse',
        href: 'https://caniuse.com/',
        description: '查看特性的兼容性，也可以看到最新特性有哪些',
      },
    ],
  },
];

export default data;
