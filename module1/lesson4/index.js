// Lesson 4
const cpuModel = 'AMD Ryzen 5 5600G';
const cpuCores = 8;
const iGPU = true;
const baseFreq = 3900n;
const price = null;
const socket = undefined;
const id = Symbol('ID');
const cpuInfo = {model:cpuModel, baseClock:baseFreq, socket:'AM4'};

console.log('CPU Model', Number(cpuModel), Boolean(cpuModel), String(cpuModel));
console.log('Number of cores', Number(cpuCores), Boolean(cpuCores), String(cpuCores));
console.log('Integrated iGPU', Number(iGPU), Boolean(iGPU), String(iGPU));
console.log('Base clock', Number(baseFreq), Boolean(baseFreq), String(baseFreq));
console.log('Price', Number(price), Boolean(price), String(price));
console.log('Socket', Number(socket), Boolean(socket), String(socket));
//console.log('ID', Number(id), Boolean(id), String(id));
console.log('Info',Number(cpuInfo), Boolean(cpuInfo), String(cpuInfo));