const ButtonContainer=({children,justify})=>{
    return(
      <section className={`w-40 h-14 bg-[#2C67F9] items-center gap-[5px] flex rounded-lg justify-center cursor-pointer`}>
      {children}
    </section>
    )
    }

export default ButtonContainer