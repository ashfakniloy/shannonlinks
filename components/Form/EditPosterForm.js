import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import usePostData from "../../hooks/usePostData";
import { CheckboxField, TextField } from "../common/InputField";
import useGetData from "../../hooks/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function EditPosterForm({
  id,
  posterId,
  adminId,
  username,
  password,
  posterEditId,
  yourLinks,
  linksAvailable,
}) {
  // const { data: session } = useSession();
  // const { id, admin, adminId } = session ? session.user : "";

  // console.log("form", data);

  // const id = data?.user?.id;

  // const adminId = data?.user?.adminId;

  // const {
  //   query: { posterEditId },
  // } = useRouter();

  // const { fetchedData, isLoading } = useGetData(`/poster/details/${posterEditId}`);
  // const username = fetchedData?.data?.username;
  // const password = fetchedData?.data?.password;
  // const posterId = fetchedData?.data?.posterId;
  // const yourLinks = fetchedData?.data?.links;
  // // console.log("poster details", username);

  // const { fetchedData: fetchedLinks } = useGetData(`/link/get/${id}`);

  // const allLinks = fetchedLinks?.users;

  const initialvalues = {
    // username: username ? username : "",
    password: password ? password : "",
    // posterId: posterId,
    // links: [],
    yourLinks: yourLinks ? yourLinks : "",
    availableLinks: [],
  };

  const validate = Yup.object({
    // username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    // posterId: Yup.string()
    //   .required("Poster Id is required")
    //   .max(3, "Not More than 3 characters"),
    // yourLinks: Yup.array().min(1, "Atleast one site is required"),
  });

  const [linksError, setLinksError] = useState(false);

  const { postData } = usePostData("/add/newsite/update");

  const handleSubmit = (values, formik) => {
    const { username, password, yourLinks, availableLinks } = values;
    const submitvalues = {
      id: posterEditId,
      password: password,
      links: [...yourLinks, ...availableLinks],
      // posterId: posterId,
      // username: username,
      // yourLinks: yourLinks,
      // availableLinks: availableLinks,
    };

    // console.log("edit", submitvalues);

    if (submitvalues.links.length === 0) {
      setLinksError(true);
    } else {
      setLinksError(false);
      // console.log("edit", submitvalues);
      const goto = "/posters";
      // const resetForm = formik.resetForm();
      postData(submitvalues, goto, formik);
    }
  };

  // const newLink = `${link}${adminId}/${posterId}`

  // const output = allLinks.filter((obj) => array1.indexOf(obj) !== -1);

  // const linksAvailable = allLinks?.filter((link) => {
  //   const newLink = `${link}/${adminId}/${posterId}`;
  //   return !yourLinks?.includes(newLink);
  // });

  // console.log("available", linksAvailable());

  return (
    <div className="mt-7">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <h1 className="text-lg font-semibold ">Edit Poster: {username}</h1>
            <div className="relative pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 md:gap-y-7">
              {/* <TextField label="Username *" name="username" type="text" /> */}
              <TextField label="Password *" name="password" type="text" />
              {/* <TextField
                label="Poster Id (max 3 characters) *"
                name="posterId"
                type="text"
                maxLength={3}
              /> */}
              <div className="col-start-1">
                <h4 className="">Poster&apos;s Sites *</h4>
                <div className="flex">
                  <div className="relative mt-2 gap-y-2 ">
                    {yourLinks?.map((link, i) => (
                      <CheckboxField
                        key={i}
                        label={link}
                        name="yourLinks"
                        value={link}
                        // checked
                      />
                    ))}
                    <p className="absolute -bottom-6 text-red-700 text-sm font-semibold">
                      <ErrorMessage name="links" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <h4 className="">Available Sites for Poster*</h4>
                <div className="flex">
                  <div className="relative mt-2 gap-y-2 ">
                    {linksAvailable?.map((link, i) => (
                      <CheckboxField
                        key={i}
                        label={`${link}/${adminId}/${posterId}`}
                        name="availableLinks"
                        value={`${link}/${adminId}/${posterId}`}
                      />
                    ))}

                    {/* {allLinks?.map((link, i) => {
                      const newLink = `${link}${adminId}/${posterId}`;
                      const filteredLinks = yourLinks?.filter(
                        (yourLink) => newLink === yourLink
                      );
                      
                      return (
                        <CheckboxField
                          key={i}
                          label={filteredLinks}
                          name="availableLinks"
                          value={filteredLinks}
                        />
                      );
                    })} */}

                    {/* <p className="absolute -bottom-6 text-red-700 text-sm font-semibold">
                      <ErrorMessage name="links" />
                    </p> */}
                  </div>
                </div>
              </div>
              {linksError ? (
                <p className="absolute -bottom-6 text-red-700 text-sm font-semibold">
                  Atleast one site is required
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-10 flex justify-start">
              <button
                type="submit"
                className=" px-9 py-4 text-white text-xs tracking-widest font-bold rounded bg-custom-blue5 hover:bg-custom-blue active:scale-95 transition duration-300 uppercase"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditPosterForm;
