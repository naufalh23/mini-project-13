import Link from "next/link"
import Wrapper from "./wrapper"
import AvatarComp from "./avatar"
import Image from "next/image"

export const Navbar = () => {
    return (
        <div className="sticky top-0 h-[80px] z-[9999]">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <Wrapper>
                    <div className="flex justify-between w-full items-center">
                        <Link href={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src={"/assets/logo.png"} alt="..." width={150} height={10} />
                        </Link>
                        <AvatarComp />
                    </div>
                </Wrapper>
            </nav>
        </div>
    )
}