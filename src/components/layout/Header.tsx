import { Navigation } from "../navigation"
import { MobileNavigation } from "../navigation/Mobile"
import { ModeToggle } from "../toggle-mode"

export const Header = () => {
  return (
    <header className="w-full z-50 bg-background fixed dark:shadow-none shadow-lg min-h-30 px-10 py-2 flex items-center justify-between">
      <ModeToggle />

      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-3xl font-bold font-rubik text-center whitespace-nowrap px-2">
        DR.LORRAYNE REIS
      </h1>

      <Navigation />
      <MobileNavigation />
    </header>
  )
}