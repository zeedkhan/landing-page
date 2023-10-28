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
    value: "Our AI chatbot offers features like natural language processing, 24/7 availability, and personalized interactions to engage and assist your website visitors effectively."
  },
  {
    key: "Energy Efficiency",
    value: " Our AI analytics include features such as data insights, predictive analytics, and automated reporting to help you make data-driven decisions and optimize your business processes."
  },
  {
    key: "Security",
    value: "Our AI automation tools come with features like task automation, workflow optimization, and integration with various platforms to streamline your business operations and increase efficiency."
  },
]


const ChatbotModal = ({
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
            src="/representation-user-experience-interface-design-smartphone.jpg"
            alt="Representation user experience interface design smartphone"
            width={1000}
            height={1000}
          />
        </div>
        <figcaption className="flex flex-col items-center justify-center space-y-3 bg-white px-4 pt-4 pb-6 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Feature Highlights</h3>
          <p className="text-sm text-gray-500">
            AI InfoBot is here to showcase the key features of our AI services. It can explain how our products work and why they{`'`}re beneficial for your business. Feel free to ask about specific features you{`'`}re interested in!          </p>
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

export function useChatbotModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <ChatbotModal
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
