// src/app/courses/[courseId]/materials/[materialId]/page.tsx
type Props = {
  params: {
    courseId: string;
    materialId: string;
  };
};

export default function CourseMaterial({ params }: Props) {
  return (
    <div>
      <h1>
        Melihat materi {params.materialId} untuk mata pelajaran {params.courseId}
      </h1>
    </div>
  );
}