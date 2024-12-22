import { useContext } from "react";
import Pricing from "./Pricing";
import Context from "../../../../context";
import { useParams } from "react-router-dom";

const Header_Course = () => {

    let { id } = useParams();

    let { courseData } = useContext(Context);
    let filterData = courseData.find((data, ind) => {
        return ind == id;
    });


    return (
        <div className="bg-gray-100 pl-6 relative">
            <div className="bg-gray-900 text-white p-6 mt-2  w-[1065px] rounded">
                <div className="pr-48">
                    <h1 className="text-3xl font-bold">{filterData?.description} [<span className="text-blue-400">{filterData?.category}</span>]</h1>
                    <p className="mt-2 text-yellow-400">0.0 ⭐ (0 ratings) | 0 students</p>
                    <p className="mt-2">Language : {filterData?.language} || <span className="text-gray-200">level : {filterData?.level}</span></p>
                    <p className="mt-2">Created-Date : {new Date(filterData?.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="absolute -top-5 right-2 ">
                    <Pricing filterData={filterData} />
                </div>
            </div>
        </div>
    );
};

export default Header_Course;
