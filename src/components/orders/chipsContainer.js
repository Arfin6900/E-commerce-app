const Chipscontainer=({children,justify})=>{
    return(
      <section className={`w-60 h-14 bg-[#F6F7FA] items-center gap-[5px] flex pl-4 rounded-lg ${justify?'justify-center':'justify-start'}`}>
      {children}
    </section>
    )
    }

export default Chipscontainer