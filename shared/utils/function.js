export class FunctionUtil {
  static debounce(callback, wait, immediate) {
    let timeout
    return (...params) => {
      const context = this, args = [{ instance: params, parent: arguments }]
      const later = () => {
        timeout = null
        if (!immediate) callback.apply(context, args)
      }

      const callNow = immediate && !timeout

      clearTimeout(timeout)
      timeout = setTimeout(later, wait)

      if (callNow) callback.apply(context, args)
    }
  }
}
