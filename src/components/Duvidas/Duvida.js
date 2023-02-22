function Duvida(props) {
    return (<>

        <div onClick={props.onclick} className="flex items-center text-white gap-4 p-3 cursor-pointer">
            <div id={`arrowPergunta${props.id}`} className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8a6059"
                    class="bi bi-caret-right-fill"
                    viewBox="0 0 16 16" >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                </svg>
            </div>

            <div>
                <p className="text-[#8a6059]" id={`textPergunta${props.id}`}>
                    {props.pergunta}
                </p>
            </div>

        </div>

        <div>
            <p id={`Pergunta${props.id}`} className="text-[#e3cbc3] bg-[#8a6059] p-5 hidden font-semibold">
                <li>{props.resposta}</li>
            </p>
        </div>

        <div className="border-t-[0.5px] border-[#8a6059] "></div>

    </>);
}

export default Duvida;