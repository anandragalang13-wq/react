// src/app/blogs/[blogId]/page.tsx
type Props = {
  params: {
    blogId: string;
  };
};

export default function BlogDetail({ params }: Props) {
  return (
    <div>
      <h1>Blog Detail: {params.blogId}</h1>
    </div>
  );
}