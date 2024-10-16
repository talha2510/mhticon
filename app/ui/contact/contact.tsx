import contact_styles from "@/app/ui/contact/contact.module.css";
import Image from "next/image";
import {lora , montserrat , gowun_batang } from "@/app/ui/fonts"

export default function Contact(){
	return<div className = {contact_styles.contact}>
		<div>
			<Image
			src = "/contact/contact_desktop_1.jpg"
			width = {1914}
			height = {718}
			className = "hidden sm:block"
			alt = "contact desktop image 1"
			/>
			<Image
			src = "/contact/contact_mobile_1.jpg"
			width = {404}
			height = {718}
			className = "sm:hidden"
			alt = "contact mobile image 1"
			/>
		</div>
		<div>
			<h1 className = {lora.className}>Contact HR Experts</h1>
			<p className = {montserrat.className}>We offer tailored HR and manpower solutions. Reach out today to strengthen your team.</p>
			<hr></hr>
			<div></div>
		</div>
		<div>
			<div>
				<div>
					<h1 className = {lora.className}>Let’s Collaborate with Us!</h1>
					<p className = {montserrat.className}>We are always ready to help you at any time, let’s talk together.</p>
				</div>
				<div>
					<div>
						<div>
							<Image
								src = "/contact/location.png"
								width = {512}
								height = {512}
								alt = "contact location"
							/>
							<h1 className = {lora.className}>Address Business</h1>
							<p className = {montserrat.className}>Address</p>
						</div>
						<div>
							<Image
							src = "/contact/message.png"
							width = {512}
							height = {512}
							alt = "contact message"
							/>
							<h1 className = {lora.className}>Contact With Us</h1>
							<p className = {montserrat.className}>Address</p>
						</div>
					</div>
					<div>
						<div>
							<Image
								src = "/contact/email.png"
								width = {512}
								height = {512}
								alt = "contact email"
							/>
							<h1 className = {lora.className}>Email Address</h1>
							<p className = {montserrat.className}>Address</p>
						</div>
						<div>
							<Image
								src = "/contact/clock.png"
								width = {512}
								height = {512}
								alt = "contact clock"
							/>
							<h1 className = {lora.className}>Working Time</h1>
							<p className = {montserrat.className}>Address</p>
						</div>
					</div>
				</div>
			</div>
			<form className = {gowun_batang.className}>
					<h1 className={lora.className}>For Companies only</h1>
				<div>
					<input required type="text" name="company" placeholder="company e.g(mhticon)"/>
				</div>
				<div>
					<input required type = "text" name = "name" placeholder = "name/position e.g(jhon/HR)"/>
					<input required type = "email"name = "email"placeholder = "email e.g(abc@gmail.com)" />
				</div>
				<div>
					<input required type = "number" name = "phone_number" placeholder = "phone No. e.g(123----)"/>
					<select required name = "field">
						<option value = "select one">Select One</option>
						<option value = "Recuritment">Recuritment</option>
						<option value = "Training">Training</option>
						<option value = "Onboarding">Onboarding</option>
						<option value = "Performance Management">Performance Management</option>
						<option value = "WorkForce Planing">WorkForce Planing</option>
						<option value = "Payroll Management">Payroll Management</option>
						<option value = "Compensation and benefits">Compensation and benefits</option>
						<option value = "Employee Relations">Employee Relations</option>
						<option value = "OutPlacement service">OutPlacement service</option>
						<option value = "Compliance And Risk Management">Compliance And Risk Management</option>
						<option value = "HR Technology Solutions">HR Technology Solutions</option>
						<option value = "Others">Others</option>
					</select>
				</div>
				<div>
					<textarea required name = "message" placeholder="message" />
				</div>
				<button>Submit Request</button>
			</form>
		</div>
		<div>
				<h1>For Jobseekers only</h1>
			<form className = {gowun_batang.className}>
				<input required type = "text" name = "name" placeholder = "name e.g(jhon)"/>
				<input required type = "number" name = "phone_number" placeholder = "phone No. e.g(123----)"/>
				<input required type = "email" name = "email_address" placeholder = "email e.g(abc@email.com)"/>
				<textarea required name = "message" placeholder = "Message"/>
				<input required type = "submit" name = "submit" value = "Submit Request"/>
			</form>
		</div>

		<div>
			<h1>For Companies only</h1>
			<form className="sm:hidden">
				<input required type = "text" name = "name" placeholder = "name/position e.g(jhon/HR)"/>
				<input required type = "text" name = "company" placeholder = "company e.g(mhticon)"/>
				<input required type = "number" name = "phone_number" placeholder = "phone No. e.g(123----)"/>
				<input required type = "email" name = "email_address" placeholder = "email e.g(abc@email.com)"/>
				<textarea required name = "message" placeholder = "message"/>
				<input required type = "submit" name = "submit" value = "Submit Request"/>
			</form>
		</div>
	</div>
}