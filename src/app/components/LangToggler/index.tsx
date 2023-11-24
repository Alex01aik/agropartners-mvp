"use client";

import { locales } from "@/middleware";
import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import "./styles.css";
import { useEffect, useState } from "react";
import ukImg from "../../../../public/uk.png";
import enImg from "../../../../public/en.png";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export type langItem = { label: string; value: string; img: any };
export const langs: langItem[] = [
  { label: "Українська", value: "uk", img: ukImg },
  { label: "English", value: "en", img: enImg },
];

const LangToggler: React.FC = () => {
  const locale = useLocale();
  const pathName = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<langItem>(langs[0]);

  useEffect(() => {
    setSelectedItem(langs.find((lang) => lang.value === locale) ?? langs[0]);
  }, [locale]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: langItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    router.push(pathName, { locale: item.value });
  };

  return selectedItem ? (
    <div id="langDropdown">
      <div
        className="selected-item"
        onClick={toggleDropdown}
        style={{
          backgroundImage: `url(${selectedItem.img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {selectedItem.label}
      </div>
      {isOpen && (
        <div
          className="dropdown-list"
          data-aos="flip-down"
          data-aos-duration="200"
        >
          {langs
            .filter((lang) => lang.value !== locale)
            .map((item) => (
              <div
                key={item.value}
                className="dropdown-item"
                onClick={() => handleItemClick(item)}
                style={{
                  backgroundImage: `url(${item.img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {item.label}
              </div>
            ))}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default LangToggler;
