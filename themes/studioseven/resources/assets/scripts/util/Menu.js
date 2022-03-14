import gsap from 'gsap'

export default class Menu {
  constructor() {
    this.isHidden = false
    this.menuOpen = false
    this.isAnimating = false

    // this.bindMethods()
    this.getElems()
    this.init()
    this.addEvents()
    this.createTimeline()
    // this.onPageChange(window.location)

    setTimeout(() => {
      this.onPageChange({ href: window.location.href })
    }, 200)

  }

  bindMethods() {
  }

  getElems() {
    this.header = document.querySelector('.header')
    this.burger = document.querySelector('.h-main__burger')
    this.nav = document.querySelector('.h-main__mainNav')
    this.mainMobile = document.querySelector('.h-main__mainNav-mobile')
    this.$mainItems = this.mainMobile.querySelectorAll('.h-main__item')
    this.menuItems = []
    this.$mainItems.forEach((el) => {
      this.menuItems.push({
        el,
        state: 'inactive',
        hover: false,
        href: el.href
      })
    })
  }

  init () {
    this.mainMobile.style.transform = 'translate(0, -100%)'

    this.menuItems.forEach((item) => {
      if ('http:' + item.href === location.href) {
        item.el.classList.add('active')
      }
    })
  }

  addEvents() {
    this.toggler && this.toggler.addEventListener('click', this.toggle)

    this.burger.addEventListener('click', () => {
      this.toggle()
    })
  }

  toggle() {
    if (this.isAnimating) return

    if (this.menuOpen) this.close()
    else this.open()
  }

  createTimeline() {
    this.hideTl = gsap.timeline({ paused: true })
    this.showMn = gsap.timeline({ paused: true })

    this.hideTl
      .to(this.burger, {
        y: 100,
        ease: 'power2.inOut',
        duration: 0.6
      }, 0)
      .to(this.burger, {
        y: -100,
        ease: 'power2.inOut',
        duration: 0.6
      }, 0)

    this.showMn
      .to(this.nav, {
        y: -100,
        ease: 'power2.inOut',
        duration: 0.6
      }, 0)
      .to(this.nav, {
        y: 0,
        ease: 'power2.out',
        duration: 0.6
      }, 0)

    this.showTl = gsap.timeline({ paused: true })
    this.hideMn = gsap.timeline({ paused: true })

    this.showTl
      .to(this.burger, {
        y: -100,
        ease: 'power2.inOut',
        duration: 0.6
      }, 0)
      .to(this.burger, {
        y: 100,
        ease: 'power2.out',
        duration: 0.6
      }, 0)

    this.hideMn
      .to(this.nav, {
        y: 0,
        ease: 'power2.out',
        duration: 0.6
      }, 0)
      .to(this.nav, {
        y: -500,
        ease: 'power2.inOut',
        duration: 0.6,
        stagger: -0.05
      }, 0)
  }

  hide() {
    this.isHidden = true
    this.showTl.pause()
    this.hideTl.invalidate()
    this.hideTl.restart()
  }

  show() {
    this.isHidden = false
    this.hideTl.pause()
    this.showTl.invalidate()
    this.showTl.restart()
  }

  hideMain() {
    this.showMn.pause()
    this.hideMn.invalidate()
    this.hideMn.restart()
  }

  showMain() {
    this.hideMn.pause()
    this.showMn.invalidate()
    this.showMn.restart()
  }

  open(quick = false) {
    if (this.isAnimating) return false

    return new Promise((resolve) => {
      this.menuOpen = true
      this.menuOpening(quick).then(resolve())
    })
  }

  close(quick = false) {
    if (this.isAnimating) return false

    return new Promise((resolve) => {
      this.menuOpen = false
      this.menuClosing(quick).then(resolve())
    })
  }

  menuOpening(quick) {
    return new Promise((resolve) => {
      this.isAnimating = true
      const tl = gsap.timeline({
        onComplete: () => {
          this.isAnimating = false
          resolve()
        }
      })

      tl.addLabel('start', 0)

      // eslint-disable-next-line prefer-reflect
      this.mainMobile.classList.add('active')
      this.burger.classList.add('burger-cross')
      
      const closePosition = quick ? '-=0.45' : '-=0.35'

      tl.fromTo(this.mainMobile, {
        yPercent: -100
      }, {
        duration: 1,
        ease: 'power2.inOut',
        y: 0,
        yPercent: 0
      }, closePosition)

      this.menuItems.forEach((element) => {
        tl.fromTo(element.el, {
          opacity: 0,
          y: 30
        }, {
          duration: 0.5,
          ease: 'power2.inOut',
          y: 0,
          opacity: 1
        }, closePosition)
      });
    })
  }

  menuClosing(quick = false) {
    this.isAnimating = true

    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          this.mainMobile.classList.remove('active')
          this.isAnimating = false
          resolve()
        }
      })

      tl.addLabel('start', 0)

      this.burger.classList.remove('burger-cross')

      const closePosition = quick ? '-=0.35' : '-=0.30'

      this.menuItems.forEach((element) => {
        tl.to(element.el, {
          duration: 0.4,
          ease: 'power2.in',
          y: -30,
          opacity: 0
        }, closePosition)
      });

      tl.fromTo(this.mainMobile, {
        y: 0,
        yPercent: 0
      }, {
        duration: 0.5,
        ease: 'power2.in',
        yPercent: -100
      }, closePosition)
    })
  }


  scroll() {
    if (window.scrollY > 100 && this.isHidden) {
      this.show()
      this.hideMain()
    }
      
    if (window.scrollY <= 100 && !this.isHidden) {
      this.hide()
      this.showMain()
    }
  }

  onPageChange(location) {
    this.menuItems.forEach((item) => {
      if ('http:' + item.href === location.href) {
        item.el.classList.add('active')
      } else {
        item.el.classList.remove('active')
      }
    })

    if (this.menuOpen) {
      this.close()
    }
  }
}
