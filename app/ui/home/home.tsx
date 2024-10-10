import home_intro_styles from "@/app/ui/home/home.module.css";
import Link from "next/link";
import { lora , montserrat , gowun_batang} from "@/app/ui/fonts";
import Image from "next/image";

export default function Home(){
	return(<div className = {`${home_intro_styles.home_intro} ${lora.className}`}>
		<div>
		<div className = {home_intro_styles.home_intro_wrapper}>
			<div className = {home_intro_styles.home_intro_1}>
				<h1>JOB SEEKERS</h1>
				<h1>We help candidates find the perfect job.</h1>
				<h1>Head over to our job portal and get started by sending us your CV.</h1>
				<Link className = {montserrat.className} href = "/contact">Start applying now</Link>
			</div>
		</div>
		<div className = {home_intro_styles.home_intro_wrapper}>
			<div className = {home_intro_styles.home_intro_2}>
				<h1>COMPANIES</h1>
				<h1>We provide staffing solutions for our clients.</h1>
				<h1>Get the best Recruitment, HR and Payrolling
				services all under one roof.</h1>
				<Link className = {montserrat.className} href = "/contact">View Our Services</Link>
			</div>
		</div>
		</div>
		
		<div>
			<div className={gowun_batang.className}>
				<p className={montserrat.className}>MHTICON is one of the most preferred staffing and HR solutions partners for many in the region. We have proven our services with our industry leading NPS (Net Promotor Score) of 74.7% in 2022. We hire and manage associates with world-class services to employers as well as their employees.</p>
				<p className={montserrat.className}>Attracting and retaining employees is vital for all businesses. While you continue to scale your business, MHTICON will ensure you have the right talent to deliver that success.</p>
				<p className={montserrat.className}>Our 40+ dedicated team of recruiters use their experience, tools, and resources, including in-depth market mapping and constantly updated market intelligence, to identify and recruit candidates for your business needs.</p>
				<p className={montserrat.className}>With a wealth of proven successes behind us, we will deliver the best people for the job - no matter the seniority.</p>
			</div>
			<div className="hidden sm:inline">
				<Image
				src="/home/home_image_1.jpg"
				width={500}
				height={1000}
				alt="home intro image"
				/>
			</div>
		</div>

		<div>
			<div>
				<h1 className={lora.className}>Benefits of Outsourcing</h1>
			</div>
			<div>
				<div>
					<Image
					src="/home/calculator.svg"
					width={70}
					height={70}
					alt="calculator"
					/>
					<h1>Reduced cost</h1>
				</div>
				<div>
					<Image
					src="/home/group.svg"
					width={70}
					height={70}
					alt="calculator"
					/>
					<h1>Fast hiring process</h1>
				</div>
				<div>
					<Image
					src="/home/degree.svg"
					width={70}
					height={70}
					alt="calculator"
					/>
					<h1>Better talent quality</h1>
				</div>
				<div>
					<Image
					src="/home/analytics.svg"
					width={70}
					height={70}
					alt="/home/calculator.svg"
					/>
					<h1>Analytics & reporting</h1>
				</div>
				<div>
					<Image
					src="/home/quality.svg"
					width={70}
					height={70}
					alt="calculator"
					/>
					<h1>100% compliance</h1>
				</div>
			</div>
		</div>

		<div>
			<div>
				<h1>OUR STRENGTH</h1>
			</div>
			<div>
				<div>
					<p>&nbsp;</p>
					<h1>15+ years</h1>
					<p>Experience</p>
				</div>
				<div>
					<p>&nbsp;</p>
					<h1>5500+ </h1>
					<p>Outsourced Associates</p>
				</div>
				<div>
					<p>Hired</p>
					<h1>78+</h1>
					<p>Nationalities</p>
				</div>
				<div>
					<p>Operations in</p>
					<h1>68+</h1>
					<p>Countries</p>
				</div>
				<div>
					<p>served</p>
					<h1>500+</h1>
					<p>Clients</p>
				</div>
			</div>
		</div>

		<div>
			<div>
				<h1>OUR Services</h1>
			</div>
			<div>
				<div>
					<h1>CONTRACT STAFFING</h1>
					<p>Short & long-term contract staffing solutions On our visa, payroll management & PRO outsourcing</p>
				</div>
				<div>
					<h1>PERMANENT RECRUITMENT</h1>
					<p>Hire local & global talent effectively</p>
				</div>
				<div>
					<h1>HR OUTSOURCING & MANAGEMENT</h1>
					<p>Leave it to experts all the HR policies, onboarding, & payroll</p>
				</div>
			</div>
		</div>

		<div>
			<div>
				<h1 className={montserrat.className}>WHY TASC?</h1>
				<ul className={lora.className}>
					<li>Get the right candidate resumes in 48 hours</li>
					<li>An exclusive database of 900,000+ candidates</li>
					<li>AI-enabled support technology</li>
					<li>Offices in Dubai & Abu Dhabi</li>
				</ul>
			</div>
			<div>
				<h1 className={montserrat.className}>Work With The Top Recruitment Agency In UAE!</h1>
			</div>
		</div>
	</div>);
}