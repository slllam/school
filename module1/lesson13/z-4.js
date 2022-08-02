// Lesson 13

class Dictionary {
  constructor (name) {
    this.name = name;
    this.words = {};
  }
  add(word,description){
    const dynamicKey = word;
    if (dynamicKey in this.words) return;
    else {
      this.words[dynamicKey] = {
      word: word,
      description: description,
      };
    }
  }  
  remove(word){
    const dynamicKey = word;
    if (dynamicKey in this.words) {
      delete this.words[dynamicKey];
    }     
  } 
  get(word){   //Из метода необходимо возвратить найденный объект слова по переданному параметру ключа.
    const dynamicKey = word;
    return this.words[dynamicKey];
  }
  showAllWords(){  //вывести все слова, которые есть в объекте words, в консоль в формате “word - description”
    for (const dynamicKey in this.words) {
      console.log(`${this.words[dynamicKey].word} - ${this.words[dynamicKey].description}`);  
    }
  }   
}

class HardWordsDictionary extends Dictionary {
  add(word,description){
    const dynamicKey = word;
    if (dynamicKey in this.words) return;
    else {
      this.words[dynamicKey] = {
      word: word,
      description: description,
      isDifficult: true,
      };
    }
  }  
}

const dictionary = new Dictionary("Толковый словарь");
console.log(dictionary);
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add("Веб-разработчик", "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.remove("JavaScript");
dictionary.showAllWords();

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
hardWordsDictionary.add("дилетант", "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.");
hardWordsDictionary.add("неологизм","Новое слово или выражение, а также новое значение старого слова.");
hardWordsDictionary.add("квант","Неделимая часть какой-либо величины в физике.");
hardWordsDictionary.remove("неологизм");
hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary);
