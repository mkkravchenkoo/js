const arr = [1,100,3, 2, 4, 0];
const qsort = (arr) => {
	if(arr.length < 2){
		return arr
	}else{
		let pivot = arr[0];
		const less = arr.filter((item) => item < pivot);
		const greater = arr.filter((item) => item > pivot);
		return [...qsort(less), pivot, ...qsort(greater)]
	}
}

const res = qsort(arr);
console.log(res)