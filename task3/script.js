 trafficLight1El = document.querySelector('#trafficLight1');
 trafficLight2El = document.querySelector('#trafficLight2');
 trafficLight3El = document.querySelector('#trafficLight3');

        function makeGreen() {
            trafficLight1El.style.background = ('green');
            trafficLight2El.style.background = ('black');
            trafficLight3El.style.background = ('black');

            trafficLight1El.removeEventListener('click', makeGreen);
            trafficLight2El.removeEventListener('click', makeGreen);
            trafficLight3El.removeEventListener('click', makeGreen);

            trafficLight1El.addEventListener('click', makeYellow);
            trafficLight2El.addEventListener('click', makeYellow);
            trafficLight3El.addEventListener('click', makeYellow);
        }

    trafficLight1El.addEventListener('click', makeGreen);

        function makeYellow() {
            trafficLight1El.style.background = ('black');
            trafficLight2El.style.background = ('Yellow');
            trafficLight3El.style.background = ('black');

            trafficLight1El.removeEventListener('click', makeYellow);
            trafficLight2El.removeEventListener('click', makeYellow);
            trafficLight3El.removeEventListener('click', makeYellow);

            trafficLight1El.addEventListener('click', makeRed);
            trafficLight2El.addEventListener('click', makeRed);
            trafficLight3El.addEventListener('click', makeRed);
        }

    trafficLight1El.addEventListener('click', makeGreen);

        function makeRed() {
            trafficLight1El.style.background = ('black');
            trafficLight2El.style.background = ('black');
            trafficLight3El.style.background = ('Red');

            trafficLight1El.removeEventListener('click', makeRed);
            trafficLight2El.removeEventListener('click', makeRed);
            trafficLight3El.removeEventListener('click', makeRed);

            trafficLight1El.addEventListener('click', makeGreen);
            trafficLight2El.addEventListener('click', makeGreen);
            trafficLight3El.addEventListener('click', makeGreen);
        };