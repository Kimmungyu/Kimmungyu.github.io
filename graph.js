var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ['5', '4', '3', '2', '1'],
      datasets: [{
          label: 'Redwood Ratings',
          backgroundColor: 'rgba(255, 223, 150, 0.5)',
          borderColor: 'rgba(249, 174, 47, 1)',
          data: [-3, 4, 5, -4, -1]
      }]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false //this will remove only the label
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 9,
          fontFamily: "'Proxima Nova Bold',sans-serif",
          stepSize: 5,
          suggestedMin: -5,    // minimum will be 0, unless there is a lower value.
          suggestedMax: 5
        }
      }]
    }
  }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ['3', '2', '1'],
      datasets: [{
          label: 'Redwood Ratings',
          backgroundColor: 'rgba(255, 223, 150, 0.5)',
          borderColor: 'rgba(249, 174, 47, 1)',
          data: [5, -4, -1]
      }]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false //this will remove only the label
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 9,
          fontFamily: "'Proxima Nova Bold',sans-serif",
          stepSize: 5,
          suggestedMin: -5,    // minimum will be 0, unless there is a lower value.
          suggestedMax: 5
        }
      }]
    }
  }
});








var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ['5', '4', '3', '2', '1'],
      datasets: [{
          label: 'Redwood Ratings',
          backgroundColor: 'rgba(255, 223, 150, 0.5)',
          borderColor: 'rgba(249, 174, 47, 1)',
          data: [2.5, -1.5, -2.8, -4.8, -2.4]
      }]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false //this will remove only the label
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 9,
          fontFamily: "'Proxima Nova Bold',sans-serif",
          stepSize: 5,
          suggestedMin: -5,    // minimum will be 0, unless there is a lower value.
          suggestedMax: 5
        }
      }]
    }
  }
});







var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ['5', '4', '3', '2', '1'],
      datasets: [{
          label: 'Redwood Ratings',
          backgroundColor: 'rgba(255, 223, 150, 0.5)',
          borderColor: 'rgba(249, 174, 47, 1)',
          data: [4, 3.6, 5, -4, -1]
      }]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false //this will remove only the label
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 9,
          fontFamily: "'Proxima Nova Bold',sans-serif",
          stepSize: 5,
          suggestedMin: -5,    // minimum will be 0, unless there is a lower value.
          suggestedMax: 5
        }
      }]
    }
  }
});
