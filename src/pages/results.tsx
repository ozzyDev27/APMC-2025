import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import IcSVG from "@/assets/resultsic.svg";
import DanielEthan from "@/assets/danielethan.jpg";
import Jamie from "@/assets/jamieteam.jpg";
import Chris from "@/assets/chris.jpg";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Results() {
    const [notificationOpen, setNotificationOpen] = useState(false);

    return (
        <main className="flex flex-col items-center justify-between w-full min-h-screen">
            <Head>
                <title>APMC - Results</title>
            </Head>
            <AnimatePresence>
                {notificationOpen && (
                    <motion.div
                        className=""
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="fixed top-0 left-0 w-full h-14 bg-black block z-40 opacity-80" />
                        <div className="fixed top-0 left-0 w-full h-14 z-50 flex justify-center items-center group bg-gradient-to-r from-fuchsia-400 to-sky-400">
                            <p className="text-white text-md lg:text-2xl mx-auto bg-clip-text font-medium lg:font-bold">
                                Project Submissions are Open -{" "}
                                <a
                                    href="https://forms.gle/xY5njGLsctM7jDJy9"
                                    target="_blank"
                                    className="text-blue-600 underline"
                                >
                                    Submit
                                </a>
                            </p>
                            <motion.div
                                className="absolute right-2"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setNotificationOpen(false)}
                            >
                                <IoClose className="text-white h-10 w-10 cursor-pointer" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <section className="h-[400px] w-full lg:mb-14 group">
                <div className="h-[400px] bg-gradient-to-r from-fuchsia-400 to-sky-400 w-full absolute blur-xl transform-gpu group-hover:blur-3xl duration-1000 ease-in-out"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black opacity-90">
                    <div className="flex flex-row flex-wrap content-center justify-center">
                        <Image
                            src={IcSVG}
                            height={75}
                            width={75}
                            alt="Logo"
                            className="sm:mt-5 sm:mr-5 lg:mr-5 lg:mt-5 "
                        />
                        <div className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text">
                            <h1 className="pt-6 my-auto text-4xl font-bold text-center text-transparent lg:text-7xl">
                                APMC Results
                            </h1>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text">
                        <h3 className="text-xl text-center text-transparent lg:text-2xl">
                            November 13th - December 8th
                        </h3>
                    </div>
                    <div className="flex gap-10">
                        {/* <a
                            href="https://forms.gle/ZbmUv6H9VpPaJU2E6"
                            target="_blank"
                        >
                            <button className="px-8 py-2 mt-8 text-2xl transition duration-300 ease-in-out border-2 border-green-400 lg:text-4xl rounded-xl hover:scale-110 hover:text-green-400">
                                Register
                            </button>
                        </a> */}
                        <Link href="/">
                            <button className="px-8 py-2 mt-8 text-2xl transition duration-500 ease-in-out border-2 border-fuchsia-400 lg:text-4xl rounded-xl hover:scale-110 hover:text-fuchsia-400">
                                Home
                            </button>
                        </Link>
                        <Link href="/rules">
                            <button className="px-8 py-2 mt-8 text-2xl transition duration-300 ease-in-out border-2 border-cyan-400 lg:text-4xl rounded-xl hover:scale-110 hover:text-cyan-400">
                                Rules
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="h-[820px] w-[320px] lg:h-[900px] lg:w-[900px] m-10 group hover:-translate-y-2 transition duration-1000 ease-in-out hover:scale-110 mt-20">
                <div className="absolute h-[820px] w-[320px] lg:h-[900px] lg:w-[900px] bg-gradient-to-r from-amber-200 to-amber-500 blur-xl transform-gpu group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                <div className="relative z-20 w-full h-full p-12 bg-black">
                    <div className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text">
                        <h2 className="p-1 mb-6 text-3xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                            First Place - Daniel & Ethan
                        </h2>
                    </div>
                    <Image
                        src={DanielEthan}
                        alt="Daniel & Ethan"
                        className="lg:p-4 mx-auto mb-2"
                    />
                    <div className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text">
                        <span className="text-lg lg:text-3xl">
                            Our project is a printer/drawing machine that can
                            write whatever sentence you give it on paper. The
                            printer has a y-axis, an x-axis, and a pen that can
                            move up and down to write any letter and symbol in
                            the alphabet. In our{" "}
                        </span>
                        <span className="text-lg lg:text-3xl text-transparent font-bold">
                            <a
                                href="https://drive.google.com/file/d/1ziy_zDaohdchdTUOrJ0kuA-ERyqLLmx4/view"
                                target="_blank"
                            >
                                video
                            </a>
                        </span>
                        <span className="text-lg lg:text-3xl">
                            , we&apos;ve explained more on why this printer is
                            useful in real life, how the mechanics work,
                            troubleshooting work we did, and how the code
                            functions.
                        </span>
                    </div>
                </div>
            </section>
            <section className="h-[1320px] w-[320px] lg:h-[1220px] lg:w-[900px] m-10 group hover:-translate-y-2 transition duration-1000 ease-in-out hover:scale-110 mt-20">
                <div className="absolute h-[1320px] w-[320px] lg:h-[1220px] lg:w-[900px] bg-gradient-to-r from-sky-400 to-emerald-500 blur-xl transform-gpu group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                <div className="relative z-20 w-full h-full p-12 bg-black">
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-500 bg-clip-text">
                        <h2 className="p-1 mb-6 text-3xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                            Runner Up - Jamie, Abhimanyu & Neel
                        </h2>
                    </div>
                    <Image
                        src={Jamie}
                        alt="Jamie, Abhimanyu & Neel"
                        className="lg:p-4 mx-auto mb-2"
                    />
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-500 bg-clip-text">
                        <span className="text-lg lg:text-3xl">
                            Introducing{" "}
                        </span>
                        <span className="text-lg lg:text-3xl text-transparent font-bold">
                            <a
                                href="https://drive.google.com/file/d/12W5QKcj_mM1aIPdhSuNwGRNUhJXJhpj1/view"
                                target="_blank"
                            >
                                Worstdle
                            </a>
                        </span>
                        <span className="text-lg lg:text-3xl">
                            {" "}
                            – the word game that defiantly scoffs at simplicity.
                            If Wordle is a walk in the park for you, Worstdle is
                            here to snap you back to reality. Brace yourself for
                            a marathon of 10 tries, a joystick thrown in for
                            good measure, and rapid word entries that will
                            challenge your mental agility.The twist? You only
                            see the last guess you made, turning it into a
                            brain-twisting gymnastics routine. Experiment with
                            fake words, and gear up for a linguistic showdown.
                            Conquer the chaos, and Worstdle rewards you with a
                            compliment, which may be the first you’ve gotten in
                            years.Worstdle is more than a game; it&apos;s an
                            addiction. The more you play, the blurrier the line
                            between the game and reality, or whatever is left of
                            it. It&apos;s not just about fun; it&apos;s a
                            challenge that might make you question life choices.
                        </span>
                    </div>
                </div>
            </section>
            <section className="h-[1220px] w-[320px] lg:h-[1200px] lg:w-[900px] m-10 group hover:-translate-y-2 transition duration-1000 ease-in-out hover:scale-110 mt-20">
                <div className="absolute h-[1220px] w-[320px] lg:h-[1200px] lg:w-[900px] bg-gradient-to-r from-pink-400 to-purple-500 blur-xl transform-gpu group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                <div className="relative z-20 w-full h-full p-12 bg-black">
                    <div className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">
                        <h2 className="p-1 mb-6 text-3xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                            Creativity Prize - Christopher, Zacharaya, Deming &
                            Rishin
                        </h2>
                    </div>
                    <Image
                        src={Chris}
                        alt="Christopher, Zacharaya, Deming & Rishin"
                        className="lg:p-4 mx-auto mb-2"
                    />
                    <div className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">
                        <span className="text-lg lg:text-3xl">This </span>
                        <span className="text-lg lg:text-3xl text-transparent font-bold">
                            <a
                                href="https://drive.google.com/file/d/1SEkeOu4tvYFq_Z4vFtAsuANc09b0yRqu/view"
                                target="_blank"
                            >
                                project
                            </a>
                        </span>
                        <span className="text-lg lg:text-3xl">
                            {" "}
                            utilizes an Arduino microcontroller and custom code
                            to create a personalized warning system alerting
                            children when their parents enter their room. The
                            system employs an LED for visual notification and a
                            buzzer for auditory cues, ensuring a discreet and
                            effective warning mechanism. The project addresses a
                            common need for privacy among children globally,
                            offering a simple yet innovative solution to enhance
                            communication and boundaries within familial spaces.
                            Its versatility makes it relevant for a wide
                            audience, emphasizing its potential impact on the
                            everyday lives of children seeking privacy and
                            autonomy.
                        </span>
                    </div>
                </div>
            </section>
            <section className="h-[300px] lg:h-[200px] w-full mt-24 mb-0 group">
                <div className="h-[300px] lg:h-[200px] bg-gradient-to-r from-red-600 to-violet-500 w-full absolute blur-xl transform-gpu group-hover:blur-3xl duration-1000 ease-in-out"></div>
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full bg-black lg:flex-row opacity-90">
                    <div className="bg-gradient-to-r from-red-600 to-violet-500 bg-clip-text">
                        <h3 className="text-lg text-center text-transparent lg:text-2xl">
                            Hosted by the Abbey Park Computer Engineering Club -{" "}
                            <a
                                className="font-bold"
                                href="https://github.com/Leg3ndary/APMC"
                                target="_blank"
                            >
                                Github
                            </a>{" "}
                            - Copyright © APMC 2023
                        </h3>
                    </div>
                </div>
            </section>
        </main>
    );
}
