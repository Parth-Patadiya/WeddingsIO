// import React, { useEffect, useRef, useState } from 'react';
// import { Aisle, BrideBook, Forbes, Hitchedcouk, WeddingWire } from '../common/commonImport';
// // import './Carousel.css';

// const LogoCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const items = [
//         { id: 1, content: Aisle },
//         { id: 2, content: BrideBook },
//         { id: 3, content: Forbes },
//         { id: 4, content: Hitchedcouk },
//         { id: 5, content: WeddingWire },
//     ];
//     const itemsRef = useRef(null);

//     const totalItems = items.length;

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems * 2));
//         }, 4000); // Change slide every 3 seconds

//         return () => clearInterval(intervalId);
//     }, [totalItems]);

//     useEffect(() => {
//         if (itemsRef.current) {
//             const transitionDuration = currentIndex === 0 ? '0s' : '0.7s';
//             itemsRef.current.style.transition = `transform ${transitionDuration} ease-in-out`;
//             itemsRef.current.style.transform = `translateX(-${(currentIndex % totalItems) * (100 / totalItems)}%)`;
//         }

//         if (currentIndex === totalItems) {
//             setTimeout(() => {
//                 itemsRef.current.style.transition = 'none';
//                 itemsRef.current.style.transform = 'translateX(0)';
//                 setCurrentIndex(0);
//             }, 700);
//         }
//     }, [currentIndex, totalItems]);

//     return (
//         <div className="relative mt-10 mb-28 w-full overflow-hidden">
//             <div className="hidden sm:block absolute z-10 inset-y-0 left-0 w-[500px] bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none"></div>
//             <div className="hidden sm:block absolute z-10 inset-y-0 right-0 w-[500px] bg-gradient-to-l from-white via-transparent to-transparent pointer-events-none"></div>
//             <div ref={itemsRef} className="flex w-max">
//                 {items.map((item) => (
//                     <div key={item.id} className="min-w-1/3  h-[52px] flex align-center px-10">
//                         <div className="bg-white  align-center rounded-lg">
//                             <img className='w-[192px] ' src={item.content} />
//                         </div>
//                     </div>
//                 ))}
//                 {items.map((item) => (
//                     <div key={item.id + totalItems} className="min-w-1/3  h-[52px] flex align-center px-10">
//                         <div className="bg-white  align-center -lg ">
//                             <img className='w-[192px]' src={item.content} />
//                         </div>
//                     </div>
//                 ))}
//                 {items.map((item) => (
//                     <div key={item.id + totalItems} className="min-w-1/3 flex align-center px-10">
//                         <div className="bg-white  align-center rounded-lg ">
//                             <img className='w-[192px]' src={item.content} />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LogoCarousel;


import React, { useEffect, useRef, useState } from 'react';
import { Aisle, BrideBook, Forbes, Hitchedcouk, WeddingWire } from '../common/commonImport';

const LogoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        { id: 1, content: Aisle },
        { id: 2, content: BrideBook },
        { id: 3, content: Forbes },
        { id: 4, content: Hitchedcouk },
        { id: 5, content: WeddingWire },
    ];
    const itemsRef = useRef(null);

    const totalItems = items.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems * 2));
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(intervalId);
    }, [totalItems]);

    useEffect(() => {
        if (itemsRef.current) {
            const transitionDuration = currentIndex === 0 ? '0s' : '0.7s';
            itemsRef.current.style.transition = `transform ${transitionDuration} ease-in-out`;
            itemsRef.current.style.transform = `translateX(-${(currentIndex % totalItems) * (100 / totalItems)}%)`;
        }

        if (currentIndex === totalItems) {
            setTimeout(() => {
                itemsRef.current.style.transition = 'none';
                itemsRef.current.style.transform = 'translateX(0)';
                setCurrentIndex(0);
            }, 700);
        }
    }, [currentIndex, totalItems]);

    return (
        <div className="relative my-10 w-full overflow-hidden">
            <div className="hidden sm:block absolute z-10 inset-y-0 left-0 w-[500px] bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none"></div>
            <div className="hidden sm:block absolute z-10 inset-y-0 right-0 w-[500px] bg-gradient-to-l from-white via-transparent to-transparent pointer-events-none"></div>
            <div ref={itemsRef} className="flex w-max">
                {items.map((item) => (
                    <div key={item.id} className="min-w-1/3 p-10 flex justify-center items-center">
                        <div className="bg-white h-[52px] rounded-lg flex justify-center items-center">
                            <img className="w-[192px]" src={item.content} alt='' />
                        </div>
                    </div>
                ))}
                {items.map((item) => (
                    <div key={item.id + totalItems} className="min-w-1/3 p-10 flex justify-center items-center">
                        <div className="bg-white h-[52px] rounded-lg flex justify-center items-center">
                            <img className="w-[192px]" src={item.content} />
                        </div>
                    </div>
                ))} 
                 {items.map((item) => (
                    <div key={item.id + totalItems * 2} className="min-w-1/3 p-10 flex justify-center items-center">
                        <div className="bg-white h-[52px] rounded-lg flex justify-center items-center">
                            <img className="w-[192px]" src={item.content}/>
                        </div>
                    </div>
                ))}
                {/* {items.map((item) => (
                    <div key={item.id + totalItems * 2} className="min-w-1/3 p-10 flex justify-center items-center">
                        <div className="bg-white h-[52px] rounded-lg flex justify-center items-center">
                            <img className="w-[192px]" src={item.content}/>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default LogoCarousel;