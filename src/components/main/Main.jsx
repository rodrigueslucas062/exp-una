import Links from "./links";

export function Main() {
  return (
    <section id="Expo-Una" className="rounded-2xl pt-24">
      <div className="flex flex-col items-center pt-24">
        <span className="mb-1 text-xl font-medium text-white">Expo Una</span>
        <span className="text-sm font-semibold mb-6 text-gray-300">texto de teste</span>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Links />
      </div>
    </section>
  );
}
