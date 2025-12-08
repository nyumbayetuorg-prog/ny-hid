export default function ProtectedRoute({ children }) {
  return (
    <div>
      <h3>ProtectedRoute Placeholder</h3>
      <p>This route is temporarily unprotected.</p>
      {children}
    </div>
  );
}
// Temporary placeholder to prevent Vercel build failure.
// You can replace this later with real authentication logic.

export default function ProtectedRoute({ children }) {
  return children;
}
