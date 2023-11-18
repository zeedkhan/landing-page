import Modal from "@/components/shared/modal";
import {
    useState,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
} from "react";
import WebVitals from "./web-vitals";
import { ContentProps } from "@/lib/locale";

const PerformanceModal = ({
    content,
    showPerformanceModal,
    setShowPerformaceModal,
}: {
    content: ContentProps;
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
                    </div>
                </div>

            </div>

        </Modal>
    );
};

export function usePerformaceModal({ content }: { content: ContentProps }) {
    const [showPerformaceModal, setShowPerformaceModal] = useState(false);

    const PerformaceModalCallback = useCallback(() => {
        return (
            <PerformanceModal
                content={content}
                showPerformanceModal={showPerformaceModal}
                setShowPerformaceModal={setShowPerformaceModal}
            />
        );
    }, [content, showPerformaceModal, setShowPerformaceModal]);

    return useMemo(
        () => ({ setShowPerformaceModal, PerformanceModal: PerformaceModalCallback }),
        [setShowPerformaceModal, PerformaceModalCallback],
    );
}
