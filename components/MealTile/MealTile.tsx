import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function MealTile() {
  return (
    <div className="flex bg-gray-800 rounded-lg">
      <Image
        className="rounded-lg"
        alt="meal"
        src={"https://picsum.photos/200"}
        width={120}
        height={120}
      />
      <div className="w-full flex justify-between p-4">
        <div>
          <h3>Meal Title</h3>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <p>10</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Button size="icon">
              <ChevronUp />
            </Button>
            <Button size="icon">
              <ChevronDown />
            </Button>
          </div>
          <Button variant="destructive" size="icon">
            X
          </Button>
        </div>
      </div>
    </div>
  )
}
