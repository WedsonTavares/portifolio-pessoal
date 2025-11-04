import Image from "next/image";

import { companies } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading mb-8">
        Stack de  <span className="text-purple">Tecnoloagias</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 space-y-10">

        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16">
          {companies.map(({ id, img, name }) => (
            <div
              key={id}
              className="flex items-center justify-center max-w-32 md:max-w-60"
            >
              <Image
                height={48}
                width={48}
                src={img}
                alt={`${name} logo`}
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
