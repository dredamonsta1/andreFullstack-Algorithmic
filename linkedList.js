// piece of data - val
// reference to next node - next

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(val) {
        // for(Node)
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(val) { }
    
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null; {
            let counter = 0;
            let current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }
    }

    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            // to return a bool you move this. into the function block and return true
            return true;
            
        }
        // or to return bool in one line you just add !! after the return
        if (index === 0) return !!this.unshift(val);

        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;

    }
    
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        let removeNode = this.get(index);
        let beforeNode = removeNode.prev;
        let afterNode = removeNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removeNode.next = null;
        removeNode.prev = null;
        
        this.length--;
        return removeNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;

        }
        return this;
    }
}

let list = new SinglyLinkedList()
// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

list.push("HElLO")
list.push("GOODBYE")
list.push("yooooooooooooo")