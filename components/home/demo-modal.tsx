import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";


const details = [
  {
    key: "Voice Control",
    value: "Use natural language commands to control your entire home."
  },
  {
    key: "Energy Efficiency",
    value: "Optimize energy usage and save on utility bills with intelligent heating, cooling, and lighting management."
  },
  {
    key: "Security",
    value: "Monitor your home's security with AI-driven surveillance and instant alerts."
  },
  {
    key: "Entertainment Hub",
    value: "Manage your music, movies, and streaming services for the ultimate entertainment experience."
  }
]


const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <figure className="rounded-t-xl w-full overflow-hidden md:max-w-md 2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="w-full relative">
          <Image
            src="/people-generating-images-using-artificial-intelligence-laptop.jpg"
            alt="People generating images using artificial intelligence laptop"
            width={1000}
            height={1000}
          />
        </div>
        <figcaption className="flex flex-col items-center justify-center space-y-3 bg-white px-4 pt-4 pb-6 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Smart Home Assistant</h3>
          <p className="text-sm text-gray-500">
            The SmartHome Assistant is your all-in-one solution for transforming your traditional home into a cutting-edge, intelligent living space. Our AI-powered system seamlessly integrates with your home{`'`}s devices and appliances to create a smart, efficient, and personalized environment. Whether you want to control your lights, adjust your thermostat, secure your home, or manage your entertainment system, the SmartHome Assistant does it all.
          </p>
          <div className="w-full border border-gray-500" />
          <ul className="text-sm text-gray-500">
            {details.map((item) => (
              <li key={item.key} className="space-y-2 m-2">
                <strong>{item.key}</strong>
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
