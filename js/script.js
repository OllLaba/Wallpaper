// Маска телефону

document.addEventListener('DOMContentLoaded', () => {

    let telMask1 = document.getElementById('tel1')
    let telMask2 = document.getElementById('tel2')
    let telMask3 = document.getElementById('tel3')
    let telMask4 = document.getElementById('tel4')
    const maskOptions = { 
      mask: '+{38}(\\000)000-00-00' 
    }
    IMask(telMask1, maskOptions) 
    IMask (telMask2, maskOptions)
    IMask (telMask3, maskOptions)
    IMask (telMask4, maskOptions)
  })

  // КВІЗ
  let quiz1 = document.getElementById('quiz1')
  let quiz2 = document.getElementById('quiz2')
  let quiz3 = document.getElementById('quiz3')
  let block41 = document.getElementById('block4-1')
  let block42 = document.getElementById('block4-2')
  let block43 = document.getElementById('block4-3')
  let block44 = document.getElementById('block4-4')

  quiz1.addEventListener('click', (event) => {
    event.preventDefault()
   block41.style.display = 'none'
   block42.style.display = 'block'
  })

  quiz2.addEventListener('click', (event) => {
    event.preventDefault() 
    block42.style.display = 'none'
    block43.style.display = 'block'
  })

  quiz3.addEventListener('click', (event) => {
    event.preventDefault()
    block43.style.display = 'none'
    block44.style.display = 'flex'
  })
  

//Блок ПІД ЗАМОВЛЕННЯ

const leftbuttonorder = document.getElementById("leftbuttonorder");
const rightbuttonorder = document.getElementById("rightbuttonorder");
let orderNumber = document.getElementById("orderNumber");
let orderName = document.getElementById("orderName");
let orderText = document.getElementById("orderText");
let orderPrice = document.getElementById("orderPrice");
let orderimg = document.getElementById("orderimg");


leftbuttonorder.addEventListener("click", () => { 
  if(orderNumber.textContent == "1") {
    orderNumber.innerHTML = "5";
    orderimg.innerHTML = '<img src="img/Order-5.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «Boys and Girls»</h6><p>Виробник: A.S. Création</p></span>';
    orderText.innerHTML = "Колекція включає в себе шпалери на будь-який смак – від милих до стильних: милі тварини, смішні комічні фігури, стильні графіті чи яскраве міське життя. Вирушайте з Вашими дітьми у справжню подорож!"
    orderPrice.innerHTML = "800 грн";

  }
  else if(orderNumber.textContent == "5") {
    orderNumber.innerHTML = "4";
    orderimg.innerHTML = '<img src="img/Order-4.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «Highland»</h6><p>Виробник: Graham Brown </p></span>';
    orderText.innerHTML = "У цій лінійці представлені шпалери в різних дизайнах з різними елементами декору, які поєднуються з класичною, але сучасною палітрою, створюючи витончений вигляд хайленд-декору. Теплі насичені тони підкреслені металевими переливами, вплетеними в малюнки, зроблені вручну. Текстура дерева з рослинними елементами та намальованими вручну гірськими оленями, позачасовий ситець та тартан (орнамент шотландського картатого візерунка), з домашнім дизайном тканини (ефектом текстилю) є ключем до створення затишної атмосфери Вашого будинку."
    orderPrice.innerHTML = "1000 грн";

  }
  else if(orderNumber.textContent == "4") {
    orderNumber.innerHTML = "3";
    orderimg.innerHTML = '<img src="img/Order-3.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «Palais Royal»</h6><p>Виробник: Erismann </p></span>';
    orderText.innerHTML = "Ретельно відібрані мотиви створюють естетику та наповнюють кімнату атмосферою царської граціозності. Художні орнаменти з рельєфною структурою витікають розкіш та королівський шарм. Легкі мерехтливі елементи, що нагадують чистий шовк, надають колекції вишуканої стриманості. Ніжний та гармонійний перехід відтінків уміло підкреслює текстильну фактуру шпалер. Гра кольорів не менш спокуслива, ніж дизайн. Багаті відтінки золотого та царственого синього переплітаються з таємничими нотками опалового, кашеміру та марсала."
    orderPrice.innerHTML = "1200 грн";

  }
  else if(orderNumber.textContent == "3") {
    orderNumber.innerHTML = "2";
    orderimg.innerHTML = '<img src="img/Order-2.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «KABUKI»</h6><p>Виробник: Graham & Brown </p></span>';
    orderText.innerHTML = "Елегантні та сучасні шпалери з вишуканою сучасною геометрією, змішані з різними тенденціями та становлять коливання між безтурботним та театральним, а в будинку створює гармонійний баланс яскравих елементів. Цей простий дизайн, що надихає, створює стильний і чисто естетичний вигляд сучасного інтер'єру, сміливо виражаючи індивідуальність. Дивовижні шпалери в стилі ар-деко мають геометричний малюнок, який привертає увагу та додає вінтажної вишуканості до всіх кімнат Вашого будинку."
    orderPrice.innerHTML = "1200 грн";

  }
  else if(orderNumber.textContent == "2") {
    orderNumber.innerHTML = "1";
    orderimg.innerHTML = '<img src="img/Order-1.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «Most Fabulous»</h6><p>Виробник: Rasch</p></span>';
    orderText.innerHTML = "Якщо Ви віддаєте перевагу стриманості в інтер'єрі, візьміть однотонні шпалери неяскравих кольорів і розбавте їх акцентами модних сьогодні відтінків теракоти, петролю або рожевого. Орнамент при цьому варіюється від випадкових «чорнильних плям» до стилізованих бутонів та елегантних ліній. Благородні відтінки золота та срібла доповнюють мінімалістські чорно-білі дизайни. Орнамент та однотонні шпалери ідеально поєднуються один з одним, що дозволяє створити неповторний, індивідуальний інтер'єр."
    orderPrice.innerHTML = "1000 грн";
  }
})

