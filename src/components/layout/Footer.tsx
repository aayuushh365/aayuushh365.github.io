export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-text-secondary">
            Designed &amp; Built by Aayush Kumar Singh
          </p>
          <p className="text-xs text-text-secondary/50">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
