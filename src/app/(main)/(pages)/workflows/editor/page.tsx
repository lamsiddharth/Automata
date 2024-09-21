import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const prisma = new PrismaClient();

type Workflow = {
  id: string;
  name: string;
};

type PageProps = {
  workflows: Workflow[];
};

const Page = ({ workflows }: PageProps) => {
//   const router = useRouter();

//   if (workflows.length > 0) {
//     // Redirect to the first workflow
//     router.push(`/workflows/${workflows[0].id}`);
//   } else {
//     // Redirect to create workflow if none found
//     router.push('/workflows');
//   }

  return <div className='m-3'>Redirecting...</div>;
};

// Fetch workflows server-side
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const userId = 'some-user-id'; // Replace with actual user ID logic (e.g., session or auth token)

//   const workflows = await prisma.workflows.findMany({
//     where: {
//       userId: userId,
//     },
//     select: {
//       id: true,
//       name: true,
//     },
//   });

//   return {
//     props: {
//       workflows,
//     },
//   };
// };

export default Page;
