import { useState } from "react";
import cx from "classnames";

interface HeaderProps {
  pathname: string;
}

export default function Header({ pathname }: HeaderProps) {
  const [show, setShow] = useState(false);

  return (
    <header className="lg:pt-10">
      <nav className="flex justify-between pl-6 md:pl-10 py-8 mx-auto bg-transparent items-center h-24 lg:pl-[55px]">
        <div className="rounded-full bg-white ">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <div className="md:backdrop-brightness-50 md:backdrop-blur-[81.5px] h-[96px] box-border">
          <div className="lg:relative hidden md:mt-7 space-x-8 lg:space-x-12 lg:ml-[123px] lg:mr-[160px] md:flex text-neutral px-6 uppercase text-sm lg:text-base lg:tracking-wider font-sans-condensed">
            <div className="hidden lg:block lg:absolute lg:-left-[400px] lg:w-[25vw] lg:border-b-2 lg:border-neutral/20 lg:top-4" />
            <div
              className={cx(
                "h-full flex items-center md:pb-9 hover:border-b-4",
                {
                  "border-b-4": pathname === "/",
                }
              )}
            >
              <a href="/">Home</a>
            </div>
            <div
              className={cx(
                "h-full flex items-center md:pb-9 hover:border-b-4",
                {
                  "border-b-4": pathname === "/destination/",
                }
              )}
            >
              <a href="/destination">Destination</a>
            </div>
            <div
              className={cx(
                "h-full flex items-center md:pb-9 hover:border-b-4",
                {
                  "border-b-4": pathname === "/crew/",
                }
              )}
            >
              <a href="/crew">Crew</a>
            </div>
            <div
              className={cx(
                "h-full flex items-center md:pb-9 hover:border-b-4",
                {
                  "border-b-4": pathname === "/technology/",
                }
              )}
            >
              <a href="/technology">Technology</a>
            </div>
          </div>
        </div>
        <div
          className="flex lg:hidden flex-col absolute top-0 right-0 backdrop-brightness-75 backdrop-blur-2xl"
          onClick={() => {
            setShow((old) => !old);
          }}
        >
          <div className="md:hidden flex justify-end mb-16">
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                className="relative right-8 top-10"
              >
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="21"
                className="relative right-8 top-10"
              >
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
              </svg>
            )}
          </div>
          <div
            className={`${
              show ? "flex" : "hidden"
            } flex-col text-neutral space-y-8 pl-8 w-[254px] h-screen z-10`}
          >
            <a href="/" className="flex font-normal uppercase tracking-wider">
              <span className="font-bold text-base text-white mr-[10px]">
                00
              </span>{" "}
              Home
            </a>
            <a
              href="/destination"
              className="flex font-normal uppercase tracking-wider"
            >
              <span className="font-bold text-base text-white mr-[10px]">
                01
              </span>{" "}
              Destination
            </a>
            <a
              href="/crew"
              className="flex font-normal uppercase tracking-wider"
            >
              <span className="font-bold text-base text-white mr-[10px]">
                02
              </span>{" "}
              Crew
            </a>
            <a
              href="/technology"
              className="flex font-normal uppercase tracking-wider"
            >
              <span className="font-bold text-base text-white mr-[10px]">
                03
              </span>{" "}
              Technology
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
