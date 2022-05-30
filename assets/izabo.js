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
  var scrollPoint = -1;
  if (document.getElementsByClassName("banner").length > 0) {
    var imageHeight = document.getElementsByClassName("banner")[0].clientHeight;
    var headerHeight = document.getElementsByTagName("sticky-header")[0].clientHeight;
    scrollPoint = imageHeight - headerHeight;
  }
  if (window.scrollY > scrollPoint) {
    document.documentElement.dataset.pastheader = true;
  } else {
    document.documentElement.dataset.pastheader = false;
  }
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();

