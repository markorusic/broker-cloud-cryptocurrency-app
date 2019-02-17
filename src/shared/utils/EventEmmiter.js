class EventEmmiter {
  constructor() {
    this.events = {}
  }

  addListener(eventName, handler) {
    if (this.events[eventName]) {
      this.events[eventName].push(handler)
    } else {
      this.events[eventName] = [handler]
    }
    return () => this.removeListener(eventName, handler)
  }

  removeListener(eventName, handler) {
    const eventHandlers = this.events[eventName]
    if (eventHandlers) {
      const index = eventHandlers.indexOf(handler)
      if (index > -1) {
        eventHandlers.splice(index, 1)
      }
    }
  }

  emit(eventName, ...args) {
    const eventHandlers = this.events[eventName]
    if (eventHandlers) {
      eventHandlers.forEach(eventHandler => {
        eventHandler(...args)
      })
    }
  }
}

export default EventEmmiter
