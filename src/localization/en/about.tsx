import React from "react";
import { Icon } from "@iconify/react";
import { HighlightedTextIcon } from "components/molecules";
import { AboutSectionContentProps } from "components/organisms/About/types";
import reactIcon from "@iconify/icons-logos/react";
import tailwindcssIcon from "@iconify/icons-logos/tailwindcss-icon";

const Text = () => (
  <>
    I’m currently working as a freelance{" "}
    <span className="font-bold text-gray-800">UI/UX designer</span> and{" "}
    <span className="font-bold text-gray-800">Fullstack Developer</span>. I
    enjoy building web apps using
    <HighlightedTextIcon
      as="a"
      href="https://tailwindcss.com"
      className="mx-2"
      icon={<Icon icon={tailwindcssIcon} />}
    >
      TailwindCSS
    </HighlightedTextIcon>{" "}
    and{" "}
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={reactIcon} />}
    >
      React
    </HighlightedTextIcon>
    . I am also a SMK graduate at SMK MUHAMMADIYAH 1 JAKARTA
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
