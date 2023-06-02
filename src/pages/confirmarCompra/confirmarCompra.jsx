import React from "react";

const ConfirmarCompra = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-poppins gap-[19px] justify-start mx-auto pb-3 w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[1166px] sm:h-[524px] md:h-[625px] md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <div className="bg-black_900 h-[634px] mx-auto p-[122px] md:px-10 sm:px-5 w-full">
                <p className="font-medium mb-[-23.24px] mx-auto md:text-5xl text-[70px] text-center text-white_A700 z-[1]">
                  Resumen de tu compra
                </p>
                <p className="font-medium mt-[81px] mx-auto sm:text-[35px] md:text-[41px] text-[45px] text-center text-white_A700">
                  ¡Gracias por poner tu confianza en nosotros!
                </p>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-end mt-[-347.5px] mx-auto p-[7px] w-[71%] z-[1]">
                <div className="flex flex-col items-start justify-start mb-5 mt-[117px] w-full">
                  <div className="bg-gray_500 h-1 w-full" />
                  <p className="font-light font-poppins ml-6 md:ml-[0] mt-[18px] sm:text-[35px] md:text-[41px] text-[45px] text-black_900">
                    <>
                      JUAN LUIS GUERRA
                      <br />
                      EL SALVADOR - SALAMANCA
                    </>
                  </p>
                  <div className="bg-gray_500 h-1 mt-[17px] w-full" />
                  <p className="font-montserrat font-normal md:ml-[0] ml-[117px] mt-5 sm:text-[40px] md:text-[46px] text-[50px] text-black_900">
                    <span className="text-black_900 font-poppins text-left font-semibold">1</span>
                    <span className="text-black_900 font-poppins text-left font-light"> VIP $100</span>
                  </p>
                  <div className="bg-gray_500 h-1 mt-[9px] w-full" />
                  <div className="flex flex-row font-poppins sm:gap-10 items-center justify-between md:ml-[0] ml-[350px] mt-[31px] w-[61%] md:w-full">
                    <p className="font-medium sm:text-[40px] md:text-[46px] text-[50px] text-black_900">TOTAL</p>
                    <p className="font-light sm:text-[40px] md:text-[46px] text-[50px] text-black_900">$100</p>
                  </div>
                  <div className="bg-gray_500 h-1 mt-[137px] w-full" />
                  <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between ml-6 md:ml-[0] mt-[9px] w-[86%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col gap-[5px] justify-start w-full">
                        <p className="font-light sm:text-[40px] md:text-[46px] text-[50px] text-black_900">
                          Cobrado a la tarjeta
                        </p>
                        <div className="flex flex-row gap-[13px] items-start justify-start md:ml-[0] ml-[19px] w-[74%] md:w-full">
                          <img src="images/img_calculator.svg" className="h-14" alt="calculator" />
                          <p className="font-light sm:text-[40px] md:text-[46px] text-[50px] text-black_900">
                            ********8194
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="font-light sm:text-[40px] md:text-[46px] text-[50px] text-black_900">$100</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute font-montserrat h-[170px] inset-x-[0] mx-auto top-[23%] w-[27%] sm:w-full">
              <p className="absolute bottom-[18%] font-bold right-[0] md:text-5xl text-6xl text-yellow_700">
                mungTickets
              </p>
              <img
                src="images/img_logo2.png"
                className="absolute h-[170px] inset-y-[0] left-[0] my-auto object-cover w-[26%]"
                alt="logoTwo"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[75px] w-full">
          <div className="h-[71px] relative w-[21%] sm:w-full">
            <div className="absolute border-2 border-black_900 border-solid h-[71px] inset-[0] justify-center m-auto rounded-[25px] w-full"></div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto">
              <p className="font-medium sm:text-4xl md:text-[38px] text-[40px] text-black_900 text-center">
                Regresar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmarCompra;
