export default function ProtectedRoute({ children }) {
  return (
    <div>
      <h3>ProtectedRoute Placeholder</h3>
      <p>This route is temporarily unprotected.</p>
      {children}
    </div>
  );
}
