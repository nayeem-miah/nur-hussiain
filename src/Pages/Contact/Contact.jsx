
import contact from './bg.jpg'
import ContactForm from "./ContactForm";
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";


const Contact = () => {
    return (
        <div className="py-2">

            <div
                className="w-full bg-center bg-cover h-[400px] md:h-[500px]"
                style={{
                    backgroundImage:
                        `url(${contact})`,
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-[#f4a04c] lg:text-4xl">
                            Please Contact
                        </h1>
                       <a href="#form"> <button className=" px-6 py-3 mt-5 text-black bg-[#EA580C]     hover:bg-[#bf4503] font-bold  rounded hover:scale-1050">
                          let's contact us
                        </button></a>
                    </div>
                </div>
            </div>


            {/* contact cart */}
            <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
                <div className="p-4  text-black shadow-lg md:p-6 relative px-6 py-2  bg-gradient-to-r from-[#eda57e] to-[#ed5b0c] rounded-md transition-all duration-500 ease-in-out
               border-2 border-transparent hover:bg-indigo-600 hover:border-indigo-400 hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.7)] hover:scale-105">
                    <span className="inline-block p-3  rounded-lg   text-2xl">
                        <MdOutlineAttachEmail />
                    </span>

                    <h2 className="mt-4 text-lg font-semibold text-gray-900 ">Chat to Sales</h2>
                    <p className="mt-2 text-sm">Speak to our friendly team.</p>
                    <p className="mt-2 text-sm">support@quicbus.com</p>
                </div>

                <div className="p-4  text-black shadow-lg md:p-6 relative px-6 py-2  bg-gradient-to-r from-[#eda57e] to-[#ed5b0c] rounded-md transition-all duration-500 ease-in-out
               border-2 border-transparent hover:bg-indigo-600 hover:border-indigo-400 hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.7)] hover:scale-105">
                    <span className="inline-block p-3  rounded-lg text-2xl">
                        <ImLocation2 />
                    </span>

                    <h2 className="mt-4 text-lg font-semibold text-gray-900 ">Visit Us</h2>
                    <p className="mt-2 text-sm  ">Visit our office HQ.</p>
                    <p className="mt-2 text-sm  ">Dhaka,Bangladesh</p>
                </div>

                <div className="p-4  text-black shadow-lg md:p-6 relative px-6 py-2  bg-gradient-to-r from-[#eda57e] to-[#ed5b0c] rounded-md transition-all duration-500 ease-in-out
               border-2 border-transparent hover:bg-indigo-600 hover:border-indigo-400 hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.7)] hover:scale-105">
                    <span className="inline-block p-3  rounded-lg text-2xl">
                        <FaPhone />
                    </span>

                    <h2 className="mt-4 text-lg font-semibold text-gray-900 ">Call Us</h2>
                    <p className="mt-2 text-sm">24/7 Customer Support</p>
                    <p className="mt-2 text-sm">+8801849317388</p>
                </div>
            </div>
            <div id='form'>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;