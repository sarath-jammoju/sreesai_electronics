// import React from "react";

// export default function GoogleMapEmbed() {

//   return (
//     <div>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4298.387756227633!2d80.43213242160527!3d16.301052415117148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75719ea3e3fb%3A0x1964329d41473121!2sSree%20sai%20electronics%20(Laptop%20store)!5e0!3m2!1sen!2sin!4v1738063310709!5m2!1sen!2sin"
//         width="100%"
//         height="600"
//         // style="border:0;"
//         allowfullscreen=""
//         loading="lazy"

//       ></iframe>
//     </div>
//   );
// }

import React from "react";

export default function GoogleMapEmbed() {
  return (
    <div className="google-map-container">
      <iframe
        className="google-map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d19025.71486789698!2d80.42981612216336!3d16.295959189205032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE4JzA0LjIiTiA4MMKwMjYnMTAuOSJF!5e0!3m2!1sen!2sin!4v1738144040202!5m2!1sen!2sin%22"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}



