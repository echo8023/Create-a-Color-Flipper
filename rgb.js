const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  let hexColor = getRandomNumber()
  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
})

function getRandomNumber() {
  //得到随机的颜色值(rgb格式)
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
