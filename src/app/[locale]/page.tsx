import Card from "@/components/home/card";
import { truncate } from "@/lib/utils";
import { ReactElement } from "react-markdown/lib/react-markdown";
import FirstProduct from "@/components/home/first-product";
import Performance from "@/components/home/performace";
import SecondProduct from "@/components/home/second-product";
import Image from "next/image";
import Contact from "@/components/shared/contact";
import Slider from "@/components/slider";
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Service } from "@/lib/mock-service";
import { ContentProps } from "@/lib/locale";


type Props = {
  params: {
    locale: string
  }
}

interface FeatureProps {
  title: string,
  description: string;
  large?: boolean;
  extraClass?: string;
  demo?: ReactElement;
  content: ContentProps
}


export default function Home({ params: { locale } }: Props) {

  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");
  const products = useTranslations("IndexPage.products");
  const services = useTranslations("IndexPage.services");
  const productT: {
    productColumnKey: string[];
    productsDetail: Service[];
  } = {
    productColumnKey: products.raw("productColumnKey"),
    productsDetail: products.raw("productsDetail"),
  };

  const features: FeatureProps[] = [
    {
      title: services.raw("service1.head"),
      description:
        truncate(
          services.raw("service1.desc"),
          100
        ),
      extraClass: "h-fit",
      large: true,
      // @ts-ignore
      content: services.raw("service1")
    },
    {
      title: services.raw("mockSEO.head"),
      description:
        truncate(
          services.raw("mockSEO.desc"),
          100
        ),
      extraClass: "h-60",
      // @ts-ignore
      content: services.raw("mockSEO")
    },
    {
      title: services.raw("service1.head"),
      description:
        truncate(
          services.raw("service1.desc"),
          100
        ),
      extraClass: "h-fit",
      large: false,
      // @ts-ignore
      content: services.raw("service1")
    },
    {
      title: services.raw("service2.head"),
      description:
        truncate(
          services.raw("service2.desc"),
          100
        ),
      extraClass: "h-fit",
      large: true,
      // @ts-ignore
      content: services.raw("service2")
    },
  ];


  return (
    <>
      <div className="z-10 w-full max-w-screen-xl animate-fade-up z-10 xl:px-0 mb-10 px-5 flex flex-col space-y-4">
        <div className="flex flex-col space-y-4 mb-4">
          <h1
            className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            {t.raw('title')}
          </h1>

          <div
            className="animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <p>{t.raw("subHead")}</p>
          </div>
        </div>


        <div className="relative bg-gray-200/70 w-full h-96 rounded-xl flex flex-row justify-center items-center text-center">
          <Image
            className="rounded-xl"
            alt="shipping boat"
            fill
            style={{ objectFit: "cover" }}
            src={'/banner.jpg'}
          />
        </div>
      </div>


      <div className="w-full z-10 xl:px-0  px-5 flex flex-col jusitfy-center items-center">
        {/* <a
          href="https://www.linkedin.com/in/tanakit-patan-3b488a201/"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 72 72"><g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g></svg>

          <p className="text-sm font-semibold text-sky-600">
            Introducing of Sample Website
          </p>
        </a> */}
        <h2
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          {t.raw("contact")}
        </h2>
        <Contact />


      </div>

      <div className="my-10 w-full max-w-screen-xl animate-fade-up px-5 xl:px-0 flex flex-row space-x-2 justify-evenly">
        <div className="shadow-xl cursor-pointer relative bg-gray-200/70 w-[45%] h-96 rounded-xl flex flex-row justify-center items-center text-center">
          <Image
            className="rounded-xl"
            alt="shipping boat"
            fill
            style={{ objectFit: "cover" }}
            src={'/people-generating-images-using-artificial-intelligence-laptop.jpg'}
          />
          <div className="absolute w-full h-20 bg-slate-100/80 justify-center flex items-center">
            <p className="font-semibold text-2xl">Promotion - 1</p>
          </div>
        </div>

        <div className="cursor-pointer relative bg-gray-200/70 w-[45%] h-96 rounded-xl flex flex-row justify-center items-center text-center">
          <Image
            className="rounded-xl"
            alt="shipping boat"
            fill
            style={{ objectFit: "cover" }}
            src={'/representation-user-experience-interface-design-smartphone.jpg'}
          />
          <div className="absolute w-full h-20 bg-slate-100/80 justify-center flex items-center">
            <p className="font-semibold text-2xl">Promotion - 2</p>
          </div>
        </div>
      </div>


      <div
        className="w-full z-10 max-w-4xl xl:px-0 px-5 flex flex-col jusitfy-center space-y-2 items-center">
        <p
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[4rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          {t.raw("serviceHead")}
        </p>

        <p
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-2xl md:leading-[3rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          {t.raw("serviceDetails")}
        </p>
      </div>


      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large, extraClass, content }, index) => (
          <Card
            key={title + index}
            title={title}
            description={description}
            extraClass={extraClass}
            demo={
              title === "Smart Home Assistant" || title === "ผู้ช่วยบ้านอัจฉริยะ" ? (
                <FirstProduct content={content} />
              ) : title === "AI-Optimized SEO Analyzer" || title === "เครื่องวิเคราะห์ SEO ที่เพิ่มประสิทธิภาพด้วย AI" ? (
                <Performance content={content} />
              ) : title === "Feature Highlights" || title === "จุดเด่นของคุณลักษณะ" ? (
                <SecondProduct content={content} />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>

      <div className="my-10 w-full max-w-screen-xl animate-fade-up px-5 xl:px-0">

        <Slider products={productT} />
      </div>

    </>
  );
}