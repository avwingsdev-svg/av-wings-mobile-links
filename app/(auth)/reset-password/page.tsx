import ResetPassword from "@/components/ResetPassword";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;
  const resetPasswordToken = params?.token ?? "";

  return (
    <div className="min-h-screen bg-[#111111]">
      <ResetPassword token={resetPasswordToken} />
    </div>
  );
}
