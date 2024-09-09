import MealTile from "@/components/MealTile/MealTile";
import PastMeals from "@/components/PastMeals/PastMeals";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<>
			<h1>Food Selection</h1>
			<section>
				<SearchBar />
			</section>
			<section className="flex w-full justify-around">
				<h2>Tags:</h2>
				<Badge>High Protein</Badge>
				<Badge>Vegan</Badge>
				<Button size="lg">Suggest Recipe</Button>
			</section>
			<section>
				<PastMeals />
        <MealTile />
			</section>
		</>
	);
}
