const list = {
 head: {
  value: 1,
  next: {
   value: 2,
   next: {
    value: 3,
    next: {
     value: 4,
     next: {
      value: 5,
      next: null
     }
    }
   }
  }
 }
};

class Node {
 constructor(element) {
  this.element = element;
  this.next = null;
 }
}

class LinkedList {
 constructor() {
  this.head = null;
  this.size = 0;
 }

 add(element) {
  let node = new Node(element); //{ element : telur , next : null } , { element : garuda , next : null }
  let current;

  if (this.head == null) {
   this.head = node; //{ element : kacang , next : null }
  } else {
   current = this.head; //shallow copy
   //current =  { element: 'kacang', next: null }

   //current =  { element: 'kacang',
   // next:  { element: 'telur', next: null }

   while (current.next) {
    current = current.next;
    // current = { element: 'telur', next:  { element : garuda , next : null } };
   }

   current.next = node;
  }
  this.size += 1;
 }

 printList() {
  let curr = this.head;

  while (curr) {
   console.log(curr.element); //kacang , telur, garuda
   curr = curr.next;
  }
 }

 insertAt(element, index) {
  if (index < 0 || index > this.size) {
   return console.log('please enter a valid index');
  } else {
   //{ element: 'kacang', next: { element: 'telur', next:  { element : garuda , next : null } } }
   const node = new Node(element); //{element : sakti , next : null}, {element : banget , next : null}
   let curr = this.head;

   if (index == 0) {
    node.next = this.head;
    //{element : sakti , next :{ element: 'kacang', next: { element: 'telur', next:  { element : garuda , next : null } } } }
   } else {
    curr = this.head;
    // //{element : sakti , next :{ element: 'kacang', next: { element: 'telur', next:  { element : garuda , next : null } } } }
    let prev;
    let it = 0;
    //index = 1
    // while (it < index) {
    //  it++;
    // }

    for (let i = 0; i < index; i++) {
     prev = curr; //{element : sakti , next :{ element: 'kacang', next: { element: 'telur', next:  { element : garuda , next : null } } } }
     // {element: 'sakti', next: {element : banget , next : { element: 'kacang', next: { element: 'telur', next:  { element : garuda , next : null } } } }}
     curr = curr.next;
    }

    prev.next = node;
    node.next = curr;
   }
  }
 }

 removeAt(index) {
  if (index < 0 || index > this.size) {
   return console.log('please enter a valid index');
  } else {
   let curr = this.head;
   // head = { element: 'kacang', next: { element: 'telur', next:  { element : garuda , next : null } } }
   // this.head = { element: 'telur', next:  { element : garuda , next : null } }
   let prev = curr;

   if (index == 0) {
    this.head = curr.next;
   } else {
    for (let i = 0; i < index; i++) {
     //index = 1

     prev = curr;
     //{ element: 'telur', next:  { element : garuda , next : null } }
     curr = curr.next;
     //{ element : garuda , next : null }
    }

    prev.next = curr.next;
    //{ element: 'telur', next:  null }
   }
   this.size -= 1;

   return curr.element;
  }
 }

 indexOf(element) {
  let count = 0;
  let current = this.head;
  //{element : sakti , next :  {element : banget , next : null}
  //element = "banget"
  while (current != null) {
   if (current.element === element) {
    return count;
   }
   count += 1;
   current = current.next;
   //{element : sakti , next : null}, {element : banget , next : null}
  }
  return -1;
 }
}

//  head: Node { element: 'kacang', next: { element: 'telur', next:  { element : garuda , next : null } } }

const newList = new LinkedList();
newList.add('kacang');
newList.add('telur');
newList.add('garuda');

newList.printList();
// add => Node("kacang") =>  { element : "kacang", next : null}
// newList = {
//  head: { element: 'kacang', next: null },
//  size: 0
// };

// add => Node("telur") =>  { element : "telur", next : null}
//current = { element: 'kacang', next: null }
//while(current.next) => while(null)
// current = { element: 'kacang', next: { element : "telur", next : null} }
// newList = {
//  head: { element: 'kacang', next: { element: 'telur', next: null } },
//  size: 0
// };

// add => Node("garuda") =>  { element : "garuda", next : null}
//current = { element: 'kacang', next: { element: 'telur', next: null } }
//while(current.next) => while({ element: 'telur', next: null }) => while(null)
//current.next = null
// current.next = { element : "garuda", next : null}
//current {  element: 'kacang', next: { element: 'telur', next:  { element : "garuda", next : null} }}
