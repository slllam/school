// Lesson 13

const wordList = [];  // это массив, в котором хранятся все слова, которые есть в словаре

class Dictionary {
  constructor (name) {
    this.name = name;
    this.words = {};
  }
    add(word,description){
      const dynamicKey = word;
      if (!wordList.includes(word)) {
        wordList.push(word);
 //       console.log(wordList);
          this.words[dynamicKey] = {
            word: word,
            description: description,
        };
      }
    }
    remove(word){
      const dynamicKey = word;
      if (wordList.includes(word)) {  
        delete this.words[dynamicKey];
        const indexToDelete = wordList.indexOf(dynamicKey);  // Удаляем слово из словаря dictionary
        wordList.splice(indexToDelete, 1);  // Удаляем слово из массива wordList
      }     
    } 
    get(word){
      const dynamicKey = word;
      return this.words[dynamicKey];
    }
    showAllWords(){
      wordList.forEach(element => {
        console.log(element); 
      });      
    }
    


}
const dictionary = new Dictionary("Толковый словарь");
console.log(dictionary);
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add("Веб-разработчик", "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие");
dictionary.add("JavaScript", "популярный язык программирования");
//dictionary.remove("JavaScript");
console.log(dictionary.get("JavaScript"));
//console.log(result);
dictionary.showAllWords();



// const dictionary = new Dictionary("Толковый словарь");
// dictionary.add("JavaScript", "популярный язык программирования");
// dictionary.add(
//   "Веб-разработчик",
//   "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
// );
// dictionary.remove("JavaScript");
// dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие