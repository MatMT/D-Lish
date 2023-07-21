// Images
import LogoText from "../..//src/assets/logo/wide_white.png";

// Icons
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";


export default function Footer() {
    return (
        <footer className="footer footer-center px-8 py-5 bg-neutral text-white">
            <div>
                <img src={LogoText} className="h-12 cursor-pointer my-auto"></img>
                <p className="font-bold">
                    Proyecto Crea-J 2023
                </p>
                <p>Copyright ©  - Todos los derechos reservados</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <AiFillInstagram size={"34"} />
                    </a>
                    <a>
                        <BiLogoGmail size={"34"} />
                    </a>
                </div>
            </div>
        </footer>
    )
}