import { TextInput, PasswordInput, Button, Container, Title, Paper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

const Login = ({ role, onSubmit }) => {
  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    },
    validates: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 6 ? "Password must be at least 6 characters long" : null)
    },
    onSubmitPreventDefault: true,
    validateOnSubmit: true
  })


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Container size={420} my={40}>
        <Title ta="center" className="text-2xl font-bold mb-6">
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
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
              mb="xl"
              {...form.getInputProps("password")}
            />
            <Button fullWidth mt="xl" type="submit">
              Login
            </Button>
          </form>
        </Paper>
      </Container>

      <div className="text-center mt-6">
        Don't have an account? <Link to={`/${role}/signup`}>Sign up</Link>
      </div>
    </div>
  )
}

export default Login;