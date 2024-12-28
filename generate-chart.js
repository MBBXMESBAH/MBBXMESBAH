const chartConfig = {
  type: 'doughnut',
  data: {
    labels: ['JavaScript', 'Python', 'HTML/CSS', 'C++', 'PHP', 'SQL', 'TypeScript' ],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#F1E05A', '#3572A5', '#E34C26', '#F34B7D'],
      },
    ],
  },
};

const chartUrl = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify(chartConfig))}`;

console.log('Chart URL:', chartUrl);
