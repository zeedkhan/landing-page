"use client";

import WebVitals from "./web-vitals";
import { usePerformaceModal } from "@/components/home/performace-modal"



export default function Performance() {
	const { PerformanceModal, setShowPerformaceModal } = usePerformaceModal();
	return (
		<>
			<div
				onClick={() => {setShowPerformaceModal(true)}}
				className="w-full cursor-pointer">
				<WebVitals />
			</div>
			<PerformanceModal />
		</>
	);
}
