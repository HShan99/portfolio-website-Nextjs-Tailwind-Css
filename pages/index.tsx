import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

//Icons
import { RiMoonClearLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { AiFillMediumSquare } from "react-icons/ai";

//motion
import { motion } from "framer-motion";

// profile
import profileImage from "../public/p2.png";
//card image
import designImage from "../public/design.png";
import codeImage from "../public/code.png";

//project image
import project1 from "../public/web1.png";
import project2 from "../public/web2.png";
import project3 from "../public/web3.png";

//hook
import { useState } from "react";
import { MdOpacity } from "react-icons/md";

export default function Home() {
  //function
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <main className="font-Poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        <section>
          {/* nav section */}
          <nav className="py-10 flex justify-between ">
            <h1 className="text-sm md:text-xl dark:text-white">
              Developed by Shan
            </h1>
            <ul className="flex items-center">
              <li>
                <RiMoonClearLine
                  className="cursor-pointer text-xl mx-5 dark:text-white"
                  onClick={() => setdarkmode(!darkmode)}
                />
              </li>
              <li>
                <a
                  className="bg-yellow-400 text-black px-4 py-2 border-none rounded-md"
                  href="#"
                  download={"resume"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* hero section */}
          <div className="text-center p-10">
            <h1 className="text-4xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4">
              Shan Rathnayake
            </h1>
            <h3 className="text-2xl py-4  md:text-3xl dark:text-white">
              Full-Stack Developer
            </h3>
            <p className="text-sm py-4 text-gray-400 leading-6 max-w-xl mx-auto md:text-md ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam optio harum sint numquam odit quas odio consectetur,
              suscipit earum aliquid aspernatur placeat! Molestiae repellat sunt
              non soluta quibusdam, dicta aut!
            </p>
          </div>

          {/* social links */}
          <div className="text-3xl flex justify-center gap-10 text-gray-600">
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <ImLinkedin />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <AiFillMediumSquare />
            </a>
          </div>

          {/* profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-80 h-80 p-5 mt-7 m-auto relative bg-gradient-to-b from-yellow-200 rounded-full">
              <Image
                src={profileImage}
                alt="Profile image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </section>

        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60 dark:text-white dark:opacity-80">
              Services I Offer
            </h2>
            <p className="text-sm py-2 text-gray-400 leading-6 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam optio harum sint numquam odit quas odio consectetur,
              suscipit earum aliquid aspernatur placeat! Molestiae repellat sunt
              non soluta quibusdam, dicta aut!
            </p>
          </div>
          {/* service card */}
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* card */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={designImage}
                  alt="design image"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h2 className="text-2xl font-bold">UI/UX Designing</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  eveniet porro fuga voluptatem fugiat itaque quaerat
                  voluptasLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Hic eveniet porro fuga voluptatem fugiat itaque quaerat
                  voluptas
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={codeImage}
                  alt="design image"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h2 className="text-2xl font-bold">Front-End Developer</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  eveniet porro fuga voluptatem fugiat itaque quaerat
                  voluptasLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Hic eveniet porro fuga voluptatem fugiat itaque quaerat
                  voluptas
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={codeImage}
                  alt="design image"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h2 className="text-2xl font-bold">Back-End Developer</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  eveniet porro fuga voluptatem fugiat itaque quaerat
                  voluptasLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Hic eveniet porro fuga voluptatem fugiat itaque quaerat
                  voluptas
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* projects */}

        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60 dark:text-white dark:opacity-80">
              Portifolio
            </h2>
            <p className="text-sm py-2 text-gray-800 leading-6 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              eveniet porro fuga voluptatem fugiat itaque quaerat voluptasLorem
              ipsum dolor sit amet consectetur adipisicing elit. Hic eveniet
              porro fuga voluptatem fugiat itaque quaerat voluptas
            </p>
            <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap ">
              <div className="basis-1/3 flex-1">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
                >
                  <Image
                    className="rounded-lg object-cover"
                    src={project2}
                    alt="project1"
                    layout="responsive"
                  />
                </motion.div>
              </div>
              <div className="basis-1/3 flex-1">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
                >
                  <Image
                    className="rounded-lg object-cover"
                    src={project3}
                    alt="project1"
                    layout="responsive"
                  />
                </motion.div>
              </div>
              <div className="basis-1/3 flex-1">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
                >
                  <Image
                    className="rounded-lg object-cover"
                    src={project1}
                    alt="project1"
                    layout="responsive"
                  />
                </motion.div>
              </div>
              <div className="basis-1/3 flex-1">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
                >
                  <Image
                    className="rounded-lg object-cover"
                    src={project2}
                    alt="project1"
                    layout="responsive"
                  />
                </motion.div>
              </div>
              <div className="basis-1/3 flex-1">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
                >
                  <Image
                    className="rounded-lg object-cover"
                    src={project3}
                    alt="project1"
                    layout="responsive"
                  />
                </motion.div>
              </div>
              <div className="basis-1/3 flex-1">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
                >
                  <Image
                    className="rounded-lg object-cover"
                    src={project1}
                    alt="project1"
                    layout="responsive"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer
          className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 
        lg:flex-row lg:items-center dark:text-white dark:opacity-80 dark:border-white"
        >
          <div>
            <h3 className="text-base mb-2 dark:text-white dark:opacity-80">
              Contact more details
            </h3>
            <p className="text-sm py-4 text-gray-400 dark:text-white dark:opacity-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam optio harum sint numquam odit quas odio consectetur,
              suscipit earum aliquid aspernatur placeat! Molestiae repellat sunt
              non soluta quibusdam, dicta aut!
            </p>

            {/* social links */}
            <div className="text-3xl flex justify-center gap-10 text-gray-600">
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <ImLinkedin />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <AiFillMediumSquare />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
