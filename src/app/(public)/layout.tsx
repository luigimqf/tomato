import { Header } from "@/components/layout/Header";
import { ChildrenProp } from "@/types";

export default function PageLayout({children}:ChildrenProp) {
  return (
        <div className="relative w-full h-screen flex flex-col justify-start items-center overflow-auto">
          <Header />
          {children}
          <div className="min-h-10 w-full flex justify-center items-center">
            <span className="font-rubik text-xs text-text-100">© 2035 por DR. Lorrayne Reis</span>
          </div>
        </div>
  )
}