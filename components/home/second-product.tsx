"use client";

import { useChatbotModal } from "./chatbot-modal";
import Image from "next/image";

export default function SecondProduct() {
  const { DemoModal, setShowDemoModal } = useChatbotModal();
  return (
    <>
      <div className="w-full relative cursor-pointer"
        onClick={() => setShowDemoModal(true)}>
        <Image
          src="/representation-user-experience-interface-design-smartphone.jpg"
          alt="Representation user experience interface design smartphone"
          width={1000}
          height={1000}
        />

      </div>
      <DemoModal />
    </>
  );
}
