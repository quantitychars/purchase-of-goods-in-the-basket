import React from "react";
import "./Footer.scss";

const sections = [
  {
    title: "Need Help",
    links: ["Contact us", "Track order", "Returns & refunds", "FAQ", "Career"],
  },
  {
    title: "Company",
    links: ["About us", "Euphoria Blog", "Collaboration", "Media"],
  },
  {
    title: "More Info",
    links: [
      "Terms & conditions",
      "Privacy policy",
      "Shipping policy",
      "Sitemap",
    ],
  },
  {
    title: "Location",
    links: [
      "Euphoria Head Office",
      "Jl. Rawa Kuning No 21, Jakarta",
      "support@euphoria.com",
      "+62 812-7313-4321",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* текстовые колонки */}
        {sections.map((col) => (
          <div key={col.title} className="footer__col">
            <h3 className="footer__title">{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#!" className="footer__link">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* линия копирайта */}
      <div className="footer__copyright">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
