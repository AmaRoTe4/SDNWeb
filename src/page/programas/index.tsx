import { Link } from "react-router-dom";

export default function Programas() {
    return (
        <main className="w-screen overflow-x-hidden flex flex-col items-center">
            <header className="m-0 p-0">
                <Link to="#" className="flex justify-center items-center">
                    <img src="/images/sdn.png" alt="titulo_sdn" className="w-[100px] md:w-[200px] hover:cursor-pointer hover:scale-125" />
                </Link>
            </header>
            <div className="w-full px-2 py-3 bg-slate-200">
                <h1 className="text-center text-[25px] leading-7">Sistema para locales comerciales:</h1>
            </div>
            <main className="py-3 w-full md:w-[50%] flex flex-col justify-center gap-5">
                <div className="w-full mt-3 px-5 flex flex-col items-center gap-3">
                    <h3 className="w-full text-center text-[20px] font-bold py-2">Puede hacer una prueba del sistema presionando en el botón de abajo ⬇️</h3>
                    <BotonDePrueba />
                </div>
                <div className="w-full px-5">
                    <h3 className="w-full text-center text-[20px] font-bold py-2">¿Que ofrece?</h3>
                    <p className="w-full text-[16px]">
                        Lo que ofrecemos con este sistema es la gestion completa de tus clientes, productos y ventas...
                    </p>
                    <p className="w-full text-[16px]">
                        <span className="font-bold text-[18px]">Clientes: </span> Podrás gestionar a tus clientes de forma que registres su información básica, además tendrás un apartado donde verás todos los movimientos de este, el estado en como esta y podrás también agregar ventas sobre él o pagos realizados.
                    </p>
                    <br />
                    <p className="w-full text-[16px]">
                        <span className="font-bold text-[18px]">Productos: </span> Los productos estarán gestionados por un nombre y código, podrás llevar la cuenta de tu stock de productos o ignorarla, también a estos se lo agrupará por categorías y te daremos <span className="font-bold text-[16px]">la opción de tener una función se suba de precio por grupo</span> la cual te permitirá gestionar los precio de una formas más rápido y fácil.
                    </p>
                    <br />
                    <p className="w-full text-[16px]">
                        <span className="font-bold text-[18px]">Ventas: </span>El sistema de la venta te permitirá crear nuevas ventas con los productos que dispones en stock, te permitirá tener un registro de quien la hizo cuando y como te pago. además de tener los resúmenes dividíos por días, lo que te permitirá llevar<span className="font-bold text-[16px]"> una gestión diaria de tu caja.</span>
                    </p>
                </div>
                <div className="w-full mt-3 px-5">
                    <h3 className="w-full text-center text-[20px] font-bold py-2">Beneficios al iniciar hoy: </h3>
                    <p className="w-full text-[16px]">
                        Al comenzar te brindaremos un base de datos con productos ya cargado, estos serán seleccionados por el cliente, los principales beneficios que te brindara esto sera que <span className="font-bold text-[16px]">pondrás comenzar a usar el sistema en el mismo momento en el cual se lo desbloqueamos</span>. Ahorrándose así también todo el tiempo que conlleva la carga de los productos.
                    </p>
                </div>
                <div className="w-full mt-3 px-5">
                    <h3 className="w-full text-center text-[20px] font-bold py-2">Precios: </h3>
                    <p className="w-full text-[16px]">
                        Actualmente comenzar con el programa es totalmente gratis, incluyendo la base de datos y todo. El servicio se cobra por mes actualmente el valor de este es de <span className="font-bold text-[18px]">$5000 (pesos) por mes</span>, pero el valor se adapta aproximadamente cada 3 meses y dependiendo los tipos de cambios y demás. Aceptamos todos los medios de pago.
                    </p>
                </div>
                {/* estender */}
            </main>
            <footer className="py-3 w-full md:w-[50%] flex flex-col justify-center gap-5 pb-16">
                <div className="w-full mt-3 px-5 flex flex-col items-center gap-3">
                    <h3 className="w-full text-center text-[20px] font-bold py-2">Puede hacer una prueba del sistema presionando en el botón de abajo ⬇️</h3>
                    <BotonDePrueba />
                </div>
                <div className="w-full mt-3 px-5 flex flex-col items-center gap-3">
                    <h3 className="w-full text-center text-[20px] font-bold py-2">Para contactarnos presione el botón de abajo ⬇️ , recuerde que su consulta no nos molesta!!!</h3>
                    <BotonContacto />
                </div>
            </footer>
        </main>
    )
}

const BotonDePrueba = () => {
    return (
        <a className="text-white w-[90%] hover:opacity-90 flex justify-center items-center rounded-lg bg-blue-600 p-3 text-[20px]" href="https://programa-comercial-prueba.vercel.app/">
            Sistema de prueba
        </a>
    )
}

const BotonContacto = () => {
    return (
        <a className="text-white w-[90%] hover:opacity-90 flex justify-center items-center rounded-lg bg-green-600 p-3 text-[20px]" href="https://wa.me/543482377231">
            WhatsApp
        </a>
    )
}