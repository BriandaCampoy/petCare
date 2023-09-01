const ctx = document.getElementById('chart');

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cats',
      data: [300, 250, 510, 444, 365, 600, 700, 856, 662, 1254, 1120, 800],
      fill: false,
      borderColor: '#FF6A55',
      tension: .4
    },
    {
      label: 'Dogs',
      data: [504, 763, 896, 435, 489, 963, 1200, 785, 375, 654, 954, 1101],
      fill: false,
      borderColor: '#0075FF',
      tension: .4
    }
  ]
};

new Chart(ctx, {
  type: 'line',
  data: data
});
