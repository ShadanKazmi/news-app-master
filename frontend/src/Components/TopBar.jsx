import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/news-logo.png';
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem, DropdownMenu, Input, Menu, MenuItem } from 'semantic-ui-react';
import { isUserLoggedIn } from '../api/LogContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { searchArticles } from '../api/GetNews';
import { CountryContext } from '../api/CountryContext';

const TopBar = () => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState('home');
    const isLoggedIn = useContext(isUserLoggedIn);
    const [hasProfile, setHasProfile] = useState(false);

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const setCnt = useContext(CountryContext);

    const countries = [
        'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn',
        'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu',
        'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma',
        'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro',
        'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw',
        'ua', 'us', 've', 'za'
    ];

    const handleSearch = async () => {
        setLoading(true);
        try {
            const fetchedArticles = await searchArticles(query);
            navigate('/search', { state: { articles: fetchedArticles, query } });
        } catch (error) {
            console.error('Error searching articles:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isLoggedIn.userState === "Logged-In") {
            setHasProfile(true);
        } else {
            setHasProfile(false);
        }
    }, [isLoggedIn.userState]);
    
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        switch (name.toLowerCase()) {
            case 'home':
                navigate('/');
                break;
            case 'business':
                navigate('/business');
                break;
            case 'entertainment':
                navigate('/entertainment');
                break;
            case 'sports':
                navigate('/sports');
                break;
            case 'science':
                navigate('/science');
                break;
            case 'health':
                navigate('/health');
                break;
            case 'technology':
                navigate('/technology');
                break;
            default:
                break;
        }
    };

    const handleDropdownClick = () => {
        if (!hasProfile) {
            window.location.href = '/signup';
        }
    };

    const handleLogout = () => {
        isLoggedIn.logout();
        axios.post('https://news-app-server-fjpt.onrender.com/user/logout').catch(console.error);
    };

    const handleCountryChange = (countryCode) => {
        setCnt.setCountry(countryCode);
    };

    return (
        <div className='top'>
            <div className='topbar'>
                <img src={logo} alt="" style={{ alignSelf: "center", height: "100%", width: "30%", objectFit: "cover" }} />
            </div>
            <div className='topbar-btn'>
                <Menu borderless size='massive' fluid style={{ backgroundColor: 'rgb(71, 119, 132)' }}>
                    <Menu.Item>
                        <div className="ui category search">
                            <div className="ui transparent icon input">
                                <Input
                                    icon='searchengin'
                                    className="prompt"
                                    type="text"
                                    placeholder="Search a topic..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') handleSearch();
                                    }}
                                />
                            </div>
                            <div className="results"></div>
                        </div>
                    </Menu.Item>
                    <MenuItem
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={handleItemClick}
                    />
                    <MenuItem
                        name='Business'
                        active={activeItem === 'Business'}
                        onClick={handleItemClick}
                    />
                    <MenuItem
                        name='Entertainment'
                        active={activeItem === 'Entertainment'}
                        onClick={handleItemClick}
                    />
                    <MenuItem
                        name='Sports'
                        active={activeItem === 'Sports'}
                        onClick={handleItemClick}
                    />
                    <MenuItem
                        name='Science'
                        active={activeItem === 'Science'}
                        onClick={handleItemClick}
                    />
                    <MenuItem
                        name='Health'
                        active={activeItem === 'Health'}
                        onClick={handleItemClick}
                    />
                    <MenuItem
                        name='Technology'
                        active={activeItem === 'Technology'}
                        onClick={handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Dropdown
                                text={setCnt.country.toUpperCase()}
                                icon='world'
                                floating
                                button
                                className='icon'
                            >
                                <DropdownMenu style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {countries.map(countryCode => (
                                        <DropdownItem key={countryCode} onClick={() => {
                                            handleCountryChange(countryCode);
                                            window.location.reload();
                                            }}>
                                            {countryCode.toUpperCase()}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item>
                            {hasProfile ? (
                                <Dropdown icon='user' floating button>
                                    <DropdownMenu>
                                        <DropdownHeader icon='setting' content='User Settings' />
                                        <DropdownDivider />
                                        <DropdownItem icon='user circle outline' text='Profile' onClick={() => navigate('/profile')} />
                                        <DropdownItem icon='log out' text='Logout' onClick={()=>{
                                            handleLogout();
                                            window.location.reload();
                                            }} />
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <Dropdown
                                    icon='sign-in alternate'
                                    floating
                                    button
                                    className='icon'
                                    onClick={handleDropdownClick}
                                />
                            )}
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        </div>
    );
};

export default TopBar;
