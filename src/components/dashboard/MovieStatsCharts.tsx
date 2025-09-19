// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function MovieStatsChart() {
  const data = {
    labels: ["Action", "Drama", "Comedy", "Sci-Fi", "Romance"],
    datasets: [
      {
        label: "Watched by Genre",
        data: [12, 9, 7, 15, 4],
        backgroundColor: "#e11d48",
      },
    ],
  };

  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-xl font-semibold mb-4">Movie stats</h2>
      {/* <Bar data={data} /> */}
    </section>
  );
}
