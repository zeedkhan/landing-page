import Modal from "@/components/shared/modal";
import {
    useState,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
} from "react";
import WebVitals from "./web-vitals";


const details = [
    {
        key: "Keyword Optimization",
        value: "Our AI engine identifies the most relevant keywords for your content and suggests keyword placement to improve search engine rankings."
    },
    {
        key: "Content Recommendations",
        value: "Receive real-time suggestions for creating high-quality, SEO-friendly content that resonates with your target audience."
    },
    {
        key: "Performance Enhancement",
        value: "Identify and rectify web performance issues, including site speed, mobile-friendliness, and security."
    },
    {
        key: "Customized Strategies",
        value: "Generate personalized SEO and content strategies based on your niche and target audience."
    }
]


const PerformanceModal = ({
    showPerformanceModal,
    setShowPerformaceModal,
}: {
    showPerformanceModal: boolean;
    setShowPerformaceModal: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <Modal showModal={showPerformanceModal} setShowModal={setShowPerformaceModal}>

            <div className="flex flex-col">
                <div className="relative h-60">
                    <WebVitals />
                </div>

                <div className="w-full overflow-hidden md:max-w-md 2xl md:border md:border-gray-100 md:shadow-xl">
                    <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 pt-4 pb-6 text-center md:px-16">
                        <h3 className="font-display text-2xl font-bold">AI-Optimized SEO Analyzer</h3>
                        <p className="text-sm text-gray-500">
                            Our AI-Optimized SEO Analyzer is a powerful tool designed to supercharge your website{`'`}s search engine optimization (SEO) and overall web performance. With the ever-changing landscape of search engine algorithms, it{`'`}s essential to have a competitive edge in digital marketing. Our AI-driven solution offers a comprehensive analysis of your website and provides actionable insights to boost your search rankings and enhance user experience.                    </p>
                        <div className="w-full border border-gray-500" />
                        <ul className="text-sm text-gray-500">
                            {details.map((item) => (
                                <li key={item.key} className="space-y-2 m-2">
                                    <strong>{item.key}</strong>
                                    <p>{item.value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </Modal>
    );
};

export function usePerformaceModal() {
    const [showPerformaceModal, setShowPerformaceModal] = useState(false);

    const PerformaceModalCallback = useCallback(() => {
        return (
            <PerformanceModal
                showPerformanceModal={showPerformaceModal}
                setShowPerformaceModal={setShowPerformaceModal}
            />
        );
    }, [showPerformaceModal, setShowPerformaceModal]);

    return useMemo(
        () => ({ setShowPerformaceModal, PerformanceModal: PerformaceModalCallback }),
        [setShowPerformaceModal, PerformaceModalCallback],
    );
}
