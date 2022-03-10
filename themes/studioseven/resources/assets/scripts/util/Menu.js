import store from './store'
import gsap from 'gsap'

export default class Menu {
  constructor() {
    this.isHidden = false

    // this.bindMethods()
    this.getElems()
    this.createTimeline()
  }

  bindMethods() {
  }

  getElems() {
    this.header = document.querySelector('.header')
    this.burger = document.querySelector('.h-main__burger')
    this.nav = document.querySelector('.h-main__mainNav')
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
}
