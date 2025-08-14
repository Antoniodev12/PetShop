import Image from "next/image";
import about1 from "../../../public/about-1.png";
import about2 from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";


export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image 
                            src={about1} 
                            alt="about1"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4    -bottom-8 rounded-lg overflow-hidden border-4 border-white">
                            <Image 
                            src={about2} 
                            alt="about2"
                            fill
                            quality={100}
                            priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">SOBRE</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, totam et aliquid ad facere magnam quasi eligendi nam culpa harum! Culpa dicta deleniti, minus eos accusamus odit quis voluptates fugiat repellendus quisquam tempora doloribus dolore dolor velit optio libero, ea incidunt ipsum cumque, repudiandae molestias!
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Aberto desde 2007
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Equipe especializada com mais de 10 veterinarios.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Qualidade é a nossa prioridade.
                            </li>
                        </ul>
                    <div className="flex gap-2">
                            <a  target="_blank"
                            href={`https://wa.me/82416583?text=Olá vim pelo site e gostaria de mais informações.`}className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                Contato Via WhatsApp
                            </a>
                            <a href="#" className="text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <MapPin/>
                                Endereço da Loja.
                            </a>
                    </div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}