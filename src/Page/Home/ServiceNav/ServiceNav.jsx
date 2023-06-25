import React from 'react';
import {
  FaAddressBook,
  FaBeer,
  FaBook,
  FaBookMedical,
  FaCalendarAlt,
  FaHome,
  FaMicroscope,
  FaStethoscope,
} from 'react-icons/fa';
const ServiceNav = () => {
  return (
    <div className="grid grid-cols-7 gap-4  m-4">
      <div className="border border-red-700 rounded-3xl flex bg-slate-100">
        <div className="h-10 w-10 bg-orange-300 rounded-full flex justify-center items-center relative -top-4 mr-4 ">
          <FaCalendarAlt></FaCalendarAlt>
        </div>
        <div>
          <p className="text-orange-300  py-1 pr-2">
            Book an <br></br>
            Appointment
          </p>
        </div>
      </div>
      <div className="border border-red-700 rounded-3xl flex">
        <div className="h-10 w-10 bg-orange-300 rounded-full flex justify-center items-center relative -top-4 mr-4 ">
          <FaStethoscope></FaStethoscope>
        </div>
        <div>
          <p className="text-orange-300  py-1 pr-2">
            Find a <br></br>
            Doctor
          </p>
        </div>
      </div>
      <div className="border border-red-700 rounded-3xl flex">
        <div className="h-10 w-10 bg-orange-300 rounded-full flex justify-center items-center relative -top-4 mr-4 ">
          <FaHome></FaHome>
        </div>
        <div>
          <p className="text-orange-300  py-1 pr-2">
            Book a <br></br>
            Home Test
          </p>
        </div>
      </div>
      <div className="border border-red-700 rounded-3xl flex">
        <div className="h-10 w-10 bg-orange-300 rounded-full flex justify-center items-center relative -top-4 mr-4 ">
          <FaMicroscope></FaMicroscope>
        </div>
        <div>
          <p className="text-orange-300  py-1 pr-2">
            Book a <br></br>
            Lab Test
          </p>
        </div>
      </div>
      <div className="border border-red-700 rounded-3xl flex">
        <div className="h-10 w-10 bg-orange-300 rounded-full flex justify-center items-center relative -top-4 mr-4 ">
          <FaBookMedical></FaBookMedical>
        </div>
        <div>
          <p className="text-orange-300  py-1 pr-2">
            Book Health
            <br></br>
            Packages
          </p>
        </div>
      </div>
      <div className="border border-red-700 rounded-3xl flex">
        <div className="h-10 w-10 bg-orange-300 rounded-full flex justify-center items-center relative -top-4 mr-4 ">
          <FaBook></FaBook>
        </div>
        <div>
          <p className="text-orange-300  py-1 pr-2">
            Get An <br></br>
            Estimate
          </p>
        </div>
      </div>
      <div className="border border-red-700 rounded-3xl flex">
        <div className="h-10 w-10 bg-orange-300 rounded-full flex justify-center items-center relative -top-4 mr-4 ">
          <FaAddressBook className=""></FaAddressBook>
        </div>
        <div>
          <p className="text-orange-300  py-1 pr-2">
            Get Second <br></br>
            Opinion
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceNav;
