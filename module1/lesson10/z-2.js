// Lesson 10

const orders = [4, 2, 1, 3];
const patients = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" }
];

function giveTalonsInOrder(patients, orders) {
	let queue = [];
	orders.forEach((item,index) => {
		queue[index] = patients[item-1];
	})
return(queue);
};
console.log(giveTalonsInOrder(patients, orders));
