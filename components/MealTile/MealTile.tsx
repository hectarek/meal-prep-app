import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MealTile() {
    return (
        <div className="flex">
            <Image alt="meal" src={"https://picsum.photos/200"} width={100} height={100}/>
            <div>
                <h3>Meal Title</h3>
                <div>
                    <Button>Request</Button>
                </div>
            </div>
        </div>
    )
}