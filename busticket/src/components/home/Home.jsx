import React,{useState} from 'react';
import Citydata from './Citydata';

const Home = ()=>{

    
    const [idx,setIdx] = useState(0);
    const [chtext,setChetext] = useState("Seat");

    const incHandler = ()=>{
        setIdx(idx +1);
        idx >= 4 && setIdx(4) || setChetext("Seats");
    }

    const decHandler = ()=>{
        setIdx(idx-1);

        if(idx <= 0){
            setIdx(0);
        }

        if(idx == 1){
            setChetext("Seat");
        }
    }


    return(
        <section>
                <div className ="py-9 h-screen flex justify-center  bg-zinc-300 bg-gradient-to-l from-zinc-300 to-cyan-700">
                    <div className='grid grid-cols-3'>
                        <div className="col-span-3 md:col-span-2 mt-[15%] ms-[3%] p-7 space-y-5">
                            <p className="font-bold text-[20px] md:text-[50px] text-white uppercase">Book Online Bus Ticket Around Myanmar</p>
                            <p className="text-sm md:text-xl tracking-wide text-slate-300">The leading bus ticketing system in Myanmar. Find the best price for your bus tickets.</p>

                            <div className="flex mt-3">
                                    <div className="bg-teal-900 md:p-3 text-sm md:text-lg p-1 px-2 text-gray-300 md:text-white rounded-lg me-3 cursor-pointer hover:bg-teal-800"><span id="number">70+</span>Operators</div>
                                    <div className="bg-teal-900 md:p-3 text-sm md:text-lg p-1 px-2 text-gray-300 md:text-white rounded-lg me-3 cursor-pointer hover:bg-teal-800">Secure and Fast Payment</div>
                            </div>
                        </div>


                        <div className="md:col-span-1 col-span-3 md:mt-[20%] md:p-7">
                        
                            <div className="w-[500px] md:w-96 bg-slate-300 shadow-md rounded-sm p-5 m-auto">
                                <form action="" method="">
                                    <p className="text-center text-lg font-bold text-teal-900 mb-2">Search Trip</p>
                                    <div className="dep">
                                        <select name="" id="" className="w-full p-3 rounded-md outline-0 focus:outline-none mb-2 cursor-pointer" required>
                                            <option selected disabled>From</option>
                                            <Citydata/>
                                        </select>
                                    </div>

                                    <div className="arrive">
                                        <select name="" id="" className="w-full p-3 rounded-md outline-0 focus:outline-none mb-2 cursor-pointer" required>
                                            <option selected disabled>To</option>
                                            <Citydata/>
                                        </select>
                                    </div>

                                    <div id="calendar" className="calendar relative">
                                    
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="bookingdate" id="deparature" className="text-stone-600 absolute top-2 left-4 cursor-pointer"><i className="fas fa-calendar mr-2"></i>Deparature Date</label>
                                        <input type="text" name="bookingdate" id="bookingdate" className="w-full p-2 px-4 rounded-md mb-2 outline-none cursor-pointer" readOnly required />
                                    </div>

                                    <div className="seat bg-slate-100 flex justify-between items-center rounded-md p-3 mb-2">
                                        <button type="button" id="minus" onClick={decHandler}><i className = {`fas fa-minus cursor-pointer`}></i></button>
                                    
                                        <p id="num">{idx} {chtext}</p>
                                
                                        <button type="button" id="plus" onClick={incHandler}><i className={`fas fa-plus cursor-pointer`}></i></button>
                                    </div>


                                    <div className="choicecitzen bg-slate-100 flex justify-center items-center rounded-lg p-3 mb-2">
                                        <input type="radio" id="foreign" className="mx-2" name="traveller" value="foreign" />
                                        <label htmlFor="foreign" className="mx-1">Foreign Traveller</label>
                                        <input type="radio" id="local" className="mx-2" name="traveller" value="local" />
                                        <label htmlFor="local" className="mx-1">Local Traveller</label>
                                    </div>

                                    <button type="submit" className="w-full bg-teal-900 text-white rounded-lg p-3 mb-2 hover:bg-teal-800">Search Now</button>

                                </form>
                            </div>
                
                        </div>
                    </div>
                </div>

        </section>
    )
}

export default Home;