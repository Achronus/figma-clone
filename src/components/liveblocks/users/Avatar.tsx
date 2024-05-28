import Image from "next/image";
import styles from "./index.module.css";

type AvatarProps = {
  name: string;
  otherStyles: string;
};

const Avatar = ({ name, otherStyles }: AvatarProps) => {
  const getRandomAvatarIdx = () => {
    return Math.floor(Math.random() * 30);
  };

  return (
    <div
      className={`${styles.avatar} ${otherStyles} h-9 w-9`}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${getRandomAvatarIdx()}.png`}
        alt={name}
        fill
        className={styles.avatar_picture}
      />
    </div>
  );
};

export default Avatar;
