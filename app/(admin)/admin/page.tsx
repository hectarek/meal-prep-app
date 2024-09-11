import MealTile from "@/components/MealTile/MealTile"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <h1>Admin View</h1>
      <section>
        <h2>Next Cooking Date</h2>
        <h3>XX/XX/XX</h3>
      </section>
      <section>
        <h2>Food Status</h2>
        <Button>Selecting Menu</Button>
        <Button>Preparing</Button>
        <Button>Ready for Pick up</Button>
      </section>
      <section>
        <h2>What ppl ordered</h2>
        <MealTile />
        <MealTile />
      </section>
      <footer>
        <Button>Ingredients</Button>
        <Button>Suggestions</Button>
        <Button>Back</Button>
      </footer>
    </>
  )
}
