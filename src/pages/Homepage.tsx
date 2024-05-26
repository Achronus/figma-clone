import { Room } from "@/liveblocks/Room";
import { CollaborativeApp } from "@/liveblocks/CollaborativeApp";

const Homepage = () => {
  return (
    <>
      <Room>
        <CollaborativeApp />
      </Room>
    </>
  );
};

export default Homepage;
