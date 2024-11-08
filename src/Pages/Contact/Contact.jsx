
import contact from './bg.jpg'
import ContactForm from "./ContactForm";
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";



const Contact = () => {
    return (
        <div className="py-20">

            <div
                className="w-full bg-center bg-cover h-[400px] md:h-[500px]"
                style={{
                    backgroundImage:
                        `url(${contact})`,
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                            Build your new <span className="text-blue-400">SaaS</span> Project
                        </h1>
                        <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Start project
                        </button>
                    </div>
                </div>
            </div>


            {/* contact cart */}
            <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
                <div className="p-4 bg-white text-black shadow-lg md:p-6 relative px-6 py-2  bg-gradient-to-r from-purple-500 to-blue-500 rounded-md transition-all duration-500 ease-in-out
               border-2 border-transparent hover:bg-indigo-600 hover:border-indigo-400 hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.7)] hover:scale-105">
                    <span className="inline-block p-3  rounded-lg   text-2xl">
                        <MdOutlineAttachEmail />
                    </span>

                    <h2 className="mt-4 text-lg font-semibold text-gray-900 ">Chat to Sales</h2>
                    <p className="mt-2 text-sm">Speak to our friendly team.</p>
                    <p className="mt-2 text-sm">support@quicbus.com</p>
                </div>

                <div className="p-4  text-black shadow-lg md:p-6 relative px-6 py-2  bg-gradient-to-r from-purple-500 to-blue-500 rounded-md transition-all duration-500 ease-in-out
               border-2 border-transparent hover:bg-indigo-600 hover:border-indigo-400 hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.7)] hover:scale-105">
                    <span className="inline-block p-3  rounded-lg text-2xl">
                        <ImLocation2 />
                    </span>

                    <h2 className="mt-4 text-lg font-semibold text-gray-900 ">Visit Us</h2>
                    <p className="mt-2 text-sm  ">Visit our office HQ.</p>
                    <p className="mt-2 text-sm  ">Dhaka,Bangladesh</p>
                </div>

                <div className="p-4 bg-white text-black shadow-lg md:p-6 relative px-6 py-2  bg-gradient-to-r from-purple-500 to-blue-500 rounded-md transition-all duration-500 ease-in-out
               border-2 border-transparent hover:bg-indigo-600 hover:border-indigo-400 hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.7)] hover:scale-105">
                    <span className="inline-block p-3  rounded-lg text-2xl">
                        <FaPhone />
                    </span>

                    <h2 className="mt-4 text-lg font-semibold text-gray-900 ">Call Us</h2>
                    <p className="mt-2 text-sm">24/7 Customer Support</p>
                    <p className="mt-2 text-sm">+8801849317388</p>
                </div>
            </div>
           <ContactForm/>

        </div>
    );
};

export default Contact;