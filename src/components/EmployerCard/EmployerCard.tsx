import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IEmployerCard {
  id: string;
  avatar: string;
  name: string;
  positionAtWork: string;
}

const EmployerCard: FC<IEmployerCard> = ({
  id,
  name,
  avatar,
  positionAtWork,
}) => {
  return (
    <Link to={`employer/${id}`}>
      <img
        src={
          avatar !== ""
            ? avatar
            : "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
        }
        alt=""
      />
      <h3>{name}</h3>
      <p>{positionAtWork}</p>
    </Link>
  );
};

export default EmployerCard;
