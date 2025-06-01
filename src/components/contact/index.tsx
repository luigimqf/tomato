'use client'

import { Phone, Mail, LucideIcon } from "lucide-react";

const Info = ({Icon,title,description}:{Icon: LucideIcon, title: string, description: string}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        <h3 className="text-lg font-semibold text-text-100">{title}</h3>
      </div>
      <p className="font-medium text-text-200">{description}</p>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Informação de contato</h2>
      <div className="flex justify-between md:gap-40 gap-10">
        <Info 
          Icon={Phone}
          title="Celular"
          description="(31) 9 7599-0672"
        />
        <Info 
          Icon={Mail}
          title="E-mail"
          description="contact@example.com"
        />
      </div>
    </section>
  );
}
