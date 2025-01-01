// a) Função swap: troca os valores de duas posições em um vetor
const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};

// b) Função shuffle: embaralha os elementos de um vetor
const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const index1 = Math.floor(Math.random() * array.length);
        const index2 = Math.floor(Math.random() * array.length);
        swap(array, index1, index2);
    }
};

// c) Função bubble_sort: ordena um vetor utilizando Bubble Sort
const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

// d) Função selection_sort: ordena um vetor utilizando Selection Sort
const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

// e) Função quick_sort: ordena um vetor utilizando Quick Sort
const quick_sort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const pivotIndex = particionamento(array, low, high);
        quick_sort(array, low, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, high);
    }
};

// f) Função particionamento: de apoio ao Quick Sort
const particionamento = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, high);
    return i + 1;
};
