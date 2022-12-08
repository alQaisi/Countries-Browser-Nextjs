import { NextPage } from "next"

const Offline:NextPage<{a:number}>=()=>{
    return  (
        <div>
            <h1>Check your internet connection !</h1>
        </div>
    );
}
export default Offline;