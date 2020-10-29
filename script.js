document.getElementById('firstButton').addEventListener('click', e => {
  const paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs.length);
document.getElementById("firstEmpty").innerHTML = `There are ${paragraphs.length} p tags on this page`;
})

document.getElementById('secondButton').addEventListener('click', e => {
  const firstIDNum = document.getElementById("firstID").getElementsByTagName("p");
document.getElementById("secondEmpty").innerHTML = `There are ${firstIDNum.length} elements in the first ID`;
})

document.getElementById('thirdButton').addEventListener('click', e => {
  const secondIDNum = document.getElementById("secondID").getElementsByTagName("p");
document.getElementById("thirdEmpty").innerHTML = `There are ${secondIDNum.length} elements in the second ID`;
})

