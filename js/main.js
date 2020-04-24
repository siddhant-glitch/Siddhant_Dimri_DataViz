var countries= document.getElementById("pieChart")
var chart = new Chart(countries,{
  type: 'pie',
  data: 
  {
    labels: ['Gold', 'Silver', 'Bronze'],
    datasets: 
        [{
        backgroundColor: ['#ffd982', '#efefef', '#e2a881'],
        data: ['55.6', '30.4' ,'14'],
        borderWidth: 2,
        }]
  },
  options:
  {
      responsive: true,
      maintainAspectRatio:false,
      legend: {
        display: false,
        position: 'top'
      }
  }
});




var countries2= document.getElementById("barChart")
var chart2 = new Chart(countries2,{
  type: 'horizontalBar',
  data: {
    labels: ['Vancouver 2010', 'London 2012', 'Sochi 2014', 'Rio 2016'],
    
    datasets : [
      {
        label: 'MEN',
        data: ['90', '89', '91', '89'],
        backgroundColor: ['#d2aae2', '#d2aae2', '#d2aae2', '#d2aae2'],
        borderWidth: 2,
      },
      {
        label: 'WOMEN',
        data: ['10', '11', '9', '11'],
        backgroundColor: ['#a7d9d3', '#a7d9d3', '#a7d9d3', '#a7d9d3'],
        borderWidth: 2,
      }

    ]
    
  },
  options:
  {
      responsive: true,
      maintainAspectRatio:false,
      legend: {
        display: false,
        position: 'top'
      }
  }

});




var countries3= document.getElementById("lineChart")
var chart3 = new Chart(countries3,{
  type: 'line',
  data: 
  {
    labels: ['1928', '1936', '1952', '1960', '1968', '1976', '1984', '1992', '1998', '2006', '2014'],
    datasets: 
        [{
        backgroundColor: ['#ffd982'],
        data: ['4', '4', '0', '8', '4', '0', '9', '6', '5', '0', '6', '0', '10', '0', '9', '8', '15', '16', '16', '30', '11'],
        borderWidth: 2,
        }]
  },
  options:
  {
      responsive: true,
      maintainAspectRatio:false,
      legend: {
        display: false,
        position: 'top'
      }
  }
});





var countries4= document.getElementById("lineChart2")
var chart4 = new Chart(countries4,{
  type: 'line',
  data: 
  {
    labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1996', '2000', '2004', '2008', '2012', '2014', '2016'],
    datasets: 
        [{
        backgroundColor: ['#f896ff'],
        data: ['5', '16', '22', '10', '6', '5', '9', '5', '7', '8', '6', '14', '46', '14', '23', '29', '27', '27', '37', '42', '48', '25', '29'],
        borderWidth: 2,
        }]
  },
  options:
  {
      responsive: true,
      maintainAspectRatio:false,
      legend: {
        display: false,
        position: 'top'
      }
  }
});


var countries5= document.getElementById("doughnutChart")
var chart5 = new Chart(countries5,{
  type: 'doughnut',
  data: 
  {
    labels: ['USA', 'Russia', 'Germany', 'Great Britain', 'France'],
    datasets: 
        [{
        backgroundColor: ['#77f3ff', '#f877ff', '#778cff', '#77ffa7', '#fcff77'],
        data: ['2827', '1910' ,'1754', '883', '840'],
        borderWidth: 5,
        }]
  },
  options:
  {
      responsive: true,
      maintainAspectRatio:false,
      legend: {
        display: false,
        position: 'top'
      }
  }
});




var countries6= document.getElementById("pieChart2")
var chart6 = new Chart(countries6,{
  type: 'pie',
  data: 
  {
    labels: ['USA', 'Canada'],
    datasets: 
        [{
        backgroundColor: ['#9393f9', '#f79494'],
        data: ['2827', '501'],
        borderWidth: 2,
        }]
  },
  options:
  {
      responsive: true,
      maintainAspectRatio:false,
      legend: {
        display: false,
        position: 'top'
      }
  }
});

var countries7= document.getElementById("polarChart")
var chart7 = new Chart(countries7,{
  type: 'polarArea',
  data: {
    labels: ['Canada', 'Soviet Union', 'USA'],
    
    datasets : [
      {
        label: 'Total Medals',
        data: ['22', '9', '17'],
        backgroundColor: ['#d7ecfb', '#ebe0ff', '#c6f2e8'],
        borderWidth: 2,
      }

    ]
    
  }

});