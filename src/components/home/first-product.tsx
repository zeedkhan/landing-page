"use client";

import { useDemoModal } from "@/components/home/demo-modal";
import { ContentProps } from "@/lib/locale";
import Image from "next/image";

export default function FirstProduct({ content }: { content: ContentProps }) {

  const { DemoModal, setShowDemoModal } = useDemoModal({ content });

  return (
    <div className="w-full h-[18rem]">
      <div className="relative w-full cursor-pointer h-full "
        onClick={() => setShowDemoModal(true)}>
        <Image
          layout="fill"
          style={{ objectFit: "cover", backgroundPosition: "center" }}
          src="/service-1.jpg"
          alt="People generating images using artificial intelligence laptop"
        />

      </div>
      <DemoModal />
    </div>
  );
}
