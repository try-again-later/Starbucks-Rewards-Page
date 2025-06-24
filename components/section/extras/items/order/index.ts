import type { ExtrasItem } from '..';

import Thumbnail from './thumbnail.jpg';
import DetailsImage1 from './1.jpg';
import DetailsImage2 from './2.jpg';

const order: ExtrasItem = {
  title: 'Order & pay ahead',
  description: 'Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.',
  thumbnail: Thumbnail,
  details: [
    {
      title: 'Tap, go.',
      description: 'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order.',
      image: DetailsImage1,
    },
    {
      title: 'Just for you',
      description: 'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.',
      image: DetailsImage2,
    },
  ],
};

export default order;
