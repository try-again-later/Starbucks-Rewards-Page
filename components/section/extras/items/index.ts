import freebies from './freebies';
import order from './order';
import bonus from './bonus';

export type ExtrasItemDetails = {
  title: string;
  description: string;
  image: string;
};

export type ExtrasItem = {
  title: string;
  description: string;
  thumbnail: string;
  details: ExtrasItemDetails[];
};

const items: ExtrasItem[] = [freebies, order, bonus];

export default items;
