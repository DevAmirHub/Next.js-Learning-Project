import Link from "next/link";

export default async function CoursePage({ params }: { 
  params: Promise<{ course_id: string }> | { course_id: string } 
}) {
  // Handle both Promise and direct params for compatibility
  const resolvedParams = params instanceof Promise ? await params : params;
  const courseId = resolvedParams.course_id;

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
        Course {courseId}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        This is the page for Course {courseId}.
      </p>
      <Link 
        href="/course" 
        className="text-blue-500 mt-4 hover:underline inline-block"
      >
        ← Back to Courses
      </Link>
    </div>
  );
}