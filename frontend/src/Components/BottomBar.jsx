import logo from '../assets/news-logo.png'
import { Link, useNavigate } from 'react-router-dom';




const BottomBar = () => {
    const navigate = useNavigate();

    const handleItemClick = (e, { name }) => {
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

    return (
        <div className='bottom'>
            <div className='bottombar'>
                <img src={logo} alt="" style={{alignSelf:"center" ,height: "100%", width: "30%", objectFit: "cover" }} />
            </div>
            <h5 style={{marginTop:"20px", alignSelf: "center" }}>
                <p style={{ color: "grey", cursor: "pointer" }}>
                    <a href="https://github.com/ShadanKazmi/news-app" target="_blank" rel="noopener noreferrer" style={{ color: "grey", textDecoration: "none" }}>
                        GitHub
                    </a>
                    <span> | </span>
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "grey", textDecoration: "none" }}>
                        Vercel
                    </a>
                </p>
            </h5>

        </div>
    )
}

export default BottomBar