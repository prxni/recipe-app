export default function Item(props)
{
    return(
        <div className=" w-80 p-3 h-[60svh] hover:h-fit border-2 flex  text-gray-300 opacity-50 hover:opacity-100 border-white bg-cyan-600 dark:bg-gray-950 rounded-lg flex-col hover:scale-105 duration-200">
            <div className="flex flex-row align-middle items-center ">
                <img src={props.img} className="w-28 p-2 " alt="oru image"/>
                <h1 className="text-2xl font-bold font-mono p-2 ">{props.title}</h1>
            </div>     
            <p className="font-sora overflow-hidden">{props.desc}
            </p>
        </div>
    )
}