import MealTile from "@/components/MealTile/MealTile"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
      <section>
        <div className="flex justify-between items-end">
          <h4>Order By:</h4>
          <p>Aug 20, 2024 @ 4pm</p>
        </div>
        <div className="flex justify-between items-end">
          <h4>Next Meal Date:</h4>
          <p>Aug 20, 2024 @ 6pm</p>
        </div>
      </section>

      <section>
        <div className="flex justify-evenly space-x-4 py-4">
          <Button size="lg">Order Food</Button>
          <Button size="lg">Admin</Button>
        </div>
      </section>

      <section>
        <h2>
          What You Ordered{" "}
          <span className="float-right text-red-400">Status</span>
        </h2>
        <div className="space-y-4">
          <MealTile />
          <MealTile />
        </div>
      </section>

      <section>
        <h2>What Others Have Ordered So Far</h2>
        <div className="space-y-4">
          <MealTile />
          <MealTile />
        </div>
      </section>
    </>
  )
}
