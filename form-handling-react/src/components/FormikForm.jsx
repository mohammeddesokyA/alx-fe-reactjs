import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 chars").required("Password is required"),
});

function FormikForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form Submitted:", values);

    // Mock API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error("Error:", err));

    resetForm();
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Registration Form (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div style={{ marginBottom: "10px" }}>
            <Field name="username" placeholder="Username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
