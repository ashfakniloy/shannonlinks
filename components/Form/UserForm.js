import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import usePostData from "../../hooks/usePostData";
import { CheckboxField, TextField } from "../common/InputField";

function UserForm() {
  const { data } = useSession();

  console.log("form", data);

  const id = data?.user?.id;

  const initialvalues = {
    username: "",
    password: "",
    user_id: "",
    links: [],
  };

  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    user_id: Yup.string()
      .required("User Id is required")
      .max(3, "Not More than 3 characters"),
    links: Yup.array().min(1, "Atleast one site is required"),
  });

  const { postData } = usePostData("/admin/add");

  const handleSubmit = (values, formik) => {
    const { username, password, user_id, links } = values;
    const submitvalues = {
      id: id,
      username: username,
      password: password,
      // user_id: user_id,
      links: links,
    };
    // console.log(submitvalues);
    postData(submitvalues);
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
            <h1 className="text-lg font-semibold ">Add New User</h1>
            <div className="pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 md:gap-y-7">
              <TextField label="Username *" name="username" type="text" />
              <TextField label="Password *" name="password" type="text" />
              <TextField
                label="User Id (max 3 characters) *"
                name="user_id"
                type="text"
                maxLength={3}
              />
              <div className="col-span-2">
                <h4 className="">Sites *</h4>
                {formik.values.user_id ? (
                  <div className="relative mt-2 grid grid-cols-2 gap-2">
                    <CheckboxField
                      label={`https://www.megapersonals.com/001/${formik.values.user_id}`}
                      name="links"
                      value={`https://www.megapersonals.com/001/${formik.values.user_id}`}
                    />
                    <CheckboxField
                      label={`https://www.tryst.com/001/${formik.values.user_id}`}
                      name="links"
                      value={`https://www.tryst.com/001/${formik.values.user_id}`}
                    />
                    <CheckboxField
                      label={`https://www.skipthegames.com/001/${formik.values.user_id}`}
                      name="links"
                      value={`https://www.skipthegames.com/001/${formik.values.user_id}`}
                    />
                    <CheckboxField
                      label={`https://www.privatedelights.com/001/${formik.values.user_id}`}
                      name="links"
                      value={`https://www.privatedelights.com/001/${formik.values.user_id}`}
                    />
                    <p className="absolute -bottom-6 text-red-700 text-sm font-semibold">
                      <ErrorMessage name="links" />
                    </p>
                  </div>
                ) : (
                  <p className="mt-2">Enter User ID First</p>
                )}
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

export default UserForm;
