type Link = {
  title: string;
  href: string;
};

type LinkBlock = {
  title: string;
  links: Link[];
};

const linkBlocks: LinkBlock[] = [
  {
    title: 'About Us',
    links: [
      { title: 'Our Company', href: '#' },
      { title: 'Our Coffee', href: '#' },
      { title: 'Stories and News', href: '#' },
      { title: 'Starbucks Archive', href: '#' },
      { title: 'Investor Relations', href: '#' },
      { title: 'Customer Service', href: '#' },
    ],
  },
  {
    title: 'Careers',
    links: [
      { title: 'Culture and Values', href: '#' },
      { title: 'Inclusion, Diversity, and Equity', href: '#' },
      { title: 'College Achievement Plan', href: '#' },
      { title: 'Alumni Community', href: '#' },
      { title: 'U.S. Careers', href: '#' },
      { title: 'International Careers', href: '#' },
    ],
  },
  {
    title: 'Social Impact',
    links: [
      { title: 'People', href: '#' },
      { title: 'Planet', href: '#' },
      { title: 'Environmental and Social Impact Reporting', href: '#' },
    ],
  },
  {
    title: 'For Business Partners',
    links: [
      { title: 'Landlord Support Center', href: '#' },
      { title: 'Suppliers', href: '#' },
      { title: 'Corporate Gift Card Sales', href: '#' },
      { title: 'Office and Foodservice Coffee', href: '#' },
    ],
  },
  {
    title: 'Order and Pickup',
    links: [
      { title: 'Order on the App', href: '#' },
      { title: 'Order on the Web', href: '#' },
      { title: 'Delivery', href: '#' },
      { title: 'Order and Pickup Options', href: '#' },
      { title: 'Explore and Find Coffee for Home', href: '#' },
    ],
  },
];

export default linkBlocks;
