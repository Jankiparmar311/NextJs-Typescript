"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar as ReactstrapNavbar,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { logout, setIsAuth } from "@/app/login/slice/loginSlice";
import { AppDispatch } from "@/store";
import Cookies, { cookieKeys } from "../../../services/cookies";
import { useRouter } from "next/navigation";
import Image from "next/image";
import profileIcon from "@/assets/bg_image.jpg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const User = (Cookies?.get(cookieKeys.USER) as string) || "";

  const handleLogout = () => {
    setLoading(true);
    dispatch(logout()).then((res) => {
      if (res) {
        Cookies.clear();
        router.push("/login");
        setLoading(false);
        dispatch(setIsAuth(false));
      }
    });
  };

  return (
    <>
      <ReactstrapNavbar color="dark" dark expand="md" className="p-3">
        {/* Logo */}
        <div className="text-2xl text-white font-bold cursor-pointer">
          <Link href="/">MyApp</Link>
        </div>

        <div className="flex items-center">
          <div>
            <Image
              src={profileIcon}
              alt="profile"
              className="object-cover h-10 w-10 border rounded-full"
            />
          </div>
          {/* Profile Dropdown */}
          <Nav className="ml-auto" navbar>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggleDropdown}
              nav
              inNavbar
            >
              <DropdownToggle nav caret className="text-white">
                {User?.firstName + " " + User?.lastName}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <Link href="/profile" className="text-gray-800 no-underline">
                    Profile
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    href="/reset-password"
                    className="text-gray-800 no-underline"
                  >
                    Reset Password
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => setIsOpen(true)}
                  className="text-red-500 no-underline"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
      </ReactstrapNavbar>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Logout</ModalHeader>
        <ModalBody>Are you sure want to logout?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>{" "}
          <Button color="secondary" onClick={handleLogout} disabled={loading}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Header;
