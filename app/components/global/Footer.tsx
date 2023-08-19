import { footer } from "@/app/data/global";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="flex items-center"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image src={item.icon} alt="" width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
          <div className="space-y-2 mt-4 w-full flex flex-col items-center sm:items-start">
            {footer.support.buymeacoffee !== "" && (
              <div>
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <Image
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                    src="/static/misc/buy-me-a-coffee.svg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </a>
              </div>
            )}
            {footer.support.paypal !== "" && (
              <div>
                <a
                  href={`https://paypal.me/${footer.support.paypal}`}
                  target="_blank"
                >
                  <Image
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                    src="/static/misc/paypal.svg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </a>
              </div>
            )}
            <p className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <Image
                  title="React"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt=""
                  width="26"
                  height="26"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <Image
                  title="NextJS"
                  className="invert"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  alt=""
                  width="40"
                  height="40"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <Image
                  title="TailwindCSS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt=""
                  width="26"
                  height="26"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs">
            Made by{" "}
            <a
              href="mailto:yourdev@derek.haus"
              className="text-fun-gray-light font-medium"
            >
              Derek Haus
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;