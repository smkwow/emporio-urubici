function Header() {

    function openMenu() {
        document.querySelector(".sidebar").classList.toggle("ml-[-250px]");
        document.querySelector(".sidebar").classList.toggle("opacity-0");
        document.querySelector(".sidebar--opacidade").classList.toggle("hidden");
      }
    

    
    
    


    return (     <>
        <div onClick={openMenu} className="cursor-pointer bg-[#9b746c]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                className="bi bi-list cursor-pointer ml-3"
                viewBox="0 0 16 16" >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
          <div className=" sidebar--opacidade fixed top-0 bottom-0 left-[0px] right-0 bg-black z-50 opacity-75 duration-[2000ms]  hidden "></div>
          <div onClick={openMenu} className="sidebar  fixed top-0 bottom-0 left-0 overflow-y-auto ml-[-250px] p-2 w-[250px] text-center text-[#42aa2f] bg-[#9b746c] z-[99] opacity-0 duration-1000"  >
            <div className="flex justify-between">
              <div onClick={openMenu} className="items-center ml-4 flex">
                <svg
                  id="Camada_1"
                  data-name="Camada 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 62.58 62.58">
                  <path
                    fill="white"
                    d="M23.43,81.31h0a8.9,8.9,0,0,1,0-12.56l47.1-47.1a5,5,0,0,1,7.07,0h0a8.9,8.9,0,0,1,0,12.56L25.5,81.31A5,5,0,0,1,23.43,81.31Z"
                    transform="translate(-19.23 -20.19)" />
                  <path
                    fill="white"
                    d="M80.35,78.57h0a8.9,8.9,0,0,1-12.56,0l-47.1-47.1a5,5,0,0,1,0-7.07h0a8.9,8.9,0,0,1,12.56,0l47.1,47.1A5,5,0,0,1,80.35,78.57Z"
                    transform="translate(-19.23 -20.19)" />
                </svg>
              </div>
              <div className="text-white font-medium mr-4 text-2xl">MENU</div>
            </div>
            <hr className="w-full mt-3" />
      
  
      

   
              
  
 
  
            {/* REGRAS DO JOGO */}
  
  
             
              <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-500 cursor-pointer  hover:bg-[#7c554e] scale-90 hover:scale-100 hover:border-l-2 hover:border-white" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                className="bi bi-journal-text"
                viewBox="0 0 16 16"
              >
                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
              <span className="text-base ml-4 text-white ">Cardápio</span>
            </div>
         
  
  
            {/* SUPORTE */}
           
              <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-500 cursor-pointer  hover:bg-[#7c554e] scale-90 hover:scale-100 hover:border-l-2 hover:border-white " >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
             </svg>
              <span className="text-base ml-4 text-white ">Perguntas Frequentes</span>
            </div>

                       
            <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-500 cursor-pointer  hover:bg-[#7c554e] scale-90 hover:scale-100 hover:border-l-2 hover:border-white " >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-chat-heart" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
            </svg>
              <span className="text-base ml-4 text-white ">Feedbacks</span>
            </div>

                       

  
  
           
  
  
          </div>
        </div>
  
       
      </>);
}

export default Header;