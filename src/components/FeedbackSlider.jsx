import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Glide, { Controls } from "@glidejs/glide/dist/glide.modular.esm";
import { FEEDBACKS } from "@/data/data";

const FeedbackSlider = ({ className }) => {
  const feedbackSliderRef = useRef(null);

  const [isFeedbackSliderShow, setIsFeedbackSliderShow] = useState(false);

  useEffect(() => {
    const OPTIONS = {
      perView: 1,
      bound: true,
      autoplay: true,
    };
    if (!feedbackSliderRef.current) return;

    let slider = new Glide(feedbackSliderRef.current, OPTIONS);
    slider.mount({ Controls });
    setIsFeedbackSliderShow(true);
    return () => {
      slider.destroy();
    };
  }, [feedbackSliderRef]);
  return (
    <div className={className}>
      <div
        ref={feedbackSliderRef}
        className={`flow-root container ${
          isFeedbackSliderShow ? "" : "invisible"
        }`}
      >
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {FEEDBACKS.map((feedback, index) => (
                <li
                  className={
                    "glide__slide my-8 lg:my-16 flex flex-col items-center"
                  }
                  key={feedback.id}
                  data-index={index}
                >
                  <Avatar className={"my-4 lg:my-8 w-16 h-16"}>
                    <AvatarImage src={feedback.avatar} alt="" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p
                    className={"italic text-gray-200 break-words mx-4 lg:mx-20"}
                  >
                    {feedback.content}
                  </p>
                  <h6 className={"font-bold  text-gray-200 mt-6"}>
                    {feedback.username}
                  </h6>
                  <p className={"text-xs  text-gray-200 leading-loose"}>
                    {feedback.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;
