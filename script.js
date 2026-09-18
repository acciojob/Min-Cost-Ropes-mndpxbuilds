function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum = 0;
	arr.sort();
	let arr2 = [];
	for(let i=0; i<arr.length; i++){
		let r1 = arr[i]+arr[i+1];
		r1+=i;
		arr2.push_back(r1);
	}
  for(let j=0; j<arr2.length; j++){
	  sum+=arr2[j];
  }
	return sum;
}

module.exports=mincost;
