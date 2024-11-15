import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
      Full Stack Developer
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I'm a 17-year-old full-stack developer with a deep passion for building and experimenting with innovative projects. Whether it's working with front-end technologies like Next.js or handling complex back-end logic, I love the challenge of bringing ideas to life through code. 
        </p>
        <p>
        Constantly learning and exploring new tools and frameworks, I'm always pushing myself to improve and stay on the cutting edge of web development. I thrive on solving problems and turning concepts into functional, polished products. From personal experiments to collaborative projects, I'm driven by curiosity and the thrill of creating something new from scratch.
      
          
        </p>
       
     
      
      </div>
    </section>
  );
}
