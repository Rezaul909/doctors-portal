import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center mx-10 rounded-lg"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-140px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5 ">
        <h1 className="text-primary font-bold text-xl">Appointment</h1>
        <h1 className="text-4xl font-semibold text-white">
          Make an appointment Today
        </h1>
        <p className="text-xl text-white mt-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>

        <button className="btn btn-primary mt-5 text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MakeAppointment;
