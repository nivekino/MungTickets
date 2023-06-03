import React , { useState }from "react";
import "./assets/style.css";

const PagoEvento = () => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
     <div className="container2">
       <div className="section1">
       <h1 className="asd">Juan Luis Guerra</h1>
       <div className="info">
         <div className="item">
            <i className="fa-solid fa-calendar-days icon" style={{ marginRight: '12px' }}></i>
            <p className="txt-item">24-05-23</p>
         </div>
         <div className="item">
            <i className="fa-regular fa-location-dot icon"  style={{ marginRight: '12px' }}></i>
            <p className="txt-item">Salamanca</p>
         </div>
         <div className="item">
            <i className="fa-regular fa-timer icon"  style={{ marginRight: '12px' }}></i>
            <p className="txt-item">1:30 horas de duración</p>
         </div>
         <div className="item">
            <i className="fa-regular fa-timer icon"  style={{ marginRight: '12px' }}></i>
            <p className="txt-item">18:30</p>
         </div>
       </div>
       <hr className="linea-horizontal" />

       </div>

       <div className="section2">
         <div className="colum1">
         <h3 className="txt-title">Ingresa los siguientes datos</h3>
           <p className="txt-colum1">Seleccione la localidad</p>
           <label>
              <input type="checkbox"
               checked={selectedOption === 'option1'}
               onChange={() => handleOptionChange('option1')}/>
              <p className="txt-checkbox">Opcion</p>
           </label>
           <label>
              <input type="checkbox"
               checked={selectedOption === 'option2'}
               onChange={() => handleOptionChange('option2')}/>
              <p className="txt-checkbox">Opcion</p>
           </label>
           <label>
              <input type="checkbox"
               checked={selectedOption === 'option3'}
               onChange={() => handleOptionChange('option3')}/>
              <p className="txt-checkbox">Opcion</p>
           </label>
           <label>
              <input type="checkbox"
               checked={selectedOption === 'option4'}
               onChange={() => handleOptionChange('option4')}/>
              <p className="txt-checkbox">Opcion</p>
           </label>
           <p className="txt-colum1">Seleccione la cantidad de tickets</p>
           <select>
             <option value="">Cantidad de tickets</option>
             <option value="">1</option>
             <option value="">2</option>
             <option value="">3</option>
           </select>
          <div className="line-hor"></div>
          <h3 className="txt-title">Total a cancelar</h3>
         </div>


         <div className="colum2">

         </div>
       </div>
       
     </div>
    </>
  );
};

export default PagoEvento;
