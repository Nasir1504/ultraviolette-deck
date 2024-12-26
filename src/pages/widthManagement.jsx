// import React, { useEffect, useState } from 'react';

// export default function WidthManagement() {
//     const [dimensions, setDimensions] = useState({
//         width: window.innerWidth,
//         height: window.innerHeight,
//     });

//     useEffect(() => {
//         const handleResize = () => {
//             const newWidth = Math.max(window.innerWidth, dimensions.height);
//             setDimensions({
//                 width: newWidth,
//                 height: window.innerHeight,
//             });
//         };

//         // Add resize event listener
//         window.addEventListener('resize', handleResize);

//         // Clean up the event listener when the component is unmounted
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [dimensions.height]);

//     return (
//         <div>
//             <h1>Resizable Window</h1>
//             <p>Width: {dimensions.width}</p>
//             <p>Height: {dimensions.height}</p>
//         </div>
//     )
// }
