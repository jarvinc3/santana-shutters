import Inicio from "../components/Inicio"
// import Agendar from "../components/Agendar"
// import Servicios from "../components/Servicios"
// import SobreNosotros from "../components/SobreNosotros"

function Main() {
  return (
    <div id="main" className="h-[100%] px-[20px] pt-[10px] pb-2 md:px-[150px] bg-slate-50 dark:bg-slate-900 bg-gradient-to-r from-gray-700 to-black">
        <Inicio />
    </div>
  )
}

export default Main