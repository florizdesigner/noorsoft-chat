import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div>
      <div className="header_wrapper">
        <a href="https://yandex.ru" target='_blank'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3467/3467986.png"
            width="50px"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
