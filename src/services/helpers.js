export class Storage {
  constructor(item, defaultValue) {
    this.item = item;
    this.defaultValue = defaultValue;
  }

  get() {
    return JSON.parse(localStorage.getItem(this.item)) || this.defaultValue;
  }

  add(payload) {
    const items = this.get();
    localStorage.setItem(this.item, JSON.stringify([
      ...items,
      payload,
    ]));
  }

  delete(id) {
    const items = this.get();
    localStorage.setItem(this.item, JSON.stringify(
      items.filter(item => item.id !== id)
    ));
  }
}
