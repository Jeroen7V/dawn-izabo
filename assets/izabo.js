const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) { 
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  } 
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
  if (window.scrollY > 720) {
    document.documentElement.dataset.pastheader = true;
  } else {
    document.documentElement.dataset.pastheader = false;
  }
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();

