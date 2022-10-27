const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener(
  'click',
  function () {
    let hexColor = '#' + Math.random().toString(16).substr(2, 6) //得到随机的颜色值(16进制格式)
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
  },
  false
)
