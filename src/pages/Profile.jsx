import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useMyProfile } from "../query-hooks/useMyProfile";

export default function Profile() {
  const navigateTo = useNavigate();

  const { isLoading, data, isError } = useMyProfile();

  if (isError) {
    return <div>something went wrong...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-4xl mb-3">User Details :</h1>
      <div className="flex items-center gap-8 mb-5 mt-5">
        <p className="font-bold w-52">Name:</p>
        <p className="text-xl">{data.name}</p>
      </div>
      <div className="flex items-center gap-8 mb-5">
        <p className="font-bold w-52">Email:</p>
        <p className="text-xl">{data.email}</p>
      </div>
      <div className="flex items-center gap-8 mb-5">
        <p className="font-bold w-52">User Status:</p>
        <p className="text-xl">{data.status}</p>
      </div>
      <Button onClick={() => navigateTo("/modify-user")} className="ml-[120px]">
        Edit User
      </Button>
    </div>
  );
}
