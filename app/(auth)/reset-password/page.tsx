import ResetPassword from "@/components/ResetPassword";

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const resetPasswordToken = searchParams?.token;
  return (
    <div className="min-h-screen bg-[#111111]">
      <ResetPassword token={resetPasswordToken} />
    </div>
  );
}
