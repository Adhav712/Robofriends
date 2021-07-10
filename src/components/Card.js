import React from 'react';


const Card = ({name,email,id}) => {
    return(
        <div className = " tc bg-light-green ma2 pa3 dib grow br3 shadow-5 bw-2 ">
            <img alt = 'Robots' src={`https://robohash.org/${id}?200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        );
}

export default Card;



// import React from 'react';

// const Card = ({name,email,id})=>{
//     return(
//         <div className = 'tc bg-light-green dib ma2 br3 pa3 grow shadow-5 bw2' >
//             <img src ={`https://robohash.org/${id}?200x200`} />
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//     )
// }


// export default Card;
