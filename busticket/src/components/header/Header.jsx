import React,{useState} from 'react'
import HeaderList from './HeaderList';

const Header = ()=>{

    const [toggleMenu,setToggleMenu] = useState("toggleinputs");
    const [addOpacity,setAddOpacity] = useState(0);

    const togglemenuHandaler = ()=>{
        console.log("working");

        if(toggleMenu || addOpacity){
            setToggleMenu("")
            setAddOpacity(100);

        }else{
            setToggleMenu("toggleinputs");
            setAddOpacity(0);
        }

    }

    return (
        <section>
            <nav className="w-full bg-cyan-700 md:flex md:justify-between md:items-center p-5 fixed z-50">
                
                <div className="flex justify-between items-center text-white">
                    <span className="text-2xl cursor-pointer uppercase font-bold">
                        <img src="https://www.shutterstock.com/image-vector/bus-ticket-icon-linear-vector-600nw-2270327237.jpg" className="w-16 h-16 mr-3 rounded-full inline" alt="" />Bus Ticket
                    </span>
            
                    <span className="text-2xl cursor-pointer md:hidden mx-4">
                        <i className={`fas fa-bars text-white ${toggleMenu}`} onClick={togglemenuHandaler}></i>
                    </span>
                </div>
        
                <ul className={`bg-cyan-700 w-full md:w-auto opacity-${addOpacity} md:opacity-100 absolute left-0 md:static md:flex md:items-center px-3 py-3 md:py-0 transition-all duration-500 z-50 foruls`}>
                    <HeaderList/>
                </ul>
                
        
            </nav>
        </section>
    )
}

export default Header;