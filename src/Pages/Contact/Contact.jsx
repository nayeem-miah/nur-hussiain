import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    // console.log({ name, email, message });

    const newMessage = {
      name, email, message
    }

    fetch('https://y-pi-mauve.vercel.app/message',
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newMessage)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Your message Successfully please wait....");
        }
      })
    form.reset();
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className=" lg:mx-0 mx-3">
          <Helmet>
            <title>NAYEEM | contact Page</title>
          </Helmet>
          <h3 className="text-3xl font-bold text-center my-5">Contact ME </h3>
          <p className="my-5 text-center">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the following methods:
          </p>
          <div className="lg:flex justify-around">
            <div>
              <p className="lg:text-2xl text-xl font-serif my-5">
                <span className="font-bold">name:</span> MD Nayeem Miah
              </p>
              <div className="font-bold text-xl">
                <p className="flex items-center   lg:text-xl text-xs">
                  <MdOutlineEmail></MdOutlineEmail>email:{" "}
                  <p

                    className="hover:link-hover hover:text-blue-500 "
                  >
                    nayeem5113a@gamil.com
                  </p>
                </p>
                <p className="flex items-center my-2 lg:text-xl text-xs">
                  <IoCallSharp></IoCallSharp> <span>contact Number:</span>
                  +8801849317388
                </p>
                <p className="flex items-center my-2 lg:text-xl text-xs">
                  <FaWhatsapp></FaWhatsapp> <span>Whatsapp Number:</span>
                  +8801849317388
                </p>
              </div>
              <div>
                <h4 className=" flex items-center lg:text-xl text-xs">
                  <FaArrowLeft></FaArrowLeft>
                  Let's connect on social networks
                  <FaArrowRightLong></FaArrowRightLong>
                </h4>
                <nav>
                  <div className="grid grid-cols-3 my-4">
                    <Link
                      to={"https://github.com/nayeem-miah"}
                      target="_blank"
                    >
                      <FaGithub className="text-4xl"></FaGithub>
                      Github
                    </Link>

                    <a
                      href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGonzb4vjmpzwAAAZCGNetYaTBkmPmP3jwbyu15qSZsZVSa01c5lbIg6a22QjHL8Mf9sDcVq7rvWtCOZsF0One3ecf7WwC9NYgSj07FJv4AXXmn3LI444T7zHLq47D4Huetwe4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-nayeem-miah-734719307"
                      target="blank"
                    >
                      <FaLinkedin className="text-4xl text-blue-600"></FaLinkedin>
                      linkedin
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100042968569904"
                      target="blank"
                    >
                      <FaFacebookF className="text-4xl text-blue-600"></FaFacebookF>
                      facebook
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div>


              <section className="max-w-4xl p-6 mx-auto bg-[#f5f5eb] rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-black">
                  Let’s Message me !
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-700"
                        htmlFor="username"
                      >
                        Your Name{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        name="name"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-700"
                        htmlFor="emailAddress"
                      >
                        Email Address
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        name="email"
                        placeholder="your email"
                        required
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 dark:text-gray-700">
                      Message
                    </label>
                    <textarea
                      className="textarea textarea-info block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white w-full transition-colors duration-300 transform bg-gray-700 rounded-md  focus:outline-none focus:bg-gray-600 hover:bg-gray-950">
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
