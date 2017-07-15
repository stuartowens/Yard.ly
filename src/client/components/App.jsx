import React, { Component } from 'react'

import Home from './home.jsx'

const workers = [
  {
    username: 'rsherel0',
    password: 'smBFkq',
    services: { thing: '59654f5afc13ae4df4000014' },
    area: 'Gafanha da Encarnação',
    firstName: 'Raquel',
    lastName: 'Sherel',
  },
  {
    username: 'jlighten1',
    password: 'u1eAzHJmfz',
    services: { thing: '59654f5afc13ae4df4000015' },
    area: 'Qingguang',
    firstName: 'Junina',
    lastName: 'Lighten',
  },
  {
    username: 'smelmar2',
    password: 'qQrrSX',
    services: { thing: '59654f5afc13ae4df4000016' },
    area: 'Mishkino',
    firstName: 'Staffard',
    lastName: 'Melmar',
  },
  {
    username: 'pbadder3',
    password: 'siw1P9bwnpti',
    services: { thing: '59654f5afc13ae4df4000017' },
    area: 'Gampang',
    firstName: 'Pearle',
    lastName: 'Badder',
  },
  {
    username: 'acorrie4',
    password: 'jzhGc1yQ',
    services: { thing: '59654f5afc13ae4df4000018' },
    area: 'Zākhū',
    firstName: 'Alverta',
    lastName: 'Corrie',
  },
  {
    username: 'lrobinet5',
    password: 'sdCakVlAcxb',
    services: { thing: '59654f5afc13ae4df4000019' },
    area: 'Fengcheng',
    firstName: 'Laurie',
    lastName: 'Robinet',
  },
  {
    username: 'btowsie6',
    password: 'cO0a5Cum6rTo',
    services: { thing: '59654f5afc13ae4df400001a' },
    area: 'El Cacao',
    firstName: 'Bertha',
    lastName: 'Towsie',
  },
  {
    username: 'pfiddler7',
    password: '3Vj7RB',
    services: { thing: '59654f5afc13ae4df400001b' },
    area: 'Baozhu',
    firstName: 'Pepillo',
    lastName: 'Fiddler',
  },
  {
    username: 'tedginton8',
    password: 'bDXdVDPuKU',
    services: { thing: '59654f5afc13ae4df400001c' },
    area: 'Pil’na',
    firstName: 'Tammy',
    lastName: 'Edginton',
  },
  {
    username: 'paspling9',
    password: 't1vxafs',
    services: { thing: '59654f5afc13ae4df400001d' },
    area: 'Luxi',
    firstName: 'Patin',
    lastName: 'Aspling',
  },
  {
    username: 'mcraydena',
    password: 'exmmWF9yG49',
    services: { thing: '59654f5afc13ae4df400001e' },
    area: 'Kyzyl-Kyya',
    firstName: 'Merrilee',
    lastName: 'Crayden',
  },
  {
    username: 'ckiddyb',
    password: 'TVl61N4Mv',
    services: { thing: '59654f5afc13ae4df400001f' },
    area: 'Staropyshminsk',
    firstName: 'Cyrill',
    lastName: 'Kiddy',
  },
  {
    username: 'sgoodluckc',
    password: 'xc2RYLZ',
    services: { thing: '59654f5afc13ae4df4000020' },
    area: 'Zhangdian',
    firstName: 'Stacy',
    lastName: 'Goodluck',
  },
  {
    username: 'cfeldkleind',
    password: 'HwXqvaAzZs',
    services: { thing: '59654f5afc13ae4df4000021' },
    area: 'Triolet',
    firstName: 'Cornell',
    lastName: 'Feldklein',
  },
  {
    username: 'astarmoree',
    password: 'dWDFkBOXYkvZ',
    services: { thing: '59654f5afc13ae4df4000022' },
    area: 'Zhenchuan',
    firstName: 'Archambault',
    lastName: 'Starmore',
  },
  {
    username: 'btockf',
    password: 'W5jfTf4atj5',
    services: { thing: '59654f5afc13ae4df4000023' },
    area: 'Persen',
    firstName: 'Bekki',
    lastName: 'Tock',
  },
  {
    username: 'mgantlettg',
    password: '7Xlqs7UC',
    services: { thing: '59654f5afc13ae4df4000024' },
    area: 'Capellanía',
    firstName: 'Montague',
    lastName: 'Gantlett',
  },
  {
    username: 'gredsallh',
    password: 'rfn7OWXv',
    services: { thing: '59654f5afc13ae4df4000025' },
    area: 'Villasis',
    firstName: 'Gradeigh',
    lastName: 'Redsall',
  },
  {
    username: 'owhitrodi',
    password: 'arrkC3lz',
    services: { thing: '59654f5afc13ae4df4000026' },
    area: 'Sanshandao',
    firstName: 'Orion',
    lastName: 'Whitrod',
  },
  {
    username: 'plowreyj',
    password: 'K0czQrPIc',
    services: { thing: '59654f5afc13ae4df4000027' },
    area: 'Utmānzai',
    firstName: 'Page',
    lastName: 'Lowrey',
  },
]

const App = () => {
  return (
    <Home workers={workers}/>
  )
}

export default App
