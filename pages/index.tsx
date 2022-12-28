import Head from "next/head";
import { BsFillMoonFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import whatsapp from "../public/logowsp.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jonatan Pereyra Acevedo portfolio</title>
        <meta
          name="description"
          content="Portfolio de Jonatan Pereyra Acevedo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 px-10 md:px-20 lg:px-40 dark:bg-zinc-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-xl font-burtons dark:text-teal-400">
              developed-by
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="dark:text-teal-400 cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1eeKun_Mprg9ygvpccVNB_pGKXb79pXcR/view?usp=share_link"
                  className="text-white px-4 py-2 rounded-md ml-5 bg-teal-400 dark:text-zinc-900"
                  target="blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl">
              Jonatan Pereyra Acevedo
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Frontend developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-gray-400">
              Gracias por visitar mi website! Soy un desarrollador web con
              muuuuchas ganas de dar sus primeros pasos.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/jpereyraacevedo" target="blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jonatan-pereyra-acevedo/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 mt-10 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="Foto digital de perfil" />
          </div>
        </section>
        <section className="mt-5 border-t-2 border-gray-800 dark:border-white">
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Sobre mi:</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400">
              Naci y crecí en un pequeño pueblo, donde realmente no habia mucha
              conectividad con los avances tecnologicos del mundo, pero en cada
              momento que podia, explotaba al maximo las oportunidades donde podia
              conectarme con ellos. Afortunadamente en esta epoca los avances
              son gigantescos y cotidianos, con lo cual -como a muchas personas
              de mi generacion- es normal adaptarse constantemente a nuevas
              formas y tecnologias. Y asi fue que internet se hizo parte de mi
              camino, y al ser nativo de su crecimiento, entendi como explotar
              esto para poder aprender todo lo que necesite y llame mi atencion.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={code}
                width="100"
                height="100"
                className="ml-20 mb-10"
                alt="Imagen digital representativa de codigo"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Codigo
              </h3>
              <p className="py-2">
                Desarrollo de codigo en
              </p>
              <h4 className="py-4 text-teal-400">Lenguajes y tecnologias:</h4>
              <p className="text-gray-800 py-1">HTML + CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React JS</p>
              <p className="text-gray-800 py-1">jQuery</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={design}
                width="100"
                height="100"
                className="ml-20 mb-10 mt-8"
                alt="Imagen digital representativa de habilidades extras"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Skills extras
              </h3>
              <p className="py-2">
                No todo se reduce a lenguajes
              </p>
              <h4 className="py-4 text-teal-400">Plus de habilidades de codigo</h4>
              <p className="text-gray-800 py-1">SASS</p>
              <p className="text-gray-800 py-1">Git + Github</p>
              <p className="text-gray-800 py-1">Metodologia BEM</p>
              <p className="text-gray-800 py-1">Buenas practicas</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={consulting}
                width="100"
                height="100"
                className="ml-20 mb-10"
                alt="Imagen digital representativa de habilidades blandas"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Soft skills
              </h3>
              <p className="py-2">
                Habilidades blandas adquiridas:
              </p>
              <h4 className="py-4 text-teal-400">Aprendizaje:</h4>
              <p className="text-gray-800 py-1">Responsabilidad</p>
              <p className="text-gray-800 py-1">Comunicacion efectiva</p>
              <p className="text-gray-800 py-1">Organizacion</p>
              <p className="text-gray-800 py-1">Adaptabilidad</p>
            </div>
          </div>
        </section>
        <section className="border-t-2 border-gray-800 dark:border-white">
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400">
              Acá podés encontrar algunos de mis proyectos realizados para
              practicas profesionales y algunos trabajos freelance. Iré
              actualizando esta sección en la medida que pueda agrandar el
              portfolio.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://jpereyraacevedo.github.io/Petra/" target="blank">
                <Image
                  src={web1}
                  alt="Imagen de portfolio de proyecto Petra Web"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://handcode.com.ar/" target="blank">
                <Image
                  src={web2}
                  alt="Imagen de portfolio de proyecto HandCode web"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/jpereyraacevedo/password-generator"
                target="blank"
              >
                <Image
                  src={web3}
                  alt="Imagen de portfolio de generador de contraseñas aleatorias"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/jpereyraacevedo/react-freecodecamp"
                target="blank"
              >
                <Image
                  src={web4}
                  alt="Imagen de portfolio de copia del sitio web freeCodeCamp"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/jpereyraacevedo/adding-task"
                target="blank"
              >
                <Image
                  src={web5}
                  alt="Imagen de portfolio de un to-do-list"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/jpereyraacevedo/calculator-reactjs"
                target="blank"
              >
                <Image
                  src={web6}
                  alt="Imagen de portfolio de una calculadora lograda en React JS"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=543424281330"
              target="blank"
            >
              <Image
                src={whatsapp}
                className="rounded-full w-12 h-12 wspLogo"
                alt="Imagen del logo de WhatsApp"
              />
            </a>
          </div>
        </section>
        {/* Seccion a terminar contacto */}
        {/* <section className="mt-5 pb-5 border-t-2 border-gray-800 dark:border-white">
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Contacto</h3>
            <form action="./form.php" method="POST" className="flex-1 justify-center">
              <div>
                <label for="roll">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label for="mensaje">Tu mensaje</label>
                <textarea id="textarea" name="textarea"></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section> */}
      </main>
    </div>
  );
}
