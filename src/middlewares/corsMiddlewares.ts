import cors from "cors";

const corsOptions = {
    origin: "https://localhost:300",
    optionsSuccessStatus: 200
}

export default cors(corsOptions)