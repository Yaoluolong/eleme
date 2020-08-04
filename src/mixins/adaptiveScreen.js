export const adaptiveScreen = {
  computed: {
    getScreenHeight() {
      return window.screen.availHeight
    },
    getScreenWeight() {
      return window.screen.availWidth
    }
  }
}
