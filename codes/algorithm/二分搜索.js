var a = [1,2,3,4,5,8,9];

function fn(arr,start,end,target){
	//二分搜索
	
	//终止条件
	if(start==end){
		if(arr[start]==target){
			return true;
		}else{
			return false;
		}
	}
	
	//继续递归
	var mid = parseInt((start+end)/2);
		
	if(arr[mid]>target){
		return fn(arr,start,mid,target);
	}else{
		return fn(arr,mid+1,end,target);
	}
	
	
}

console.log(fn(a,0,a.length-1,2))