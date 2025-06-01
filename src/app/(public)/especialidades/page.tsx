import { Card } from "@/components/card";
import { SPECIALTIES } from "@/constants";

export default function Especialidades() {
  return (
    <main className="w-full mt-30 flex flex-col justify-center items-center">
      <div className="lg:w-[800px] w-full bg-accent-100 p-10 overflow-auto flex flex-col gap-20 justify-start lg:items-start items-center">
        <h1 className="font-rubik font-medium text-3xl tracking-tight">MINHAS ESPECIALIDADES</h1>
        <div className="flex w-full lg:flex-row flex-col lg:flex-wrap gap-8 lg:justify-between lg:items-start items-center">
          {
            SPECIALTIES.map((item) => {
              const {title,description,list} = item;
              return (
              <Card key={title} title={title} description={description} list={list} className="w-[330px]"/>
            )
            })
          }
        </div>
      </div>
    </main>
  )
}