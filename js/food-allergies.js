/*jshint browser: true, devel: true, jquery: true*/

//GLOBAL CHART CONFIGURATION
Chart.defaults.global.responsive = true;
Chart.defaults.global.tooltipTemplate = "<%if (label){%><%=label%> <%}%>";


//CHART INSTANCES
//Chart 1 - Percentage of the population with food allergies.
var chartAllergens = $("#allergy-allergens").get(0).getContext("2d");
var dataAllergens = {
    labels: ["Peanuts", "Tree Nuts", "Fish", "Shellfish", "Milk & Egg", "Soy", "Wheat"],
    datasets: [
        {
            label: "Allergens",
            fillColor: "#00aea9",
            highlightFill: "#61c4cb",
            data: [1.3, 0.6, 0.4, 1.2, 0.4, 0.1, 0.1]
        }
    ]
};
new Chart(chartAllergens).Bar(dataAllergens, {
    barShowStroke: false,
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>"
});


//Chart 2 - Percentage of babies with allergies.
var chartBabies = $("#allergy-babies").get(0).getContext("2d");
var dataBabies = [
    {
        value: 10,
        color: "#f05226",
        highlight: "#f47a23",
        label: "Babies with food allergies: 10%"
    },
    {
        value: 90,
        color: "#fbc421",
        highlight: "#ffe020",
        label: "Babies without food allergies: 90%"
    }
];

new Chart(chartBabies).Doughnut(dataBabies, {
    segmentShowStroke : false
});


//Chart 3 - Percentage of adults with allergies.
var chartAdults = $("#allergy-adults").get(0).getContext("2d");
var dataAdults = [
    {
        value: 1.3,
        color: "#f05226",
        highlight: "#f47a23",
        label: "Adults with food allergies: 1.3%"
    },
    {
        value: 98.7,
        color: "#00aea9",
        highlight: "#61c4cb",
        label: "Adults without food allergies: 98.7%"
    }
];

new Chart(chartAdults).Doughnut(dataAdults, {
    segmentShowStroke : false
});


//Chart 4 - Percentage of babies with egg allergy who can eat cake.
var chartCake = $("#allergy-cake").get(0).getContext("2d");
var dataCake = [
    {
        value: 80,
        color: "#00aea9",
        highlight: "#61c4cb",
        label: "Cake eaters: 80%"
    },
    {
        value: 20,
        color: "#fbc421",
        highlight: "#ffe020",
        label: "Non cake eaters: 20%"
    }
];

new Chart(chartCake).Pie(dataCake, {
    segmentShowStroke : false
});


//Chart 5 - Percentage of children with peanut allergy.
var chartPeanut = $("#allergy-peanut").get(0).getContext("2d");
var dataPeanut = [
    {
        value: 97,
        color: "#f05226",
        highlight: "#f47a23",
        label: "Children without a peanut allergy: 97%"
    },
    {
        value: 3,
        color: "#fbc421",
        highlight: "#ffe020",
        label: "Children with a peanut allergy: 3%"
    }
];

new Chart(chartPeanut).Pie(dataPeanut, {
    segmentShowStroke : false
});


//Chart 6 - Predicted future allergy statistics.
var chartFuture = $("#allergy-future").get(0).getContext("2d");
var dataFuture = {
    labels: [1990, 2008, 2050],
    datasets: [
        {
            label: "Present and Future",
            fillColor: "#f47a23",
            strokeColor: "#f05226",
            pointColor: "#f05226",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [3.6, 4.1, 7.7]
        }
    ]
};




