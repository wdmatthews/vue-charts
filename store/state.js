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
      label: 'Dataset',
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
    plugins: {
      title: {
        display: true,
        text: 'Chart',
        color: '#FFFFFF',
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X Axis',
          color: '#FFFFFF',
        },
        grid: {
          display: true,
          color: '#757575',
          lineWidth: 1,
          drawBorder: true,
          borderColor: '#757575',
          borderWidth: 1,
          drawTicks: true,
          tickColor: '#757575',
          tickWidth: 1,
          tickLength: 8,
        },
        ticks: {
          display: true,
          color: '#FFFFFF',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis',
          color: '#FFFFFF',
        },
        grid: {
          display: true,
          color: '#757575',
          lineWidth: 1,
          drawBorder: true,
          borderColor: '#757575',
          borderWidth: 1,
          drawTicks: true,
          tickColor: '#757575',
          tickWidth: 1,
          tickLength: 8,
        },
        ticks: {
          display: true,
          color: '#FFFFFF',
        },
      },
    },
    tension: 0,
  },
})
