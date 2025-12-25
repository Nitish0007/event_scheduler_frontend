import { TextInput, PasswordInput, Button, Container, Title, Paper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

const Signup = ({ role, onSubmit }) => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 6 ? "Password must be at least 6 characters long" : null),
      password_confirmation: (value, values) => (value !== values.password ? "Passwords did not match" : null),
    }
  });

  const oppositeRole = role === "customer" ? "organizer" : "customer";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Container size={420} my={40}>
        <Title ta="" className="text-2xl font-bold mb-6">
          Sign up as {role.charAt(0).toUpperCase() + role.slice(1)}
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={(e) => onSubmit(e, form.values)}>
            <TextInput
              label="Email"
              placeholder="you@example.com"
              required
              mb="md"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mb="md"
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              required
              mb="xl"
              {...form.getInputProps("password_confirmation")}
            />
            <Button fullWidth mt="xl" type="submit">
              Sign up
            </Button>
          </form>
        </Paper>
      </Container>

      <div className="text-center mt-6">
        Already have an account?  <Link to={`/${role}/login`}>Login</Link>
      </div>
      <div className="text-center mt-6">
        Sign up as {oppositeRole}? <Link to={`/${oppositeRole}/signup`}>Sign up</Link>
      </div>
    </div>
  );
};

export default Signup;