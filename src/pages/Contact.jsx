import { BiEnvelope, BiPhone, BiPaperPlane } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { useRef, useState,useEffect } from "react";

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_im27gy8', 'template_90slicj', form.current, 'bkob1m1AvNFSsUQbU')
      .then((result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(() => {
    let timer;
    if (isFormSubmitted) {
      timer = setTimeout(() => {
        setIsFormSubmitted(false);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [isFormSubmitted]);

  return (
    <main className="bg-zinc-900 p-10 min-h-screen">
      <h1 className="text-white lg:text-4xl text-2xl font-bold mb-[70px] text-center">
        Get In <span className="text-[#923AE4]">Touch</span>
      </h1>
      <div className="grid lg:grid-cols-[2fr,4fr] gap-6">
        <section className="m-10">
          <div className="flex flex-col">
            <h1 className="text-zinc-300 text-xl font-semibold py-3">
              Don't be Shy
            </h1>
            <p className="text-left text-zinc-300 leading-8">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              vision.
            </p>
            <div className="flex flex-col py-7">
              <div className="flex text-zinc-400 items-center gap-x-3">
                <div className="text-4xl">
                  <BiEnvelope />
                </div>
                <div className="text-xs flex flex-col">
                  <span>Mail me:</span>
                  <span itemProp="email">mayank2021mishra@gmail.com</span>
                </div>
              </div>
              <div className="flex text-zinc-400 items-center gap-x-3">
                <div className="text-4xl">
                  <BiPhone />
                </div>
                <div className="text-xs flex flex-col">
                  <span>Call me:</span>
                  <span itemProp="telephone">+91 7524004100</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="my-10">
          <form
            className="py-3"
            name="contact_me"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="flex lg:flex-row flex-col gap-3 lg:w-fit w-5/6">
              <input
                type="text"
                placeholder="Your Name"
                id="name"
                name="user_name"
                className="bg-zinc-600 px-2 py-1 rounded-full text-zinc-200"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                name="user_email"
                className="bg-zinc-600 px-2 py-1 rounded-full text-zinc-200"
                required
              />
              <input
                type="text"
                placeholder="Your Subject"
                id="subject"
                name="user_subject"
                className="bg-zinc-600 px-2 py-1 rounded-full text-zinc-200"
                required
              />
            </div>
            <div className="py-4">
              <textarea
                id="message"
                name="message"
                className="rounded-3xl lg:w-4/5 w-5/6 h-52 bg-zinc-600 p-5"
                placeholder="Your Message"
              />
            </div>
            <button
              className="my-[16px] lg:mx-[32px] h-14 block lg:text-[#923AE4] text-white border lg:border-[#923Ae4] pt-4 lg:pr-16 pr-14 pb-4 lg:pl-9 rounded-[35px] font-medium text-sm relative w-fit button overflow-hidden transition-all duration-300 ease-in-out lg:z-0 z-10 ml-auto mr-auto lg:bg-transparent bg-[#923Ae4]"
              type="submit" value="Send"
            >
              <span className="lg:px-0 px-3">More About Me&nbsp;&nbsp;</span>
              <span className="lg:bg-[#923AE4] bg-zinc-900 absolute lg:-right-1 -top-0 h-14 w-14 rounded-full text-[#ffff] py-4 px-3.5 text-2xl">
                <BiPaperPlane />
              </span>
            </button>
          </form>
          {isFormSubmitted && (
            <p className="text-green-500 text-lg font-semibold p-2 text-center ">
              Form submitted successfully!
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;