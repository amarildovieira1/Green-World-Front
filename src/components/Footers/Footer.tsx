import { useState, useEffect } from "react";
import Logo from "../../assets/Logo";
import Skeleton from "../ui/Skeleton";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import PrimaryButton from "../../components/PrimaryButton";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import FooterLinks from "../../components/FooterLinks";

export default function Footer() {
  const year = new Date()
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const grocupLinks1 = [{
    title: "Mapa do site",
    links: [
      { linkName: "Inicio", link: "/" },
      { linkName: "Notícias", link: "/news" },
      { linkName: "Empresas", link: "/empresas" },
      { linkName: "Contactos", link: "/contactos" },
    ],
  },
  {
    title: "Links úteis",
    links: [
      { linkName: "Sites Greens", link: "https://www.elisal.ao/" },
      { linkName: "Contacte-nos", link: "/" },
    ],
  },
  ]

  return (
    <div className="flex flex-col items-center p-10 text-white bg-black/75">
      <div className="flex flex-wrap justify-center w-full gap-[50px]">
        <div className="flex flex-wrap flex-1 gap-4 mx-auto px-4">
          <div className="flex flex-col">
            <Logo className="w-[90px] h-[90px]" />
            <div className="flex">
              <a target="_blank" href="https://www.instagram.com/albertinafaila/">
                <IoLogoInstagram size={40} color="white" />
              </a>
              <a href="#">
                <CiLinkedin size={40} color="white" />
              </a>
            </div>
            {/*             
            <div className="flex">
              <FiPhone color="primary" size={30} />
              <p>(+244) 934 156 335</p>
            </div>
            <div className="flex">
              <MdOutlineEmail color="primary" size={30} />
              <p>greenworld70@gmail.com</p>
            </div> 
            */}
          </div>
          <div>
            <FooterLinks data={grocupLinks1} />
          </div>
        </div>
        <div className=" flex flex-wrap flex-1">
          <div className='flex flex-col justify-center items-center gap-10'>
            <div className='flex flex-col justify-center items-center gap-3 p-5 '>
              <div className='flex flex-wrap flex-col justify-center items-center gap-2'>
                <h6 className='text-[20px] font-bold'>Entre em contacto conosco</h6>
              </div>
              <form className='flex flex-wrap flex-col items-center gap-2'>
                <div className='flex flex-wrap justify-between w-full gap-2'>
                  <Input
                    id='2'
                    type="text"
                    placeholder='Nome'
                    className='flex-1 border-2 text-black focus:border-green-400'
                  />
                  <Input
                    id='4'
                    type="email"
                    placeholder='Email'
                    className='flex-1 border-2 text-black focus:border-green-400'
                  />
                </div>
                <div className='flex flex-1 flex-col w-full gap-2'>
                  <TextArea className="resize text-black" placeholder={'Mensagem'} />
                  <PrimaryButton
                    name='Enviar'
                    addClassName='md:w-full w-[8rem] bg-global-color-three/50' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Skeleton width="100%" height="20px" />
      ) : (
        <div className="w-full border-t border-white/30 mt-6 pt-4 text-center">
          <p>Green World © {year.getFullYear()} - Direitos reservados</p>
        </div>
      )}
    </div>
  );
}
