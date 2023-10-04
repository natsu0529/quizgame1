let x1 = 2
let x2 = 2
let x3 = 2
let x4 = 2


document.getElementsByTagName('button')[1].addEventListener('click', () => { while (x1 < 3) { window.alert('GAME OVER') } });

document.getElementsByTagName('button')[0].addEventListener('click', () => { alert('right!'),location.href = "http://natsu0529.html.xdomain.jp/quiz/level2quiz2.html" });

document.getElementsByTagName('button')[2].addEventListener('click', () => { while (x3 < 3) { window.alert('GAME OVER') } });

document.getElementsByTagName('button')[3].addEventListener('click', () => { while (x4 < 3) { window.alert('GAME OVER') } });