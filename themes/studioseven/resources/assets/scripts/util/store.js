export default {
  isFirstLoaded: false,
  isMobile: null,
  smoothScroll: null,
  panel: null,
  animations: [],
  clamp: (min, max, v) => Math.min(Math.max(v, min), max)
}
