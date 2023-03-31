export interface SiteData {
  title: string;
  href: string;
  description: string;
}

export interface SiteGroupData {
  title: string;
  children: SiteData[];
}
