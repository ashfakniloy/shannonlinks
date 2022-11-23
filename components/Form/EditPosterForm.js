import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import usePostData from "../../hooks/usePostData";
import { CheckboxField, TextField } from "../common/InputField";
import useGetData from "../../hooks/useGetData";
import { useRouter } from "next/router";

function EditPosterForm() {
  const { data: session } = useSession();
  const { id, admin, adminId } = session ? session.user : "";

  // console.log("form", data);

  // const id = data?.user?.id;

  // const adminId = data?.user?.adminId;

  const {
    query: { posterEditId },
  } = useRouter();

  const { fetchedData } = useGetData(`/poster/details/${posterEditId}`);
  const username = fetchedData?.data?.username;
  const password = fetchedData?.data?.password;
  const posterId = fetchedData?.data?.posterId;
  const yourLinks = fetchedData?.data?.links;
  // console.log("poster details", username);

  const { fetchedData: fetchedLinks } = useGetData(`/link/get/${id}`);

  const allLinks = fetchedLinks?.users;

  const initialvalues = {
    username: username,
    password: password,
    // posterId: posterId,
    links: [],
    yourLinks: yourLinks,
    availableLinks: [],
  };

  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    // posterId: Yup.string()
    //   .required("Poster Id is required")
    //   .max(3, "Not More than 3 characters"),
    // yourLinks: Yup.array().min(1, "Atleast one site is required"),
  });

  const handleSubmit = (values, formik) => {
    const { username, password, posterId, links, yourLinks, availableLinks } =
      values;
    const submitvalues = {
      id: id,
      username: username,
      password: password,
      posterId: posterId,
      links: [...yourLinks, ...links],
      // yourLinks: yourLinks,
      // availableLinks: availableLinks,
    };
    console.log(submitvalues);
    // postData(submitvalues);
  };

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
            <h1 className="text-lg font-semibold ">Edit Poster</h1>
            <div className="pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 md:gap-y-7">
              <TextField label="Username *" name="username" type="text" />
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
                        label={`${link}`}
                        name="links"
                        value={`${link}`}
                        checked
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
                    {allLinks?.map((link, i) => (
                      <CheckboxField
                        key={i}
                        label={`${link}/${adminId}/${posterId}`}
                        name="links"
                        value={`${link}/${adminId}/${posterId}`}
                      />
                    ))}
                    <p className="absolute -bottom-6 text-red-700 text-sm font-semibold">
                      <ErrorMessage name="links" />
                    </p>
                  </div>
                </div>
              </div>
              {/* <TextField label="Link Id *" name="linkId" type="text" /> */}
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