// import { useState, useEffect } from 'react'

// export default function DynamicText ({ duration: number, children: any }) {

//     useEffect(() => {
//         let index = 0;
//         const descInterval = setInterval(() => {
//           if (index < children.length - 1) {
//             setDesc(prevDesc => `${prevDesc}${newDesc[indexDesc]}`);
//             indexDesc++;
//           } else clearInterval(descInterval);
//         }, duration);
//         return () => clearInterval(descInterval);
//     }, [])

// }