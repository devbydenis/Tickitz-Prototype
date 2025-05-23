import Newslater from "../components/Newslater";
import background_img from "../assets/background_img.png";
import Chip from "../components/Chip";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Card from "../components/Card";

function BuyTicket() {
  return (
    <>
      <section>
        <Banner />
        <Menu />
        <section className="px-5 md:px-10">
          <ul className="flex flex-wrap justify-center gap-5 sm:gap-10">
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
            <Card category="now playing" />
          </ul>
          <div className="flex justify-center items-center gap-5 my-20">
            <button className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-black focus:text-white">
              1
            </button>
            <button className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-black focus:text-white">
              2
            </button>
            <button className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-black focus:text-white">
              3
            </button>
            <button className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-black focus:text-white">
              4
            </button>
            <button className="bg-orange rounded-full border-2 w-fit px-4.5 py-4.5 text-lg font-bold text-white">
              <FaArrowRight />
            </button>
          </div>
        </section>
        <Newslater />
      </section>
    </>
  );
}

function Banner() {
  return (
    <section
      className="relative m-5 h-[32.5rem] rounded-[3rem] bg-cover bg-center bg-no-repeat md:mx-20 md:my-10 md:h-[28.125rem]"
      style={{ backgroundImage: `url(${background_img})` }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 rounded-4xl bg-linear-to-t from-[#000000] to-[#ffffff0c]"></div>
      <div className="absolute z-40 flex h-full flex-col items-center justify-end gap-4 px-6 py-4 text-center text-white md:items-start md:text-start">
        <Chip value="list movie of the week" />
        <h1 className="text-3xl font-semibold md:text-4xl">
          Experience the Magic of Cinema:{" "}
          <span className="text-orange">Book Your Tickets Today</span>
        </h1>
        <p>Sign up and get the ticket with a lot of discount</p>
      </div>
    </section>
  );
}

function Menu() {
  return (
    // <section className="flex flex-col gap-5 px-5 py-10">
    <section className="grid grid-cols-1 gap-5 px-5 py-10 md:grid-cols-2 md:px-20 md:py-15">
      {/* Sorting */}
      <div className="flex w-full justify-between gap-5 md:col-span-2">
        <h2 className="text-2xl leading-7 font-semibold md:text-4xl">
          Now Showing in Cinemas
        </h2>
        <button
          className="bg-orange flex items-center gap-2 rounded-full px-6 py-5 leading-4 font-bold text-white uppercase"
          type="button"
        >
          Popular <IoIosArrowDown />
        </button>
        <ul className="hidden">
          <li>Popular</li>
          <li>Latest</li>
          <li>Name (A-Z)</li>
          <li>Name (Z-A)</li>
        </ul>
      </div>
      {/* Searching */}
      <div className="">
        <form className="flex flex-col gap-5">
          <h2 className="text-xl/7 font-semibold">Find Movie</h2>
          <div className="flex items-center gap-3 rounded-full border-2 px-6 py-4">
            <FiSearch className="text-gray-400" />
            <input
              className="w-full rounded-full tracking-wider focus:outline-none"
              type="text"
              placeholder="Search Your Movie"
            />
          </div>
          <button className="hidden" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* Filtering */}
      <div>
        <h2 className="text-xl/7 font-semibold">Filter</h2>
        <ul className="flex flex-wrap gap-4 py-4">
          <Genre title="Action" />
          <Genre title="Adventure" />
          <Genre title="Comedy" />
          <Genre title="Sci-Fi" />
        </ul>
      </div>
    </section>
  );
}

type GenreProps = {
  title: string;
};
function Genre(props: GenreProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <li
      className={`${isActive ? "bg-orange border-orange text-white" : ""} min-w-fit cursor-pointer rounded-3xl border border-black px-4 py-2 font-medium uppercase`}
      onClick={() => setIsActive(!isActive)}
    >
      {props.title}
    </li>
  );
}

export default BuyTicket;
