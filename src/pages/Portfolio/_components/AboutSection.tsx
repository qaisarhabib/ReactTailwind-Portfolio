import type { Experience } from "@/types/Experience";
import { useEffect, useState } from "react";

interface AboutSectionProps {
	totalExperience: Experience;
}

const AboutSection = ({ totalExperience }: AboutSectionProps) => {
	const [repoCount, setRepoCount] = useState<number>(0);

	useEffect(() => {
		const fetchRepoCount = async () => {
			try {
				const res = await fetch("https://api.github.com/users/qaisarhabib");
				const data = await res.json();
				setRepoCount(data?.public_repos || 0);
			} catch (error) {
				console.log("Error fetching repo count:", error);
			}
		};

		fetchRepoCount();
	}, []);

	return (
		<section id="about" className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">About Me</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold text-gray-800">MERN Stack Developer & Frontend Specialist</h3>

						<p className="text-gray-600 leading-relaxed">
							I’m a Full Stack MERN Developer with{" "}
							<strong className="text-gray-800">
								{`${totalExperience.years} years${
									totalExperience.months > 0 ? `, ${totalExperience.months} months` : ""
								}`}
							</strong>{" "}
							of experience building responsive and user-friendly web applications. I specialize in creating modern
							frontend experiences and developing secure, scalable backend APIs.
						</p>

						<p className="text-gray-600 leading-relaxed">
							I also have hands-on experience with DevOps tools like{" "}
							<strong className="text-gray-800">Docker, CI/CD pipelines, and Kubernetes</strong>, focusing on clean code,
							performance, and scalability.
						</p>

						<div className="grid grid-cols-2 gap-4 pt-4">
							<div className="text-center p-4 bg-gray-50 rounded-lg">
								<div className="text-3xl font-bold text-blue-600">
									{`${totalExperience.years}${totalExperience.months > 0 ? "+" : ""}`}
								</div>
								<div className="text-gray-600">Years Experience</div>
							</div>

							<div className="text-center p-4 bg-gray-50 rounded-lg">
								<div className="text-3xl font-bold text-purple-600">{repoCount > 0 ? `${repoCount}+` : "Loading..."}</div>
								<div className="text-gray-600">Projects</div>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<div className="bg-gray-50 p-8 rounded-xl">
							<h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
								<i className="fas fa-graduation-cap text-blue-500"></i> Education
							</h4>

							<div className="space-y-4">
								<div className="border-l-4 border-blue-500 pl-4">
									<h5 className="font-semibold">Bachelor of Software Engineering</h5>
									<p className="text-gray-600">Minhaj University Lahore</p>
									<p className="text-sm text-gray-500">2017 - 2021</p>
									<p className="text-xs text-gray-500 mt-1">
										OOP, Data Structures & Algorithms, Software Engineering, Web Dev, OS, AI
									</p>
								</div>

								<div className="border-l-4 border-purple-500 pl-4">
									<h5 className="font-semibold">Intermediate</h5>
									<p className="text-gray-600">Islamia College Karachi</p>
									<p className="text-sm text-gray-500">2015 - 2017</p>
								</div>
							</div>
						</div>

						<div className="bg-gray-50 p-8 rounded-xl">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<i className="fas fa-certificate text-purple-500"></i> Certificates & Awards
							</h4>

							<ul className="space-y-3 text-sm text-gray-700">
								<li className="flex items-start gap-2">
									<i className="fas fa-award text-yellow-500 mt-1"></i>
									<div>
										<strong className="text-gray-800">Full-Stack Web Development Bootcamp</strong>
										<p className="text-gray-500 text-xs">Udemy Certificate of Completion — 2022</p>
									</div>
								</li>
								<li className="flex items-start gap-2">
									<i className="fas fa-award text-yellow-500 mt-1"></i>
									<div>
										<strong className="text-gray-800">Mastering Data Structures & Algorithms C/C++</strong>
										<p className="text-gray-500 text-xs">Udemy Certificate of Completion — 2021</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
