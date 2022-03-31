const cat = {
  hunger: 100
}

function update() {
  let elem = document.getElementById('cat')
  let progressBar = elem.querySelector('.progress-bar')
  progressBar.style.width = cat.hunger + "%"
  if (cat.hunger > 50) {
    progressBar.classList.add('bg-success')
    progressBar.classList.remove('bg-danger')
    progressBar.classList.remove('bg-warning')
  }
  else if (cat.hunger <= 50 && cat.hunger > 25) {
    progressBar.classList.remove('bg-success')
    progressBar.classList.remove('bg-danger')
    progressBar.classList.add('bg-warning')
  }
  else {
    progressBar.classList.remove('bg-success')
    progressBar.classList.remove('bg-warning')
    progressBar.classList.add('bg-danger')
  }
}


function feed() {
  if (cat.hunger < 100 && cat.hunger > 0) {
    cat.hunger += 5
  }
  update()
}

function getHungry() {
  if (cat.hunger > 0) {
    cat.hunger -= Math.floor(Math.random() * 10)
  }
  update()
}



// run a provided function every given number of seconds
// provide the name of the function 
// DO NOT INVOKE IT


setInterval(getHungry, 1000)
