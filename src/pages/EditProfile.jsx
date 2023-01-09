import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { profileService } from "../API/profile/ProfileService";
import { QueryKeys } from "../helpers/QueryKeys";
import { useMyProfile } from "../query-hooks/useMyProfile";
import Button from "../components/Button";

function EditProfile() {
  const queryClient = useQueryClient();

  const { isLoading, data, isError } = useMyProfile();

  const mutation = useMutation({
    mutationFn: (values) =>
      profileService.updateProfileData({
        name: values.name,
        email: values.email,
        status: values.status,
      }),
    onSuccess: () => {
      toast.success("Profile Details Updated Successfully", {
        duration: 10000,
        position: "top-center",
      });
      queryClient.invalidateQueries({ myProfile: [QueryKeys.ProfilesGet] });
    },
    onError: (err) => {
      console.log("unable to update the profile" + err);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  const formik = useFormik({
    initialValues: {
      name: data?.name ?? "",
      email: data?.email ?? "",
      status: data?.status ?? "",
    },
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="p-2">
      <form
        className="flex flex-col w-[400px] overflow-auto"
        onSubmit={() => formik.handleSubmit()}
      >
        <label className="font-bold mb-1" htmlFor="name">
          Name:
        </label>
        <input
          className="mb-8 border border-black p-1 rounded"
          autoFocus
          id="name"
          type="text"
          value={formik.values.name}
          onChange={(e) => formik.setFieldValue("name", e.target.value)}
        />
        <label className="font-bold mb-1" htmlFor="email">
          Email:
        </label>
        <input
          className="mb-8 border border-black p-1 rounded"
          id="email"
          type="email"
          value={formik.values.email}
          onChange={(e) => formik.setFieldValue("email", e.target.value)}
        />
        <label className="font-bold mb-1" htmlFor="name">
          User Status:
        </label>
        <input
          className="mb-8 border border-black p-1 rounded"
          id="status"
          type="text"
          value={formik.values.status}
          onChange={(e) => formik.setFieldValue("status", e.target.value)}
        />
        <div className="text-center">
          <Button className="w-40" type="submit">
            Save Changes
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default EditProfile;
