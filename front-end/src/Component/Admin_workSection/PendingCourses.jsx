import React, { useContext, useEffect, useState } from "react";
import { MdAutoStories } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Context from "../../../context";
import axios from "axios";

const PendingCourses = () => {
  let { courseData, setCourses } = useContext(Context); // Ensure context provides setCourses
  const token = localStorage.getItem("token");

  // Filter only pending courses
  let filteredCourses = courseData.filter((val) => val.status === "Pending");

  async function rejectFn(_id) {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/reject-course",
        { _id },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      alert("Course rejected by admin");

      // Update context data
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course._id === _id ? { ...course, status: "Rejected" } : course
        )
      );
    } catch (error) {
      console.error("Error rejecting course:", error);
    }
  }

  async function approvedFn(_id) {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/approve-course",
        { _id },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      alert("Course approved by admin");

      // Update context data
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course._id === _id ? { ...course, status: "Approved" } : course
        )
      );
    } catch (error) {
      console.error("Error approving course:", error);
    }
  }

  return (
    <div className="max-w-[1380px]">
      <h1 className="ml-16 font-semibold text-2xl text-gray-700">
        Here're all course details (if admin can{" "}
        <span className="text-green-600">approve</span> and{" "}
        <span className="text-red-500">reject</span> the course)
      </h1>

      {filteredCourses.length === 0 ? (
        <div className="mt-32 text-center text-gray-400 font-semibold text-2xl">No course pending</div>
      ) : (
        filteredCourses.map((data) => (
          <div
            key={data._id}
            className="w-full flex justify-between items-center ml-16 pb-3 border-b-2 mt-5"
          >
            <div className="flex gap-8 items-center">
              <div className="text-6xl">
                <MdAutoStories className="text-gray-600" />
              </div>
              <div className="text-sm text-gray-700">
                <h2 className="font-semibold">{data.title}</h2>
                <p className="text-sm">{data.description}</p>
                <button className="text-sm bg-yellow-600 px-3 rounded text-white">
                  {data.status}
                </button>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <button
                className="rounded text-red-500 text-2xl duration-500 hover:scale-110"
                title="Reject"
                onClick={() => rejectFn(data._id)}
              >
                <ImCancelCircle />
              </button>
              <button
                className="rounded text-green-700 text-3xl duration-500 hover:scale-110"
                title="Approve"
                onClick={() => approvedFn(data._id)}
              >
                <IoCheckmarkDoneCircleSharp />
              </button>
            </div>
          </div>
        ))
      )}
    </div>

  );
};

export default PendingCourses;
