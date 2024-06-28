let valueDisplays = document.querySelectorAll (".num");
    let interval = 4000;
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });

    const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navLinks = document.getElementsByClassName('navbar-links')[0]
        const barOne = document.getElementsByClassName('bar one')[0]
        const barTwo = document.getElementsByClassName('bar two')[0]
        const barThree = document.getElementsByClassName('bar three')[0]
        
toggleButton.addEventListener('click',() =>{
            navLinks.classList.toggle('active')
            barOne.classList.toggle('active')
            barTwo.classList.toggle('active')
            barThree.classList.toggle('active')
        });





        var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000)



       