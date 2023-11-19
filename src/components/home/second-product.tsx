"use client";

import { ContentProps } from "@/lib/locale";
import { useChatbotModal } from "./chatbot-modal";
import Image from "next/image";

export default function SecondProduct({ content }: { content: ContentProps }) {

  const { DemoModal, setShowDemoModal } = useChatbotModal({ content });

  return (
    <div className="w-full h-[18rem]">
      <div className="relative w-full cursor-pointer h-full "
        onClick={() => setShowDemoModal(true)}>
        <Image
          fill
          style={{ backgroundPosition: "center", objectFit: "cover" }}
          src="/service-2.jpg"
          alt="People generating images using artificial intelligence laptop"
        />

      </div>
      <DemoModal />
    </div>
  );
}
