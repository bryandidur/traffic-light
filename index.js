
let trafficLight;
const trafficLightElems = document.querySelectorAll('.traffic-light .item');
const formElem = document.querySelector('#form');

formElem.onsubmit = (event) => {
    event.preventDefault();
    const items = [];
    const inputElems = event.target.querySelectorAll('input');

    for (let i = 0; i < inputElems.length; i++) {
        items.push(
            new LightItem(trafficLightElems[i], inputElems[i].name, Number(inputElems[i].value))
        );
    }

    if (trafficLight) {
        trafficLight.stop();
    }

    trafficLight = new TrafficLight(items);
    trafficLight.init();
};
