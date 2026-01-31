import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false
      }
    };
  }

  return { props: {} };
}

export default function Dashboard() {
  return (
    <div data-testid="dashboard-page">
      <h1>Dashboard</h1>
      <p>Only logged-in users can access this page</p>
    </div>
  );
}
