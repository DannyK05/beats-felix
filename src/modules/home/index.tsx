import CartIcon from "../../components/icons/CartIcon";
import ProfileIcon from "../../components/icons/ProfileIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import ShieldIcon from "../../components/icons/ShieldIcon";
import VanIcon from "../../components/icons/VanIcon";
import YingArrowIcon from "../../components/icons/YingArrowIcon";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <h1>BeatsFleix</h1>
          <span>Earbuds</span>
          <span>Headphones</span>
          <span>Speakers</span>
        </nav>
        <div>
          <input name="search" title="search" type="search" />
          <label htmlFor="search">
            <SearchIcon />
          </label>
        </div>
        <span>
          <ProfileIcon />
        </span>
        <span>
          <CartIcon />
        </span>
      </header>
      <div>
        <div>
          {" "}
          <div>
            <h1>Made to be worn</h1>
            <p>Take off your look with yellow, black and white wash</p>{" "}
            <button type="button">Shop the washed collection</button>
          </div>
        </div>

        <div>
          <span>
            <VanIcon />
            <span>Free shipping on orders $49+ for Members</span>
          </span>
          <span>
            <ShieldIcon />
            <span>1 year limited waranty</span>
          </span>
          <span>
            <YingArrowIcon />
            <span>Easy return</span>
          </span>
        </div>
      </div>
    </div>
  );
}
