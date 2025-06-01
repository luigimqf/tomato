import { Card } from "@/components/card";
import { SectionTitle } from "@/components/section-title";
import { Separator } from "@/components/ui/separator";
import { BIO_INFO } from "@/constants";
import photo from "../../../public/photo.jpg"
import Image from "next/image";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <main className="w-full mt-30 flex flex-col justify-center items-center">
      <div id="home" className="lg:w-[800px] w-full overflow-auto flex flex-col gap-20 justify-start items-center">
        <Image
          src={photo}
          alt="photo"
          width={800}
          height={430}
          className="w-full max-w-[800px] max-h-[430px] object-cover"
        />

        <div id="bio" className="w-full bg-accent-100 text-text-100 p-10 gap-3 flex flex-col items-start justify-center">
          <span className="md:text-5xl text-3xl font-rubik tracking-tighter">“O SEGREDO DE CHEGAR</span>
          <span className="md:text-5xl text-3xl font-rubik tracking-tighter">À FRENTE</span>
          <span className="md:text-5xl text-3xl font-rubik tracking-tighter">É COMEÇAR”</span>
          <Separator className="bg-text-100 max-w-25"/>
          <span className="md:text-lg text-sm font-rubik tracking-tighter">MARK TWAIN</span>
        </div>

        <div className="w-full gap-10 flex flex-col items-center">
          <SectionTitle />
          <div className="w-full flex md:justify-between justify-center flex-wrap md:gap-5 gap-10">
            {
              BIO_INFO.map((item) => {
                const {title,description,list} = item;
                return (
                <Card key={title} title={title} description={description} list={list}/>
              )
              })
            }
          </div>
        </div>
        <ContactSection />
      </div>
    </main>
  );
}
