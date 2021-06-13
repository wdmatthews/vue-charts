const labels = []
const data = []

for (let i = 0; i < 10; i++) {
  labels.push(`${i + 1}`)
  data.push(Math.random() * 100)
}

export default () => ({
  width: 400,
  height: 400,
  labels: [...labels],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: '#81D4FA',
      borderColor: '#81D4FA',
      data: [...data],
    },
  ],
  options: {
    borderDash: [],
    borderRadius: 0,
    color: '#FFFFFF',
    fill: false,
    indexAxis: 'x',
    scales: {
      x: {
        grid: {
          color: '#757575',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
      y: {
        grid: {
          color: '#757575',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
    },
    tension: 0,
  },
})
