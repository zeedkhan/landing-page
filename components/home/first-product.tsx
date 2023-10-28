"use client";

import { useDemoModal } from "@/components/home/demo-modal";
import Image from "next/image";

export default function FirstProduct() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  return (
    <>
      <div className="w-full relative cursor-pointer"
        onClick={() => setShowDemoModal(true)}>
        <Image
          src="/people-generating-images-using-artificial-intelligence-laptop.jpg"
          alt="People generating images using artificial intelligence laptop"
          width={1000}
          height={1000}
        />

      </div>
      <DemoModal />
    </>
  );
}
