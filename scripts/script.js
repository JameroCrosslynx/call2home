var ctx = document.getElementById('statisticsChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Google API', 'HTTPS', 'iCloud', 'Instagram', 'Whatsapp', 'Anders'],
        datasets: [{
            backgroundColor: ['#2A7EAA',
                             '#3ADFB2',
                             '#446978',
                             '#E46A62',
                             '#AD132A',
                             '#454545'],
            borderColor: '#fff',
            data: [11019, 
                   5670, 
                   5380, 
                   3002, 
                   2809, 
                   13340]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: false
        }
  }
});