import React, { useState } from 'react';
import './Index.css';  

const VerticalMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);


  return (
    
    <ul className="vertical-menu">
      <li className="menu-item">
        <a href="verticalmenu.js">Главная</a>
      </li>
      <li className="menu-item with-dropdown">
      <a href="#" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Питание
        </a>
        {isDropdownOpen && (
          <ul className="dropdown">
            <li className="dropdown-item">
              <a href="https://diabetica.kz/pitanie">Диабетические продукты</a>
            </li>
            <li className="dropdown-item">
              <a href="https://fitseven.ru/pravilnoe-pitanie/dieta-pri-diabete">Советы по питанию</a>
            </li>
            <li className="dropdown-item">
              <a href="https://fitseven.ru/pravilnoe-pitanie/khlebnaya-edinitsa">Хлебная единица</a>
            </li>
          </ul>
        )}      
      </li>
      <li className="menu-item with-dropdown">
        <a href="#" onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
          Спорт
        </a>
        {isDropdownOpen2 && (
          <ul className="dropdown">
            <li className="dropdown-item">
              <a href="https://top20.best/ru/almaty/sport-krasota/fitnes-tsentryi/">Фитнес центры</a>
            </li>
            <li className="dropdown-item">
              <a href="https://ortop.ua/stati/uprazhneniya-dlya-snizheniya-sakhara-v-krovi/">Советы по спорту</a>
            </li>
          </ul>
        )}
      </li>
      <li className="menu-item with-dropdown">
        <a href="#" onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}>
          Интересные места 
        </a>
        {isDropdownOpen3 && (
          <ul className="dropdown">
            <li className="dropdown-item">
              <a href="https://sxodim.com/almaty/article/almaty-mountain-trips">Горные маршруты</a>
            </li>
            <li className="dropdown-item">
              <a href="hhttps://pandaland.kz/articles/semya/semejnyj-dosug/progulki-na-svezhem-vozduhe-luchshie-parki-almaty">Парки</a>
            </li>
            <li className="dropdown-item">
              <a href="https://sxodim.com/almaty/article/almaty-11-tours">Места за городом</a>
            </li>
          </ul>
        )}
      </li>
           <li className="menu-item">
             <a href="https://aptekaplus.kz">Инсулин</a>
          </li>
    </ul>
  );
};

export default VerticalMenu;

