import React, { useState } from "react";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //   hide scroll btn using useState
  const [showScroll, setShowScroll] = useState(false);
  //   show scroll btn using useState
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  //   add event listener
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      {showScroll && (
        <div className="scroll-top btn" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default ScrollTop;
