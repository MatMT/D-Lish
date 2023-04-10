// Habilitando archivo para router link
import { Link } from "react-router-dom";

export default function Registro() {
    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="block bg-white shadow-2xl p-6 rounded-xl shodow-md shadow-slate-300 w-90">
            <span className="mb-3 text-4xl font-bold ">Registro</span>
                <form>
            <div className="">
            <img src="/img/logo2.png" alt="img" className="w-[200px] position-absolute"/>
            </div>
            <span className=" font-tittle hover:font-tittleserif flex items-center  font-tittlelight text-black ">¿Quieres saltarte la fila y tener más tiempo para disfrutar con tus amigos?</span>
            <span className=" font-tittle hover:font-tittleserif flex items-center  font-tittlelight  text-black ">Pues, ¡estas en el lugar correcto!</span>
            <br></br>       <br></br>  
                    {/* Nombre de Usuario */}
                    <div id="fullName" class="flex flex-row">
                        <div id="firstName" class="w-1/2 mr-1">
                            <label htmlFor ="fname" class="mb-2 text-md">Nombre</label>
                            <input type="text" name="" id="fname" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-tittlelight placeholder:text-gray-500"></input>
                        </div>
                    {/* Apellido de Usuario */}
                        <div id="lastName" class="w-1/2 mr-1">
                            <label htmlFor ="fname" class="mb-2 text-md">Apellido</label>
                            <input type="text" name="" id="lname" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-tittlelight placeholder:text-gray-500"></input>
                        </div>
                    </div>
<br></br>
                    {/* Email de Usuario */}
                    <label htmlFor="email" class="mb-2 text-md">Correo</label>
                    <input type="email" name="" id="email"  class="w-full p-2 border border-gray-300 rounded-md placeholder:font-tittlelight placeholder:text-gray-500"></input>
<br></br><br></br>
                    {/* Password */}
                    <label htmlFor="password" class="mb-2 text-md">Contraseña</label>
                    <input type="password" name="" id="password" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-tittlelight placeholder:text-gray-500"></input>
<br></br><br></br>
                    {/* Confirm Password */}
                    <label htmlFor="confirmPassword" class="mb-2 text-md">Confirmar Contraseña</label>
                <input type="password" name="" id="confirmPassword" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-tittlelight placeholder:text-gray-500"></input>
<br></br><br></br>
                    {/* Gender */}
                    <div id="gender" class="mb-2 text-md">
                    <p class="mb-3 text-md">Género</p>
                    <input type="radio" name="gender" id="male" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked></input>
                    <label htmlFor="male">Masculino</label>
                    <input type="radio" name="gender" id="female" class="text-sm mx-1 mb-2 text-md"></input><label htmlFor="female">Femenino</label>
                    </div>

                    <input type="submit" name="" id="signUp" class="w-full bg-blue-800 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"></input>
                </form>
            </div>
        </div>
        </>
    );
}
