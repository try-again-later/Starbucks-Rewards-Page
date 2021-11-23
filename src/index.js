const menuButton = document.querySelector('.page-header__menu-button');

const topBar = menuButton?.querySelector('.burger-icon__top');
const middleBar = menuButton?.querySelector('.burger-icon__middle');
const bottomBar = menuButton.querySelector('.burger-icon__bottom');

const playBackAndForth = (animation) => {
  if (animation === undefined) {
    return () => {};
  }

  let playingFirstTime = true;
  animation.pause();

  return () => {
    if (playingFirstTime) {
      playingFirstTime = false;
    } else {
      animation.reverse();
    }
    animation.play();
  };
};

const animationOptions = {
  direction: 'normal',
  fill: 'forwards',
  duration: 300,
  easing: 'ease-in-out',
};

const topBarAnimation = playBackAndForth(
  topBar?.animate(
    [
      {
        transform: 'none',
      },
      {
        transform: 'translateY(30%)',
        offset: 0.3,
      },
      {
        transform: 'translateY(30%)',
        offset: 0.6,
      },
      {
        transform: 'translateY(30%) rotate(45deg)',
      },
    ],
    animationOptions,
  ),
);

const middleBarAnimation = playBackAndForth(
  middleBar?.animate(
    [
      {
        transform: 'none',
      },
      {
        transform: 'none',
        offset: 0.3,
      },
      {
        transform: 'none',
        offset: 0.6,
      },
      {
        transform: 'rotate(45deg)',
      },
    ],
    animationOptions,
  ),
);

const bottomBarAnimation = playBackAndForth(
  bottomBar?.animate(
    [
      {
        transform: 'none',
      },
      {
        transform: 'translateY(-30%)',
        offset: 0.3,
      },
      {
        transform: 'translateY(-30%)',
        offset: 0.6,
      },
      {
        transform: 'translateY(-30%) rotate(135deg)',
      },
    ],
    animationOptions,
  ),
);

document.addEventListener('click', () => {
  menuButton.classList.toggle('page-header__menu-button_toggled');

  topBarAnimation();
  middleBarAnimation();
  bottomBarAnimation();
});
