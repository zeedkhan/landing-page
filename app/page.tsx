import Card from "@/components/home/card";
import { LINE_URL } from "@/lib/constants";
import { truncate } from "@/lib/utils";
import { ReactElement } from "react-markdown/lib/react-markdown";
import FirstProduct from "@/components/home/first-product";
import Performance from "@/components/home/performace";
import SecondProduct from "@/components/home/second-product";
import { Phone } from 'lucide-react';


export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://www.linkedin.com/in/tanakit-patan-3b488a201/"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g></svg>

          <p className="text-sm font-semibold text-sky-600">
            Introducing of Sample Website
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Building website for your project
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          An opinionated collection of components, hooks, and utilities for your
          next project.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:text-black" viewBox="0 0 48 48">
              <path fill="#00c300" d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"></path><path fill="#fff" d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"></path>
            </svg>
            <p>Chat with us via Line</p>
          </a>
          <a
            className="group hover:bg-black flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-500"
            href="tel:012345789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="group-hover:text-white h-10 w-10 p-1.5 text-black" />
            <p className="group-hover:text-white">
              Contact us via
            </p>
          </a>

        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large, extraClass }) => (
          <Card
            key={title}
            title={title}
            description={description}
            extraClass={extraClass}
            demo={
              title === "Smart Home Assistant" ? (
                <FirstProduct />
              ) : title === "AI-Optimized SEO Analyzer" ? (
                <Performance />
              ) : title === "AI InfoBot" ? (
                <SecondProduct />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>

    </>
  );
}

interface FeatureProps {
  title: string,
  description: string;
  large?: boolean;
  extraClass?: string;
  demo?: ReactElement;
}

const features: FeatureProps[] = [
  {
    title: "Smart Home Assistant",
    description:
      truncate(
        "The SmartHome Assistant is your all-in-one solution for transforming your traditional home into a cutting-edge, intelligent living space. Our AI-powered system seamlessly integrates with your home's devices and appliances to create a smart, efficient, and personalized environment. Whether you want to control your lights, adjust your thermostat, secure your home, or manage your entertainment system, the SmartHome Assistant does it all.",
        100
      ),
    extraClass: "h-fit",
    large: true,
  },
  {
    title: "AI-Optimized SEO Analyzer",
    description:
      truncate(
        "Our AI-Optimized SEO Analyzer is a powerful tool designed to supercharge your website's search engine optimization (SEO) and overall web performance. With the ever-changing landscape of search engine algorithms, it's essential to have a competitive edge in digital marketing. Our AI-driven solution offers a comprehensive analysis of your website and provides actionable insights to boost your search rankings and enhance user experience.",
        100
      ),
    extraClass: "h-60",
  },
  {
    title: "Smart Home Assistant",
    description:
      truncate(
        "The SmartHome Assistant is your all-in-one solution for transforming your traditional home into a cutting-edge, intelligent living space. Our AI-powered system seamlessly integrates with your home's devices and appliances to create a smart, efficient, and personalized environment. Whether you want to control your lights, adjust your thermostat, secure your home, or manage your entertainment system, the SmartHome Assistant does it all.",
        100
      ),
    extraClass: "h-fit",
  },
  {
    title: "AI InfoBot",
    description:
      truncate(
        "AI InfoBot is here to showcase the key features of our AI services. It can explain how our products work and why they're beneficial for your business. Feel free to ask about specific features you're interested in!",
        100
      ),
    extraClass: "h-fit",
    large: true,
  },
];
