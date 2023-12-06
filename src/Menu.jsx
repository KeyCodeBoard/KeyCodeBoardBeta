import { FaPhoenixSquadron } from "react-icons/fa6";
export default function()
{
    return(
        <div className="bg-black font-bold text-white rounded-md border-2 border-orange-500 shadow-lg shadow-orange-500/50 p-5 m-5">
            <nav>
                <ul className="flex">
                    <FaPhoenixSquadron size={25} color="#f97316"/>
                    <li><a className="m-5 hover:underline underline-offset-8 hover:text-orange-500" target="_blank" href="#">KeyCodeBeta</a></li>
                    <li><a className="m-5 hover:underline underline-offset-8 hover:text-orange-500" target="_blank" href="#">PROJECTS</a></li>
                    <li><a className="m-5 hover:underline underline-offset-8 hover:text-orange-500" target="_blank" href="#">CODE</a></li>
                    <li><a className="m-5 hover:underline underline-offset-8 hover:text-orange-500" target="_blank" href="#">ABOUT ME</a></li>
                </ul>
            </nav>
        </div>
    )
}