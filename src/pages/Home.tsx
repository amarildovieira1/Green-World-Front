import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";
import image from "../assets/Address-bro.png";
import video from '../assets/video/coletaSelectiva.mp4';
import image2 from '../assets/coleta.jpg';
import video2 from '../assets/video/mundoverde.mp4';
import image4 from '../assets/carta.jpg';
import imageFixed from '../assets/pexels-tomfisk-3174349.jpg';
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";

export default function Home() {
  interface Types {
    type: string,
    src: string,
    title: string,
    description: string,
    time: string
  }
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<Types | null>(null);


  // Lista de mídia
  const midiaItens = [
    {
      type: "image",
      src: image2,
      title: "Imagem 1",
      description: "Descrição da imagem 1",
      time: "Publicado a 06/03/2025"
    },

    {
      type: "video",
      src: video,
      title: "Vídeo 1",
      description: "Descrição do vídeo 1",
      time: "Publicado á 30/10/2024"
    },

    {
      type: "image",
      src: image4,
      title: "Greve nos serviços de Recolha de Lixo",
      description: "Os trabalhadores da empresa de recolha de lixo e saneamento de Luanda tornaram a entrar em greve durante esta quadra natalícia e por tempo indeterminado para reclamar o pagamento dos salários em atraso.",
      time: "Publicado a: 26/12/2019 - 18:49"
    },

    {
      type: "video",
      src: video2,
      title: "Vídeo 2",
      description: "Descrição do vídeo 2",
      time: "Publicado á 09/12/2020"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Seção Inicial */}
      <div className="min-h-screen flex md:flex-row flex-col items-center gap-6 px-4 pt-20 md:pt-32">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-medium text-center p-5">
            Luanda mais limpa começa com você!
          </h1>
          <p className="text-center">
            Relate amontoados de lixo nas ruas e ajude a manter sua comunidade limpa. Empresas de reciclagem e recolha de lixo estão prontas para agir!
          </p>
          <div className="flex justify-center md:justify-center my-4">
            <PrimaryButton name="Comece a Relatar" addClassName="w-[18rem]" onClick={() => navigate('/Login')} />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img width={400} className="transition duration-500 animate-float" src={image} />
        </div>
      </div>


      {/* Seção Notícias */}
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
        <div className="max-w-lg text-center">
          <h2 className="text-2xl font-bold">Estado do saneamento em Luanda</h2>
          <p className="text-gray-600">
            Tenha as notícias sempre perto de si,sem precisar sair de casa.
          </p>
        </div>

        {/* Galeria Estilo Pinterest */}
        <section className="columns-2 md:columns-4 gap-4 space-y-4">
          {midiaItens.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <img className="w-full rounded-md" src={item.src} alt={item.title} />
              ) : (
                <video className="w-full rounded-md" src={item.src} autoPlay muted loop playsInline />
              )}
            </div>
          ))}
        </section>

        {/* Link para mais notícias */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline transition delay-50 hover:text-green-800">Ver mais Notícias</a>

        {/* Modal com animação */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 animate-fadeIn z-50"
            onClick={() => setSelectedItem(null)}
          >
            <div className="bg-white rounded-lg p-4 w-[90%] md:w-[500px] shadow-lg relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                onClick={() => setSelectedItem(null)}
              >
                ❌
              </button>

              <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <p className="text-gray-400 mb-4">{selectedItem.time}</p>

              {selectedItem.type === "image" ? (
                <img className="w-full rounded-md" src={selectedItem.src} alt={selectedItem.title} />
              ) : (
                <video className="w-full rounded-md" src={selectedItem.src} autoPlay muted loop playsInline />
              )}
            </div>
          </div>
        )}
        <Card />

        {/* Seção de Imagem Fixa */}
        <div className="relative w-full h-[60vh] bg-cover bg-fixed bg-center mb-32" style={{ backgroundImage: `url(${imageFixed})` }}>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-3xl font-semibold p-20">UM POR TODOS, E TODOS ACABANDO O LIXO!</h2>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}




