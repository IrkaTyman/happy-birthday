import React from 'react'

const boul = require('../image/boul.png')
const chahoh = require('../image/chahoh.png')
const hachap = require('../image/hachap.png')
const kungBao = require('../image/kung-bao.png')
const lobio = require('../image/lobio.png')
const pepe = require('../image/pepe.png')
const ris = require('../image/ris.png')
const tako = require('../image/tako.png')
const tomYan = require('../image/tom-yan.png')
const vegasi = require('../image/vegasi.png')
const vonTon = require('../image/von-ton.png')

export const food = [
  {
    name:'Суп Том Ян', shortName:'Том Ян', restoran:'Своя Компания',
    img:tomYan,
    description:'сливки кокосовые, паста том-ям, креветки, мидии, кальмары, лемонграсс, имбирь, листья лайма, галангал, соус рыбный, помидоры черри, шампиньоны, рис, лайм, халапеньо, лук зеленый, кинза',
    select:false, kitchen:'китайская'
  },
  {
    name:'Тако',shortName:'Тако',restoran:'Tako Mago',
    img:tako,
    description:'Кукурузная лепешка с разнообразнейшей начинкой. Есть тако с ананасом и свининой, с апелисином и курицей, вегетарианское, с рыбой и т.д.',
    select:false, kitchen:'мексиканская'
  },
  {
    name:'Черный рис с уткой 鸭肉炒黑米',shortName:'Черный рис',restoran:'Jang Su',
    img:ris,
    description:'Тебетский черный рис, кабачок, перец болгарский, утка запечённая, лук зеленый, яйцо куриное, соус',
    select:false, kitchen:'китайская'
  },
  {
    name:'Суп Вон Тон',shortName:'Вон Тон',restoran:'Jang Su',
    img:vonTon,
    description:'Мясной бульон, вон тоны из курино - креветочного фарша, сушенные водоросли, сушенные креветки, кунжутное масло, кинза',
    select:false, kitchen:'китайская'
  },
  {
    name:'Хари-боул с карри',shortName:'Хари-боул',restoran:'Люблю и Благодарю',
    img:boul,
    description:'Рис басмати, карри с овощами, соя, свежие овощи, специи, масло рафинированное.',
    select:false, kitchen:'вегетерианская'
  },
  {
    name:'Пицца Пеперони',shortName:'Пеперони',restoran:'Люблю и Благодарю',
    img:pepe,
    description:'Блестящее трио: вегетарианская колбаса, спелые помидоры, свежий болгарский перчик и щедрая порция сыра на тонком бездрожжевом тесте с идеальным сочетанием специй. Состав: мука первого сорта, мука цельнозерновая, колбаса вегетарианская, сыр, томаты, специи',
    select:false, kitchen:'вегетерианская'
  },
  {
    name:'Аджарский хачапури с сыром и яйцом',shortName:'Хачапури',
    restoran:'Хмели Сунели', img: hachap,
    description:'Знаменитая «лодочка» имеющая хрустящую корочку, с большим количеством сыра внутри и жидким яичным желтком снаружи. Перед подачей добавляем сливочное масло.',
    select:false, kitchen:'грузинская'
  },
  {
    name:'Горячий лобио',shortName:'Лобио',restoran:'Хмели Сунели',
    img:lobio,
    description:'Сытное блюдо из красной фасоли, томленой с луком, грецкими орехами, грузинскими специями и свежей зеленью. Подаем с лепешками из кукурузной муки и джонджоли.',
    select:false, kitchen:'грузинская'
  },
  {
    name:'Чахохбили - кусочки цыпленка в соусе',shortName:'Чахохбили',restoran:'Хмели Сунели',
    img:chahoh,
    description:'Кусочки цыплёнка на косточке, томлёные в густом соусе из томатов, домашней аджики, пряных специй и трав.',
    select:false, kitchen:'грузинская'
  },
  {
    name:'Курица "Кунг-Бао" с бамбуком и овощами',shortName:'Кунг-Бао',restoran:'Dong Po',
    img:kungBao,
    description:'Курица обжаривается на воке в пряном соусе с овощами (сладким перцем, репчатым луком, имбирем, чесноком) и бамбуком. Украшается арахисом, чипсами из перца чили, зеленым луком и чили арахисом',
    select:false, kitchen:'азиатская'
  },
  {
    name:'Вагаси моти с манго',shortName:'Вегаси моти',restoran:'Momo',
    img:vegasi,
    description:'Нежные, легкие, традиционные японские сладости, оригинальные и непривычные для нашего вкуса. Любимый всеми японцами десерт продают во всех кондитерских Японии и странах Азии.',
    select:false, kitchen:'азиатская'
  }
]
