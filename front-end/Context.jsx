import axios from "axios";
import { createContext, useEffect, useState } from "react";


const Context = createContext();

function ContextProvider({ children }) {
    const [courseData, setCourses] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [savedData, setSavedData] = useState([]);

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




    // Load cart data from localStorage on component mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cartData");
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setCartData(parsedCart);
                } else {
                    console.warn("Invalid cart data in localStorage. Resetting cart.");
                    setCartData([]);
                }
            } catch (error) {
                console.error("Error ", error);
                setCartData([]);
            }
        } else {
            setCartData([]);
        }
    }, []);









    return (
        <Context.Provider value={{ courseData, setCourses, cartData, setCartData, savedData, setSavedData }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
export { ContextProvider };
