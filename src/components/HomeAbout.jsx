import React from "react";
import { homeAboutStyles as s } from "../assets/dummystyles";
import HomeAboutImage from "../assets/HomeAboutImage.png";
import { featuredBooks, hastats } from "../assets/dummydata";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const HomeAbout = () => {
  return (
    <div className={s.wrapper}>
      <div className="absolute insert-0 overflow-hidden">
        <div className={s.bgBlur1}></div>
        <div className={s.bgBlur2}></div>
      </div>

      <div className={s.container}>
        <div className={s.aboutGrid}>
          <div className={s.imageWrapper}>
            <div className={s.imageGlow}></div>
            <div className={s.imageContainer}>
              <img
                src={HomeAboutImage}
                alt="about iamge"
                className={s.aboutImage}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className={s.aboutHeader}>Our Literary Journey</h2>
              <div className={s.underline}></div>
            </div>

            <p className={s.aboutText}>
              Founded with a passion for literature, bookshell has evolved into
              a sanctuary for book lovers.We curate exceptional reading
              experience, connecting readers with stories that inspire, and
              transport them to new world.
            </p>

            <div className={s.statGrid}>
              {hastats.map((stat, index) => (
                <div className={s.statCard} key={index}>
                  <div className={s.statIconWrap}>
                    <stat.icon className={s.statIcon} />
                  </div>
                  <h1 className={s.statValue}>{stat.value}</h1>
                  <p className={s.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/about" className={s.aboutButton}>
              <span>Learn More About Us</span>
              <ArrowRight className={s.arrowIcon} />
            </Link>
          </div>
        </div>
        <div className="mb-12 text-center">
          <h2 className={s.sectionHeader}>Legendary Values</h2>
          <div className={s.headerUnderline}></div>
          <p className={s.headerText}>
            Handpicked recommendations from our Literary experts that you won't
            want to miss.
          </p>
        </div>

        <div className={s.bookGrid}>
          {featuredBooks.map((book, index) => (
            <div className={s.bookCardWrap} key={index}>
              <div className={s.bookCardGlow}></div>
              <div className={s.bookCard}>
                <div className={s.bookImageWrapper}>
                  <img
                    src={book.image}
                    alt={book.title}
                    className={s.bookImage}
                  />
                </div>

                <div className={s.bookContent}>
                  <h3 className={s.bookTitle}>{book.title}</h3>

                  <p className={s.bookAuthor}>{book.author}</p>
                  <p className={s.bookDesc}>{book.description}</p>

                  <Link to="/books" className={s.discoverLink}>
                    <span>Discover</span>
                    <ArrowRight className={s.arrowSmall} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
