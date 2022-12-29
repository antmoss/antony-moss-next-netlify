import Link from 'next/link';
import React from "react";
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import Button from './Button';
import Section from './Section';

export default function Contact() {
    return (
        <div className="bg-secondary">
            <Section id="contact">
                <div className="md:flex -m-4">
                    <div className="md:w-1/2 flex flex-wrap p-4">
                        <h2 className="text-2xl font-semi heading text-white mb-4">
                            Contact
                        </h2>

                        <div className="text-white text-xl w-full mb-4">
                            <p>Get in touch if you have any questions</p>
                            <p>
                                Sheffield
                                <br />
                                South Yorkshire
                                <br />
                                UK
                            </p>
                        </div>

                        <ul className="flex mt-auto bg-secondary">
                            <li className="bg-primary p-4">
                                <Link href='https://www.linkedin.com/in/antony-moss/' legacyBehavior>
                                    <a>
                                        <span className="sr-only">Visit my linked in</span>
                                        <FaLinkedinIn size={25} color='white' />
                                    </a>
                                </Link>
                            </li>

                            <li className="bg-primary p-4 ml-4">
                                <Link href='mailto:antonymoss.web@gmail.com' legacyBehavior>
                                    <a>
                                        <span className="sr-only">Email me</span>
                                        <FaEnvelope size={25} color='white' />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-1/2 p-4">
                        <form action="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            data-netlify-recaptcha="true">
                                
                            <div className="flex flex-wrap">
                                <label className="text-white mb-2 text-lg" htmlFor="name">Name</label>
                                <input className="w-full px-2 py-3" id="name" name="name" placeholder="Enter Name" type="text" />
                            </div>
                            <div className="flex flex-wrap mt-5">
                                <label className="text-white mb-2 text-lg" htmlFor="email">Email address</label>
                                <input className="w-full px-2 py-3" id="email" name="email" placeholder="Enter Email" type="text" />
                            </div>

                            <div className="flex flex-wrap mt-5">
                                <label className="text-white mb-2 text-lg" htmlFor="message">Message</label>
                                <textarea className="w-full px-2 py-3" id="message" name="message" placeholder="Enter Message" />
                            </div>

                            <div data-netlify-recaptcha="true"></div>

                            <button className="btn btn-outline w-fit mt-5" type="submit">
                                <span>Send Message</span>
                                <span><FaEnvelope /></span>
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    )
}
