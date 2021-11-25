const pageMain = document.querySelector('.page-main');

const menuButton = document.querySelector('.page-header-top-bar__menu-button');
const pageNavDarken = document.querySelector('.page-nav-darken');

const topBar = menuButton.querySelector('.burger-icon__top');
const middleBar = menuButton.querySelector('.burger-icon__middle');
const bottomBar = menuButton.querySelector('.burger-icon__bottom');

const submenu = document.querySelector('.menu-sub-nav');
const submenuOpenButton = document.querySelector('.nav-list__open-submenu-button');
const submenuCloseButton = document.querySelector('.menu-sub-nav__go-back-button');

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
  topBar.animate(
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
  middleBar.animate(
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
  bottomBar.animate(
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

let menuOpened = false;

const closeMenu = () => {
  menuOpened = false;
  submenu.classList.remove('menu-sub-nav_toggled');
  menuButton.classList.remove('page-header__menu-button_toggled');
  pageNavDarken.classList.remove('page-nav-darken_toggled');

  document.body.style.overflowY = 'auto';
};

const openMenu = () => {
  menuOpened = true;
  menuButton.classList.add('page-header__menu-button_toggled');
  pageNavDarken.classList.add('page-nav-darken_toggled');

  document.body.style.overflowY = 'hidden';
};

const toggleMenu = () => {
  if (menuOpened) {
    closeMenu();
  } else {
    openMenu();
  }
};

menuButton.addEventListener('click', () => {
  topBarAnimation();
  middleBarAnimation();
  bottomBarAnimation();

  toggleMenu();
});

pageMain.addEventListener('click', () => {
  if (menuOpened) {
    topBarAnimation();
    middleBarAnimation();
    bottomBarAnimation();

    closeMenu();
  }
});

submenuOpenButton.addEventListener('click', () => {
  submenu.classList.add('menu-sub-nav_toggled');
});

submenuCloseButton.addEventListener('click', () => {
  submenu.classList.remove('menu-sub-nav_toggled');
});
