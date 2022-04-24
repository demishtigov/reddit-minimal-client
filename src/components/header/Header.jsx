import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './header.css';
import { FcReddit } from 'react-icons/fc';
import { GoSearch } from 'react-icons/go';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () => {
  const [searchTerminal, setSearchTerminal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => setSearchTerminal(e.target.value);
  
  
  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTerminal));
  };
  
  useEffect(() => {
    setSearchTerminal(searchTerm);
  }, [searchTerm]);

  return (
    <header>
      <div className="logo">
        <FcReddit className="logo-icon" />
        <p>
          Reddit<span>Minimal-Client</span>
        </p>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerminal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button
          type="submit"
          onclick={onSearchTermSubmit}
          aria-label="Search posts"
        >
          <GoSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
