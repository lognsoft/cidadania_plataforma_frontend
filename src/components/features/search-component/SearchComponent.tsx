import React from "react";

const SearchComponent: React.FC = () => {
  return (
    <div className="w-[439px] h-[36px] border border-default-quinary rounded-[15px] flex items-center px-2">
      <img
        src="/images/icons/icone-lupa.svg"
        alt="icone-lupa"
        className="mr-[13px]"
      />
      <input
        type="text"
        placeholder="Digite aqui"
        className="flex-1 outline-none border-none text-[#DCDCDC] placeholder:text-[#DCDCDC] placeholder-opacity-100 font-poppins font-normal text-[12px]"
      />
    </div>
  );
};

export default SearchComponent;
