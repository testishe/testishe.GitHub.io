
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function onlineTool() {
        let peoplesNum = document.getElementById("peoples"),
            currPeople = document.getElementById("current-people"),
            someName = document.getElementById("JSname"),
            someCity = document.getElementById("JScity");

        let arrNames = ["Виктория", "Юрий", "Алена", "Александр", "Дмитрий", "Юлия", "Сергей", "Андрей", "Алина", "Жанна", "Богдан", "Евгения", "Дарья", "Антон", "Тимур", "Елена", "Мария", "Владимир", "Роман"];

        let arrCities = ["(Москва)", "(Питер)", "(Белгород)", "(Ростов)", "(Воронеж)", "(Орел)", "(Казань)", "(Нижний Новгород)", "(Уфа)", "(Тюмень)", "(Красноярск)", "(Тула)", "(Ставрополь)", "(Астрахань)", "(Сочи)", "(Омск)", "(Владимир)", "(Краснодар)", "(Ижевск)"];

        peoplesNum.innerHTML = "138";

        setInterval(function() {
            peoplesNum.innerHTML = getRandomInt(100, 180);
        }, 7000);


        setInterval(function() {
            $(currPeople).addClass("active");
            
            setTimeout(function() {
                $(currPeople).removeClass("active");
            }, 4000);

            someName.innerHTML = arrNames[getRandomInt(0, 18)];
            someCity.innerHTML = arrCities[getRandomInt(0, 18)];

        }, getRandomInt(8000, 12000));
    }

    onlineTool();