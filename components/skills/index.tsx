import { useScrolling } from "@/hooks/useScroll";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const SkillsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { isScrolling, direction } = useScrolling();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-neutral-900">
        <div className="h-full flex flex-col justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex gap-[10px] justify-end absolute items-center align-middle"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [skill.y, skill.y]),
                x: useTransform(scrollYProgress, [0, 1], [skill.x1, skill.x2]),
              }}
            >
              <div className="flex flex-col gap-2 justify-end items-end">
                <motion.div
                  className="w-[70px] h-[5px] relative overflow-hidden rounded-r-4xl"
                  animate={{
                    opacity: isScrolling ? (direction === "up" ? 1 : 0) : 0,
                    background: "linear-gradient(90deg, transparent, #ff6b6b )",
                  }}
                  transition={{
                    opacity: { duration: 0.2 },
                  }}
                ></motion.div>
              </div>
              <motion.div
                style={{
                  width: `${skill.diameter}px`,
                  height: `${skill.diameter}px`,
                }}
                className="flex justify-center items-center rounded-full relative overflow-hidden"
                animate={{
                  background: "#ff6b6b",
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <span className="relative z-10 text-white font-medium">
                  {skill.name}
                </span>
              </motion.div>
              <div className="flex flex-col gap-2">
                <motion.div
                  className="w-[70px] h-[5px] relative overflow-hidden rounded-l-4xl"
                  animate={{
                    opacity: isScrolling ? (direction === "down" ? 1 : 0) : 0,
                    background: "linear-gradient(90deg, #ff6b6b, transparent)",
                  }}
                  transition={{
                    opacity: { duration: 0.2 },
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

const skills = [
  { name: "Python", diameter: 142, x1: 523, x2: -8654, y: 187, icon: "python" },
  { name: "JavaScript", diameter: 215, x1: 4765, x2: 1000, y: -76, icon: "js" },
  {
    name: "TypeScript",
    diameter: 178,
    x1: 3412,
    x2: -5876,
    y: -243,
    icon: "ts",
  },
  { name: "C", diameter: 67, x1: 2654, x2: 500, y: -129, icon: "c" },
  { name: "C++", diameter: 124, x1: 1592, x2: -7321, y: 52, icon: "cplusplus" },
  {
    name: "Cassandra",
    diameter: 263,
    x1: 8237,
    x2: -2198,
    y: -100,
    icon: "sql",
  },
  {
    name: "HTML/CSS",
    diameter: 193,
    x1: 4765,
    x2: 186,
    y: 98,
    icon: "htmlcss",
  },
  { name: "Dart", diameter: 86, x1: 900, x2: -9765, y: -200, icon: "dart" },
  {
    name: "Node.js",
    diameter: 297,
    x1: 2341,
    x2: -4563,
    y: 235,
    icon: "nodejs",
  },
  { name: "React", diameter: 158, x1: 3789, x2: 1200, y: 134, icon: "react" },
  {
    name: "Next.js",
    diameter: 237,
    x1: 1234,
    x2: -6789,
    y: 176,
    icon: "nextjs",
  },
  {
    name: "React Native",
    diameter: 115,
    x1: 5432,
    x2: -3214,
    y: -250,
    icon: "reactnative",
  },
  {
    name: "Flutter",
    diameter: 276,
    x1: 8912,
    x2: -7654,
    y: -200,
    icon: "flutter",
  },
  {
    name: "LlamaIndex",
    diameter: 174,
    x1: 3567,
    x2: -1687,
    y: 169,
    icon: "llamaindex",
  },
  {
    name: "Express",
    diameter: 242,
    x1: 7123,
    x2: -8432,
    y: -213,
    icon: "express",
  },
  { name: "Flask", diameter: 95, x1: 2675, x2: -3759, y: -87, icon: "flask" },
  {
    name: "Selenium",
    diameter: 189,
    x1: 6345,
    x2: -987,
    y: 143,
    icon: "selenium",
  },
  {
    name: "FastAPI",
    diameter: 253,
    x1: 1098,
    x2: -5678,
    y: -231,
    icon: "fastapi",
  },
  { name: "Django", diameter: 138, x1: 4987, x2: -1456, y: 60, icon: "django" },
  {
    name: "MongoDB",
    diameter: 206,
    x1: 9456,
    x2: -9123,
    y: -167,
    icon: "mongodb",
  },
  {
    name: "PostgreSQL",
    diameter: 174,
    x1: 3214,
    x2: -4789,
    y: 247,
    icon: "postgresql",
  },
  { name: "MySQL", diameter: 281, x1: 7890, x2: 10, y: -123, icon: "mysql" },
  { name: "SQLite", diameter: 154, x1: 2543, x2: -6123, y: 66, icon: "sqlite" },
  {
    name: "RabbitMQ",
    diameter: 225,
    x1: 6678,
    x2: -3478,
    y: -183,
    icon: "rabbitmq",
  },
  {
    name: "Elasticsearch",
    diameter: 102,
    x1: 800,
    x2: -8765,
    y: 125,
    icon: "elasticsearch",
  },
  { name: "Redis", diameter: 150, x1: 3789, x2: -2345, y: -59, icon: "redis" },
  { name: "Celery", diameter: 169, x1: 8543, x2: 500, y: 250, icon: "celery" },
  {
    name: "LangChain",
    diameter: 234,
    x1: 1432,
    x2: -4321,
    y: -147,
    icon: "langchain",
  },
  { name: "Git", diameter: 118, x1: 6234, x2: 800, y: 151, icon: "git" },
  { name: "CI/CD", diameter: 273, x1: 87, x2: -6543, y: -213, icon: "cicd" },
  {
    name: "Docker",
    diameter: 196,
    x1: 5123,
    x2: -3897,
    y: 156,
    icon: "docker",
  },
  { name: "AWS", diameter: 82, x1: 1065, x2: -9432, y: -104, icon: "aws" },
  { name: "GCP", diameter: 249, x1: 2987, x2: -2678, y: 219, icon: "gcp" },
  {
    name: "GitHub Actions",
    diameter: 127,
    x1: 6543,
    x2: -8090,
    y: -172,
    icon: "githubactions",
  },
  {
    name: "Kubernetes",
    diameter: 201,
    x1: 1765,
    x2: -5432,
    y: 113,
    icon: "kubernetes",
  },
  {
    name: "Stripe",
    diameter: 163,
    x1: 4321,
    x2: -876,
    y: -242,
    icon: "stripe",
  },
  {
    name: "LangGraph",
    diameter: 212,
    x1: 7456,
    x2: -3267,
    y: 240,
    icon: "langgraph",
  },
];
