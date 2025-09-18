import React, { useRef } from "react";
import { ourBestSellersStyles as styles } from "../assets/dummystyles";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import { bgColors, obsbooks } from "../assets/dummydata";
import { useCart } from "../CartContext/CartContext";

const OurBestSellers = () => {
  const scrollRef = useRef(null);
  const { cart, dispatch } = useCart();
  const inCart = (id) => cart?.items?.some((item) => item.id === id);
  const getQty = (id) =>
    cart?.items?.find((item) => item.id === id)?.quantity || 0;
  const handleAdd = (book) =>
    dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1 } });
  const handleInc = (id) => dispatch({ type: "INCREMENT", payload: { id } });
  const handleDec = (id) => dispatch({ type: "DECREMENT", payload: { id } });

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>
              <span className={styles.gradientText}>Curated Excellence</span>
            </h1>
            <p className={styles.subtitle}>Top Rated by Our Readers</p>
          </div>
          {/* BTN FOR MOVING LEFT TO RIGHT */}
          <div className={styles.navWrapper}>
            <div className={styles.navLine} />
            <div className={styles.navButtons}>
              <button onClick={scrollLeft} className={styles.navBtn}>
                <ChevronLeft className={styles.navIcon} size={20} />
              </button>
              <button onClick={scrollRight} className={styles.navBtn}>
                <ChevronRight className={styles.navIcon} size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* BOOKS SECTIONS */}
        <div className={styles.scrollContainer} ref={scrollRef}>
          {obsbooks.map((book, index) => (
            <div
              className={styles.card(bgColors[index % bgColors.length])}
              key={book.id}
            >
              <div className={styles.cardInner}>
                <div className="space-y-3 md:space-y-4">
                  <div className={styles.stars}>
                    {[
                      [...Array(5)].map((_, i) => (
                        <Star
                          className="h-4 w-4 md:h-5 md:w-5 text-amber-400
                        fill-amber-400"
                          key={i}
                        />
                      )),
                    ]}
                  </div>
                  <div className={styles.bookInfo}>
                    <h2 className={styles.bookTitle}>{book.title}</h2>
                    <p className={styles.bookAuthor}>{book.author}</p>
                  </div>
                  <p className={styles.bookDesc}>
                    Jane MCLane's latest masterpiece challenges conventional
                    storytelling. Explore transformative narratives that...
                  </p>
                </div>
                {/* ADD CONTROLS LIKE ADDTOCART */}
                <div className={styles.cartControls}>
                  <div className={styles.priceQtyWrapper}>
                    <span className={styles.price}>
                      Ksh.{book.price.toFixed(2)}
                    </span>
                    {inCart(book.id) ? (
                      <div className={styles.qtyWrapper}>
                        <button
                          onClick={() => handleDec(book.id)}
                          className={styles.qtyBtn}
                        >
                          <Minus size={18} />
                        </button>
                        <span className={styles.qtyText}>
                          {getQty(book.id)}
                        </span>
                        <button
                          onClick={() => handleInc(book.id)}
                          className={styles.qtyBtn}
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAdd(book)}
                        className={styles.addButton}
                      >
                        <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                        <span>Add to Collection</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <img
                src={book.image}
                alt={book.title}
                className={styles.bookImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBestSellers;
