import type { ExtrasItem } from '..';

import Thumbnail from './thumbnail.jpg';
import DetailsImage1 from './1.jpg';
import DetailsImage2 from './2.jpg';
import DetailsImage3 from './3.jpg';

const freebies: ExtrasItem = {
  title: 'Fun freebies',
  description: 'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.',
  thumbnail: Thumbnail,
  details: [
    {
      title: 'Free food, drinks & more',
      description: 'Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.',
      image: DetailsImage1,
    },
    {
      title: 'Complimentary birthday treat',
      description: 'Every year on your birthday get a free drink or food item of your choice.',
      image: DetailsImage2,
    },
    {
      title: 'Brewed coffee & tea refills on us',
      description: 'More Caffè Verona® Blend, please. We’re happy to refill your hot cup while you’re in the store. Just ask.',
      image: DetailsImage3,
    },
  ],
};

export default freebies;
