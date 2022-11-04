import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

// export const TextField = ({ label, ...props }) => {
//   return (
//     <div className="">
//       <label {...props}>{label}</label>
//       <div className="mt-1 relative">
//         <Field
//           className="p-2 w-full outline-none bg-slate-100 border border-slate-300 focus:border-slate-500"
//           {...props}
//         />
//         <p className="absolute -bottom-4 text-red-600 text-xs">
//           <ErrorMessage {...props} />
//         </p>
//       </div>
//     </div>
//   );
// };

export const TextField = ({ label, ...props }) => {
  return (
    <div className="">
      <label {...props}>{label}</label>
      <div className="mt-1 relative">
        <Field
          className="p-2 w-full outline-none bg-gray-50 border border-gray-200 focus:border-gray-300 focus:shadow"
          // id={name}
          // name={name}
          {...props}
          required
        />
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage {...props} />
        </p>
      </div>
    </div>
  );
};

export const PasswordField = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="">
      <label {...props}>{label}</label>
      <div className="mt-1 relative">
        <Field
          className="p-2 w-full outline-none bg-gray-50 border border-gray-200 focus:border-gray-300 focus:shadow"
          // id={name}
          // name={name}
          {...props}
          type={showPassword ? "text" : "password"}
          autoComplete="on"
          required
        />
        <div
          className="absolute right-3 top-[6px] text-base p-[6px] cursor-pointer hover:bg-gray-200 active:bg-gray-300 rounded-full text-black/60"
          onClick={() => setShowPassword(!showPassword)}
        >
          {/* {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} */}
          {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
        </div>
      </div>
    </div>
    // <div className="relative">
    //   <TextField
    //     label="Password *"
    //     name="password"
    //     type={showPassword ? "text" : "password"}
    //     autoComplete="on"
    //   />
    // <div
    //   className="absolute right-3 top-[30px] text-base p-[6px] cursor-pointer hover:bg-gray-200 active:bg-gray-300 rounded-full text-black/60"
    //   onClick={() => setShowPassword(!showPassword)}
    // >
    //   {/* {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} */}
    //   {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
    // </div>
    // </div>
  );
};
