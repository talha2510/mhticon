"use client";

import "@/app/ui/menu/menu.css";
import Link from "next/link";
import {roboto} from "@/app/ui/fonts";
import clsx from "clsx";

interface MenuProps{
	menu_toggle:boolean;
	menu_handler: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
}

const Menu: React.FC<MenuProps> = ({ menu_toggle, menu_handler }) => {
  return (<div className={clsx("menu",{"menu_open": menu_toggle === true,"menu_close": menu_toggle === false})} id = "menu">
		<h1 className = {roboto.className}>MHTICON</h1>
		<div className = {roboto.className}>
			<div>
				<div><Link onClick={menu_handler} href = "/">Home</Link></div>
				<div><Link onClick={menu_handler} href = "/about_us">About Us</Link></div>
				<div><Link onClick={menu_handler} href = "/our_client">Our Clients</Link></div>
				<div><Link onClick={menu_handler} href = "/services">Services</Link></div>
			</div>
			<div>
				<div><Link onClick={menu_handler} href = "contact">Apply For Job</Link></div>
				<div><Link onClick={menu_handler} href = "contact_us">Contacts Us</Link></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<hr />
		<div>
			<div><Link className = {roboto.className} href = "#">Contact Us</Link></div>
			<div><Link className = {roboto.className} href = "#">Privacy Policy</Link></div>
		</div>
		<hr />
	</div>);
}