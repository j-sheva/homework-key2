'use strict';
let playList = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },
  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },
  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },
  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },
  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },
  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },
  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },
  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
];

let container = document.createElement('div');

let list = document.createElement('ol');

const listItem = playList.map((item) => {
  let li = document.createElement('li');
  li.innerText = `Author: ${item.author},\n Song: ${item.song}`;
  return li;
});

container.innerHTML = 'List';
listItem.forEach((item) => list.appendChild(item));
container.append(list);

document.body.append(container);
