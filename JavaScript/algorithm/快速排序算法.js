var arr = [4,2,10,1,5,3,9,1000,222];

function quick(arr){
	function quickSort(left,right){
		if(left<right){
			var p = partition(left,right);
			
			quickSort(left, p-1);
			quickSort(p+1, right);
		}
	}
	
	function partition(left,right){
		//选取第一个点为基准点
		var l = left;
		var r = right;
		var p = arr[left];
		
		l++;
		while(l<r){
			while(p>arr[l]) l++;
			while(p<arr[r]) r--;
			
			if(l>r){
				break;
			}else{
				swap(l,r);
			}
		}
		
		//交换基准点
		arr[left] = arr[l-1]; 
		arr[l-1] = p;
		
		return l-1;
	}
	
	function swap(a,b){
		var t = arr[a];
		arr[a] = arr[b];
		arr[b] = t;
	}
	
	quickSort(0,arr.length-1);
}

quick(arr);
console.log(arr);