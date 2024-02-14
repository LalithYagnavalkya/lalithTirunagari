import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
    return <div className="container mx-auto pt-2 flex justify-between">
        <div className="flex gap-x-4">
            <Image src={"/images/logo-javascript.svg"} alt="js" width={"40"} height={"40"}></Image>
            <span className="font-semibold">
                Full Stack
                <br />
                Developer
            </span>
        </div>
        <Button variant={'outline'}>Download my resume</Button>
    </div>
}

export default Navbar;