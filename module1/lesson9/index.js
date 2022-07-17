// Lesson 9

let peopleWaiting = [
	"Кристина",
	"Олег",
	"Кирилл",
	"Мария",
	"Светлана",
	"Артем",
	"Глеб"
  ];
let currentCustomerName;

function giveParcel(){
	currentCustomerName = peopleWaiting[0];
	peopleWaiting.shift(0);
	return (alert (`${currentCustomerName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`));	
}

function leaveQueueWithoutParcel(){
	currentCustomerName = peopleWaiting[0];
	peopleWaiting.shift(0);	
	return (alert(`${currentCustomerName} не получил(а) посылку и ушел(ла) из очереди`));
}

giveParcel(); // Кристина
giveParcel(); // Олег
giveParcel(); // Кирилл последний, кого обслужили
for (let i = peopleWaiting.length; i > 0; i--	) {
	leaveQueueWithoutParcel();	
}
