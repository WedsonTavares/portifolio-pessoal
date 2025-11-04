import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Pronto para levar <span className="text-purple">sua</span> marca digital no próximo nível?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Entre em contato comigo hoje e vamos discutir como posso ajudar a
          alcançar seus objetivos.
        </p>

  {/* Se ownerWhatsApp estiver configurado, abrir WhatsApp; caso contrário, usar mailto como fallback */}
        {(() => {
          const wa = (links as any).ownerWhatsApp as string | undefined;
          const waMsg = (links as any).ownerWhatsAppMessage as string | undefined;
          let contactHref = `mailto:${links.ownerEmail}`;

          if (wa && wa.length > 0) {
            // se o usuário forneceu uma URL completa (startsWith http), usar como está
            if (wa.startsWith("http")) {
              contactHref = wa;
            } else {
              const encoded = waMsg ? `?text=${encodeURIComponent(waMsg)}` : "";
              contactHref = `https://wa.me/${wa}${encoded}`;
            }
          }

          return (
            <Link
              href={contactHref}
              target="_blank"
              rel="noreferrer noopener"
              className="md:mt-10"
            >
              <MagicButton
                title="Entrar em Contato"
                icon={<FaLocationArrow />}
                position="right"
                asChild
              />
            </Link>
          );
        })()}
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://github.com/WedsonTavares"
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
          >
            Wedson Tavares
          </Link>{" "}
          |{" "}
          <Link href={links.sourceCode} className="underline">
            Ver Código
          </Link>
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
