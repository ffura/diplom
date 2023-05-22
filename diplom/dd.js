const imghb = document.querySelector('.hoodblackphoto1')

imghb.addEventListener('mouseover', () => {
  imghb.classList.remove('hoodblackphoto1')
  imghb.classList.add('hoodblackphoto2')
})

imghb.addEventListener('mouseleave', () => {
  imghb.classList.remove('hoodblackphoto2')
  imghb.classList.add('hoodblackphoto1')
})

const imghw = document.querySelector('.hoodwhitephoto1')

imghw.addEventListener('mouseover', () => {
  imghw.classList.remove('hoodwhitephoto1')
  imghw.classList.add('hoodwhitephoto2')
})

imghw.addEventListener('mouseleave', () => {
  imghw.classList.remove('hoodwhitephoto2')
  imghw.classList.add('hoodwhitephoto1')
})

const imgfb = document.querySelector('.footblackphoto1')

imgfb.addEventListener('mouseover', () => {
  imgfb.classList.remove('footblackphoto1')
  imgfb.classList.add('footblackphoto2')
})

imgfb.addEventListener('mouseleave', () => {
  imgfb.classList.remove('footblackphoto2')
  imgfb.classList.add('footblackphoto1')
})

const imgfw = document.querySelector('.footwhitephoto1')

imgfw.addEventListener('mouseover', () => {
  imgfw.classList.remove('footwhitephoto1')
  imgfw.classList.add('footwhitephoto2')
})

imgfw.addEventListener('mouseleave', () => {
  imgfw.classList.remove('footwhitephoto2')
  imgfw.classList.add('footwhitephoto1')
})


const links = document.querySelectorAll('.nav-link')
const contact = document.querySelector('.oknocontacks')
const dostavka = document.querySelector('.oknodostavka')
const closeBtns = document.querySelectorAll('.close')

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', event => {
    switch(event.target.innerHTML.trim()) {
      case 'Контакты': 
        contact.style.zIndex = '1'
        contact.style.display = 'flex'
        break
      case 'Доставка':
        dostavka.style.zIndex = '1'
        dostavka.style.display = 'flex'
    }
  })
}

closeBtns.forEach(button => {
  button.addEventListener('click', () => {
    contact.style.zIndex = '-1'
    dostavka.style.zIndex = '-1'
    shop.style.zIndex = '-1'
    contact.style.display = 'none'
    dostavka.style.display = 'none'
    shop.style.display = 'none'

  })
})

const buyBtns = document.querySelectorAll('.sell')
const shop = document.querySelector('.shop')

for(let i = 0; i < buyBtns.length; i++) {
  buyBtns[i].addEventListener('click', () => {
    shop.style.zIndex = '1'
    shop.style.display = 'block'
  })
}

closeBt