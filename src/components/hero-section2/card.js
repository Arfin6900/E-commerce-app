const Card = ({val}) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          gap:10
        }}
      >
        <img
          class=""
          src={val.img}
          style={{borderRadius:"50%"}}
        />
        <h2 className="text-2xl ttext-bold text-[#F36F1D]">{val.name}</h2>
        <p className="text-base text-center text-black">
         {val.description}
        </p>
      </div>
    );
  };
  export default Card