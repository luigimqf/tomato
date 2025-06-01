import { cn } from "@/lib/utils";
import { CardItem } from "@/types"
import { Dot } from "lucide-react"
import { ComponentProps } from "react"

type CardProps = ComponentProps<"div"> & CardItem;

export const Card = ({title,description,list = [], className,...props}: CardProps) => {
  return (
    <div className={cn("w-[350px] md:border-0 border p-2 min-h-[100px] flex flex-col items-start gap-2",className)} {...props}>
      <h3 className="font-semibold font-rubik text-sm text-text-100">{title}</h3>
      {
        list?.length > 0
        ? (
          <ul>
            {
              list.map((item) => (
                <div key={item} className="flex gap-0.5 items-center">
                  <Dot />
                  <li className="font-rubik text-sm text-text-200">{item}</li>
                </div>
              ))
            }
          </ul>
        )
        : <span className="font-rubik text-sm">{description}</span>
      }
    </div>
  )
}