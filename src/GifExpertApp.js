import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories]=useState(['Liga']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>
                {
                    categories.map(category=>(
                        <GifGrid
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )  
}



// import React, { useState } from 'react';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

// export const GifExpertApp = () => {
//     // const categories=['Liga','Barcelona','Emelec'];
//     const [categories, setCategories]=useState(['Liga']);

//     // const handleAdd=()=>{
//     //     setCategories(categ=>[...categ,'Independiente']);
//     // }

//     return (
//         <>
//             <h2>GifExpertApp</h2>
//             <AddCategory setCategories={setCategories}/>
//             <hr />

//             {/* <button onClick={handleAdd}>Agregar</button> */}

//             <ol>
//                 {
//                     categories.map(category=>(
//                         // return <li key={category}>{category}</li>
//                         <GifGrid
//                             key={category} 
//                             category={category}
//                         />
//                     ))
//                 }
//             </ol>

//         </>
//   )  
// }