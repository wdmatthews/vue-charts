export default () => ({
  width: 400,
  height: 400,
  labels: ['1', '2', '3'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: '#81D4FA',
      borderColor: '#81D4FA',
      data: [1, 2, 3],
    },
  ],
  options: {
    color: '#FFFFFF',
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
  },
})
