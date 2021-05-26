class ListItem {
  constructor(v) {
    this._value = v;
    this.next = null;
    this.prev = null;
  }
  /**
   * 
   */
  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
  }
}

class LinkedList {
  constructor(...args) {
    this.head = null;
    this.tail = null;
    for (const item of args) {
      this.push(item);
    }
  }
  push(v) {
    const newItem = new ListItem(v);

    if (this.length === 0) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }

    return ++this.length;
  }
}

const list = new LinkedList(1, true, 3, "Alsace", false, 6);

/**
 * 
 */
// getCount(){
//   if(this.friends.length){
//     return this.friends.reduce((result,friend)=> result+friend.getCount(),this.count);
//   }
//   return this.count;
// }

