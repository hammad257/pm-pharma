import React from 'react';

const Pagination = ({curentPage,nextPage,totalCount}) => {

    const PageNumber = [];
    for(let i = 1;Math.ceil(totalCount/nextPage);i++){
        PageNumber.push(i)
    }

    return ( 
        <div>
              <nav>
            <ul className="pagination">
                {PageNumber.map((item)=>
                    <li className={item === curentPage ? "page-item active" : "page-item"}>
                        <a onClick={()=>{}} className="page-link">{item}</a>
                     </li>
                )}
                     
            
            </ul>
        </nav>
        </div>
     );
}
 
export default Pagination;