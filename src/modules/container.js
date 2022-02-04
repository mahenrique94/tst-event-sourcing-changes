class Container {
  constructor() {
    this.entries = new Map()
  }

  register(key, value, namespace = '') {
    if (namespace.trim().length > 0) {
      if (!this.entries.has(namespace)) {
        this.entries.set(namespace, new Map())
      }

      if (this.entries.get(namespace).has(key)) {
        throw new Error(`There is another value registed for ${namespace}.${key}`)
      }

      this.entries.get(namespace).set(key, value)
    } else {
      if (this.entries.has(value)) {
        throw new Error(`There is another value registed for ${key}`)
      }

      this.entries.set(key, value)
    }
  }

  get(key) {
    return this.entries.get(key)
  }
}

module.exports = Container
