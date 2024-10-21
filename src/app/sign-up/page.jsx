import { Container } from "@/components/container";
import { SignUpForm } from "@/components/forms/signup-form";

export default function Page() {
  return (
    <Container>
      <div className="h-screen flex items-center justify-center">
        <div className="p-2 md:p-4 rounded-md w-full md:w-[400px] md:shadow-lg">
          <SignUpForm />
        </div>
      </div>
    </Container>
  );
}
