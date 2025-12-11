import React from 'react'
import { HeroProps } from './Hero.types';
import "./Hero.css";

export const Hero = ({ children }: HeroProps) => {
    return (
        <div className='globalWrapper'>
            <div className='mainWrapper'>
                <div className="container">
                    <header className="header">
                        <div className="logo">
                            <img src={"/logo.svg"} className='logoImg' />
                        </div>
                    </header>

                    <main className="main">
                        <div className="leftSection">
                            <img src={"/aeroplane.svg"} className="aeroplaneImg" />
                            <div className="formContainer">
                                <div className="selectRow">
                                    <div className="selectGroup">
                                        <div className="selectWrapper">
                                            <img src="/indiaFlag.svg" alt="India" className="flag" />
                                            <div className="selectContent">
                                                <label className="label">Nationality</label>
                                                <select className="select">
                                                    <option>Indian</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="selectGroup">
                                        <div className="selectWrapper">
                                            <img src="/dubaiFlag.svg" alt="UAE" className="flag" />
                                            <div className="selectContent">
                                                <label className="label">Residency</label>
                                                <select className="select">
                                                    <option>United Arab Emirates</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="optionsRow">
                                    <div>
                                        <button className="optionButton active">
                                            <div className="iconWrapper">
                                                <img src={"/location.svg"} />
                                            </div>
                                        </button>
                                        <span className="optionLabel">Destination</span>
                                    </div>

                                    <div>
                                        <button className="optionButton">
                                            <div className="iconWrapper">
                                                <img src={"/visaIcon.svg"} />
                                            </div>
                                        </button>
                                        <span className="optionLabel">Visa mode</span>
                                    </div>

                                    <div>
                                        <button className="optionButton">
                                            <div className="iconWrapper">
                                                <img src={"/calender.svg"} />
                                            </div>
                                        </button>
                                        <span className="optionLabel">Travel date</span>
                                    </div>
                                </div>

                                <div className="searchWrapper">
                                    <input
                                        type="text"
                                        placeholder="Search by country or city"
                                        className="searchInput"
                                    />
                                    <button className="searchButton">
                                        <img src={"/search.svg"} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="rightSection">
                            <div className="imageGrid">
                                <img src="/bgGrid.svg" alt="Mont Saint Michel" className="gridImage" />
                            </div>
                        </div>
                    </main>

                </div>


            </div>
            <footer className="footer">
                <div className="aiPrompt">
                    <div className="aiIcon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="url(#gradient)" />
                            <defs>
                                <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22">
                                    <stop offset="0%" stopColor="#667eea" />
                                    <stop offset="100%" stopColor="#764ba2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="aiText">Plan your next adventure, and let AI simplify your visa</span>
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </footer>
        </div>
    )
}