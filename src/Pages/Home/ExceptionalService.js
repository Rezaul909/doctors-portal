import React from "react";

const ExceptionalService = () => {
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/album?w=400&h=400"
            alt="Album"
          />
        </figure>
        <div class="card-body w-48">
          <h2 class="card-title">Exceptional Dental Care, on Your Terms</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
          <div class="card-actions justify-start">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalService;
