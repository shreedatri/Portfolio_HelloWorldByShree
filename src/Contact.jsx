import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                alert("Message sent successfully!");
                form.current.reset();
            }, (error) => {
                alert("Failed to send message, please try again.");
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className="bg-transparent mt-1 px-6 py-24 sm:py-32 lg:px-8">


            <div className="flex justify-center mt-1">
                <section className="flex justify-center items-center min-h-screen bg-transparent p-6">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="mx-auto md:mx-0 max-w-xl bg-neutral-950 p-8 rounded-xl shadow-[0_0_20px_cyan] border border-purple-200"
                    >
                        <h2 className="text-3xl font-bold text-white text-center mb-6">
                            Say Hi 👋
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-100">
                                    First name
                                </label>
                                <input
                                    id="first-name"
                                    type="text"
                                    name="First_Name"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-100">
                                    Last name
                                </label>
                                <input
                                    id="last-name"
                                    type="text"
                                    name="Last_Name"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-100">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="Email"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-100">
                                    Phone number
                                </label>
                                <input
                                    id="phone-number"
                                    type="text"
                                    name="Phone_Number"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-100">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
                                    required
                                ></textarea>
                            </div>

                            {/* Hidden field for time (auto-filled when sending) */}
                            <input type="hidden" name="time" value={new Date().toLocaleString()} />
                        </div>


                        <div className="mt-10">
                            <button type="submit" className="block w-full rounded-md bg-cyan-800 px-3.5 py-2.5 text-center text-md font-semibold text-white hover:bg-cyan-900 border border-2 border-cyan-400 hover:border-purple-400 shadow-[0_0_10px_cyan] transition-colors duration-300">
                                Let's Talk
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Contact;
