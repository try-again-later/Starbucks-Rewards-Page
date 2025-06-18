export type Item = {
  title: string;
  description: string;
  starCount: number;
  image: string;
};

import ItemFor25Stars from './images/item-25.png';
import ItemFor50Stars from './images/item-50.png';
import ItemFor150Stars from './images/item-150.png';
import ItemFor200Stars from './images/item-200.png';
import ItemFor400Stars from './images/item-400.png';

export const items: Item[] = [
  {
    title: 'Customize your drink',
    description: 'Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.',
    starCount: 25,
    image: ItemFor25Stars,
  },
  {
    title: 'Brewed hot coffee, bakery item or hot tea',
    description: 'Pair coffee cake or an almond croissant with your fresh cup of hot brew.',
    starCount: 50,
    image: ItemFor50Stars,
  },
  {
    title: 'Handcrafted drink, hot breakfast or parfait',
    description: 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.',
    starCount: 150,
    image: ItemFor150Stars,
  },
  {
    title: 'Salad, sandwich or protein box',
    description: 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.',
    starCount: 200,
    image: ItemFor200Stars,
  },
  {
    title: 'Select merchandise or at-home coffee',
    description: 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.',
    starCount: 400,
    image: ItemFor400Stars,
  },
];
