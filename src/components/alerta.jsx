const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-300 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-linear-to-r border-2 border-gray-300 text-center p-3 rounded-xl uppercase text-white text-sm font-bold mb-10  `}>
      {alerta.msg}
    </div>
  )
}

export default Alerta