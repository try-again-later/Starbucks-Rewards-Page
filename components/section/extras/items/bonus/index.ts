import type { ExtrasItem } from '..';

import Thumbnail from './thumbnail.jpg';
import DetailsImage1 from './1.jpg';
import DetailsImage2 from './2.jpg';
import DetailsImage3 from './3.jpg';

const bonus: ExtrasItem = {
  title: 'Get to free faster',
  description: 'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.',
  thumbnail: Thumbnail,
  details: [
    {
      title: 'Bonus Star challenges',
      description: 'Rack up the Stars with regular opportunities to get rewarded for what you love.',
      image: DetailsImage1,
    },
    {
      title: 'Double Star Days',
      description: 'Watch for those special days where you’ll earn twice the Stars on almost everything.',
      image: DetailsImage2,
    },
    {
      title: 'Member-only games',
      description: 'Play for a chance to win exclusive prizes, free food and drinks, and more.',
      image: DetailsImage3,
    },
  ],
};

export default bonus;
