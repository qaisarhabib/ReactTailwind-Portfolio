import { useEffect, useState } from "react";

const SkillsSection = () => {
	const [skillsVisible, setSkillsVisible] = useState(false);

	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -100px 0px",
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.target.id === "skills") {
					setSkillsVisible(true);
				}
			});
		}, observerOptions);

		const skillsSection = document.getElementById("skills");
		if (skillsSection) {
			observer.observe(skillsSection);
		}

		return () => {
			if (skillsSection) {
				observer.unobserve(skillsSection);
			}
		};
	}, []);

	return (
		<section id="skills" className="py-20 bg-gray-50">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{/* Frontend Skills */}
					<div className="bg-white p-6 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
						<div className="text-center mb-6">
							<i className="fas fa-code text-4xl text-blue-500 mb-3"></i>
							<h3 className="text-xl font-semibold">Frontend</h3>
						</div>

						<div className="space-y-3">
							{[
								{ name: "React / Next.js", level: 95 },
								{ name: "TypeScript", level: 90 },
								{ name: "React Query", level: 88 },
								{ name: "Redux / Zustand", level: 85 },
								{ name: "Tailwind CSS", level: 92 },
							].map((skill, index) => (
								<div key={skill.name}>
									<div className="flex justify-between mb-1">
										<span className="text-xs font-medium">{skill.name}</span>
										<span className="text-xs text-gray-500">{skill.level}%</span>
									</div>

									<div className="w-full bg-gray-200 rounded-full h-1.5">
										<div
											className={`h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 skill-bar-animate ${
												skillsVisible ? "" : "w-0"
											}`}
											style={{
												width: skillsVisible ? `${skill.level}%` : "0%",
												transitionDelay: `${index * 150}ms`,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Backend & Databases */}
					<div className="bg-white p-6 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
						<div className="text-center mb-6">
							<i className="fas fa-server text-4xl text-green-500 mb-3"></i>
							<h3 className="text-xl font-semibold">Backend & DBs</h3>
						</div>

						<div className="space-y-3">
							{[
								{ name: "Node.js / Express", level: 90 },
								{ name: "NestJS", level: 85 },
								{ name: "REST / GraphQL / SSE", level: 88 },
								{ name: "MongoDB", level: 85 },
								{ name: "PostgreSQL / Prisma", level: 82 },
							].map((skill, index) => (
								<div key={skill.name}>
									<div className="flex justify-between mb-1">
										<span className="text-xs font-medium">{skill.name}</span>
										<span className="text-xs text-gray-500">{skill.level}%</span>
									</div>

									<div className="w-full bg-gray-200 rounded-full h-1.5">
										<div
											className={`h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 skill-bar-animate ${
												skillsVisible ? "" : "w-0"
											}`}
											style={{
												width: skillsVisible ? `${skill.level}%` : "0%",
												transitionDelay: `${index * 150}ms`,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* AI & LLM Workflows */}
					<div className="bg-white p-6 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
						<div className="text-center mb-6">
							<i className="fas fa-robot text-4xl text-indigo-500 mb-3"></i>
							<h3 className="text-xl font-semibold">AI & LLM</h3>
						</div>

						<div className="space-y-3">
							{[
								{ name: "LLM APIs & Prompts", level: 90 },
								{ name: "RAG & Vector Search", level: 85 },
								{ name: "AI Agents & Tooling", level: 88 },
								{ name: "Ollama Local LLMs", level: 85 },
								{ name: "AI Workflows", level: 88 },
							].map((skill, index) => (
								<div key={skill.name}>
									<div className="flex justify-between mb-1">
										<span className="text-xs font-medium">{skill.name}</span>
										<span className="text-xs text-gray-500">{skill.level}%</span>
									</div>

									<div className="w-full bg-gray-200 rounded-full h-1.5">
										<div
											className={`h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 skill-bar-animate ${
												skillsVisible ? "" : "w-0"
											}`}
											style={{
												width: skillsVisible ? `${skill.level}%` : "0%",
												transitionDelay: `${index * 150}ms`,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* DevOps & Cloud */}
					<div className="bg-white p-6 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
						<div className="text-center mb-6">
							<i className="fas fa-cloud text-4xl text-purple-500 mb-3"></i>
							<h3 className="text-xl font-semibold">DevOps & Cloud</h3>
						</div>

						<div className="space-y-3">
							{[
								{ name: "Docker", level: 82 },
								{ name: "Kubernetes (K8s)", level: 70 },
								{ name: "CI/CD & GitHub Actions", level: 80 },
								{ name: "AWS & Cloud Services", level: 75 },
								{ name: "Git / Linux Tools", level: 90 },
							].map((skill, index) => (
								<div key={skill.name}>
									<div className="flex justify-between mb-1">
										<span className="text-xs font-medium">{skill.name}</span>
										<span className="text-xs text-gray-500">{skill.level}%</span>
									</div>

									<div className="w-full bg-gray-200 rounded-full h-1.5">
										<div
											className={`h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 skill-bar-animate ${
												skillsVisible ? "" : "w-0"
											}`}
											style={{
												width: skillsVisible ? `${skill.level}%` : "0%",
												transitionDelay: `${index * 150}ms`,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
