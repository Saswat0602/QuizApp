
const Home = () => {
  return (
    <div>
      <section className=" bg-blue-300 min-h-screen flex justify-center items-center">
        <div className=" mx-auto p-4 bg-white rounded-lg shadow-lg">
          <div className=" text-lg md:text-xl">
            <h3>
              1) Lorem ipsum dolor sit amet, consectetur adipisicing elit
              Debitis?
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="first"
              className="box flex items-center cursor-pointer"
            >
              <input
                name="option"
                type="radio"
                id="first"
                value="a"
                required
                className="mr-2"
              />
              Testing 1
            </label>
            <label
              htmlFor="second"
              className="box flex items-center cursor-pointer"
            >
              <input
                name="option"
                type="radio"
                id="second"
                value="b"
                required
                className="mr-2"
              />
              Testing 2
            </label>
            <label
              htmlFor="third"
              className="box flex items-center cursor-pointer"
            >
              <input
                name="option"
                type="radio"
                id="third"
                value="c"
                required
                className="mr-2"
              />
              Testing 3
            </label>
            <label
              htmlFor="fourth"
              className="box flex items-center cursor-pointer"
            >
              <input
                name="option"
                type="radio"
                id="fourth"
                value="d"
                required
                className="mr-2"
              />
              Testing 4
            </label>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
