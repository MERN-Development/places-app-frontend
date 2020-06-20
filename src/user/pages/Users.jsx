import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Brayan García",
      image:
        "https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTcyMzE0MzI2NTU0NjQ5ODEy/ang-lee-gettyimages-163118045.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
