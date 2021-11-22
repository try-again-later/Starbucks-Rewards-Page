/**
 * Copies ms-tile icons to dist folder.
 * (Parcel does not recognize browserconfig file dependencies.)
 */

const fs = require('fs');
const path = require('path');

const iconsFolder = path.resolve(__dirname, './src/img/favicon/');
const distFolder = path.resolve(__dirname, './dist/');

const iconsToCopy = [
  'mstile-70x70.png',
  'mstile-144x144.png',
  'mstile-150x150.png',
  'mstile-310x150.png',
  'mstile-310x310.png',

  // also copy these ones just in case
  'favicon.ico',
  'apple-touch-icon.png',
];

iconsToCopy.forEach((iconName) => {
  fs.copyFile(path.resolve(iconsFolder, iconName), path.resolve(distFolder, iconName), (error) => {
    if (error) {
      throw error;
    }
  });
});
