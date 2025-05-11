import { useScrolling } from "@/hooks/useScroll";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Import SVG icons
import PythonIcon from "@/assets/logos/Python SVG Icons.svg";
import JavaScriptIcon from "@/assets/logos/Javascript SVG Icons.svg";
import TypeScriptIcon from "@/assets/logos/Typescript SVG Icons.svg";
import CPlusPlusIcon from "@/assets/logos/C Plus Plus SVG.svg";
import CassandraIcon from "@/assets/logos/Apache Cassandra Icon.svg";
import HtmlCssIcon from "@/assets/logos/HTML CSS SVG Icon.svg";
import DartIcon from "@/assets/logos/Dart SVG Icon.svg";
import NodeJsIcon from "@/assets/logos/Node JS Icons.svg";
import ReactIcon from "@/assets/logos/React SVG Icons.svg";
import NextJsIcon from "@/assets/logos/Next.js SVG Icons.svg";
import FlutterIcon from "@/assets/logos/Flutter Icon.svg";
import ExpressIcon from "@/assets/logos/Express SVG Icons.svg";
import FlaskIcon from "@/assets/logos/Flask SVG Icon.svg";
import FastAPIIcon from "@/assets/logos/FastAPI Icon.svg";
import DjangoIcon from "@/assets/logos/Django Icon.svg";
import MongoIcon from "@/assets/logos/MongoDB Icon.svg";
import PostgresIcon from "@/assets/logos/PostgresSQL Icon.svg";
import MySQLIcon from "@/assets/logos/MySQL Icon.svg";
import RabbitMQIcon from "@/assets/logos/RabbitMQ Icon.svg";
import ElasticsearchIcon from "@/assets/logos/Elastic Search Icon.svg";
import RedisIcon from "@/assets/logos/Redis Icon.svg";
import CeleryIcon from "@/assets/logos/celery_512.svg";
import SeleniumIcon from "@/assets/logos/Selenium Icon.svg";
import GitIcon from "@/assets/logos/Git Icon.svg";
import DockerIcon from "@/assets/logos/Docker Icon.svg";
import AWIcon from "@/assets/logos/AWS Icon.svg";
import GCPIcon from "@/assets/logos/Google Cloud Icon.svg";
import GitHubActionsIcon from "@/assets/logos/GitHub Actions Icon.svg";
import KubernetesIcon from "@/assets/logos/Kubernetes Icon.svg";
import StripeIcon from "@/assets/logos/Stripe SVG Icon.svg";
import CIcon from "@/assets/logos/C Program Icon.svg";
import SQLiteIcon from "@/assets/logos/SQLite Logo.svg";
import PostmanIcon from "@/assets/logos/Postman Icon.svg";
import CypressIcon from "@/assets/logos/Cypress Icon.svg";
import CodeBuildIcon from "@/assets/logos/CodeBuild Icon.svg";
import CodeDeployIcon from "@/assets/logos/CodeDeploy Icon.svg";
import AndroidStudioIcon from "@/assets/logos/Android Studio Icon.svg";

const SkillsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { isScrolling, direction } = useScrolling();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
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
                    background: "linear-gradient(90deg, transparent, #ffffff )",
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
                className="flex justify-center items-center rounded-full relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                animate={{
                  background: "#ffffff",
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  {skill.icon ? (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={skill.diameter * 0.6}
                      height={skill.diameter * 0.6}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-black font-medium text-center px-2">
                      {skill.name}
                    </span>
                  )}
                </div>
              </motion.div>
              <div className="flex flex-col gap-2">
                <motion.div
                  className="w-[70px] h-[5px] relative overflow-hidden rounded-l-4xl"
                  animate={{
                    opacity: isScrolling ? (direction === "down" ? 1 : 0) : 0,
                    background: "linear-gradient(90deg, #ffffff, transparent)",
                  }}
                  transition={{
                    opacity: { duration: 0.2 },
                  }}
                ></motion.div>
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
  {
    name: "Python",
    diameter: 142,
    x1: 523,
    x2: -8654,
    y: 187,
    icon: PythonIcon,
  },
  {
    name: "JavaScript",
    diameter: 215,
    x1: 4765,
    x2: 1000,
    y: -76,
    icon: JavaScriptIcon,
  },
  {
    name: "TypeScript",
    diameter: 178,
    x1: 3412,
    x2: -5876,
    y: -243,
    icon: TypeScriptIcon,
  },
  { name: "C", diameter: 67, x1: 2654, x2: 500, y: -129, icon: CIcon },
  {
    name: "C++",
    diameter: 124,
    x1: 1592,
    x2: -7321,
    y: 52,
    icon: CPlusPlusIcon,
  },
  {
    name: "Cassandra",
    diameter: 263,
    x1: 8237,
    x2: -2198,
    y: -100,
    icon: CassandraIcon,
  },
  {
    name: "HTML/CSS",
    diameter: 193,
    x1: 4765,
    x2: 186,
    y: 98,
    icon: HtmlCssIcon,
  },
  { name: "Dart", diameter: 86, x1: 900, x2: -9765, y: -200, icon: DartIcon },
  {
    name: "Node.js",
    diameter: 297,
    x1: 2341,
    x2: -4563,
    y: 235,
    icon: NodeJsIcon,
  },
  { name: "React", diameter: 158, x1: 3789, x2: 1200, y: 134, icon: ReactIcon },
  {
    name: "Next.js",
    diameter: 237,
    x1: 1234,
    x2: -6789,
    y: 176,
    icon: NextJsIcon,
  },
  {
    name: "Postman",
    diameter: 115,
    x1: 5432,
    x2: -3214,
    y: -250,
    icon: PostmanIcon,
  },
  {
    name: "Flutter",
    diameter: 276,
    x1: 8912,
    x2: -7654,
    y: -200,
    icon: FlutterIcon,
  },
  {
    name: "CodeBuild",
    diameter: 174,
    x1: 3567,
    x2: -1687,
    y: 169,
    icon: CodeBuildIcon,
  },
  {
    name: "Express",
    diameter: 242,
    x1: 7123,
    x2: -8432,
    y: -213,
    icon: ExpressIcon,
  },
  { name: "Flask", diameter: 95, x1: 2675, x2: -3759, y: -87, icon: FlaskIcon },
  {
    name: "FastAPI",
    diameter: 253,
    x1: 1098,
    x2: -5678,
    y: -231,
    icon: FastAPIIcon,
  },
  {
    name: "Django",
    diameter: 138,
    x1: 4987,
    x2: -1456,
    y: 60,
    icon: DjangoIcon,
  },
  {
    name: "MongoDB",
    diameter: 206,
    x1: 9456,
    x2: -9123,
    y: -167,
    icon: MongoIcon,
  },
  {
    name: "PostgreSQL",
    diameter: 174,
    x1: 3214,
    x2: -4789,
    y: 247,
    icon: PostgresIcon,
  },
  { name: "MySQL", diameter: 281, x1: 7890, x2: 10, y: -123, icon: MySQLIcon },
  {
    name: "SQLite",
    diameter: 154,
    x1: 2543,
    x2: -6123,
    y: 66,
    icon: SQLiteIcon,
  },
  {
    name: "RabbitMQ",
    diameter: 225,
    x1: 6678,
    x2: -3478,
    y: -183,
    icon: RabbitMQIcon,
  },
  {
    name: "Elasticsearch",
    diameter: 102,
    x1: 800,
    x2: -8765,
    y: 125,
    icon: ElasticsearchIcon,
  },
  {
    name: "Redis",
    diameter: 150,
    x1: 3789,
    x2: -2345,
    y: -59,
    icon: RedisIcon,
  },
  {
    name: "Celery",
    diameter: 169,
    x1: 8543,
    x2: 500,
    y: 250,
    icon: CeleryIcon,
  },
  {
    name: "CodeDeploy",
    diameter: 234,
    x1: 1432,
    x2: -4321,
    y: -147,
    icon: CodeDeployIcon,
  },
  {
    name: "Selenium",
    diameter: 189,
    x1: 6345,
    x2: -987,
    y: 143,
    icon: SeleniumIcon,
  },
  { name: "Git", diameter: 118, x1: 6234, x2: 800, y: 151, icon: GitIcon },
  {
    name: "Cypress",
    diameter: 273,
    x1: 87,
    x2: -6543,
    y: -213,
    icon: CypressIcon,
  },
  {
    name: "Docker",
    diameter: 196,
    x1: 5123,
    x2: -3897,
    y: 156,
    icon: DockerIcon,
  },
  { name: "AWS", diameter: 82, x1: 1065, x2: -9432, y: -104, icon: AWIcon },
  { name: "GCP", diameter: 249, x1: 2987, x2: -2678, y: 219, icon: GCPIcon },
  {
    name: "GitHub Actions",
    diameter: 127,
    x1: 6543,
    x2: -8090,
    y: -172,
    icon: GitHubActionsIcon,
  },
  {
    name: "Kubernetes",
    diameter: 201,
    x1: 1765,
    x2: -5432,
    y: 113,
    icon: KubernetesIcon,
  },
  {
    name: "Stripe",
    diameter: 163,
    x1: 4321,
    x2: -876,
    y: -242,
    icon: StripeIcon,
  },
  {
    name: "MobileDev",
    diameter: 212,
    x1: 7456,
    x2: -3267,
    y: 240,
    icon: AndroidStudioIcon,
  },
];
