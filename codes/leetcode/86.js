/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var leftHead,
		rightHead,
		leftIterator,
		rightIterator,
		iterator;
	
	iterator = head;
	leftHead = null;
	rightHead = null;
	
	while(iterator!=null){
		var val = iterator.val;
		var next = iterator.next;
		if(val<x){
			if(!leftHead){
				leftHead = iterator;
				leftIterator = leftHead;
			}else{
				leftIterator.next = iterator;
				leftIterator = leftIterator.next;
			}
		}else{
			if(!rightHead){
				rightHead = iterator;
				rightIterator = rightHead;
			}else{
				rightIterator.next = iterator;
				rightIterator = rightIterator.next;
			}
		}
		iterator = iterator.next;
	}
	
	if(leftHead==null){
		return rightHead;
	}else{
		leftIterator.next = rightHead;
		return leftHead;
	}
};

function ListNode(val){
	this.val = val;
	this.next = null;
}

function makeListNode(arr){
	var head,iterator;
	head = null;
	iterator = null;
	
	if(arr instanceof Array){
		arr.forEach(function(i){
			if(head==null){
				head = new ListNode(i);
				iterator = head;
			}else{
				iterator.next = new ListNode(i);
				iterator = iterator.next;
			}
		})
	}
	
	return head;
}

//测试
console.log(partition(makeListNode([1,4,3,2,5,2]), 0))
console.log(partition(makeListNode([1,4,3,2,5,2]), 3))
console.log(partition(makeListNode([1,4,3,2,5,2]), 6))
console.log(partition(makeListNode([]), 0))
console.log(partition(makeListNode([]), 3))
console.log(partition(makeListNode([]), 6))
console.log(partition(null, 0))
console.log(partition(null, 3))
console.log(partition(null, 6))

