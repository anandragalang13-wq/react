// src/app/blogs/[blogId]/page.tsx
type Props = {
  params: {
    blogId: string;
  };
};

export default function BlogDetail({ params }: Props) {
  return (
    <main>
      <h1>Details about Blog {params.blogId}</h1>
    </main>
  );
}