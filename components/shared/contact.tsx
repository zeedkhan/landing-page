import { LINE_URL } from "@/lib/constants";
import { Phone } from 'lucide-react';
import IgIcon from "@/components/shared/icons/ig";
import LineIcon from "@/components/shared/icons/line";
import { cn } from "@/lib/utils";


function Contact() {
    return (
        <>

            <div
                className="md:w-1/2 w-full mt-6 animate-fade-up items-center justify-evenly space-x-2 opacity-0 flex flex-row flex-wrap "
                style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >


                <a
                    className={cn(
                        `group
                        my-2
                        hover:bg-black 
                        flex min-w-[10rem] 
                        items-center 
                        justify-center 
                        space-x-2 
                        rounded-full 
                        border 
                        border-gray-300 
                        bg-white py-2 text-sm text-gray-600 shadow-md transition-colors 
                        hover:border-gray-500`
                    )}
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LineIcon />
                    <p className="group-hover:text-white">Line</p>
                </a>
                <a
                    className="my-2 group hover:bg-black flex min-w-[10rem] items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-500"
                    href="tel:012345789"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Phone className="group-hover:text-white h-10 w-10 p-1.5 text-black" />
                    <p className="group-hover:text-white">
                        Contact
                    </p>
                </a>
                <a
                    className="my-2 group hover:bg-black flex min-w-[10rem] items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-500"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-10 h-10" viewBox="0 0 48 48">
                        <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                    </svg>
                    <p className="group-hover:text-white">
                        Facebook
                    </p>
                </a>

                <a
                    className="my-2 group hover:bg-black flex min-w-[10rem] items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-500"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IgIcon />
                    <p className="group-hover:text-white">
                        Insagram
                    </p>
                </a>

            </div>
        </>

    )

}


export default Contact;