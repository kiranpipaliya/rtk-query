import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
const store= configureStore({
    reducer:{generaStore:generalSlice.reducer}
})
export default store