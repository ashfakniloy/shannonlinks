import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import usePostData from "../../hooks/usePostData";
import { CheckboxField, TextField } from "../common/InputField";
import useGetData from "../../hooks/useGetData";
import { useState } from "react";

function PosterForm({ id, adminId }) {
  // const { data: session } = useSession();
  // const { id, username, admin, adminId } = session ? session.user : "";

  // console.log("form", data);

  // const id = data?.user?.id;

  // const adminId = data?.user?.adminId;

  const [linksState, setLinksState] = useState([]);

  const [idChange, setIdChange] = useState(false);

  const [linksError, setLinksError] = useState(false);

  const { postData } = usePostData("/admin/add");

  const { fetchedData } = useGetData(`/link/get/${id}`);

  const initialvalues = {
    username: "",
    password: "",
    posterId: "",
    links: [],
  };

  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    posterId: Yup.string()
      .required("Poster Id is required")
      .max(3, "Not More than 3 characters")
      .matches(/^[a-zA-Z0-9@]+$/, "Cannot contain space and special character"),
    links: Yup.array().min(1, "Atleast one site is required"),
  });

  // console.log("links", fetchedData?.users);

  const fetchedLinks = fetchedData?.users;

  const handleSubmit = (values, formik) => {
    const { username, password, posterId, links } = values;
    const submitvalues = {
      id: id,
      username: username,
      password: password,
      posterId: posterId,
      links: links,
    };

    if (submitvalues.links.length === 0) {
      setLinksError(true);
    } else {
      setLinksError(false);
      // console.log("submitposter", submitvalues);
      postData(submitvalues, formik);
    }

    // console.log(submitvalues);

    // postData(submitvalues, formik);
  };

  return (
    <div className="mt-7">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
        // enableReinitialize
      >
        {(formik) => (
          <Form>
            <h1 className="text-lg font-semibold ">Add New Poster</h1>
            <div className="pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 md:gap-y-7">
              <TextField label="Username *" name="username" type="text" />
              <TextField label="Password *" name="password" type="text" />
              <TextField
                label="Poster Id (max 3 characters) *"
                name="posterId"
                type="text"
                maxLength={3}
              />
              <div className="col-span-3">
                <h4 className="">Sites *</h4>
                <div className="flex">
                  {formik.values.posterId ? (
                    <div className="relative mt-2 grid grid-cols-2 gap-y-2 gap-x-10">
                      {fetchedLinks?.map((link, i) => (
                        <CheckboxField
                          key={i}
                          name="links"
                          label={`${link}/${adminId}/${formik.values.posterId}`}
                          value={`${link}/${adminId}/${formik.values.posterId}`}
                          resetonchange="true"
                        />
                      ))}
                      {linksError ? (
                        <p className="absolute -bottom-6 text-red-700 text-sm font-semibold">
                          Atleast one site is required
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="absolute -bottom-6 text-red-700 text-sm font-semibold">
                        <ErrorMessage name="links" />
                      </p>
                    </div>
                  ) : (
                    <p className="mt-2">Enter User ID First</p>
                  )}
                </div>
              </div>
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

export default PosterForm;
