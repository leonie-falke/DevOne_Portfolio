

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto">
      <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded" />
      <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
      <textarea placeholder="Message" className="p-2 border border-gray-300 rounded h-32"></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
    </form>
  );
}