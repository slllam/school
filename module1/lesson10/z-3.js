// Lesson 10

const obj = {
  username: "Maxim",
  programmingLanguage: "JavaScript"
};

function handleObject(obj, key, action) {
  switch(action) {
    case 'get':
      result = obj[key];
      break;
    case 'add':
      obj[key] = "";  
      result = obj;
      break;
    case 'delete': 
      delete obj[key];
      result = obj;
      break;
    default:
      result = obj; 
    }
  return obj;  
  }

console.log(handleObject(obj, "username", "get"))
console.log(handleObject(obj, "age", "add"))
console.log(handleObject(obj, "hairColor", "add"))
console.log(handleObject(obj, "age", "delete"))
console.log(handleObject(obj, "age", "abcdefg"))  // действие игнорируется, выводится obj
