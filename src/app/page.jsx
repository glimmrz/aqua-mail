import { Container } from "@/components/container";
import { LoginForm } from "@/components/forms/login-form";

export default function Home() {
  return (
    <Container>
      <div className="h-screen flex items-center justify-center">
        <div className="p-2 md:p-4 rounded-md w-full md:w-[400px] md:shadow-lg">
          <LoginForm />
        </div>
      </div>
    </Container>
  );
}
