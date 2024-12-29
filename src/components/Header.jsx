import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full shadow-sm border-b border-gray-200 bg-[#ffffff]">
      <Navbar isBordered variant="floating" className="w-full md:p-0">
        <div className="flex w-full items-center justify-between flex-wrap">
          {/* Left Section: Logo / Title */}
          <NavbarContent>
            <NavbarBrand className="flex items-center space-x-4">
              <img
                src={logo}
                alt="SDK Hub Logo"
                className="object-contain h-4"
              />
              <p className="text-lg md:text-xl text-gray-900 leading-none">
                SDK 下載
              </p>
            </NavbarBrand>
          </NavbarContent>

          {/* Mobile: Hamburger + Dropdown */}
          <NavbarContent>
            <div className="block md:hidden ml-auto">
              <Dropdown
                isOpen={menuOpen}
                onOpenChange={setMenuOpen}
                placement="bottom-right"
              >
                <DropdownTrigger>
                  <Button
                    auto
                    flat
                    disableAutoFocus
                    disableFocusAnimation
                    disableRipple
                    aria-label="Toggle Menu"
                    onPress={toggleMenu}
                    className="block md:hidden ml-auto w-10 h-10 p-0 
                               rounded-lg bg-[#ffffff]/15 hover:bg-[#ffffff]/15 focus:bg-[#ffffff]/15 
                               focus:ring-0 focus:border-none focus:outline-none transition-all flex
                               focus:outline-none justify-end"
                  >
                    {/* Enhanced Hamburger Icon */}
                    <div className="relative w-6 h-6">
                      {/* Top line */}
                      <span
                        className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                          menuOpen ? "rotate-45 top-[12px]" : "top-0"
                        }`}
                      />
                      {/* Middle line */}
                      <span
                        className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                          menuOpen ? "opacity-0" : "top-[12px]"
                        }`}
                      />
                      {/* Bottom line */}
                      <span
                        className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                          menuOpen ? "-rotate-45 bottom-[12px]" : "bottom-0"
                        }`}
                      />
                    </div>
                  </Button>
                </DropdownTrigger>

                <DropdownMenu aria-label="Mobile Navigation" variant="shadow">
                  <DropdownItem key="ios" textValue="iOS">
                    <Link href="#" className="text-gray-600 hover:text-[#29c3e5]">
                      iOS
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="tvos" textValue="tvOS">
                    <Link href="#" className="text-gray-600 hover:text-[#29c3e5]">
                      tvOS
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="android" textValue="Android">
                    <Link href="#" className="text-gray-600 hover:text-[#29c3e5]">
                      Android
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="changelog" textValue="Update">
                    <Link href="#" className="text-gray-600 hover:text-[#29c3e5]">
                      更新日誌
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </NavbarContent>

          {/* Desktop: Nav Links (hidden on small screens) */}
          <NavbarContent
            className="
              hidden md:flex
              flex-col md:flex-row
              items-center space-x-0 md:space-x-8
              space-y-4 md:space-y-0
              flex-grow justify-end 
            "
          >
            <NavbarItem>
              <Link
                href="#"
                className="text-base text-gray-600 hover:text-[#29c3e5]"
              >
                iOS
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#"
                className="text-base text-gray-600 hover:text-[#29c3e5]"
              >
                tvOS
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#"
                className="text-base text-gray-600 hover:text-[#29c3e5]"
              >
                Android
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#"
                className="text-base text-gray-600 hover:text-[#29c3e5]"
              >
                更新日誌
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;