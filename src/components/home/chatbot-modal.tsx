import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { ContentProps } from "@/lib/locale";

const ChatbotModal = ({
  content,
  showDemoModal,
  setShowDemoModal,
}: {
  content: ContentProps;
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <figure className="h-full rounded-t-xl w-full md:max-w-md 2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="w-full relative">
          <Image
            className="rounded-t-xl"
            src={content.img.url}
            alt={content.img.alt}
            width={1000}
            height={1000}
          />
        </div>
        <figcaption className="h-full flex flex-col items-center justify-center space-y-3 bg-white px-4 pt-4 pb-6 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">{content.head}</h3>
          <p className="text-sm text-gray-500">
            {content.desc}
          </p>
          <div className="w-full border border-gray-500" />
          <ul className="text-sm text-gray-500">
            {content.list.map((item) => (
              <li key={item.head} className="space-y-2 m-2">
                <strong>{item.head}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </Modal>
  );
};

export function useChatbotModal({ content }: { content: ContentProps }) {

  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <ChatbotModal
        content={content}
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [content, showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
