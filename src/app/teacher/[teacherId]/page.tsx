//src/app/teacher/[teacherId]/page.tsx
type Props = {
  params: {
    teacherId: string;
  };
};

export default function TeacherProfile({ params }: Props) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Melihat Profil Akademik untuk Guru: {params.teacherId}</h1>
    </div>
  );
}