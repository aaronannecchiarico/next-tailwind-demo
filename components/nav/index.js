export default function NavBar(props) {
  return (
    <nav class="flex items-center justify-between flex-wrap light-coral p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* path from props */}
        </svg>
        <span class="font-semibold light-cyan text-xl tracking-tight">
          Title
        </span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">{/* links */}</div>
      </div>
    </nav>
  );
}
