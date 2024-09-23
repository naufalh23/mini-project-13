'use client'

import { useRouter } from "next/navigation";
import * as yup from "yup";
import { toast } from "react-toastify"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { IUserLogin } from "@/type/author";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slice/authorSlice"
import { loginUser } from "@/lib/author";
import { createToken } from "@/lib/server";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch()

  const onLogin = async (data: IUserLogin, action: FormikHelpers<IUserLogin>) => {
    try {
        const { result, ok } = await loginUser(data)
        if (!ok) throw result.msg
        toast.success(result.msg)
        action.resetForm()
        dispatch(loginAction(result.user))
        createToken(result.token)
        router.push('/')
      } catch (err) {
        console.log(err);
        toast.error(err as string)
      }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, action) => {
        onLogin(values, action);
      }}
    >
      {() => (
        <Form>
          <div className="mt-10 min-w-[30vw] min-h-[450px]">
          <h2 className="text-2xl text-center font-bold leading-7 text-gray-900">Login</h2>
          <p className="mt-1 text-sm text-center leading-6 text-gray-600">Use a email address where you have been Register.</p>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <Field
                  name="email"
                  type="text"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage name="email" component={"div"} className="text-sm text-red-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="mt-2">
                <Field
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage name="password" component={"div"} className="text-sm text-red-500" />
              </div>
            </div>
            <button type="submit" className="w-full mt-6 p-1.5 text-sm font-medium rounded-md bg-secondary text-white hover:bg-slate-500 ">
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}