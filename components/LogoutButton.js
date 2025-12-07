export default function LogoutButton() {
  const logout = async () => {
    await fetch("/api/logout");
    window.location.href = "/login";
  };

  return (
    <button
      onClick={logout}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
    >
      Logout
    </button>
  );
}
