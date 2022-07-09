// Lesson 3
const cpuModel = 'AMD Ryzen 5 5600G';
const cpuCores = 8;
const iGPU = true;
const baseFreq = 3900n;
const price = null;
const socket = undefined;
const id = Symbol('ID');
const cpuInfo = {model:cpuModel, baseClock:baseFreq, socket:'AM4'};

console.log('CPU Model', cpuModel, typeof(cpuModel));
console.log('Number of cores', cpuCores,typeof(cpuCores));
console.log('Integrated iGPU', iGPU,typeof(iGPU));
console.log('Base clock', baseFreq,typeof(baseFreq));
console.log('Price', price,typeof(price));
console.log('Socket', socket,typeof(socket));
console.log('ID', id,typeof(id));
console.log('Info',cpuInfo,typeof(cpuInfo));