import React from "react";

const ReviewCart = ({ review }) => {
  const { name, msg, img, city } = review;
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <p className=" ">{msg}</p>
        <div class="card-actions flex items-center mt-4 ">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt='' />
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
