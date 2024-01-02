// Context provides a way to pass data through the component tree without having to pass props down manually at every level. Here's how you can use the useContext hook in a React application:

import { createContext } from "react";

const MyContext = createContext();
export default MyContext;