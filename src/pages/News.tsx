import { useState, useEffect } from "react";
import Skeleton from "../components/ui/Skeleton";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";
import image2 from '../assets/coleta.jpg';


type NewsItem = {
  title?: string;
  description?: string;
  image?: string;
  body?: string,
};

const testData: NewsItem[] =
  [
    {
      title: "Angola feliz",
      description: "João Lourenço morre e Angola se torna um país melhor!",
      image: image2,
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, natus voluptatem similique aspernatur corporis laudantium beatae placeat delectus obcaecati et veritatis!"
    },
  ]

function News() {
  const [news, setNews] = useState<NewsItem[]>(testData); // Estado para armazenar as notícias
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula uma chamada de API
    fetch("https://api.exemplo.com/news") // Troque pela API real
      .then((response) => response.json())
      .then((data) => {
        setNews(data); // Define as notícias no estado
        setIsLoading(false); // Desativa o skeleton quando os dados chegam
      })
      .catch((error) => {
        console.error("Erro ao carregar notícias:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 w-full">
        <h1 className="text-center text-4xl font-bold text-global-color-three p-20">
          Últimas Notícias
        </h1>

        {!isLoading ? (
          // Exibe 4 skeletons com animação em 2 colunas responsivas
          <div className="flex flex-col flex-col-2 flex-wrap justify-center grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl animate-pulse">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex gap-6 items-center">
                  <Skeleton width="30%" height="20px" className="rounded-full" />
                </div>
                <Skeleton width="100%" height="120px" className="rounded-lg" />
                <Skeleton width="100%" height="80px" className="rounded-lg" />
              </div>
            ))}
          </div>
        ) : (
          // Renderiza as notícias reais em 2 colunas responsivas
          <div className="flex  w-full gap-6">
            <div className="w-96 border-r px-2 max-h-[1050px] overflow-y-auto custom_scroll">
              {
                [...Array(14)].map((item, _) => (
                  <div className="bg-global-color-secondary/75 rounded-lg w-full mb-4 p-2">
                    <div className="flex gap-6 items-center py-2">
                      <Skeleton width="30%" height="20px" className="rounded-full" />
                    </div>
                    <Skeleton width="100%" height="40px" className="rounded-lg" />
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col justify-center gap-6 w-full max-w-6xl h-max overflow-y-auto custom_scroll">
              {news.length > 0 ? (
                news.map((item, index) => (
                  <div key={index} className=" px-4 bg-white rounded-lg shadow-lg border border-gray-300">
                    <h2 className="text-xl font-semibold text-global-color-three my-4">{item.title}</h2>
                    <p className="text-gray-600 my-2">{item.description}</p>
                    <div className="flex justify-center">
                      <img src={item.image}  />
                    </div>
                    <p className=" text-wrap my-4 ">{item.body}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 py-6">Nenhuma notícia disponível no momento.</p>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default News;

