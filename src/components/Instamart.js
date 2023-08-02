import { useState } from "react";

const ShowButton = ({ onClick }) => {
  return (
    <button className="underline cursor-pointer" onClick={onClick}>
      Show
    </button>
  );
};
const HideButton = ({ onClick }) => {
  return (
    <button className="underline cursor-pointer" onClick={onClick}>
      Hide
    </button>
  );
};

const Section = (props) => {
  const { title, description, isVisible, setVisibleSection, setHideSection } =
    props;

  const handleOnClick = () => {};
  return (
    <div className="border-solid border-black border-2 m-1 p-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {!isVisible ? (
        <ShowButton onClick={setVisibleSection} />
      ) : (
        <HideButton onClick={setHideSection} />
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque  reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex reprehenderit exercitationem nesciunt laboriosam, placeat voluptas ex";

  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <h1 className="m-2 p-2 text-2xl font-bold bg-gray-300 inline-block">
        Instamart
      </h1>
      <Section
        title={"About"}
        description={description}
        isVisible={visibleSection === "about"}
        setVisibleSection={() => setVisibleSection("about")}
        setHideSection={() => setVisibleSection("")}
      />
      <Section
        title={"Teams"}
        description={description}
        isVisible={visibleSection === "teams"}
        setVisibleSection={() => setVisibleSection("teams")}
        setHideSection={() => setVisibleSection("")}
      />
      <Section
        title={"Careers"}
        description={description}
        isVisible={visibleSection === "careers"}
        setVisibleSection={() => setVisibleSection("careers")}
        setHideSection={() => setVisibleSection("")}
      />
    </>
  );
};

export default Instamart;
