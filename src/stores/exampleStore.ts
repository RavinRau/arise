class ExampleStore {
  exampleProperty = ''

  setExampleProperty(value: string) {
    this.exampleProperty = value
  }

  getExampleProperty() {
    return this.exampleProperty
  }
}

export const exampleStore = new ExampleStore()
