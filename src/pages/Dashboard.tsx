import UserStats from "@/components/dashboard/UserStats";
import RecommendedMovies from "@/components/dashboard/UserRecommendedMovies";
import MovieStatsCharts from "@/components/dashboard/MovieStatsCharts";
import LatestMoviesTable from "@/components/dashboard/LatestMoviesTable";

export default function Dashboard() {

  return (
    <>
      <UserStats />
      <RecommendedMovies />
      <MovieStatsCharts />
      <LatestMoviesTable />
    </>
  )
}