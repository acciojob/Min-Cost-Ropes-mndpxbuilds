function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum = 0;
	let sum2 = 0;
	arr.sort();
	let arr2 = [];
	for(let i=0; i<2; i++){
			sum+=arr[i];
	}
  for(let j=2; j<arr.length; j++){
	  sum+=arr[j];
	  arr2.push(sum);
  }
	for(let k=0; k<arr2.length; k++){
		sum2+=arr2[k];
	}
	return sum2;
}

module.exports=mincost;
