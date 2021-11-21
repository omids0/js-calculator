const outputEl = document.getElementById('inputs')
let monitor = ''

const press = (num) => {
    monitor += num
    outputEl.value = monitor
}

const equal = () => {
    if (monitor) {
        outputEl.value = eval(monitor)
    }
}

const clearBtn = () => {
    monitor = ''
    outputEl.value = ''
}