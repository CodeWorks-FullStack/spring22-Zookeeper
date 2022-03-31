let profit = 0

const animals = {
  koko: {
    hunger: 70,
    emoji: '🦍'
  },
  tony: {
    hunger: 100,
    emoji: '🐅'
  },
  geoffery: {
    hunger: 100,
    emoji: '🦒'
  },
  penguins: {
    hunger: 100,
    emoji: '🐧🐧🐧🐧'
  }
}


// draw all the animals dynamically
function drawAnimals() {
  let template = ''
  for (let name in animals) {
    let animal = animals[name]
    template += /* html */`
    <div id="${name}" class="col-md-6 bg-secondary p-2 border border-dark shadow fence" oncontextmenu="return false">
      <div class="pen">
        <marquee behavior="alternate" scrolldelay="${Math.random() * 1000}">
          <marquee behavior="alternate" direction="up" scrolldelay="${Math.random() * 1000}">
            <h2 class="animal" onclick="feed('${name}')"> ${animal.emoji} </h2>
          </marquee>
        </marquee>
      </div>
      <div class="progress">
        <div class="progress-bar bg-danger no-select" role="progressbar" style="width: 100%" aria-valuemin="0"
          aria-valuemax="100">${name}</div>
      </div>
    </div>    
    `
  }
  document.getElementById('animals-row').innerHTML = template
}


function update(name) {
  let animal = animals[name]
  let elem = document.getElementById(name)
  let progressBar = elem.querySelector('.progress-bar')
  progressBar.style.width = animal.hunger + "%"
  if (animal.hunger > 50) {
    progressBar.classList.add('bg-success')
    progressBar.classList.remove('bg-danger')
    progressBar.classList.remove('bg-warning')
  }
  else if (animal.hunger <= 50 && animal.hunger > 25) {
    progressBar.classList.remove('bg-success')
    progressBar.classList.remove('bg-danger')
    progressBar.classList.add('bg-warning')
  }
  else {
    progressBar.classList.remove('bg-success')
    progressBar.classList.remove('bg-warning')
    progressBar.classList.add('bg-danger')
  }
  if (animal.hunger <= 0) {
    elem.querySelector('h2').innerText = '👻'
  }
}

function updateProfit() {
  document.getElementById('profit').innerText = profit.toString()
}


function feed(name) {
  if (animals[name].hunger < 100 && animals[name].hunger > 0 && profit > 50) {
    profit -= 25
    animals[name].hunger += 5
  }
  update(name)
  updateProfit()
}

function getHungry() {
  // for every animal in dictionary
  for (let name in animals) {
    let animal = animals[name]
    if (animal.hunger > 0) {
      animal.hunger -= Math.floor(Math.random() * 10)
    }
    update(name)
  }

}


function makeMoney() {
  let total = 0
  for (let name in animals) {
    let animal = animals[name]
    if (animal.hunger > 1) {
      total += 50
    }
  }
  if (total == 0) {
    alert("You will never financially recover")
  }
  profit += total
  updateProfit()
}


// run a provided function every given number of seconds
// provide the name of the function 
// DO NOT INVOKE IT


setInterval(getHungry, 1000)
setInterval(makeMoney, 3000)
drawAnimals()