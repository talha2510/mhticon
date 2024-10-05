"use client"
import React from "react"
import nav_bar_styles from "@/app/ui/nav_bar/nav_bar.module.css";
import Menu from "@/app/ui/menu/menu";
import { lora } from "@/app/ui/fonts";
import "@/app/ui/nav_bar/nav_bar.css";
import clsx from "clsx";

export default function NavBar(){
	const [menu_toggle, set_menu_toggle] = React.useState(false);

	function menu_handler(){
		if(menu_toggle == false){
			set_menu_toggle(true);
		}
		else{
			set_menu_toggle(false);
		}
	}
	return(<>
		<div className = {`${nav_bar_styles.nav_bar}`}>
			<h1 className = {lora.className}>MHTICON</h1>
			<button onClick = {menu_handler}>
			<div className={clsx({"stick_rotate_right":menu_toggle===true, "stick_default":menu_toggle===false})}></div>
			<div className={clsx({"stick_rotate_left":menu_toggle===true, "stick_default":menu_toggle===false})}></div>
			</button>
		</div>
		<Menu menu_toggle = {menu_toggle}/>
	</>);
}