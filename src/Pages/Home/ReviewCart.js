import React from "react";

const ReviewCart = ({ review }) => {
  const { name, msg, img, city } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-left ">{msg}</p>
        <div className="card-actions flex items-center mt-4 ">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-accent">{name}</h4>
            <p>{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
