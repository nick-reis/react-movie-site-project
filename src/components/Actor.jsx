import React, { useEffect, useState } from "react";
import { imageRequests, miscRequest } from "../Requests";
import axios from "axios";

const Actor = ({ id }) => {
  const [actor, setActor] = useState();
  useEffect(() => {
    axios.get(miscRequest.requestActor(id)).then((response) => {
      setActor(response.data);
    });
  }, []);
  console.log(actor);
  return (
    <div>
      <img
        className="text-white w-[100px] h-[100px] rounded-full object-cover"
        src={imageRequests.w500Image + actor?.profile_path}
        alt={actor?.name}
      />
    </div>
  );
};

export default Actor;
