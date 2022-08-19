import React from 'react'
import { GoLocation } from 'react-icons/go';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="header max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <GoLocation className='absolute-center location-icon'/>
              <div>Bangalore</div>
            </div>
            <AiOutlineCaretDown className=" absolute-center" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <AiOutlineSearch className=" absolute-center search-icon"/>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Shuvam</span>
          <AiOutlineDown className="absolute-center profile-options-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;