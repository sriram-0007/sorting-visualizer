export function quickSort(array) {
    const animations=[]
    if (array.length <= 1) {
        return animations;
    }
    partition(array, 0, array.length - 1,animations);
    return animations;
}

function partition(array, left, right,animations) {
    if (left >= right) {
        return;
    }
    const pivotIndex = Math.floor((left + right) / 2);
    const pivot = array[pivotIndex];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            animations.push([i,j]);
            animations.push([i,j]);
            animations.push([i,j,array[i],array[j]]); 
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    partition(array, left, j,animations);
    partition(array, i, right,animations);
}