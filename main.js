window.addEventListener('DOMContentLoaded',function(){
const burger = document.querySelector('#navbar-burger')
const menu = document.querySelector('#navbar-menu')
const pannel = document.querySelector('#job-pannel')
burger.addEventListener('click',function(){
  burger.classList.toggle('is-active')
  menu.classList.toggle('is-active')
  })

const form = document.forms['search-job']

form.addEventListener('submit',function(e){
  e.preventDefault()
    if (form.elements[2].checked){
      fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=%E2%9C%93&description=${form.elements[0].value}&location=${form.elements[1].value}&full_time=on`)
      .then((resquest) => resquest.json())
      .then(posts =>{
        // console.log(posts)
        renderPannel(posts)
      })
    } else {
      fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=%E2%9C%93&description=${form.elements[0].value}&location=${form.elements[1].value}`)
      .then((resquest) => resquest.json())
      .then(posts =>{
        console.log(posts)
        renderPannel(posts)
        
      })
    }
  })
  function renderPannel(posts) {
    pannel.innerHTML = "";
    posts.forEach(function(post) {
      pannel.appendChild(createItem(post)) 
    })
  }
  function createItem(posts) {
      const template = document.querySelector('template')
      const h4 = template.content.querySelector('h4 > a')
      const company = template.content.querySelector('.company')
      const fulltime = template.content.querySelector('.fulltime')
      const location = template.content.querySelector('.location')
      h4.textContent = posts.title
      h4.href = posts.url
      company.href = posts.company_url
      company.textContent = posts.company
      fulltime.textContent = posts.type
      location.textContent = posts.location
      var result = document.importNode(template.content, true)
      return result
  }
})
