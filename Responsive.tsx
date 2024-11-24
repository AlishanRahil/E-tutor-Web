// import React from 'react'
// import {motion , AnimatePresence} from 'framer-motion'
// const Responsive = ({IsOpen}:any) => {
//   return (
//     <AnimatePresence mode='wait'>
//       {
//         IsOpen && (
//             <motion.div>

//                 <div className='text-xl font-semibold uppercase bg-yellow-400 text-white py-10 p-6 '>
//                     <ul className=' flex flex-col items-center justify-center gap-10'>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Services</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             </motion.div>
//         )
//       }
//     </AnimatePresence>
//   )
// }

// export default Responsive




// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Responsive = ({ IsOpen }: any) => {
//   const variants = {
//     hidden: { opacity: 0, y: -20 }, // Hidden state
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Visible state
//     exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }, // Exit state
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {IsOpen && (
//         <motion.div
//           initial="hidden" // Initial animation state
//           animate="visible" // State when visible
//           exit="exit" // State when exiting
//           variants={variants} // Use the variants
//           className="absolute top-0 left-0 w-full z-10"
//         >
//           <div className="text-xl font-semibold uppercase bg-yellow-400 mt-24 rounded-md text-white py-10 p-6">
//             <ul className="flex flex-col items-center justify-center gap-10 ">
//               <li>Home</li>
//               <li>About</li>
//               <li>Services</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Responsive;





import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa'; // Import close icon from react-icons

const Responsive = ({ IsOpen, onClose }: { IsOpen: boolean; onClose: () => void }) => {
  const variants = {
    hidden: { opacity: 0, y: -20 }, // Hidden state
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Visible state
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }, // Exit state
  };

  return (
    <AnimatePresence mode="wait">
      {IsOpen && (
        <motion.div
          initial="hidden" // Initial animation state
          animate="visible" // State when visible
          exit="exit" // State when exiting
          variants={variants} // Use the variants
          className="absolute top-0 left-0 w-full z-10"
        >
          <div className="relative text-xl font-semibold uppercase bg-yellow-400 mt-24 rounded-md text-white py-10 p-6">
            {/* Close Icon */}
            <button
              onClick={onClose} // Close when clicked
              className="absolute top-3 right-3 text-2xl text-white focus:outline-none"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col items-center justify-center gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Responsive;
