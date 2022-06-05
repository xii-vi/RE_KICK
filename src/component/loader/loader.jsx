import Loader from "react-spinners/BeatLoader"
export const LoadSpin = ()=>{
    const color = "#1b1c1e";
    return(
    <div className="flex center-flex">
        <div className="">
            <Loader size={30} margin={2} loading={true} color={color}/>
        </div>
    </div>
    )
}