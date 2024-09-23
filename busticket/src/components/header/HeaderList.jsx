import React from "react";

const HeaderList = ()=>{
    const listTitleDatas = ["Home","Print Your Tricket","Contact","English"];
    
    return (
        <>
            {listTitleDatas.map((listTitleData,idx)=>(
                <li key={idx} className="mx-5 my-6 md:my-0 text-slate-300"><a href="javascript:void(0);" className="text-lg hover:text-white trantion-all duration-0.3">{listTitleData}</a></li>
            ))}
        </>
    )
}

export default HeaderList;