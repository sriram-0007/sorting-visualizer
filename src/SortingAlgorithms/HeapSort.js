export function heapSort(array) {
    const animations=[];
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        heapify(array, array.length, i,animations);
    }

    // Heap sort
    for (let i = array.length - 1; i > 0; i--) {
        // Swap root with current last element
        animations.push([0,i]);
        animations.push([0,i]);
        animations.push([0,i,array[0],array[i]]);
        [array[0], array[i]] = [array[i], array[0]];
        // Heapify reduced heap
        heapify(array, i, 0,animations);
    }

    return animations;
}

function heapify(array, n, i,animations) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== i) {
        animations.push([i,largest]);
        animations.push([i,largest]);
        animations.push([i,largest,array[i],array[largest]]);
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, n, largest,animations);
    }
}