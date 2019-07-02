// 数组去重
var originArray = [ 10 , 20 , 30 , 10 , 40 , 9 , 9 , 40 , 40 , 6 , 6 ,  6 , 11 , 11 , 11 , 5 , 6 , 0];
// 1 利用indexOf 
// 创建一个空数组，遍历原数组，用indexOf判断新数组有没有出现过当前元素 没出现过就放入新数组
// indexOf返回元素在数组中出现的位置，没有则返回-1
function indexOfFirst(arr) {
    let newArr = [];
    for ( let i = 0 ; i < arr.length ; i++){
        if(newArr.indexOf(arr[i]) < 0){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(indexOfFirst(originArray));
function indexOfSecond(arr){
    // 利用indexOf 如果当前元素第一次出现的下标等于当前下标，说明没有重复，就放入新数组
    let newArr = [];
    for ( let i = 0 ; i < arr.length ; i++){
        if( arr.indexOf(arr[i]) == i){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(indexOfSecond(originArray));

// 对象键值法去重 速度最快，但占用内存高
function objectKeyValue(arr) {
    // 创建一个空对象  传入数组的长度   新的空数组
    const start = new Date().getTime();
    let obj = {} , l = arr.length , newArr = [];
    for ( let i = 0 ; i < l ; i++){
        // 对象的属性名称
        let key = arr[i];
        // 对象的属性值  这里用属性的数据类型代替
        let type = typeof arr[i];
        // 如果不存在该属性名
        if( !obj[key] ){
            // 就把该值添加进新数组 对象里也添加属性与值
            newArr.push(arr[i]);
            obj[key] = type;
        } else if ( newArr.indexOf(arr[i]) == -1){
            // 由于判断是否为对象键名时,会自动执行toString  那么类似1=='1' 所以还需indexOF判断一下
            newArr.push(arr[i]);
            obj[key] = type;            
        }
    }
    return newArr;
}
console.log(objectKeyValue(originArray));

// 排序后相邻相邻相同去除  排序后,相邻不同的才添加进新数组
function sortAdd(arr) {
    arr.sort(function( a , b){
        return b - a;
    });
    let newArr = [];
    newArr[0] = arr[0];
    for ( let i = 1 ; i < arr.length ; i++){
        if ( arr[i] != newArr[newArr.length-1] ){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(sortAdd(originArray));

// 双层for循环 
console.log('双重for')
function doubleFor(arr) {
    let newArr = [];
    newArr = JSON.parse(JSON.stringify(arr));
    // newArr = newArr.concat(arr)
    for ( let i = 0 ; i < newArr.length ; i++) {
        for (let j = i+1  ; j < newArr.length ; j++){
            if (newArr[i] == newArr[j] ){
                newArr.splice(j,1);
                j--;
                i--;
            }
        }
    }
    return newArr;
}
console.log(doubleFor(originArray));
// console.log(originArray);
console.log('----------------------分割线---------------------------')
