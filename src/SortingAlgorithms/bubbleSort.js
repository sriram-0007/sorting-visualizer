export function bubbleSort(array){
    const animations=[];
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-1-i;j++){
            animations.push([0,j,j+1,false]);
            animations.push([1,j,j+1,false]);
            if(array[j]>array[j+1]){
                animations.push([0,j,j+1,array[j],array[j+1],true]);
                animations.push([1,j,j+1,array[j],array[j+1],true]);
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return animations;
}