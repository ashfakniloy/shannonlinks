import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import usePostData from "../../hooks/usePostData";
import { TextField } from "../common/InputField";

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

  const { postData } = usePostData("/admin/add");

  const handleSubmit = (values, formik) => {
    const { username, password, user_id, links } = values;
    const submitvalues = {
      username: username,
      password: password,
      user_id: user_id,
      links: links,
      id: id,
    };
    console.log(submitvalues);
    postData(submitvalues);
  };

  return (
    <div className="mt-7">
      <Formik
        initialValues={initialvalues}
        // validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <h1 className="text-lg font-semibold ">Add New User</h1>
            <div className="pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <TextField label="Username *" name="username" type="text" />
              <TextField label="Password *" name="password" type="text" />
              <TextField label="User Id *" name="user_id" type="text" />
              <div className="">
                <h4 className="">Sites *</h4>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <label className="">
                    <Field
                      type="checkbox"
                      name="links"
                      value="megapersonals"
                      className="mr-2"
                    />
                    Megapersonals
                  </label>
                  <label className="">
                    <Field
                      type="checkbox"
                      name="links"
                      value="tryst"
                      className="mr-2"
                    />
                    Tryst
                  </label>
                  <label className="">
                    <Field
                      type="checkbox"
                      name="links"
                      value="skipthegames"
                      className="mr-2"
                    />
                    SKipTheGames
                  </label>
                  <label className="">
                    <Field
                      type="checkbox"
                      name="links"
                      value="privatedelights"
                      className="mr-2"
                    />
                    PrivateDelights
                  </label>
                </div>
              </div>
              {/* <TextField label="Link Id *" name="linkId" type="text" /> */}
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="mt-8 px-9 py-4 text-white text-xs tracking-widest font-bold rounded bg-custom-blue5 hover:bg-custom-blue active:scale-95 transition duration-300 uppercase"
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
