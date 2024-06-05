import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "../../hooks/use-translations";
import { Container } from "./container";
import { Blur } from "./hero";
import Image from "next/image";




const Chart = dynamic(() => import("../chart").then((mod) => mod.Chart));
const Showdown = dynamic(() =>
  import("../extra-content").then((mod) => mod.Showdown)
);

export function About() {
  const { about } = useTranslations();
  return (
    <>
      <div className="relative">
        <Container>
          <h3 className="text-2xl text-center font-bold text-zinc-900 dark:text-white md:text-3xl lg:text-4xl">
            {about.whatsInMillionJS}
          </h3>
          <p className="mt-3 text-center text-zinc-600 dark:text-zinc-300 md:text-md lg:text-lg">
            {about.toolsToMakeReactFaster}
          </p>
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title={about.blockVirtualDom}
              icon={<BoxIcon />}
              description={
                <>
                  {about.millionIntroduces}{" "}
                  <Link href="/" className="underline nx-text-primary-600">
                    {about.blockVirtualDomQuote}
                  </Link>{" "}
                  {about.blockVirtualDomDescription}
                </>
              }
            />
            <Card
              title={about.superchargedCompiler}
              icon={<LightBulbIcon />}
              description={
                <>
                  {about.millionUses}{" "}
                  <Link href="" className="underline nx-text-primary-600">
                    {about.customCompiler}
                  </Link>{" "}
                  {about.automaticallyOptimizes}
                </>
              }
            />
            <Card
              title={about.automaticMode}
              icon={<ThumbsUpIcon />}
              description={
                <>
                  <Link href="/" className="underline nx-text-primary-600">
                    {about.dropIn}
                  </Link>{" "}
                  {about.tiredOf} {about.makeReactFaster}
                </>
              }
            />
          </div>
        </Container>
        <Blur />
      </div>
    </>
  );
}

function Graphic() {
  const [showShowdown, setShowShowdown] = useState(false);
  const { about } = useTranslations();

  const handleClick = () => {
    setShowShowdown(!showShowdown);
  };

  return (
    <GraphicWrapper onClick={handleClick}>
      {!showShowdown ? (
        <div className="bg-white p-4 pb-6 dark:bg-zinc-900 rounded-lg">
          <div className="w-full">
            <p className="font-bold text-lg">{about.jsBenchmark}</p>
            <p className="text-md mt-1 text-zinc-700 dark:text-zinc-400">
              {about.higherBetter}
            </p>
            <Chart />
          </div>
          <div className="text-sm text-zinc-400">
            {about.basedOn}{" "}
            <a
              href="https://krausest.github.io/js-framework-benchmark/2023/table_chrome_112.0.5615.49.html"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 underline decoration-from-font [text-underline-position:from-font]">
              {about.benchmarkData}
            </a>{" "}
            {about.chromeVersion}
          </div>
        </div>
      ) : (
        <Showdown initStart amount={500} />
      )}
    </GraphicWrapper>
  );
}

function GraphicWrapper({
  children,
  onClick,
}: {
  children: JSX.Element;
  onClick: () => void;
}) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={10}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt shadow-lg w-full rounded-lg text-center bg-gradient-to-b from-zinc-200 to-white dark:from-zinc-700 dark:via-zinc-800 dark:to-darker p-px">
      <div className="absolute z-50 flex p-2 justify-end w-full">
        <button onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute hover:animate-spin">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-ping text-green-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      {children}
    </Tilt>
  );
}

function Card({ title, description, icon }) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-200 to-white p-px dark:from-zinc-700 dark:via-zinc-800 dark:to-darker">
      <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
        {icon}
        <div>
          <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {title}
          </h4>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </div>
    </Tilt>
  );
}

function ThumbsUpIcon() {
  return (
<Image className="circle cir-plus"
  src={`/img-invest-cate/pepe-admission-img.png`}
  alt=""
  height={520}
  width={1200}
/>
  );
}

function LightBulbIcon() {
  return (
    <Image className="circle cir-plus"
    src={`/img-invest-cate/pepe-solution-img.png`}
    alt=""
    height={520}
    width={1200}
  />
    
  );
}

function BoxIcon() {
  return (
    <Image className="circle cir-plus"
    src={`/img-invest-cate/pepe-crew-img.png`}
    alt=""
    height={520}
    width={1200}
  />
  );
}

function LightningIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-green-400 m-auto hover:animate-spin">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 m-auto text-green-600 dark:text-green-400 hover:animate-spin">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
