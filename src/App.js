import Header from "./components/Header/Header";
import Logo from './aseets/img/emporio.png'
import Cafeg1 from './aseets/cardapio/cafeg-1.jpg'
import Cafeg2 from './aseets/cardapio/cafeg-2.jpg'
import Cafep1 from './aseets/cardapio/cafep-1.jpg'
import Cafep2 from './aseets/cardapio/cafep-2.jpg'
import Friosg1 from './aseets/cardapio/friosg-1.jpg'
import Friosg2 from './aseets/cardapio/friosg-2.jpg'
import Friosp1 from './aseets/cardapio/friosp-1.jpg'
import Friosp2 from './aseets/cardapio/friosp-2.jpg'
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion'
import Duvida from "./components/Duvidas/Duvida";
import Instagram from './aseets/footer/instagram.png'
import Whatsapp from './aseets/footer/whatsapp.png'
import Pix from './aseets/footer/pix.png'
import logo from './aseets/footer/logo.png'
import feedbacks1 from './aseets/feedbacks/test.png'
import ImageCarousel from "./components/Carrousel/ImageCarousel";
import React from "react";
//import Pix from "./assets/footer/pix.png"
//import Dz8 from "./assets/footer/18.png"


function App() {

  useEffect(() => {
    console.log(carrousel.current?.scrollWidth, "testando", carrousel.current?.offsetWidth)

    setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
  }, []);


  const [duvidas, setDuvidas] = useState([

    { "id": "1", "pergunta": "A montagem é feita no dia da entrega", "resposta": "Sim, presamos por entregar tudo fresco, É preparado com muito carinho no dia da entrega. <3" },
    { "id": "2", "pergunta": "Vocês usam coisas caseiras na cesta?", "resposta": "Sim, a baguete, o biscoito, patê, geleia e bolinho são caseiros. Os outros itens são de produtores locais." },
    { "id": "3", "pergunta": "Quanto queijo colocam na cesta?", "resposta": "4 Tipos na box de tábua de frios, 2 tipos no box de café da manhã." },
  ])

  const images = [
    { src: Cafeg1, alt: "Cafe g", tamanho: "g" },
    { src: Cafeg2, alt: "Cafe g", tamanho: "g" },
    { src: Cafep1, alt: "Cafe p", tamanho: "p" },
    { src: Cafep2, alt: "Cafe p", tamanho: "p" },
    { src: Cafeg1, alt: "Cafe g", tamanho: "g" },
    { src: Cafeg2, alt: "Cafe g", tamanho: "g" },
    { src: Cafep1, alt: "Cafe p", tamanho: "p" },
    { src: Cafep2, alt: "Cafe p", tamanho: "p" },
  ];

  const imagesFrios = [
    { src: Friosg1, alt: "Frios g", tamanho: "g" },
    { src: Friosg2, alt: "Frios g", tamanho: "g" },
    { src: Friosp1, alt: "Frios p", tamanho: "p" },
    { src: Friosp2, alt: "Frios p", tamanho: "p" },
    { src: Friosg1, alt: "Frios g", tamanho: "g" },
    { src: Friosg2, alt: "Frios g", tamanho: "g" },
    { src: Friosp1, alt: "Frios p", tamanho: "p" },
    { src: Friosp2, alt: "Frios p", tamanho: "p" },
  ];



  const img = [, , , , Cafeg1, Cafeg2, Cafep1, Cafep2]
  const carrousel = useRef()
  const [width, setWidth] = useState()


  function dropPergunta1(id) {
    document.getElementById(`Pergunta${id}`).classList.toggle("hidden");
    document.getElementById(`arrowPergunta${id}`).classList.toggle("rotate-90");
    document.getElementById(`textPergunta${id}`).classList.toggle("font-black");
  }




  return (<>    <div className="overflow-hidden" >
    <Header />

    <div className="flex justify-center bg-[#e1cfc4]  pb-18 ">
      <img id="logo" src={Logo} alt="logo" className="w-full lg:w-4/12  duration-1000  " />
    </div>

    <section className=" w-10/12 mx-auto ">
      <motion.h1 animate={{ x: 150 }} className="uppercase text-5xl text-center font-semibold font-['Orbitron']  mt-5 text-[#8a6059] whitespace-nowrap duration-500 ml-[-300px]  "> sobre nós</motion.h1>
      <p className=" font-semibold text-lg border-l-[7px] border-l-[#8a6059] px-4 mt-4">Mãe e filha que decidiram unir forças e se desafiar, usando as receitas da família para empreender no ramo de cafés da manhã e tábuas de frios. </p>
      <p className="font-semibold text-lg  px-4 ">Proporcionamos a você uma experiência completa na serra, com nossos produtos artesanais e parceria com os melhores produtores da região. E tudo isso chega fresquinho até você, pois nossas cestas são montadas no dia da entrega. Nosso patê e geléia exclusivos possuem um sabor único e a qualidade com que entregamos nossas cestas é incomparável.
        Há 2 anos estamos nos aprimorando neste mercado e a cada entrega, sorriso e feedback positivo sentimos que estamos no caminho certo.</p>
    </section>


    <section className="bg-[#8a6059] mt-6 lg:flex lg:items-center lg:justify-between ">

      <div className=" w-10/12 mx-auto">
        <div className="flex items-center gap-3 justify-center py-10 bg-[#8a6059]">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#e3cbc3" class="bi bi-cup-hot" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z" />
            <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
          </svg>

          <h1 className="uppercase text-5xl text-center font-semibold font-['Orbitron']  mt-2 text-[#e3cbc3] whitespace-nowrap  "> café</h1>
        </div>



        <div className="container mx-auto ">
          <ImageCarousel images={images} itemsPerSlide={2} autoplay={true} />
        </div>
      </div>


      <div className=" w-10/12 mx-auto">
        <div className="flex items-center gap-3 justify-center py-10 bg-[#8a6059]">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#e3cbc3" class="bi bi-snow" viewBox="0 0 16 16">
            <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
          </svg>

          <h1 className="uppercase text-5xl text-center font-semibold font-['Orbitron']   text-[#e3cbc3] whitespace-nowrap  "> frios</h1>
        </div>

        <div className="m-0 max-w-[600px] mx-auto ">
          <ImageCarousel images={imagesFrios} itemsPerSlide={2} autoplay={true} />
        </div>
      </div>






    </section>


    <section className="bg-[#e3cbc3] pb-5 ">
      <div className="flex items-center gap-1 justify-center py-10  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a6059" class="bi bi-chat-heart" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
        </svg>

        <h1 className="uppercase text-[45px] text-center font-semibold font-['Orbitron']  2 text-[#8a6059] whitespace-nowrap  "> feedbacks</h1>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8  w-10/12 mx-auto">
        <div >
          <div className="border-2 border-[#8a6059] rounded-3xl p-4 relative">
            <div className="absolute right-1 top-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a6059" class="bi bi-chat-quote" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
              </svg>
            </div>
            <p className="text-left px-5">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
            </p>
          </div>
          <div>
            <div className="rounded-full w-[75px] border-[5px] border-[#8a6059] mx-auto mt-1">
              <img src={feedbacks1} alt="" className="rounded-full w-full " />
            </div>
            <p className="text-center text-[#8a6059] font-semibold text-sm">Gelson Antunes</p>
          </div>
        </div>

        <div>
          <div className="border-2 border-[#8a6059] rounded-3xl p-4 relative">
            <div className="absolute right-1 top-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a6059" class="bi bi-chat-quote" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
              </svg>
            </div>
            <p className="text-left px-5">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
            </p>
          </div>
          <div>
            <div className="rounded-full w-[75px] border-[5px] border-[#8a6059] mx-auto mt-1">
              <img src={feedbacks1} alt="" className="rounded-full w-full " />
            </div>
            <p className="text-center text-[#8a6059] font-semibold text-sm">Gelson Antunes</p>
          </div>
        </div>

        <div>
          <div className="border-2 border-[#8a6059] rounded-3xl p-4 relative">
            <div className="absolute right-1 top-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a6059" class="bi bi-chat-quote" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
              </svg>
            </div>
            <p className="text-left px-5">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
            </p>
          </div>
          <div>
            <div className="rounded-full w-[75px] border-[5px] border-[#8a6059] mx-auto mt-1">
              <img src={feedbacks1} alt="" className="rounded-full w-full " />
            </div>
            <p className="text-center text-[#8a6059] font-semibold text-sm">Gelson Antunes</p>
          </div>
        </div>

      </div>
    </section>



    <section className="bg-[#e3cbc3]">
      <div className="flex items-center gap-3 justify-center py-10  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a6059" class="bi bi-question-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
        </svg>

        <h1 className="uppercase text-5xl text-center font-semibold font-['Orbitron']   text-[#8a6059] whitespace-nowrap  "> dúvidas</h1>
      </div>


      {duvidas.map((item) => {
        return (<div className=" " key={item.id}>
          <Duvida
            id={item.id}
            pergunta={item.pergunta}
            resposta={item.resposta} onclick={() => { dropPergunta1(item.id) }} />

        </div>)
      })}
    </section>



  </div>

    <footer className="bg-[#8a6059] text-white ">

      <div className="w-full border-t-2 border-t-[#8a6059] ">
        <div className="w-full flex pt-5 pl-3">
          <div className="lg:w-1/12 w-5/12 flex items-center"><img className="pl-5 lg:pl-0 w-10/12 lg:w-full" src={logo} /></div>   {/* src={Logo}*/}
          <div className="lg:w-11/12 w-7/12 flex items-center"><div className="w-full h-[1px] bg-[#e3cbc3]"></div></div>
        </div>
        <div className="p-5  w-full flex flex-col lg:flex-row">
          <div className="lg:w-6/12 w-full flex items-center mb-2 ">
            <div className="w-6/12 flex lg:justify-around">
              <div className="flex-col flex justify-center">
                <div className="text-white text-sm">Redes Sociais</div>
                <div className="flex">
                  <a href="https://www.instagram.com/emporiourubici/">
                    <img className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" src={Instagram} />   {/* */}
                  </a>
                  <a href={`https://api.whatsapp.com/send?phone=554896123351&text=Olá, minha dúvida é:`}>
                    <img className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" src={Whatsapp} />  {/*   */}
                  </a>
                </div>
              </div>
              <div className="lg:flex flex-col justify-center hidden">
                <ul className="text-[0.6em] text-white">
                  <li className="text-[0.5em]">PARCERIA:</li>
                  <li>MARKETING@EMPORIOURUBICI.COM</li>

                </ul>
              </div>
            </div>
            <div className="w-full lg:w-6/12">

              <div className="flex w-full lg:w-10/12  bg-[#01010180] rounded-xl items-center">
                <img className="w-full" src={Pix} /> {/*   */}

              </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full flex justify-center lg:border-l-2 lg:border-l-cinzafourth">
            <div className="w-full flex justify-center">
              <div className="w-full flex justify-between lg:justify-around ">

                {/*
           <div>
            <div className="uppercase font-bold text-[#cfa9a3]">Jogos</div>
            <ul className="text-[0.6em] text-white ">
              <a href="/cyberspace">
              <li className="hover:text-roxoprimary cursor-pointer">CYBER SPACE</li>
              </a>
       
              <li className="hover:text-roxoprimary cursor-pointer ">ROULLET PLANET</li>
         
              <a href="/gamefree">
              <li className="hover:text-roxoprimary cursor-pointer">CRASH FREE</li>
              </a>
            </ul>
          </div>
              
              */}
                <div>
                  <div className="uppercase font-bold text-[#cfa9a3] pr-10 lg:pr-0">Informações</div>
                  <ul className="text-[0.6em] text-white ">




                    <li className="hover:text-roxoprimary cursor-pointer ">PERGUNTAS FREQUENTES</li>



                    <li className="hover:text-roxoprimary cursor-pointer">FEEDBACKS</li>

                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </footer>
  </>
  );
}

export default App;
