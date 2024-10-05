import home_intro_styles from "@/app/ui/home/home.module.css";
import Link from "next/link";
import { lora , montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function Home(){
	return(<div className = {`${home_intro_styles.home_intro} ${lora.className}`}>
		<div>
		<div className = {home_intro_styles.home_intro_wrapper}>
			<div className = {home_intro_styles.home_intro_1}>
				<h1>JOB SEEKERS</h1>
				<h1>We help candidates find the perfect job.</h1>
				<h1>Head over to our job portal and get started by sending us your CV.</h1>
				<Link className = {montserrat.className} href = "contact">Start applying now</Link>
			</div>
		</div>
		<div className = {home_intro_styles.home_intro_wrapper}>
			<div className = {home_intro_styles.home_intro_2}>
				<h1>COMPANIES</h1>
				<h1>We provide staffing solutions for our clients.</h1>
				<h1>Get the best Recruitment, HR and Payrolling
				services all under one roof.</h1>
				<Link className = {montserrat.className} href = "contact">View Our Services</Link>
			</div>
		</div>
		</div>
		<div>
			<h1>Our Clients</h1>
			<hr/>
			<div>
				<Image src = "/kazema.png"
				width = {100}
				height = {0}
				alt="kazema"
				/>
				<Image src = "/KCCEC.png"
				width = {100}
				height = {0}
				alt="KCCEC"
				/>
				<Image src = "/atlantic_exports_ltd.png"
				width = {100}
				height = {0}
				alt="atlantic_exports_ltd"/>
				<Image src = "/rigid_industries.png"
				width = {100}
				height = {0}
				alt="rigid_industries"
				/>
			</div>
		</div>
	</div>);
}