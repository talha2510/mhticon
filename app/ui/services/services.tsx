import services_style from "@/app/ui/services/services.module.css";
import Image from "next/image";
import { montserrat , gowun_batang} from "@/app/ui/fonts";
import Link from "next/link";

export default function Services(){
	return(<div className = {services_style.services}>
		<div>
		<Image
			src = "/services/services_desktop_image_1.jpg"
			width = {1918}
			height = {719}
			className = "hidden sm:block"
			alt="services desktop Image 1"
		/>
		<Image
			src = "/services/services_mobile_image_1.jpg"
			width = {360}
			height = {640}
			className = "block sm:hidden"
			alt="services mobile image 1"
		/>
		</div>
		<div>
			<h1 className = {gowun_batang.className}>Consult</h1>
			<p className = {montserrat.className}>At MHTICON, we provide expert HR consulting to enhance your workforce and streamline HR processes. Partner with us for tailored solutions that drive success.</p>
			<hr />
			<div></div>
		</div>
		<div>
			<div>
				<Image
				src = "/services/services_desktop_2.jpg"
				width = {1025}
				height = {1281}
				className = "hidden sm:block"
				alt="services desktop image 2"
				/>
				<Image
				src = "/services/services_mobile_2.jpg"
				width = {640}
				height = {360}
				className = "block sm:hidden"
				alt="services mobile image 2"
				/>
			</div>
			<div>
				<h1 className = {gowun_batang.className}>If you want to Start a Business from Scratch or to Grow Your Business, Focus on the Difference.</h1>
				<p className = {montserrat.className}>sarting a new business comes with a vast amount of steps. These are steps, which have to be not just taken but also known about in advance. As an investor and entrepreneur, many of these can be paralyzing, cause inertia, and not allow for forward movement.</p>
				<div className = {montserrat.className}>
					<div>
						<span className = "font-bold">1.Lay the foundations for successful innovation</span>
						<span className = "font-bold">2.Business Structure Development</span>
					</div>
					<div>
						<span className = "font-bold">3.Create an innovative business culture</span>
						<span className = "font-bold">4.Find the right innovation projects for your business</span>
					</div>
				</div>
				<hr />
				<Link className = {gowun_batang.className} href = "#">Lets Develop Together</Link>
				<span><Image src = "/services/phone_icon.png"
					width = {256}
					height = {256}
					className = "hidden sm:inline"
				/>+91 8591089123</span>
			</div>
		</div>
		<div>
			<div>
				<h1 className = {gowun_batang.className}>Why Business Startup Consulting</h1>
				<p className = {montserrat.className}>The most useful time to seek professional business advice and support is before starting. A business startup consulting firm works directly with the client to identify the most critical first and next steps</p>
			</div>
			<div>
				<div>
					<h1 className = {gowun_batang.className}>Market Research</h1>
					<hr/>
					<p className = {montserrat.className}>Business consultants work with clients to research in more depth the market, industry, competitors.</p>
				</div>
				<div>
					<h1 className = {gowun_batang.className}>Planning Assistance</h1>
					<hr/>
					<p className = {montserrat.className}>consultants help clients with planning. Creating a plan to create the offering such as products, services.</p>
				</div>
				<div>
					<h1 className = {gowun_batang.className}>Task Execution</h1>
					<hr/>
					<p className = {montserrat.className}>Getting it done means execution of tasks. consulting services help you execute necessary steps.</p>
				</div>
				<div>
					<h1 className = {gowun_batang.className}>Business Growth</h1>
					<hr/>
					<p className = {montserrat.className}>Consultants help business growth. Creating marketing campaigns that produce results and sales</p>
				</div>
			</div>
		</div>
		<div>
			<Image
				src = "/services/services_desktop_3.jpg"
				width = {1918}
				height = {719}
				className = "hidden sm:block"
				alt="services desktop image 3"
			/>
			<Image
				src = "/services/services_desktop_3.jpg"
				width = {640}
				height = {360}
				className = "block sm:hidden"
				alt="services mobile image 3"
			/>
		</div>
		<div>
			<h1 className = {montserrat.className}>Lets Grow Together</h1>
			<Link href = "#" className = {gowun_batang.className}>Lets Go</Link>
		</div>
	</div>);
}