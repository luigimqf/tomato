import { ComponentProps } from "react"
import { Separator } from "../ui/separator"
import { cn } from "@/lib/utils"

export const SectionTitle = ({className,...props}: ComponentProps<"div">) => {
  return (
    <div className={cn("w-full relative flex justify-between md:pl-5", className)} {...props}>
      <Separator className="md:max-w-[60%] md:hidden block max-w-[30%] self-end bg-foreground"/>
      <h3 className="md:text-3xl text-2xl font-rubik font-semibold tracking-tight">QUEM SOU</h3>
      <Separator className="md:max-w-[60%] max-w-[30%] self-end bg-foreground"/>
    </div>
  )
}