import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/",
        private: false,
    },
        {
        id: nanoid(),
        text: "MyBooks page",
        link: "/my-books",
        private: true,
    },
  
  
];

export default items;