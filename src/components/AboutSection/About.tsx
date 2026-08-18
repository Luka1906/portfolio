import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

export default function About () {

    return (
        <div className="flex px-12.5 gap-8">
            <AboutText/>
            <AboutImage/>
        </div>
    )

}