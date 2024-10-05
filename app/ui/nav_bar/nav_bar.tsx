"use client"
import React from "react"
import nav_bar_styles from "@/app/ui/nav_bar/nav_bar.module.css";
import Menu from "@/app/ui/menu/menu";
import { lora } from "@/app/ui/fonts";

export default function NavBar(){
	const lines = document.getElementsByClassName(`menu_sticks`);
	const [menu_toggle, set_menu_toggle] = React.useState(false);

	function menu_handler(){
		if(menu_toggle == false){
			set_menu_toggle(true);
		(lines[0] as HTMLElement).style=`width:50%;
						height:7%;
						transform: rotate(45deg);`;
		(lines[0] as HTMLElement).style=`width:50%;
						height:7%;
						transform: rotate(-45deg);`;
		}
		else{
			set_menu_toggle(false);
		(lines[0] as HTMLElement).style=`width:50%;
						height:5%;
						transform: rotate(0deg);`;
		(lines[0] as HTMLElement).style=`width:50%;
						height:5%;
						transform: rotate(0deg);`;
		}
	}
	return(<>
		<div className = {`${nav_bar_styles.nav_bar}`}>
			<h1 className = {lora.className}>MHTICON</h1>
			<button onClick = {menu_handler}>
			<div className = "menu_sticks"></div>
			<div className = "menu_sticks"></div>
			</button>
		</div>
		<Menu menu_toggle = {menu_toggle}/>
	</>);
}