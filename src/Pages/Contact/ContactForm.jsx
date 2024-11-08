const ContactForm = () => {
    return (
        <div className="bg-base-300 text-white">
            {/* lets message me */}
            <div className="py-16">
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg shadow-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-white">Let's talk!</h2>
                            <p className="text-white">Vivamus in nisl metus? Phasellus.</p>
                        </div>
                        <img src="assets/svg/doodle.svg" alt="Decorative Doodle" className="p-6 h-52 md:h-64" />
                    </div>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm text-white">Full name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your full name"
                                className="w-full p-3 rounded border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-200 transition duration-300 text-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-white">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 rounded border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-200 transition duration-300 text-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm text-white">Message</label>
                            <textarea
                                id="message"
                                placeholder="Your message"
                                className="w-full p-3 rounded border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-200 transition duration-300 text-black"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="relative w-full px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md transition-all duration-500 ease-in-out
                            border-2 border-transparent hover:bg-indigo-600 hover:border-indigo-400 hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.7)] hover:scale-1050">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