rightbuttonorder.addEventListener("click", () => { 
  if(orderNumber.textContent == "1") {
    orderNumber.innerHTML = "2";
    orderimg.innerHTML = '<img src="img/Order-2.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «KABUKI»</h6><p>Виробник: Graham & Brown </p></span>';
    orderText.innerHTML = "Елегантні та сучасні шпалери з вишуканою сучасною геометрією, змішані з різними тенденціями та становлять коливання між безтурботним та театральним, а в будинку створює гармонійний баланс яскравих елементів. Цей простий дизайн, що надихає, створює стильний і чисто естетичний вигляд сучасного інтер'єру, сміливо виражаючи індивідуальність. Дивовижні шпалери в стилі ар-деко мають геометричний малюнок, який привертає увагу та додає вінтажної вишуканості до всіх кімнат Вашого будинку."
    orderPrice.innerHTML = "1200 грн";
  }
  else if(orderNumber.textContent == "2") {
    orderNumber.innerHTML = "3";
    orderimg.innerHTML = '<img src="img/Order-3.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «Palais Royal»</h6><p>Виробник: Erismann </p></span>';
    orderText.innerHTML = "Ретельно відібрані мотиви створюють естетику та наповнюють кімнату атмосферою царської граціозності. Художні орнаменти з рельєфною структурою витікають розкіш та королівський шарм. Легкі мерехтливі елементи, що нагадують чистий шовк, надають колекції вишуканої стриманості. Ніжний та гармонійний перехід відтінків уміло підкреслює текстильну фактуру шпалер. Гра кольорів не менш спокуслива, ніж дизайн. Багаті відтінки золотого та царственого синього переплітаються з таємничими нотками опалового, кашеміру та марсала."
    orderPrice.innerHTML = "1200 грн";
  }
  else if(orderNumber.textContent == "3") {
    orderNumber.innerHTML = "4";
    orderimg.innerHTML = '<img src="img/Order-4.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «Highland»</h6><p>Виробник: Graham Brown </p></span>';
    orderText.innerHTML = "У цій лінійці представлені шпалери в різних дизайнах з різними елементами декору, які поєднуються з класичною, але сучасною палітрою, створюючи витончений вигляд хайленд-декору. Теплі насичені тони підкреслені металевими переливами, вплетеними в малюнки, зроблені вручну. Текстура дерева з рослинними елементами та намальованими вручну гірськими оленями, позачасовий ситець та тартан (орнамент шотландського картатого візерунка), з домашнім дизайном тканини (ефектом текстилю) є ключем до створення затишної атмосфери Вашого будинку."
    orderPrice.innerHTML = "1000 грн";
  }
  else if(orderNumber.textContent == "4") {
    orderNumber.innerHTML = "5";
    orderimg.innerHTML = '<img src="img/Order-5.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «Boys and Girls»</h6><p>Виробник: A.S. Création</p></span>';
    orderText.innerHTML = "Колекція включає в себе шпалери на будь-який смак – від милих до стильних: милі тварини, смішні комічні фігури, стильні графіті чи яскраве міське життя. Вирушайте з Вашими дітьми у справжню подорож!"
    orderPrice.innerHTML = "800 грн";
  }
  else if(orderNumber.textContent == "5") {
    orderNumber.innerHTML = "1";
    orderimg.innerHTML = '<img src="img/Order-1.webp" alt="Шпалери"></img>';
    orderName.innerHTML = '<h6>Колекція «Most Fabulous»</h6><p>Виробник: Rasch</p></span>';
    orderText.innerHTML = "Якщо Ви віддаєте перевагу стриманості в інтер'єрі, візьміть однотонні шпалери неяскравих кольорів і розбавте їх акцентами модних сьогодні відтінків теракоти, петролю або рожевого. Орнамент при цьому варіюється від випадкових «чорнильних плям» до стилізованих бутонів та елегантних ліній. Благородні відтінки золота та срібла доповнюють мінімалістські чорно-білі дизайни. Орнамент та однотонні шпалери ідеально поєднуються один з одним, що дозволяє створити неповторний, індивідуальний інтер'єр."
    orderPrice.innerHTML = "1000 грн";
  }
})
