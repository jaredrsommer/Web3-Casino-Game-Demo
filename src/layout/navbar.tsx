
'use client'
import React, { useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Image,
} from "@heroui/react";
import { MenuList } from "@/components/Sidebar/menulist";
import { useCoreumWallet } from "@/providers/coreum";

export const CozyLogo = () => {
    return (
        <Image
            src="/assets/image/cozy-mascot.png"
            alt="CozyCasino"
            width={40}
            height={40}
            className="mr-2"
        />
    );
};

const CustomNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    const { address, isConnected, connect, disconnect } = useCoreumWallet();

    function truncateMiddle(str: string): string {
        if (str.length <= 8) return str;
        return `${str.slice(0, 8)}...${str.slice(-6)}`;
    }

    useEffect(() => {
        console.log(address)
    }, [address])

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} classNames={
            {
                base: "sm:backdrop-blur-none h-[74px] bg-black text-white shadow-md",
            }
        }>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <CozyLogo />
                    <p className="font-bold text-inherit text-[#25D695]">CozyCasino</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <CozyLogo />
                    <p className="font-bold text-inherit text-[#25D695]">CozyCasino</p>
                </NavbarBrand>
                {/* <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem> */}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color={isConnected ? "success" : "danger"} variant="flat" className={`border ${isConnected ? "border-success-500" : "border-red-500"} text-white`} onPress={() => !isConnected ? connect() : disconnect()}>
                        {isConnected && address ? truncateMiddle(address) : "Connect Keplr"}
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-dark-900/20 px-12 flex flex-col items-center justify-center gap-4">
                {MenuList.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} className="w-1/2 bg-dark-500 py-2 px-4 rounded-lg">
                        <Link
                            className="text-white w-full hover:text-success-500"
                            color={
                                "foreground"
                            }
                            href={item.path}
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default CustomNavbar;