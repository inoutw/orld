// Scroll smoothly to the top of the page

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// Get the scroll distance of the current page
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});

getScrollPosition(); // { x: 0, y: 215 }

// Enter full screen
function fullScreen() {
  let el = document.documentElement;
  let rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullScreen;
  //typeof rfs != "undefined" && rfs
  if (rfs) {
    rfs.call(el);
  } else if (typeof window.ActiveXObject !== "undefined") {
    let wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}
// Exit full screen
function exitScreen() {
  let el = document;
  let cfs =
    el.cancelFullScreen ||
    el.webkitCancelFullScreen ||
    el.mozCancelFullScreen ||
    el.exitFullScreen;
  //typeof cfs != "undefined" && cfs
  if (cfs) {
    cfs.call(el);
  } else if (typeof window.ActiveXObject !== "undefined") {
    let wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}
