export interface SiteData {
  title: string;
  href: string;
  description: string;
}

export interface SiteGroupData {
  /**
   *  每个 child 都有配图，为了防止重复，可以指定从图片库第几个开始获取
   */
  imgSeed?: number;
  title: string;
  children: SiteData[];
}
