import Button from "../../components/Button";
import landing_page_image from "../../resource/landing_page_image.svg";

function Home() {
  return (
    <div className=" mx-auto w-10/12">
      <div className=" mt-20">
        <h1 className=" font-bold text-5xl text-center block text-slate-800">
          Imagine if <br />
          <span className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-400">
            Snapchat
          </span>
          <br />
          had events.
        </h1>
      </div>
      <p className="text-neutral-600 mt-5">
        Easily host and share events with your friends across any social media.
      </p>
      <img
        className="object-contain h-292 w-48 mx-auto mt-10"
        src={landing_page_image}
        alt="Event Card"
      ></img>
      <Button btnText="Create my event" />
    </div>
  );
}

export default Home;
