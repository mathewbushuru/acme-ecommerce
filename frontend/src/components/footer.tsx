import ProjectInfoSheet from "@/components/project-info-sheet";

export default function Footer() {
  return (
    <div className="mt-8 bg-secondary p-4">
      <div className="mx-auto max-w-screen-xl px-6">
        <p className="mb-2  text-center text-sm text-secondary-foreground ">
          <span className="hidden sm:inline">
            This is a dev preview for a project I'm working on that contains
            building blocks for digital commerce.
          </span>{" "}
          <ProjectInfoSheet />
        </p>
        <p className="text-center text-sm text-secondary-foreground">
          <span className="cursor-pointer">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;Acme Groceries
          </span>
        </p>
      </div>
    </div>
  );
}
