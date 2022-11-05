import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
// import * as Yup from "yup";
import { Formik, Form } from "formik";

// import useLogin from "../Hooks/useLogin";
// import { signIn, useSession } from "next-auth/react";
// import Cookies from "js-cookie";
// import Loader from "../Layout/Loader";

// import { BsEyeSlash, BsEye } from "react-icons/bs";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { TextField } from "../components/common/InputField";
import useLogin from "../hooks/useLogin";
import { getSession } from "next-auth/react";

function SignInPage({ user, loginRoute, dashboardRoute }) {
  // const [loading, setLoading] = useState();

  // Router.events.on("routeChangeStart", (url) => {
  //   setLoading(true);
  // });
  // Router.events.on("routeChangeComplete", (url) => {
  //   setLoading(false);
  // });
  // Router.events.on("routeChangeError", (url) => {
  //   setLoading(false);
  // });

  const initialvalues = {
    username: "",
    password: "",
  };

  // const validate =
  //   user === "super admin"
  //     ? Yup.object({
  //         email: Yup.string().required("Email is required"),
  //         password: Yup.string().required("Password is required"),
  //       })
  //     : Yup.object({
  //         identity_id: Yup.string().required("Institution Code is required"),
  //         email: Yup.string().required("Email is required"),
  //         password: Yup.string().required("Password is required"),
  //       });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  // const { loginUser } = useLogin(loginRoute, dashboardRoute);
  const { loginUser } = useLogin();

  const handleSubmit = (values) => {
    loginUser(values);
    console.log(values);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* {loading && <FullPageLoader />} */}

        <div className="bg-white px-10 py-14 shadow-lg rounded">
          <h1 className="text-2xl font-semibold text-center">Sign In</h1>
          <div className="mt-8">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="text-sm gap-y-5 md:gap-y-7">
                    <div className="lg:min-w-[350px] space-y-4">
                      <TextField
                        label="Username *"
                        name="username"
                        type="text"
                      />
                      <div className="relative">
                        <TextField
                          label="Password *"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="on"
                        />
                        <div
                          className="absolute right-3 top-[30px] text-base p-[6px] cursor-pointer hover:bg-gray-200 active:bg-gray-300 rounded-full text-black/60"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {/* {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} */}
                          {showPassword ? (
                            <MdVisibility />
                          ) : (
                            <MdVisibilityOff />
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-8 w-full py-3 bg-custom-blue2 rounded  hover:bg-custom-blue4 text-white font-bold active:scale-95 transition duration-300"
                    >
                      Sign In
                    </button>
                    {/* <span className="ml-5 text-sm text-green-600 ">
                      {status === "loading" && <p>logging in</p>}
                    </span> */}

                    <p className="mt-6 text-sm text-custom-blue4 hover:text-custom-blue transition duration-300">
                      <Link href="/sign-up">
                        Don&apos;t have an account? Create account
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default SignInPage;
