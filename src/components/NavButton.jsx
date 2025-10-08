import Button from "./Button";
import { FaGithub } from "react-icons/fa";
const githubLink = "https://github.com/devpolas/application-store-demo";
export default function NavButton() {
  return (
    <Button>
      <a
        className='flex flex-row w-full gap-2 justify-center items-center h-full my-auto'
        href={githubLink}
        target='_blank'
      >
        <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
          <FaGithub />
        </span>
        <span>Contribute</span>
      </a>
    </Button>
  );
}
