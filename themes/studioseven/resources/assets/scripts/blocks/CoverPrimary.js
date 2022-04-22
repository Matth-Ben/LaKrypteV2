import Block from './Block'

export default class CoverPrimary extends Block {
  onEnterCompleted() {
    super.onEnterCompleted()

    this.bindMethods()
  }

  bindMethods() {
    this.toggle = this.toggle.bind(this)
  }

  getElems() {
    super.getElems()

    this.title = this.el.querySelector('.title')
    this.image = this.el.querySelector('.b-cover-primary__body-thumbnail')
  }

  events() {
    super.events()
  
    // this.socialToggler.addEventListener('click', this.toggle)
    this.el.addEventListener('mousemove', this.moveContent.bind(this))
  }

  toggle() {}

  moveContent(e) {
    const x = e.clientX / this.el.offsetWidth
    const y = e.clientY / this.el.offsetHeight

    this.title.style.transform = 'translate(' + 10 * x + 'px, ' + 10 * y + 'px)'
    this.image.style.transform = 'translate(-' + 25 * x + 'px, -' + 25 * y + 'px)'
  }

  destroy() {
    super.destroy()
  }

  resize() {}

  scroll() {}

  update() {}
}
