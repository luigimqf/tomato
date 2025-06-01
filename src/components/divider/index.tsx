import { cn } from "@/lib/utils";
import { ComponentProps } from "react"


export const Divider = ({className, ...props}: ComponentProps<"div">) => {
  return (
    <div className={cn("h-[0.5px] my-5 w-15 bg-foreground",className)} {...props}/>
  )
}