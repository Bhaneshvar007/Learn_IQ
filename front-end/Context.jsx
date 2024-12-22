import axios from "axios";
import { createContext, useEffect, useState } from "react";


const Context = createContext();

function ContextProvider({ children }) {
    const [courseData, setCourses] = useState([]);
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/get-course");
                setCourses(res.data);
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };

        fetchCourses();
    }, []);









    return (
        <Context.Provider value={{ courseData, setCourses, cartData, setCartData }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
export { ContextProvider };
