
// задача 18

// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'Вы купили <число> дроидов, на счету осталось <число> кредитов'.
// Тесты
// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits).
// Вызов makeTransaction(3000, 5, 23000) возвращает 'Вы купили 5 дроидов, на счету осталось 8000 кредитов'.
// Вызов makeTransaction(1000, 3, 15000) возвращает 'Вы купили 3 дроидов, на счету осталось 12000 кредитов'.
// Вызов makeTransaction(5000, 10, 8000) возвращает 'Недостаточно средств на счету!'.
// Вызов makeTransaction(2000, 8, 10000) возвращает 'Недостаточно средств на счету!'.
// Вызов makeTransaction(500, 10, 5000) возвращает 'Вы купили 10 дроидов, на счету осталось 0 кредитов'.

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    
  // Пиши код ниже этой строки
const totalPrice = (pricePerDroid*orderedQuantity)
if (totalPrice > customerCredits) {
  message = "Недостаточно средств на счету!"
} else {
message = `Вы купили ${(orderedQuantity)} дроидов, на счету осталось ${(customerCredits - totalPrice)} кредитов`}
  // Пиши код выше этой строки
    return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(5000, 10, 8000));

// задача 19

// Задание
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}

console.log(checkPassword("jdhisj"));
console.log(checkPassword(null));
console.log(checkPassword("jqueryismyjam"));

// задача 20

// Задание
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка В заказе еще нет товаров.
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка 'Слишком большой заказ, на складе недостаточно товаров!'.
// В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.
// Тесты
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(100, 130) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
// Вызов checkStorage(70, 0)возвращает 'В заказе еще нет товаров'.
// Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(200, 250) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
// Вызов checkStorage(150, 0) возвращает 'В заказе еще нет товаров'.

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (ordered === 0) {
message = "В заказе еще нет товаров"
}
  else if (ordered > available){
message =  'Слишком большой заказ, на складе недостаточно товаров!'
  }
  else {
  message = 'Заказ оформлен, с вами свяжется менеджер'}
  // Пиши код выше этой строки
  return message;
}

console.log(checkStorage(150, 0));

// Задача 21 

// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// Тесты
// Объявлена функция isNumberInRange(start, end, number).
// В выражении проверки использован оператор &&.
// Вызов isNumberInRange(10, 30, 17) возвращает true.
// Вызов isNumberInRange(10, 30, 5) возвращает false.
// Вызов isNumberInRange(20, 50, 24) возвращает true.
// Вызов isNumberInRange(20, 50, 76) возвращает false.

function isNumberInRange(start, end, number) {
  const isInRange = number<end && number>start; // дополни эту строку

  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));

// // задача 22
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам 'pro' или 'vip', пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// Тесты
// Объявлена функция checkIfCanAccessContent(subType).
// В выражении проверки использован оператор ||.
// Вызов checkIfCanAccessContent('pro') возвращает true.
// Вызов checkIfCanAccessContent('starter') возвращает false.
// Вызов checkIfCanAccessContent('vip') возвращает true.
// Вызов checkIfCanAccessContent('free') возвращает false.

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType==="pro" || subType==="vip"  ; // дополни эту строку

  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));

// задача 23

// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// Тесты
// Объявлена функция isNumberNotInRange(start, end, number).
// В выражении использован оператор !.
// Вызов isNumberNotInRange(10, 30, 17) возвращает false.
// Вызов isNumberNotInRange(10, 30, 5) возвращает true.
// Вызов isNumberNotInRange(20, 50, 24) возвращает false.
// Вызов isNumberNotInRange(20, 50, 76) возвращает true.

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange ; // Дополни эту строку

  return isNotInRange;
}

console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));
console.log(isNumberNotInRange(20, 50, 24));
console.log(isNumberNotInRange(20, 50, 76));

// задача 27

// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// 'starter' - цена подписки 0 кредитов.
// 'professional' - цена подписки 20 кредитов.
// 'organization' - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === 'starter') {
//   price = 0;
// } else if (type === 'professional') {
//   price = 20;
// } else if (type === 'organization') {
//   price = 50;
// }
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

// Тесты
// Объявлена функция getSubscriptionPrice(type).
// Вызов getSubscriptionPrice('professional') возвращает число 20.
// Вызов getSubscriptionPrice('organization') возвращает число 50.
// Вызов getSubscriptionPrice('starter') возвращает число 0.

function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case "starter": // Дополни эту строку
      price = 0; // Дополни эту строку
      break;

    case 'professional' : // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }

  // Пиши код выше этой строки
  return price;
}

// задача 28

// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Отменено пользователем!';
      break;
    
    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;
    
    default:
      message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}

console.log(checkPassword("jhgjdfgfdkj"));
console.log(checkPassword('jqueryismyjam'));

// задача 29

// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Ямайка - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

