// Lesson 10

const users = [
	{
	  username: "David",
	  status: "online",
	  lastActivity: 10
	},
	{
	  username: "Lucy",
	  status: "offline",
	  lastActivity: 22
	},
	{
	  username: "Bob",
	  status: "online",
	  lastActivity: 104
	}
];

const onlineUsers = users.filter ((username =>{
	return username['status'] == 'online'	;
}));

let usersOnlineNames = '';

onlineUsers.forEach((names, index) =>  {      // Можно еще реализовать через array.join, но получится примерно тот же объем кода.
	usersOnlineNames += names.username;
	if (index < onlineUsers.length - 1) {
		usersOnlineNames += ', ';
	}

})
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);



