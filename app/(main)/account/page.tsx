import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MealTile from "@/components/MealTile/MealTile"

export default function Page() {
  return (
    <>
      <h1>My Account</h1>
      <section>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2>Your Name Here</h2>
          <h3>Member since XX/XX/XX</h3>
        </div>
      </section>
      <section>
        <h2>History</h2>
        <MealTile />
        <MealTile />
        <MealTile />
      </section>
    </>
  )
}