// Тесты
// Объявлена функция getShippingCost(country).
// В теле функции использована инструкция switch.
// Вызов getShippingCost('Австралия') возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
// Вызов getShippingCost('Германия') возвращает 'Извините, в вашу страну доставки нет'.
// Вызов getShippingCost('Китай') возвращает 'Доставка в Китай будет стоить 100 кредитов'.
// Вызов getShippingCost('Чили') возвращает 'Доставка в Чили будет стоить 250 кредитов'.
// Вызов getShippingCost('Ямайка') возвращает 'Доставка в Ямайка будет стоить 120 кредитов'.
// Вызов getShippingCost('Швеция') возвращает 'Извините, в вашу страну доставки нет'.

function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
switch(country) {

  case "Китай":
    message = 'Доставка в Китай будет стоить 100 кредитов';
    break;
    
  case "Чили":
    message = 'Доставка в Чили будет стоить 250 кредитов';
    break;
    
    case "Австралия":
   message =  'Доставка в Австралия будет стоить 170 кредитов';
    break;
    
    case "Ямайка":
   message = 'Доставка в Ямайка будет стоить 120 кредитов';
    break;
    
  default:
    message =  'Извините, в вашу страну доставки нет';
}
  // Пиши код выше этой строки
  return message;
}

console.log(getShippingCost("Австралия"));
console.log(getShippingCost("Чили"));
console.log(getShippingCost("Китай"));
console.log(getShippingCost("Ямайка"));
console.log(getShippingCost("Литва"));

// задача 30

// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

// Тесты
// Объявлена функция getNameLength(name).
// Вызов функции getNameLength('Poly') возвращает 'Длина вашего имени 4 символа(ов)'.
// Вызов функции getNameLength('Harambe') возвращает 'Длина вашего имени 6 символа(ов)'.
// Вызов функции getNameLength('Billy') возвращает 'Длина вашего имени 5 символа(ов)'.
// Вызов функции getNameLength('Joe') возвращает 'Длина вашего имени 3 символа(ов)'.

function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

  return message;
}

console.log(getNameLength("Виктория"));
console.log(getNameLength("Ренат"));
console.log(getNameLength("Элина"));

// задача 31

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
// Тесты
// Объявлена переменная courseTopic.
// Значение переменной courseTopic это строка 'JavaSript для начинающих'.
// Объявлена переменная courseTopicLength.
// Значение переменной courseTopicLength это число 24.
// Объявлена переменная firstElement.
// Значение переменной firstElement это строка 'J'.
// Объявлена переменная lastElement.
// Значение переменной lastElement это строка 'х'.

const courseTopic = 'JavaSript для начинающих';
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length-1];

// Пиши код выше этой строки

console.log(courseTopic.length);
console.log(courseTopic[0]);
console.log(courseTopic[courseTopicLength - 1]);

// задача 32

// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// Тесты
// Объявлена функция getSubstring(string, length).
// Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
// Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
// Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
// Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
// Вызов функции getSubstring('Привет мир', 0) возвращает ''.

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Дополни эту строку

  return substring;
}

console.log(getSubstring("привет", 3));

// задача 33

// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.
// Тесты
// Объявлена функция formatMessage(message, maxLength).
// Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.
// Вызов функции formatMessage('Curabitur ligula sapien', 23) возвращает 'Curabitur ligula sapien'.
// Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.
// Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.



function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (message.length <= maxLength) {
result = message;
} else { result = message.slice(0, maxLength) + "..."

}
// Пиши код выше этой строки
  return result;
}

console.log(formatMessage("Я супер", 15));
console.log(formatMessage("Я супер", 5));

// задача 34

// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// Тесты
// Объявлена функция normalizeInput(input).
// Вызов функции normalizeInput('Привет мир') возвращает 'привет мир'.
// Вызов функции normalizeInput('Это НЕ СпаМ') возвращает 'это не спам'.
// Вызов функции normalizeInput('Большие СКИДКИ') возвращает 'большие скидки'.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}

console.log(normalizeInput("TraGaDra"));

// задача 35

// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// Тесты
// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName('Егор Колбасов', 'Егор') возвращает true.
// Вызов функции checkForName('Егор Колбасов', 'егор') возвращает false.
// Вызов функции checkForName('Егор Колбасов', 'егОр') возвращает false.
// Вызов функции checkForName('Егор Колбасов', 'Женя') возвращает false.
// Вызов функции checkForName('Вадим Некрасов', 'Вадим') возвращает true.
// Вызов функции checkForName('Вадим Некрасов', 'вадим') возвращает false.
// Вызов функции checkForName('Вадим Некрасов', 'Дима') возвращает false.

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Дополни эту строку
  return result;
}

console.log(checkForName("Маша Петрова", "Маша"));
console.log(checkForName("Женя Ус", "женя"));

// задача 36 

// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.
// Тесты
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam('Latest technology news') возвращает false.
// Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
// Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
// Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
// Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
// Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
// Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
 const normalizedMessage = message.toLowerCase();
  if (normalizedMessage.includes("spam") || normalizedMessage.includes("sale")) {
    result = true;
  } else {
    result = false;
 }
  // Пиши код выше этой строки
  return result;
}

console.log(checkForSpam("Spam"));
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
console.log(checkForSpam("JavaScript weekly newsletter"));

