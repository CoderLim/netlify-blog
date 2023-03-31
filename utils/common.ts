/**
 * 循环依次获取图片地址
 * @param index 获取第几个
 * @param start 从第几个开始
 */
export function getSeriesImageURL(index: number, start = 0) {
  const images = [
    'https://css-tricks.com/wp-content/uploads/2023/02/react-facepalm.png',
    'https://css-tricks.com/wp-content/uploads/2023/02/clock-sin-cos-trig.png',
    'https://css-tricks.com/wp-content/uploads/2023/02/wordpress-fonts.png',
    'https://css-tricks.com/wp-content/uploads/2018/12/guide-flexbox.png',
    'https://css-tricks.com/wp-content/uploads/2020/06/guide-mediaq.png',
    'https://css-tricks.com/wp-content/uploads/2013/09/table-guide.png',
    'https://css-tricks.com/wp-content/uploads/2014/09/guide-centering.png',
    'https://css-tricks.com/wp-content/uploads/2020/06/dark-mode-guide.png',
    'https://css-tricks.com/wp-content/uploads/2015/05/svg-fallback-guide.png',
    'https://css-tricks.com/wp-content/uploads/2022/02/cascade-layers-guide.png',
    'https://css-tricks.com/wp-content/uploads/2020/02/data-attribute-guide.png',
    'https://css-tricks.com/wp-content/uploads/2016/09/guide-color.png',
    'https://css-tricks.com/wp-content/uploads/2020/05/calc-functions.png',
    'https://css-tricks.com/wp-content/uploads/2019/09/custom-properties-code.png',
    'https://css-tricks.com/wp-content/uploads/2020/02/buttons-links-guide.png',
    'https://css-tricks.com/wp-content/uploads/2020/11/css-gradient.png',
    'https://css-tricks.com/wp-content/uploads/2020/02/console-commands-1.png',
    'https://css-tricks.com/wp-content/uploads/2020/05/resp-images-thumb.png',
    'https://css-tricks.com/wp-content/uploads/2020/10/guide-media-queries.png',
    'https://css-tricks.com/wp-content/uploads/2020/03/calc-guide.png',
    'https://css-tricks.com/wp-content/uploads/2015/05/svg-fallback-guide.png',
    'https://css-tricks.com/wp-content/uploads/2018/12/grid-guide.png',
    'https://css-tricks.com/wp-content/uploads/2017/03/guide-jquery.png',
  ];

  return images[(start + index) % images.length];
}
