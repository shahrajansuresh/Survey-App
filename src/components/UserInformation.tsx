import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikErrors,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  createTheme,
} from "@mui/material";
import {  useNavigate, } from "react-router-dom";
const UserInformation: React.FC = () => {
  const navigate = useNavigate()
  const defaultTheme = createTheme();
  function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Vidhan Sabha Election
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const initialValues = {
    name: "",
    phoneNumber: "",
    villageName: "",
    familyMembers: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
    villageName: Yup.string().required("Required"),
    familyMembers: Yup.number()
      .required("Required")
      .integer("Must be an integer")
      .min(1, "Must be at least 1"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Implement logic to check if the phone number already exists in the database.
    // If it does, prevent submission, otherwise proceed with submission.
    navigate("product-selection")
    console.log("Form submitted:", values);
  };

  const FormInputComponent = ({
    Props,
    name,
    Label,
    type,
  }: {
    Props: FormikProps<typeof initialValues>;
    name: "name" | "phoneNumber" | "villageName" | "familyMembers";
    Label: string;
    type: string;
  }) => {
    const {
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      touched,
      values,
    } = Props;

    return (
      <Grid item lg={12}>
      <FormControl fullWidth error={Boolean(touched[name] && errors[name])}>
        <InputLabel htmlFor="outlined-adornment-name-login">{Label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-name-login"
          type={type}
          value={values[name]}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          label={Label}
          inputProps={{}}
        />
        {touched[name] && errors[name] && (
          <FormHelperText error id="standard-weight-helper-text-name-login">
            {errors[name]}
          </FormHelperText>
        )}
      </FormControl>
      </Grid>
    );
  };

  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://www.ibc24.in/wp-content/uploads/2022/08/Mandalam-Sector-Committees.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            mt:2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User information
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(Props) => (
              <form noValidate onSubmit={Props.handleSubmit}>
                <Grid container spacing={1} sx={{marginTop:1}}>
                  <FormInputComponent
                    {...{ Props, name: "name", Label: "Name", type: "text" }}
                  />
                  <FormInputComponent
                    {...{
                      Props,
                      name: "phoneNumber",
                      Label: "Phone number",
                      type: "text",
                    }}
                  />
                  <FormInputComponent
                    {...{
                      Props,
                      name: "villageName",
                      Label: "Village",
                      type: "text",
                    }}
                  />
                  <FormInputComponent
                    {...{
                      Props,
                      name: "familyMembers",
                      Label: "Total Family Members",
                      type: "text",
                    }}
                  />
                </Grid>
                <Box sx={{ mt: 2 }}>
                  <Button
                    disableElevation
                    disabled={Props.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserInformation;
